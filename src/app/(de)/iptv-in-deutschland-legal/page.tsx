import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import { buildMetadata } from "@/lib/seo";
import { relatedGuides } from "@/lib/related";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  path: "/iptv-in-deutschland-legal/",
  title: "Ist IPTV in Deutschland legal? Technik, Lizenzen und Verantwortung",
  description:
    "Warum die Frage „is iptv legal in germany“ nicht mit Ja oder Nein zu beantworten ist: Technik, Lizenzen, Anbieterpflichten und die Rolle der Nutzer – verständlich erklärt.",
});

const CRUMBS = [
  { name: "Startseite", url: "/" },
  { name: "Ist IPTV in Deutschland legal?", url: "/iptv-in-deutschland-legal/" },
];

const FAQ = [
  {
    q: "Ist IPTV als Technik in Deutschland erlaubt?",
    a: "Ja. Die Übertragung von Fernsehinhalten über das Internetprotokoll ist eine gängige, zulässige Technik – große Telekommunikationsanbieter und öffentlich-rechtliche Mediatheken nutzen sie ebenfalls. Die rechtliche Bewertung setzt erst beim Inhalt an.",
  },
  {
    q: "Woran erkenne ich, ob ein Angebot lizenziert ist?",
    a: "Belastbare Anhaltspunkte sind ein transparent benannter Anbieter, nachvollziehbare Preise im marktüblichen Bereich und klare Angaben dazu, welche Inhalte enthalten sind. Ein sehr niedriger Preis für ein sehr großes Premium-Paket ist ein deutliches Warnsignal.",
  },
  {
    q: "Mache ich mich als Nutzer strafbar?",
    a: "Das hängt vom Einzelfall ab und lässt sich pauschal nicht beantworten. Die Rechtsprechung in der EU hat wiederholt betont, dass auch der Abruf offensichtlich rechtswidrig angebotener Inhalte relevant sein kann. Wer sicher gehen möchte, nutzt ausschließlich Angebote, deren Rechtmäßigkeit erkennbar ist. Dieser Text ist keine Rechtsberatung.",
  },
  {
    q: "Ändert ein VPN etwas an der rechtlichen Bewertung?",
    a: "Nein. Ein VPN verändert den technischen Weg, nicht die Rechtslage. Ob ein Zugriff zulässig ist, richtet sich nach den Lizenzen und dem geltenden Recht, nicht nach der sichtbaren IP-Adresse.",
  },
];

export default function LegalGuidePage() {
  return (
    <ArticlePage
      locale="de"
      crumbs={CRUMBS}
      title="Ist IPTV in Deutschland legal?"
      lead="Die kurze Antwort lautet: Die Technik ja – der Inhalt kommt darauf an. Dieser Text erklärt, wo genau die Trennlinie verläuft und welche Fragen Sie sich vor einer Bestellung stellen sollten."
      faq={FAQ}
      faqHeading="Häufige Rechtsfragen zu IPTV"
      related={relatedGuides("de", "/iptv-in-deutschland-legal/")}
    >
      <p className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm">
        <strong>Hinweis:</strong> Dieser Artikel gibt einen allgemeinen Überblick und stellt keine
        Rechtsberatung dar. Für eine verbindliche Einschätzung Ihres konkreten Falls wenden Sie sich
        bitte an eine Rechtsanwältin oder einen Rechtsanwalt.
      </p>

      <h2 id="technik-vs-inhalt">Technik und Inhalt sind zwei verschiedene Fragen</h2>
      <p>
        Suchanfragen wie <em>is iptv legal in germany</em> vermischen häufig zwei Ebenen. Die erste
        Ebene ist die Übertragungstechnik: Fernsehinhalte über das Internetprotokoll auszuliefern, ist
        vollkommen üblich und rechtlich unproblematisch. Große Telekommunikationsanbieter in
        Deutschland bauen ihr Fernsehangebot genau darauf auf, und auch die Mediatheken der
        öffentlich-rechtlichen Sender arbeiten mit derselben Grundtechnik.
      </p>
      <p>
        Die zweite Ebene ist der Inhalt. Filme, Serien, Sportübertragungen und Programmsignale sind
        urheberrechtlich geschützt. Wer sie verbreiten will, braucht eine entsprechende Lizenz des
        Rechteinhabers. Fehlt diese Lizenz, wird die Verbreitung nicht dadurch zulässig, dass sie
        technisch sauber umgesetzt ist.
      </p>

      <h2 id="anbieterseite">Was auf der Anbieterseite gilt</h2>
      <p>
        Ein Anbieter, der lineare Kanäle oder Abrufinhalte weiterverbreitet, muss über entsprechende
        Nutzungsrechte verfügen. Diese Rechte sind in der Regel territorial begrenzt und werden
        vertraglich vergeben. Genau deshalb sind Angebote auffällig, die für einen sehr geringen
        Betrag ein sehr großes Paket an Premium-Inhalten in Aussicht stellen: Die dafür üblichen
        Lizenzkosten lassen sich mit solchen Preisen wirtschaftlich nicht darstellen.
      </p>
      <p>
        Rechteinhaber und Verbände gehen in Deutschland und in der EU regelmäßig gegen unlizenzierte
        Weiterverbreitung vor. Für Kundinnen und Kunden bedeutet das vor allem eines: Ein Angebot ohne
        erkennbare Rechtekette ist auch wirtschaftlich unsicher, weil es kurzfristig abgeschaltet
        werden kann.
      </p>

      <h2 id="nutzerseite">Was auf der Nutzerseite gilt</h2>
      <p>
        Für Nutzerinnen und Nutzer ist die Lage differenzierter, aber nicht beliebig. Der Europäische
        Gerichtshof hat in mehreren Entscheidungen deutlich gemacht, dass das bloße Streamen nicht
        automatisch folgenlos ist, wenn die Rechtswidrigkeit des Angebots offensichtlich ist. Als
        Anhaltspunkte für eine solche Offensichtlichkeit gelten unter anderem ein auffällig niedriger
        Preis, ein anonymer Anbieter und das Fehlen jeglicher Angaben zu Lizenzen.
      </p>
      <p>
        Praktisch heißt das: Prüfen Sie vor der Bestellung, wer hinter einem Angebot steht, was genau
        enthalten ist und ob der Preis plausibel ist. Nutzen Sie ausschließlich Inhalte, zu deren
        Abruf Sie berechtigt sind.
      </p>

      <h2 id="checkliste">Checkliste vor der Bestellung</h2>
      <ul>
        <li>Ist der Anbieter mit Kontaktmöglichkeit und Impressum benannt?</li>
        <li>Wird nachvollziehbar beschrieben, welche Inhalte enthalten sind?</li>
        <li>Steht der Preis in einem plausiblen Verhältnis zum Umfang?</li>
        <li>Läuft die Zahlung über einen etablierten, gesicherten Zahlungsanbieter?</li>
        <li>Gibt es klare Angaben zu Widerruf, Rückerstattung und Laufzeit?</li>
        <li>Werden rechtliche Hinweise offen angesprochen statt umgangen?</li>
      </ul>

      <h2 id="unser-standpunkt">Unser Standpunkt</h2>
      <p>
        Germany IPTV macht keine Angaben zu bestimmten Kanälen oder Rechtepaketen und wirbt nicht mit
        Inhalten, deren Lizenzierung nicht belegt ist. Verfügbarkeit und Rechtmäßigkeit von Inhalten
        hängen von der Lizenzierung, dem Anbieter und der Rechtsordnung des Nutzers ab. Nutzerinnen und
        Nutzer dürfen ausschließlich auf Inhalte zugreifen, zu deren Nutzung sie berechtigt sind.
      </p>
      <p>
        Wenn Sie unsicher sind, ob ein bestimmter Anwendungsfall zulässig ist, sprechen Sie uns vor der
        Bestellung an. Weiterführend: <Link href="/iptv-deutschland/">IPTV Deutschland – Überblick</Link>{" "}
        und <Link href="/faq/">häufige Fragen</Link>.
      </p>
    </ArticlePage>
  );
}
