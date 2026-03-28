import type { Metadata } from 'next'
import ContentCard from '@/components/ContentCard'

export const metadata: Metadata = {
  title: 'Best Places to Stay on the Gulf Coast',
  description:
    'Find the best hotels, vacation rentals, and resorts on the Gulf Coast — from Gulf Shores, AL to Panama City Beach, FL. Curated recommendations with booking links.',
}

const stayGuides = [
  {
    slug: 'best-places-to-stay-gulf-coast',
    title: 'Best Places to Stay on the Gulf Coast: The Complete Guide',
    excerpt:
      'Hotels, condos, vacation rentals, and resorts — across all 11 Gulf Coast destinations. Whether you want a luxury resort or a budget-friendly beach house, we have you covered.',
    imageSrc:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    category: 'Stay Guide',
    meta: 'Gulf Coast',
  },
  {
    slug: 'best-vrbo-gulf-shores',
    title: 'Best VRBO Vacation Rentals in Gulf Shores',
    excerpt:
      'The best houses and condos on VRBO for Gulf Shores — sorted by beachfront access, family size, and value. Updated for this season.',
    imageSrc:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
    category: 'Gulf Shores',
    meta: 'Vacation Rentals',
  },
  {
    slug: 'best-hotels-destin-fl',
    title: "Best Hotels in Destin, FL — From Budget to Luxury",
    excerpt:
      "From the Henderson Park Inn to beachfront condos, here's every kind of stay in Destin ranked by location, value, and what kind of trip you're planning.",
    imageSrc:
      'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=800&q=80',
    category: 'Destin',
    meta: 'Hotels',
  },
]

export default function StayPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-navy overflow-hidden">
        <div className="section-container relative z-10 text-center">
          <p className="text-ocean-300 text-sm font-semibold tracking-widest uppercase mb-3">
            Accommodation Guides
          </p>
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl mb-4">
            Places to Stay
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-xl mx-auto">
            Handpicked hotels, resorts, and vacation rentals across every Gulf Coast destination.
          </p>
        </div>
        <div className="wave-divider absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg"
               preserveAspectRatio="none" className="w-full h-8 md:h-10 fill-cream block">
            <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,10 1440,20 L1440,40 L0,40 Z" />
          </svg>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stayGuides.map((guide) => (
              <ContentCard
                key={guide.slug}
                href={`/stay/${guide.slug}`}
                imageSrc={guide.imageSrc}
                imageAlt={guide.title}
                category={guide.category}
                title={guide.title}
                excerpt={guide.excerpt}
                meta={guide.meta}
              />
            ))}
          </div>

          {/* Affiliate platforms */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <h3 className="font-display font-bold text-navy text-xl mb-2">Book on Booking.com</h3>
              <p className="text-navy/60 text-sm mb-4">
                Hotels and resorts across all Gulf Coast destinations — best price guarantee.
              </p>
              {/* TODO: Replace with tracked Booking.com affiliate link */}
              <a
                href="https://www.booking.com/region/us/gulf-coast.html"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="btn-secondary text-sm"
              >
                Search Hotels →
              </a>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <h3 className="font-display font-bold text-navy text-xl mb-2">Vacation Rentals on VRBO</h3>
              <p className="text-navy/60 text-sm mb-4">
                Beach houses, condos, and rentals for families and groups across the Gulf Coast.
              </p>
              {/* TODO: Replace with tracked VRBO affiliate link */}
              <a
                href="https://www.vrbo.com/vacation-rentals/usa/gulf-coast"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="btn-secondary text-sm"
              >
                Browse Rentals →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
