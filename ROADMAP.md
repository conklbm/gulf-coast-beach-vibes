# Roadmap: Gulf Coast Beach Vibes

Features and tech work for gulfcoastbeachvibes.com. Articles live in [CONTENT.md](CONTENT.md).
Claude Code: read this file and CONTENT.md before any build.
Last reviewed: 2026-11-10

## Rules
- Sage's Search Console + GA packets (and the weekly indexing check) feed **Ideas**, by pull request.
- Only **Brooks** moves an item into **Next up**. Tish signs off on items in her lane (designs, Etsy, promotion, ebooks, newsletter).
- Every item is tagged **[Feature]** or **[Tech]** and has a source. In progress always shows the PR link.
- The pull request that ships an item moves it to **Done** in the same PR, with the date.
- The repo is the source of truth for published counts (see CONTENT.md Done).
- Fix bad deploys by rolling back, never by deleting (see CLAUDE.md).

**Pilot note (2026-11-10):** site and tech items from `content-plan.md`, `content-pipeline.csv` and `content/BACKLOG-1-20.md` (now in `docs/archive/`) and from Sage's GSC packets were folded in here. Source tags match CONTENT.md.

## Ideas
- [Tech] The Wharf Orange Beach guide is still "URL is unknown to Google" though it's in the sitemap: Brooks requests indexing once in GSC URL Inspection (manual, ~1 min), and add a link from `/destinations/orange-beach`. Source: Sage GSC 2026-10-05 A; Sage GSC 2026-10-19 A; Sage GSC 2026-11-02 R1 | links from 3 OB posts + OB restaurants are already in
- [Tech] `/stay/best-places-to-stay-gulf-coast` is "Discovered – currently not indexed": link it from the homepage and from the where-to-stay blog posts (today only `/stay` links it). Source: Sage Index 2026-11-10
- [Tech] Two posts link to `/destinations/seaside-30a`, which doesn't exist (the hub is `/destinations/seaside`): fix the links in `where-to-stay-30a` and `best-things-to-do-30a`, or add a redirect. Source: Sage repo 2026-11-10
- [Tech] `/activities/best-things-to-do-gulf-shores` and `/blog/best-things-to-do-gulf-shores` target the same keyword with separate content: pick one (canonical or 301) so they don't compete. Source: Sage repo 2026-11-10
- [Tech] Sitemap sets `lastModified: new Date()` on every URL, so each deploy marks all pages as changed (11/02 sitemap showed every lastmod = 2026-10-22). Use real per-post dates. Source: Sage GSC 2026-11-02 (sitemap check)
- [Tech] Review the rest of the 24 404 URLs that earn impressions (AI-invented slugs); 2 were redirected on 10/14. Source: Sage GSC 2026-10-05 tech note 2 (`notinsitemap-status.csv`)
- [Tech] Backlink spam check for gulfcoastbeachvibes.com (offered, not started). Source: Sage 2026-11 (chat offer)
- [Tech] Claude GitHub Action (label an issue `claude` → Claude opens a PR): setup kit written 10/12, never installed (no `.github/workflows/`). Source: Sage GSC 2026-10-12 (gcbv-claude-action)
- [Feature] Branded OG covers for the 121 existing posts (new posts get one via PR #6). Brooks to decide. Source: Sage 2026-11-10 (cover PR)
- [Feature] Affiliate coverage gaps: hotel links on every road-trip post, FishingBooker on fishing content, TripShock on activity posts. Source: Old plan 2026-03 ("Affiliate Coverage Gaps")
- [Feature] Finish or retire the noindex "Coming soon" stubs linked from `/stay` and `/activities` (VRBO Gulf Shores, Hotels Destin, Water Sports, Fishing Charters). Articles for them are in CONTENT.md Ideas. Source: Repo stub 2026-11-10
- [Tech] Scheduled rechecks: Destin vs Clearwater title effect (11/11), the 10/14–10/19 posts and refreshes (11/16), Etsy/social links (11/19). Source: SEO-CHANGELOG.md; Sage GSC 2026-11-02

## Next up
Ranked, 3 to 5 items. **Proposed by Sage, not approved.** Only Brooks moves items here.
1. (proposed — Brooks to approve) [Tech] Request indexing for the Wharf guide + link from `/destinations/orange-beach`. Why: flagged in 3 straight packets; a 27.1k/mo-term page has 0 impressions
2. (proposed — Brooks to approve) [Tech] Internal links to `/stay/best-places-to-stay-gulf-coast`. Why: written guide Google found but skipped
3. (proposed — Brooks to approve) [Tech] Fix the 2 broken `/destinations/seaside-30a` links. Why: broken internal links, 2-line fix

## In progress
- [Feature] Blog cover tool + `ogImage` on new posts. Sage. [PR #6](https://github.com/conklbm/gulf-coast-beach-vibes/pull/6) (`feat/blog-cover-tool`), opened 2026-11-10, waiting on Brooks
- [Tech] ROADMAP.md + CONTENT.md pilot (this PR). Sage. Opened 2026-11-10, waiting on Brooks

## Done
- 2026-10-22 [Feature] Facebook / Pinterest / Etsy links sitewide, Etsy shop section on the homepage + Etsy promo on 7 posts, Organization/WebSite JSON-LD `sameAs`. PR #5
- 2026-10-19 [Tech] GCBV self-merge rule in CLAUDE.md. 4743637
- 2026-10-18 [Tech] Pre-merge review rule in CLAUDE.md. 142fb20
- 2026-10-17 [Tech] Repo-scoped git token + no-delete / roll-back-only rule in CLAUDE.md. 74bbddb
- 2026-10-16 [Tech] Official links on first mention of named places (~470 links across the blog). c976e1d + 3 follow-ups
- 2026-10-15 [Tech] Title and meta description rules in CLAUDE.md. 8bbc8f6
- 2026-10-14 [Tech] 308 redirects for 404s earning impressions (`/blog/navarre-beach-vibes`, `/is-gulf-shores-worth-it`). Source: Sage GSC 2026-10-05 K. 618fb6c
- 2026-10-14 [Tech] SEO-CHANGELOG.md added. 0a2d64c
- 2026-09-11 [Tech] Food guides moved from `/eat/*` to `/blog/*` with 301s. c104edd
- 2026-09-11 [Tech] Canonical tags sitewide; noindex on unwritten stub pages. 17ae96c
