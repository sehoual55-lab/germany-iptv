import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import PlaceholderNotice from "@/components/PlaceholderNotice";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME, SUPPORT_EMAIL } from "@/config/site.config";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  path: "/agb/",
  title: "Allgemeine Geschäftsbedingungen (AGB)",
  description: `Vertragsbedingungen für die Nutzung von ${SITE_NAME}: Vertragsschluss, Leistungsumfang, Preise, Laufzeit, Pflichten der Nutzer und Haftung.`,
});

const CRUMBS = [
  { name: "Startseite", url: "/" },
  { name: "AGB", url: "/agb/" },
];

export default function TermsPage() {
  return (
    <ArticlePage
      locale="de"
      crumbs={CRUMBS}
      title="Allgemeine Geschäftsbedingungen"
      lead="Diese Bedingungen regeln das Verhältnis zwischen dem Anbieter und den Nutzerinnen und Nutzern dieser Website."
      hideCta
    >
      <PlaceholderNotice locale="de" />

      <h2>§ 1 Geltungsbereich</h2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge, die über diese Website
        zwischen dem im <Link href="/impressum/">Impressum</Link> genannten Anbieter und der Kundin
        bzw. dem Kunden geschlossen werden. Abweichende Bedingungen der Kundin bzw. des Kunden werden
        nicht Vertragsbestandteil, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich zu.
      </p>

      <h2>§ 2 Vertragsschluss</h2>
      <p>
        Die Darstellung der Pakete auf dieser Website stellt kein rechtlich bindendes Angebot dar,
        sondern eine Aufforderung zur Abgabe eines Angebots. Mit dem Absenden der Bestellung geben Sie
        ein verbindliches Angebot ab. Der Vertrag kommt mit der Bestätigung durch den Anbieter oder mit
        der Bereitstellung der Einrichtungsinformationen zustande.
      </p>

      <h2>§ 3 Leistungsumfang</h2>
      <p>
        Der Anbieter stellt für die vereinbarte Laufzeit einen Zugang sowie allgemeine
        Einrichtungshinweise für kompatible Geräte bereit. Der Anbieter sagt keine bestimmten Kanäle,
        Sendungen oder Rechtepakete zu. Verfügbarkeit und Rechtmäßigkeit von Inhalten hängen von der
        Lizenzierung, dem jeweiligen Anbieter und der Rechtsordnung des Nutzers ab.
      </p>
      <p>
        Eine ununterbrochene Verfügbarkeit kann technisch nicht zugesichert werden. Wartungsarbeiten,
        Störungen im Internet und Umstände außerhalb des Einflussbereichs des Anbieters können zu
        vorübergehenden Einschränkungen führen.
      </p>

      <h2>§ 4 Preise und Zahlung</h2>
      <p>
        Es gelten die zum Zeitpunkt der Bestellung auf der Website angegebenen Preise. Der Gesamtbetrag
        wird vor dem Absenden der Bestellung angezeigt. Die Zahlung erfolgt über den im Bestellvorgang
        gewählten Zahlungsanbieter auf dessen gesicherter Seite. Zahlungs- und Kartendaten werden vom
        Anbieter nicht erhoben.
      </p>

      <h2>§ 5 Laufzeit</h2>
      <p>
        Die Laufzeit richtet sich nach dem gewählten Paket und beginnt mit der Bereitstellung der
        Zugangsinformationen. Eine automatische Verlängerung findet nicht statt; eine Fortsetzung
        erfordert eine neue Bestellung.
      </p>

      <h2>§ 6 Pflichten der Nutzerinnen und Nutzer</h2>
      <p>Die Kundin bzw. der Kunde verpflichtet sich,</p>
      <ul>
        <li>
          ausschließlich auf Inhalte zuzugreifen, zu deren Nutzung eine Berechtigung besteht, und die
          jeweils geltenden urheberrechtlichen Bestimmungen einzuhalten;
        </li>
        <li>
          die erhaltenen Zugangsdaten vertraulich zu behandeln und nicht an Dritte weiterzugeben oder
          weiterzuverkaufen;
        </li>
        <li>
          den Zugang nicht über den im gewählten Paket beschriebenen Umfang hinaus zu nutzen, etwa
          durch gewerbliche oder öffentliche Wiedergabe ohne entsprechende Rechte.
        </li>
      </ul>
      <p>
        Bei einem Verstoß kann der Anbieter den Zugang sperren. Weitergehende Ansprüche bleiben
        unberührt.
      </p>

      <h2>§ 7 Widerruf und Rückerstattung</h2>
      <p>
        Für Verbraucherinnen und Verbraucher gelten die gesetzlichen Widerrufsrechte. Einzelheiten,
        einschließlich der Hinweise zum vorzeitigen Erlöschen des Widerrufsrechts bei digitalen
        Inhalten, finden Sie in der{" "}
        <Link href="/rueckerstattung/">Rückerstattungsrichtlinie</Link>.
      </p>

      <h2>§ 8 Haftung</h2>
      <p>
        Der Anbieter haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei der Verletzung
        von Leben, Körper und Gesundheit. Bei einfacher Fahrlässigkeit haftet der Anbieter nur bei
        Verletzung einer wesentlichen Vertragspflicht und begrenzt auf den vertragstypischen,
        vorhersehbaren Schaden. Im Übrigen ist die Haftung ausgeschlossen.
      </p>

      <h2>§ 9 Schlussbestimmungen</h2>
      <p>
        Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Zwingende
        Verbraucherschutzvorschriften des Staates, in dem die Verbraucherin bzw. der Verbraucher den
        gewöhnlichen Aufenthalt hat, bleiben unberührt. Sollte eine Bestimmung unwirksam sein, bleibt
        die Wirksamkeit der übrigen Bestimmungen unberührt.
      </p>
      <p>Fragen zu diesen Bedingungen richten Sie bitte an {SUPPORT_EMAIL}.</p>
    </ArticlePage>
  );
}
