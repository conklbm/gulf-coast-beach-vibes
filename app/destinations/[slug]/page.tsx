import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import HeroSection from '@/components/HeroSection'
import Breadcrumb from '@/components/Breadcrumb'
import TipCallout from '@/components/TipCallout'
import AffiliateLink from '@/components/AffiliateLink'
import RelatedDestinations from '@/components/RelatedDestinations'
import NewsletterBanner from '@/components/NewsletterBanner'
import { destinations, getDestinationBySlug } from '@/lib/destinations'
import { destinationContent, type DestinationContent } from '@/lib/destinationContent'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const destination = getDestinationBySlug(params.slug)
  if (!destination) return {}

  const title = `${destination.name}, ${destination.state} Beach Guide — Things to Do, Stay & Eat`
  const description = destination.description

  return {
    title,
    description,
    openGraph: {
      title: `${destination.name} Travel Guide | Gulf Coast Beach Vibes`,
      description,
      images: [{ url: destination.heroImage, width: 1200, height: 630, alt: destination.name }],
    },
  }
}

export default function DestinationPage({ params }: Props) {
  const destination = getDestinationBySlug(params.slug)
  if (!destination) notFound()

  const content = destinationContent[params.slug]
  const hasFullContent = destination.hasFullContent && !!content

  // JSON-LD: TouristDestination schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: destination.name,
    description: destination.description,
    touristType: ['Beach', 'Family', 'Couples'],
    geo: {
      '@type': 'GeoCoordinates',
      addressRegion: destination.state,
      addressCountry: 'US',
    },
    image: destination.heroImage,
    url: `https://gulfcoastbeachvibes.com/destinations/${destination.slug}`,
  }

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <HeroSection
        imageSrc={destination.heroImage}
        imageAlt={`${destination.name}, ${destination.state} beach`}
        eyebrow={`${destination.state} · Gulf Coast`}
        headline={destination.name}
        subheadline={destination.tagline}
        ctaLabel="Plan Your Trip"
        ctaHref="#where-to-stay"
        overlay="medium"
        height="large"
      />

      {/* Breadcrumb + Overview */}
      <section className="bg-cream pt-8 pb-12">
        <div className="section-container">
          <Breadcrumb
            items={[
              { label: 'Destinations', href: '/destinations' },
              { label: destination.name },
            ]}
          />

          <div className="max-w-3xl mt-6">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-ocean/10 text-ocean text-sm font-medium">
                {destination.state === 'AL' ? 'Alabama' : 'Florida'}
              </span>
              {destination.highlights.map((h) => (
                <span key={h} className="px-3 py-1 rounded-full bg-sand-300 text-navy/70 text-sm">
                  {h}
                </span>
              ))}
            </div>
            <p className="text-navy/70 text-lg leading-relaxed">{destination.description}</p>
          </div>
        </div>
      </section>

      {hasFullContent ? (
        <FullDestinationContent content={content} destinationName={destination.name} />
      ) : (
        <StubContent destination={destination} />
      )}

      {/* Related Destinations */}
      <section className="py-16 bg-cream">
        <div className="section-container">
          <RelatedDestinations currentSlug={params.slug} count={3} />
        </div>
      </section>

      <NewsletterBanner variant="hero" />
    </>
  )
}

// ─── Full Content Template ──────────────────────────────────────────────────

function FullDestinationContent({
  content,
  destinationName,
}: {
  content: DestinationContent
  destinationName: string
}) {
  return (
    <>
      {/* Best Beaches */}
      <section className="py-16 bg-sand-300">
        <div className="section-container">
          <h2 className="font-display font-bold text-navy text-3xl mb-8">
            🏖️ Best Beaches in {destinationName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.beaches.map((beach) => (
              <div key={beach.name} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-display font-bold text-navy text-lg mb-2">{beach.name}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{beach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="overflow-hidden leading-none bg-sand-300">
        <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="none" className="w-full h-8 fill-cream block">
          <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,10 1440,20 L1440,40 L0,40 Z" />
        </svg>
      </div>

      {/* Where to Stay */}
      <section id="where-to-stay" className="py-16 bg-cream">
        <div className="section-container">
          <h2 className="font-display font-bold text-navy text-3xl mb-2">
            🏨 Where to Stay in {destinationName}
          </h2>
          <p className="text-navy/50 text-sm mb-8">
            Affiliate disclosure: we may earn a commission on bookings, at no extra cost to you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.whereToStay.map((stay) => (
              <div key={stay.name} className="card p-6 flex flex-col">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display font-bold text-navy text-lg leading-snug">
                    {stay.name}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-ocean/10 text-ocean text-xs font-medium capitalize flex-shrink-0">
                    {stay.type}
                  </span>
                </div>
                <p className="text-navy/60 text-sm leading-relaxed flex-1 mb-4">
                  {stay.description}
                </p>
                <AffiliateLink
                  href={stay.affiliateUrl}
                  label="Check Availability"
                  provider={stay.provider}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where to Eat */}
      <section className="py-16 bg-sand-300">
        <div className="section-container">
          <h2 className="font-display font-bold text-navy text-3xl mb-8">
            🍽️ Where to Eat in {destinationName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.whereToEat.map((restaurant) => (
              <div key={restaurant.name} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-display font-bold text-navy text-lg">{restaurant.name}</h3>
                  <div className="flex-shrink-0 flex gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-coral/10 text-coral text-xs font-medium">
                      {restaurant.cuisine}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-sand-300 text-navy/70 text-xs font-medium">
                      {restaurant.priceRange}
                    </span>
                  </div>
                </div>
                <p className="text-navy/60 text-sm leading-relaxed">{restaurant.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-cream">
        <div className="section-container">
          <h2 className="font-display font-bold text-navy text-3xl mb-8">
            🏄 Activities in {destinationName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.activities.map((activity) => (
              <div key={activity.name} className="card p-6">
                <h3 className="font-display font-bold text-navy text-lg mb-2">
                  {activity.name}
                </h3>
                <p className="text-navy/60 text-sm leading-relaxed mb-4">
                  {activity.description}
                </p>
                {activity.affiliateUrl && (
                  <AffiliateLink
                    href={activity.affiliateUrl}
                    label="Book This Activity"
                    provider={activity.provider === 'getyourguide' ? 'getyourguide' : 'generic'}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="py-16 bg-sand-300">
        <div className="section-container max-w-3xl">
          <h2 className="font-display font-bold text-navy text-3xl mb-4">
            🗺️ Getting to {destinationName}
          </h2>
          <p className="text-navy/70 text-base leading-relaxed">{content.gettingThere}</p>
        </div>
      </section>

      {/* Local Tip */}
      <section className="py-12 bg-cream">
        <div className="section-container max-w-3xl">
          <TipCallout title="Tip from a Local" variant="tip">
            {content.localTip}
          </TipCallout>
        </div>
      </section>
    </>
  )
}

// ─── Stub / Coming Soon Template ───────────────────────────────────────────

function StubContent({ destination }: { destination: ReturnType<typeof getDestinationBySlug> }) {
  if (!destination) return null

  return (
    <section className="py-16 bg-sand-300">
      <div className="section-container max-w-2xl text-center">
        <div className="bg-white rounded-2xl p-10 shadow-sm">
          <div className="text-5xl mb-4" aria-hidden="true">🌊</div>
          <h2 className="font-display font-bold text-navy text-2xl mb-3">
            Full Guide Coming Soon
          </h2>
          <p className="text-navy/60 mb-6">
            We&apos;re working on a complete guide for {destination.name} — covering the best beaches,
            where to stay, where to eat, and local tips. Subscribe below to get notified when it drops.
          </p>
          <div className="mt-4 mx-auto max-w-sm">
            <NewsletterBanner variant="compact" />
          </div>
        </div>
      </div>
    </section>
  )
}
