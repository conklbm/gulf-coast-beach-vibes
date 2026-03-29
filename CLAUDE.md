# CLAUDE.md — Gulf Coast Beach Vibes

## Project Overview
- **Site name:** Gulf Coast Beach Vibes
- **Domain:** gulfcoastbeachvibes.com
- **Purpose:** Gulf Coast travel guide and affiliate revenue site covering beaches from Dauphin Island, AL to Panama City Beach, FL
- **Owner:** Brooks — lives in Mobile, AL (~45 min from Dauphin Island); 30 years of Gulf Coast experience
- **Deployment:** Vercel (static + edge)
- **Repo:** main branch = production

---

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v3 + `@tailwindcss/typography` (for blog prose)
- **Language:** TypeScript
- **Images:** Next.js `<Image>` — local images in `/public/images/`, Unsplash CDN for others
- **Analytics:** Vercel Analytics (auto-tracks page views including `/go/*` affiliate clicks)
- **Sitemap:** `next-sitemap` (auto-generates on build)

---

## Project Structure

```
app/
  page.tsx                        # Homepage
  blog/
    page.tsx                      # Blog index
    [slug]/
      page.tsx                    # Blog post template (shared for all posts)
      content/
        [slug].tsx                # One content component per post
  destinations/
    page.tsx                      # Destinations index
    [slug]/page.tsx               # Destination page template
  about/page.tsx
  go/[slug]/page.tsx              # Affiliate redirect handler → server redirect
  newsletter/page.tsx
  stay/[slug]/page.tsx            # Stay/rental guide pages

lib/
  posts.ts                        # Blog post metadata (slug, title, heroImage, etc.)
  destinations.ts                 # Destination metadata (11 destinations)
  destinationContent.ts           # Rich content for all 11 destination pages
  affiliateLinks.ts               # ALL affiliate URLs — keyed by slug

components/
  AffiliateLink.tsx               # Renders /go/{slug} links with provider styling
  ContentCard.tsx                 # Blog/content card (h-52 image, title, excerpt)
  TipCallout.tsx                  # Tip/info/warning callout boxes
  DestinationCard.tsx
  HeroSection.tsx
  NewsletterBanner.tsx
  RelatedDestinations.tsx
  Breadcrumb.tsx

public/images/                    # Local images (served as /images/filename)
```

---

## Content Architecture

### Blog Posts
- Metadata lives in `lib/posts.ts`
- Content lives in `app/blog/[slug]/content/[slug].tsx`
- Both must be added AND the content component registered in `CONTENT_MAP` in `app/blog/[slug]/page.tsx`
- Posts without a content component show a "coming soon" stub

**Current posts (all have content):**
1. `gulf-coast-beach-packing-list`
2. `best-things-to-do-gulf-shores`
3. `best-gulf-coast-beaches-for-families`
4. `gulf-shores-vs-destin`
5. `gulf-coast-from-atlanta`
6. `best-time-to-visit-gulf-shores`
7. `destin-vs-pensacola-beach`
8. `gulf-coast-in-october`
9. `best-shelling-beaches-gulf-coast`
10. `pet-friendly-gulf-coast-beaches`
11. `gulf-coast-from-nashville`

### Destination Pages
- All 11 destinations have full content in `lib/destinationContent.ts`
- Template in `app/destinations/[slug]/page.tsx` handles both full and stub rendering
- `hasFullContent: true` on all destinations in `lib/destinations.ts`

**Destinations (west → east):**
Dauphin Island, Gulf Shores, Orange Beach (AL) → Pensacola Beach, Gulf Breeze, Navarre Beach, Fort Walton Beach, Destin, Miramar Beach, Seaside/30A, Panama City Beach (FL)

---

## Affiliate Links — CRITICAL RULES

### ⚠️ Every new page or post MUST include affiliate links

No exceptions. When writing a new blog post or destination page:
- **Accommodations content** → include VRBO and/or Booking.com links
- **Activities content** → include TripShock or FishingBooker links
- **Road trip / travel posts** → include Rentalcars links if fly-in audiences apply
- **Packing/gear content** → include Amazon links

### How Affiliate Links Work
- All affiliate links use the `<AffiliateLink>` component
- Never hardcode URLs — use slug keys that resolve through `lib/affiliateLinks.ts`
- Links redirect via `/go/[slug]` → server-side 307 redirect to partner URL

```tsx
// In a content component:
<AffiliateLink href="vrbo-gulf-shores" label="Browse Gulf Shores Rentals" provider="vrbo" />
<AffiliateLink href="fishingbooker-gulf-coast" label="Book a Fishing Charter" provider="generic" />
<AffiliateLink href="tripshock-gulf-shores-all" label="Book Activities" provider="generic" />
```

### Provider Options for AffiliateLink
- `"vrbo"` — VRBO branding
- `"booking"` — Booking.com branding
- `"generic"` — neutral button (use for TripShock, FishingBooker, Viator, etc.)
- `"getyourguide"` — GetYourGuide branding

### Affiliate Link Registry (`lib/affiliateLinks.ts`)
Key slugs to use in content:

| Slug | Partner | Status |
|------|---------|--------|
| `vrbo-gulf-shores` | VRBO | ✓ tracked |
| `vrbo-destin` | VRBO | ✓ tracked |
| `vrbo-pensacola-beach` | VRBO | ✓ tracked |
| `vrbo-orange-beach` | VRBO | ✓ tracked |
| `vrbo-panama-city-beach` | VRBO | ✓ tracked |
| `vrbo-navarre-beach` | VRBO | ✓ tracked |
| `vrbo-fort-walton-beach` | VRBO | ✓ tracked |
| `vrbo-miramar-beach` | VRBO | ✓ tracked |
| `vrbo-seaside-30a` | VRBO | ✓ tracked |
| `vrbo-dauphin-island` | VRBO | ✓ tracked |
| `booking-gulf-shores` | Booking.com | fallback (needs deep link) |
| `booking-destin` | Booking.com | fallback (needs deep link) |
| `booking-pensacola-beach` | Booking.com | fallback (needs deep link) |
| `booking-orange-beach` | Booking.com | fallback (needs deep link) |
| `booking-panama-city-beach` | Booking.com | fallback (needs deep link) |
| `fishingbooker-gulf-coast` | FishingBooker | ✓ tracked |
| `tripshock-gulf-shores-all` | TripShock | ✓ tracked |
| `tripshock-pensacola-navarre` | TripShock | ✓ tracked |
| `viator-gulf-coast` | Viator | ✓ tracked |
| `rentalcars-pensacola` | Rentalcars | ⚠️ needs tp.st link |
| `rentalcars-destin` | Rentalcars | ⚠️ needs tp.st link |
| `tripadvisor-gulf-coast` | TripAdvisor | ✓ tracked |
| `airbnb-referral` | Airbnb | ✓ tracked |

### Pending Affiliate Setup (owner action needed)
- **Booking.com**: Replace all fallback links with tp.st deep links (TravelPayouts Dashboard → Tools → Links)
- **Rentalcars.com**: Join program in TravelPayouts, generate tp.st links for PNS, VPS, ECP, MOB airports
- **Amazon**: Add Associates tracking tag to all `amazon-*` links
- **GetYourGuide**: Generate tp.st deep links via TravelPayouts for all `gyg-*` entries

---

## Adding a New Blog Post — Checklist

1. Add metadata to `lib/posts.ts` (slug, title, excerpt, category, heroImage, publishedAt, readTime)
2. Create content file at `app/blog/[slug]/content/[slug].tsx`
3. Register component in `CONTENT_MAP` in `app/blog/[slug]/page.tsx`
4. **Include affiliate links** — at minimum: VRBO + Booking.com or TripShock/FishingBooker
5. Use proper heading hierarchy: `<h2>` for main sections, `<h3>` for subsections
6. Add `<TipCallout>` for at least one tip/callout per post
7. Cross-link to relevant destination pages and other blog posts
8. Choose a hero image: local `/images/` file preferred; Unsplash CDN as fallback
   - **Unsplash gotcha:** Short photo IDs (e.g. `Jy0s-88SdmI`) don't work with the CDN pattern. Use `curl` to scrape the `og:image` from the Unsplash photo page to get the real timestamp-based CDN URL.

---

## Adding a New Destination Page — Checklist

1. Add to `lib/destinations.ts` with `hasFullContent: true`
2. Add full content object to `lib/destinationContent.ts`
3. **Every `whereToStay` entry** must have a valid `affiliateUrl` from `lib/affiliateLinks.ts`
4. **Every `activities` entry** should include an `affiliateUrl` where bookable
5. Cross-link to related blog posts in `gettingThere` or `localTip` fields

---

## Styling Conventions

- **Colors:** `ocean` (teal), `navy` (dark blue), `coral` (orange-red), `sand` (warm beige), `cream` (off-white bg)
- **Fonts:** `font-display` = Playfair Display (headings), `font-sans` = DM Sans (body)
- **Blog prose:** Wrapped in `prose prose-lg` — typography plugin handles spacing
- **Cards:** Use `.card` class (bg-white, rounded-2xl, shadow-md, hover lift)
- **Buttons:** `.btn-primary` (coral) or `.btn-secondary` (ocean outline)
- **Section container:** `.section-container` = `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

---

## Image Conventions

- Local images: `/public/images/[name].jpg` → used as `/images/[name].jpg`
- Blog hero: `h-[50vh] min-h-[400px]`, `object-cover object-center`
- Card images: `h-52 overflow-hidden`, `object-cover object-center`
- Landscape images are strongly preferred — vertical images get center-cropped
- Use `object-top` or `object-bottom` on the Image component to adjust crop for vertical shots

---

## Deployment

- Push to `main` → Vercel auto-deploys
- Always run `npm run build` locally before pushing — build must pass 100%
- 46 static pages generated on build (as of current content count)
