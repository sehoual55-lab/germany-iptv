import type { LocaleCode } from "@/config/site.config";
import { getDictionary } from "@/locales";
import { AmbientGlow, CtaLink } from "./ui";
import { IconCheck } from "./Icons";

export default function Hero({
  locale,
  packagesHref,
  howHref,
}: {
  locale: LocaleCode;
  packagesHref: string;
  howHref: string;
}) {
  const t = getDictionary(locale);

  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <AmbientGlow />
      <div
        aria-hidden
        className="surface-grid absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />

      <div className="wrap">
        <div className="mx-auto flex max-w-3xl animate-fade-up flex-col items-center text-center">
          <span className="glass-soft inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-200">
            <span aria-hidden className="inline-flex h-2.5 w-4 overflow-hidden rounded-[2px]">
              <span className="h-full w-1/3 bg-ink-950" />
              <span className="h-full w-1/3 bg-flag-red" />
              <span className="h-full w-1/3 bg-gold-400" />
            </span>
            {t.hero.eyebrow}
          </span>

          <h1 className="mt-7 text-balance text-4xl font-black leading-[1.08] tracking-tight text-mist-100 sm:text-5xl lg:text-6xl">
            {t.hero.h1.split("–")[0]}
            <span className="text-gradient-gold">–{t.hero.h1.split("–").slice(1).join("–")}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-mist-400 sm:text-lg">
            {t.hero.description}
          </p>

          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
            <CtaLink href={packagesHref} variant="primary" withArrow>
              {t.hero.ctaPrimary}
            </CtaLink>
            <CtaLink href={howHref} variant="secondary">
              {t.hero.ctaSecondary}
            </CtaLink>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {t.hero.trustLine.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-mist-300">
                <IconCheck className="h-4 w-4 shrink-0 text-gold-300" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
