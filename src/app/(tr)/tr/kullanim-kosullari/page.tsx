import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import PlaceholderNotice from "@/components/PlaceholderNotice";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME, SUPPORT_EMAIL } from "@/config/site.config";

export const metadata: Metadata = buildMetadata({
  locale: "tr",
  path: "/tr/kullanim-kosullari/",
  title: "Kullanım Koşulları",
  description: `${SITE_NAME} hizmetinin kullanım koşulları: sözleşmenin kurulması, hizmet kapsamı, fiyatlar, süre, kullanıcı yükümlülükleri ve sorumluluk.`,
});

const CRUMBS = [
  { name: "Ana Sayfa", url: "/tr/" },
  { name: "Kullanım Koşulları", url: "/tr/kullanim-kosullari/" },
];

export default function TrTermsPage() {
  return (
    <ArticlePage
      locale="tr"
      crumbs={CRUMBS}
      title="Kullanım Koşulları"
      lead="Bu koşullar, hizmet sağlayıcı ile bu siteyi kullanan kişiler arasındaki ilişkiyi düzenler."
      hideCta
    >
      <PlaceholderNotice locale="tr" />

      <h2>1. Kapsam</h2>
      <p>
        Bu koşullar, <Link href="/tr/yasal-bildirim/">yasal bildirim</Link> sayfasında belirtilen
        hizmet sağlayıcı ile müşteri arasında bu site üzerinden kurulan tüm sözleşmeler için geçerlidir.
      </p>

      <h2>2. Sözleşmenin kurulması</h2>
      <p>
        Sitedeki paket sunumu bağlayıcı bir teklif değil, teklif verilmesine yönelik bir davettir.
        Siparişi göndermenizle bağlayıcı bir teklif vermiş olursunuz. Sözleşme, sağlayıcının onayı ya
        da kurulum bilgilerinin iletilmesiyle kurulur.
      </p>

      <h2>3. Hizmet kapsamı</h2>
      <p>
        Sağlayıcı, kararlaştırılan süre boyunca bir erişim ve uyumlu cihazlar için genel kurulum
        bilgileri sunar. Belirli kanallar, programlar veya hak paketleri taahhüt edilmez. İçeriklerin
        erişilebilirliği ve yasallığı; lisanslara, ilgili sağlayıcıya ve kullanıcının bulunduğu ülkenin
        mevzuatına bağlıdır.
      </p>
      <p>
        Kesintisiz erişilebilirlik teknik olarak garanti edilemez. Bakım çalışmaları, internet
        kaynaklı arızalar ve sağlayıcının etki alanı dışındaki durumlar geçici kısıtlamalara yol
        açabilir.
      </p>

      <h2>4. Fiyatlar ve ödeme</h2>
      <p>
        Sipariş anında sitede belirtilen fiyatlar geçerlidir. Toplam tutar sipariş gönderilmeden önce
        gösterilir. Ödeme, seçilen ödeme sağlayıcısının güvenli sayfası üzerinden yapılır; kart
        bilgileri sağlayıcı tarafından toplanmaz.
      </p>

      <h2>5. Süre</h2>
      <p>
        Süre, seçilen pakete göre belirlenir ve erişim bilgilerinin iletilmesiyle başlar. Otomatik
        yenileme yoktur; devam için yeni bir sipariş gerekir.
      </p>

      <h2>6. Kullanıcı yükümlülükleri</h2>
      <ul>
        <li>
          Yalnızca erişim hakkına sahip olduğunuz içerikleri kullanmak ve geçerli telif hakkı
          kurallarına uymak;
        </li>
        <li>
          Size iletilen erişim bilgilerini gizli tutmak, üçüncü kişilerle paylaşmamak ve yeniden
          satmamak;
        </li>
        <li>
          Erişimi, seçtiğiniz pakette tarif edilen kapsamın ötesinde — örneğin gerekli haklar olmadan
          ticari ya da umuma açık gösterim biçiminde — kullanmamak.
        </li>
      </ul>
      <p>İhlal hâlinde sağlayıcı erişimi durdurabilir; diğer talep hakları saklıdır.</p>

      <h2>7. Cayma ve iade</h2>
      <p>
        Tüketicilerin yasal cayma hakları saklıdır. Dijital içeriklerde cayma hakkının erken sona
        ermesine ilişkin bilgiler dâhil ayrıntılar için{" "}
        <Link href="/tr/iade-politikasi/">iade politikası</Link> sayfasına bakın.
      </p>

      <h2>8. Sorumluluk</h2>
      <p>
        Sağlayıcı; kasıt ve ağır ihmal ile yaşam, vücut bütünlüğü ve sağlığın ihlali hâllerinde
        sınırsız sorumludur. Hafif ihmalde sorumluluk yalnızca esaslı sözleşme yükümlülüklerinin
        ihlaliyle sınırlıdır ve sözleşmeye özgü öngörülebilir zararla kısıtlıdır.
      </p>

      <h2>9. Son hükümler</h2>
      <p>
        Sözleşme ilişkisine, sağlayıcının yerleşik olduğu ülkenin hukuku uygulanır; tüketicinin mutat
        meskeninin bulunduğu ülkedeki emredici tüketici koruma hükümleri saklıdır. Bir hükmün geçersiz
        olması diğer hükümlerin geçerliliğini etkilemez.
      </p>
      <p>Bu koşullara ilişkin sorularınızı {SUPPORT_EMAIL} adresine iletebilirsiniz.</p>
    </ArticlePage>
  );
}
