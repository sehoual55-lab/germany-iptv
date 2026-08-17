import type { ReactNode } from "react";
import type { LocaleCode } from "@/config/site.config";
import { getDictionary } from "@/locales";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import FAQAccordion, { type FaqItem } from "./FAQAccordion";
import GuideCard from "./GuideCard";
import { AmbientGlow, JsonLd, Prose, Section } from "./ui";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
import { CtaBanner } from "./sections";

/**
 * Shared shell for every guide, FAQ, contact and legal page:
 * breadcrumbs (visible + schema), one H1, article body, optional FAQ block
 * (rendered visibly, so the FAQ schema always matches the page) and
 * related internal links.
 */
export default function ArticlePage({
  locale,
  crumbs,
  title,
  lead,
  children,
  faq,
  faqHeading,
  after,
  related,
  ctaHref,
  hideCta = false,
}: {
  locale: LocaleCode;
  crumbs: Crumb[];
  title: string;
  lead?: string;
  children: ReactNode;
  /** Full-width block rendered between the article body and the FAQ. */
  after?: ReactNode;
  faq?: readonly FaqItem[];
  faqHeading?: string;
  related?: { href: string; title: string; body: string }[];
  ctaHref?: string;
  hideCta?: boolean;
}) {
  const t = getDictionary(locale);
  const schema: object[] = [breadcrumbSchema(crumbs)];
  if (faq && faq.length > 0) schema.push(faqSchema([...faq]));

  return (
    <>
      <JsonLd data={schema} />

      <div className="relative">
        <AmbientGlow />
        <Breadcrumbs locale={locale} items={crumbs} />

        <div className="wrap pb-4 pt-8 sm:pt-10">
          <h1 className="max-w-4xl text-balance text-3xl font-black leading-tight tracking-tight text-mist-100 sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {lead ? (
            <p className="mt-5 max-w-3xl text-pretty text-base leading-relaxed text-mist-400 sm:text-lg">
              {lead}
            </p>
          ) : null}
        </div>
      </div>

      <Section tight>
        <article className="mx-auto max-w-3xl">
          <Prose>{children}</Prose>
        </article>
      </Section>

      {after}

      {faq && faq.length > 0 ? (
        <Section tight className="border-y border-white/5 bg-ink-900/40">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold text-mist-100 sm:text-3xl">
              {faqHeading ?? t.faq.heading}
            </h2>
            <FAQAccordion items={faq} />
          </div>
        </Section>
      ) : null}

      {related && related.length > 0 ? (
        <Section tight>
          <h2 className="text-2xl font-bold text-mist-100 sm:text-3xl">{t.guides.heading}</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
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
      ) : null}

      {!hideCta ? (
        <CtaBanner locale={locale} primaryHref={ctaHref ?? (locale === "de" ? "/iptv-pakete/" : "/tr/#paketler")} />
      ) : null}
    </>
  );
}
