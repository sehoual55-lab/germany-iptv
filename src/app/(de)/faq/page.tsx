import type { Metadata } from "next";
import ArticlePage from "@/components/ArticlePage";
import { buildMetadata } from "@/lib/seo";
import { relatedGuides } from "@/lib/related";
import de from "@/locales/de";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  path: "/faq/",
  title: "FAQ – Antworten zu Germany IPTV, Geräten und Einrichtung",
  description:
    "Antworten auf die häufigsten Fragen zu Germany IPTV: Funktionsweise, kompatible Geräte, M3U, Einrichtungsdauer, Nutzung auf mehreren Geräten, Rechtslage und Support.",
});

const CRUMBS = [
  { name: "Startseite", url: "/" },
  { name: "FAQ", url: "/faq/" },
];

export default function FaqPage() {
  return (
    <ArticlePage
      locale="de"
      crumbs={CRUMBS}
      title="Häufig gestellte Fragen zu Germany IPTV"
      lead="Neun Fragen, die uns am häufigsten erreichen – kurz, konkret und ohne Marketingversprechen beantwortet."
      faq={de.faq.items}
      faqHeading="Alle Fragen im Überblick"
      related={relatedGuides("de", "")}
    >
      <p>
        Diese Seite bündelt die Fragen, die vor und nach einer Bestellung am häufigsten gestellt
        werden. Ausführlichere Erklärungen finden Sie in den einzelnen Ratgebern: technische
        Grundlagen im <Link href="/iptv-deutschland/">Überblick zu IPTV in Deutschland</Link>, die
        praktische Umsetzung unter <Link href="/iptv-einrichten/">IPTV einrichten</Link>, die
        Gerätefrage unter <Link href="/iptv-geraete/">Kompatible IPTV-Geräte</Link> und die
        rechtliche Einordnung unter{" "}
        <Link href="/iptv-in-deutschland-legal/">Ist IPTV in Deutschland legal?</Link>
      </p>
      <p>
        Ist Ihre Frage nicht dabei? Dann schreiben Sie uns über die{" "}
        <Link href="/kontakt/">Kontaktseite</Link> – wir antworten auf Deutsch und auf Türkisch.
      </p>
    </ArticlePage>
  );
}
