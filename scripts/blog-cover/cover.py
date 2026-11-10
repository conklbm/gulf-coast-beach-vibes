#!/usr/bin/env python3
"""Branded blog cover generator for Helpful Analytics (ha) and Gulf Coast Beach Vibes (gcbv).

Renders an HTML/CSS template with headless Chrome (or Playwright Chromium) and writes a PNG.
Free/open-source only: Google Fonts (OFL) bundled in assets/fonts, no APIs, no accounts.

  python cover.py --brand ha --title "GA4's Data Delay Is *Costing Agencies*" --out cover.png
  python cover.py --brand gcbv --title "3 Days in Orange Beach" --image photo.webp --out c.png --size both

Wrap words in *asterisks* to highlight them in the brand accent color.
"""
import argparse, base64, html, json, mimetypes, os, re, shutil, subprocess, sys, tempfile, time
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SIZES = {"1200x630": (1200, 630), "1600x900": (1600, 900)}


def find_chrome():
    """Use an installed Chrome if present. Override with CHROME=/path."""
    for c in (os.environ.get("CHROME"), "/opt/google/chrome/chrome", "chromium", "chromium-browser"):
        if c and (os.path.exists(c) or shutil.which(c)):
            return c if os.path.exists(c) else shutil.which(c)
    return None  # fall back to Playwright's own Chromium (needs `playwright install chromium`)


def ensure_venv():
    """Re-run under the tool's .venv if Playwright isn't importable here."""
    try:
        import playwright  # noqa: F401
    except ImportError:
        vpy = ROOT / ".venv" / "bin" / "python"
        if vpy.exists() and Path(sys.prefix).resolve() != (ROOT / ".venv").resolve():
            os.execv(str(vpy), [str(vpy), __file__, *sys.argv[1:]])
        sys.exit("Playwright missing. Run: python3 -m venv .venv && .venv/bin/pip install playwright pillow")


def data_uri(path):
    p = Path(path)
    if not p.is_absolute():
        p = ROOT / p
    mime = mimetypes.guess_type(str(p))[0] or ("image/webp" if p.suffix == ".webp" else "application/octet-stream")
    if p.suffix == ".ttf":
        mime = "font/ttf"
    return f"data:{mime};base64,{base64.b64encode(p.read_bytes()).decode()}"


def smart(text):
    """Typographic quotes/dashes: ' -> ’, "x" -> “x”, 24-72 -> 24–72, -- -> —."""
    LQ, RQ, LS, RS, EN, EM = "\u201c", "\u201d", "\u2018", "\u2019", "\u2013", "\u2014"
    t = re.sub(r'(^|[\s(\[])"', lambda m: m.group(1) + LQ, text).replace('"', RQ)
    t = re.sub(r"(^|[\s(\[])'", lambda m: m.group(1) + LS, t).replace("'", RS)
    t = re.sub(r"(\d)-(\d)", lambda m: m.group(1) + EN + m.group(2), t)
    return t.replace("--", EM)


def rich(text):
    """Escape text; *word* -> highlighted span."""
    # split on *...* first, escape plain text, then keep hyphenated words
    # (Month-by-Month, 24–72) on one line; markup is never touched by the regex
    def nw(s):
        return re.sub(r"([\w\u2019]+(?:[-\u2013][\w\u2019]+)+)", r'<span class="nw">\1</span>',
                      html.escape(s, quote=False))
    parts = re.split(r"\*(.+?)\*", smart(text.strip()))
    return "".join(f'<span class="hl">{nw(p)}</span>' if i % 2 else nw(p) for i, p in enumerate(parts))


def font_faces(b):
    css = ""
    for role in ("display", "body"):
        f = b["fonts"][role]
        css += (f"@font-face{{font-family:'{f['family']} Cover';src:url('{data_uri(f['file'])}') format('truetype');"
                f"font-weight:100 900;font-display:block}}\n")
    return css


FIT_JS = """
<script>
function fit(){
  const t=document.getElementById('title'); const box=document.getElementById('titlebox');
  const max=parseFloat(t.dataset.max), min=parseFloat(t.dataset.min), lines=parseInt(t.dataset.lines);
  let s=max; t.style.fontSize=s+'px';
  const lh=()=>parseFloat(getComputedStyle(t).lineHeight);
  while(s>min && (t.scrollHeight>box.clientHeight+1 || Math.round(t.scrollHeight/lh())>lines || t.scrollWidth>box.clientWidth+1)){
    s-=1; t.style.fontSize=s+'px';
  }
  document.body.dataset.fit=s;
  document.title='FIT:'+s+':'+Math.round(t.scrollHeight/lh());
}
document.fonts.ready.then(fit);
</script>
"""


def base_css(b, W, H):
    d = b["fonts"]["display"]; bo = b["fonts"]["body"]
    return f"""{font_faces(b)}
*{{box-sizing:border-box;margin:0;padding:0}}
html{{font-size:{10*W/1200:.4f}px}}
body{{width:{W}px;height:{H}px;overflow:hidden;position:relative;font-family:'{bo['family']} Cover',sans-serif;
  -webkit-font-smoothing:antialiased;text-rendering:geometricPrecision}}
.title{{font-family:'{d['family']} Cover',serif;font-weight:{d['weight']};font-variant-numeric:lining-nums;text-wrap:balance;hyphens:none;overflow-wrap:normal}}
  .nw{{white-space:nowrap}}
#titlebox{{flex:1 1 auto;min-height:0;display:flex;align-items:center;overflow:hidden}}
"""


# ---------------------------------------------------------------- HA layouts
def ha_html(b, a, W, H, layout):
    c = b["colors"]
    dark = layout == "dark"
    logo = data_uri(b["logos"]["on_dark" if dark else "on_light"])
    bg = c["ink"] if dark else c["bg_light"]
    fg = c["white"] if dark else c["ink"]
    sub = c["muted"] if dark else c["ink_soft"]
    eyebrow = html.escape(a.eyebrow if a.eyebrow is not None else b["default_eyebrow"])
    subtitle = f'<p class="sub">{rich(a.subtitle)}</p>' if a.subtitle else ""
    # ascending bars echo the logo mark
    bars = "".join(
        f'<div class="bar" style="height:{h}%;opacity:{o}"></div>'
        for h, o in ((28, .35), (42, .5), (58, .7), (76, .85), (100, 1)))
    decor_dark = f"""
<div class="glow"></div><div class="grid"></div>
<div class="chart">{bars}</div>"""
    decor_light = f"""
<div class="card">
  <div class="card-h"><span class="dot"></span><span class="ln w40"></span></div>
  <div class="kpis"><div class="kpi"><span class="ln w60"></span><b></b></div><div class="kpi"><span class="ln w50"></span><b></b></div></div>
  <svg class="area" viewBox="0 0 300 120" preserveAspectRatio="none">
    <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="{c['primary']}" stop-opacity=".45"/><stop offset="1" stop-color="{c['primary']}" stop-opacity="0"/></linearGradient></defs>
    <path d="M0,95 C30,90 45,70 70,74 C100,79 115,40 145,46 C175,52 190,30 215,24 C245,17 265,36 300,8 L300,120 L0,120 Z" fill="url(#g)"/>
    <path d="M0,95 C30,90 45,70 70,74 C100,79 115,40 145,46 C175,52 190,30 215,24 C245,17 265,36 300,8" fill="none" stroke="{c['primary']}" stroke-width="3"/>
  </svg>
</div>"""
    title_w = "70%" if dark else "60%"
    css = base_css(b, W, H) + f"""
body{{background:{bg};color:{fg}}}
.glow{{position:absolute;right:-18rem;top:-22rem;width:70rem;height:70rem;border-radius:50%;
  background:radial-gradient(circle,{c['primary']}38 0%,{c['primary']}00 62%)}}
.grid{{position:absolute;inset:0;background-image:linear-gradient(#ffffff08 1px,transparent 1px),linear-gradient(90deg,#ffffff08 1px,transparent 1px);
  background-size:6rem 6rem}}
.chart{{position:absolute;right:7rem;bottom:0;height:46%;width:22rem;display:flex;align-items:flex-end;gap:1.4rem}}
.bar{{flex:1;border-radius:1rem 1rem 0 0;background:linear-gradient(180deg,{c['primary_alt']},{c['primary']})}}
.card{{position:absolute;right:6rem;top:50%;transform:translateY(-42%) rotate(-2deg);width:34%;background:#fff;border-radius:2rem;
  box-shadow:0 2.4rem 6rem #0f172a22,0 0 0 1px #0f172a0d;padding:2.6rem 2.6rem 0;overflow:hidden}}
.card-h{{display:flex;align-items:center;gap:1rem;margin-bottom:2rem}}
.dot{{width:1.8rem;height:1.8rem;border-radius:.5rem;background:{c['primary']}}}
.ln{{display:block;height:1rem;border-radius:1rem;background:#e2e8f0}} .w40{{width:40%}} .w60{{width:60%}} .w50{{width:50%}}
.kpis{{display:flex;gap:1.4rem;margin-bottom:1.6rem}}
.kpi{{flex:1;border:1px solid #e2e8f0;border-radius:1.2rem;padding:1.4rem}}
.kpi b{{display:block;margin-top:1rem;height:2.2rem;width:70%;border-radius:.6rem;background:{c['ink']}}}
.area{{display:block;width:calc(100% + 5.2rem);margin-left:-2.6rem;height:13rem}}
.wrap{{position:absolute;inset:0;padding:6rem 7rem 6.4rem;display:flex;flex-direction:column}}
.top{{display:flex;align-items:center;justify-content:space-between;margin-bottom:3rem}}
.logo{{height:6.2rem}}
.url{{font-size:2.1rem;font-weight:600;color:{sub};letter-spacing:.02em}}
.main{{width:{title_w};flex:1;display:flex;flex-direction:column;min-height:0}}
.eyebrow{{align-self:flex-start;font-size:1.8rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:{c['primary']};
  border:2px solid {c['primary']}66;background:{c['primary']}14;padding:.8rem 1.6rem;border-radius:99rem;margin-bottom:2.2rem}}
.title{{line-height:1.06;letter-spacing:-.02em;color:{fg}}}
.hl{{background:linear-gradient(90deg,{c['primary']},{c['primary_alt']});-webkit-background-clip:text;background-clip:text;color:transparent}}
.sub{{margin-top:2.2rem;font-size:2.5rem;line-height:1.35;color:{sub};font-weight:500;max-width:95%;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}}
.strip{{position:absolute;left:0;right:0;bottom:0;height:.9rem;background:linear-gradient(90deg,{c['primary']},{c['primary_alt']})}}
"""
    url_html = f'<span class="url">{b["site"]}/blog</span>' if dark else ""
    eb = f'<div class="eyebrow">{eyebrow}</div>' if eyebrow else ""
    maxpx = 76 * W / 1200 if dark else 70 * W / 1200
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>{css}</style></head><body>
{decor_dark if dark else decor_light}
<div class="wrap">
  <div class="top"><img class="logo" src="{logo}">{url_html}</div>
  <div class="main">{eb}
    <div id="titlebox"><h1 id="title" class="title" data-max="{maxpx:.0f}" data-min="{34*W/1200:.0f}" data-lines="4">{rich(a.title)}</h1></div>
    {subtitle}
  </div>
</div>
<div class="strip"></div>
{FIT_JS}</body></html>"""


# -------------------------------------------------------------- GCBV layouts
def gcbv_html(b, a, W, H, layout):
    c = b["colors"]
    icon = data_uri(b["logos"]["icon"])
    eyebrow = a.eyebrow if a.eyebrow is not None else b["default_eyebrow"]
    eyebrow = html.escape(eyebrow)
    subtitle = f'<p class="sub">{rich(a.subtitle)}</p>' if a.subtitle else ""
    photo = layout == "photo"
    if photo and a.image:
        bgimg = f"url('{data_uri(a.image)}') {a.focus}/cover no-repeat"
    else:
        bgimg = f"linear-gradient(135deg,{c['navy']} 0%,{c['ocean_dark']} 100%)"
    fg = c["white"] if photo else c["navy"]
    css = base_css(b, W, H) + f"""
body{{color:{fg};background:{c['sand_light'] if not photo else c['navy']}}}
.photo{{position:absolute;inset:0;background:{bgimg}}}
.shade{{position:absolute;inset:0;background:
  linear-gradient(90deg,{c['navy_deep']}f2 0%,{c['navy_deep']}cc 45%,{c['navy_deep']}55 80%,{c['navy_deep']}33 100%),
  linear-gradient(0deg,{c['navy_deep']}aa 0%,{c['navy_deep']}00 40%)}}
.sun{{position:absolute;right:9rem;top:7rem;width:15rem;height:15rem;border-radius:50%;background:{c['coral']}}}
.waves{{position:absolute;left:0;right:0;bottom:0;width:100%;height:30%}}
.wrap{{position:absolute;inset:0;padding:6.2rem 7.4rem 6rem;display:flex;flex-direction:column}}
.main{{width:{ '78%' if photo else '74%'};flex:1;display:flex;flex-direction:column;min-height:0}}
.eyebrow{{font-size:2rem;font-weight:600;letter-spacing:.22em;color:{c['ocean_light'] if photo else c['ocean_dark']};text-transform:uppercase}}
.rule{{width:7.5rem;height:.6rem;border-radius:1rem;background:{c['coral']};margin:1.4rem 0 2.4rem}}
.title{{line-height:1.1;letter-spacing:-.005em;color:{fg};{'text-shadow:0 .2rem 1.6rem #0008;' if photo else ''}}}
.hl{{color:{c['ocean_light'] if photo else c['ocean']};font-style:italic;padding-right:.06em}}
.sub{{margin-top:2rem;font-size:2.6rem;line-height:1.35;font-weight:500;color:{'#ffffffdd' if photo else c['navy']+'cc'};max-width:92%;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}}
.brand{{display:flex;align-items:center;gap:1.4rem;margin-top:3rem;flex:0 0 auto}}
.brand img{{width:6.4rem;height:6.4rem;border-radius:1.3rem;{'box-shadow:0 0 0 2px #ffffff33;' if photo else ''}}}
.wm{{font-family:'Playfair Display Cover',serif;font-weight:700;font-size:2.8rem;line-height:1.02}}
.wm .a{{color:{c['white'] if photo else c['navy']}}} .wm .b{{color:{c['ocean_light'] if photo else c['ocean']}}}
"""
    if photo:
        decor = '<div class="photo"></div><div class="shade"></div>'
    else:
        decor = f"""<div class="sun"></div>
<svg class="waves" viewBox="0 0 1200 190" preserveAspectRatio="none">
<path d="M0 70 C150 20 260 120 420 70 C580 20 690 120 850 70 C1000 25 1100 95 1200 60 L1200 190 L0 190 Z" fill="{c['ocean']}" opacity=".28"/>
<path d="M0 110 C160 60 270 160 430 110 C590 60 700 160 860 110 C1010 65 1110 135 1200 100 L1200 190 L0 190 Z" fill="{c['ocean']}"/>
<path d="M0 150 C170 115 280 190 440 150 C600 112 710 190 870 150 C1020 115 1120 175 1200 145 L1200 190 L0 190 Z" fill="{c['navy']}" opacity=".9"/>
</svg>"""
    maxpx = 74 * W / 1200
    pad_bottom = "" if photo else "<style>.wrap{padding-bottom:14rem}</style>"
    brand_html = f'<div class="brand"><img src="{icon}"><div class="wm"><div class="a">Gulf Coast</div><div class="b">Beach Vibes</div></div></div>'
    if not photo:  # sand layout: logo on top, waves at bottom
        top = brand_html.replace('class="brand"', 'class="brand" style="margin:0 0 3.2rem"')
        bottom = ""
    else:
        top, bottom = "", brand_html
    eb = f'<div class="eyebrow">{eyebrow}</div><div class="rule"></div>' if eyebrow else ""
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>{css}</style>{pad_bottom}</head><body>
{decor}
<div class="wrap">{top}
  <div class="main">{eb}
    <div id="titlebox"><h1 id="title" class="title" data-max="{maxpx:.0f}" data-min="{36*W/1200:.0f}" data-lines="{3 if not photo else 4}">{rich(a.title)}</h1></div>
    {subtitle}
  </div>{bottom}
</div>
{FIT_JS}</body></html>"""


def render(html_doc, out, W, H, chrome, keep_html=False):
    from playwright.sync_api import sync_playwright
    out = Path(out).resolve()
    out.parent.mkdir(parents=True, exist_ok=True)
    if keep_html:
        out.with_suffix(".html").write_text(html_doc, encoding="utf-8")
    with sync_playwright() as p:
        kw = {"args": ["--no-sandbox", "--disable-gpu"]}
        if chrome:
            kw["executable_path"] = chrome
        br = p.chromium.launch(**kw)
        try:
            pg = br.new_page(viewport={"width": W, "height": H}, device_scale_factor=1)
            errs = []
            pg.on("pageerror", lambda e: errs.append(str(e)))
            pg.set_content(html_doc, wait_until="load")
            try:
                pg.wait_for_function("document.title.startsWith('FIT:')", timeout=15000)
            except Exception:
                sys.exit(f"Title fit never finished. Page errors: {errs or 'none'}")
            fit = pg.title()
            pg.screenshot(path=str(out), type="png", clip={"x": 0, "y": 0, "width": W, "height": H})
        finally:
            br.close()
    return out, fit


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    brands = json.loads((ROOT / "brands.json").read_text())
    ap.add_argument("--brand", required=True, choices=sorted(brands.keys()))
    ap.add_argument("--title", required=True, help="Post title. Wrap words in *asterisks* to highlight them.")
    ap.add_argument("--subtitle", help="Optional one-line subtitle")
    ap.add_argument("--eyebrow", help="Small label above the title (default from brands.json; pass '' to hide)")
    ap.add_argument("--layout", help="Defaults to the approved look in brands.json (ha: dark, gcbv: photo)")
    ap.add_argument("--image", help="gcbv photo layout: background photo (jpg/png/webp). Falls back to a brand gradient.")
    ap.add_argument("--focus", default="center", help="gcbv photo: CSS background-position, e.g. 'right center' or '70% 40%'")
    ap.add_argument("--size", default="1200x630", choices=list(SIZES) + ["both"])
    ap.add_argument("--out", required=True, help="Output .png (with --size both, -1600x900 is added for the second file)")
    ap.add_argument("--keep-html", action="store_true", help="Also save the HTML used (for debugging)")
    a = ap.parse_args()
    if not re.fullmatch(r"[a-z0-9%.\s-]+", a.focus):
        sys.exit("--focus must be a CSS background-position like 'center' or '70% 40%'")
    if a.image:
        img = Path(a.image).expanduser().resolve()
        if not img.exists():
            sys.exit(f"--image not found: {img}")
        a.image = str(img)
    o = Path(a.out)
    a.out = str(o if o.suffix.lower() == ".png" else o.with_suffix(".png"))
    ensure_venv()

    b = brands[a.brand]
    layout = a.layout or b["default_layout"]
    if layout not in b["layouts"]:
        sys.exit(f"Layout '{layout}' not valid for {a.brand}; choose from {b['layouts']}")
    chrome = find_chrome()
    sizes = list(SIZES) if a.size == "both" else [a.size]
    for s in sizes:
        W, H = SIZES[s]
        out = a.out if (s == "1200x630" or a.size != "both") else str(Path(a.out).with_name(Path(a.out).stem + "-1600x900.png"))
        t0 = time.time()
        doc = (ha_html if a.brand == "ha" else gcbv_html)(b, a, W, H, layout)
        p, fit = render(doc, out, W, H, chrome, a.keep_html)
        _, px, lines = fit.split(":")
        print(f"{p}  {W}x{H}  {a.brand}/{layout}  title {px}px/{lines} lines  {time.time()-t0:.1f}s")


if __name__ == "__main__":
    main()
