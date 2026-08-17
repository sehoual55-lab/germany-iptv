import Link from "next/link";
import type { LocaleCode } from "@/config/site.config";
import { getDictionary } from "@/locales";

export interface Crumb {
  name: string;
  url: string;
}

export default function Breadcrumbs({ locale, items }: { locale: LocaleCode; items: Crumb[] }) {
  const t = getDictionary(locale);
  return (
    <nav aria-label={t.a11y.breadcrumb} className="pt-28 sm:pt-32">
      <div className="wrap">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-mist-500">
          {items.map((item, i) => {
            const last = i === items.length - 1;
            return (
              <li key={item.url} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-mist-300">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link href={item.url} className="transition-colors hover:text-gold-200">
                      {item.name}
                    </Link>
                    <span aria-hidden>/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
