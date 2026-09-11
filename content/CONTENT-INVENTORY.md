# Content Inventory — gulfcoastbeachvibes.com

**Sources:** live sitemap snapshot (115 URLs, 2026-09-10/11), homepage/blog/destinations/eat hubs, GSC Aug window.  
**Note:** Early research saw `sitemap.xml` 500 via some fetch tools; curl succeeded — inventory below uses the saved 115-URL list.

## Site architecture

| Section | Role | Notes |
|---------|------|-------|
| `/` | Homepage | Destination grid DI→PCB; packing/seasonal/comp teasers |
| `/destinations` | Hub | 11 beaches: DI, GS, OB, Pensacola Beach, Gulf Breeze, Navarre, FWB, Destin, Miramar, Seaside/30A, PCB |
| `/destinations/{slug}` | Destination pages | One per beach above |
| `/blog` | Editorial | Bulk of organic; comps, drives, seasonal, itineraries, stay |
| `/eat` | Food hub | Lists Destin restaurants, GS seafood, breakfast — **content backlog fills these** |
| `/stay` | Stay hub | Includes `/stay/best-places-to-stay-gulf-coast` |
| `/activities` | Activities hub | e.g. best-things-to-do-gulf-shores |
| `/newsletter` | Lead capture | |

## Theme clusters (existing)

### Beach comparisons (heavy — GSC winners)
- Destin vs Pensacola, Destin vs Clearwater, Destin vs 30A, Miramar vs Destin, FWB vs Destin
- Gulf Shores vs Destin, GS vs Myrtle, GS vs PCB, GS vs Orange Beach, DI vs GS
- Pensacola vs PCB, Navarre vs Destin, Navarre vs Pensacola, Orange Beach vs Pensacola
- 30A vs PCB, Gulf Breeze vs Pensacola Beach

### Drive / origin guides
- From: Atlanta, Nashville, New Orleans, Dallas, Houston, Memphis, Birmingham, Charlotte, Chattanooga, Knoxville, Little Rock, Jackson MS, St. Louis

### Seasonal / best time
- Best time: Gulf Shores, Destin, Pensacola Beach, Navarre, Orange Beach, PCB, 30A
- Months: Gulf Coast in March / May / September / October / December

### Where to stay (existing URLs — do not duplicate)
- `/blog/where-to-stay-destin`
- `/blog/where-to-stay-gulf-shores`
- `/blog/where-to-stay-orange-beach` ← refresh brief in `OUTLINES/refresh/` (was backlog #18)
- `/blog/where-to-stay-pensacola-beach` ← refresh brief in `OUTLINES/refresh/` (was backlog #17)
- `/blog/where-to-stay-panama-city-beach`
- `/blog/where-to-stay-30a`
- `/stay/best-places-to-stay-gulf-coast`

### Budget / value
- `/blog/gulf-coast-on-a-budget` ← refresh brief in `OUTLINES/refresh/` (was backlog #8)
- Worth-it / crowded posts (Destin, Pensacola, GS, 30A, Navarre, PCB)

### Parks / beaches listicles (siblings for new park posts)
- `/blog/best-gulf-coast-state-parks` ← parent for Henderson / Grayton / Fort Pickens
- `/blog/best-beaches-destin-area`, `/blog/best-beaches-pensacola-area`
- `/blog/best-gulf-coast-beaches-for-families`, `/blog/best-shelling-beaches-gulf-coast`
- `/blog/pet-friendly-gulf-coast-beaches`

### 30A
- `/blog/30a-florida-guide`, `/blog/what-is-30a`, `/blog/is-30a-worth-it`, `/blog/best-things-to-do-30a`, `/blog/3-days-in-30a`, `/blog/best-time-to-visit-30a`

### Destination guides & itineraries
- Guides: DI, Orange Beach, Navarre, FWB, 30A Florida
- 3-days: Destin, FWB, GS, Navarre, OB, PCB, Pensacola, 30A
- Other: packing list, camping, fishing, honeymoon, with kids, one-week, road trip, weekend GS, Destin family itinerary, DI weekend

### Food gap (hub promises; thin/missing articles historically)
- Best restaurants Destin (backlog #1)
- Best restaurants Pensacola Beach (#3)
- Best seafood Gulf Shores (#6)
- Best breakfast DI→PCB (#13)
- Waterfront FWB (#19)
- `/eat` exists as hub only in sitemap (no child food URLs yet)

### Named attractions NOT yet covered as dedicated posts (net-new opportunity)
- Henderson Beach State Park, Grayton Beach State Park, Fort Pickens / GUIS
- Crab Island Destin, Shell Island PCB, Mobile Bay Ferry
- **Added 2026-09-10 backlog:** Gulf State Park, Destin HarborWalk, The Wharf Orange Beach, Okaloosa Island, Fort Morgan AL, Perdido Key / Johnson Beach

## GSC snapshot (2026-08-08 → 2026-09-04)
- ~191 clicks / ~28k impressions / avg pos ~12.9
- Top pages: best-time Gulf Shores, Gulf Coast in October, Orange Beach vs Pensacola, GS vs Myrtle, Pensacola vs PCB, Nashville drive, pet-friendly, GS vs PCB, Navarre vs Destin

## Cannibalization map (backlog vs sitemap)

**Active 1–20 (after 2026-09-10):** no hard conflicts. Soft-overlap only:

| # | Title theme | Status | Existing URL / note |
|---|-------------|--------|---------------------|
| 2,4,5,8 | Park guides (Henderson, Grayton, Pickens, **Gulf State Park**) | NEW (soft) | Sibling of `/blog/best-gulf-coast-state-parks` |
| 11 | 30A beaches ranked | NEW (soft) | Sibling of `/blog/30a-florida-guide` |
| 20 | Quietest beaches | NEW (soft) | Differentiate from families / Navarre / best-beaches posts |
| 10,14,15,17,18 | HarborWalk, Wharf, Okaloosa, Fort Morgan, Perdido | NEW | Cleared vs sitemap — no matching URLs |

**Legacy REFRESH (not in active 1–20)** — briefs in `OUTLINES/refresh/`:

| Old # | Title theme | Existing URL |
|-------|-------------|--------------|
| 8 | Budget vacation | `/blog/gulf-coast-on-a-budget` |
| 10 | Memphis Destin vs GS | `/blog/gulf-coast-from-memphis` |
| 14 | Best time PCB | `/blog/best-time-to-visit-panama-city-beach` |
| 15 | Best time Orange Beach | `/blog/best-time-to-visit-orange-beach` |
| 17 | Stay Pensacola Beach | `/blog/where-to-stay-pensacola-beach` |
| 18 | Stay Orange Beach | `/blog/where-to-stay-orange-beach` |
