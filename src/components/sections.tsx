import type { LocaleCode } from "@/config/site.config";
import { getDictionary } from "@/locales";
import { AmbientGlow, CtaLink, Section, SectionHeading } from "./ui";
import FeatureCard from "./FeatureCard";
import DeviceCard from "./DeviceCard";
import GuideCard from "./GuideCard";
import FAQAccordion, { type FaqItem } from "./FAQAccordion";
import SupportButton from "./SupportButton";
import { IconInfo } from "./Icons";

/* -------------------------------------------------------------------------- */

export function FeaturesSection({ locale }: { locale: LocaleCode }) {
  const t = getDictionary(locale);
  return (
    <Section id={t.features.id}>
      <SectionHeading title={t.features.heading} subtitle={t.features.subheading} />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.features.items.map((item) => (
          <FeatureCard key={item.title} icon={item.icon} title={item.title} body={item.body} />
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */

export function HowItWorksSection({ locale }: { locale: LocaleCode }) {
  const t = getDictionary(locale);
  return (
    <Section id={t.howItWorks.id} className="border-y border-white/5 bg-ink-900/40">
      <SectionHeading title={t.howItWorks.heading} subtitle={t.howItWorks.subheading} />
      <ol className="mt-12 grid gap-6 md:grid-cols-3">
        {t.howItWorks.steps.map((step) => (
          <li key={step.number} className="glass relative overflow-hidden rounded-3xl p-7">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-2 -top-6 text-7xl font-black text-white/[0.04]"
            >
              {step.number}
            </span>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-gold-300 to-gold-600 text-sm font-black text-ink-950">
              {step.number}
            </span>
            <h3 className="mt-5 text-lg font-semibold text-mist-100">{step.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-mist-400">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */

export function DevicesSection({ locale }: { locale: LocaleCode }) {
  const t = getDictionary(locale);
  return (
    <Section id={t.devices.id}>
      <SectionHeading title={t.devices.heading} subtitle={t.devices.subheading} />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.devices.items.map((item) => (
          <DeviceCard key={item.title} icon={item.icon} title={item.title} body={item.body} />
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center gap-4 text-center">
        <SupportButton label={t.devices.cta} variant="outline" />
        <p className="flex max-w-xl items-start gap-2 text-xs leading-relaxed text-mist-500">
          <IconInfo className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{t.devices.disclaimer}</span>
        </p>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */

export function GuidesSection({ locale }: { locale: LocaleCode }) {
  const t = getDictionary(locale);
  return (
    <Section className="border-y border-white/5 bg-ink-900/40">
      <SectionHeading title={t.guides.heading} subtitle={t.guides.subheading} />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.guides.items.map((item) => (
          <GuideCard
            key={item.href}
            href={item.href}
            title={item.title}
            body={item.body}
            readMore={t.guides.readMore}
          />
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */

export function FaqSection({
  locale,
  items,
  heading,
  subheading,
  moreHref,
}: {
  locale: LocaleCode;
  items?: readonly FaqItem[];
  heading?: string;
  subheading?: string;
  moreHref?: string;
}) {
  const t = getDictionary(locale);
  const list = items ?? t.faq.items;
  return (
    <Section id={t.faq.id}>
      <SectionHeading title={heading ?? t.faq.heading} subtitle={subheading ?? t.faq.subheading} />
      <div className="mx-auto mt-12 max-w-3xl">
        <FAQAccordion items={list} />
        {moreHref ? (
          <div className="mt-8 text-center">
            <CtaLink href={moreHref} variant="secondary" withArrow>
              {t.faq.moreLink}
            </CtaLink>
          </div>
        ) : null}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */

export function CtaBanner({ locale, primaryHref }: { locale: LocaleCode; primaryHref: string }) {
  const t = getDictionary(locale);
  return (
    <Section tight>
      <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-12 text-center sm:px-12 sm:py-16">
        <AmbientGlow />
        <h2 className="text-balance text-2xl font-bold text-mist-100 sm:text-3xl">{t.cta.heading}</h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-mist-400 sm:text-base">
          {t.cta.body}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaLink href={primaryHref} variant="primary" withArrow>
            {t.cta.primary}
          </CtaLink>
          <SupportButton label={t.cta.secondary} variant="secondary" />
        </div>
      </div>
    </Section>
  );
}
