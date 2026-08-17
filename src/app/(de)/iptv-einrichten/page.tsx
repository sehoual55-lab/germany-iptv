import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import InstallationSection from "@/components/InstallationSection";
import { buildMetadata } from "@/lib/seo";
import { relatedGuides } from "@/lib/related";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  path: "/iptv-einrichten/",
  title: "IPTV einrichten – Anleitung für Smart-TV, Fire TV & Co.",
  description:
    "Schritt-für-Schritt-Anleitung zur IPTV-Einrichtung auf Smart-TV, Android TV, Fire TV, Smartphone und Computer – inklusive Checkliste bei Bild- und Verbindungsproblemen.",
});

const CRUMBS = [
  { name: "Startseite", url: "/" },
  { name: "IPTV einrichten", url: "/iptv-einrichten/" },
];

const FAQ = [
  {
    q: "Benötige ich für die Einrichtung technische Vorkenntnisse?",
    a: "Nein. Wer schon einmal eine App installiert und ein Passwort eingegeben hat, kommt mit der Einrichtung zurecht. Die einzige ungewohnte Stelle ist das Eintragen der Zugangsdaten – und genau dabei unterstützt der Support.",
  },
  {
    q: "Was bedeutet M3U genau?",
    a: "Eine M3U-Datei ist eine einfache Textliste, die auf einzelne Kanäle verweist. Statt der Datei erhalten Sie meist eine Web-Adresse zu dieser Liste, die Sie einmalig in den Player eintragen. Die Liste aktualisiert sich dann selbst.",
  },
  {
    q: "Das Bild ruckelt – woran liegt das?",
    a: "In den meisten Fällen an der Verbindung zwischen Router und Gerät, nicht an der Bandbreite insgesamt. Testen Sie zuerst eine Kabelverbindung, reduzieren Sie danach die Auflösung im Player und prüfen Sie erst zum Schluss, ob mehrere Geräte gleichzeitig streamen.",
  },
  {
    q: "Wie lange dauert die Einrichtung insgesamt?",
    a: "Auf einem aktuellen Gerät meist fünf bis zehn Minuten, wovon der größte Teil auf die Installation der Player-Anwendung entfällt. Danach ist nur noch das einmalige Eintragen der Zugangsdaten nötig.",
  },
];

export default function SetupGuidePage() {
  return (
    <ArticlePage
      locale="de"
      crumbs={CRUMBS}
      title="IPTV einrichten – Schritt-für-Schritt-Anleitung"
      lead="Die Einrichtung folgt auf allen Geräten demselben Muster: Player installieren, Zugangsdaten eintragen, Liste laden. Hier sind die Details je Gerätetyp – plus eine Checkliste für den Fall, dass etwas nicht sofort funktioniert."
      faq={FAQ}
      faqHeading="Häufige Fragen zur Einrichtung"
      after={<InstallationSection locale="de" />}
      related={relatedGuides("de", "/iptv-einrichten/")}
    >
      <p>
        Bevor Sie beginnen, legen Sie zwei Dinge bereit: die Zugangsdaten, die Sie nach der Bestellung
        erhalten haben, und die Fernbedienung beziehungsweise Tastatur Ihres Geräts. Die Eingabe langer
        Adressen ist mit einer Fernbedienung mühsam – eine per Bluetooth verbundene Tastatur oder die
        Fernbedienungs-App des Herstellers spart Zeit und Tippfehler.
      </p>

      <h2 id="grundmuster">Das Grundmuster in drei Schritten</h2>
      <ol>
        <li>
          <strong>Player installieren.</strong> Suchen Sie im Store Ihres Geräts nach einer
          IPTV-Player-Anwendung, die M3U-Adressen oder Portalzugänge unterstützt.
        </li>
        <li>
          <strong>Zugangsdaten eintragen.</strong> Legen Sie im Player ein neues Profil an und fügen
          Sie die erhaltene Adresse beziehungsweise Benutzername und Passwort ein.
        </li>
        <li>
          <strong>Liste laden und testen.</strong> Der Player lädt die Kanalliste. Starten Sie einen
          Kanal, prüfen Sie Bild und Ton und legen Sie Favoriten an.
        </li>
      </ol>

      <h2 id="smart-tv">Samsung und LG Smart-TV</h2>
      <p>
        Öffnen Sie den App-Store Ihres Fernsehers (Tizen bei Samsung, webOS bei LG) und installieren
        Sie eine geeignete Player-Anwendung. Nach dem ersten Start zeigen viele Player einen
        Geräteschlüssel oder eine MAC-Adresse an – notieren Sie diese, falls die Anwendung eine
        einmalige Freischaltung verlangt. Tragen Sie anschließend die Zugangsdaten ein.
      </p>
      <p>
        Bei Modellen, die älter als etwa sechs bis acht Jahre sind, ist der Store häufig eingefroren
        und enthält keine aktuellen Anwendungen mehr. In diesem Fall ist ein günstiger Android-TV- oder
        Fire-TV-Stick am HDMI-Eingang meist die schnellere Lösung als jeder Umweg über den Fernseher.
      </p>

      <h2 id="android-tv">Android TV und Google TV</h2>
      <p>
        Installieren Sie den Player über den Play Store, öffnen Sie ihn und wählen Sie „Playlist
        hinzufügen“ oder eine sinngemäß benannte Option. Android-basierte Geräte erlauben in der Regel
        eine feinere Einstellung des Puffers – wenn das Bild gelegentlich stockt, hilft es oft, den
        Puffer leicht zu erhöhen, bevor Sie an der Auflösung drehen.
      </p>

      <h2 id="fire-tv">Fire TV Stick und Fire TV Cube</h2>
      <p>
        Suchen Sie im Amazon-App-Store nach einem unterstützten Player und installieren Sie ihn. Die
        Bedienung entspricht anschließend der von Android TV. Achten Sie darauf, dass der Stick nach
        Möglichkeit nicht direkt hinter dem Fernseher in einem geschlossenen Fach steckt – schlechter
        WLAN-Empfang an dieser Stelle ist eine der häufigsten Ursachen für Aussetzer.
      </p>

      <h2 id="mobil">Smartphone, Tablet und Computer</h2>
      <p>
        Auf Android und iOS installieren Sie einen Player aus dem jeweiligen Store; auf Windows, macOS
        und Linux nutzen Sie eine Player-Software, die Netzwerkstreams öffnen kann. Der Ablauf bleibt
        identisch: Profil anlegen, Adresse einfügen, Liste laden. Auf dem Computer lässt sich die
        Adresse per Kopieren und Einfügen übertragen – praktisch, um vorab zu prüfen, ob die
        Zugangsdaten korrekt sind, bevor Sie sie auf dem Fernseher eintippen.
      </p>

      <h2 id="fehlerbehebung">Wenn etwas nicht funktioniert</h2>
      <p>Arbeiten Sie die folgenden Punkte der Reihe nach ab – die Ursache liegt meist weit oben:</p>
      <ul>
        <li>
          <strong>Nichts lädt:</strong> Adresse Zeichen für Zeichen prüfen. Ein fehlendes „s“ in
          „https“ oder ein automatisch eingefügtes Leerzeichen reichen aus.
        </li>
        <li>
          <strong>Liste lädt, kein Bild:</strong> Anderen Kanal testen. Läuft dieser, liegt es am
          einzelnen Stream, nicht an Ihrer Einrichtung.
        </li>
        <li>
          <strong>Regelmäßige Aussetzer:</strong> Testweise per Netzwerkkabel verbinden. Verschwindet
          das Problem, ist das WLAN die Ursache.
        </li>
        <li>
          <strong>Ton ohne Bild:</strong> Im Player einen anderen Decoder wählen (Hardware- statt
          Software-Decoding oder umgekehrt).
        </li>
        <li>
          <strong>Alles war in Ordnung, jetzt nicht mehr:</strong> Prüfen, ob die Laufzeit abgelaufen
          ist, und danach den Support kontaktieren.
        </li>
      </ul>

      <p>
        Bleibt das Problem bestehen, senden Sie dem Support die genaue Gerätebezeichnung, den Namen der
        Player-Anwendung und eine kurze Beschreibung des Fehlerbildes. Damit lässt sich die Ursache
        deutlich schneller eingrenzen. Welche Geräte grundsätzlich in Frage kommen, zeigt die{" "}
        <Link href="/iptv-geraete/">Geräteübersicht</Link>; die technischen Hintergründe finden Sie im{" "}
        <Link href="/iptv-deutschland/">Überblick zu IPTV in Deutschland</Link>.
      </p>
    </ArticlePage>
  );
}
