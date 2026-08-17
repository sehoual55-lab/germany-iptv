"use client";

import { useState } from "react";
import { PACKAGES, type LocaleCode, type PackageConfig } from "@/config/site.config";
import { getDictionary } from "@/locales";
import { Section, SectionHeading } from "./ui";
import { IconInfo } from "./Icons";
import PricingCard from "./PricingCard";
import CheckoutModal from "./CheckoutModal";

export default function PricingSection({
  locale,
  headingLevel = "h2",
}: {
  locale: LocaleCode;
  headingLevel?: "h2" | "h1";
}) {
  const t = getDictionary(locale);
  const [selected, setSelected] = useState<PackageConfig["id"] | null>(null);
  const [connections, setConnections] = useState(1);
  const [open, setOpen] = useState(false);

  const openWith = (id: PackageConfig["id"], conns: number) => {
    setSelected(id);
    setConnections(conns);
    setOpen(true);
  };

  return (
    <Section id={t.packages.id} wide className="relative overflow-hidden">
      {/* Colour behind the cards so their backdrop-blur has something to blur. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[38%] h-[26rem] w-[58rem] -translate-x-1/2 rounded-[50%] bg-gold-500/30 blur-[90px]" />
        <div className="absolute bottom-[12%] left-[4%] h-[24rem] w-[24rem] rounded-full bg-flag-red/28 blur-[85px]" />
        <div className="absolute right-[2%] top-[30%] h-[26rem] w-[26rem] rounded-full bg-[#2b4bb8]/28 blur-[85px]" />
        <div className="absolute left-[30%] top-[62%] h-[18rem] w-[18rem] rounded-full bg-gold-300/22 blur-[70px]" />
        <div className="surface-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <SectionHeading as={headingLevel} title={t.packages.heading} subtitle={t.packages.subheading} />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
        {PACKAGES.filter((pkg) => !pkg.hiddenOnGrid).map((pkg) => (
          <PricingCard key={pkg.id} locale={locale} pkg={pkg} onSelect={openWith} />
        ))}
      </div>

      <p className="mx-auto mt-8 flex max-w-2xl items-start justify-center gap-2.5 text-center text-xs leading-relaxed text-mist-500">
        <IconInfo className="mt-0.5 h-4 w-4 shrink-0 text-mist-500" />
        <span>{t.packages.note}</span>
      </p>

      <CheckoutModal
        locale={locale}
        open={open}
        selectedId={selected}
        connections={connections}
        onConnectionsChange={setConnections}
        onSelect={setSelected}
        onClose={() => setOpen(false)}
      />
    </Section>
  );
}
