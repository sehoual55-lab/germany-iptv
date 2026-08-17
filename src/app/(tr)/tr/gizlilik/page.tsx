import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import PlaceholderNotice from "@/components/PlaceholderNotice";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME, SUPPORT_EMAIL } from "@/config/site.config";

export const metadata: Metadata = buildMetadata({
  locale: "tr",
  path: "/tr/gizlilik/",
  title: "Gizlilik Politikası",
  description: `${SITE_NAME} kişisel verileri nasıl işler: sipariş bilgileri, iletişim talepleri, ödeme süreci, saklama süreleri ve kullanıcı hakları.`,
});

const CRUMBS = [
  { name: "Ana Sayfa", url: "/tr/" },
  { name: "Gizlilik Politikası", url: "/tr/gizlilik/" },
];

export default function TrPrivacyPage() {
  return (
    <ArticlePage
      locale="tr"
      crumbs={CRUMBS}
      title="Gizlilik Politikası"
      lead="Bu metin, sitenin kullanımı sırasında hangi kişisel verilerin işlendiğini, bunun hangi amaçla yapıldığını ve sahip olduğunuz hakları açıklar."
      hideCta
    >
      <PlaceholderNotice locale="tr" />

      <h2>1. Veri sorumlusu</h2>
      <p>
        Bu sitedeki veri işleme faaliyetlerinden,{" "}
        <Link href="/tr/yasal-bildirim/">yasal bildirim</Link> sayfasında belirtilen hizmet sağlayıcı
        sorumludur. Gizlilikle ilgili sorularınız için {SUPPORT_EMAIL} adresine yazabilirsiniz.
      </p>

      <h2>2. Veri azlığı ilkesi</h2>
      <p>
        Yalnızca ilgili amaç için gerekli olan verileri toplarız. Veriler üçüncü taraflara satılmaz ve
        reklam amaçlı profil oluşturulmaz.
      </p>

      <h2>3. Siteye erişim</h2>
      <p>
        Siteye erişildiğinde barındırma sağlayıcısı tarafından sunucu günlük kayıtları işlenir. Bunlar
        genellikle IP adresi, erişim tarihi ve saati, görüntülenen sayfa, yönlendiren adres ile
        tarayıcı ve işletim sistemi bilgilerini içerir. İşlemenin amacı sitenin güvenli ve kararlı
        çalışmasıdır; bu kayıtlar başka veri kaynaklarıyla birleştirilmez.
      </p>

      <h2>4. Sipariş süreci</h2>
      <p>
        Sipariş verdiğinizde girdiğiniz bilgileri işleriz: ad soyad, e-posta adresi, telefon numarası,
        ülke ve isteğe bağlı olarak cihaz veya uygulama bilgisi. Bu veriler yalnızca siparişin
        yürütülmesi ve kurulum bilgilerinin iletilmesi için kullanılır.
      </p>
      <p>
        <strong>Ödeme bilgileri:</strong> Ödeme ve kart bilgileri bu sitede toplanmaz ve saklanmaz.
        Ödeme yalnızca ilgili ödeme sağlayıcısının güvenli sayfasında gerçekleşir; bu sağlayıcı kendi
        gizlilik politikasından sorumludur.
      </p>

      <h2>5. İletişim</h2>
      <p>
        E-posta veya mesajlaşma yoluyla bize ulaştığınızda, talebinizi yanıtlamak amacıyla verdiğiniz
        bilgileri işleriz. Mesajlaşma uygulaması kullanılması hâlinde ilgili sağlayıcının gizlilik
        koşulları da geçerli olur.
      </p>

      <h2>6. Çerezler</h2>
      <p>
        Bu sitede pazarlama veya takip amaçlı çerez kullanılmaz. Yalnızca sayfanın çalışması için
        teknik olarak gerekli depolama işlemleri yapılır. Ayrıntılar için{" "}
        <Link href="/tr/cerez-politikasi/">çerez politikasına</Link> bakabilirsiniz.
      </p>

      <h2>7. Saklama süresi</h2>
      <p>
        Kişisel verileri yalnızca belirtilen amaçlar için gerekli olduğu sürece ya da yasal saklama
        yükümlülükleri devam ettiği sürece saklarız. Fatura belgeleri için ticari ve vergisel mevzuatta
        öngörülen süreler geçerlidir.
      </p>

      <h2>8. Haklarınız</h2>
      <ul>
        <li>Hakkınızda saklanan veriler konusunda bilgi talep etme</li>
        <li>Yanlış verilerin düzeltilmesini isteme</li>
        <li>Silme ve işlemenin sınırlandırılmasını talep etme</li>
        <li>Veri taşınabilirliği talebinde bulunma</li>
        <li>İşlemeye itiraz etme</li>
        <li>Verilmiş bir açık rızayı ileriye dönük olarak geri alma</li>
      </ul>
      <p>
        Bu haklarınızı kullanmak için {SUPPORT_EMAIL} adresine kısa bir mesaj göndermeniz yeterlidir.
        Ayrıca yetkili veri koruma otoritesine şikâyette bulunma hakkınız saklıdır.
      </p>

      <h2>9. Değişiklikler</h2>
      <p>
        Mevzuat ya da işleme faaliyetlerimiz değiştiğinde bu metni güncelleriz. Geçerli olan, bu
        sayfada yayımlanan güncel sürümdür.
      </p>
    </ArticlePage>
  );
}
