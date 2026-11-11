# Content: Gulf Coast Beach Vibes

Article queue for gulfcoastbeachvibes.com. Features and tech work live in [ROADMAP.md](ROADMAP.md). Keyword and competitor research lives in [KEYWORDS.md](KEYWORDS.md).
Claude Code: read this file, ROADMAP.md, and KEYWORDS.md before any build.
Last reviewed: 2026-11-11

## Rules
- Sage's monthly/biweekly Search Console + GA packets feed **Ideas** (by pull request, with a brief in `content/OUTLINES/`).
- Only **Brooks** approves an item into **Next up** (Tish for her lane: designs, Etsy, promotion, ebooks, newsletter). Brooks approves batches in chat; Sage records the approved items here, in rank order. The queue can be larger than 3–5 once a batch is approved.
- The pull request that ships a post moves its item to **Done** in the same PR, with the date and live URL.
- This repo is the source of truth for published counts (`lib/posts.ts` + `app/blog/[slug]/content/`), not the old sheet.
- Every item: title | keyword (vol / SD) | intent | status | source | brief, PR or URL.
- Status: idea > brief ready > drafting > in review > live > refresh due
- Long research (packets, keyword exports) stays in [KEYWORDS.md](KEYWORDS.md); briefs live in `content/OUTLINES/`.

**Source tags:** `Sage GSC <date>` = biweekly GSC + keyword review packet (rank and D×W×F score from that packet) · `Sage KW <date>` = Ubersuggest US cluster, now recorded in [KEYWORDS.md](KEYWORDS.md) (original notes in `docs/archive/KEYWORD-RESEARCH.md`) · `Notion KW` = row migrated from the Notion SEO Keywords database into [KEYWORDS.md](KEYWORDS.md) on 2026-11-10 · `Old plan 2026-03` = `docs/archive/content-plan.md` · `Old sheet #` = `docs/archive/content-pipeline.csv` · `Repo stub` = noindex "Coming soon" page already linked on the site. "unmeasured" = no Ubersuggest metric yet.

**Pilot note (2026-11-10):** this file replaces `content/BACKLOG-1-20.md`, `content-plan.md` and `content-pipeline.csv` (moved to `docs/archive/` with pointers). All 20 BACKLOG-1-20 items are live (see Done). The old sheet and content plan said 27 published; the repo has 121 blog posts plus 2 guide pages. Keyword and competitor research now lives in [KEYWORDS.md](KEYWORDS.md); the Ubersuggest cluster notes moved to `docs/archive/KEYWORD-RESEARCH.md`.

## Ideas

### New posts scored by Sage (latest packet first, then score)

- Gulf State Park Campground Guide | "gulf state park camping" (12,100 / SD 12) | info | brief ready | Sage GSC 2026-11-02 #1 (score 100); Sage KW 2026-09-10 Cluster I; Notion KW | brief: content/OUTLINES/31-gulf-state-park-campground.md · path /blog/gulf-state-park-campground-guide · SERP noData, re-check before drafting
- Best Restaurants in Miramar Beach | "miramar beach restaurants" (9,900 / SD 21) | local | brief ready | Sage GSC 2026-11-02 #2 (score 80); Sage KW 2026-11-02 Cluster M | brief: content/OUTLINES/32-best-restaurants-miramar-beach.md · WEAK SERP: royalpalmgrille.com DA 20, bosforomiramarbeach.com DA 8, Reddit, TripAdvisor
- Best Restaurants in Perdido Key | "perdido key fl restaurants" (6,600 / SD 20) | local | brief ready | Sage GSC 2026-11-02 #3 (score 80); Sage KW 2026-09 bank; Notion KW | brief: content/OUTLINES/33-best-restaurants-perdido-key.md · moderate SERP: perdidochamber.com DA 37, crabtrapflorida.com DA 40
- Best Restaurants in Navarre Beach | "restaurants navarre beach" (8,100 / SD 21) | local | brief ready | Sage GSC 2026-09-21 (honorable mention); Sage GSC 2026-10-05 #4 (60); Sage GSC 2026-10-19 #3 (60); Sage GSC 2026-11-02 carry; Sage KW 2026-10-05 Cluster K; Notion KW | brief: content/OUTLINES/25-best-restaurants-navarre-beach.md · Navarre cluster 849 impr in GSC
- Closest Gulf Coast Beaches to Atlanta (ranked by drive time) | "beaches closest to atlanta" (4,400 / SD 8) | info | brief ready | Sage GSC 2026-10-05 #5 (60); Sage GSC 2026-10-19 #3 (60); Sage GSC 2026-11-02 carry (strongest); Sage KW 2026-10-05 Cluster K; Notion KW | brief: content/OUTLINES/26-closest-beaches-to-atlanta.md · soft overlap with /blog/gulf-coast-from-atlanta (296 distance impr at pos 18.6); replaces the 10/05 'closest beaches section' refresh G
- Fort Gaines Guide (Dauphin Island) | "fort gaines" (8,100 / SD 42) | info | idea | Sage GSC 2026-10-19 #12 (30); Sage KW 2026-10-19 Cluster L | or fold into the DI guide refresh (see Refreshes)
- Gulf Coast in June / July / August (month-series gaps) | "destin in june" (170 / SD 21); July/Aug seeds unmeasured | info | idea | Sage GSC 2026-11-02 (month gaps; June 'later, by March'); Sage KW 2026-11-02 Cluster M | pull July/Aug metrics next cycle

### Hard / long-shot bank (scored low; kept for later)

- Best Restaurants in Panama City Beach | "best restaurants panama city beach" (12,100 / SD 61) | local | idea | Sage GSC 2026-10-05 bank (20); Sage KW 2026-10-05 Cluster K; Notion KW | hard
- Navarre Beach Pier Guide | "navarre beach pier" (1,900 / SD 32) | navigational | idea | Sage GSC 2026-10-05 bank (24); Sage KW 2026-10-05 Cluster K
- Pensacola Lighthouse Guide | "pensacola lighthouse" (3,600 / SD 46) | navigational | idea | Sage GSC 2026-10-05 bank (9); Sage KW 2026-10-05 Cluster K | lowest score in the bank

### From the old content plan and sheet (no metrics yet)

- Pensacola Beach: Complete Visitor's Guide | "pensacola beach guide" (unmeasured) | info | idea | Old plan 2026-03 Tier 2; Old sheet #40 | the 2026-07 Drive doc for this slug was a duplicate itinerary and was skipped (SEO-GAMEPLAN); no hub post exists yet
- Gulf Shores, Alabama: Complete Travel Guide | "gulf shores alabama guide" (unmeasured) | info | idea | Old plan 2026-03 Tier 2 | hub for Gulf Shores posts; check overlap with /destinations/gulf-shores
- Most Romantic Gulf Coast Beaches (couples) | "gulf coast for couples" (unmeasured) | info | idea | Old plan 2026-03 Tier 2 | soft overlap with live /blog/gulf-coast-honeymoon
- Best Snorkeling on the Gulf Coast | "snorkeling gulf coast" (unmeasured) | info | idea | Old plan 2026-03 Tier 3
- Kayaking the Gulf Coast | "gulf coast kayaking" (unmeasured) | info | idea | Old plan 2026-03 Tier 3
- Hidden Beaches on the Gulf Coast | "hidden beaches gulf coast" (unmeasured) | info | idea | Old plan 2026-03 Tier 3 | soft overlap with live /blog/quietest-gulf-coast-beaches
- Are There Jellyfish on the Gulf Coast? | "gulf coast jellyfish" (unmeasured) | info | idea | Old plan 2026-03 Tier 3 | FAQ snippet angle
- Gulf Shores Beach Rules (alcohol, pets, chairs) | "gulf shores beach rules" (unmeasured) | info | idea | Old plan 2026-03 Tier 3 | ties to the OB/GS dog-rules refresh
- Gulf Coast Beach Vacations for Seniors | "gulf coast for seniors" (unmeasured) | info | idea | Old plan 2026-03 Tier 3
- Gulf Coast Beach from Chicago | "gulf coast from chicago" (unmeasured) | info | idea | Old plan 2026-03 Tier 3 | fits the live road-trip series
- Gulf Coast vs. East Coast Beaches | "gulf coast vs east coast beaches" (unmeasured) | info | idea | Old plan 2026-03 Tier 3
- Alabama vs. Florida Gulf Beaches | "alabama vs florida beaches" (unmeasured) | info | idea | Old plan 2026-03 Tier 3
- Best Gulf Coast Seafood: What to Order and Where | "gulf coast seafood guide" (unmeasured) | info | idea | Old plan 2026-03 Tier 3
- Best Seafood Restaurants in Destin | "best seafood restaurants destin" (unmeasured) | local | idea | Old sheet #100 | soft overlap with live /blog/best-restaurants-destin; maybe an H2 instead

### Pages already promised on the site (noindex "Coming soon" stubs)

- Best VRBO Vacation Rentals in Gulf Shores | "vrbo gulf shores" (unmeasured) | commercial | idea | Repo stub /stay/best-vrbo-gulf-shores | page is a noindex 'Coming soon' stub linked from /stay
- Best Hotels in Destin, FL | "destin hotels" (unmeasured) | commercial | idea | Repo stub /stay/best-hotels-destin-fl | noindex stub linked from /stay
- Best Water Sports on the Gulf Coast | "gulf coast water sports" (unmeasured) | commercial | idea | Repo stub /activities/best-water-sports-gulf-coast | noindex stub linked from /activities
- Best Fishing Charters on the Gulf Coast | "fishing charters gulf coast" (unmeasured) | commercial | idea | Repo stub /activities/best-fishing-charters-gulf-coast | noindex stub; FishingBooker affiliate; soft overlap with /blog/gulf-coast-fishing-guide

### Refreshes of live posts

- Refresh: Dauphin Island guide (How far / how big FAQ + drive-time table; Fort Gaines + Estuarium H2s) | "how far is dauphin island from gulf shores" (210 / SD 18); how long is dauphin island (110 / SD 25) | info | refresh due | Sage GSC 2026-09-21 C/#3; Sage GSC 2026-10-05 C (#23 demoted); Sage GSC 2026-10-19 E; Sage GSC 2026-11-02 R2; Sage KW 2026-10-05 Cluster J | brief: content/OUTLINES/23-dauphin-island-how-far.md · /blog/dauphin-island-guide (1,558 impr, pos 11.1)
- Refresh: Where to Stay in Destin (area table, hotel vs condo, sharper title) | "where to stay in destin" | commercial | refresh due | Sage GSC 2026-09-21 E; Sage GSC 2026-10-05 H; Sage GSC 2026-10-19 H; Sage GSC 2026-11-02 R3 | /blog/where-to-stay-destin stuck at pos ~20–25
- Refresh: Best Seafood Gulf Shores → broaden to 'Best Restaurants in Gulf Shores (Seafood First)' | "best restaurants gulf shores" (6,600 / SD 11) | local | refresh due | Sage GSC 2026-11-02 R4; Notion KW | /blog/best-seafood-gulf-shores slid 12.9 → 20.8; trim LuLu's H2 if the LuLu's post is greenlit
- Refresh: Pet-friendly beaches (Orange Beach / Gulf Shores / Fort Pickens dog-rules FAQ) | "is orange beach alabama dog friendly" (30 / SD 21) | info | refresh due | Sage GSC 2026-09-21 B/#8; Sage GSC 2026-10-05 D; Sage GSC 2026-10-19 F; Sage GSC 2026-11-02 (smaller ideas); Sage KW 2026-10-05 Cluster J | /blog/pet-friendly-gulf-coast-beaches, dog cluster 210–405 impr at low CTR
- Refresh: Miramar Beach vs Destin ('Is Miramar Beach in Destin?' H2 + Baytowne link) | "is miramar beach in destin" (390 / SD 57) | info | refresh due | Sage GSC 2026-09-21 G/#6; Sage GSC 2026-10-05 F; Sage GSC 2026-10-19 G; Sage KW 2026-10-05 Cluster J | no such H2 on the live page yet
- Refresh: Best Time to Visit Gulf Shores (month-by-month weather + water-temp table, swim FAQ) | "gulf shores water temperature" (1,900 / SD 25); gulf shores weather by month (720 / SD 33) | info | refresh due | Sage GSC 2026-09-21 D; Sage GSC 2026-10-05 J/#9 (water-temp post folded in); Sage GSC 2026-10-19 D; Sage KW 2026-10-19 Cluster L | #1 page by clicks; page already mentions water temps, so check what a table adds
- Refresh: Panama City Beach vs Destin (snippet + comparison table) | "panama city beach vs destin" | info | refresh due | Sage GSC 2026-09-21 F; Sage GSC 2026-10-05 E | 2,520 impr / pos 7.2 (11/02)
- Refresh: Orange Beach guide as a hub (link OB restaurants + dog rules) | "orange beach alabama" | info | refresh due | Sage GSC 2026-10-05 I; Sage GSC 2026-10-19 J | Wharf link is in (10/14); the OB restaurants link is still missing
- Refresh: Best Breakfast (add a Gulf Shores section) | "best breakfast gulf shores" (880 / SD 32) | local | refresh due | Sage GSC 2026-10-19 I; Sage KW 2026-10-19 Cluster L
- Refresh: Orange Beach restaurants (add a 'best seafood' line) | "best seafood orange beach" (1,600 / SD 42) | local | refresh due | Sage GSC 2026-10-19 (PR #1 tweak); Sage KW 2026-10-19 Cluster L | optional
- Refresh: Gulf Coast from Nashville (add Orange Beach mileage) | "nashville to orange beach" | info | refresh due | Sage GSC 2026-11-02 (smaller ideas) | 56 impr at pos 9.6
- Refresh: Navarre guide (Sea Turtle Conservation Center H2) | "navarre beach sea turtle conservation center" (9,900 / SD 30) | navigational | refresh due | Sage GSC 2026-11-02 (passed as NEW → H2); Sage KW 2026-11-02 Cluster M | only best-things-to-do-navarre-beach mentions it today
- Refresh: Gulf Coast on a Budget (where to base + what to skip) | "cheap gulf coast vacation" (110 / SD 26) | info | refresh due | Sage KW 2026-09-10 (refresh brief 08); Sage GSC 2026-09-21/10-05 'still valid' | brief: content/OUTLINES/refresh/08-budget-gulf-coast-REFRESH.md
- Refresh: Gulf Coast from Memphis (Destin vs Gulf Shores frame) | "memphis to destin" (880 / SD 21) | info | refresh due | Sage KW 2026-09-10 (refresh brief 10); Sage GSC 2026-09-21/10-05 'still valid' | brief: content/OUTLINES/refresh/10-memphis-destin-gulf-shores-REFRESH.md
- Refresh: Best Time to Visit Panama City Beach (true Jan–Dec H2s) | "best time to visit panama city beach" (390 / SD 33) | info | refresh due | Sage KW 2026-09-10 (refresh brief 14); Sage GSC 2026-09-21/10-05 'still valid' | brief: content/OUTLINES/refresh/14-best-time-pcb-REFRESH.md
- Refresh: Best Time to Visit Orange Beach (month-by-month like the GS post) | "best time to visit orange beach" (170 / SD 44) | info | refresh due | Sage KW 2026-09-10 (refresh brief 15); Sage GSC 2026-09-21/10-05 'still valid' | brief: content/OUTLINES/refresh/15-best-time-orange-beach-REFRESH.md
- Refresh: Where to Stay in Pensacola Beach (areas; families vs couples) | "pensacola beach hotels" (33,100 / SD 50) | commercial | refresh due | Sage KW 2026-09-10 (refresh brief 17); Sage GSC 2026-09-21/10-05 'still valid'; Notion KW | brief: content/OUTLINES/refresh/17-where-to-stay-pensacola-REFRESH.md
- Refresh: Where to Stay in Orange Beach (The Wharf vs Gulf-front condos) | "orange beach hotels" (27,100 / SD 40) | commercial | refresh due | Sage KW 2026-09-10 (refresh brief 18); Sage GSC 2026-09-21/10-05 'still valid'; Notion KW | brief: content/OUTLINES/refresh/18-where-to-stay-orange-beach-REFRESH.md

## Next up
Ranked approved queue. Brooks approves batches in chat; Sage records them here in rank order. The old 3–5 item cap is retired, so the queue can be larger once a batch is approved. Tish signs off on items in her lane.

Items 1–5: Approved by Brooks 2026-11-10.
Items 6–30: Approved by Brooks 2026-11-11 (batch 1).

1. (approved by Brooks 2026-11-10) Gulf State Park Campground Guide | "gulf state park camping" | info | brief ready | Sage GSC 2026-11-02 | Why: Score 100, softest 10k+ term in the bank (SD 12); spoke off the live GSP guide. Note: Brooks has his own photos and video clips of the Gulf State Park area (not necessarily the campground). Ask him for them for the hero image and the cover; prefer them over stock.
2. (approved by Brooks 2026-11-10) Best Restaurants in Miramar Beach | "miramar beach restaurants" | local | brief ready | Sage GSC 2026-11-02 | Why: Score 80 and the weakest SERP measured (DA 20 and DA 8 sites, Reddit, TripAdvisor in the top 10)
3. (approved by Brooks 2026-11-10) Best Restaurants in Perdido Key | "perdido key fl restaurants" | local | brief ready | Sage GSC 2026-11-02 | Why: Score 80; Perdido guide has 156 impr and no food section
4. (approved by Brooks 2026-11-10) Closest Gulf Coast Beaches to Atlanta | "beaches closest to atlanta" | info | brief ready | Sage GSC 2026-10-05/10-19/11-02 | Why: Score 60, SD 8 (softest term measured); Google already tests the Atlanta page for it (296 impr)
5. (approved by Brooks 2026-11-10) Best Restaurants in Navarre Beach | "restaurants navarre beach" | local | brief ready | Sage GSC 2026-10-05/10-19/11-02 | Why: Score 60; Navarre is the site's #2 query cluster (849 impr) with no food page
6. (approved by Brooks 2026-11-11, batch 1) Gulf Coast in January (weather, snowbirds) | "destin in january" | info | brief ready | Sage GSC 2026-10-19 | Why: Time-sensitive; draft by early December for the December peak (590) and snowbird searches. Brief: content/OUTLINES/29-gulf-coast-in-january.md. Completes the month series next to the live December post. No January URL in the sitemap.
7. (approved by Brooks 2026-11-11, batch 1) Gulf Coast in February (Mardi Gras, snowbirds) | "destin in february" | info | brief ready | Sage GSC 2026-10-19 | Why: Time-sensitive; draft by mid-December. January peak is 880. Mardi Gras plus snowbirds. Brief: content/OUTLINES/30-gulf-coast-in-february.md. No February URL in the sitemap. Mardi Gras Orange Beach / Pensacola seeds are still unmeasured.
8. (approved by Brooks 2026-11-11, batch 1) Gulf Coast in April (+ spring break) | "destin in april" | info | idea | Sage GSC 2026-11-02 | Why: Publish by early January. "destin in april" peaks in January (720); gulf shores spring break peaks at 1,900 in March. Overlap: soft overlap with /blog/gulf-coast-in-march (spring-break crowds). Keep April on post-break weather, Easter, and late-break overflow; don't redo the March thesis.
9. (approved by Brooks 2026-11-11, batch 1) LuLu's Gulf Shores: What to Know Before You Go | "lulu's gulf shores" | navigational | idea | Sage GSC 2026-11-02 | Why: Highest remaining packet score (60). July peak 49,500; needs to be live by March. Overlap: brand-led SERP. Trim the LuLu's H2 on /blog/best-seafood-gulf-shores to a short summary plus a link when this ships. Soft mention risk on /blog/best-things-to-do-gulf-shores.
10. (approved by Brooks 2026-11-11, batch 1) Best Restaurants in Gulf Breeze | "gulf breeze restaurants" | local | idea | Sage GSC 2026-11-02 | Why: Score 60, low SD, July peak 6,600. Spoke off the live Gulf Breeze hub. Overlap: no restaurants URL in the sitemap; /destinations/gulf-breeze and /blog/gulf-breeze-vs-pensacola-beach are hubs, not food lists. SERP was noData — re-check before drafting.
11. (approved by Brooks 2026-11-11, batch 1) Alys Beach Visitor Guide | "alys beach" | navigational | idea | Sage GSC 2026-11-02 | Why: Largest volume in the Ideas list (110,000), moderate SD, score 50. Practical visitor angle: parking, access, Fonville Press, events. Overlap: alysbeach.com owns the navigational intent. Soft overlap with /blog/30a-florida-guide, /blog/best-things-to-do-30a, and /blog/what-is-30a. No standalone Alys URL in the sitemap.
12. (approved by Brooks 2026-11-11, batch 1) Topsail Hill Preserve State Park Guide | "topsail hill preserve state park" | info | idea | Sage GSC 2026-10-19 | Why: High volume (22,200), mid SD, score 48. Fits the existing standalone park-guide pattern. Overlap: soft overlap with /blog/best-gulf-coast-state-parks and /blog/gulf-coast-camping. No Topsail URL in the sitemap.
13. (approved by Brooks 2026-11-11, batch 1) Big Lagoon State Park Guide | "big lagoon state park" | info | idea | Sage GSC 2026-10-19 | Why: Score 48. Sibling spoke to the live Perdido Key and Fort Pickens guides. Overlap: soft overlap with /blog/best-gulf-coast-state-parks and /blog/perdido-key-guide. No Big Lagoon URL in the sitemap.
14. (approved by Brooks 2026-11-11, batch 1) Things to Do in Rosemary Beach | "things to do in rosemary beach" | info | idea | Sage GSC 2026-11-02 | Why: Score 45, and a weak SERP (newwavepropertymgmt.com DA 9 at #13). Secondary terms: rosemary beach fl (33,100 / SD 49) and rosemary beach restaurants (18,100 / SD 32). Overlap: /blog/best-restaurants-30a already has a Rosemary H2 — trim to a summary plus a link when this ships. Soft overlap with /blog/best-things-to-do-30a and /blog/30a-florida-guide. No Rosemary URL in the sitemap.
15. (approved by Brooks 2026-11-11, batch 1) Best Restaurants on Dauphin Island | "dauphin island restaurants" | local | idea | Sage GSC 2026-10-19 | Why: Score 45. Same restaurant-spoke pattern as the approved Navarre / Miramar / Perdido posts. Overlap: soft overlap with food mentions on /blog/dauphin-island-guide and /blog/best-things-to-do-dauphin-island. No restaurants URL in the sitemap.
16. (approved by Brooks 2026-11-11, batch 1) Big Kahuna's Destin: Tips + Is It Worth It? | "big kahuna's destin" | navigational | idea | Sage GSC 2026-11-02 | Why: Score 40 and 27k volume. July peak 74,000; only worth it if published by March. Overlap: brand-dominated SERP (knowledge graph, official site). Soft overlap with /blog/best-things-to-do-destin and /blog/gulf-coast-with-kids.
17. (approved by Brooks 2026-11-11, batch 1) OWA Parks & Resort (Foley) Guide | "owa foley" | info | brief ready | Sage GSC 2026-10-19 | Why: Score 40. Rainy-day family angle is useful through winter. Brief: content/OUTLINES/28-owa-foley-guide.md. Overlap: soft overlap with /blog/gulf-coast-with-kids and /blog/best-things-to-do-gulf-shores. No OWA URL in the sitemap.
18. (approved by Brooks 2026-11-11, batch 1) Best Restaurants in Grayton Beach | "grayton beach restaurants" | local | idea | Sage KW 2026-10-19 | Why: Added to Ideas 2026-11-11. Low SD (23), spring peak 4,400. Keyword score 121. No GSC packet score yet. Overlap: Grayton H2 and FAQ already live on /blog/best-restaurants-30a (originally researched as an H2). Trim that H2 to a short summary plus a link when this ships. Spoke off /blog/grayton-beach-state-park-guide.
19. (approved by Brooks 2026-11-11, batch 1) Alabama Gulf Coast Zoo Guide | "alabama gulf coast zoo" | navigational | idea | Sage GSC 2026-10-19 | Why: Score 32, solid volume. Indoor/rainy-day family stop that pairs with OWA in winter. Overlap: soft overlap with /blog/best-things-to-do-gulf-shores and /blog/gulf-coast-with-kids. No zoo URL in the sitemap.
20. (approved by Brooks 2026-11-11, batch 1) Pier Park Panama City Beach Guide | "pier park panama city beach" | navigational | idea | Sage GSC 2026-10-19 | Why: Huge volume (90,500). Shopping and rainy-day angle helps in winter. Overlap: soft overlap with /blog/best-things-to-do-panama-city-beach. No Pier Park URL in the sitemap.
21. (approved by Brooks 2026-11-11, batch 1) Pensacola Beach Pier Guide | "pensacola beach pier" | info | idea | Sage GSC 2026-10-19 | Why: Score 30. Fishing and sunset angle is a clear slice the hub does not own. Overlap: soft overlap with /blog/best-things-to-do-pensacola-beach. No pier URL in the sitemap.
22. (approved by Brooks 2026-11-11, batch 1) Eden Gardens State Park Guide | "eden gardens state park" | info | idea | Sage GSC 2026-10-05 | Why: Best remaining mid-difficulty park (SD 36, score 24). Worth indexing before spring bloom season. Overlap: soft overlap with /blog/best-gulf-coast-state-parks. No Eden Gardens URL in the sitemap.
23. (approved by Brooks 2026-11-11, batch 1) Flora-Bama Visitor Guide | "flora-bama" | navigational | idea | Sage GSC 2026-10-05 | Why: Highest score in the hard bank (25) and 60k volume. Unique venue with no current page. Overlap: hard, brand-led SERP. No Flora-Bama URL in the sitemap.
24. (approved by Brooks 2026-11-11, batch 1) National Naval Aviation Museum Guide | "national naval aviation museum" | navigational | idea | Sage GSC 2026-10-05 | Why: Packet score is low because the SERP is hard, but it is a flagship rainy-day Pensacola indoor stop for winter visitors. Overlap: hard, official-site SERP. Soft overlap with /blog/best-things-to-do-pensacola-beach. No museum URL in the sitemap.
25. (approved by Brooks 2026-11-11, batch 1) St. Andrews State Park Guide | "st andrews state park" | info | idea | Sage GSC 2026-10-05 | Why: 74k volume, the largest unbuilt park term. Hard, but the standalone park-guide pattern is already proven. Overlap: hard SERP. Soft overlap with /blog/best-gulf-coast-state-parks and /blog/best-things-to-do-panama-city-beach. No St. Andrews URL in the sitemap.
26. (approved by Brooks 2026-11-11, batch 1) The Hangout Gulf Shores | "the hangout gulf shores" | navigational | idea | Sage GSC 2026-10-19 | Why: 27k volume. Only strong with a first-hand Brooks angle. Overlap: hard, brand-led SERP. Soft overlap with /blog/best-seafood-gulf-shores and /blog/best-things-to-do-gulf-shores.
27. (approved by Brooks 2026-11-11, batch 1) Bon Secour National Wildlife Refuge Guide | "bon secour national wildlife refuge" | info | idea | Sage GSC 2026-10-05 | Why: Score 24, and a winter birding / snowbird angle the site does not have yet. Overlap: soft overlap with /blog/best-gulf-coast-state-parks (if mentioned). No Bon Secour URL in the sitemap. Unique refuge, not a duplicate park page.
28. (approved by Brooks 2026-11-11, batch 1) Camp Helen State Park Guide | "camp helen state park" | info | idea | Sage GSC 2026-10-05 | Why: Score 24. Another missing park spoke between PCB and 30A. Overlap: soft overlap with /blog/best-gulf-coast-state-parks. No Camp Helen URL in the sitemap.
29. (approved by Brooks 2026-11-11, batch 1) Destin Dolphin Cruise / Gulf Coast Dolphin Tours | "dolphin cruise destin" | commercial | idea | Sage KW 2026-10-19 | Why: Measured commercial/affiliate idea (GetYourGuide / TripShock) with a winnable SD. Skip the Orange Beach version (operators own that SERP). Overlap: soft overlap with /blog/best-things-to-do-destin. No dolphin-cruise URL in the sitemap.
30. (approved by Brooks 2026-11-11, batch 1) Gulfarium Guide | "gulfarium" | navigational | idea | Sage GSC 2026-10-05 | Why: 40k volume and a rainy-day indoor attraction. Hard SERP (SD 60), so treat as a long shot and only if the draft can add practical visitor detail. Overlap: hard, official-site SERP. Soft overlap with /blog/best-things-to-do-destin or /blog/best-things-to-do-fort-walton-beach. No Gulfarium URL in the sitemap.

## In progress
- None. No article pull requests are open (PR #6 is the blog-cover tool; see ROADMAP.md).

## Done

Published count from the repo: **123** = **121** blog posts in `lib/posts.ts` (each has a content file in `app/blog/[slug]/content/`; all 121 are in the live sitemap as of 2026-11-10) + **2** written guide pages outside `/blog`. The old tracking sheet and content plan said **27**, so they were **96** short. Dates are `publishedAt` from `lib/posts.ts` (2026-07-04 batch = 2026-07 dates).

### Guide pages outside /blog (2)
- /stay/best-places-to-stay-gulf-coast | Best Places to Stay on the Gulf Coast: The Complete Guide | not indexed yet (see ROADMAP)
- /activities/best-things-to-do-gulf-shores | Best Things to Do in Gulf Shores, AL | overlaps the blog post of the same name (see ROADMAP)

### Blog posts (121), newest first

- 2026-10-19 Best Restaurants on 30A: A Town-by-Town Guide | /blog/best-restaurants-30a | PR #3
- 2026-10-19 Baytowne Wharf Guide: Where to Eat, Park & Play | /blog/baytowne-wharf-guide | PR #3
- 2026-10-18 South Padre Island Starship Launch Viewing Guide | /blog/watching-starship-launch-south-padre-island | PR #2
- 2026-10-14 Gulf Coast in November 2026: Is It Worth It? | /blog/gulf-coast-in-november | PR #1
- 2026-10-14 Best Orange Beach Restaurants: A Local\'s Guide | /blog/best-restaurants-orange-beach | PR #1
- 2026-09-11 The Wharf Orange Beach: Complete Visitor Guide | /blog/the-wharf-orange-beach-guide
- 2026-09-11 Shell Island, Panama City Beach: Water Taxi and Day Trip Guide | /blog/shell-island-panama-city-beach-guide
- 2026-09-11 Quietest Gulf Coast Beaches, Dauphin Island to Panama City Beach | /blog/quietest-gulf-coast-beaches
- 2026-09-11 Perdido Key Beach Guide: A Day Trip Worth Taking | /blog/perdido-key-guide
- 2026-09-11 Okaloosa Island Guide: Beaches, Boardwalk, and the Pier | /blog/okaloosa-island-guide
- 2026-09-11 Dauphin Island Ferry: Mobile Bay Crossing Times, Fares & Tips | /blog/mobile-bay-ferry-guide
- 2026-09-11 Henderson Beach State Park: Complete Destin Visitor Guide | /blog/henderson-beach-state-park-guide
- 2026-09-11 Gulf State Park Visitor Guide: Beaches, Pier, Trails & Camping | /blog/gulf-state-park-guide
- 2026-09-11 Grayton Beach State Park: Beaches, Dune Lakes, and Cabins | /blog/grayton-beach-state-park-guide
- 2026-09-11 Gulf Islands National Seashore: A Fort Pickens Day Guide | /blog/fort-pickens-day-guide
- 2026-09-11 Fort Morgan, Alabama: Beach, History, and the Ferry | /blog/fort-morgan-alabama-guide
- 2026-09-11 Destin HarborWalk: Parking, Restaurants, and What It Is Really Like | /blog/destin-harborwalk-guide
- 2026-09-11 Destin from Jacksonville: Drive Times, Stops, and Which Beach to Book | /blog/destin-from-jacksonville
- 2026-09-11 Crab Island Destin: How to Do It Right (Rentals, Timing & Rules) | /blog/crab-island-destin-guide
- 2026-09-11 Best Waterfront Restaurants in Fort Walton Beach | /blog/best-waterfront-restaurants-fort-walton-beach
- 2026-09-11 Best Seafood Restaurants in Gulf Shores, AL | /blog/best-seafood-gulf-shores
- 2026-09-11 Best Restaurants on Pensacola Beach (On the Island and Nearby) | /blog/best-restaurants-pensacola-beach
- 2026-09-11 Best Restaurants in Destin, FL: Local Picks by Neighborhood | /blog/best-restaurants-destin
- 2026-09-11 Best Breakfast on the Gulf Coast: Dauphin Island to Panama City Beach | /blog/best-breakfast-gulf-coast
- 2026-09-11 Best 30A Beaches Ranked by Public Access and Parking | /blog/best-30a-beaches-ranked
- 2026-07-30 Where to Stay in Pensacola Beach | /blog/where-to-stay-pensacola-beach
- 2026-07-30 Where to Stay in Panama City Beach | /blog/where-to-stay-panama-city-beach
- 2026-07-30 Where to Stay in Orange Beach, AL | /blog/where-to-stay-orange-beach
- 2026-07-30 Where to Stay in Gulf Shores: Best Areas and Rentals | /blog/where-to-stay-gulf-shores
- 2026-07-30 Where to Stay in Destin: Best Areas, Hotels, and Rentals | /blog/where-to-stay-destin
- 2026-07-30 Where to Stay on 30A: A Town-by-Town Guide | /blog/where-to-stay-30a
- 2026-07-30 Gulf Coast with Kids: Everything Families Need to Know | /blog/gulf-coast-with-kids
- 2026-07-30 Gulf Coast Honeymoon: Most Romantic Beaches and Stays | /blog/gulf-coast-honeymoon
- 2026-07-30 Gulf Coast Beach from Little Rock: Best Route, Stops, and Beaches | /blog/gulf-coast-from-little-rock
- 2026-07-30 Gulf Coast Fishing: Complete Guide for First-Timers | /blog/gulf-coast-fishing-guide
- 2026-07-30 Camping on the Gulf Coast: Best Campgrounds and Parks | /blog/gulf-coast-camping
- 2026-07-30 Best Things to Do in Pensacola Beach | /blog/best-things-to-do-pensacola-beach
- 2026-07-30 Best Things to Do in Panama City Beach | /blog/best-things-to-do-panama-city-beach
- 2026-07-30 Best Things to Do in Orange Beach, AL | /blog/best-things-to-do-orange-beach
- 2026-07-30 Best Things to Do in Navarre Beach | /blog/best-things-to-do-navarre-beach
- 2026-07-30 Best Things to Do in Fort Walton Beach | /blog/best-things-to-do-fort-walton-beach
- 2026-07-30 Best Things to Do in Destin, FL | /blog/best-things-to-do-destin
- 2026-07-30 Best Things to Do on Dauphin Island | /blog/best-things-to-do-dauphin-island
- 2026-07-30 Best Things to Do on 30A | /blog/best-things-to-do-30a
- 2026-07-30 Best Gulf Coast State Parks: From Dauphin Island to PCB | /blog/best-gulf-coast-state-parks
- 2026-07-04 What Is 30A? A Beginner's Guide to Florida's Scenic Highway | /blog/what-is-30a
- 2026-07-04 A Weekend in Gulf Shores: How to Make the Most of 2 Days | /blog/weekend-in-gulf-shores
- 2026-07-04 Pensacola Beach vs. Panama City Beach | /blog/pensacola-beach-vs-panama-city-beach
- 2026-07-04 Orange Beach vs. Pensacola Beach: Which Should You Choose? | /blog/orange-beach-vs-pensacola-beach
- 2026-07-04 Orange Beach, Alabama: The Complete Guide | /blog/orange-beach-guide
- 2026-07-04 One Week on the Gulf Coast: The Perfect 7-Day Itinerary | /blog/one-week-gulf-coast
- 2026-07-04 Navarre Beach vs. Pensacola Beach: The Quiet One vs. The Famous One | /blog/navarre-beach-vs-pensacola-beach
- 2026-07-04 Navarre Beach, FL: What It's Like — and How It Compares to Destin | /blog/navarre-beach-vs-destin
- 2026-07-04 Miramar Beach, FL: What It's Like — and How It Compares to Destin | /blog/miramar-beach-vs-destin
- 2026-07-04 Is Pensacola Beach Worth It? An Honest Take | /blog/is-pensacola-beach-worth-it
- 2026-07-04 How Crowded Is Pensacola Beach? | /blog/is-pensacola-beach-crowded
- 2026-07-04 Is Panama City Beach Worth It? | /blog/is-panama-city-beach-worth-it
- 2026-07-04 Is Navarre Beach Worth It? | /blog/is-navarre-beach-worth-it
- 2026-07-04 Is Gulf Shores Worth It? An Honest Take | /blog/is-gulf-shores-worth-it
- 2026-07-04 How Crowded Is Destin? What to Expect by Season | /blog/is-destin-crowded
- 2026-07-04 Is 30A Worth the Hype? An Honest Take | /blog/is-30a-worth-it
- 2026-07-04 Gulf Shores vs. Panama City Beach | /blog/gulf-shores-vs-panama-city-beach
- 2026-07-04 Gulf Shores vs. Myrtle Beach: Which Is Actually Better? | /blog/gulf-shores-vs-myrtle-beach
- 2026-07-04 Gulf Coast in September: Still Warm, Half the Crowds | /blog/gulf-coast-in-september
- 2026-07-04 Gulf Coast in May: The Sweet Spot Before Summer | /blog/gulf-coast-in-may
- 2026-07-04 Gulf Coast in March: Spring Break Crowds and Weather | /blog/gulf-coast-in-march
- 2026-07-04 Gulf Coast in December: Off-Season Done Right | /blog/gulf-coast-in-december
- 2026-07-04 Gulf Coast Beach from St. Louis | /blog/gulf-coast-from-st-louis
- 2026-07-04 Gulf Coast Beach from Knoxville | /blog/gulf-coast-from-knoxville
- 2026-07-04 Gulf Coast Beach from Jackson, MS: 3 Hours to White Sand | /blog/gulf-coast-from-jackson-ms
- 2026-07-04 Gulf Coast Beach from Houston: Everything You Need to Know | /blog/gulf-coast-from-houston
- 2026-07-04 Gulf Coast Beach from Dallas: Best Route and Beach to Choose | /blog/gulf-coast-from-dallas
- 2026-07-04 Gulf Coast Beach from Chattanooga | /blog/gulf-coast-from-chattanooga
- 2026-07-04 Gulf Coast Beach from Charlotte, NC | /blog/gulf-coast-from-charlotte
- 2026-07-04 Gulf Breeze vs. Pensacola Beach: Which Side of the Bay? | /blog/gulf-breeze-vs-pensacola-beach
- 2026-07-04 Destin vs Clearwater: Which Beach Is Better? | /blog/destin-vs-clearwater
- 2026-07-04 Destin vs. 30A: Which Part of the Florida Panhandle Is Right for You? | /blog/destin-vs-30a
- 2026-07-04 Destin with Kids: The Best 4-Day Family Itinerary | /blog/destin-itinerary-families
- 2026-07-04 A Weekend on Dauphin Island: How to Do It Right | /blog/dauphin-island-weekend
- 2026-07-04 Dauphin Island vs. Gulf Shores: Two Very Different Alabama Beaches | /blog/dauphin-island-vs-gulf-shores
- 2026-07-04 Best Time to Visit Pensacola Beach: Month-by-Month Guide | /blog/best-time-to-visit-pensacola-beach
- 2026-07-04 Best Time to Visit Panama City Beach: Month-by-Month Guide | /blog/best-time-to-visit-panama-city-beach
- 2026-07-04 Best Time to Visit Orange Beach: Month-by-Month Guide | /blog/best-time-to-visit-orange-beach
- 2026-07-04 Best Time to Visit Navarre Beach | /blog/best-time-to-visit-navarre-beach
- 2026-07-04 Best Time to Visit 30A: Month-by-Month Guide | /blog/best-time-to-visit-30a
- 2026-07-04 Best Beaches Near Pensacola: Ranked | /blog/best-beaches-pensacola-area
- 2026-07-04 Best Beaches Near Destin: All Your Options Ranked | /blog/best-beaches-destin-area
- 2026-07-04 30A vs. Panama City Beach: Laid-Back vs. Go-Big | /blog/30a-vs-panama-city-beach
- 2026-07-04 3 Days in Pensacola Beach: A Long Weekend Itinerary That Actually Makes Sense | /blog/3-days-in-pensacola-beach
- 2026-07-04 3 Days in Panama City Beach: The Perfect Long Weekend | /blog/3-days-in-panama-city-beach
- 2026-07-04 3 Days in Orange Beach: The Perfect Long Weekend | /blog/3-days-in-orange-beach
- 2026-07-04 3 Days in Navarre Beach: The Perfect Low-Key Gulf Getaway | /blog/3-days-in-navarre-beach
- 2026-07-04 3 Days in Fort Walton Beach | /blog/3-days-in-fort-walton-beach
- 2026-07-04 3 Days on 30A: The Perfect Long Weekend Itinerary | /blog/3-days-in-30a
- 2025-09-20 The Ultimate Gulf Coast Road Trip: Dauphin Island to Panama City Beach | /blog/gulf-coast-road-trip-itinerary
- 2025-09-10 30A Florida: Complete Guide to the Beach Towns | /blog/30a-florida-guide
- 2025-09-01 Dauphin Island, Alabama: Complete Travel Guide | /blog/dauphin-island-guide
- 2025-08-20 Fort Walton Beach vs. Destin: Which Should You Choose? | /blog/fort-walton-beach-vs-destin
- 2025-08-10 Fort Walton Beach, Florida: The Underrated Alternative to Destin | /blog/fort-walton-beach-guide
- 2025-08-01 Navarre Beach, Florida: Florida's Best Kept Secret | /blog/navarre-beach-guide
- 2025-07-10 Panama City Beach vs. Destin: Which Is Right for You? | /blog/panama-city-beach-vs-destin
- 2025-07-01 3 Days in Destin: The Perfect Long Weekend Itinerary | /blog/3-days-in-destin
- 2025-06-20 Best Time to Visit Destin: A Month-by-Month Guide | /blog/best-time-to-visit-destin
- 2025-06-10 Gulf Coast on a Budget: How to Do It Right for Less | /blog/gulf-coast-on-a-budget
- 2025-06-01 Gulf Coast Beach from Memphis: Everything You Need to Know | /blog/gulf-coast-from-memphis
- 2025-05-20 Is Destin Worth It? An Honest Take | /blog/is-destin-worth-it
- 2025-05-10 3 Days in Gulf Shores: The Perfect Long Weekend Itinerary | /blog/3-days-in-gulf-shores
- 2025-05-01 Gulf Shores vs. Orange Beach: Which Should You Choose? | /blog/gulf-shores-vs-orange-beach
- 2025-04-20 Gulf Coast Beach from Birmingham: Your 3-Hour Escape | /blog/gulf-coast-from-birmingham
- 2025-04-15 Gulf Coast Beach from New Orleans: 2.5 Hours to White Sand | /blog/gulf-coast-from-new-orleans
- 2025-04-01 Gulf Coast Beach from Nashville: A Straight Shot Down I-65 | /blog/gulf-coast-from-nashville
- 2025-03-20 Pet-Friendly Gulf Coast Beaches: Where Dogs Are (and Aren\'t) Allowed | /blog/pet-friendly-gulf-coast-beaches
- 2025-03-10 Best Shelling Beaches on the Gulf Coast (Ranked) | /blog/best-shelling-beaches-gulf-coast
- 2025-03-01 Gulf Coast in October: The Best Month Nobody Talks About | /blog/gulf-coast-in-october
- 2025-02-15 Destin vs. Pensacola Beach: Which Should You Choose? | /blog/destin-vs-pensacola-beach
- 2025-02-01 Best Time to Visit Gulf Shores: A Month-by-Month Guide | /blog/best-time-to-visit-gulf-shores
- 2025-01-20 Best Gulf Coast Beach from Atlanta (and How to Get There) | /blog/gulf-coast-from-atlanta
- 2025-01-10 Gulf Shores vs. Destin: Which Beach Is Right for You? | /blog/gulf-shores-vs-destin
- 2024-12-01 The Ultimate Gulf Coast Beach Packing List | /blog/gulf-coast-beach-packing-list
- 2024-11-15 Best Things to Do in Gulf Shores, AL | /blog/best-things-to-do-gulf-shores
- 2024-11-01 The Best Gulf Coast Beaches for Families | /blog/best-gulf-coast-beaches-for-families

### Refreshes shipped (not counted above)
- 2026-10-19 Fort Pickens guide retargeted at "gulf islands national seashore" + other GUIS areas section | Sage GSC 2026-10-19 refresh C | 1f5cd0b, 1e9c421
- 2026-10-19 Gulf Coast in December: Christmas events section | Sage GSC 2026-10-19 refresh B | 1f5cd0b
- 2026-10-19 Gulf Coast in November: Thanksgiving week section | Sage GSC 2026-10-19 (PR #1 tweak) | 9a305b4
- 2026-10-14 Destin vs Clearwater title + meta rewrite | Sage GSC 2026-09-21 A / 2026-10-05 B | 618fb6c (recheck 11/11)
- 2026-10-14 Wharf guide internal links from 3 Orange Beach posts | Sage GSC 2026-10-05 A | 618fb6c

