# Germany IPTV — germany-iptv.online

A production-ready, bilingual (German / Turkish) marketing and information site built with
**Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4**.

- German homepage at `/` — commercial intent (packages, devices, setup, conversion)
- Turkish landing page at `/tr/` — informational intent, written as original Turkish copy
- Static generation for every page, no client-side data fetching, no external requests at runtime

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npx eslint src     # lint

# with `npm start` running on port 3500:
BASE=http://localhost:3500 npm run verify   # crawls every page: status, single H1,
                                            # unique title/description, canonical,
                                            # hreflang, html lang, broken internal links
```

Node 20+ is required.

---

## 1. What to edit first

### `src/config/site.config.ts` — the only file with business data

| Setting | Purpose |
| --- | --- |
| `SITE_NAME`, `DOMAIN`, `SITE_URL` | Brand and canonical host (used by metadata, sitemap, schema) |
| `SUPPORT_EMAIL`, `PHONE_NUMBER`, `WHATSAPP_NUMBER` | Contact channels — shown in footer, contact pages, support button |
| `CURRENCY`, `CURRENCY_SYMBOL` | Price formatting |
| `PACKAGE_1_PRICE` … `PACKAGE_12_PRICE` | **Placeholders.** Empty string → the UI shows "Preis auf Anfrage" / "Fiyat için iletişime geçin" instead of inventing a number. Set e.g. `"19.90"` to display a real price. |
| `PACKAGES` | Duration, device count, support level, featured badge per package |
| `PAYMENT_PROVIDER`, `PAYMENT_CHECKOUT_URL`, `PAYMENT_METHODS` | Which payment methods appear and where the customer is forwarded |
| `ACTIVATION_TIME` | Phrase used in "you will receive setup info …" copy, per language |
| `COMPANY` | Legal entity details for Impressum / Yasal Bildirim and Organization schema |
| `DEFAULT_LANGUAGE` | Documented default (the site never auto-redirects by location) |

Leaving `COMPANY.legalName` / `COMPANY.addressLine` empty makes the legal pages render a visible
"fill this in before launch" notice, so incomplete imprints cannot slip into production unnoticed.

### `src/locales/de.ts` and `src/locales/tr.ts` — all copy

Nothing user-facing is hard-coded in components. `de.ts` defines the `Dictionary` type; `tr.ts`
satisfies it. `src/locales/tr-home.ts` holds Turkish-only sections that have no German equivalent.

### `src/lib/routes.ts` — the URL table

One entry per logical page with its German and/or Turkish URL. This single table drives:
hreflang alternates, the XML sitemap, and language-switcher targets. Add a page here when you add
a route, and hreflang/sitemap update themselves.

---

## 2. Project structure

```
src/
  app/
    (de)/                      German root layout — <html lang="de">
      page.tsx                 /
      iptv-pakete/             /iptv-pakete/
      iptv-deutschland/        guide
      iptv-einrichten/         guide
      iptv-geraete/            guide
      iptv-in-deutschland-legal/
      faq/  kontakt/
      datenschutz/  agb/  rueckerstattung/  impressum/  cookie-richtlinie/
      not-found.tsx
    (tr)/                      Turkish root layout — <html lang="tr">
      tr/                      /tr/
        almanya-iptv/  almanya-iptv-kurulumu/  almanya-iptv-yasal-mi/
        desteklenen-cihazlar/  sss/  iletisim/
        gizlilik/  kullanim-kosullari/  iade-politikasi/  yasal-bildirim/  cerez-politikasi/
    globals.css                design tokens + self-hosted font faces
    icon.svg  sitemap.ts  robots.ts
  components/                  Header, LanguageSwitcher, Hero, PricingSection, PricingCard,
                               CheckoutModal, FeatureCard, DeviceCard, GuideCard, FAQAccordion,
                               TrustSection, Footer, SupportButton, Breadcrumbs, ArticlePage, …
  config/site.config.ts
  locales/                     de.ts · tr.ts · tr-home.ts · index.ts
  lib/                         routes.ts · seo.ts · related.ts
public/fonts/                  Plus Jakarta Sans (variable, SIL OFL) — served locally
public/og-image.svg            Open Graph / Twitter card image
```

Two **root layouts** (one per route group) are what allow `<html lang="de">` and `<html lang="tr">`
to differ. Navigating between languages triggers a full page load, which is the correct behaviour
for a bilingual site.

---

## 3. Checkout & order logging

`CheckoutModal.tsx` is a single-screen checkout: plan picker (radio cards incl. the
checkout-only **Promo** tier), connection stepper, customer details with a country
dial-code selector, and a sticky footer showing the live total next to the CTA.

**No payment card data is ever collected or stored.**

`ORDER_MODE` in `site.config.ts` decides how an order finishes:

| Mode | Behaviour |
| --- | --- |
| `"whatsapp"` (default) | Logs the order, then opens WhatsApp with a pre-filled message to `WHATSAPP_NUMBER` |
| `"payment"` | Logs the order, shows the payment-method picker, then forwards to `PAYMENT_CHECKOUT_URL` |

### Google Sheets logging

Orders are appended to your spreadsheet via a Google Apps Script web app.
Everything is in **`google-apps-script/`** — `Code.gs` plus a step-by-step
`SETUP.md`. Short version:

1. Spreadsheet → **Extensions → Apps Script** → paste `Code.gs` → Save
2. Run `testAppend` once to authorise and confirm the sheet connection
3. **Deploy → New deployment → Web app**, *Execute as: Me*, *Who has access: **Anyone***
4. Paste the `/exec` URL into `ORDER_WEBHOOK_URL` in `site.config.ts` and rebuild

Columns written: `Date · Nom · Email · Téléphone · Formule · Prix (€) ·
Connexions · Paiement · Statut`.

The POST uses `Content-Type: text/plain` on purpose — that keeps it a "simple"
CORS request so the browser skips the preflight that Apps Script cannot answer.
Don't change it to `application/json`.

Leaving `ORDER_WEBHOOK_URL` empty is fine: checkout still works, it just skips
the logging step.

## 4. SEO

Implemented out of the box:

- Semantic HTML5, exactly one `<h1>` per page, ordered `h2`/`h3`
- Unique `<title>` and meta description on every page
- Canonical URL on every page; `de-DE` / `tr-TR` / `x-default` hreflang (x-default → German home)
- No automatic geo/language redirects — the visitor chooses via the language selector
- `sitemap.xml` with `xhtml:link` alternates, `robots.txt`
- JSON-LD: Organization, WebSite, BreadcrumbList, and FAQPage **only where the questions are
  visibly rendered** (the accordion always renders every answer in the DOM)
- Open Graph + Twitter/X cards using `public/og-image.svg`
- Visible breadcrumbs on every subpage, mirrored by BreadcrumbList schema
- Clean trailing-slash URLs (`trailingSlash: true`), 308 redirects from the non-slash form
- Fonts self-hosted (no Google Fonts request), inline SVG illustrations (no raster payload),
  no tracking scripts — Core Web Vitals stay clean by construction

### After deploying

1. Point `SITE_URL` at the live domain (already `https://germany-iptv.online`).
2. Submit `https://germany-iptv.online/sitemap.xml` in Google Search Console.
3. Verify the German and Turkish properties separately and check the hreflang report.

---

## 5. Content & compliance decisions

These are deliberate and worth keeping:

- **No invented prices.** Empty price config renders a neutral "price on request" state.
- **No fake trust signals** — no invented reviews, ratings, customer counts, awards, certifications
  or channel counts anywhere in the codebase.
- **No absolute claims** such as "100% uptime" or "no buffering".
- **No third-party channel logos, celebrity images, or sports imagery.** All artwork is original
  inline SVG. Brand names (Samsung, LG, Fire TV, …) appear only to describe device compatibility,
  with an explicit non-affiliation disclaimer in the footer.
- **The legal principle appears in both languages**, in the footer and the trust section:
  users must only access content they are legally entitled to watch; availability and legality
  depend on licensing, the provider and the user's jurisdiction.
- Legal pages are drafted templates with placeholders — **have them reviewed by a lawyer before
  launch.** They are not legal advice.

---

## 6. Deployment

**Vercel** — import the repo; zero configuration needed.

**Any Node host** — `npm run build` then `npm start` (default port 3000, behind your reverse proxy).

**Static hosting (cPanel, shared hosting, S3, …)** — no Node needed:

```bash
STATIC_EXPORT=1 npm run build      # plain HTML site lands in ./out
npx serve out                      # optional: preview it locally, fully interactive
```

Upload the contents of `out/` to your web root. `headers()` in `next.config.ts` is ignored in export
mode, so set those security headers on your web server instead.

### Offline preview helpers

```bash
python3 make-preview.py     # ./preview  — rewrites paths so you can double-click
                            #   preview/index.html; layout and navigation work offline,
                            #   but JS (modal, accordion, mobile menu) needs a server
python3 inline-preview.py   # ./previews — single self-contained .html files,
                            #   CSS + fonts inlined, zero external requests
```

---

## 7. Design system

Tokens live in `@theme` at the top of `src/app/globals.css`:

- `ink-950 … ink-600` — dark navy / black canvas
- `gold-50 … gold-600` — primary accent
- `flag-red`, `flag-red-soft` — German flag accent, used sparingly
- `mist-100 … mist-500` — typography scale on dark
- Utilities: `.glass`, `.glass-soft`, `.text-gradient-gold`, `.surface-grid`, `.wrap`
- Animations respect `prefers-reduced-motion`

Change the palette in one place and it propagates across every component.
