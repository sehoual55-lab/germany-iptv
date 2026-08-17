import type { Metadata } from "next";
import ArticlePage from "@/components/ArticlePage";
import PlaceholderNotice from "@/components/PlaceholderNotice";
import { buildMetadata } from "@/lib/seo";
import { COMPANY, SITE_NAME, SUPPORT_EMAIL, PHONE_NUMBER, DOMAIN } from "@/config/site.config";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  path: "/impressum/",
  title: "Impressum",
  description: `Anbieterkennzeichnung und Kontaktangaben für ${SITE_NAME} gemäß § 5 DDG.`,
});

const CRUMBS = [
  { name: "Startseite", url: "/" },
  { name: "Impressum", url: "/impressum/" },
];

export default function ImprintPage() {
  const incomplete = !COMPANY.legalName || !COMPANY.addressLine;

  return (
    <ArticlePage
      locale="de"
      crumbs={CRUMBS}
      title="Impressum"
      lead={`Anbieterkennzeichnung für ${DOMAIN} gemäß § 5 Digitale-Dienste-Gesetz (DDG).`}
      hideCta
    >
      {incomplete ? <PlaceholderNotice locale="de" /> : null}

      <h2>Diensteanbieter</h2>
      <ul>
        <li>{COMPANY.legalName || "[Vollständiger Firmenname bzw. Name des Betreibers]"}</li>
        <li>{COMPANY.addressLine || "[Straße und Hausnummer]"}</li>
        <li>
          {COMPANY.postalCode || "[PLZ]"} {COMPANY.city || "[Ort]"}
        </li>
        <li>{COMPANY.country === "DE" ? "Deutschland" : COMPANY.country || "[Land]"}</li>
      </ul>

      <h2>Vertreten durch</h2>
      <p>{COMPANY.representative || "[Name der vertretungsberechtigten Person]"}</p>

      <h2>Kontakt</h2>
      <ul>
        <li>E-Mail: {SUPPORT_EMAIL}</li>
        <li>Telefon: {PHONE_NUMBER}</li>
      </ul>

      <h2>Registereintrag</h2>
      <p>{COMPANY.registerEntry || "[Registergericht und Registernummer, sofern vorhanden]"}</p>

      <h2>Umsatzsteuer-Identifikationsnummer</h2>
      <p>
        {COMPANY.vatId ||
          "[USt-IdNr. gemäß § 27 a Umsatzsteuergesetz, sofern vorhanden]"}
      </p>

      <h2>Verantwortlich für den Inhalt</h2>
      <p>
        {COMPANY.representative || "[Name]"}, Anschrift wie oben.
      </p>

      <h2>Streitbeilegung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit. Wir sind
        nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen
        Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte
        fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
        Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
        nach den allgemeinen Gesetzen bleiben hiervon unberührt.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
        haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
        verantwortlich. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links
        umgehend.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Betreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
        deutschen Urheberrecht. Genannte Marken- und Produktnamen Dritter dienen ausschließlich der
        Beschreibung von Gerätekompatibilität; die jeweiligen Rechte liegen bei ihren Inhabern. Eine
        Verbindung zu diesen Unternehmen besteht nicht.
      </p>
    </ArticlePage>
  );
}
