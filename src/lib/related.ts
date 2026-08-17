import type { LocaleCode } from "@/config/site.config";
import { getDictionary } from "@/locales";

/** Internal linking helper: every guide links to the other guides of its language. */
export function relatedGuides(locale: LocaleCode, excludeHref: string) {
  return getDictionary(locale)
    .guides.items.filter((g) => g.href !== excludeHref)
    .map((g) => ({ href: g.href, title: g.title, body: g.body }));
}
