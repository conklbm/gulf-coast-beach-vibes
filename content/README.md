# Gulf Coast Beach Vibes — SEO Brand Pack

**Site:** https://gulfcoastbeachvibes.com/  
**Brand voice:** Honest local Gulf Coast travel guide (Dauphin Island → Panama City Beach). Practical, not brochure-y. Tish-led collab.  
**Pack purpose:** Durable SEO inventory, keyword research, ranked backlog, and handoff-ready outlines for writers.

## What’s in this pack

| File | What it is |
|------|------------|
| `README.md` | This file |
| `CONTENT-INVENTORY.md` | Existing themes/pages from live sitemap + GSC + homepage crawl |
| `KEYWORD-RESEARCH.md` | Ubersuggest US (`locId` 2840) clusters with volume/SD |
| `BACKLOG-1-20.md` | Ranked active 1–20 (all NEW / soft-overlap after 2026-09-10 replacements) |
| `OUTLINES/` | 20 detailed NEW/soft outlines (`01`–`20`) |
| `OUTLINES/refresh/` | 6 hard-conflict REFRESH briefs (kept; not in active 1–20) |
| `sitemap-live.xml` / `sitemap-urls.txt` | Live sitemap snapshot (115 URLs) |
| `raw-kw/` | Raw Ubersuggest metrics dump |

## How inventory was built

1. **Homepage / hubs** — crawled `/`, `/blog`, `/destinations`, `/eat`, `/stay`, `/activities` (2026-09-10/11).
2. **Live sitemap** — `https://gulfcoastbeachvibes.com/sitemap.xml` returned **500** via some fetch providers earlier; **curl got HTTP 200** and saved 115 URLs to `sitemap-urls.txt` / `sitemap-live.xml`. Treat the saved snapshot as source of truth for cannibalization.
3. **GSC** — Aug 2026 window in `/workspace/gsc-monthly/2026-09/gulfcoastbeachvibes-com/` (comparisons + seasonal pages drive most clicks).
4. **Ubersuggest** — `user-Ubersuggest`, US `locId` 2840: `keyword_overview`, `keyword_suggestions`, `match_keywords` across restaurant / park / ferry / drive / stay / seasonal seeds. Metrics are recorded as returned — **not invented**. One call timed out (`best breakfast panama city beach`); noted in KW research.

## Strategy notes (2026-09)

- Lean into **food + named attractions** over more Destin-vs-X comparisons (site already heavy on comps).
- `/eat` hub lists food articles but several promised URLs were empty/404 historically — backlog fills those pillars.
- Soft-overlap park / 30A / quiet pieces are net-new but must link parent/sibling guides.

### Conflicted slots replaced (2026-09-10)

Brooks greened **6 NEW replacement titles** for hard-conflict backlog slots. Active `OUTLINES/01`–`20` are now all net-new or soft-overlap. The 6 REFRESH briefs were moved to `OUTLINES/refresh/` (not deleted):

| Old slot | Was (REFRESH) | Replacement (NEW) |
|----------|---------------|-------------------|
| #8 | Budget vacation | Gulf State Park visitor guide |
| #10 | Memphis drive | Destin HarborWalk guide |
| #14 | Best time PCB | The Wharf Orange Beach guide |
| #15 | Best time Orange Beach | Okaloosa Island guide |
| #17 | Stay Pensacola Beach | Fort Morgan, AL visitor guide |
| #18 | Stay Orange Beach | Perdido Key beach / day-trip guide |

All six replacements were checked clear of `sitemap-urls.txt` (no matching URLs).

## Do not

- Publish to the live site from this pack alone.
- Invent search volumes.
- Duplicate `/blog/gulf-coast-on-a-budget`, Memphis drive, best-time PCB/OB, or where-to-stay Pensacola/Orange Beach as new URLs (use `OUTLINES/refresh/` briefs only).
