import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PricingSection from "@/components/PricingSection";
import TrustSection from "@/components/TrustSection";
import {
  CtaBanner,
  FaqSection,
  FeaturesSection,
  GuidesSection,
  HowItWorksSection,
} from "@/components/sections";
import DeviceTiles from "@/components/DeviceTiles";
import InstallationSection from "@/components/InstallationSection";
import IntroSection from "@/components/IntroSection";
import { JsonLd, Section, SectionHeading } from "@/components/ui";
import { IconInfo, IconScale, IconGlobe } from "@/components/Icons";
import SupportButton from "@/components/SupportButton";
import { buildMetadata, faqSchema } from "@/lib/seo";
import tr from "@/locales/tr";
import trHome from "@/locales/tr-home";

export const metadata: Metadata = buildMetadata({
  locale: "tr",
  path: "/tr/",
  title: "Germany IPTV – Almanya IPTV Paketleri ve Kurulum Rehberi",
  description:
    "Germany IPTV hakkında bilgi alın; Almanya içeriklerine yönelik yasal seçenekleri, uyumlu cihazları, paketleri ve IPTV kurulum adımlarını keşfedin.",
});

const HOME_FAQ = tr.faq.items.slice(0, 5);

export default function TurkishHomePage() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQ)} />

      <Hero locale="tr" packagesHref="#paketler" howHref="#nasil-calisir" />

      {/* Germany IPTV Nedir? */}
      <IntroSection locale="tr" eyebrow="Bilgi" />

      {/* Türkiye'den Almanya Yayınları Nasıl İzlenir? */}
      <Section className="border-y border-white/5 bg-ink-900/40">
        <SectionHeading
          eyebrow="Rehber"
          title={trHome.watching.heading}
          subtitle={trHome.watching.intro}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {trHome.watching.blocks.map((block) => (
            <article key={block.title} className="glass h-full rounded-3xl p-6 sm:p-7">
              <h3 className="text-lg font-semibold text-mist-100">{block.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist-400">{block.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <article className="glass-soft rounded-3xl p-6 sm:p-7">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-gold-300">
              <IconGlobe className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-mist-100">
              {trHome.watching.serversHeading}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-mist-400">{trHome.watching.serversBody}</p>
          </article>

          <article className="glass-soft rounded-3xl p-6 sm:p-7">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-flag-red/15 text-gold-200">
              <IconScale className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-mist-100">
              {trHome.watching.legalHeading}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-mist-400">{trHome.watching.legalBody}</p>
          </article>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <SupportButton label={tr.supportButton} variant="outline" />
          <p className="flex max-w-xl items-start gap-2 text-xs leading-relaxed text-mist-500">
            <IconInfo className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{trHome.watching.ctaNote}</span>
          </p>
        </div>
      </Section>

      <PricingSection locale="tr" />
      <FeaturesSection locale="tr" />
      <HowItWorksSection locale="tr" />

      {/* Karşılaştırma */}
      <Section className="border-y border-white/5 bg-ink-900/40">
        <SectionHeading title={trHome.comparison.heading} subtitle={trHome.comparison.subheading} />
        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-white/10">
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">{trHome.comparison.heading}</caption>
            <thead className="bg-white/[0.04]">
              <tr>
                <th scope="col" className="p-4 font-semibold text-mist-200">
                  &nbsp;
                </th>
                <th scope="col" className="p-4 font-semibold text-gold-200">
                  IPTV
                </th>
                <th scope="col" className="p-4 font-semibold text-mist-200">
                  Uydu / Kablo
                </th>
              </tr>
            </thead>
            <tbody>
              {trHome.comparison.rows.map((row) => (
                <tr key={row.label} className="border-t border-white/10 align-top">
                  <th scope="row" className="p-4 font-semibold text-mist-200">
                    {row.label}
                  </th>
                  <td className="p-4 leading-relaxed text-mist-400">{row.iptv}</td>
                  <td className="p-4 leading-relaxed text-mist-400">{row.classic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <DeviceTiles locale="tr" />
      <InstallationSection locale="tr" />
      <GuidesSection locale="tr" />
      <FaqSection locale="tr" items={HOME_FAQ} moreHref="/tr/sss/" />
      <TrustSection locale="tr" />
      <CtaBanner locale="tr" primaryHref="#paketler" />
    </>
  );
}
