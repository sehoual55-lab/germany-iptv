/**
 * ---------------------------------------------------------------------------
 *  GERMANY IPTV — CENTRAL SITE CONFIGURATION
 * ---------------------------------------------------------------------------
 *  This is the ONLY file you need to edit to change business data:
 *  brand name, domain, contact details, currency, package prices,
 *  payment provider and default language.
 *
 *  All prices are PLACEHOLDERS. Replace the `price` values below with your
 *  real prices before going live. Anything left as "—" renders as a
 *  "price on request" placeholder in the UI instead of a fake number.
 * ---------------------------------------------------------------------------
 */

export type LocaleCode = "de" | "tr";

/* ===========================================================================
 *  1. CORE SETTINGS
 * =========================================================================== */

export const SITE_NAME = "Germany IPTV";
export const DOMAIN = "germany-iptv.online";
export const SITE_URL = `https://${DOMAIN}`;

export const SUPPORT_EMAIL = "support@germany-iptv.online";
export const PHONE_NUMBER = "+49 000 0000000"; // placeholder — replace
export const WHATSAPP_NUMBER = "+49 000 0000000"; // placeholder — replace

export const CURRENCY = "USD";
export const CURRENCY_SYMBOL = "$";

/** Typical time needed to send the setup information after an order. */
export const ACTIVATION_TIME = {
  de: "in der Regel innerhalb weniger Stunden",
  tr: "genellikle birkaç saat içinde",
} as const;

export const DEFAULT_LANGUAGE: LocaleCode = "de";

/* ===========================================================================
 *  2. PACKAGE PRICES (placeholders — replace before launch)
 * =========================================================================== */

/**
 * Set a numeric string such as "19.90" to display a real price.
 * Leave the value as an empty string to render the neutral
 * "price on request" placeholder instead of inventing a number.
 */
export const PACKAGE_PROMO_PRICE = "19.99";
export const PACKAGE_1_PRICE = "39.99";
export const PACKAGE_3_PRICE = "49.99";
export const PACKAGE_6_PRICE = "59.99";
export const PACKAGE_12_PRICE = "84.99";

/* ===========================================================================
 *  3. PAYMENT
 * =========================================================================== */

export const PAYMENT_PROVIDER = "paypal"; // "paypal" | "card" | "other"

/**
 * Official, secure hosted checkout URL of your payment provider.
 * The order form NEVER collects card data — the customer is always
 * forwarded to the provider's own secure checkout page.
 */
export const PAYMENT_CHECKOUT_URL = "https://example-payments.test/checkout";

export type PaymentMethodId = "paypal" | "card" | "other";

export interface PaymentMethod {
  id: PaymentMethodId;
  enabled: boolean;
  /** Optional provider-specific checkout URL; falls back to PAYMENT_CHECKOUT_URL */
  checkoutUrl?: string;
}

export const PAYMENT_METHODS: PaymentMethod[] = [
  { id: "paypal", enabled: true },
  { id: "card", enabled: true },
  { id: "other", enabled: true },
];

/* ===========================================================================
 *  4. PACKAGES
 * =========================================================================== */

export type PackageBadge = "popular" | "bestValue" | null;

export interface PackageConfig {
  /** Stable id used by the checkout modal */
  id: string;
  /** Tier name shown as the card title, e.g. "Bronze" */
  name: string;
  /** Paid access duration in months */
  months: number;
  /** Extra months on top, shown as "+N Monate gratis". 0 = hidden. */
  bonusMonths: number;
  price: string;
  /** Highlight ribbon: "popular" | "bestValue" | null */
  badge: PackageBadge;
  /** Draws the emphasised (scaled-up) card */
  featured?: boolean;
  support: "standard" | "priority";
  /** Connections included at the base price */
  devices: number;
  /** Upper bound of the connection stepper */
  maxConnections: number;
  /** Hide from the pricing grid — the plan is then only offered inside checkout. */
  hiddenOnGrid?: boolean;
  /**
   * Feature rows, referenced by key. The wording for each key lives in
   * src/locales/de.ts and src/locales/tr.ts under `packages.featureLabels`,
   * so the same list stays correct in both languages.
   *
   * Available keys:
   *   duration · connections · devices · quality · epg · vod · catchUp
   *   support · prioritySupport · setup · secureCheckout · delivery · noAutoRenew
   *
   * To advertise concrete numbers (channel counts, VOD library size, …) add
   * your own key to `packages.featureLabels` in BOTH locale files and list it
   * here. Only publish figures you can actually stand behind — invented counts
   * are the single most common reason IPTV sites get reported.
   */
  featureKeys: string[];
}

/** Every additional simultaneous connection costs this much less than the first. */
export const EXTRA_CONNECTION_DISCOUNT = 0.15;

/**
 * Feature rows per tier. Each string is a key resolved through
 * `packages.featureLabels` in src/locales/de.ts and src/locales/tr.ts,
 * so one list stays correct in both languages.
 */
const CORE_FEATURES = [
  "channels25k",
  "vod100k",
  "quality4k",
  "channelsIntl",
  "allDevices",
  "epg",
  "vodLibrary",
  "stableServers",
  "support247",
  "instantDelivery",
];

const EXCLUSIVE_FEATURES = [
  "channels130k",
  "vod140k",
  "quality4k",
  "channelsAllIntl",
  "allDevices",
  "epg",
  "vodLibrary",
  "stableServers",
  "support247",
  "instantDelivery",
];

export const PACKAGES: PackageConfig[] = [
  {
    // Only offered inside the checkout modal, not on the pricing grid.
    id: "promo",
    name: "Promo",
    months: 3,
    bonusMonths: 0,
    price: PACKAGE_PROMO_PRICE,
    badge: null,
    support: "standard",
    devices: 1,
    maxConnections: 5,
    hiddenOnGrid: true,
    featureKeys: CORE_FEATURES,
  },
  {
    id: "bronze",
    name: "Bronze",
    months: 12,
    bonusMonths: 0,
    price: PACKAGE_1_PRICE,
    badge: null,
    support: "standard",
    devices: 1,
    maxConnections: 5,
    featureKeys: CORE_FEATURES,
  },
  {
    id: "gold",
    name: "Gold",
    months: 15,
    bonusMonths: 3,
    price: PACKAGE_3_PRICE,
    badge: "popular",
    featured: true,
    support: "priority",
    devices: 1,
    maxConnections: 5,
    featureKeys: CORE_FEATURES,
  },
  {
    id: "platinum",
    name: "Platinum",
    months: 15,
    bonusMonths: 3,
    price: PACKAGE_6_PRICE,
    badge: null,
    support: "priority",
    devices: 1,
    maxConnections: 5,
    featureKeys: CORE_FEATURES,
  },
  {
    id: "exclusive",
    name: "Exclusive",
    months: 24,
    bonusMonths: 3,
    price: PACKAGE_12_PRICE,
    badge: "bestValue",
    support: "priority",
    devices: 1,
    maxConnections: 5,
    featureKeys: EXCLUSIVE_FEATURES,
  },
];

/**
 * Price for a package at a given number of simultaneous connections.
 * The first connection is charged at the normal price, every additional one
 * at (1 − EXTRA_CONNECTION_DISCOUNT) of it. Returns null while the package
 * price is still an unset placeholder.
 */
export function priceForConnections(pkg: PackageConfig, connections: number): number | null {
  const base = Number.parseFloat(pkg.price);
  if (!pkg.price || Number.isNaN(base)) return null;
  const extra = Math.max(0, connections - 1);
  return base * (1 + extra * (1 - EXTRA_CONNECTION_DISCOUNT));
}

/* ===========================================================================
 *  4b. ORDER HANDLING
 * =========================================================================== */

/**
 * How the checkout finishes.
 *   "whatsapp" — the order is logged to your Google Sheet and the customer is
 *                handed over to WhatsApp with a pre-filled message.
 *   "payment"  — the order is logged and the customer is forwarded to
 *                PAYMENT_CHECKOUT_URL instead.
 */
export const ORDER_MODE: "whatsapp" | "payment" = "whatsapp";

/**
 * Google Apps Script Web-App URL that writes each order into your spreadsheet.
 * Deploy google-apps-script/Code.gs (see google-apps-script/SETUP.md) and paste
 * the /exec URL here. Leave empty to skip logging — checkout still works.
 */
export const ORDER_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbzg9Heu4rc3meYZobWdzS1vKVxTX7gE3nqBJOmqkP7fFa0pst3f1zbMk87jI6FCM04riQ/exec";

/** Spreadsheet the Apps Script writes into — kept here for reference only. */
export const GOOGLE_SHEET_ID = "1vbzgIHtUseOvOpwwPEYAfIWbQblzNmc3O-cJmux5ebY";

/** Optional shared secret; must match SHARED_SECRET in the Apps Script. */
export const ORDER_WEBHOOK_TOKEN = "";

export interface CountryCode {
  iso: string;
  dial: string;
  label: string;
}

/** Dial codes offered in the checkout phone field. Extend as needed. */
export const COUNTRY_CODES: CountryCode[] = [
  { iso: "DE", dial: "+49", label: "Deutschland" },
  { iso: "AT", dial: "+43", label: "Österreich" },
  { iso: "CH", dial: "+41", label: "Schweiz" },
  { iso: "TR", dial: "+90", label: "Türkiye" },
  { iso: "NL", dial: "+31", label: "Nederland" },
  { iso: "BE", dial: "+32", label: "België" },
  { iso: "FR", dial: "+33", label: "France" },
  { iso: "IT", dial: "+39", label: "Italia" },
  { iso: "ES", dial: "+34", label: "España" },
  { iso: "GB", dial: "+44", label: "United Kingdom" },
  { iso: "PL", dial: "+48", label: "Polska" },
  { iso: "RO", dial: "+40", label: "România" },
  { iso: "SE", dial: "+46", label: "Sverige" },
  { iso: "DK", dial: "+45", label: "Danmark" },
  { iso: "US", dial: "+1", label: "United States" },
  { iso: "CA", dial: "+1", label: "Canada" },
  { iso: "MA", dial: "+212", label: "Maroc" },
  { iso: "DZ", dial: "+213", label: "Algérie" },
  { iso: "TN", dial: "+216", label: "Tunisie" },
  { iso: "EG", dial: "+20", label: "Egypt" },
  { iso: "SA", dial: "+966", label: "Saudi Arabia" },
  { iso: "AE", dial: "+971", label: "United Arab Emirates" },
];

/** Pre-selected dial code per site language. */
export const DEFAULT_COUNTRY: Record<LocaleCode, string> = { de: "DE", tr: "TR" };

/* ===========================================================================
 *  5. COMPANY / LEGAL DETAILS (for Impressum & schema)
 *     Fill in with your real, verifiable details before launch.
 * =========================================================================== */

export const COMPANY = {
  legalName: "", // e.g. "Muster Media GmbH" — leave empty to hide
  addressLine: "",
  postalCode: "",
  city: "",
  country: "DE",
  representative: "",
  registerEntry: "",
  vatId: "",
};

/* ===========================================================================
 *  6. SOCIAL / OPEN GRAPH
 * =========================================================================== */

export const OG_IMAGE_PATH = "/og-image.svg";
export const TWITTER_HANDLE = ""; // e.g. "@germanyiptv" — leave empty to omit

/* ===========================================================================
 *  7. HELPERS
 * =========================================================================== */

export function formatPrice(price: string): string | null {
  if (!price || !price.trim()) return null;
  return `${CURRENCY_SYMBOL}${price}`;
}

/** Rounds an amount to whole cents (half-up), avoiding binary-float artefacts. */
export function roundCents(amount: number): number {
  return Math.round(Math.round(amount * 100000) / 1000) / 100;
}

export function formatAmount(amount: number): string {
  // Round to whole cents half-up. Going through a higher precision first avoids
  // the binary-float artefact where 36.815.toFixed(2) yields "36.81".
  return `${CURRENCY_SYMBOL}${roundCents(amount).toFixed(2)}`;
}

export const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}`;
export const mailtoLink = `mailto:${SUPPORT_EMAIL}`;
export const telLink = `tel:${PHONE_NUMBER.replace(/[^0-9+]/g, "")}`;
