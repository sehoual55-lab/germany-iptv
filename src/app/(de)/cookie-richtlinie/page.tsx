import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME, SUPPORT_EMAIL } from "@/config/site.config";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  path: "/cookie-richtlinie/",
  title: "Cookie-Richtlinie",
  description: `Welche Cookies und lokalen Speichervorgänge ${SITE_NAME} verwendet – und warum diese Website ohne Tracking- und Werbe-Cookies auskommt.`,
});

const CRUMBS = [
  { name: "Startseite", url: "/" },
  { name: "Cookie-Richtlinie", url: "/cookie-richtlinie/" },
];

export default function CookiePage() {
  return (
    <ArticlePage
      locale="de"
      crumbs={CRUMBS}
      title="Cookie-Richtlinie"
      lead="Diese Website ist bewusst schlank gebaut: Es kommen keine Werbe- oder Tracking-Cookies zum Einsatz."
      hideCta
    >
      <h2>Was Cookies sind</h2>
      <p>
        Cookies sind kleine Textdateien, die eine Website im Browser ablegen kann. Sie werden
        üblicherweise genutzt, um Einstellungen zu speichern, eine Sitzung aufrechtzuerhalten oder das
        Verhalten von Besucherinnen und Besuchern zu analysieren. Vergleichbare Techniken sind Local
        Storage und Session Storage.
      </p>

      <h2>Was diese Website verwendet</h2>
      <ul>
        <li>
          <strong>Technisch notwendige Speichervorgänge:</strong> Sie dienen ausschließlich der
          Funktionsfähigkeit der Seite, etwa der Darstellung von Menüs und Dialogen. Rechtsgrundlage
          ist § 25 Abs. 2 TDDDG; eine Einwilligung ist hierfür nicht erforderlich.
        </li>
        <li>
          <strong>Keine Analyse- oder Marketing-Cookies:</strong> Es werden keine Werkzeuge zur
          Reichweitenmessung, kein Retargeting und keine Werbenetzwerke eingebunden.
        </li>
        <li>
          <strong>Keine externen Schriftarten oder Skripte:</strong> Schriftarten werden von diesem
          Server ausgeliefert, damit beim Seitenaufruf keine Verbindung zu Drittanbietern entsteht.
        </li>
      </ul>

      <h2>Weiterleitung zum Zahlungsanbieter</h2>
      <p>
        Beim Abschluss einer Bestellung werden Sie auf die Seite des jeweiligen Zahlungsanbieters
        weitergeleitet. Dieser Anbieter setzt eigene Cookies und ist datenschutzrechtlich eigenständig
        verantwortlich. Bitte informieren Sie sich dort über die eingesetzten Techniken.
      </p>

      <h2>Cookies im Browser verwalten</h2>
      <p>
        Sie können Cookies jederzeit in den Einstellungen Ihres Browsers ansehen, einschränken oder
        löschen. Da diese Website ohne optionale Cookies auskommt, führt das Blockieren nicht zu
        Funktionsverlusten.
      </p>

      <h2>Änderungen</h2>
      <p>
        Sollten künftig weitere Techniken zum Einsatz kommen, wird diese Seite vorab aktualisiert und
        – soweit erforderlich – eine Einwilligung eingeholt. Weitere Informationen zur
        Datenverarbeitung finden Sie in der <Link href="/datenschutz/">Datenschutzerklärung</Link>.
        Fragen beantworten wir unter {SUPPORT_EMAIL}.
      </p>
    </ArticlePage>
  );
}
