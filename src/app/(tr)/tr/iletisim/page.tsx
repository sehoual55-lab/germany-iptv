import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import ContactBlocks from "@/components/ContactBlocks";
import { buildMetadata } from "@/lib/seo";
import { ACTIVATION_TIME } from "@/config/site.config";

export const metadata: Metadata = buildMetadata({
  locale: "tr",
  path: "/tr/iletisim/",
  title: "İletişim – Sipariş ve Kurulum Desteği",
  description:
    "Germany IPTV destek ekibine nasıl ulaşırsınız: e-posta veya mesajlaşma yoluyla, Türkçe ve Almanca. Hızlı yanıt almak için hangi bilgileri paylaşmanız gerektiğiyle birlikte.",
});

const CRUMBS = [
  { name: "Ana Sayfa", url: "/tr/" },
  { name: "İletişim", url: "/tr/iletisim/" },
];

const FAQ = [
  {
    q: "Ne kadar sürede yanıt alırım?",
    a: "Talepleri geliş sırasına göre yanıtlıyoruz. Cihaz adı, oynatıcı adı ve kısa bir hata tarifi içeren mesajlar en hızlı çözülenlerdir; çünkü ek soru sormaya gerek kalmaz.",
  },
  {
    q: "Destek hangi dillerde veriliyor?",
    a: "Türkçe ve Almanca. İngilizce yazışma da mümkündür.",
  },
  {
    q: "Sipariş öncesinde soru sorabilir miyim?",
    a: "Kesinlikle. Cihaz uyumluluğu ya da uygun süre seçimi gibi konular, sipariş sonrasına bırakılmaktansa öncesinde konuşulduğunda çok daha faydalıdır.",
  },
];

export default function TrContactPage() {
  return (
    <ArticlePage
      locale="tr"
      crumbs={CRUMBS}
      title="Germany IPTV Destek İletişimi"
      lead="Cihaz uyumluluğu, sipariş ya da kurulum hakkında sorunuz mu var? Türkçe ya da Almanca yazabilirsiniz."
      faq={FAQ}
      faqHeading="İletişim hakkında sorular"
      hideCta
    >
      <ContactBlocks locale="tr" />

      <h2 id="hizli">Daha hızlı yanıt almanın yolu</h2>
      <p>
        Kurulumla ilgili taleplerin neredeyse tamamı, şu üç bilgi mesajda yer aldığında ilk temasta
        çözülür:
      </p>
      <ul>
        <li>
          <strong>Cihaz ve model</strong> — örneğin “Samsung Smart TV, 2021 model” ya da “Fire TV
          Stick 4K”.
        </li>
        <li>
          <strong>Kullandığınız oynatıcı uygulaması</strong> — mağazadaki tam adıyla.
        </li>
        <li>
          <strong>Sorunun tarifi</strong> — ne oluyor, hangi adımda oluyor ve şimdiye kadar neyi
          denediniz.
        </li>
      </ul>
      <p>
        Ekran fotoğrafı, özellikle hata mesajlarında işleri kolaylaştırır. Lütfen erişim bilgilerinizi
        ya da ödeme bilgilerinizi mesajla göndermeyin — bunları hiçbir zaman talep etmiyoruz.
      </p>

      <h2 id="siparis-sonrasi">Sipariş sonrasında</h2>
      <p>
        Genel kurulum adımları, sipariş sırasında verdiğiniz e-posta adresine {ACTIVATION_TIME.tr}{" "}
        gönderilir. Bir şey ulaşmadıysa lütfen istenmeyen posta klasörünü de kontrol edin ve ardından
        bize yazın.
      </p>

      <h2 id="belki">Belki yanıtı hazır</h2>
      <p>
        Birçok soru rehberlerimizde zaten açıklanıyor:{" "}
        <Link href="/tr/almanya-iptv-kurulumu/">kurulum</Link>,{" "}
        <Link href="/tr/desteklenen-cihazlar/">desteklenen cihazlar</Link> ve{" "}
        <Link href="/tr/sss/">SSS sayfası</Link>. Almanca içerikler için{" "}
        <Link href="/">Germany IPTV ana sayfasına</Link> göz atabilirsiniz.
      </p>
    </ArticlePage>
  );
}
