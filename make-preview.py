#!/usr/bin/env python3
"""
Turn the Next.js static export in ./out into a folder that can be opened
directly from disk (file://) by rewriting every absolute path to a relative one.

  STATIC_EXPORT=1 npx next build && python3 make-preview.py

Output: ./preview  — double-click preview/index.html to browse the whole site
offline. Use ./out (not ./preview) when uploading to a real web server.
"""
import re
import shutil
from pathlib import Path

SRC = Path("out")
DST = Path("preview")

if DST.exists():
    shutil.rmtree(DST)
shutil.copytree(SRC, DST)

html_files = sorted(DST.rglob("*.html"))
css_files = sorted(DST.rglob("*.css"))

# Every page directory that exists in the export, so we know which absolute
# links point at a real page (and therefore need /index.html appending).
pages = set()
for f in html_files:
    rel = f.relative_to(DST)
    pages.add("/" + str(rel.parent).replace("\\", "/").strip(".").strip("/"))
pages.discard("")
pages.add("/")


def prefix_for(path: Path) -> str:
    depth = len(path.relative_to(DST).parts) - 1
    return "../" * depth if depth else "./"


def rewrite_html(text: str, up: str) -> str:
    def repl(m):
        attr, url = m.group(1), m.group(2)
        if url.startswith("//"):
            return m.group(0)
        clean = url.split("#")[0].split("?")[0].rstrip("/")
        target = clean if clean else "/"
        if target in pages:  # internal page link
            body = (clean.lstrip("/") + "/index.html") if clean else "index.html"
            tail = url[len(clean):] if clean else url[1:]
            tail = tail.lstrip("/")
            frag = "#" + tail.split("#", 1)[1] if "#" in tail else ""
            return f'{attr}="{up}{body}{frag}"'
        return f'{attr}="{up}{url.lstrip("/")}"'  # asset

    return re.sub(r'(href|src)="(/[^"]*)"', repl, text)


for f in html_files:
    up = prefix_for(f)
    f.write_text(rewrite_html(f.read_text(encoding="utf-8"), up), encoding="utf-8")

for f in css_files:
    up = prefix_for(f)
    css = f.read_text(encoding="utf-8")
    css = re.sub(r'url\((["\']?)/(?!/)', lambda m: f"url({m.group(1)}{up}", css)
    f.write_text(css, encoding="utf-8")

print(f"preview/ ready — {len(html_files)} pages, {len(css_files)} stylesheets rewritten")
print("open preview/index.html in a browser")
