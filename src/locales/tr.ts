import type { Dictionary } from "./de";

/**
 * Turkish (tr-TR) localisation file.
 * Written as original Turkish copy for a Turkish-speaking audience —
 * the intent here is informational, not a literal translation of the German page.
 */

const tr: Dictionary = {
  code: "tr",
  htmlLang: "tr-TR",
  label: "Türkçe",
  flag: "🇹🇷",

  brand: {
    name: "GERMANY IPTV",
    tagline: "Almanya yayınlarına yönelik bilgi ve kurulum rehberi",
  },

  a11y: {
    skipToContent: "İçeriğe geç",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    languageSelector: "Dil seçimi",
    close: "Kapat",
    breadcrumb: "Sayfa yolu",
  },

  nav: [
    { label: "Ana Sayfa", href: "/tr/" },
    { label: "Paketler", href: "/tr/#paketler" },
    { label: "Avantajlar", href: "/tr/#avantajlar" },
    { label: "Cihazlar", href: "/tr/desteklenen-cihazlar/" },
    { label: "Kurulum", href: "/tr/almanya-iptv-kurulumu/" },
    { label: "SSS", href: "/tr/sss/" },
    { label: "İletişim", href: "/tr/iletisim/" },
  ],

  supportButton: "Destek Al",

  hero: {
    eyebrow: "Germany IPTV",
    h1: "Germany IPTV – Almanya IPTV Paketleri ve Kurulum",
    description:
      "Almanya odaklı yayın seçeneklerini uyumlu Smart TV, Android TV, Fire TV ve IPTV oynatıcılarında keşfedin. Size uygun paketi seçin ve kurulum desteği alın.",
    ctaPrimary: "Paketleri İncele",
    ctaSecondary: "Nasıl Çalışır?",
    trustLine: ["Kolay Kurulum", "Uyumlu Cihazlar", "Müşteri Desteği"],
    visualAlt:
      "Smart TV, tablet ve akıllı telefon üzerinde soyut bir yayın arayüzünü gösteren çizim",
  },

  intro: {
    heading: "Germany IPTV Nedir?",
    body: [
      "Germany IPTV ifadesi, Almanya televizyon ve yayın içeriklerine uydu ya da kablo yerine internet bağlantısı üzerinden erişimi anlatmak için kullanılır. Teknik olarak yayın, veri akışı biçiminde uyumlu bir cihaza iletilir; bu cihaz bir Smart TV, bir Android TV kutusu ya da telefonunuzdaki bir IPTV oynatıcı olabilir. Türkiye'de sıkça karşılaşılan alman iptv ve almanya iptv aramaları da çoğunlukla aynı konuyu tarif eder.",
      "Burada net olmakta fayda var: IPTV bir teknolojidir, tek başına bir içerik izni değildir. Hangi kanalların veya içeriklerin izlenebileceği tamamen sağlayıcının sahip olduğu lisanslara bağlıdır. Kullanıcıların yalnızca yasal olarak izlemeye yetkili oldukları içeriklere erişmesi gerekir; içerik erişilebilirliği ve yasallık, lisanslara, sağlayıcıya ve kullanıcının bulunduğu ülkenin mevzuatına göre değişir.",
      "germany servers iptv gibi ifadeler ise genellikle yayın altyapısının Almanya'da barındırılan sunucular üzerinden dağıtıldığını anlatır. Sunucunun konumu bağlantı kalitesini etkileyebilir; ancak bir içeriğin yasal olup olmadığını belirlemez.",
    ],
    facts: [
      { label: "Aktarım", value: "Mevcut internet bağlantınız üzerinden" },
      { label: "Cihazlar", value: "Smart TV, çubuk, kutu, telefon, bilgisayar" },
      { label: "Kurulum", value: "Çoğu cihazda birkaç dakika" },
    ],
  },

  packages: {
    id: "paketler",
    heading: "Germany IPTV Paketleri",
    subheading:
      "Dört farklı süre seçeneği. Fiyatlar tek bir yapılandırma dosyasından yönetilir ve sipariş öncesinde açıkça gösterilir.",
    badgePopular: "EN POPÜLER",
    badgeBestValue: "EN AVANTAJLI",
    cta: "Hemen Sipariş Ver",
    priceOnRequest: "Fiyat için iletişime geçin",
    perPeriod: "tek seferlik",
    durationLine: (m: number) => `${m} ay`,
    bonusLine: (m: number) => `+${m} ay hediye`,
    perDuration: (m: number) => `/ ${m} ay`,
    connections: {
      one: "Bağlantı",
      many: "Bağlantı",
      note: (pct: number) => `İlk bağlantı normal fiyattan · her ek bağlantı %${pct} indirimli`,
      decrease: "Bir bağlantı azalt",
      increase: "Bir bağlantı artır",
      label: "Eşzamanlı bağlantı",
    },
    featureLabels: {
      channels25k: "25.000+ TV kanalı",
      channels130k: "130.000+ TV kanalı",
      vod100k: "100.000+ film & dizi",
      vod140k: "140.000+ film & dizi",
      quality4k: "4K / FHD / HD kalite",
      channelsIntl: "Tüm ABD ve uluslararası kanallar",
      channelsAllIntl: "Tüm uluslararası kanallar",
      allDevices: "Tüm cihazlarla uyumlu",
      epg: "Yayın akışı (EPG)",
      vodLibrary: "Film ve dizilerden oluşan geniş VOD arşivi",
      stableServers: "%100 kararlı sunucular",
      support247: "7/24 teknik destek",
      instantDelivery: "Anında teslimat",
      // Tarafsız satırlar, tercih ederseniz kullanılabilir
      duration: (m: number) => `Erişim süresi: ${m} ay`,
      connections: (n: number) => `${n} eşzamanlı bağlantı`,
      devices: "Uyumlu Smart TV, çubuk, kutu ve oynatıcılar",
      quality: "Kaynağa ve bağlantıya göre SD, HD ve 4K oynatma",
      support: "E-posta veya mesajlaşma ile standart destek",
      prioritySupport: "E-posta veya mesajlaşma ile öncelikli destek",
      setup: "Cihazınızın kurulumunda yardım",
      secureCheckout: "Ödeme sağlayıcısı üzerinden güvenli ödeme",
      delivery: "Ödeme sonrası erişim bilgileri e-posta ile",
      noAutoRenew: "Otomatik yenileme yok",
    } as Record<string, string | ((n: number) => string)>,
    features: {
      duration: (m: number) => `Erişim süresi: ${m} ay`,
      devices: (n: number) => `Uyumlu cihaz: ${n} cihaz`,
      supportStandard: "Standart destek",
      supportPriority: "Öncelikli destek",
      setup: "Kurulum yardımı",
    },
    note:
      "Not: İçeriklerin erişilebilirliği sağlayıcının lisanslarına ve geçerli mevzuata bağlıdır.",
  },

  checkout: {
    eyebrow: "Ödeme",
    title: "Siparişiniz",
    planHeading: "Seçilen Paket",
    connectionHeading: "Bağlantılar",
    detailsHeading: "Bilgileriniz",
    fields: {
      fullName: "Ad Soyad",
      email: "E-posta adresi",
      phone: "Telefon numarası",
      country: "Ülke",
      device: "Cihaz veya uygulama (isteğe bağlı)",
    },
    placeholders: {
      fullName: "Ad Soyad",
      email: "ad@ornek.com",
      phone: "555 000 0000",
      country: "Türkiye",
      device: "örn. Android TV",
    },
    countryLabel: "Ülke kodu",
    payment: {
      heading: "Ödeme yöntemi",
      paypal: "PayPal",
      card: "Kredi veya banka kartı",
      other: "Diğer ödeme sağlayıcısı",
      securityNote:
        "Ödeme bilgileriniz yalnızca ödeme sağlayıcısının güvenli sayfasında girilir. Kart bilgileriniz tarafımızca toplanmaz ve saklanmaz.",
    },
    totalLabel: "Toplam",
    submitWhatsapp: "WhatsApp ile Sipariş Ver",
    submitPayment: "Güvenli ödemeye geç",
    sending: "Gönderiliyor …",
    required: "Zorunlu alan",
    invalidEmail: "Lütfen geçerli bir e-posta adresi girin.",
    successHeading: "Sipariş iletildi",
    successBody:
      "Bilgileriniz kaydedildi. Şimdi WhatsApp'a yönlendirileceksiniz; siparişinizi orada onaylayıp kurulum adımlarını ileteceğiz.",
    successBodyPayment:
      "Bilgileriniz kaydedildi. Şimdi resmi ve güvenli ödeme sayfasına yönlendirileceksiniz.",
    errorHeading: "Gönderim başarısız",
    errorBody:
      "Sipariş kaydedilemedi. Lütfen tekrar deneyin ya da doğrudan bize yazın.",
    retry: "Tekrar dene",
    activationNote: (t: string) => `Kurulum bilgileri ${t} gönderilir.`,
    legalNote:
      "Siparişi göndererek, yalnızca izlemeye yasal olarak yetkili olduğunuz içeriklere erişeceğinizi kabul edersiniz.",
    waMessage: (o: {
      plan: string;
      duration: string;
      connections: number;
      total: string;
      name: string;
      email: string;
      phone: string;
    }) =>
      `Merhaba! Aşağıdaki paketi sipariş etmek istiyorum:

` +
      `Paket: ${o.plan}
Süre: ${o.duration}
Bağlantı: ${o.connections}
Toplam: ${o.total}

` +
      `Ad Soyad: ${o.name}
E-posta: ${o.email}
Telefon: ${o.phone}`,
  },

  features: {
    id: "avantajlar",
    heading: "Neden Germany IPTV?",
    subheading: "Dağınık bir hizmet ile düzgün kurgulanmış bir hizmet arasındaki altı fark.",
    items: [
      {
        icon: "setup",
        title: "Kolay Kurulum",
        body: "Yaygın Smart TV'ler, yayın çubukları ve IPTV oynatıcıları için sade adımlar; teknik bilgi gerektirmez.",
      },
      {
        icon: "package",
        title: "Esnek Paketler",
        body: "Bir aydan on iki aya kadar süre seçenekleri. Ne kadar süre kullanacağınıza siz karar verirsiniz.",
      },
      {
        icon: "devices",
        title: "Cihaz Uyumluluğu",
        body: "Yaygın cihaz ve uygulamalar için rehberler. Cihazınızın uygun olup olmadığını sipariş öncesi birlikte kontrol edelim.",
      },
      {
        icon: "support",
        title: "Müşteri Desteği",
        body: "E-posta veya mesajlaşma üzerinden ulaşılabilir destek – Türkçe ve Almanca.",
      },
      {
        icon: "shield",
        title: "Güvenli Ödeme",
        body: "Ödeme, sağlayıcının resmi sayfası üzerinden yapılır. Kart bilgileri sitemizde toplanmaz.",
      },
      {
        icon: "sparkle",
        title: "Modern Kullanım Deneyimi",
        body: "Açılır pencere yağmuru olmayan, şeffaf ve hızlı açılan bir site.",
      },
    ],
  },

  howItWorks: {
    id: "nasil-calisir",
    heading: "Nasıl Çalışır?",
    subheading: "Seçimden kuruluma üç adım.",
    steps: [
      {
        number: "01",
        title: "Paketinizi Seçin",
        body: "İhtiyacınıza uygun süreyi belirleyin.",
      },
      {
        number: "02",
        title: "Siparişi Tamamlayın",
        body: "Bilgilerinizi girin ve güvenli ödeme işlemini tamamlayın.",
      },
      {
        number: "03",
        title: "Kuruluma Başlayın",
        body: "Uyumlu cihazınız için gerekli genel kurulum bilgilerini alın.",
      },
    ],
  },

  devices: {
    id: "cihazlar",
    heading: "Uyumlu Cihazlar",
    subheading:
      "IPTV için sık kullanılan cihaz aileleri. Kendi modelinizin ve uygulamanızın uygun olup olmadığını sipariş öncesinde birlikte kontrol edebiliriz.",
    cta: "Kurulum Desteği Al",
    disclaimer:
      "Her model ve her uygulama otomatik olarak desteklenmez. Emin değilseniz sipariş öncesinde bize sorun.",
    items: [
      { icon: "tv", title: "Samsung Smart TV", body: "Tizen işletim sistemli modeller ve uyumlu bir IPTV oynatıcı." },
      { icon: "tv", title: "LG Smart TV", body: "Mağazadan uygun bir oynatıcı uygulaması kurulabilen webOS cihazlar." },
      { icon: "android", title: "Android TV", body: "Android TV cihazları, TV kutuları ve Google TV modelleri." },
      { icon: "fire", title: "Fire TV", body: "Desteklenen uygulamalarla Fire TV Stick ve Fire TV Cube." },
      { icon: "mobile", title: "Telefon ve Tabletler", body: "Uygun bir IPTV oynatıcıya sahip Android ve iOS cihazlar." },
      { icon: "desktop", title: "Bilgisayarlar", body: "Uygun oynatıcı yazılımıyla Windows, macOS ve Linux." },
      { icon: "player", title: "Uyumlu IPTV Oynatıcılar", body: "M3U bağlantısı veya portal girişi destekleyen yaygın uygulamalar." },
      { icon: "box", title: "Set Üstü Kutular", body: "Ağ bağlantısı olan yaygın set üstü kutu modelleri." },
    ],
    tilesHeading: "Birçok ekranda kullanılabilir",
    tilesSubheading:
      "Tek bir erişim, birden fazla cihaz sınıfı. Belirleyici olan marka değil, uygun bir oynatıcı uygulamasının kurulabilmesidir.",
    trademarkNote:
      "Anılan tüm marka ve ürün adları ile logolar ilgili hak sahiplerine aittir ve burada yalnızca cihaz uyumluluğunu tarif etmek için kullanılmıştır. Bu firmalarla herhangi bir bağlantı, ortaklık ya da onay ilişkisi yoktur.",
    tiles: [
      { icon: "samsung", title: "Samsung TV", note: "Tizen" },
      { icon: "lg", title: "LG Smart TV", note: "webOS" },
      { icon: "sony", title: "Sony TV", note: "Android TV" },
      { icon: "amazon", title: "Fire TV Stick", note: "Fire OS" },
      { icon: "appletv", title: "Apple TV", note: "tvOS" },
      { icon: "apple", title: "iPhone & iPad", note: "iOS / iPadOS" },
      { icon: "android", title: "Android", note: "Telefon & Tablet" },
      { icon: "chromecast", title: "Google TV", note: "Chromecast" },
      { icon: "roku", title: "Roku", note: "M3U oynatıcı" },
      { icon: "xbox", title: "Xbox", note: "Medya oynatıcı uygulaması" },
      { icon: "windows", title: "Windows", note: "Oynatıcı yazılımı" },
      { icon: "linux", title: "Linux", note: "Oynatıcı yazılımı" },
    ],
  },

  installation: {
    id: "kurulum",
    eyebrow: "Kurulum rehberleri",
    heading: "Cihazınıza Göre Kurulum",
    subheading:
      "Her cihazda adımlar aynı: uygulamayı kur, bilgileri gir, listeyi yükle. Cihaz türünüzü seçin; ayrıntılı anlatım erişim bilgilerinizle birlikte iletilir.",
    appLabel: "Yaygın uygulamalar",
    cta: "Kurulum Desteği Al",
    disclaimer:
      "Anılan uygulamalar üçüncü taraflara ait yaygın örneklerdir; bu firmalarla bağlantımız yoktur. Belirli bir uygulamanın modelinizde bulunup bulunmadığına ilgili uygulama mağazası karar verir — emin değilseniz önceden sorun.",
    items: [
      {
        icon: "tv",
        title: "Smart TV",
        apps: "TV mağazasındaki oynatıcı uygulaması",
        steps: ["Mağazadan oynatıcı uygulamasını kurun", "Erişim bilgilerini ya da M3U adresini girin", "Listeyi yükleyip test edin"],
      },
      {
        icon: "amazon",
        title: "Fire TV Stick",
        apps: "Amazon uygulama mağazası",
        steps: ["Desteklenen bir oynatıcı kurun", "Size iletilen bilgilerle giriş yapın", "Listeyi yükleyip favori ekleyin"],
      },
      {
        icon: "android",
        title: "Android TV",
        apps: "Play Store oynatıcıları",
        steps: ["Oynatıcı uygulamasını kurun", "M3U adresiyle liste ekleyin", "Arabelleği ayarlayıp başlatın"],
      },
      {
        icon: "box",
        title: "Set Üstü Kutu",
        apps: "Portal ya da M3U modu",
        steps: ["Portal adresini menüye girin", "Cihaz kimliğini destek ekibine iletin", "Yeniden başlatıp listeyi yükleyin"],
      },
      {
        icon: "appletv",
        title: "Apple TV",
        apps: "App Store oynatıcıları",
        steps: ["Uygun bir oynatıcı kurun", "Erişim bilgilerini girin", "Bir kanal test edip favori ekleyin"],
      },
      {
        icon: "windows",
        title: "Windows",
        apps: "Ağ akışı açan oynatıcı yazılımı",
        steps: ["Oynatıcı yazılımını kurun", "M3U adresini yapıştırın", "Oynatmayı kontrol edin"],
      },
      {
        icon: "apple",
        title: "macOS",
        apps: "Ağ akışı açan oynatıcı yazılımı",
        steps: ["Oynatıcı yazılımını kurun", "Bilgileri ya da M3U adresini girin", "Listeyi yükleyip başlatın"],
      },
      {
        icon: "apple",
        title: "iPhone & iPad",
        apps: "App Store oynatıcıları",
        steps: ["Oynatıcı uygulamasını indirin", "Erişim bilgilerini girin", "Wi-Fi ya da mobil ağda izleyin"],
      },
      {
        icon: "android",
        title: "Android Telefon",
        apps: "Play Store oynatıcıları",
        steps: ["Oynatıcı uygulamasını indirin", "M3U listesini ekleyin", "Yayını başlatın"],
      },
    ],
  },

  trust: {
    heading: "Güvenebileceğiniz Noktalar",
    subheading: "Uydurma yorum, uydurma puan ve uydurma rakam yok – yalnızca açık taahhütler.",
    items: [
      { title: "Şeffaf Fiyatlar", body: "Toplam tutar sipariş öncesinde görünür." },
      { title: "Kolay Sipariş", body: "Kısa bir form, gereksiz zorunlu alan yok." },
      { title: "Kurulum Yardımı", body: "Uyumlu cihazınız için genel adımlar." },
      { title: "Müşteri Desteği", body: "E-posta veya mesajlaşma ile yanıt." },
      { title: "Güvenli Ödeme", body: "Ödeme sağlayıcısının resmi sayfası üzerinden." },
    ],
    legalPrinciple:
      "Kullanıcılar yalnızca izlemeye yasal olarak yetkili oldukları içeriklere erişmelidir. İçerik erişilebilirliği ve yasallık; lisanslara, sağlayıcıya ve kullanıcının bulunduğu ülkenin mevzuatına bağlıdır.",
    legalHeading: "Yasal İlke",
  },

  faq: {
    id: "sss",
    heading: "Sıkça Sorulan Sorular",
    subheading: "Bize en çok ulaşan soruların yanıtları.",
    moreLink: "Tüm soruları görüntüle",
    items: [
      {
        q: "Germany IPTV nedir?",
        a: "Germany IPTV, Almanya televizyon ve yayın içeriklerine internet üzerinden erişimi tanımlayan genel bir ifadedir. Yayın, uydu veya kablo yerine veri akışı olarak uyumlu bir cihaza iletilir. Hangi içeriklerin sunulduğu sağlayıcının lisanslarına bağlıdır.",
      },
      {
        q: "Almanya IPTV nasıl çalışır?",
        a: "Kararlı bir internet bağlantısı, uyumlu bir cihaz ve uygun bir oynatıcı uygulaması gerekir. Sipariş sonrasında genel kurulum adımlarını alır, erişim bilgilerinizi oynatıcıya girer ve listeyi yüklersiniz.",
      },
      {
        q: "Hangi cihazlar uyumludur?",
        a: "Samsung ve LG Smart TV'ler, Android TV cihazları, Fire TV, telefonlar, tabletler, bilgisayarlar ve ağ bağlantılı set üstü kutular sık kullanılan seçeneklerdir. Her model otomatik olarak uygun değildir; emin değilseniz önceden sorun.",
      },
      {
        q: "IPTV kurulumu nasıl yapılır?",
        a: "Üç adımda: uyumlu bir oynatıcı uygulaması kurun, size iletilen erişim bilgilerini girin ve listeyi yükleyin. Ayrıntılı anlatım için “Almanya IPTV Kurulumu” sayfasına bakabilirsiniz.",
      },
      {
        q: "M3U bağlantısı gerekli mi?",
        a: "Bu, kullandığınız oynatıcıya bağlıdır. Bazı uygulamalar M3U bağlantısıyla, bazıları ise portal adresi veya kullanıcı bilgileriyle çalışır. Cihazınıza uygun yöntem kurulum bilgileriyle birlikte iletilir.",
      },
      {
        q: "Kurulum ne kadar sürer?",
        a: "Çoğu cihazda kurulumun kendisi birkaç dakika sürer. En uzun süren kısım genellikle uygun oynatıcı uygulamasının kurulmasıdır.",
      },
      {
        q: "Birden fazla cihazda kullanabilir miyim?",
        a: "Aynı anda kullanılabilecek cihaz sayısı seçtiğiniz pakette belirtilir. Oynatıcı uygulamasını birden fazla cihaza kurabilirsiniz, ancak eşzamanlı kullanım paket kapsamıyla sınırlıdır.",
      },
      {
        q: "Almanya IPTV yasal mı?",
        a: "IPTV bir aktarım teknolojisidir ve teknolojinin kendisi yasaktır denemez. Belirleyici olan, sağlayıcının sunduğu içerikler için gerekli lisanslara sahip olup olmadığıdır. Yalnızca erişmeye yetkili olduğunuz içerikleri kullanın. Bu metin hukuki danışmanlık değildir.",
      },
      {
        q: "Destek ekibine nasıl ulaşabilirim?",
        a: "E-posta veya mesajlaşma yoluyla. Güncel iletişim bilgileri İletişim sayfasında ve her sayfanın alt bölümünde yer alır.",
      },
    ],
  },

  cta: {
    heading: "Bir sonraki adıma hazır mısınız?",
    body: "İster doğrudan bir paket seçin, ister önce sorularınızı sorun – ikisi de gayet normal.",
    primary: "Paketleri İncele",
    secondary: "Destek Al",
  },

  guides: {
    heading: "IPTV Rehberleri",
    subheading: "Sipariş öncesinde gerçekten işinize yarayacak dört ayrıntılı yazı.",
    readMore: "Devamını oku",
    items: [
      {
        href: "/tr/almanya-iptv/",
        title: "Almanya IPTV Rehberi",
        body: "Almanya odaklı internet televizyonunun nasıl çalıştığı ve nelere dikkat edilmesi gerektiği.",
      },
      {
        href: "/tr/almanya-iptv-kurulumu/",
        title: "Almanya IPTV Kurulumu",
        body: "Smart TV, Android TV, Fire TV, telefon ve bilgisayar için adım adım kurulum.",
      },
      {
        href: "/tr/desteklenen-cihazlar/",
        title: "Desteklenen Cihazlar",
        body: "Hangi cihaz aileleri uygundur, hangi sınırlamaları bilmekte fayda vardır.",
      },
      {
        href: "/tr/almanya-iptv-yasal-mi/",
        title: "Almanya IPTV Yasal mı?",
        body: "Teknoloji, lisanslar ve kullanıcı sorumluluğu arasındaki farkın açıklaması.",
      },
    ],
  },

  footer: {
    about:
      "Germany IPTV; Almanya odaklı internet televizyonu hakkında bilgi, uyumlu cihaz rehberleri ve kurulum desteği sunar.",
    columns: {
      brand: "Germany IPTV",
      navigation: "Navigasyon",
      guides: "IPTV Rehberleri",
      service: "Müşteri Desteği",
      legal: "Yasal Bilgiler",
    },
    navigation: [
      { label: "Ana Sayfa", href: "/tr/" },
      { label: "Paketler", href: "/tr/#paketler" },
      { label: "Avantajlar", href: "/tr/#avantajlar" },
      { label: "Kurulum", href: "/tr/almanya-iptv-kurulumu/" },
      { label: "Deutsche Seite", href: "/" },
    ],
    guides: [
      { label: "Almanya IPTV Rehberi", href: "/tr/almanya-iptv/" },
      { label: "Kurulum", href: "/tr/almanya-iptv-kurulumu/" },
      { label: "Desteklenen Cihazlar", href: "/tr/desteklenen-cihazlar/" },
      { label: "Yasal mı?", href: "/tr/almanya-iptv-yasal-mi/" },
    ],
    service: [
      { label: "İletişim", href: "/tr/iletisim/" },
      { label: "SSS", href: "/tr/sss/" },
    ],
    legal: [
      { label: "Gizlilik Politikası", href: "/tr/gizlilik/" },
      { label: "Kullanım Koşulları", href: "/tr/kullanim-kosullari/" },
      { label: "İade Politikası", href: "/tr/iade-politikasi/" },
      { label: "Yasal Bildirim", href: "/tr/yasal-bildirim/" },
      { label: "Çerez Politikası", href: "/tr/cerez-politikasi/" },
    ],
    copyright: "© 2026 Germany IPTV. Tüm hakları saklıdır.",
    disclaimer:
      "Germany IPTV; yayıncılar, hak sahipleri veya cihaz üreticileriyle bağlantılı değildir. Anılan marka adları yalnızca cihaz uyumluluğunu tarif etmek için kullanılır.",
    emailLabel: "E-posta",
    phoneLabel: "Telefon",
    whatsappLabel: "WhatsApp",
  },

  breadcrumb: {
    home: "Ana Sayfa",
  },
};

export default tr;
