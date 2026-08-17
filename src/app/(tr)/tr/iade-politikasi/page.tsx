import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import PlaceholderNotice from "@/components/PlaceholderNotice";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME, SUPPORT_EMAIL } from "@/config/site.config";

export const metadata: Metadata = buildMetadata({
  locale: "tr",
  path: "/tr/iade-politikasi/",
  title: "İade Politikası ve Cayma Hakkı",
  description: `${SITE_NAME} hizmetinde iade hangi durumlarda mümkündür, dijital içeriklerde cayma hakkı nasıl işler ve iade talebi nasıl oluşturulur?`,
});

const CRUMBS = [
  { name: "Ana Sayfa", url: "/tr/" },
  { name: "İade Politikası", url: "/tr/iade-politikasi/" },
];

const FAQ = [
  {
    q: "Cihazım uyumlu değilse param iade edilir mi?",
    a: "Uyumluluğu mümkünse sipariş öncesinde netleştirin; destek ekibi tam olarak bunun için var. Sipariş sonrasında hiçbir cihazınızda kurulumun mümkün olmadığı ortaya çıkarsa hemen bize yazın; önce teknik bir çözüm ararız, ardından iade değerlendirmesi yaparız.",
  },
  {
    q: "İade işlemi ne kadar sürer?",
    a: "Onaydan sonra iade, ödemeyi yaptığınız yöntemin üzerinden başlatılır. Tutarın hesabınıza geçme süresi ödeme sağlayıcınıza bağlıdır.",
  },
  {
    q: "Kısa süreli kesintilerde iade alabilir miyim?",
    a: "Kısa süreli teknik kesintiler tek başına iade hakkı doğurmaz. Yine de kesintiyi zamanında bildirin ki kayıt altına alınabilsin ve giderilebilsin.",
  },
];

export default function TrRefundPage() {
  return (
    <ArticlePage
      locale="tr"
      crumbs={CRUMBS}
      title="İade Politikası"
      lead="Bu sayfa iadenin hangi durumlarda mümkün olduğunu, tüketici olarak sahip olduğunuz yasal hakları ve iade talebini nasıl oluşturacağınızı açıklar."
      faq={FAQ}
      faqHeading="İade hakkında sorular"
      hideCta
    >
      <PlaceholderNotice locale="tr" />

      <h2>Yasal cayma hakkı</h2>
      <p>
        Tüketiciler kural olarak sözleşmenin kurulmasından itibaren on dört günlük bir cayma hakkına
        sahiptir. Fiziksel bir veri taşıyıcısı olmadan sunulan dijital içeriklerde bu hak, ifaya cayma
        süresi dolmadan başlanmasına açıkça onay verdiyseniz ve bu onayla cayma hakkınızın sona
        ereceğini bildiğinizi teyit ettiyseniz erken sona erer.
      </p>
      <p>
        Pratikte bu şu anlama gelir: Erişim bilgileri size iletildikten ve hemen ifaya onay verdikten
        sonra cayma genellikle mümkün olmaz. Bu nedenle sipariş akışında bu konuya açıkça yer veriyoruz.
      </p>

      <h2>İade yaptığımız durumlar</h2>
      <ul>
        <li>
          <strong>Mükerrer ödeme:</strong> Yanlışlıkla iki kez alınan ödeme tam olarak iade edilir.
        </li>
        <li>
          <strong>Hizmetin sunulmaması:</strong> Ödeme yapılmış olmasına rağmen erişim bilgileri
          iletilmemişse ve bu durum iletişime rağmen giderilemiyorsa ödenen tutar iade edilir.
        </li>
        <li>
          <strong>Kalıcı teknik imkânsızlık:</strong> Ortak sorun giderme çabasına rağmen uyumlu
          cihazlarınızın hiçbirinde kurulum yapılamıyorsa iade değerlendirilir.
        </li>
      </ul>

      <h2>İadenin mümkün olmadığı durumlar</h2>
      <ul>
        <li>Erişim kullanılmışsa ve cayma süresi dolmuş ya da sona ermişse;</li>
        <li>Kısa süreli kesinti veya bakım çalışmalarında;</li>
        <li>
          Sorunun internet bağlantınızdan, cihazınızdan ya da kendi seçtiğiniz üçüncü taraf bir
          uygulamadan kaynaklandığı belirlenmişse;
        </li>
        <li>
          <Link href="/tr/kullanim-kosullari/">kullanım koşullarının</Link> ihlali hâlinde, özellikle
          erişim bilgilerinin paylaşılmasında.
        </li>
      </ul>

      <h2>İade talebi nasıl oluşturulur?</h2>
      <ol>
        <li>{SUPPORT_EMAIL} adresine “İade” konu başlığıyla yazın.</li>
        <li>Siparişteki ad soyad, e-posta adresi ve sipariş tarihini belirtin.</li>
        <li>Gerekçeyi kısaca açıklayın; varsa ekran görüntülerini ekleyin.</li>
      </ol>
      <p>
        Talebiniz ulaştıktan sonra size dönüş yapar, iadenin yapılıp yapılmayacağını ve tutarını
        bildiririz. Ödeme, ilk işlemde kullanılan yöntem üzerinden gerçekleşir.
      </p>
    </ArticlePage>
  );
}
