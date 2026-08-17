"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  ACTIVATION_TIME,
  COUNTRY_CODES,
  DEFAULT_COUNTRY,
  ORDER_MODE,
  ORDER_WEBHOOK_TOKEN,
  ORDER_WEBHOOK_URL,
  PACKAGES,
  PAYMENT_CHECKOUT_URL,
  PAYMENT_METHODS,
  WHATSAPP_NUMBER,
  formatAmount,
  priceForConnections,
  roundCents,
  type LocaleCode,
  type PackageConfig,
  type PaymentMethodId,
} from "@/config/site.config";
import { getDictionary } from "@/locales";
import { IconArrow, IconChat, IconCheck, IconClose, IconShield } from "./Icons";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  device: string;
}

const EMPTY_FORM: FormState = { fullName: "", email: "", phone: "", device: "" };

type Status = "idle" | "sending" | "done" | "error";

export default function CheckoutModal({
  locale,
  open,
  selectedId,
  connections,
  onConnectionsChange,
  onSelect,
  onClose,
}: {
  locale: LocaleCode;
  open: boolean;
  selectedId: PackageConfig["id"] | null;
  connections: number;
  onConnectionsChange: (n: number) => void;
  onSelect: (id: PackageConfig["id"]) => void;
  onClose: () => void;
}) {
  const t = getDictionary(locale);
  const c = t.checkout;
  const uid = useId();
  const dialogRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [country, setCountry] = useState(DEFAULT_COUNTRY[locale]);
  const [method, setMethod] = useState<PaymentMethodId>(
    PAYMENT_METHODS.find((m) => m.enabled)?.id ?? "paypal"
  );
  const [status, setStatus] = useState<Status>("idle");

  const pkg = useMemo(() => PACKAGES.find((p) => p.id === selectedId) ?? PACKAGES[0], [selectedId]);

  // Reset when the modal opens — during render, not in an effect.
  const [wasOpen, setWasOpen] = useState(open);
  if (wasOpen !== open) {
    setWasOpen(open);
    if (open) {
      setStatus("idle");
      setErrors({});
    }
  }

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href],button:not([disabled]),input:not([disabled]),select,textarea,[tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  const dial = COUNTRY_CODES.find((x) => x.iso === country)?.dial ?? "+49";
  const totalAmount = priceForConnections(pkg, connections);
  const totalLabel = totalAmount !== null ? formatAmount(totalAmount) : t.packages.priceOnRequest;
  const durationText =
    t.packages.durationLine(pkg.months) +
    (pkg.bonusMonths > 0 ? ` · ${t.packages.bonusLine(pkg.bonusMonths)}` : "");

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) next.fullName = c.required;
    if (!form.email.trim()) next.email = c.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) next.email = c.invalidEmail;
    if (!form.phone.trim()) next.phone = c.required;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async () => {
    if (!validate()) return;
    setStatus("sending");

    const fullPhone = `${dial} ${form.phone.trim()}`;
    const payload = {
      token: ORDER_WEBHOOK_TOKEN,
      date: new Date().toISOString(),
      name: form.fullName.trim(),
      email: form.email.trim(),
      phone: fullPhone,
      plan: pkg.name,
      months: pkg.months + pkg.bonusMonths,
      duration: durationText,
      price: totalAmount !== null ? roundCents(totalAmount) : "",
      priceLabel: totalLabel,
      connections,
      payment: ORDER_MODE === "whatsapp" ? "WhatsApp" : method,
      device: form.device.trim(),
      language: locale,
      status: "Nouveau",
    };

    // Logging is best-effort on purpose: if the Sheets webhook is unreachable
    // we must NOT strand the customer, because the WhatsApp message itself
    // carries every detail of the order.
    if (ORDER_WEBHOOK_URL) {
      try {
        // text/plain keeps this a "simple" request, so the browser skips the
        // CORS preflight that Apps Script web apps cannot answer.
        await fetch(ORDER_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload),
          keepalive: true,
        });
      } catch (err) {
        console.warn("[checkout] order logging failed, continuing anyway", err);
      }
    }

    // The only genuinely fatal case: nowhere to hand the customer over to.
    const waDigits = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
    if (ORDER_MODE === "whatsapp" && waDigits.length < 8) {
      setStatus("error");
      return;
    }

    setStatus("done");

    window.setTimeout(() => {
      if (ORDER_MODE === "whatsapp") {
        const msg = c.waMessage({
          plan: pkg.name,
          duration: durationText,
          connections,
          total: totalLabel,
          name: payload.name,
          email: payload.email,
          phone: fullPhone,
        });
        window.open(
          `https://wa.me/${waDigits}?text=${encodeURIComponent(msg)}`,
          "_blank",
          "noopener"
        );
      } else {
        const active = PAYMENT_METHODS.find((m) => m.id === method);
        const url = new URL(active?.checkoutUrl || PAYMENT_CHECKOUT_URL);
        url.searchParams.set("plan", pkg.id);
        url.searchParams.set("months", String(pkg.months + pkg.bonusMonths));
        url.searchParams.set("connections", String(connections));
        url.searchParams.set("method", method);
        url.searchParams.set("lang", locale);
        window.location.href = url.toString();
      }
    }, 700);
  };

  const field = (
    name: keyof FormState,
    label: string,
    placeholder: string,
    type = "text",
    optional = false
  ) => (
    <div>
      <label htmlFor={`${uid}-${name}`} className="mb-2 block text-sm font-medium text-mist-200">
        {label}
      </label>
      <input
        id={`${uid}-${name}`}
        name={name}
        type={type}
        autoComplete={name === "fullName" ? "name" : name === "email" ? "email" : "off"}
        placeholder={placeholder}
        value={form[name]}
        required={!optional}
        aria-invalid={errors[name] ? true : undefined}
        aria-describedby={errors[name] ? `${uid}-${name}-err` : undefined}
        onChange={(e) => setForm((f) => ({ ...f, [name]: e.target.value }))}
        className={`w-full rounded-2xl border bg-ink-950/60 px-4 py-3.5 text-base text-mist-100 placeholder:text-mist-500 transition-colors focus:border-gold-400/70 focus:outline-none ${
          errors[name] ? "border-flag-red-soft" : "border-white/10"
        }`}
      />
      {errors[name] ? (
        <p id={`${uid}-${name}-err`} className="mt-1.5 text-xs text-flag-red-soft">
          {errors[name]}
        </p>
      ) : null}
    </div>
  );

  return (
    <div
      className="fixed inset-0 z-[100] flex items-stretch justify-center bg-ink-950/85 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${uid}-title`}
        className="flex h-full w-full flex-col overflow-hidden border-white/10 bg-ink-900 sm:h-auto sm:max-h-[92vh] sm:max-w-xl sm:rounded-3xl sm:border"
      >
        {/* Header */}
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-white/10 px-6 py-5">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-300">
              {c.eyebrow}
            </p>
            <h2 id={`${uid}-title`} className="mt-1 text-xl font-bold text-mist-100">
              {c.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.a11y.close}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-mist-300 transition-colors hover:bg-white/10 hover:text-mist-100"
          >
            <IconClose className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="modal-scroll flex-1 overflow-y-auto px-6 py-6">
          {status === "done" ? (
            <div className="py-10 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-400/15 text-gold-300">
                <IconShield className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-mist-100">{c.successHeading}</h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-mist-400">
                {ORDER_MODE === "whatsapp" ? c.successBody : c.successBodyPayment}
              </p>
              <p className="mt-3 text-xs text-mist-500">
                {c.activationNote(ACTIVATION_TIME[locale])}
              </p>
            </div>
          ) : status === "error" ? (
            <div className="py-10 text-center">
              <h3 className="text-lg font-semibold text-mist-100">{c.errorHeading}</h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-mist-400">
                {c.errorBody}
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-400/40 px-5 py-2.5 text-sm font-semibold text-gold-200 hover:bg-gold-400/10"
              >
                {c.retry}
                <IconArrow className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <>
              {/* Plan picker */}
              <fieldset>
                <legend className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-mist-500">
                  {c.planHeading}
                </legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {PACKAGES.map((p) => {
                    const amount = priceForConnections(p, connections);
                    const active = p.id === pkg.id;
                    const sub =
                      t.packages.durationLine(p.months) +
                      (p.bonusMonths > 0 ? ` · ${t.packages.bonusLine(p.bonusMonths)}` : "");
                    return (
                      <label
                        key={p.id}
                        className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition-all ${
                          active
                            ? "border-gold-400/70 bg-gold-400/[0.08] shadow-[0_0_22px_-6px_rgba(229,184,73,0.55)]"
                            : "border-white/10 bg-white/[0.02] hover:border-white/25"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`${uid}-plan`}
                          value={p.id}
                          checked={active}
                          onChange={() => onSelect(p.id)}
                          className="sr-only"
                        />
                        <span
                          aria-hidden
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                            active
                              ? "border-gold-400 bg-gold-400 text-ink-950"
                              : "border-white/25 text-transparent"
                          }`}
                        >
                          <IconCheck className="h-3.5 w-3.5" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-bold text-mist-100">
                            {p.name}
                          </span>
                          <span className="block truncate text-xs text-mist-500">{sub}</span>
                        </span>
                        <span className="shrink-0 text-base font-black text-gold-200">
                          {amount !== null ? formatAmount(amount) : "—"}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              {/* Connections */}
              <div className="mt-5 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-mist-100">{c.connectionHeading}</p>
                  <p className="mt-1 text-xs leading-relaxed text-mist-500">
                    {t.packages.connections.note(15)}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onConnectionsChange(Math.max(1, connections - 1))}
                    disabled={connections <= 1}
                    aria-label={t.packages.connections.decrease}
                    className="neon-step flex h-9 w-9 items-center justify-center rounded-xl text-lg font-bold leading-none disabled:opacity-30"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-lg font-black text-mist-100">
                    {connections}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      onConnectionsChange(Math.min(pkg.maxConnections, connections + 1))
                    }
                    disabled={connections >= pkg.maxConnections}
                    aria-label={t.packages.connections.increase}
                    className="neon-step flex h-9 w-9 items-center justify-center rounded-xl text-lg font-bold leading-none disabled:opacity-30"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Details */}
              <p className="mb-3 mt-7 text-[11px] font-bold uppercase tracking-[0.2em] text-mist-500">
                {c.detailsHeading}
              </p>
              <div className="space-y-4">
                {field("fullName", c.fields.fullName, c.placeholders.fullName)}
                {field("email", c.fields.email, c.placeholders.email, "email")}

                <div>
                  <label
                    htmlFor={`${uid}-phone`}
                    className="mb-2 block text-sm font-medium text-mist-200"
                  >
                    {c.fields.phone}
                  </label>
                  <div className="flex gap-2">
                    <label htmlFor={`${uid}-country`} className="sr-only">
                      {c.countryLabel}
                    </label>
                    <select
                      id={`${uid}-country`}
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-32 shrink-0 rounded-2xl border border-white/10 bg-ink-950/60 px-3 py-3.5 text-sm text-mist-100 focus:border-gold-400/70 focus:outline-none"
                    >
                      {COUNTRY_CODES.map((cc) => (
                        <option key={cc.iso + cc.dial} value={cc.iso} className="bg-ink-900">
                          {cc.iso} {cc.dial}
                        </option>
                      ))}
                    </select>
                    <input
                      id={`${uid}-phone`}
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder={c.placeholders.phone}
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      aria-invalid={errors.phone ? true : undefined}
                      className={`w-full rounded-2xl border bg-ink-950/60 px-4 py-3.5 text-base text-mist-100 placeholder:text-mist-500 focus:border-gold-400/70 focus:outline-none ${
                        errors.phone ? "border-flag-red-soft" : "border-white/10"
                      }`}
                    />
                  </div>
                  {errors.phone ? (
                    <p className="mt-1.5 text-xs text-flag-red-soft">{errors.phone}</p>
                  ) : null}
                </div>

                {field("device", c.fields.device, c.placeholders.device, "text", true)}
              </div>

              {/* Payment method — only when not handing over to WhatsApp */}
              {ORDER_MODE === "payment" ? (
                <fieldset className="mt-7">
                  <legend className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-mist-500">
                    {c.payment.heading}
                  </legend>
                  <div className="grid gap-2.5">
                    {PAYMENT_METHODS.filter((m) => m.enabled).map((m) => (
                      <label
                        key={m.id}
                        className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3.5 transition-colors ${
                          method === m.id
                            ? "border-gold-400/70 bg-gold-400/[0.08]"
                            : "border-white/10 bg-white/[0.02] hover:border-white/25"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`${uid}-method`}
                          value={m.id}
                          checked={method === m.id}
                          onChange={() => setMethod(m.id)}
                          className="h-4 w-4 accent-[#e5b849]"
                        />
                        <span className="text-sm font-medium text-mist-100">{c.payment[m.id]}</span>
                      </label>
                    ))}
                  </div>
                  <p className="mt-3 flex items-start gap-2.5 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-xs leading-relaxed text-mist-400">
                    <IconShield className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                    {c.payment.securityNote}
                  </p>
                </fieldset>
              ) : null}

              <p className="mt-6 text-xs leading-relaxed text-mist-500">{c.legalNote}</p>
            </>
          )}
        </div>

        {/* Sticky footer */}
        {status === "idle" || status === "sending" ? (
          <div className="flex shrink-0 items-center justify-between gap-4 border-t border-white/10 bg-ink-950/70 px-6 py-4 backdrop-blur-xl">
            <div>
              <p className="text-xs text-mist-500">{c.totalLabel}</p>
              <p className="text-gradient-gold text-2xl font-black">{totalLabel}</p>
            </div>
            <button
              type="button"
              onClick={submit}
              disabled={status === "sending"}
              className={`inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-300 active:scale-[0.98] disabled:opacity-60 ${
                ORDER_MODE === "whatsapp"
                  ? "bg-[#25d366] text-[#04240f] shadow-[0_0_22px_rgba(37,211,102,0.45)] hover:brightness-110"
                  : "neon-btn bg-linear-to-r from-gold-200 via-gold-400 to-gold-300 text-ink-950"
              }`}
            >
              {ORDER_MODE === "whatsapp" ? <IconChat className="h-4.5 w-4.5" /> : null}
              {status === "sending"
                ? c.sending
                : ORDER_MODE === "whatsapp"
                  ? c.submitWhatsapp
                  : c.submitPayment}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
