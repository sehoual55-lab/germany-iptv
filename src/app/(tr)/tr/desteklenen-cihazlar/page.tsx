import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import DeviceCard from "@/components/DeviceCard";
import { buildMetadata } from "@/lib/seo";
import { relatedGuides } from "@/lib/related";
import tr from "@/locales/tr";

export const metadata: Metadata = buildMetadata({
  locale: "tr",
  path: "/tr/desteklenen-cihazlar/",
  title: "Desteklenen Cihazlar – Almanya IPTV İçin Uyumlu Ekipmanlar",
  description:
    "Almanya IPTV için hangi cihazlar uygundur? Samsung ve LG Smart TV, Android TV, Fire TV, telefon, bilgisayar ve set üstü kutular; sınırlamalarıyla birlikte açıklanıyor.",
});

const CRUMBS = [
  { name: "Ana Sayfa", url: "/tr/" },
  { name: "Desteklenen Cihazlar", url: "/tr/desteklenen-cihazlar/" },
];

const FAQ = [
  {
    q: "Her Smart TV'de çalışır mı?",
    a: "Hayır. Belirleyici olan, televizyonunuzun mağazasında hâlâ uygun bir oynatıcı uygulamasının bulunup bulunmadığıdır. Eski modellerde çoğu zaman bulunmaz. Bu durumda harici bir çubuk ya da küçük bir kutu, yazılım güncellemesi beklemekten çok daha güvenilir bir çözümdür.",
  },
  {
    q: "Ayrı bir set üstü kutu şart mı?",
    a: "Şart değil. Televizyonunuzun mağazası güncelse ya da zaten bir yayın çubuğu kullanıyorsanız bu yeterlidir. Ayrı bir kutu, özellikle eski bir cihazı kullanmaya devam etmek istediğinizde anlamlı olur.",
  },
  {
    q: "Aynı erişimi hem televizyonda hem telefonda kullanabilir miyim?",
    a: "Aynı anda kaç bağlantı kurulabileceği paketinizde belirtilir. Oynatıcı uygulamasını istediğiniz kadar cihaza kurabilirsiniz; sınır yalnızca eşzamanlı izleme içindir.",
  },
  {
    q: "Eski bir televizyon için ne önerirsiniz?",
    a: "HDMI girişine takılan güncel bir Android TV ya da Fire TV çubuğu genellikle en pratik seçenektir: düşük maliyet, güncel uygulamalar ve düzenli sistem güncellemeleri.",
  },
];

export default function TrDevicesPage() {
  return (
    <ArticlePage
      locale="tr"
      crumbs={CRUMBS}
      title="Almanya IPTV İçin Desteklenen Cihazlar"
      lead="IPTV için yeni bir cihaz almanız çoğu zaman gerekmez; evde zaten bulunan ekipman iş görür. Belirleyici olan markadan çok, uygun bir oynatıcı uygulamasının kurulabilmesidir."
      faq={FAQ}
      faqHeading="Cihaz uyumluluğu hakkında sık sorulanlar"
      related={relatedGuides("tr", "/tr/desteklenen-cihazlar/")}
    >
      <p>
        Aşağıdaki liste, IPTV için en sık kullanılan cihaz ailelerini gösterir. Bilinçli olarak bir
        yönlendirme olarak yazılmıştır, bir garanti olarak değil: Kendi modelinizin belirli bir
        uygulamayla birlikte çalışıp çalışmayacağı ancak tek tek değerlendirilebilir. Emin değilseniz
        sipariş öncesinde sorun.
      </p>

      <h2 id="liste">Cihaz aileleri</h2>
      <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
        {tr.devices.items.map((item) => (
          <DeviceCard key={item.title} icon={item.icon} title={item.title} body={item.body} />
        ))}
      </div>

      <h2 id="kriterler">Gerçekten önemli üç ölçüt</h2>
      <p>
        <strong>1. Güncel bir uygulama mağazası.</strong> Kurulabilir bir oynatıcı yoksa donanımın
        gücü bir işe yaramaz. Satın almadan önce cihazın mağazasının hâlâ güncellenip güncellenmediğine
        bakın.
      </p>
      <p>
        <strong>2. Yeterli işlem gücü.</strong> Çok ucuz çubuklar yüksek çözünürlükte zorlanır ve bunu
        takılma ya da gecikmeli ses olarak gösterir. 1080p için güncel giriş seviyesi donanım yeterli
        olur; 4K için cihazın bu özellik ile tanıtılıyor olması gerekir.
      </p>
      <p>
        <strong>3. Kararlı ağ bağlantısı.</strong> Uygulamada bir LAN girişi ya da en azından iyi bir
        5 GHz kablosuz bağlantı, daha hızlı bir işlemciden çok daha belirgin fark yaratır. Televizyonun
        arkasındaki dar bir boşluğa sıkışmış cihazlar sinyal açısından baştan dezavantajlıdır.
      </p>

      <h2 id="sinirlar">Sınırlar nerede?</h2>
      <ul>
        <li>
          <strong>Eski televizyonlar:</strong> Güncel uygulama bulunmayan mağazalar en yaygın engeldir.
          Harici bir çubuk bu sorunu tamamen ortadan kaldırır.
        </li>
        <li>
          <strong>Üreticiye bağlı kısıtlar:</strong> Mağazada hangi uygulamaların yer alacağına
          üretici karar verir, IPTV sağlayıcısı değil.
        </li>
        <li>
          <strong>Paylaşılan bağlantı:</strong> Aynı anda birden fazla yayın alan evlerde darboğaz
          genellikle cihaz değil, bağlantıdır.
        </li>
      </ul>

      <p>
        Cihazınız bu sayfada yer almıyorsa bu, uygun olmadığı anlamına gelmez. Destek ekibine tam model
        adını yazın; değerlendirme ücretsiz ve bağlayıcı değildir. Sonraki adım için{" "}
        <Link href="/tr/almanya-iptv-kurulumu/">kurulum rehberine</Link>, süre seçenekleri için{" "}
        <Link href="/tr/#paketler">paketler bölümüne</Link> bakabilirsiniz.
      </p>
    </ArticlePage>
  );
}
