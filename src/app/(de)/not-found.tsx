import Link from "next/link";
import { AmbientGlow, buttonStyles } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-28">
      <AmbientGlow />
      <div className="wrap text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-300">404</p>
        <h1 className="mt-4 text-balance text-3xl font-black text-mist-100 sm:text-4xl">
          Diese Seite gibt es nicht (mehr)
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-pretty text-base leading-relaxed text-mist-400">
          Der Link ist möglicherweise veraltet oder enthält einen Tippfehler. Über die folgenden Wege
          finden Sie schnell zurück.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className={buttonStyles.primary}>
            Zur Startseite
          </Link>
          <Link href="/iptv-pakete/" className={buttonStyles.secondary}>
            IPTV Pakete ansehen
          </Link>
          <Link href="/tr/" className={buttonStyles.ghost} hrefLang="tr-TR">
            Türkçe sayfa
          </Link>
        </div>
      </div>
    </section>
  );
}
