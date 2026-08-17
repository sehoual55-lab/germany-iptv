import Link from "next/link";
import {
  PHONE_NUMBER,
  SUPPORT_EMAIL,
  WHATSAPP_NUMBER,
  mailtoLink,
  telLink,
  whatsappLink,
  type LocaleCode,
} from "@/config/site.config";
import { getDictionary } from "@/locales";
import { IconChat, IconMail, IconPhone } from "./Icons";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="text-sm text-mist-400 transition-colors hover:text-mist-100"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer({ locale }: { locale: LocaleCode }) {
  const t = getDictionary(locale);
  const hasPhone = PHONE_NUMBER.replace(/[^0-9]/g, "").length >= 8;
  const hasWhatsapp = WHATSAPP_NUMBER.replace(/[^0-9]/g, "").length >= 8;

  return (
    <footer className="relative mt-8 border-t border-white/10 bg-ink-900">
      <div className="wrap py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
              {t.footer.columns.brand}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-mist-400">{t.footer.about}</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <a
                  href={mailtoLink}
                  className="inline-flex items-center gap-2 text-mist-400 transition-colors hover:text-gold-200"
                >
                  <IconMail className="h-4 w-4 shrink-0" />
                  <span className="break-all">{SUPPORT_EMAIL}</span>
                </a>
              </li>
              {hasPhone ? (
                <li>
                  <a
                    href={telLink}
                    className="inline-flex items-center gap-2 text-mist-400 transition-colors hover:text-gold-200"
                  >
                    <IconPhone className="h-4 w-4 shrink-0" />
                    {PHONE_NUMBER}
                  </a>
                </li>
              ) : null}
              {hasWhatsapp ? (
                <li>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-mist-400 transition-colors hover:text-gold-200"
                  >
                    <IconChat className="h-4 w-4 shrink-0" />
                    {t.footer.whatsappLabel}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <FooterColumn title={t.footer.columns.navigation} links={t.footer.navigation} />
          <FooterColumn title={t.footer.columns.guides} links={t.footer.guides} />
          <FooterColumn title={t.footer.columns.service} links={t.footer.service} />
          <FooterColumn title={t.footer.columns.legal} links={t.footer.legal} />
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
          <p className="text-xs leading-relaxed text-mist-500">{t.trust.legalPrinciple}</p>
          <p className="mt-3 text-xs leading-relaxed text-mist-500">{t.footer.disclaimer}</p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-mist-500">{t.footer.copyright}</p>
          <div className="flex items-center gap-3 text-xs text-mist-500">
            <span aria-hidden className="inline-flex h-3 w-5 overflow-hidden rounded-[2px]">
              <span className="h-full w-1/3 bg-ink-950" />
              <span className="h-full w-1/3 bg-flag-red" />
              <span className="h-full w-1/3 bg-gold-400" />
            </span>
            <span>{locale === "de" ? "Ausrichtung: Deutschland" : "Odak: Almanya"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
