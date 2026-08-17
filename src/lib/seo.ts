import type { Metadata } from "next";
import {
  SITE_NAME,
  SITE_URL,
  SUPPORT_EMAIL,
  OG_IMAGE_PATH,
  TWITTER_HANDLE,
  COMPANY,
  type LocaleCode,
} from "@/config/site.config";
import { alternatesFor } from "./routes";

const OG_LOCALE: Record<LocaleCode, string> = { de: "de_DE", tr: "tr_TR" };

export interface PageSeo {
  locale: LocaleCode;
  path: string;
  title: string;
  description: string;
  /** Optional: exclude from indexing (not used by default). */
  noindex?: boolean;
}

/**
 * Builds a complete, unique metadata object for a page:
 * canonical URL, de-DE / tr-TR hreflang, x-default → German homepage,
 * Open Graph and Twitter/X cards.
 */
export function buildMetadata({ locale, path, title, description, noindex }: PageSeo): Metadata {
  const canonical = `${SITE_URL}${path}`;
  const alt = alternatesFor(path);

  const languages: Record<string, string> = {};
  if (alt.de) languages["de-DE"] = `${SITE_URL}${alt.de}`;
  if (alt.tr) languages["tr-TR"] = `${SITE_URL}${alt.tr}`;
  languages["x-default"] = `${SITE_URL}/`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical, languages },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: OG_LOCALE[locale],
      url: canonical,
      title,
      description,
      images: [{ url: OG_IMAGE_PATH, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE_PATH],
      ...(TWITTER_HANDLE ? { site: TWITTER_HANDLE, creator: TWITTER_HANDLE } : {}),
    },
  };
}

/* -------------------------------------------------------------------------- */
/*  JSON-LD builders                                                          */
/* -------------------------------------------------------------------------- */

export function organizationSchema(locale: LocaleCode) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    ...(COMPANY.legalName ? { legalName: COMPANY.legalName } : {}),
    logo: `${SITE_URL}${OG_IMAGE_PATH}`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SUPPORT_EMAIL,
        availableLanguage: locale === "de" ? ["German", "English"] : ["Turkish", "German", "English"],
      },
    ],
  };
}

export function websiteSchema(locale: LocaleCode) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: locale === "de" ? SITE_URL : `${SITE_URL}/tr/`,
    inLanguage: locale === "de" ? "de-DE" : "tr-TR",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

/** Only ever call this with questions that are visibly rendered on the page. */
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
