import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PricingSection from "@/components/PricingSection";
import TrustSection from "@/components/TrustSection";
import { CtaBanner, FaqSection, FeaturesSection, GuidesSection, HowItWorksSection } from "@/components/sections";
import DeviceTiles from "@/components/DeviceTiles";
import InstallationSection from "@/components/InstallationSection";
import IntroSection from "@/components/IntroSection";
import { JsonLd } from "@/components/ui";
import { buildMetadata, faqSchema } from "@/lib/seo";
import de from "@/locales/de";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  path: "/",
  title: "Germany IPTV – IPTV Deutschland Pakete & Einrichtung",
  description:
    "Entdecken Sie Germany IPTV mit flexiblen Paketen, kompatiblen Geräten, einfacher Einrichtung und persönlicher Unterstützung für Deutschland.",
});

const HOME_FAQ = de.faq.items.slice(0, 5);

export default function GermanHomePage() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQ)} />

      <Hero locale="de" packagesHref="#pakete" howHref="#so-funktioniert-es" />

      <IntroSection locale="de" eyebrow="Überblick" />

      <PricingSection locale="de" />
      <FeaturesSection locale="de" />
      <HowItWorksSection locale="de" />
      <DeviceTiles locale="de" />
      <InstallationSection locale="de" />
      <GuidesSection locale="de" />
      <FaqSection locale="de" items={HOME_FAQ} moreHref="/faq/" />
      <TrustSection locale="de" />
      <CtaBanner locale="de" primaryHref="/iptv-pakete/" />
    </>
  );
}
