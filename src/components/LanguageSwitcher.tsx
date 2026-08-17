"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { LocaleCode } from "@/config/site.config";
import { LOCALES } from "@/locales";
import { alternatesFor } from "@/lib/routes";
import { IconChevron, IconGlobe } from "./Icons";

function normalise(path: string): string {
  if (!path) return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

/**
 * Language selector. Never redirects automatically — the visitor chooses.
 * Links to the exact counterpart page when one exists, otherwise to the
 * homepage of the other language.
 */
export default function LanguageSwitcher({
  locale,
  labelledBy,
}: {
  locale: LocaleCode;
  labelledBy: string;
}) {
  const pathname = normalise(usePathname() ?? "/");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const alt = alternatesFor(pathname);
  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  const targetFor = (code: LocaleCode) => {
    const mapped = alt[code];
    if (mapped) return mapped;
    return LOCALES.find((l) => l.code === code)?.home ?? "/";
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-labelledby={labelledBy}
        onClick={() => setOpen((v) => !v)}
        className="glass-soft flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-mist-200 transition-colors hover:text-gold-200"
      >
        <IconGlobe className="h-4 w-4 shrink-0 text-gold-300" />
        <span aria-hidden className="text-base leading-none">
          {current.flag}
        </span>
        <span className="hidden sm:inline">{current.label}</span>
        <IconChevron className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open ? (
        <div
          role="menu"
          className="glass absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-2xl p-1.5"
        >
          {LOCALES.map((l) => (
            <Link
              key={l.code}
              href={targetFor(l.code)}
              hrefLang={l.code === "de" ? "de-DE" : "tr-TR"}
              role="menuitem"
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                l.code === locale
                  ? "bg-gold-400/15 text-gold-200"
                  : "text-mist-300 hover:bg-white/5 hover:text-mist-100"
              }`}
            >
              <span aria-hidden className="text-base leading-none">
                {l.flag}
              </span>
              {l.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
