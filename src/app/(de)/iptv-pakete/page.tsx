import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PricingSection from "@/components/PricingSection";
import TrustSection from "@/components/TrustSection";
import { CtaBanner, FaqSection, HowItWorksSection } from "@/components/sections";
import { AmbientGlow, JsonLd, Section, SectionHeading } from "@/components/ui";
import { IconCheck } from "@/components/Icons";
import { breadcrumbSchema, buildMetadata, faqSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  path: "/iptv-pakete/",
  title: "IPTV Pakete – Laufzeiten, Leistungen und Bestellung",
  description:
    "Alle Germany IPTV Pakete im Vergleich: 1, 3, 6 und 12 Monate mit Gerätekompatibilität, Einrichtungshilfe und sicherem Checkout. Preise transparent vor der Bestellung.",
});

const CRUMBS = [
  { name: "Startseite", url: "/" },
  { name: "IPTV Pakete", url: "/iptv-pakete/" },
];

const PAGE_FAQ = [
  {
    q: "Welches Germany IPTV Paket passt zu mir?",
    a: "Wenn Sie den Dienst zunächst kennenlernen möchten, ist die kurze Laufzeit die risikoärmste Wahl. Wer bereits weiß, dass das eigene Gerät funktioniert und den Zugang dauerhaft nutzen möchte, fährt mit einer längeren Laufzeit meist günstiger – der Gesamtbetrag steht vor der Bestellung fest.",
  },
  {
    q: "Wie werden die Preise angezeigt?",
    a: "Alle Preise werden in einer zentralen Konfigurationsdatei gepflegt und im Bestellvorgang als Gesamtbetrag angezeigt. Es gibt keine automatische Verlängerung ohne Ihre ausdrückliche Bestellung.",
  },
  {
    q: "Welche Zahlungsarten stehen zur Verfügung?",
    a: "Die verfügbaren Zahlungsarten werden im Checkout angezeigt. Die Zahlung selbst findet immer auf der gesicherten Seite des jeweiligen Zahlungsanbieters statt – Kartendaten werden auf dieser Website weder erfasst noch gespeichert.",
  },
  {
    q: "Kann ich das Paket später wechseln?",
    a: "Ja. Sie können nach Ablauf eine andere Laufzeit bestellen. Sprechen Sie den Support an, wenn Sie vorab klären möchten, welche Variante zu Ihrer Nutzung passt.",
  },
];

const INCLUDED = [
  {
    title: "Zugang für die gebuchte Laufzeit",
    body: "Die Laufzeit beginnt, sobald Sie die Einrichtungsinformationen erhalten haben.",
  },
  {
    title: "Allgemeine Einrichtungsschritte",
    body: "Verständliche Anleitung für Ihr kompatibles Gerät, auf Deutsch oder Türkisch.",
  },
  {
    title: "Erreichbarer Support",
    body: "Antwort per E-Mail oder Messenger bei Fragen zur Einrichtung.",
  },
  {
    title: "Transparente Gesamtsumme",
    body: "Der zu zahlende Betrag ist vor dem Absenden der Bestellung sichtbar.",
  },
  {
    title: "Sichere Zahlungsabwicklung",
    body: "Weiterleitung zur offiziellen Checkout-Seite des Zahlungsanbieters.",
  },
  {
    title: "Keine versteckten Zusatzkosten",
    body: "Es gibt keine Aktivierungsgebühr und keine stillschweigende Verlängerung.",
  },
];

export default function PackagesPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(CRUMBS), faqSchema(PAGE_FAQ)]} />

      <div className="relative">
        <AmbientGlow />
        <Breadcrumbs locale="de" items={CRUMBS} />
        <div className="wrap pb-2 pt-8 sm:pt-10">
          <h1 className="max-w-4xl text-balance text-3xl font-black leading-tight tracking-tight text-mist-100 sm:text-4xl lg:text-5xl">
            IPTV Pakete für Deutschland – Laufzeiten im Überblick
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-relaxed text-mist-400 sm:text-lg">
            Vier Laufzeiten, dieselbe Leistung, unterschiedliche Bindung. Auf dieser Seite sehen Sie,
            was in jedem Paket enthalten ist, wie die Bestellung abläuft und worauf Sie vor dem Kauf
            achten sollten.
          </p>
        </div>
      </div>

      <PricingSection locale="de" />

      <Section className="border-y border-white/5 bg-ink-900/40">
        <SectionHeading
          title="Was in jedem Paket enthalten ist"
          subtitle="Unabhängig von der Laufzeit bleibt der Leistungsumfang gleich – nur die Bindung und der Support-Level unterscheiden sich."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INCLUDED.map((item) => (
            <li key={item.title} className="glass rounded-3xl p-6">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold-400/12 text-gold-300">
                <IconCheck className="h-4.5 w-4.5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-mist-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-400">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <HowItWorksSection locale="de" />

      <Section tight>
        <div className="glass mx-auto max-w-3xl rounded-3xl p-7">
          <h2 className="text-xl font-bold text-mist-100">Vor der Bestellung prüfen</h2>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-mist-300">
            <li className="flex gap-3">
              <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
              Ist Ihr Gerät in der <Link className="text-gold-300 underline underline-offset-4" href="/iptv-geraete/">Geräteübersicht</Link> aufgeführt?
            </li>
            <li className="flex gap-3">
              <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
              Reicht Ihre Internetverbindung für die gewünschte Auflösung? Details dazu im{" "}
              <Link className="text-gold-300 underline underline-offset-4" href="/iptv-deutschland/">Überblick zu IPTV Deutschland</Link>.
            </li>
            <li className="flex gap-3">
              <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
              Haben Sie die{" "}
              <Link className="text-gold-300 underline underline-offset-4" href="/iptv-in-deutschland-legal/">rechtlichen Hinweise</Link>{" "}
              gelesen? Greifen Sie ausschließlich auf Inhalte zu, zu deren Nutzung Sie berechtigt sind.
            </li>
          </ul>
        </div>
      </Section>

      <FaqSection
        locale="de"
        items={PAGE_FAQ}
        heading="Fragen zu den Paketen"
        subheading="Was Kundinnen und Kunden vor der Bestellung am häufigsten wissen möchten."
        moreHref="/faq/"
      />

      <TrustSection locale="de" />
      <CtaBanner locale="de" primaryHref="#pakete" />
    </>
  );
}
