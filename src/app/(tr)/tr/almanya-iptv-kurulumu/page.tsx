import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import InstallationSection from "@/components/InstallationSection";
import { buildMetadata } from "@/lib/seo";
import { relatedGuides } from "@/lib/related";

export const metadata: Metadata = buildMetadata({
  locale: "tr",
  path: "/tr/almanya-iptv-kurulumu/",
  title: "Almanya IPTV Kurulumu – Smart TV, Fire TV ve Telefon İçin Adımlar",
  description:
    "Almanya IPTV kurulumu adım adım: Samsung ve LG Smart TV, Android TV, Fire TV, telefon ve bilgisayar için anlatım, artı takılma sorunları için kontrol listesi.",
});

const CRUMBS = [
  { name: "Ana Sayfa", url: "/tr/" },
  { name: "Almanya IPTV Kurulumu", url: "/tr/almanya-iptv-kurulumu/" },
];

const FAQ = [
  {
    q: "Kurulum için teknik bilgi gerekir mi?",
    a: "Hayır. Daha önce bir uygulama kurup şifre girmiş herkes bu adımları izleyebilir. Alışılmadık tek kısım erişim bilgilerinin girilmesidir; destek ekibi tam olarak bu noktada yardımcı olur.",
  },
  {
    q: "M3U tam olarak nedir?",
    a: "M3U, kanal adreslerini içeren basit bir metin listesidir. Çoğu durumda dosyanın kendisi yerine bu listeye giden bir web adresi alırsınız ve bu adresi oynatıcıya bir kez girersiniz. Liste sonrasında kendini günceller.",
  },
  {
    q: "Görüntü takılıyor, ne yapmalıyım?",
    a: "Sorun genellikle toplam hızda değil, modem ile cihaz arasındaki bağlantıdadır. Önce kablolu bağlantıyı deneyin, sonra oynatıcıda çözünürlüğü düşürün, en son olarak da evde aynı anda kaç cihazın yayın aldığını kontrol edin.",
  },
  {
    q: "Kurulum toplamda ne kadar sürer?",
    a: "Güncel bir cihazda genellikle beş ila on dakika. Bu sürenin büyük kısmı oynatıcı uygulamasının kurulmasına gider; erişim bilgilerinin girilmesi tek seferlik ve kısa bir işlemdir.",
  },
];

export default function TrSetupGuidePage() {
  return (
    <ArticlePage
      locale="tr"
      crumbs={CRUMBS}
      title="Almanya IPTV Kurulumu – Adım Adım"
      lead="Kurulum tüm cihazlarda aynı mantığı izler: oynatıcıyı kur, erişim bilgilerini gir, listeyi yükle. Aşağıda cihaz türüne göre ayrıntılar ve bir şeyler ters giderse diye bir kontrol listesi var."
      faq={FAQ}
      faqHeading="Kurulum hakkında sık sorulanlar"
      after={<InstallationSection locale="tr" />}
      related={relatedGuides("tr", "/tr/almanya-iptv-kurulumu/")}
    >
      <p>
        Başlamadan önce iki şeyi hazır bulundurun: sipariş sonrasında size iletilen erişim bilgileri ve
        cihazınızın kumandası. Uzun adresleri kumandayla girmek yorucudur; mümkünse üreticinin
        telefon uygulamasını ya da Bluetooth bir klavye kullanın. Bu, hem zaman kazandırır hem de yazım
        hatalarını önler.
      </p>

      <h2 id="temel">Temel üç adım</h2>
      <ol>
        <li>
          <strong>Oynatıcıyı kurun.</strong> Cihazınızın mağazasında M3U bağlantısı veya portal girişi
          destekleyen bir IPTV oynatıcı arayın.
        </li>
        <li>
          <strong>Erişim bilgilerini girin.</strong> Oynatıcıda yeni bir profil oluşturun ve size
          iletilen adresi ya da kullanıcı adı–şifre ikilisini ekleyin.
        </li>
        <li>
          <strong>Listeyi yükleyin ve test edin.</strong> Oynatıcı kanal listesini indirir. Bir kanal
          açın, görüntü ve sesi kontrol edin, favorilerinizi oluşturun.
        </li>
      </ol>

      <h2 id="smart-tv">Samsung ve LG Smart TV</h2>
      <p>
        Televizyonunuzun mağazasını açın (Samsung’da Tizen, LG’de webOS) ve uygun bir oynatıcı
        uygulaması kurun. Bazı uygulamalar ilk açılışta bir cihaz anahtarı ya da MAC adresi gösterir;
        tek seferlik etkinleştirme isteniyorsa bu bilgiyi not edin. Ardından erişim bilgilerinizi
        girin.
      </p>
      <p>
        Yaklaşık altı sekiz yaşından eski modellerde mağaza çoğu zaman güncellenmez ve yeni uygulamalar
        görünmez. Böyle bir durumda HDMI girişine takılacak uygun fiyatlı bir Android TV ya da Fire TV
        çubuğu, televizyonla uğraşmaktan çok daha hızlı sonuç verir.
      </p>

      <h2 id="android-tv">Android TV ve Google TV</h2>
      <p>
        Oynatıcıyı Play Store üzerinden kurun, açın ve “Liste ekle” ya da benzer adlandırılmış seçeneği
        seçin. Android tabanlı cihazlar genellikle arabellek ayarına izin verir: görüntü ara ara
        duraklıyorsa, çözünürlüğü düşürmeden önce arabelleği bir miktar artırmayı deneyin.
      </p>

      <h2 id="fire-tv">Fire TV Stick ve Fire TV Cube</h2>
      <p>
        Amazon uygulama mağazasında desteklenen bir oynatıcı arayıp kurun; sonrası Android TV ile
        aynıdır. Çubuğu mümkünse televizyonun arkasındaki kapalı bir bölmeye sıkıştırmayın — bu
        noktadaki zayıf kablosuz sinyal, kesintilerin en yaygın nedenlerinden biridir.
      </p>

      <h2 id="mobil">Telefon, tablet ve bilgisayar</h2>
      <p>
        Android ve iOS’ta ilgili mağazadan bir oynatıcı kurun; Windows, macOS ve Linux’ta ağ akışı
        açabilen bir oynatıcı yazılımı kullanın. Akış aynıdır: profil oluştur, adresi yapıştır, listeyi
        yükle. Bilgisayarda adresi kopyala–yapıştır ile aktarabilirsiniz; erişim bilgilerinin doğru
        olduğunu televizyona tek tek yazmadan önce burada test etmek pratik bir yöntemdir.
      </p>

      <h2 id="sorun">Bir şey çalışmıyorsa</h2>
      <p>Aşağıdaki maddeleri sırayla deneyin; neden çoğunlukla listenin üst kısmındadır:</p>
      <ul>
        <li>
          <strong>Hiçbir şey yüklenmiyor:</strong> Adresi karakter karakter kontrol edin. Eksik bir “s”
          ya da otomatik eklenen bir boşluk yeterlidir.
        </li>
        <li>
          <strong>Liste geliyor, görüntü yok:</strong> Başka bir kanal deneyin. O açılıyorsa sorun
          kurulumda değil, tek bir yayındadır.
        </li>
        <li>
          <strong>Düzenli kesintiler:</strong> Deneme amaçlı ağ kablosu bağlayın. Sorun kayboluyorsa
          nedeni kablosuz bağlantıdır.
        </li>
        <li>
          <strong>Ses var, görüntü yok:</strong> Oynatıcıda kod çözücüyü değiştirin (donanım yerine
          yazılım ya da tersi).
        </li>
        <li>
          <strong>Önce çalışıyordu, şimdi çalışmıyor:</strong> Sürenin dolup dolmadığını kontrol edin,
          ardından destek ekibine yazın.
        </li>
      </ul>

      <p>
        Sorun sürerse destek ekibine cihazın tam modelini, oynatıcı uygulamasının adını ve hatanın kısa
        bir tarifini gönderin. Bu üç bilgi, çözüme giden süreyi belirgin biçimde kısaltır. Hangi
        cihazların uygun olduğunu{" "}
        <Link href="/tr/desteklenen-cihazlar/">desteklenen cihazlar</Link> sayfasında, teknik arka planı
        ise <Link href="/tr/almanya-iptv/">Almanya IPTV rehberinde</Link> bulabilirsiniz.
      </p>
    </ArticlePage>
  );
}
