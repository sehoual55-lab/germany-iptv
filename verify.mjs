const BASE = process.env.BASE || 'http://localhost:3500';

const PAGES = [
  '/', '/iptv-pakete/', '/iptv-deutschland/', '/iptv-einrichten/', '/iptv-geraete/',
  '/iptv-in-deutschland-legal/', '/faq/', '/kontakt/', '/datenschutz/', '/agb/',
  '/rueckerstattung/', '/impressum/', '/cookie-richtlinie/',
  '/tr/', '/tr/almanya-iptv/', '/tr/almanya-iptv-kurulumu/', '/tr/almanya-iptv-yasal-mi/',
  '/tr/desteklenen-cihazlar/', '/tr/sss/', '/tr/iletisim/', '/tr/gizlilik/',
  '/tr/kullanim-kosullari/', '/tr/iade-politikasi/', '/tr/yasal-bildirim/', '/tr/cerez-politikasi/',
];

const seenLinks = new Set();
const titles = new Map();
const descs = new Map();
let problems = 0;

function fail(msg) { problems++; console.log('  ✗ ' + msg); }

for (const path of PAGES) {
  const res = await fetch(BASE + path);
  const html = await res.text();
  const label = path.padEnd(34);
  if (res.status !== 200) { fail(`${label} status ${res.status}`); continue; }

  const h1s = [...html.matchAll(/<h1[\s>]/g)].length;
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ?? '';
  const lang = html.match(/<html lang="([^"]*)"/)?.[1] ?? '';
  const hreflangs = [...html.matchAll(/hrefLang="([^"]*)"/gi)].map((m) => m[1]);

  if (h1s !== 1) fail(`${label} has ${h1s} <h1>`);
  if (!title) fail(`${label} missing title`);
  if (!desc) fail(`${label} missing description`);
  if (!canonical.startsWith('https://germany-iptv.online')) fail(`${label} bad canonical: ${canonical}`);
  if (!hreflangs.includes('x-default')) fail(`${label} missing x-default`);
  const expectLang = path.startsWith('/tr') ? 'tr' : 'de';
  if (lang !== expectLang) fail(`${label} html lang=${lang}, expected ${expectLang}`);
  if (titles.has(title)) fail(`${label} duplicate title with ${titles.get(title)}`);
  titles.set(title, path);
  if (descs.has(desc)) fail(`${label} duplicate description with ${descs.get(desc)}`);
  descs.set(desc, path);

  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) seenLinks.add(m[1]);
}

console.log(`\nChecked ${PAGES.length} pages. Now checking ${seenLinks.size} internal link targets…`);
for (const link of [...seenLinks].sort()) {
  if (link.startsWith('/_next') || link.startsWith('/fonts')) continue;
  const res = await fetch(BASE + link, { redirect: 'manual' });
  if (res.status >= 400) fail(`broken link ${link} -> ${res.status}`);
  if (res.status === 308) fail(`link missing trailing slash: ${link}`);
}

console.log(problems === 0 ? '\n✓ All checks passed.' : `\n${problems} problem(s) found.`);
process.exit(problems === 0 ? 0 : 1);
