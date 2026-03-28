import type { Metadata } from 'next'
import ContentCard from '@/components/ContentCard'

export const metadata: Metadata = {
  title: 'Best Restaurants on the Gulf Coast',
  description:
    'The best restaurants, seafood shacks, and local eats across the Gulf Coast — from Gulf Shores, AL to Panama City Beach, FL.',
}

const eatGuides = [
  {
    slug: 'best-seafood-gulf-shores',
    title: 'Best Seafood Restaurants in Gulf Shores, AL',
    excerpt:
      "From Lulu's to Gulf Shores Steamer — the best places to eat fresh Gulf seafood in Alabama's beach capital, ranked by a local.",
    imageSrc: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
    category: 'Gulf Shores',
    meta: 'Seafood',
  },
  {
    slug: 'best-restaurants-destin',
    title: 'Best Restaurants in Destin, FL',
    excerpt:
      "Destin has some of the best waterfront dining on the Emerald Coast. Here's where to eat — from dockside raw bars to romantic dinner spots.",
    imageSrc: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=800&q=80',
    category: 'Destin',
    meta: 'Dining guide',
  },
  {
    slug: 'best-breakfast-gulf-coast',
    title: 'Best Breakfast Spots on the Gulf Coast',
    excerpt:
      "The Gulf Coast does breakfast right — from old-school diners to biscuit joints to oceanview egg sandwiches. Here are the spots worth waking up early for.",
    imageSrc: 'https://images.unsplash.com/photo-1505228058230-1d7cce43cd57?auto=format&fit=crop&w=800&q=80',
    category: 'All Destinations',
    meta: 'Breakfast guide',
  },
]

export default function EatPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-navy overflow-hidden">
        <div className="section-container relative z-10 text-center">
          <p className="text-ocean-300 text-sm font-semibold tracking-widest uppercase mb-3">
            Restaurants & Food
          </p>
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl mb-4">
            Where to Eat
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-xl mx-auto">
            Fresh Gulf seafood, local favorites, and hidden gems — across every destination on the Gulf Coast.
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
            {eatGuides.map((guide) => (
              <ContentCard
                key={guide.slug}
                href={`/eat/${guide.slug}`}
                imageSrc={guide.imageSrc}
                imageAlt={guide.title}
                category={guide.category}
                title={guide.title}
                excerpt={guide.excerpt}
                meta={guide.meta}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
