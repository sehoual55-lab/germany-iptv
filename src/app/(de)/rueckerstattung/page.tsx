import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import PlaceholderNotice from "@/components/PlaceholderNotice";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME, SUPPORT_EMAIL } from "@/config/site.config";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  path: "/rueckerstattung/",
  title: "Rückerstattungsrichtlinie und Widerrufsrecht",
  description: `Wann eine Rückerstattung bei ${SITE_NAME} möglich ist, wie das gesetzliche Widerrufsrecht bei digitalen Inhalten greift und wie Sie eine Erstattung beantragen.`,
});

const CRUMBS = [
  { name: "Startseite", url: "/" },
  { name: "Rückerstattungsrichtlinie", url: "/rueckerstattung/" },
];

const FAQ = [
  {
    q: "Bekomme ich mein Geld zurück, wenn mein Gerät nicht kompatibel ist?",
    a: "Klären Sie die Kompatibilität möglichst vor der Bestellung – dafür ist der Support da. Stellt sich nach der Bestellung heraus, dass eine Einrichtung auf keinem Ihrer Geräte möglich ist, melden Sie sich umgehend; wir suchen zunächst nach einer technischen Lösung und prüfen anschließend eine Erstattung.",
  },
  {
    q: "Wie lange dauert die Bearbeitung einer Erstattung?",
    a: "Nach der Bestätigung wird die Erstattung über denselben Zahlungsweg veranlasst, über den Sie bezahlt haben. Die Gutschrift auf Ihrem Konto hängt anschließend von Ihrem Zahlungsanbieter ab.",
  },
  {
    q: "Was gilt bei einer kurzzeitigen Störung?",
    a: "Kurzzeitige technische Störungen begründen für sich genommen keinen Erstattungsanspruch. Melden Sie eine Störung bitte zeitnah, damit sie dokumentiert und behoben werden kann.",
  },
];

export default function RefundPage() {
  return (
    <ArticlePage
      locale="de"
      crumbs={CRUMBS}
      title="Rückerstattungsrichtlinie"
      lead="Diese Seite erklärt, wann eine Rückerstattung möglich ist, welche gesetzlichen Rechte Sie als Verbraucherin oder Verbraucher haben und wie Sie eine Erstattung beantragen."
      faq={FAQ}
      faqHeading="Fragen zur Rückerstattung"
      hideCta
    >
      <PlaceholderNotice locale="de" />

      <h2>Gesetzliches Widerrufsrecht</h2>
      <p>
        Verbraucherinnen und Verbrauchern steht grundsätzlich ein Widerrufsrecht von vierzehn Tagen ab
        Vertragsschluss zu. Bei digitalen Inhalten, die nicht auf einem körperlichen Datenträger
        geliefert werden, erlischt dieses Recht vorzeitig, wenn Sie ausdrücklich zugestimmt haben,
        dass mit der Ausführung vor Ablauf der Widerrufsfrist begonnen wird, und Sie Ihre Kenntnis vom
        Erlöschen des Widerrufsrechts bestätigt haben (§ 356 Abs. 5 BGB).
      </p>
      <p>
        Praktisch bedeutet das: Sobald Ihnen die Zugangsinformationen übermittelt wurden und Sie der
        sofortigen Ausführung zugestimmt haben, ist ein Widerruf in der Regel nicht mehr möglich.
        Deshalb weisen wir im Bestellvorgang ausdrücklich darauf hin.
      </p>

      <h2>Wann wir erstatten</h2>
      <ul>
        <li>
          <strong>Doppelte Zahlung:</strong> Eine versehentlich doppelt ausgeführte Zahlung wird
          vollständig erstattet.
        </li>
        <li>
          <strong>Nichtbereitstellung:</strong> Erhalten Sie trotz erfolgter Zahlung keine
          Zugangsinformationen und lässt sich das auch nach Kontaktaufnahme nicht beheben, erstatten
          wir den gezahlten Betrag.
        </li>
        <li>
          <strong>Dauerhafte technische Undurchführbarkeit:</strong> Lässt sich der Zugang trotz
          gemeinsamer Fehlersuche auf keinem Ihrer kompatiblen Geräte einrichten, prüfen wir eine
          Erstattung.
        </li>
      </ul>

      <h2>Wann eine Erstattung ausgeschlossen ist</h2>
      <ul>
        <li>bei bereits genutztem Zugang und abgelaufener oder erloschener Widerrufsfrist;</li>
        <li>bei kurzzeitigen Störungen oder Wartungsarbeiten;</li>
        <li>
          bei Problemen, die nachweislich auf Ihre Internetverbindung, Ihr Endgerät oder eine von Ihnen
          gewählte Drittanwendung zurückgehen;
        </li>
        <li>
          bei einem Verstoß gegen die <Link href="/agb/">AGB</Link>, insbesondere bei Weitergabe der
          Zugangsdaten.
        </li>
      </ul>

      <h2>So beantragen Sie eine Erstattung</h2>
      <ol>
        <li>Schreiben Sie an {SUPPORT_EMAIL} mit dem Betreff „Erstattung“.</li>
        <li>
          Nennen Sie den Namen und die E-Mail-Adresse aus der Bestellung sowie das Bestelldatum.
        </li>
        <li>Beschreiben Sie kurz den Grund und fügen Sie, falls vorhanden, Screenshots bei.</li>
      </ol>
      <p>
        Wir melden uns nach Eingang und teilen Ihnen mit, ob und in welcher Höhe eine Erstattung
        erfolgt. Die Auszahlung läuft über denselben Zahlungsweg wie die ursprüngliche Zahlung.
      </p>
    </ArticlePage>
  );
}
