import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import ContactBlocks from "@/components/ContactBlocks";
import { buildMetadata } from "@/lib/seo";
import { ACTIVATION_TIME } from "@/config/site.config";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  path: "/kontakt/",
  title: "Kontakt – Support für Bestellung und Einrichtung",
  description:
    "So erreichen Sie den Germany IPTV Support: per E-Mail oder Messenger, auf Deutsch und Türkisch. Mit Hinweisen, welche Angaben eine schnelle Antwort ermöglichen.",
});

const CRUMBS = [
  { name: "Startseite", url: "/" },
  { name: "Kontakt", url: "/kontakt/" },
];

const FAQ = [
  {
    q: "Wie schnell bekomme ich eine Antwort?",
    a: "Wir beantworten Anfragen der Reihe nach. Anfragen mit Gerätebezeichnung, Player-Name und einer kurzen Fehlerbeschreibung lassen sich am schnellsten bearbeiten, weil keine Rückfragen nötig sind.",
  },
  {
    q: "In welchen Sprachen ist der Support erreichbar?",
    a: "Auf Deutsch und auf Türkisch. Englische Anfragen sind ebenfalls möglich.",
  },
  {
    q: "Kann ich vor der Bestellung Fragen stellen?",
    a: "Ja, ausdrücklich. Fragen zur Gerätekompatibilität oder zur passenden Laufzeit sind vor der Bestellung sinnvoller als danach.",
  },
];

export default function ContactPage() {
  return (
    <ArticlePage
      locale="de"
      crumbs={CRUMBS}
      title="Kontakt zum Germany IPTV Support"
      lead="Fragen zur Gerätekompatibilität, zur Bestellung oder zur Einrichtung? Schreiben Sie uns – auf Deutsch oder auf Türkisch."
      faq={FAQ}
      faqHeading="Fragen zum Kontakt"
      hideCta
    >
      <ContactBlocks locale="de" />

      <h2 id="schneller">So bekommen Sie schneller eine Antwort</h2>
      <p>
        Support-Anfragen zur Einrichtung lassen sich fast immer beim ersten Kontakt lösen, wenn drei
        Angaben enthalten sind:
      </p>
      <ul>
        <li>
          <strong>Gerät und Modell</strong> – zum Beispiel „Samsung Smart-TV, Baujahr 2021“ oder „Fire
          TV Stick 4K“.
        </li>
        <li>
          <strong>Verwendete Player-Anwendung</strong> – der genaue Name aus dem App-Store.
        </li>
        <li>
          <strong>Beschreibung des Problems</strong> – was passiert, an welcher Stelle, und was Sie
          bereits versucht haben.
        </li>
      </ul>
      <p>
        Ein Foto des Bildschirms hilft zusätzlich, besonders bei Fehlermeldungen. Bitte senden Sie
        keine Zugangsdaten oder Zahlungsinformationen per Nachricht – wir fragen diese nie ab.
      </p>

      <h2 id="bestellung">Nach der Bestellung</h2>
      <p>
        Die allgemeinen Einrichtungsschritte werden {ACTIVATION_TIME.de} an die im Bestellvorgang
        angegebene E-Mail-Adresse versendet. Prüfen Sie bitte auch den Spam-Ordner, falls nichts
        ankommt, und melden Sie sich anschließend bei uns.
      </p>

      <h2 id="weiter">Vielleicht schon beantwortet</h2>
      <p>
        Viele Fragen sind bereits in unseren Ratgebern erklärt:{" "}
        <Link href="/iptv-einrichten/">IPTV einrichten</Link>,{" "}
        <Link href="/iptv-geraete/">Kompatible IPTV-Geräte</Link> und die{" "}
        <Link href="/faq/">FAQ-Seite</Link>. Auf Türkisch finden Sie dieselben Themen unter{" "}
        <Link href="/tr/">Germany IPTV auf Türkisch</Link>.
      </p>
    </ArticlePage>
  );
}
