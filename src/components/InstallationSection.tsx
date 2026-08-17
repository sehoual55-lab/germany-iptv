import type { LocaleCode } from "@/config/site.config";
import { getDictionary } from "@/locales";
import { ICON_MAP, IconCheck, IconInfo } from "./Icons";
import SupportButton from "./SupportButton";
import { Section, SectionHeading } from "./ui";

/**
 * "Setup for your device" — one card per device family with the app type
 * and the three concrete steps. Uses in-house line icons only; no vendor logos.
 */
export default function InstallationSection({ locale }: { locale: LocaleCode }) {
  const t = getDictionary(locale);
  const s = t.installation;

  return (
    <Section id={s.id} className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-10 h-[26rem] w-[52rem] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[130px]" />
        <div className="absolute -bottom-24 right-0 h-[20rem] w-[20rem] rounded-full bg-flag-red/10 blur-[120px]" />
      </div>

      <SectionHeading eyebrow={s.eyebrow} title={s.heading} subtitle={s.subheading} />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {s.items.map((item) => {
          const Icon = ICON_MAP[item.icon] ?? ICON_MAP.tv;
          return (
            <article
              key={item.title}
              className="glass group rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/35"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-gold-400/20 to-flag-red/10 text-gold-300 ring-1 ring-inset ring-white/10">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-tight text-mist-100">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-mist-500">
                    <span className="text-mist-400">{s.appLabel}:</span> {item.apps}
                  </p>
                </div>
              </div>

              <ol className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                {item.steps.map((step) => (
                  <li key={step} className="flex items-start gap-2.5 text-sm leading-relaxed text-mist-300">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </article>
          );
        })}
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 text-center">
        <SupportButton label={s.cta} variant="outline" />
        <p className="flex max-w-2xl items-start gap-2 text-xs leading-relaxed text-mist-500">
          <IconInfo className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{s.disclaimer}</span>
        </p>
      </div>
    </Section>
  );
}
