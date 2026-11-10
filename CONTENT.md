# Content: Gulf Coast Beach Vibes

Article queue for gulfcoastbeachvibes.com. Features and tech work live in [ROADMAP.md](ROADMAP.md).
Claude Code: read this file and ROADMAP.md before any build.
Last reviewed: 2026-11-10

## Rules
- Sage's monthly/biweekly Search Console + GA packets feed **Ideas** (by pull request, with a brief in `content/OUTLINES/`).
- Only **Brooks** moves an item into **Next up**. Tish signs off on items in her lane (designs, Etsy, promotion, ebooks, newsletter).
- The pull request that ships a post moves its item to **Done** in the same PR, with the date and live URL.
- This repo is the source of truth for published counts (`lib/posts.ts` + `app/blog/[slug]/content/`), not the old sheet.
- Every item: title | keyword (vol / SD) | intent | status | source | brief, PR or URL.
- Status: idea > brief ready > drafting > in review > live > refresh due
- Long research (packets, keyword exports) stays outside the file; briefs live in `content/OUTLINES/`.

**Source tags:** `Sage GSC <date>` = biweekly GSC + keyword review packet (rank and D×W×F score from that packet) · `Sage KW <date>` = `content/KEYWORD-RESEARCH.md` cluster (Ubersuggest US) · `Notion KW` = SEO Keywords database row (Brand = GCBV) · `Old plan 2026-03` = `docs/archive/content-plan.md` · `Old sheet #` = `docs/archive/content-pipeline.csv` · `Repo stub` = noindex "Coming soon" page already linked on the site. "unmeasured" = no Ubersuggest metric yet.

**Pilot note (2026-11-10):** this file replaces `content/BACKLOG-1-20.md`, `content-plan.md` and `content-pipeline.csv` (moved to `docs/archive/` with pointers). All 20 BACKLOG-1-20 items are live (see Done). The old sheet and content plan said 27 published; the repo has 121 blog posts plus 2 guide pages.

## Ideas

### New posts scored by Sage (latest packet first, then score)

- Gulf State Park Campground Guide | "gulf state park camping" (12,100 / SD 12) | info | brief ready | Sage GSC 2026-11-02 #1 (score 100); Sage KW 2026-09-10 Cluster I; Notion KW | brief: content/OUTLINES/31-gulf-state-park-campground.md · path /blog/gulf-state-park-campground-guide · SERP noData, re-check before drafting
- Best Restaurants in Miramar Beach | "miramar beach restaurants" (9,900 / SD 21) | local | brief ready | Sage GSC 2026-11-02 #2 (score 80); Sage KW 2026-11-02 Cluster M | brief: content/OUTLINES/32-best-restaurants-miramar-beach.md · WEAK SERP: royalpalmgrille.com DA 20, bosforomiramarbeach.com DA 8, Reddit, TripAdvisor
- Best Restaurants in Perdido Key | "perdido key fl restaurants" (6,600 / SD 20) | local | brief ready | Sage GSC 2026-11-02 #3 (score 80); Sage KW 2026-09 bank; Notion KW | brief: content/OUTLINES/33-best-restaurants-perdido-key.md · moderate SERP: perdidochamber.com DA 37, crabtrapflorida.com DA 40
- LuLu's Gulf Shores: What to Know Before You Go | "lulu's gulf shores" (27,100 / SD 23) | navigational | idea | Sage GSC 2026-11-02 #4 (score 60); Sage KW 2026-11-02 Cluster M | brand-led SERP; publish by March (July peak 49.5k); trim LuLu's H2 in best-seafood-gulf-shores to a link
- Best Restaurants in Gulf Breeze | "gulf breeze restaurants" (4,400 / SD 23) | local | idea | Sage GSC 2026-11-02 #5 (score 60); Sage KW 2026-11-02 Cluster M | spoke off the Gulf Breeze hub; SERP noData, re-check first
- Alys Beach Visitor Guide | "alys beach" (110,000 / SD 26) | navigational | idea | Sage GSC 2026-11-02 #6 (score 50); Sage KW 2026-11-02 Cluster M | alysbeach.com owns nav intent; parking, access, Fonville Press, events
- Things to Do in Rosemary Beach | "things to do in rosemary beach" (5,400 / SD 29); + rosemary beach fl (33,100 / SD 49), rosemary beach restaurants (18,100 / SD 32) | info | idea | Sage GSC 2026-11-02 #7 (score 45); Sage KW 2026-11-02 Cluster M; Notion KW | weak site newwavepropertymgmt.com DA 9 at #13; 30A restaurants already has a Rosemary H2
- Big Kahuna's Destin: Tips + Is It Worth It? | "big kahuna's destin" (27,100 / SD 29) | navigational | idea | Sage GSC 2026-11-02 #8 (score 40); Sage KW 2026-11-02 Cluster M | brand-dominated SERP; only if published by March (July 74k)
- Gulf Coast in April (+ spring break) | "destin in april" (260 / SD 15); spring break destin (390 / SD 18), gulf shores spring break (480 / SD 25) | info | idea | Sage GSC 2026-11-02 #9 (score 30); Sage KW 2026-11-02 Cluster M; Old plan 2026-03 (gulf-coast-spring-break) | month-series gap; publish by early January
- Best Restaurants in Navarre Beach | "restaurants navarre beach" (8,100 / SD 21) | local | brief ready | Sage GSC 2026-09-21 (honorable mention); Sage GSC 2026-10-05 #4 (60); Sage GSC 2026-10-19 #3 (60); Sage GSC 2026-11-02 carry; Sage KW 2026-10-05 Cluster K; Notion KW | brief: content/OUTLINES/25-best-restaurants-navarre-beach.md · Navarre cluster 849 impr in GSC
- Closest Gulf Coast Beaches to Atlanta (ranked by drive time) | "beaches closest to atlanta" (4,400 / SD 8) | info | brief ready | Sage GSC 2026-10-05 #5 (60); Sage GSC 2026-10-19 #3 (60); Sage GSC 2026-11-02 carry (strongest); Sage KW 2026-10-05 Cluster K; Notion KW | brief: content/OUTLINES/26-closest-beaches-to-atlanta.md · soft overlap with /blog/gulf-coast-from-atlanta (296 distance impr at pos 18.6); replaces the 10/05 'closest beaches section' refresh G
- Gulf Coast in January (weather, snowbirds) | "destin in january" (210 / SD 13; Dec peak 590) | info | brief ready | Sage GSC 2026-10-19 #10 (30); Sage KW 2026-10-19 Cluster L; Old plan 2026-03 (gulf-coast-winter-getaway) | brief: content/OUTLINES/29-gulf-coast-in-january.md · TIME-SENSITIVE: draft by early December
- Gulf Coast in February (Mardi Gras, snowbirds) | "destin in february" (260 / SD 13; Jan peak 880) | info | brief ready | Sage GSC 2026-10-19 #10 (30); Sage KW 2026-10-19 Cluster L | brief: content/OUTLINES/30-gulf-coast-in-february.md · TIME-SENSITIVE: draft by mid-December; Mardi Gras OB/Pensacola seeds still unmeasured
- Topsail Hill Preserve State Park Guide | "topsail hill preserve state park" (22,200 / SD 32) | info | idea | Sage GSC 2026-09-21 #7; Sage GSC 2026-10-05 #6 (48); Sage GSC 2026-10-19 #5 (48); Sage KW 2026-10-05 Cluster J; Notion KW
- Big Lagoon State Park Guide | "big lagoon state park" (12,100 / SD 31) | info | idea | Sage GSC 2026-10-05 #7 (48); Sage GSC 2026-10-19 #5 (48); Sage KW 2026-10-05 Cluster K; Notion KW | sibling to Perdido Key + Fort Pickens guides
- Best Restaurants on Dauphin Island | "dauphin island restaurants" (9,900 / SD 30) | local | idea | Sage GSC 2026-10-05 #8 (45); Sage GSC 2026-10-19 #7 (45); Sage KW 2026-10-05 Cluster K; Notion KW
- OWA Parks & Resort (Foley) Guide | "owa foley" (12,100 / SD 38) | info | brief ready | Sage GSC 2026-10-19 #8 (40); Sage KW 2026-10-19 Cluster L; Notion KW | brief: content/OUTLINES/28-owa-foley-guide.md · rainy-day family angle
- Alabama Gulf Coast Zoo Guide | "alabama gulf coast zoo" (18,100 / SD 43) | navigational | idea | Sage GSC 2026-10-05 #10 (32); Sage GSC 2026-10-19 #9 (32); Sage KW 2026-10-05 Cluster K; Notion KW | pairs with OWA
- Fort Gaines Guide (Dauphin Island) | "fort gaines" (8,100 / SD 42) | info | idea | Sage GSC 2026-10-19 #12 (30); Sage KW 2026-10-19 Cluster L | or fold into the DI guide refresh (see Refreshes)
- Pensacola Beach Pier Guide | "pensacola beach pier" (4,400 / SD 40) | info | idea | Sage GSC 2026-10-19 #12 (30); Sage KW 2026-10-19 Cluster L | fishing + sunset angle
- Pier Park Panama City Beach Guide | "pier park panama city beach" (90,500 / SD 42) | navigational | idea | Sage GSC 2026-10-05 #12 (30); Sage GSC 2026-10-19 #12 (30); Sage KW 2026-10-05 Cluster K; Notion KW | mostly shopping intent
- Destin Dolphin Cruise / Gulf Coast Dolphin Tours | "dolphin cruise destin" (1,600 / SD 33) | commercial | idea | Sage KW 2026-10-19 Cluster L (later, 24); Old sheet #98 (gulf-coast-dolphin-tours); Old plan 2026-03 (dolphin-tours-gulf-coast) | affiliate (GetYourGuide/TripShock); skip 'dolphin cruise orange beach' (8,100 / SD 53, operators own it)
- Gulf Coast in June / July / August (month-series gaps) | "destin in june" (170 / SD 21); July/Aug seeds unmeasured | info | idea | Sage GSC 2026-11-02 (month gaps; June 'later, by March'); Sage KW 2026-11-02 Cluster M | pull July/Aug metrics next cycle

### Hard / long-shot bank (scored low; kept for later)

- The Hangout Gulf Shores | "the hangout gulf shores" (27,100 / SD 49) | navigational | idea | Sage GSC 2026-10-19 hard bank (20); Sage KW 2026-10-19 Cluster L; Notion KW | hard SERP; strong only with Brooks's first-hand angle
- Flora-Bama Visitor Guide | "flora-bama" (60,500 / SD 50) | navigational | idea | Sage GSC 2026-09-21 #10; Sage GSC 2026-10-05 bank (25); Sage KW 2026-10-05 Cluster J; Notion KW | hard
- St. Andrews State Park Guide | "st andrews state park" (74,000 / SD 46) | info | idea | Sage GSC 2026-09-21 #4; Sage GSC 2026-10-05 bank (20); Sage KW 2026-10-05 Cluster J; Notion KW | hard
- Eden Gardens State Park Guide | "eden gardens state park" (9,900 / SD 36) | info | idea | Sage GSC 2026-09-21 #5; Sage GSC 2026-10-05 bank (24); Sage KW 2026-10-05 Cluster J; Notion KW
- National Naval Aviation Museum Guide | "national naval aviation museum" (49,500 / SD 52) | navigational | idea | Sage GSC 2026-09-21 #9; Sage GSC 2026-10-05 bank (15); Sage KW 2026-10-05 Cluster J; Notion KW | hard; rainy-day Pensacola
- Gulfarium Guide | "gulfarium" (40,500 / SD 60) | navigational | idea | Sage GSC 2026-10-05 bank (20); Sage KW 2026-10-05 Cluster K; Notion KW | hard
- Best Restaurants in Panama City Beach | "best restaurants panama city beach" (12,100 / SD 61) | local | idea | Sage GSC 2026-10-05 bank (20); Sage KW 2026-10-05 Cluster K; Notion KW | hard
- Camp Helen State Park Guide | "camp helen state park" (6,600 / SD 45) | info | idea | Sage GSC 2026-10-05 bank (24); Sage KW 2026-10-05 Cluster K
- Bon Secour National Wildlife Refuge Guide | "bon secour national wildlife refuge" (5,400 / SD 44) | info | idea | Sage GSC 2026-10-05 bank (24); Sage KW 2026-10-05 Cluster K
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
Ranked, 3 to 5 items. **Proposed by Sage, not approved.** Only Brooks moves items here (Tish for her lane).

1. (proposed — Brooks to approve) Gulf State Park Campground Guide | "gulf state park camping" | info | brief ready | Sage GSC 2026-11-02 | Why: Score 100, softest 10k+ term in the bank (SD 12); spoke off the live GSP guide
2. (proposed — Brooks to approve) Best Restaurants in Miramar Beach | "miramar beach restaurants" | local | brief ready | Sage GSC 2026-11-02 | Why: Score 80 and the weakest SERP measured (DA 20 and DA 8 sites, Reddit, TripAdvisor in the top 10)
3. (proposed — Brooks to approve) Best Restaurants in Perdido Key | "perdido key fl restaurants" | local | brief ready | Sage GSC 2026-11-02 | Why: Score 80; Perdido guide has 156 impr and no food section
4. (proposed — Brooks to approve) Closest Gulf Coast Beaches to Atlanta | "beaches closest to atlanta" | info | brief ready | Sage GSC 2026-10-05/10-19/11-02 | Why: Score 60, SD 8 (softest term measured); Google already tests the Atlanta page for it (296 impr)
5. (proposed — Brooks to approve) Best Restaurants in Navarre Beach | "restaurants navarre beach" | local | brief ready | Sage GSC 2026-10-05/10-19/11-02 | Why: Score 60; Navarre is the site's #2 query cluster (849 impr) with no food page

Time-sensitive, outside the top 5: **Gulf Coast in January** (draft by early December) and **February** (by mid-December). Both are briefed, and the 11/02 packet suggested building them alongside the top 3.

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

