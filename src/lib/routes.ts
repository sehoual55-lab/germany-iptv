import type { LocaleCode } from "@/config/site.config";

/**
 * Central route table.
 * Every entry maps a logical page to its German and/or Turkish URL.
 * It powers hreflang alternates, breadcrumbs and the XML sitemap.
 *
 * When a page exists in only one language, the other field is left
 * undefined — that page then only declares its own canonical URL and no
 * hreflang pair, which avoids advertising alternates that do not exist.
 */
export interface RouteEntry {
  key: string;
  de?: string;
  tr?: string;
  priority?: number;
  changeFrequency?: "daily" | "weekly" | "monthly" | "yearly";
}

export const ROUTES: RouteEntry[] = [
  { key: "home", de: "/", tr: "/tr/", priority: 1.0, changeFrequency: "weekly" },
  { key: "guide-overview", de: "/iptv-deutschland/", tr: "/tr/almanya-iptv/", priority: 0.8, changeFrequency: "monthly" },
  { key: "guide-setup", de: "/iptv-einrichten/", tr: "/tr/almanya-iptv-kurulumu/", priority: 0.8, changeFrequency: "monthly" },
  { key: "guide-devices", de: "/iptv-geraete/", tr: "/tr/desteklenen-cihazlar/", priority: 0.8, changeFrequency: "monthly" },
  { key: "guide-legal", de: "/iptv-in-deutschland-legal/", tr: "/tr/almanya-iptv-yasal-mi/", priority: 0.8, changeFrequency: "monthly" },
  { key: "packages", de: "/iptv-pakete/", priority: 0.9, changeFrequency: "weekly" },
  { key: "faq", de: "/faq/", tr: "/tr/sss/", priority: 0.7, changeFrequency: "monthly" },
  { key: "contact", de: "/kontakt/", tr: "/tr/iletisim/", priority: 0.6, changeFrequency: "yearly" },
  { key: "privacy", de: "/datenschutz/", tr: "/tr/gizlilik/", priority: 0.3, changeFrequency: "yearly" },
  { key: "terms", de: "/agb/", tr: "/tr/kullanim-kosullari/", priority: 0.3, changeFrequency: "yearly" },
  { key: "refund", de: "/rueckerstattung/", tr: "/tr/iade-politikasi/", priority: 0.3, changeFrequency: "yearly" },
  { key: "imprint", de: "/impressum/", tr: "/tr/yasal-bildirim/", priority: 0.3, changeFrequency: "yearly" },
  { key: "cookies", de: "/cookie-richtlinie/", tr: "/tr/cerez-politikasi/", priority: 0.3, changeFrequency: "yearly" },
];

export function route(key: string, locale: LocaleCode): string {
  const entry = ROUTES.find((r) => r.key === key);
  const target = entry?.[locale];
  if (target) return target;
  return locale === "de" ? "/" : "/tr/";
}

/** hreflang alternates for a path — null when the page has no counterpart. */
export function alternatesFor(path: string): { de?: string; tr?: string } {
  const entry = ROUTES.find((r) => r.de === path || r.tr === path);
  if (!entry) return {};
  return { de: entry.de, tr: entry.tr };
}
