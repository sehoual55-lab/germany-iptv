#!/usr/bin/env python3
"""
Build single-file, self-contained HTML previews from the static export.

CSS is inlined, the woff2 fonts become data: URIs and the Next.js runtime
scripts are dropped — the result is one .html file that renders identically
anywhere with no server and no external requests. Interactive pieces
(checkout modal, FAQ accordion, mobile menu) need the real build.

  STATIC_EXPORT=1 npx next build && python3 inline-preview.py
"""
import base64
import re
from pathlib import Path

OUT = Path("out")
DEST = Path("previews")
DEST.mkdir(exist_ok=True)

PAGES = [
    ("index.html", "germany-iptv-de-startseite.html"),
    ("tr/index.html", "germany-iptv-tr-ana-sayfa.html"),
    ("iptv-pakete/index.html", "germany-iptv-de-pakete.html"),
]

css_path = next(OUT.rglob("*.css"))
css = css_path.read_text(encoding="utf-8")

# Fonts -> data: URIs
for font in (OUT / "fonts").glob("*.woff2"):
    b64 = base64.b64encode(font.read_bytes()).decode()
    css = css.replace(f"/fonts/{font.name}", f"data:font/woff2;base64,{b64}")

for src, dst in PAGES:
    html = (OUT / src).read_text(encoding="utf-8")

    # drop every script tag (Next runtime + RSC payload)
    html = re.sub(r"<script\b[^>]*>.*?</script>", "", html, flags=re.S)
    html = re.sub(r"<script\b[^>]*/?>", "", html)
    # drop stylesheet / preload links; we inline instead
    html = re.sub(r'<link[^>]+rel="(stylesheet|preload)"[^>]*>', "", html)

    style = "<style>" + css + "</style>"
    html = html.replace("</head>", style + "</head>", 1)

    # remaining absolute asset refs (icon, og image) -> keep them harmless
    html = re.sub(r'(href|src)="/(icon\.svg|og-image\.svg)[^"]*"', r'\1="#"', html)
    # internal links point at the live domain so the preview stays navigable-ish
    html = re.sub(r'(href)="/([^"]*)"', r'\1="https://germany-iptv.online/\2"', html)

    (DEST / dst).write_text(html, encoding="utf-8")
    kb = (DEST / dst).stat().st_size / 1024
    print(f"{dst}  ({kb:.0f} KB)")
