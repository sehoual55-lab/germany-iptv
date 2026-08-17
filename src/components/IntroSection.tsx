import type { LocaleCode } from "@/config/site.config";
import { getDictionary } from "@/locales";
import { Section, SectionHeading } from "./ui";

/**
 * Editorial intro block: heading plus quick-facts on the left,
 * explanatory copy on the right.
 */
export default function IntroSection({
  locale,
  eyebrow,
}: {
  locale: LocaleCode;
  eyebrow: string;
}) {
  const t = getDictionary(locale);

  return (
    <Section tight>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
        <div>
          <SectionHeading align="left" eyebrow={eyebrow} title={t.intro.heading} />
          <dl className="mt-8 space-y-3">
            {t.intro.facts.map((fact) => (
              <div
                key={fact.label}
                className="glass-soft flex flex-col gap-1 rounded-2xl px-5 py-4 sm:flex-row sm:items-baseline sm:gap-4"
              >
                <dt className="shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-gold-300 sm:w-32">
                  {fact.label}
                </dt>
                <dd className="text-sm leading-relaxed text-mist-300">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-4 text-base leading-relaxed text-mist-400">
          {t.intro.body.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
