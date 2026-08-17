"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { LocaleCode } from "@/config/site.config";
import { getDictionary } from "@/locales";
import LanguageSwitcher from "./LanguageSwitcher";
import SupportButton from "./SupportButton";
import { IconClose, IconMenu } from "./Icons";

export default function Header({ locale }: { locale: LocaleCode }) {
  const t = getDictionary(locale);
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when the route changes.
  // Adjusting state during render (instead of in an effect) avoids a cascading re-render.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    if (menuOpen) setMenuOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const homeHref = locale === "de" ? "/" : "/tr/";

  const isActive = (href: string) => {
    if (href.includes("#")) return false;
    return pathname === href || `${pathname}/` === href;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink-950/85 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-white/5 bg-ink-950/55 backdrop-blur-md"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
      >
        {t.a11y.skipToContent}
      </a>

      <div className="wrap flex h-16 items-center justify-between gap-3 sm:h-20">
        {/* Logo */}
        <Link href={homeHref} className="group flex items-center gap-2.5" aria-label={t.brand.name}>
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-gold-300 to-gold-600 shadow-[0_10px_30px_-12px_rgba(229,184,73,0.9)]">
            <span className="absolute inset-[3px] rounded-[9px] bg-ink-950" />
            <span className="relative text-[13px] font-black tracking-tight text-gold-300">GI</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="whitespace-nowrap text-[12px] font-black tracking-[0.14em] text-mist-100 sm:text-sm sm:tracking-[0.16em]">
              GERMANY <span className="text-gradient-gold">IPTV</span>
            </span>
            <span className="mt-1 hidden text-[10px] font-medium tracking-wide text-mist-500 sm:block">
              {t.brand.tagline}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label={locale === "de" ? "Hauptnavigation" : "Ana menü"} className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {t.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-gold-200"
                      : "text-mist-300 hover:bg-white/5 hover:text-mist-100"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <span id="lang-label" className="sr-only">
            {t.a11y.languageSelector}
          </span>
          <LanguageSwitcher locale={locale} labelledBy="lang-label" />
          <span className="hidden lg:block">
            <SupportButton label={t.supportButton} compact className="whitespace-nowrap" />
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
            className="glass-soft flex h-10 w-10 items-center justify-center rounded-full text-mist-100 xl:hidden"
          >
            {menuOpen ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="border-t border-white/10 bg-ink-950/95 backdrop-blur-xl xl:hidden"
      >
        <nav aria-label={locale === "de" ? "Mobile Navigation" : "Mobil menü"} className="wrap py-5">
          <ul className="flex flex-col gap-1">
            {t.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-mist-200 transition-colors hover:bg-white/5 hover:text-gold-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <SupportButton label={t.supportButton} className="mt-5 w-full" />
        </nav>
      </div>
    </header>
  );
}
