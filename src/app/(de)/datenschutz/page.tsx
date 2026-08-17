import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import PlaceholderNotice from "@/components/PlaceholderNotice";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME, SUPPORT_EMAIL } from "@/config/site.config";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  path: "/datenschutz/",
  title: "Datenschutzerklärung",
  description: `Wie ${SITE_NAME} personenbezogene Daten verarbeitet: Bestelldaten, Kontaktanfragen, Zahlungsabwicklung, Speicherdauer und Ihre Rechte nach der DSGVO.`,
});

const CRUMBS = [
  { name: "Startseite", url: "/" },
  { name: "Datenschutz", url: "/datenschutz/" },
];

export default function PrivacyPage() {
  return (
    <ArticlePage
      locale="de"
      crumbs={CRUMBS}
      title="Datenschutzerklärung"
      lead="Diese Erklärung beschreibt, welche personenbezogenen Daten bei der Nutzung dieser Website verarbeitet werden, zu welchem Zweck das geschieht und welche Rechte Ihnen zustehen."
      hideCta
    >
      <PlaceholderNotice locale="de" />

      <h2>1. Verantwortliche Stelle</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website ist der im{" "}
        <Link href="/impressum/">Impressum</Link> genannte Diensteanbieter. Bei Fragen zum Datenschutz
        erreichen Sie uns unter {SUPPORT_EMAIL}.
      </p>

      <h2>2. Grundsatz der Datensparsamkeit</h2>
      <p>
        Wir erheben nur die Daten, die für den jeweiligen Zweck erforderlich sind. Es findet kein
        Verkauf von Daten an Dritte statt, und es werden keine Profile für Werbezwecke gebildet.
      </p>

      <h2>3. Aufruf der Website</h2>
      <p>
        Beim Aufruf der Website werden durch den Hosting-Anbieter Server-Logdateien verarbeitet. Dazu
        gehören in der Regel IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite,
        Referrer-URL sowie Browser- und Betriebssystemangaben. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
        DSGVO; das berechtigte Interesse liegt im sicheren und stabilen Betrieb der Website. Diese
        Daten werden nicht mit anderen Datenquellen zusammengeführt.
      </p>

      <h2>4. Bestellvorgang</h2>
      <p>
        Wenn Sie eine Bestellung aufgeben, verarbeiten wir die von Ihnen angegebenen Daten: Name,
        E-Mail-Adresse, Telefonnummer, Land sowie optional die Angabe zu Gerät oder Anwendung.
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung). Diese Angaben werden
        ausschließlich zur Abwicklung der Bestellung und zur Bereitstellung der Einrichtungshinweise
        verwendet.
      </p>
      <p>
        <strong>Zahlungsdaten:</strong> Zahlungs- und Kartendaten werden auf dieser Website weder
        erhoben noch gespeichert. Die Zahlung erfolgt ausschließlich auf der gesicherten Seite des
        jeweiligen Zahlungsanbieters, der eigenständig verantwortlich ist. Bitte beachten Sie dessen
        Datenschutzhinweise.
      </p>

      <h2>5. Kontaktaufnahme</h2>
      <p>
        Wenn Sie uns per E-Mail oder Messenger kontaktieren, verarbeiten wir Ihre Angaben zur
        Bearbeitung der Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO. Bei der
        Nutzung eines Messenger-Dienstes gelten zusätzlich die Datenschutzbestimmungen des jeweiligen
        Anbieters.
      </p>

      <h2>6. Cookies und lokale Speicherung</h2>
      <p>
        Diese Website setzt keine Marketing- oder Tracking-Cookies ein. Technisch notwendige
        Speichervorgänge, etwa zur Aufrechterhaltung der Funktionsfähigkeit der Seite, erfolgen auf
        Grundlage von § 25 Abs. 2 TDDDG. Weitere Informationen finden Sie in der{" "}
        <Link href="/cookie-richtlinie/">Cookie-Richtlinie</Link>.
      </p>

      <h2>7. Hosting</h2>
      <p>
        Die Website wird bei einem Dienstleister gehostet, der als Auftragsverarbeiter nach Art. 28
        DSGVO tätig wird. Ein entsprechender Vertrag zur Auftragsverarbeitung liegt vor.
      </p>

      <h2>8. Speicherdauer</h2>
      <p>
        Wir speichern personenbezogene Daten nur so lange, wie es für die genannten Zwecke erforderlich
        ist oder gesetzliche Aufbewahrungsfristen bestehen – insbesondere handels- und
        steuerrechtliche Fristen von bis zu zehn Jahren für Rechnungsunterlagen.
      </p>

      <h2>9. Ihre Rechte</h2>
      <p>Ihnen stehen nach der DSGVO folgende Rechte zu:</p>
      <ul>
        <li>Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16)</li>
        <li>Löschung (Art. 17) und Einschränkung der Verarbeitung (Art. 18)</li>
        <li>Datenübertragbarkeit (Art. 20)</li>
        <li>Widerspruch gegen die Verarbeitung (Art. 21)</li>
        <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3)</li>
      </ul>
      <p>
        Zur Ausübung genügt eine formlose Nachricht an {SUPPORT_EMAIL}. Darüber hinaus steht Ihnen ein
        Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu.
      </p>

      <h2>10. Änderungen</h2>
      <p>
        Wir passen diese Datenschutzerklärung an, wenn sich die Rechtslage oder unsere Verarbeitung
        ändert. Maßgeblich ist die jeweils auf dieser Seite veröffentlichte Fassung.
      </p>
    </ArticlePage>
  );
}
