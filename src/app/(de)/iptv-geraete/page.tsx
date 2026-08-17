import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import DeviceCard from "@/components/DeviceCard";
import { buildMetadata } from "@/lib/seo";
import { relatedGuides } from "@/lib/related";
import de from "@/locales/de";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  path: "/iptv-geraete/",
  title: "Kompatible IPTV-Geräte – Smart-TV, Box, Stick und Player",
  description:
    "Welche Geräte sich für IPTV eignen: Samsung und LG Smart-TVs, Android TV, Fire TV, Smartphones, Computer und Set-Top-Boxen – mit ehrlichen Hinweisen zu Einschränkungen.",
});

const CRUMBS = [
  { name: "Startseite", url: "/" },
  { name: "IPTV-Geräte", url: "/iptv-geraete/" },
];

const FAQ = [
  {
    q: "Funktioniert IPTV auf jedem Smart-TV?",
    a: "Nein. Entscheidend ist, ob im Store Ihres Fernsehers noch eine geeignete Player-Anwendung verfügbar ist. Bei älteren Modellen ist das oft nicht mehr der Fall. Ein externer Stick oder eine kleine Box löst das Problem in der Regel zuverlässiger als ein Firmware-Update.",
  },
  {
    q: "Brauche ich eine spezielle Set-Top-Box?",
    a: "Nicht zwingend. Wenn Ihr Fernseher bereits einen aktuellen Store hat oder Sie ohnehin einen Streaming-Stick nutzen, genügt das. Eine dedizierte Box lohnt sich vor allem dann, wenn Sie ein älteres Gerät weiterverwenden möchten.",
  },
  {
    q: "Kann ich denselben Zugang parallel auf Fernseher und Handy nutzen?",
    a: "Die Anzahl gleichzeitiger Verbindungen ist im jeweiligen Paket angegeben. Die Player-Anwendung dürfen Sie auf beliebig vielen Geräten installieren – begrenzt ist nur die gleichzeitige Wiedergabe.",
  },
  {
    q: "Welches Gerät empfehlen Sie bei einem älteren Fernseher?",
    a: "Ein aktueller Android-TV- oder Fire-TV-Stick am HDMI-Eingang ist meist die unkomplizierteste Wahl: geringe Anschaffungskosten, aktuelle Anwendungen und regelmäßige Systemaktualisierungen.",
  },
];

export default function DevicesGuidePage() {
  return (
    <ArticlePage
      locale="de"
      crumbs={CRUMBS}
      title="Kompatible IPTV-Geräte im Überblick"
      lead="Für IPTV brauchen Sie kein neues Gerät – meist genügt, was ohnehin im Wohnzimmer steht. Entscheidend ist nicht die Marke, sondern ob sich eine geeignete Player-Anwendung installieren lässt."
      faq={FAQ}
      faqHeading="Häufige Fragen zur Gerätekompatibilität"
      related={relatedGuides("de", "/iptv-geraete/")}
    >
      <p>
        Die folgende Übersicht zeigt die Gerätefamilien, die in deutschen Haushalten am häufigsten für
        IPTV genutzt werden. Sie ist bewusst als Orientierung formuliert und nicht als Garantie: Ob
        Ihr konkretes Modell in Kombination mit einer bestimmten Anwendung funktioniert, lässt sich
        seriös nur im Einzelfall sagen – fragen Sie im Zweifel vor der Bestellung nach.
      </p>

      <h2 id="uebersicht">Gerätefamilien im Überblick</h2>
      <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
        {de.devices.items.map((item) => (
          <DeviceCard key={item.title} icon={item.icon} title={item.title} body={item.body} />
        ))}
      </div>

      <h2 id="auswahlkriterien">Drei Kriterien, die wirklich zählen</h2>
      <p>
        <strong>1. Ein aktueller App-Store.</strong> Ohne installierbare Player-Anwendung nützt die
        beste Hardware nichts. Prüfen Sie vor dem Kauf, ob der Store Ihres Geräts noch mit Updates
        versorgt wird.
      </p>
      <p>
        <strong>2. Ausreichend Rechenleistung.</strong> Sehr günstige Sticks kommen bei hohen
        Auflösungen an ihre Grenzen und zeigen das als Ruckeln oder verzögerten Ton. Für 1080p reicht
        aktuelle Einsteigerhardware; für 4K sollte das Gerät ausdrücklich dafür beworben werden.
      </p>
      <p>
        <strong>3. Eine stabile Netzwerkanbindung.</strong> Ein LAN-Anschluss oder zumindest gutes
        5-GHz-WLAN macht in der Praxis mehr Unterschied als ein schnellerer Prozessor. Geräte, die
        hinter dem Fernseher in einer Nische stecken, haben es beim Empfang besonders schwer.
      </p>

      <h2 id="grenzen">Wo die Grenzen liegen</h2>
      <ul>
        <li>
          <strong>Ältere Fernseher:</strong> Stores ohne aktuelle Anwendungen sind der häufigste
          Stolperstein. Ein externer Stick umgeht das Problem vollständig.
        </li>
        <li>
          <strong>Herstellerabhängige Einschränkungen:</strong> Welche Anwendungen im jeweiligen Store
          verfügbar sind, entscheidet der Hersteller – nicht der IPTV-Anbieter.
        </li>
        <li>
          <strong>Geteilte Leitungen:</strong> In Haushalten mit mehreren parallelen Streams ist die
          Bandbreite häufiger der Engpass als das Endgerät.
        </li>
      </ul>

      <p>
        Wenn Ihr Gerät auf dieser Seite nicht auftaucht, heißt das nicht automatisch, dass es
        ungeeignet ist. Schreiben Sie dem Support die genaue Modellbezeichnung – die Einschätzung ist
        unverbindlich und kostenlos. Wie es danach weitergeht, steht in der Anleitung{" "}
        <Link href="/iptv-einrichten/">IPTV einrichten</Link>; die passenden Laufzeiten finden Sie
        unter <Link href="/iptv-pakete/">IPTV Pakete</Link>.
      </p>
    </ArticlePage>
  );
}
