import type { Metadata } from "next";
import ArticlePage from "@/components/ArticlePage";
import PlaceholderNotice from "@/components/PlaceholderNotice";
import { buildMetadata } from "@/lib/seo";
import { COMPANY, DOMAIN, PHONE_NUMBER, SITE_NAME, SUPPORT_EMAIL } from "@/config/site.config";

export const metadata: Metadata = buildMetadata({
  locale: "tr",
  path: "/tr/yasal-bildirim/",
  title: "Yasal Bildirim",
  description: `${SITE_NAME} hizmet sağlayıcı bilgileri, iletişim kanalları ve içerik sorumluluğuna ilişkin açıklamalar.`,
});

const CRUMBS = [
  { name: "Ana Sayfa", url: "/tr/" },
  { name: "Yasal Bildirim", url: "/tr/yasal-bildirim/" },
];

export default function TrImprintPage() {
  const incomplete = !COMPANY.legalName || !COMPANY.addressLine;

  return (
    <ArticlePage
      locale="tr"
      crumbs={CRUMBS}
      title="Yasal Bildirim"
      lead={`${DOMAIN} alan adı üzerinden sunulan hizmete ilişkin sağlayıcı bilgileri.`}
      hideCta
    >
      {incomplete ? <PlaceholderNotice locale="tr" /> : null}

      <h2>Hizmet sağlayıcı</h2>
      <ul>
        <li>{COMPANY.legalName || "[Şirket ya da işletme sahibinin tam adı]"}</li>
        <li>{COMPANY.addressLine || "[Adres]"}</li>
        <li>
          {COMPANY.postalCode || "[Posta kodu]"} {COMPANY.city || "[Şehir]"}
        </li>
        <li>{COMPANY.country === "DE" ? "Almanya" : COMPANY.country || "[Ülke]"}</li>
      </ul>

      <h2>Temsilci</h2>
      <p>{COMPANY.representative || "[Yetkili kişinin adı]"}</p>

      <h2>İletişim</h2>
      <ul>
        <li>E-posta: {SUPPORT_EMAIL}</li>
        <li>Telefon: {PHONE_NUMBER}</li>
      </ul>

      <h2>Ticaret sicili</h2>
      <p>{COMPANY.registerEntry || "[Sicil bilgisi, varsa]"}</p>

      <h2>Vergi numarası</h2>
      <p>{COMPANY.vatId || "[Vergi kimlik numarası, varsa]"}</p>

      <h2>İçerik sorumluluğu</h2>
      <p>
        Bu sitedeki kendi içeriklerimizden genel mevzuat çerçevesinde sorumluyuz. Üçüncü taraflarca
        iletilen ya da saklanan bilgileri izleme veya hukuka aykırı bir faaliyete işaret eden durumları
        araştırma yükümlülüğümüz bulunmamaktadır. Genel mevzuattan doğan bilgi kaldırma ya da erişimi
        engelleme yükümlülükleri saklıdır.
      </p>

      <h2>Bağlantılar</h2>
      <p>
        Sitemiz, içeriği üzerinde etkimizin bulunmadığı üçüncü taraf sitelere bağlantılar içerebilir.
        Bağlantı verilen sayfaların içeriğinden ilgili sağlayıcı sorumludur. Hukuka aykırılık
        öğrendiğimizde bu tür bağlantıları ivedilikle kaldırırız.
      </p>

      <h2>Telif hakkı ve marka bilgisi</h2>
      <p>
        Bu sayfalarda yer alan ve tarafımızca oluşturulan içerikler telif hakkıyla korunmaktadır. Metin
        içinde geçen üçüncü taraf marka ve ürün adları yalnızca cihaz uyumluluğunu tarif etmek amacıyla
        kullanılmıştır; ilgili haklar sahiplerine aittir ve bu şirketlerle herhangi bir bağlantımız
        yoktur.
      </p>
    </ArticlePage>
  );
}
