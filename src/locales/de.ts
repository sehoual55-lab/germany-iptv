/**
 * German (de-DE) localisation file.
 * All user-facing German text lives here — nothing is hard-coded in components.
 */

import type { LocaleCode } from "@/config/site.config";

const de = {
  code: "de" as LocaleCode,
  htmlLang: "de-DE",
  label: "Deutsch",
  flag: "🇩🇪",

  brand: {
    name: "GERMANY IPTV",
    tagline: "Streaming-Lösungen für Deutschland",
  },

  a11y: {
    skipToContent: "Zum Hauptinhalt springen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    languageSelector: "Sprache auswählen",
    close: "Schließen",
    breadcrumb: "Brotkrumen-Navigation",
  },

  nav: [
    { label: "Startseite", href: "/" },
    { label: "IPTV Pakete", href: "/iptv-pakete/" },
    { label: "Vorteile", href: "/#vorteile" },
    { label: "Geräte", href: "/iptv-geraete/" },
    { label: "Einrichtung", href: "/iptv-einrichten/" },
    { label: "FAQ", href: "/faq/" },
    { label: "Kontakt", href: "/kontakt/" },
  ],

  supportButton: "Support kontaktieren",

  hero: {
    eyebrow: "Germany IPTV",
    h1: "Germany IPTV – Flexible Streaming-Lösungen für Deutschland",
    description:
      "Entdecken Sie eine moderne Streaming-Lösung für kompatible Smart-TVs, Streaming-Geräte und IPTV-Player. Wählen Sie ein passendes Paket und erhalten Sie Unterstützung bei der Einrichtung.",
    ctaPrimary: "IPTV Pakete ansehen",
    ctaSecondary: "So funktioniert es",
    trustLine: ["Einfache Einrichtung", "Flexible Pakete", "Persönlicher Support"],
    visualAlt:
      "Illustration eines Smart-TVs, eines Tablets und eines Smartphones mit einer abstrakten Streaming-Oberfläche",
  },

  intro: {
    heading: "IPTV in Deutschland verständlich erklärt",
    body: [
      "Der Begriff germany iptv beschreibt den Zugang zu Fernseh- und Streaming-Inhalten über eine Internetverbindung statt über Kabel, Satellit oder Antenne. Statt eines klassischen Empfangswegs wird das Signal als Datenstrom an ein kompatibles Endgerät übertragen – zum Beispiel an einen Smart-TV, eine Streaming-Box oder einen IPTV-Player auf dem Smartphone.",
      "Germany IPTV richtet sich an Nutzerinnen und Nutzer, die eine übersichtliche Paketauswahl, verständliche Einrichtungsschritte und einen erreichbaren Ansprechpartner suchen. Welche Inhalte tatsächlich verfügbar sind, hängt immer von den Lizenzen des jeweiligen Anbieters ab. Greifen Sie ausschließlich auf Inhalte zu, für die Sie berechtigt sind.",
    ],
    facts: [
      { label: "Übertragung", value: "Über Ihre bestehende Internetverbindung" },
      { label: "Geräte", value: "Smart-TV, Stick, Box, Smartphone, Computer" },
      { label: "Einrichtung", value: "Meist in wenigen Minuten erledigt" },
    ],
  },

  packages: {
    id: "pakete",
    heading: "Germany IPTV Pakete",
    subheading:
      "Vier klare Laufzeiten ohne versteckte Bedingungen. Preise werden zentral gepflegt und vor der Bestellung transparent angezeigt.",
    badgePopular: "AM BELIEBTESTEN",
    badgeBestValue: "BESTER WERT",
    cta: "Jetzt bestellen",
    priceOnRequest: "Preis auf Anfrage",
    perPeriod: "einmalig",
    /** Duration line under the tier name */
    durationLine: (m: number) => (m === 1 ? "1 Monat" : `${m} Monate`),
    bonusLine: (m: number) => `+${m === 1 ? "1 Monat" : `${m} Monate`} gratis`,
    perDuration: (m: number) => `/ ${m === 1 ? "1 Monat" : `${m} Monate`}`,
    connections: {
      one: "Verbindung",
      many: "Verbindungen",
      note: (pct: number) =>
        `Erste Verbindung zum Normalpreis · jede weitere ${pct} % günstiger`,
      decrease: "Eine Verbindung weniger",
      increase: "Eine Verbindung mehr",
      label: "Gleichzeitige Verbindungen",
    },
    featureLabels: {
      channels25k: "25.000+ TV-Kanäle",
      channels130k: "130.000+ TV-Kanäle",
      vod100k: "100.000+ Filme & Serien",
      vod140k: "140.000+ Filme & Serien",
      quality4k: "4K / FHD / HD Qualität",
      channelsIntl: "Alle US- & internationalen Kanäle",
      channelsAllIntl: "Alle internationalen Kanäle",
      allDevices: "Kompatibel mit allen Geräten",
      epg: "TV-Programm (EPG)",
      vodLibrary: "Große VOD-Bibliothek mit Filmen & Serien",
      stableServers: "100 % stabile Server",
      support247: "24/7 technischer Support",
      instantDelivery: "Sofortige Lieferung",
      // Neutral rows, still available if you prefer them
      duration: (m: number) => `Zugangsdauer: ${m === 1 ? "1 Monat" : `${m} Monate`}`,
      connections: (n: number) =>
        `${n === 1 ? "1 gleichzeitige Verbindung" : `${n} gleichzeitige Verbindungen`}`,
      devices: "Kompatible Smart-TVs, Sticks, Boxen und Player",
      quality: "SD-, HD- und 4K-fähige Wiedergabe, je nach Quelle und Leitung",
      support: "Standard-Support per E-Mail oder Messenger",
      prioritySupport: "Priorisierter Support per E-Mail oder Messenger",
      setup: "Hilfe bei der Einrichtung Ihres Geräts",
      secureCheckout: "Sicherer Checkout über den Zahlungsanbieter",
      delivery: "Zugangsdaten per E-Mail nach Zahlungseingang",
      noAutoRenew: "Keine automatische Verlängerung",
    } as Record<string, string | ((n: number) => string)>,
    features: {
      duration: (m: number) => `Zugangsdauer: ${m === 1 ? "1 Monat" : `${m} Monate`}`,
      devices: (n: number) => `Kompatible Geräte: ${n === 1 ? "1 Gerät" : `${n} Geräte`}`,
      supportStandard: "Standard-Support",
      supportPriority: "Priorisierter Support",
      setup: "Hilfe bei der Einrichtung",
    },
    note:
      "Hinweis: Die Verfügbarkeit von Inhalten richtet sich nach den Lizenzen des Anbieters und der jeweiligen Rechtslage.",
  },

  checkout: {
    eyebrow: "Checkout",
    title: "Ihre Bestellung",
    planHeading: "Gewähltes Paket",
    connectionHeading: "Verbindungen",
    detailsHeading: "Ihre Angaben",
    fields: {
      fullName: "Vollständiger Name",
      email: "E-Mail-Adresse",
      phone: "Telefonnummer",
      country: "Land",
      device: "Gerät oder Anwendung (optional)",
    },
    placeholders: {
      fullName: "Max Mustermann",
      email: "name@beispiel.de",
      phone: "170 0000000",
      country: "Deutschland",
      device: "z. B. Samsung Smart TV",
    },
    countryLabel: "Ländervorwahl",
    payment: {
      heading: "Zahlungsart",
      paypal: "PayPal",
      card: "Kredit- oder Debitkarte",
      other: "Anderer Zahlungsanbieter",
      securityNote:
        "Ihre Zahlungsdaten werden ausschließlich auf der gesicherten Seite des Zahlungsanbieters eingegeben. Wir erfassen und speichern keine Kartendaten.",
    },
    totalLabel: "Gesamt",
    submitWhatsapp: "Per WhatsApp bestellen",
    submitPayment: "Sicher zur Zahlung",
    sending: "Wird gesendet …",
    required: "Pflichtfeld",
    invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    successHeading: "Bestellung übermittelt",
    successBody:
      "Ihre Angaben wurden erfasst. Sie werden nun zu WhatsApp weitergeleitet – dort bestätigen wir Ihre Bestellung und senden anschließend die Einrichtungsschritte.",
    successBodyPayment:
      "Ihre Angaben wurden erfasst. Sie werden nun zur offiziellen, gesicherten Zahlungsseite weitergeleitet.",
    errorHeading: "Übermittlung fehlgeschlagen",
    errorBody:
      "Die Bestellung konnte nicht gespeichert werden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt.",
    retry: "Erneut versuchen",
    activationNote: (t: string) => `Die Einrichtungsinformationen werden ${t} versendet.`,
    legalNote:
      "Mit dem Absenden bestätigen Sie, dass Sie ausschließlich auf Inhalte zugreifen, zu deren Nutzung Sie berechtigt sind.",
    /** Pre-filled WhatsApp message */
    waMessage: (o: {
      plan: string;
      duration: string;
      connections: number;
      total: string;
      name: string;
      email: string;
      phone: string;
    }) =>
      `Hallo! Ich möchte folgendes Paket bestellen:

` +
      `Paket: ${o.plan}
Laufzeit: ${o.duration}
Verbindungen: ${o.connections}
Gesamt: ${o.total}

` +
      `Name: ${o.name}
E-Mail: ${o.email}
Telefon: ${o.phone}`,
  },

  features: {
    id: "vorteile",
    heading: "Warum Germany IPTV wählen?",
    subheading:
      "Sechs Punkte, die den Unterschied zwischen einem unübersichtlichen Angebot und einem sauber aufgebauten Dienst ausmachen.",
    items: [
      {
        icon: "setup",
        title: "Einfache Einrichtung",
        body: "Verständliche Schritte für gängige Smart-TVs, Streaming-Sticks und IPTV-Player – ohne technisches Fachwissen.",
      },
      {
        icon: "package",
        title: "Flexible Pakete",
        body: "Laufzeiten von einem bis zwölf Monaten. Sie entscheiden, wie lange Sie den Zugang nutzen möchten.",
      },
      {
        icon: "devices",
        title: "Gerätekompatibilität",
        body: "Anleitungen für weit verbreitete Geräte und Anwendungen. Vorab prüfen wir gern, ob Ihr Gerät dazugehört.",
      },
      {
        icon: "support",
        title: "Persönlicher Support",
        body: "Ein erreichbarer Ansprechpartner per E-Mail oder Messenger – auf Deutsch und auf Türkisch.",
      },
      {
        icon: "shield",
        title: "Sicherer Checkout",
        body: "Die Zahlung läuft über die offizielle Seite des Zahlungsanbieters. Kartendaten werden bei uns nicht erfasst.",
      },
      {
        icon: "sparkle",
        title: "Moderne Benutzererfahrung",
        body: "Eine klare Website ohne Pop-up-Flut, mit transparenten Angaben und schnellen Ladezeiten.",
      },
    ],
  },

  howItWorks: {
    id: "so-funktioniert-es",
    heading: "So funktioniert es",
    subheading: "Drei Schritte von der Auswahl bis zur Einrichtung.",
    steps: [
      {
        number: "01",
        title: "Paket auswählen",
        body: "Wählen Sie die gewünschte Laufzeit.",
      },
      {
        number: "02",
        title: "Bestellung abschließen",
        body: "Geben Sie Ihre Informationen ein und schließen Sie die sichere Zahlung ab.",
      },
      {
        number: "03",
        title: "Einrichtung starten",
        body: "Sie erhalten die notwendigen allgemeinen Einrichtungsschritte für Ihr kompatibles Gerät.",
      },
    ],
  },

  devices: {
    id: "geraete",
    heading: "Kompatible Geräte",
    subheading:
      "Diese Gerätefamilien werden häufig für IPTV genutzt. Ob Ihr konkretes Modell und Ihre Anwendung geeignet sind, klären wir gern vorab.",
    cta: "Hilfe bei der Einrichtung",
    disclaimer:
      "Nicht jedes Modell und nicht jede Anwendung ist automatisch geeignet. Fragen Sie vor der Bestellung nach, wenn Sie unsicher sind.",
    items: [
      { icon: "tv", title: "Samsung Smart TV", body: "Modelle mit Tizen-Betriebssystem und einem kompatiblen IPTV-Player." },
      { icon: "tv", title: "LG Smart TV", body: "webOS-Geräte mit einer geeigneten Player-Anwendung aus dem Store." },
      { icon: "android", title: "Android TV", body: "Android-TV-Geräte, TV-Boxen und Google-TV-Modelle." },
      { icon: "fire", title: "Fire TV", body: "Fire TV Stick und Fire TV Cube mit unterstützten Anwendungen." },
      { icon: "mobile", title: "Smartphones & Tablets", body: "Android- und iOS-Geräte mit einem passenden IPTV-Player." },
      { icon: "desktop", title: "Computer", body: "Windows, macOS und Linux mit einer geeigneten Player-Software." },
      { icon: "player", title: "Kompatible IPTV-Player", body: "Gängige Playeranwendungen, die M3U- oder Portal-Zugänge unterstützen." },
      { icon: "box", title: "Set-Top-Boxen", body: "Verbreitete Set-Top-Boxen mit Netzwerkanbindung." },
    ],
    /** Compact tile grid used on the homepage. */
    tilesHeading: "Auf vielen Bildschirmen nutzbar",
    tilesSubheading:
      "Ein Zugang, mehrere Geräteklassen. Entscheidend ist nicht die Marke, sondern ob sich eine geeignete Player-Anwendung installieren lässt.",
    trademarkNote:
      "Alle genannten Marken- und Produktnamen sowie Logos sind Eigentum der jeweiligen Rechteinhaber und dienen hier ausschließlich der Beschreibung der Gerätekompatibilität. Es besteht keine Verbindung, Partnerschaft oder Empfehlung durch diese Unternehmen.",
    tiles: [
      { icon: "samsung", title: "Samsung TV", note: "Tizen" },
      { icon: "lg", title: "LG Smart TV", note: "webOS" },
      { icon: "sony", title: "Sony TV", note: "Android TV" },
      { icon: "amazon", title: "Fire TV Stick", note: "Fire OS" },
      { icon: "appletv", title: "Apple TV", note: "tvOS" },
      { icon: "apple", title: "iPhone & iPad", note: "iOS / iPadOS" },
      { icon: "android", title: "Android", note: "Smartphone & Tablet" },
      { icon: "chromecast", title: "Google TV", note: "Chromecast" },
      { icon: "roku", title: "Roku", note: "M3U-Player" },
      { icon: "xbox", title: "Xbox", note: "Media-Player-App" },
      { icon: "windows", title: "Windows", note: "Player-Software" },
      { icon: "linux", title: "Linux", note: "Player-Software" },
    ],
  },

  installation: {
    id: "einrichtung",
    eyebrow: "Installationsanleitungen",
    heading: "Einrichtung für Ihr Gerät",
    subheading:
      "Auf jedem Gerät sind es dieselben drei Schritte. Wählen Sie Ihren Gerätetyp – die passende Anleitung erhalten Sie zusammen mit Ihren Zugangsdaten.",
    appLabel: "Typische Anwendungen",
    cta: "Hilfe bei der Einrichtung",
    disclaimer:
      "Die genannten Anwendungen sind gängige Beispiele von Drittanbietern; wir stehen mit ihnen in keiner Verbindung. Ob eine bestimmte Anwendung auf Ihrem Modell verfügbar ist, entscheidet der jeweilige App-Store – fragen Sie im Zweifel vorab nach.",
    items: [
      {
        icon: "tv",
        title: "Smart TV",
        apps: "Player-App aus dem TV-Store",
        steps: ["Player-Anwendung im TV-Store installieren", "Zugangsdaten oder M3U-Adresse eintragen", "Senderliste laden und testen"],
      },
      {
        icon: "amazon",
        title: "Fire TV Stick",
        apps: "Player aus dem Amazon-App-Store",
        steps: ["Unterstützten Player installieren", "Mit den erhaltenen Zugangsdaten anmelden", "Liste laden und Favoriten anlegen"],
      },
      {
        icon: "android",
        title: "Android TV",
        apps: "Player aus dem Play Store",
        steps: ["Player-Anwendung installieren", "Playlist per M3U-Adresse hinzufügen", "Puffer anpassen und starten"],
      },
      {
        icon: "box",
        title: "Set-Top-Box",
        apps: "Portal- oder M3U-Modus",
        steps: ["Portal-Adresse im Menü eintragen", "Gerätekennung an den Support senden", "Neu starten und Liste laden"],
      },
      {
        icon: "appletv",
        title: "Apple TV",
        apps: "Player aus dem App Store",
        steps: ["Geeigneten Player installieren", "Zugangsdaten eingeben", "Kanal testen und Favoriten setzen"],
      },
      {
        icon: "windows",
        title: "Windows",
        apps: "Player-Software für Netzwerkstreams",
        steps: ["Player-Software installieren", "M3U-Adresse per Kopieren einfügen", "Wiedergabe prüfen"],
      },
      {
        icon: "apple",
        title: "macOS",
        apps: "Player-Software für Netzwerkstreams",
        steps: ["Player-Software installieren", "Zugangsdaten oder M3U eintragen", "Liste laden und starten"],
      },
      {
        icon: "apple",
        title: "iPhone & iPad",
        apps: "Player aus dem App Store",
        steps: ["Player-Anwendung laden", "Zugangsdaten eintragen", "Unterwegs im WLAN oder Mobilnetz nutzen"],
      },
      {
        icon: "android",
        title: "Android-Smartphone",
        apps: "Player aus dem Play Store",
        steps: ["Player-Anwendung laden", "M3U-Playlist hinzufügen", "Wiedergabe starten"],
      },
    ],
  },

  trust: {
    heading: "Worauf Sie sich verlassen können",
    subheading: "Keine erfundenen Bewertungen, keine Fantasiezahlen – nur klare Zusagen.",
    items: [
      { title: "Klare Preise", body: "Der Gesamtbetrag ist vor der Bestellung sichtbar." },
      { title: "Einfache Bestellung", body: "Ein kurzes Formular, keine unnötigen Pflichtangaben." },
      { title: "Einrichtungshilfe", body: "Allgemeine Schritte für Ihr kompatibles Gerät." },
      { title: "Kundenservice", body: "Antwort per E-Mail oder Messenger." },
      { title: "Sicherer Checkout", body: "Zahlung über die offizielle Seite des Anbieters." },
    ],
    legalPrinciple:
      "Nutzerinnen und Nutzer dürfen ausschließlich auf Inhalte zugreifen, zu deren Nutzung sie berechtigt sind. Verfügbarkeit und Rechtmäßigkeit von Inhalten hängen von der Lizenzierung, dem Anbieter und der Rechtsordnung des Nutzers ab.",
    legalHeading: "Rechtlicher Grundsatz",
  },

  faq: {
    id: "faq",
    heading: "Häufige Fragen",
    subheading: "Antworten auf die Fragen, die uns am häufigsten erreichen.",
    moreLink: "Alle Fragen ansehen",
    items: [
      {
        q: "Was ist Germany IPTV?",
        a: "Germany IPTV ist ein auf Deutschland ausgerichtetes Angebot für internetbasiertes Fernsehen. Statt über Kabel oder Satellit wird der Inhalt als Datenstrom an ein kompatibles Gerät übertragen. Welche Inhalte verfügbar sind, richtet sich nach den Lizenzen des Anbieters.",
      },
      {
        q: "Wie funktioniert IPTV in Deutschland?",
        a: "Sie benötigen eine stabile Internetverbindung, ein kompatibles Gerät und eine geeignete Player-Anwendung. Nach der Bestellung erhalten Sie die allgemeinen Einrichtungsschritte, tragen die Zugangsdaten in den Player ein und starten die Wiedergabe.",
      },
      {
        q: "Welche Geräte sind kompatibel?",
        a: "Häufig genutzt werden Samsung- und LG-Smart-TVs, Android-TV-Geräte, Fire TV, Smartphones, Tablets, Computer sowie Set-Top-Boxen mit Netzwerkanbindung. Nicht jedes Modell ist automatisch geeignet – fragen Sie im Zweifel vorab nach.",
      },
      {
        q: "Wie richte ich IPTV ein?",
        a: "In drei Schritten: eine kompatible Player-Anwendung installieren, die erhaltenen Zugangsdaten eintragen und die Senderliste laden. Eine ausführliche Anleitung finden Sie auf der Seite „IPTV einrichten“.",
      },
      {
        q: "Benötige ich eine M3U-Datei?",
        a: "Das hängt von Ihrem Player ab. Manche Anwendungen arbeiten mit einer M3U-URL, andere mit Portal- oder Benutzerdaten. Welche Variante für Ihr Gerät passt, teilen wir Ihnen mit den Einrichtungsinformationen mit.",
      },
      {
        q: "Wie lange dauert die Einrichtung?",
        a: "Die eigentliche Einrichtung dauert bei den meisten Geräten nur wenige Minuten. Der zeitaufwendigste Teil ist in der Regel die Installation der passenden Player-Anwendung.",
      },
      {
        q: "Kann ich IPTV auf mehreren Geräten installieren?",
        a: "Die Anzahl der gleichzeitig nutzbaren Geräte ist im jeweiligen Paket angegeben. Eine Player-Anwendung lässt sich auf mehreren Geräten installieren, die gleichzeitige Nutzung ist jedoch auf den gebuchten Umfang begrenzt.",
      },
      {
        q: "Ist IPTV in Deutschland legal?",
        a: "IPTV als Übertragungstechnik ist in Deutschland zulässig. Entscheidend ist, ob der Anbieter über die erforderlichen Lizenzen für die angebotenen Inhalte verfügt. Nutzen Sie ausschließlich Inhalte, zu deren Abruf Sie berechtigt sind. Dies ist keine Rechtsberatung.",
      },
      {
        q: "Wie kann ich den Support kontaktieren?",
        a: "Per E-Mail oder Messenger. Die aktuellen Kontaktdaten finden Sie auf der Kontaktseite und im Fußbereich jeder Seite.",
      },
    ],
  },

  cta: {
    heading: "Bereit für den nächsten Schritt?",
    body: "Wählen Sie ein Paket oder stellen Sie zuerst Ihre Fragen – beides ist völlig in Ordnung.",
    primary: "IPTV Pakete ansehen",
    secondary: "Support kontaktieren",
  },

  guides: {
    heading: "IPTV-Ratgeber",
    subheading: "Vier ausführliche Artikel zu den Themen, die vor der Bestellung wirklich zählen.",
    readMore: "Weiterlesen",
    items: [
      {
        href: "/iptv-deutschland/",
        title: "IPTV Deutschland – Überblick",
        body: "Wie internetbasiertes Fernsehen technisch funktioniert und worauf Sie beim Vergleich achten sollten.",
      },
      {
        href: "/iptv-einrichten/",
        title: "IPTV einrichten",
        body: "Schritt-für-Schritt-Anleitung für Smart-TV, Android TV, Fire TV, Smartphone und Computer.",
      },
      {
        href: "/iptv-geraete/",
        title: "Kompatible IPTV-Geräte",
        body: "Welche Gerätefamilien geeignet sind – und welche Einschränkungen Sie kennen sollten.",
      },
      {
        href: "/iptv-in-deutschland-legal/",
        title: "Ist IPTV in Deutschland legal?",
        body: "Was die Rechtslage über Technik, Lizenzen und die Verantwortung der Nutzer aussagt.",
      },
    ],
  },

  footer: {
    about:
      "Germany IPTV bietet eine übersichtliche Paketauswahl, verständliche Einrichtungshilfe und erreichbaren Support für internetbasiertes Fernsehen in Deutschland.",
    columns: {
      brand: "Germany IPTV",
      navigation: "Navigation",
      guides: "IPTV-Ratgeber",
      service: "Kundenservice",
      legal: "Rechtliches",
    },
    navigation: [
      { label: "Startseite", href: "/" },
      { label: "IPTV Pakete", href: "/iptv-pakete/" },
      { label: "Vorteile", href: "/#vorteile" },
      { label: "Einrichtung", href: "/iptv-einrichten/" },
      { label: "Türkçe Sayfa", href: "/tr/" },
    ],
    guides: [
      { label: "IPTV Deutschland", href: "/iptv-deutschland/" },
      { label: "IPTV einrichten", href: "/iptv-einrichten/" },
      { label: "IPTV-Geräte", href: "/iptv-geraete/" },
      { label: "IPTV legal?", href: "/iptv-in-deutschland-legal/" },
    ],
    service: [
      { label: "Kontakt", href: "/kontakt/" },
      { label: "FAQ", href: "/faq/" },
    ],
    legal: [
      { label: "Datenschutz", href: "/datenschutz/" },
      { label: "AGB", href: "/agb/" },
      { label: "Rückerstattungsrichtlinie", href: "/rueckerstattung/" },
      { label: "Impressum", href: "/impressum/" },
      { label: "Cookie-Richtlinie", href: "/cookie-richtlinie/" },
    ],
    copyright: "© 2026 Germany IPTV. Alle Rechte vorbehalten.",
    disclaimer:
      "Germany IPTV steht in keiner Verbindung zu Sendern, Rechteinhabern oder Geräteherstellern. Genannte Marken dienen ausschließlich der Beschreibung von Gerätekompatibilität.",
    emailLabel: "E-Mail",
    phoneLabel: "Telefon",
    whatsappLabel: "WhatsApp",
  },

  breadcrumb: {
    home: "Startseite",
  },
};

export default de;
export type Dictionary = typeof de;
