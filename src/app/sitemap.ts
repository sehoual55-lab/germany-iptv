import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site.config";
import { ROUTES } from "@/lib/routes";

// Required so these routes can be emitted as static files in `output: "export"` mode.
export const dynamic = "force-static";

/**
 * XML sitemap with hreflang alternates.
 * Every German and Turkish URL appears exactly once; pages that exist in
 * both languages declare each other as alternates.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-17");
  const entries: MetadataRoute.Sitemap = [];

  for (const entry of ROUTES) {
    const languages: Record<string, string> = {};
    if (entry.de) languages["de-DE"] = `${SITE_URL}${entry.de}`;
    if (entry.tr) languages["tr-TR"] = `${SITE_URL}${entry.tr}`;
    languages["x-default"] = `${SITE_URL}/`;

    for (const path of [entry.de, entry.tr]) {
      if (!path) continue;
      entries.push({
        url: `${SITE_URL}${path}`,
        lastModified,
        changeFrequency: entry.changeFrequency ?? "monthly",
        priority: entry.priority ?? 0.5,
        alternates: { languages },
      });
    }
  }

  return entries;
}
