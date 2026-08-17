import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site.config";

// Required so these routes can be emitted as static files in `output: "export"` mode.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
