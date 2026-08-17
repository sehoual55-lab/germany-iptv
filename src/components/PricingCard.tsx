"use client";

import { useState } from "react";
import {
  EXTRA_CONNECTION_DISCOUNT,
  formatAmount,
  priceForConnections,
  type LocaleCode,
  type PackageConfig,
} from "@/config/site.config";
import { getDictionary } from "@/locales";
import { IconCheck, IconSparkle, IconPackage } from "./Icons";

export default function PricingCard({
  locale,
  pkg,
  onSelect,
}: {
  locale: LocaleCode;
  pkg: PackageConfig;
  onSelect: (id: PackageConfig["id"], connections: number) => void;
}) {
  const t = getDictionary(locale);
  const p = t.packages;

  const [connections, setConnections] = useState(pkg.devices);
  const total = priceForConnections(pkg, connections);
  const discountPct = Math.round(EXTRA_CONNECTION_DISCOUNT * 100);

  const label = (key: string): string => {
    const entry = p.featureLabels[key];
    if (typeof entry === "function") {
      return entry(key === "connections" ? connections : pkg.months);
    }
    return entry ?? key;
  };

  const badgeText =
    pkg.badge === "popular" ? p.badgePopular : pkg.badge === "bestValue" ? p.badgeBestValue : null;

  return (
    <div
      className={`neon-card flex h-full flex-col rounded-[1.75rem] p-6 sm:p-7 ${
        pkg.featured ? "neon-card-featured lg:-translate-y-3" : "hover:-translate-y-1.5"
      }`}
    >
      {badgeText ? (
        <span
          className={`absolute -top-3.5 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] ${
            pkg.badge === "popular"
              ? "neon-badge bg-linear-to-r from-gold-200 via-gold-400 to-gold-500 text-ink-950"
              : "neon-badge-red bg-linear-to-r from-flag-red to-flag-red-soft text-white"
          }`}
        >
          {pkg.badge === "popular" ? (
            <IconPackage className="h-3.5 w-3.5" />
          ) : (
            <IconSparkle className="h-3.5 w-3.5" />
          )}
          {badgeText}
        </span>
      ) : null}

      {/* Tier + duration */}
      <h3 className="mt-1 text-2xl font-black tracking-tight text-mist-100 sm:text-[1.7rem]">
        {pkg.name}
      </h3>
      <p className="mt-1.5 flex flex-wrap items-baseline gap-x-2 text-sm text-mist-400">
        <span>{p.durationLine(pkg.months)}</span>
        {pkg.bonusMonths > 0 ? (
          <span className="font-semibold text-gold-300">{p.bonusLine(pkg.bonusMonths)}</span>
        ) : null}
      </p>

      {/* Price */}
      <div className="mt-6 min-h-16">
        {total !== null ? (
          <p className="flex flex-wrap items-baseline gap-x-2">
            <span className="text-gradient-gold text-[2.6rem] font-black leading-none tracking-tight sm:text-5xl">
              {formatAmount(total)}
            </span>
            <span className="text-xs text-mist-500">{p.perDuration(pkg.months)}</span>
          </p>
        ) : (
          <p className="text-lg font-bold text-gold-200">{p.priceOnRequest}</p>
        )}
      </div>

      {/* Connection stepper */}
      <div className="mt-6 rounded-2xl border border-gold-400/20 bg-ink-950/50 p-2.5 shadow-[inset_0_0_20px_rgba(229,184,73,0.07)]">
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setConnections((c) => Math.max(1, c - 1))}
            disabled={connections <= 1}
            aria-label={p.connections.decrease}
            className="neon-step flex h-9 w-9 items-center justify-center rounded-xl text-lg font-bold leading-none disabled:cursor-not-allowed disabled:opacity-30"
          >
            −
          </button>
          <p className="flex items-baseline gap-1.5 text-sm">
            <span className="text-lg font-black text-gold-100">{connections}</span>
            <span className="text-mist-400">
              {connections === 1 ? p.connections.one : p.connections.many}
            </span>
          </p>
          <button
            type="button"
            onClick={() => setConnections((c) => Math.min(pkg.maxConnections, c + 1))}
            disabled={connections >= pkg.maxConnections}
            aria-label={p.connections.increase}
            className="neon-step flex h-9 w-9 items-center justify-center rounded-xl text-lg font-bold leading-none disabled:cursor-not-allowed disabled:opacity-30"
          >
            +
          </button>
        </div>
      </div>
      <p className="mt-2.5 text-center text-[11px] leading-relaxed text-mist-500">
        {p.connections.note(discountPct)}
      </p>

      {/* Features */}
      <div className="neon-divider mt-6" />
      <ul className="mt-5 flex-1 space-y-3">
        {pkg.featureKeys.map((key) => (
          <li key={key} className="flex items-start gap-2.5 text-sm leading-relaxed text-mist-300">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-300 shadow-[0_0_8px_rgba(229,184,73,0.4)]">
              <IconCheck className="h-3 w-3" />
            </span>
            <span>{label(key)}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => onSelect(pkg.id, connections)}
        className={`mt-7 inline-flex w-full items-center justify-center rounded-full py-3.5 text-sm font-bold transition-all duration-300 active:scale-[0.98] ${
          pkg.featured
            ? "neon-btn bg-linear-to-r from-gold-200 via-gold-400 to-gold-300 text-ink-950"
            : "neon-outline"
        }`}
      >
        {p.cta}
      </button>
    </div>
  );
}
