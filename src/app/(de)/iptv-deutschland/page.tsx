import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import { buildMetadata } from "@/lib/seo";
import { relatedGuides } from "@/lib/related";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  path: "/iptv-deutschland/",
  title: "IPTV Deutschland – Überblick über Technik, Bandbreite und Auswahl",
  description:
    "Wie IPTV in Deutschland technisch funktioniert, welche Bandbreite realistisch nötig ist und woran Sie einen seriösen Anbieter erkennen. Verständlicher Überblick ohne Fachjargon.",
});

const CRUMBS = [
  { name: "Startseite", url: "/" },
  { name: "IPTV Deutschland", url: "/iptv-deutschland/" },
];

const FAQ = [
  {
    q: "Wie viel Bandbreite brauche ich für IPTV in Deutschland?",
    a: "Für einen stabilen HD-Stream sind rund 15 bis 25 Mbit/s eine realistische Größenordnung, für 4K deutlich mehr. Wichtiger als der Spitzenwert ist eine gleichmäßige Verbindung: Eine schwankende Leitung führt schneller zu Rucklern als eine langsamere, aber konstante.",
  },
  {
    q: "Was ist der Unterschied zwischen IPTV und einem Streaming-Dienst?",
    a: "Technisch überschneiden sich beide stark – in beiden Fällen kommt das Bild über das Internet. Klassische Streaming-Dienste bieten überwiegend Abrufinhalte, während IPTV in der Regel lineare Kanäle in Echtzeit überträgt. Der rechtliche Rahmen ist derselbe: Entscheidend sind die Lizenzen.",
  },
  {
    q: "Brauche ich zusätzlich eine Antenne oder Satellitenschüssel?",
    a: "Nein. IPTV nutzt ausschließlich Ihre bestehende Internetverbindung. Sie benötigen kein zusätzliches Empfangsequipment, sondern ein kompatibles Gerät und eine geeignete Player-Anwendung.",
  },
  {
    q: "Woran erkenne ich einen unseriösen Anbieter?",
    a: "Typische Warnzeichen sind erfundene Bewertungen, unrealistische Verfügbarkeitsversprechen wie „100 % Uptime“, Werbung mit tausenden Premium-Kanälen zu einem Bruchteil der üblichen Kosten und fehlende Angaben zu Anbieter, Lizenz und Kontakt. Seriöse Angebote sind bei Zahlen zurückhaltend und bei Kontaktdaten auskunftsfreudig.",
  },
];

export default function GuideOverviewPage() {
  return (
    <ArticlePage
      locale="de"
      crumbs={CRUMBS}
      title="IPTV Deutschland – Überblick über Technik, Bandbreite und Auswahl"
      lead="Bevor Sie sich für ein Angebot entscheiden, hilft ein nüchterner Blick auf die Technik: Wie kommt das Bild eigentlich auf den Fernseher, was braucht Ihre Leitung – und welche Versprechen sollten Sie kritisch lesen?"
      faq={FAQ}
      faqHeading="Häufige Fragen zu IPTV in Deutschland"
      related={relatedGuides("de", "/iptv-deutschland/")}
    >
      <p>
        IPTV steht für <strong>Internet Protocol Television</strong>. Statt über Kabel, Satellit oder
        Antenne wird das Fernsehsignal in kleine Datenpakete zerlegt und über dieselbe Leitung
        übertragen, die Sie auch zum Surfen nutzen. Ihr Gerät setzt diese Pakete wieder zu einem
        durchgehenden Bild zusammen. Für Sie fühlt sich das an wie normales Fernsehen – technisch ist
        es näher an einem Videoanruf als an einer Satellitenschüssel.
      </p>
      <p>
        Genau deshalb hat die Qualität Ihrer Internetverbindung so großen Einfluss auf das Ergebnis.
        Wer wissen möchte, was hinter Suchbegriffen wie <em>germany iptv</em> oder{" "}
        <em>iptv deutsche</em> steckt, findet hier die technischen Grundlagen in verständlicher Form.
      </p>

      <h2 id="technik">Wie die Übertragung funktioniert</h2>
      <p>
        Ein IPTV-Angebot besteht im Kern aus drei Bausteinen. Am Anfang steht die Quelle: Der Anbieter
        erhält oder erzeugt ein Signal und wandelt es in ein internettaugliches Format um. In der Mitte
        steht die Verteilung über Server, die den Datenstrom an die Endgeräte ausliefern – Begriffe wie{" "}
        <em>germany servers</em> beschreiben nichts anderes als den Standort dieser Verteilstationen.
        Am Ende steht Ihr Gerät mit einer Player-Anwendung, die den Strom entgegennimmt und darstellt.
      </p>
      <p>
        Die Zugangsdaten für diesen letzten Schritt erreichen Sie meist in einer von zwei Formen: als{" "}
        <strong>M3U-Adresse</strong>, also eine Textliste mit Kanalverweisen, oder als{" "}
        <strong>Portalzugang</strong> mit Benutzername und Passwort. Beides sind lediglich
        unterschiedliche Wege, dem Player mitzuteilen, wo er den Datenstrom abholen soll. Welche
        Variante für Sie passt, hängt vom Player ab – die Einrichtung erklären wir Schritt für Schritt
        in der Anleitung <Link href="/iptv-einrichten/">IPTV einrichten</Link>.
      </p>

      <h2 id="bandbreite">Welche Bandbreite realistisch nötig ist</h2>
      <p>
        Anbieterangaben zur Bandbreite sind oft optimistisch. Als praxisnahe Orientierung für einen
        gleichzeitigen Stream gilt:
      </p>
      <ul>
        <li>
          <strong>SD (576p):</strong> ab etwa 5 Mbit/s – heute kaum noch relevant, aber für ältere
          Geräte brauchbar.
        </li>
        <li>
          <strong>HD (720p bis 1080p):</strong> etwa 10 bis 25 Mbit/s, je nach Kompression und
          Bildbewegung. Sport braucht mehr als eine Nachrichtensendung.
        </li>
        <li>
          <strong>4K:</strong> in der Regel 35 Mbit/s aufwärts. Angebote, die mit „iptv germany 8k“
          werben, sollten Sie kritisch prüfen – 8K-Inhalte sind im linearen Fernsehen praktisch nicht
          verbreitet, und die dafür nötigen Datenraten übersteigen viele Hausanschlüsse.
        </li>
      </ul>
      <p>
        Entscheidend ist nicht der Wert im Geschwindigkeitstest, sondern die Konstanz. Wenn mehrere
        Personen im Haushalt gleichzeitig streamen, addieren sich die Anforderungen. Ein per Kabel
        angeschlossener Fernseher ist einem WLAN-Gerät in dieser Hinsicht fast immer überlegen.
      </p>

      <h2 id="auswahl">Worauf Sie bei der Auswahl achten sollten</h2>
      <p>
        Der Markt ist unübersichtlich, und viele Websites sehen sich zum Verwechseln ähnlich. Diese
        Fragen helfen beim Aussortieren:
      </p>
      <ol>
        <li>
          <strong>Sind Anbieter und Kontakt erkennbar?</strong> Eine erreichbare Adresse und eine
          echte Antwort auf eine Testanfrage sagen mehr aus als jedes Gütesiegel-Bild.
        </li>
        <li>
          <strong>Werden Zahlen belegt?</strong> Angaben wie „50.000 Kanäle“ oder „100 % Uptime“ sind
          Marketing, keine Zusage. Seriöse Anbieter beschreiben lieber, was sie tatsächlich leisten.
        </li>
        <li>
          <strong>Wie transparent ist der Preis?</strong> Der Gesamtbetrag sollte vor der Bestellung
          feststehen – ohne Aktivierungsgebühr im Kleingedruckten und ohne automatische Verlängerung.
        </li>
        <li>
          <strong>Wie wird bezahlt?</strong> Die Zahlung gehört auf die gesicherte Seite eines
          etablierten Zahlungsanbieters. Ein Formular, das Kartendaten direkt auf der Anbieterseite
          abfragt, ist ein Ausschlusskriterium.
        </li>
        <li>
          <strong>Wird die Rechtslage angesprochen?</strong> Ein Anbieter, der das Thema Lizenzen
          vollständig umgeht, ersparte sich eine unbequeme Frage. Mehr dazu unter{" "}
          <Link href="/iptv-in-deutschland-legal/">Ist IPTV in Deutschland legal?</Link>
        </li>
      </ol>

      <h2 id="geraete">Geräte und Anwendungen</h2>
      <p>
        Die meisten Haushalte in Deutschland besitzen bereits ein geeignetes Gerät: einen Smart-TV von
        Samsung oder LG, einen Fire TV Stick, ein Android-TV-Gerät oder schlicht ein Tablet.
        Entscheidend ist nicht die Marke, sondern ob eine passende Player-Anwendung installiert werden
        kann. Bei älteren Fernsehern ist der Hersteller-Store manchmal nicht mehr aktuell; dann ist
        eine kleine Streaming-Box in der Regel die unkomplizierteste Lösung. Eine Übersicht finden Sie
        unter <Link href="/iptv-geraete/">Kompatible IPTV-Geräte</Link>.
      </p>

      <h2 id="fazit">Kurzes Fazit</h2>
      <p>
        IPTV ist eine ausgereifte Übertragungstechnik mit einem sehr überschaubaren
        Anforderungsprofil: stabile Leitung, kompatibles Gerät, saubere Zugangsdaten. Die eigentliche
        Sorgfalt liegt woanders – nämlich bei der Frage, welcher Anbieter welche Inhalte rechtmäßig
        anbieten darf. Nutzen Sie ausschließlich Inhalte, zu deren Abruf Sie berechtigt sind.
      </p>
    </ArticlePage>
  );
}
