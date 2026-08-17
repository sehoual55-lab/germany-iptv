import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME, SUPPORT_EMAIL } from "@/config/site.config";

export const metadata: Metadata = buildMetadata({
  locale: "tr",
  path: "/tr/cerez-politikasi/",
  title: "Çerez Politikası",
  description: `${SITE_NAME} hangi çerezleri ve yerel depolama yöntemlerini kullanır — ve bu site neden takip ile reklam çerezleri olmadan çalışır?`,
});

const CRUMBS = [
  { name: "Ana Sayfa", url: "/tr/" },
  { name: "Çerez Politikası", url: "/tr/cerez-politikasi/" },
];

export default function TrCookiePage() {
  return (
    <ArticlePage
      locale="tr"
      crumbs={CRUMBS}
      title="Çerez Politikası"
      lead="Bu site bilinçli olarak sade kurgulanmıştır: reklam ya da takip amaçlı çerez kullanılmaz."
      hideCta
    >
      <h2>Çerez nedir?</h2>
      <p>
        Çerezler, bir web sitesinin tarayıcınıza bırakabildiği küçük metin dosyalarıdır. Genellikle
        tercihleri saklamak, oturumu sürdürmek ya da ziyaretçi davranışını analiz etmek için kullanılır.
        Local Storage ve Session Storage da benzer işlevler görür.
      </p>

      <h2>Bu sitede kullanılanlar</h2>
      <ul>
        <li>
          <strong>Teknik olarak zorunlu depolama:</strong> Yalnızca sayfanın çalışması için gerekir;
          örneğin menülerin ve pencerelerin doğru görüntülenmesi. Bunun için ayrıca onay gerekmez.
        </li>
        <li>
          <strong>Analiz veya pazarlama çerezi yok:</strong> Ölçümleme aracı, yeniden hedefleme ya da
          reklam ağı entegrasyonu bulunmaz.
        </li>
        <li>
          <strong>Harici yazı tipi veya betik yok:</strong> Yazı tipleri bu sunucudan sunulur; sayfa
          açılışında üçüncü taraf sunuculara bağlantı kurulmaz.
        </li>
      </ul>

      <h2>Ödeme sağlayıcısına yönlendirme</h2>
      <p>
        Siparişi tamamlarken ilgili ödeme sağlayıcısının sayfasına yönlendirilirsiniz. Bu sağlayıcı
        kendi çerezlerini kullanır ve veri koruma açısından bağımsız olarak sorumludur. Kullandığı
        yöntemler hakkında bilgi için sağlayıcının kendi politikasına bakın.
      </p>

      <h2>Tarayıcıda çerez yönetimi</h2>
      <p>
        Çerezleri istediğiniz zaman tarayıcı ayarlarınızdan görüntüleyebilir, sınırlayabilir ya da
        silebilirsiniz. Bu site isteğe bağlı çerez kullanmadığı için engelleme işlevsel bir kayba yol
        açmaz.
      </p>

      <h2>Değişiklikler</h2>
      <p>
        İleride başka teknikler kullanılacak olursa bu sayfa önceden güncellenir ve gerekiyorsa açık
        rıza alınır. Veri işleme hakkında ayrıntılı bilgi için{" "}
        <Link href="/tr/gizlilik/">gizlilik politikasına</Link> bakabilirsiniz. Sorularınız için:{" "}
        {SUPPORT_EMAIL}
      </p>
    </ArticlePage>
  );
}
