import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import { buildMetadata } from "@/lib/seo";
import { relatedGuides } from "@/lib/related";
import tr from "@/locales/tr";

export const metadata: Metadata = buildMetadata({
  locale: "tr",
  path: "/tr/sss/",
  title: "SSS – Germany IPTV, Cihazlar ve Kurulum Hakkında Yanıtlar",
  description:
    "Germany IPTV ile ilgili en sık sorulan sorular: nasıl çalışır, hangi cihazlar uyumludur, M3U gerekli mi, kurulum ne kadar sürer, yasal çerçeve nedir ve destek nasıl alınır.",
});

const CRUMBS = [
  { name: "Ana Sayfa", url: "/tr/" },
  { name: "SSS", url: "/tr/sss/" },
];

export default function TrFaqPage() {
  return (
    <ArticlePage
      locale="tr"
      crumbs={CRUMBS}
      title="Germany IPTV Hakkında Sıkça Sorulan Sorular"
      lead="Bize en çok ulaşan dokuz soru; kısa, somut ve pazarlama vaadi içermeyen yanıtlarla."
      faq={tr.faq.items}
      faqHeading="Tüm sorular"
      related={relatedGuides("tr", "")}
    >
      <p>
        Bu sayfa, sipariş öncesinde ve sonrasında en sık sorulan soruları bir araya getirir. Daha
        ayrıntılı açıklamalar için rehberlere bakabilirsiniz: teknik temeller{" "}
        <Link href="/tr/almanya-iptv/">Almanya IPTV Rehberi</Link>’nde, uygulamalı anlatım{" "}
        <Link href="/tr/almanya-iptv-kurulumu/">kurulum sayfasında</Link>, cihaz sorusu{" "}
        <Link href="/tr/desteklenen-cihazlar/">desteklenen cihazlar</Link> bölümünde ve yasal çerçeve{" "}
        <Link href="/tr/almanya-iptv-yasal-mi/">Almanya IPTV yasal mı?</Link> yazısında ele alınıyor.
      </p>
      <p>
        Sorunuz burada yoksa <Link href="/tr/iletisim/">iletişim sayfası</Link> üzerinden yazın —
        Türkçe ve Almanca yanıt veriyoruz.
      </p>
    </ArticlePage>
  );
}
