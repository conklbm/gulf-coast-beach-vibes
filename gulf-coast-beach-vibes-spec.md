# Gulf Coast Beach Vibes — Claude Code Build Spec

## Project Overview

Build a content-rich travel website for **Gulf Coast Beach Vibes** (gulfcoastbeachvibes.com) covering the stretch of Gulf Coast beaches from **Dauphin Island, AL to Panama City Beach, FL**. The site should feel like it was made by a local who actually knows these beaches — not a generic travel site.

**Goals:**
- Drive affiliate revenue (VRBO, Booking.com, GetYourGuide, Amazon beach gear)
- Grow an email list (newsletter signup throughout)
- Cross-promote the Gulf Coast Beach Vibes Facebook page
- Rank in Google for Gulf Coast beach-related searches

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Content**: MDX files (no CMS needed to start)
- **Hosting**: Vercel (free tier)
- **Email**: ConvertKit embed (free tier)
- **Analytics**: Vercel Analytics or Plausible

---

## Design Direction

**Vibe**: Warm, coastal, inviting. Not corporate. Feels like a local's guide.

**Color Palette:**
- Primary: Teal/ocean blue (`#0EA5BE`)
- Secondary: Sandy beige (`#F5E6C8`)
- Accent: Coral/sunset (`#FF6B4A`)
- Dark text: Deep navy (`#1A2E44`)
- Background: Soft white (`#FAFAF8`)

**Typography:**
- Display/Headlines: A characterful serif or coastal-feeling font (e.g., Playfair Display or Lora)
- Body: Clean, readable sans-serif (e.g., DM Sans or Plus Jakarta Sans)
- Load via Google Fonts

**Design Elements:**
- Large hero images on every page
- Card-based layouts with rounded corners and subtle shadows
- Wave or organic divider shapes between sections
- Mobile-first — most visitors will be on phones
- Big, tappable buttons
- Image tiles for homepage navigation

---

## URL Structure (Lock This In Now)

```
/                                    → Homepage
/destinations                        → All destinations overview
/destinations/[beach-slug]           → Individual beach guide
/activities                          → Activities overview
/activities/[activity-slug]          → Individual activity page
/stay                                → Places to stay overview
/stay/[slug]                         → Individual stay roundup/listing
/eat                                 → Restaurants overview
/eat/[slug]                          → Individual restaurant roundup
/blog                                → Blog index
/blog/[post-slug]                    → Individual blog post
/newsletter                          → Newsletter signup page
```

---

## Homepage Layout

1. **Hero Section** — Full-width image of Gulf Coast beach. Headline: *"Your Guide to the Gulf Coast's Most Beautiful Beaches"*. Subheadline: *"From Dauphin Island to Panama City Beach — discover where to stay, eat, and play."* CTA button: "Explore Destinations"

2. **Destination Strip** — Horizontal scrollable row of destination cards (beach photo + name). One card per destination, West → East.

3. **Category Tiles** — Large image tiles in a 2x2 or 3x2 grid:
   - 🏖️ Beach Guides
   - 🏨 Places to Stay
   - 🍽️ Restaurants & Food
   - 🏄 Activities
   - 📅 Events (can be empty/coming soon initially)
   - ✉️ Newsletter

4. **Featured Content** — 3 recent blog posts or destination highlights

5. **Newsletter Signup Banner** — "Get weekly Gulf Coast tips in your inbox" + ConvertKit embed

6. **Footer** — Links to all sections, Facebook page link, copyright

---

## Destinations to Create Pages For

Build a template-driven destination page. Each uses the same layout, populated with MDX content.

| Slug | Name | State |
|---|---|---|
| `dauphin-island` | Dauphin Island | AL |
| `gulf-shores` | Gulf Shores | AL |
| `orange-beach` | Orange Beach | AL |
| `pensacola-beach` | Pensacola Beach | FL |
| `gulf-breeze` | Gulf Breeze | FL |
| `navarre-beach` | Navarre Beach | FL |
| `fort-walton-beach` | Fort Walton Beach | FL |
| `destin` | Destin | FL |
| `miramar-beach` | Miramar Beach | FL |
| `seaside` | Seaside / 30A | FL |
| `panama-city-beach` | Panama City Beach | FL |

### Destination Page Template Layout:
1. Hero image + beach name + tagline
2. Overview paragraph (2–3 sentences)
3. **Best Beaches** section
4. **Where to Stay** section (with affiliate links to Booking.com/VRBO)
5. **Where to Eat** section
6. **Activities** section
7. **Getting There** section
8. **Tips from a Local** callout box
9. Related destinations sidebar/row

---

## SEO Requirements (Critical)

Every page must have:

```jsx
// In layout or page metadata:
export const metadata = {
  title: 'Things to Do in Destin FL | Gulf Coast Beach Vibes',
  description: 'Discover the best activities, restaurants, and places to stay in Destin, FL...',
  openGraph: {
    title: '...',
    description: '...',
    image: '/og-images/destin.jpg',
  }
}
```

- Use Next.js `generateMetadata()` for dynamic pages
- Add JSON-LD schema markup on destination pages (TouristDestination schema)
- Sitemap via `next-sitemap` package
- `robots.txt` configured to allow all
- Image alt tags on every image
- Semantic HTML throughout (h1, h2, h3 hierarchy)
- Internal linking — every destination page links to relevant activities/stay/eat pages

**Target keyword patterns:**
- "things to do in [beach name]"
- "best hotels in [beach name]"
- "restaurants in [beach name]"
- "[beach name] travel guide"
- "gulf coast beach guide"

---

## Affiliate Integration

Add affiliate links naturally within content. Use a simple wrapper component:

```jsx
<AffiliateLink href="https://booking.com/..." label="Check Availability" />
```

Providers to integrate:
- **Booking.com** — hotels/stays
- **VRBO** — vacation rentals
- **GetYourGuide** — activities/tours
- **Amazon** — beach gear roundups (link to lists)

Add a sitewide affiliate disclosure in the footer and at the top of any post with affiliate links.

---

## Components to Build

| Component | Description |
|---|---|
| `<HeroSection>` | Full-width image, headline, CTA |
| `<DestinationCard>` | Beach photo, name, short desc, link |
| `<CategoryTile>` | Large image tile with icon + label |
| `<ContentCard>` | For blog posts, activities, stay listings |
| `<NewsletterBanner>` | ConvertKit embed, styled |
| `<AffiliateLink>` | Styled CTA button with disclosure |
| `<TipCallout>` | "Local tip" highlighted box |
| `<RelatedDestinations>` | Row of 3 other destination cards |
| `<Breadcrumb>` | SEO-friendly breadcrumb nav |

---

## Content to Stub Out on Launch

### Pages to have real content day one:
1. Homepage (fully built)
2. `/destinations/gulf-shores` — full page
3. `/destinations/destin` — full page
4. `/destinations/pensacola-beach` — full page
5. `/stay/best-places-to-stay-gulf-coast` — affiliate roundup
6. `/activities/best-things-to-do-gulf-shores` — affiliate roundup
7. `/blog/gulf-coast-beach-packing-list` — blog post

### Remaining destinations: stub pages with "Coming Soon" or brief content to establish URLs

---

## File Structure

```
/app
  /page.tsx                  → Homepage
  /destinations
    /page.tsx                → All destinations
    /[slug]
      /page.tsx              → Dynamic destination page
  /activities
    /page.tsx
    /[slug]/page.tsx
  /stay
    /page.tsx
    /[slug]/page.tsx
  /eat
    /page.tsx
    /[slug]/page.tsx
  /blog
    /page.tsx
    /[slug]/page.tsx
  /newsletter/page.tsx
/components
  /HeroSection.tsx
  /DestinationCard.tsx
  /CategoryTile.tsx
  /ContentCard.tsx
  /NewsletterBanner.tsx
  /AffiliateLink.tsx
  /TipCallout.tsx
  /RelatedDestinations.tsx
  /Breadcrumb.tsx
  /Header.tsx
  /Footer.tsx
/content
  /destinations/gulf-shores.mdx
  /destinations/destin.mdx
  /destinations/pensacola-beach.mdx
  ... (one .mdx per destination)
  /blog/gulf-coast-beach-packing-list.mdx
  /stay/best-places-to-stay-gulf-coast.mdx
/public
  /images/destinations/
  /images/hero/
  /og-images/
```

---

## Phase 1 Build Order (Give Claude Code This Priority)

1. Set up Next.js 14 project with Tailwind, MDX support, `next-sitemap`
2. Build global Header + Footer components
3. Build Homepage (all sections)
4. Build Destination page template + 3 destination MDX files (Gulf Shores, Destin, Pensacola Beach)
5. Build stub pages for all other destinations
6. Build `/stay` roundup page with affiliate links
7. Build `/activities` roundup page
8. Add newsletter banner sitewide (ConvertKit embed placeholder)
9. SEO: metadata, sitemap, robots.txt, JSON-LD schema
10. Deploy to Vercel

---

## Notes for Claude Code

- Use `next/image` for all images (automatic optimization)
- Use `next/link` for all internal navigation
- Tailwind only — no external UI libraries needed
- Keep components simple and reusable
- MDX content files should have frontmatter: `title`, `description`, `heroImage`, `state`, `slug`
- Placeholder images can use `unsplash.com` beach photos initially
- Add a `TODO:` comment anywhere affiliate links need to be swapped with real tracked URLs
