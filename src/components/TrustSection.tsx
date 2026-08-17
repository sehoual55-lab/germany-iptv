import type { LocaleCode } from "@/config/site.config";
import { getDictionary } from "@/locales";
import { Section, SectionHeading } from "./ui";
import { IconCheck, IconScale } from "./Icons";

export default function TrustSection({ locale }: { locale: LocaleCode }) {
  const t = getDictionary(locale);

  return (
    <Section className="border-y border-white/5 bg-ink-900/40">
      <SectionHeading title={t.trust.heading} subtitle={t.trust.subheading} />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {t.trust.items.map((item) => (
          <li key={item.title} className="glass-soft rounded-2xl p-5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold-400/12 text-gold-300">
              <IconCheck className="h-4.5 w-4.5" />
            </span>
            <h3 className="mt-4 text-sm font-semibold text-mist-100">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-mist-400">{item.body}</p>
          </li>
        ))}
      </ul>

      <div className="glass mx-auto mt-10 flex max-w-3xl items-start gap-4 rounded-2xl p-6">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-flag-red/15 text-gold-200">
          <IconScale className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-gold-300">
            {t.trust.legalHeading}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-mist-300">{t.trust.legalPrinciple}</p>
        </div>
      </div>
    </Section>
  );
}
