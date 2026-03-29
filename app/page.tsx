import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import DestinationCard from '@/components/DestinationCard'
import CategoryTile from '@/components/CategoryTile'
import ContentCard from '@/components/ContentCard'
import NewsletterBanner from '@/components/NewsletterBanner'
import { destinations } from '@/lib/destinations'
import { posts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Gulf Coast Beach Vibes — Your Guide to Gulf Coast Beaches',
  description:
    'Your local guide to Gulf Coast beaches from Dauphin Island, AL to Panama City Beach, FL. Find where to stay, eat, and play on the Gulf.',
  openGraph: {
    title: 'Gulf Coast Beach Vibes — Your Guide to Gulf Coast Beaches',
    description:
      'Discover the best beaches, restaurants, hotels, and activities on the Gulf Coast.',
    url: 'https://gulfcoastbeachvibes.com',
  },
}

const categories = [
  {
    href:        '/destinations',
    label:       'Beach Guides',
    icon:        '🏖️',
    imageSrc:    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    imageAlt:    'White sand Gulf Coast beach',
    description: '11 destinations covered',
  },
  {
    href:        '/stay',
    label:       'Places to Stay',
    icon:        '🏨',
    imageSrc:    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    imageAlt:    'Beachfront vacation rental',
    description: 'Hotels, rentals & more',
  },
  {
    href:        '/eat',
    label:       'Restaurants & Food',
    icon:        '🍽️',
    imageSrc:    '/images/restaurants.jpg',
    imageAlt:    'Fresh Gulf seafood',
    description: 'Best eats on the coast',
  },
  {
    href:        '/activities',
    label:       'Activities',
    icon:        '🏄',
    imageSrc:    '/images/parasailing-beach-activities.jpg',
    imageAlt:    'Water sports on the Gulf Coast',
    description: 'Things to do & see',
  },
  {
    href:        '/blog',
    label:       'Travel Tips',
    icon:        '📋',
    imageSrc:    '/images/travel-tips-beach-luggage.jpg',
    imageAlt:    'Beach travel planning',
    description: 'Guides, packing lists & more',
  },
  {
    href:        '/newsletter',
    label:       'Newsletter',
    icon:        '✉️',
    imageSrc:    'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
    imageAlt:    'Gulf Coast beach at golden hour',
    description: 'Weekly Gulf Coast tips',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <HeroSection
        imageSrc="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Pristine white sand beach on the Gulf Coast with emerald green water"
        eyebrow="Gulf Coast Beach Vibes"
        headline="Your Guide to the Gulf Coast's Most Beautiful Beaches"
        subheadline="From Dauphin Island to Panama City Beach — discover where to stay, eat, and play."
        ctaLabel="Explore Destinations"
        ctaHref="/destinations"
        ctaSecondaryLabel="Read the Blog"
        ctaSecondaryHref="/blog"
        overlay="medium"
        height="full"
      />

      {/* ── 2. DESTINATION STRIP ────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-cream" aria-label="Destinations">
        <div className="section-container">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-ocean text-sm font-semibold tracking-widest uppercase mb-2">
                West to East
              </p>
              <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl">
                Explore the Gulf Coast
              </h2>
            </div>
            <Link
              href="/destinations"
              className="hidden sm:flex items-center gap-1 text-ocean font-semibold text-sm
                         hover:gap-2 transition-all duration-200 flex-shrink-0 ml-4"
            >
              All destinations
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Horizontal scroll strip — scrolls on mobile, wraps on desktop */}
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.slug}
                destination={destination}
                size="md"
              />
            ))}
          </div>

          <div className="mt-6 sm:hidden text-center">
            <Link href="/destinations" className="btn-secondary text-sm">
              View all 11 destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="bg-cream overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="none" className="w-full h-12 md:h-16 block" style={{ fill: '#F5E6C8' }}>
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* ── 3. CATEGORY TILES ───────────────────────────────────── */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#F5E6C8' }} aria-label="Browse by category">
        <div className="section-container">
          <div className="text-center mb-10">
            <p className="text-ocean text-sm font-semibold tracking-widest uppercase mb-2">
              Everything You Need
            </p>
            <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl">
              Plan Your Gulf Coast Trip
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((cat) => (
              <CategoryTile key={cat.href} {...cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="overflow-hidden leading-none" style={{ backgroundColor: '#F5E6C8' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="none" className="w-full h-12 md:h-16 block fill-cream">
          <path d="M0,20 C360,60 720,0 1080,40 C1260,60 1380,10 1440,20 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* ── 4. FEATURED CONTENT ─────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-cream" aria-label="Featured articles">
        <div className="section-container">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-ocean text-sm font-semibold tracking-widest uppercase mb-2">
                From the Blog
              </p>
              <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl">
                Gulf Coast Travel Guides
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden sm:flex items-center gap-1 text-ocean font-semibold text-sm
                         hover:gap-2 transition-all duration-200 flex-shrink-0 ml-4"
            >
              All articles
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <ContentCard
                key={post.slug}
                href={`/blog/${post.slug}`}
                imageSrc={post.heroImage}
                imageAlt={post.title}
                category={post.category}
                title={post.title}
                excerpt={post.excerpt}
                meta={post.readTime}
              />
            ))}
          </div>

          <div className="mt-8 sm:hidden text-center">
            <Link href="/blog" className="btn-secondary">
              Read all articles
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. NEWSLETTER BANNER ────────────────────────────────── */}
      <NewsletterBanner variant="hero" />

      {/* ── 6. STATS STRIP ──────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-navy" aria-label="Gulf Coast facts">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '11',   label: 'Beach Destinations',      icon: '🏖️' },
              { value: '350+', label: 'Miles of Gulf Coastline', icon: '🌊' },
              { value: '12mo', label: 'of Beach Weather',        icon: '☀️' },
              { value: '100%', label: 'Local Knowledge',         icon: '📍' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <span className="text-3xl" aria-hidden="true">{stat.icon}</span>
                <span className="font-display font-bold text-white text-4xl sm:text-5xl">
                  {stat.value}
                </span>
                <span className="text-white/50 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
