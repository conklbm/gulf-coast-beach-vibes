import type { Metadata } from 'next'
import ContentCard from '@/components/ContentCard'

export const metadata: Metadata = {
  title: 'Best Things to Do on the Gulf Coast',
  description:
    'Activities, tours, and adventures across the Gulf Coast — from fishing charters and water sports to state parks and local experiences.',
}

const activityGuides = [
  {
    slug: 'best-things-to-do-gulf-shores',
    title: 'Best Things to Do in Gulf Shores, AL',
    excerpt:
      "Gulf Shores has way more going on than just the beach. From Gulf State Park hiking to fishing charters, live music, and water parks — here's the full activity guide.",
    imageSrc:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
    category: 'Gulf Shores',
    meta: '8 activities',
  },
  {
    slug: 'best-water-sports-gulf-coast',
    title: 'Best Water Sports on the Gulf Coast',
    excerpt:
      "Parasailing, kayaking, paddleboarding, jet skiing, snorkeling, and more — the Gulf Coast is an adventure sports playground. Here's where to find the best operators at each destination.",
    imageSrc:
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    category: 'Water Sports',
    meta: 'All destinations',
  },
  {
    slug: 'best-fishing-charters-gulf-coast',
    title: 'Best Fishing Charters on the Gulf Coast',
    excerpt:
      'The Gulf of Mexico is one of the best fishing destinations in the world. Half-day bay trips, full-day offshore, and deep-sea charters — here are the best charter companies at each port.',
    imageSrc:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    category: 'Fishing',
    meta: 'Charter guide',
  },
]

export default function ActivitiesPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-navy overflow-hidden">
        <div className="section-container relative z-10 text-center">
          <p className="text-ocean-300 text-sm font-semibold tracking-widest uppercase mb-3">
            Things to Do
          </p>
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl mb-4">
            Gulf Coast Activities
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-xl mx-auto">
            Water sports, fishing charters, state parks, family fun, and local experiences across the Gulf Coast.
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
            {activityGuides.map((guide) => (
              <ContentCard
                key={guide.slug}
                href={`/activities/${guide.slug}`}
                imageSrc={guide.imageSrc}
                imageAlt={guide.title}
                category={guide.category}
                title={guide.title}
                excerpt={guide.excerpt}
                meta={guide.meta}
              />
            ))}
          </div>

          {/* GetYourGuide CTA */}
          <div className="mt-16 bg-ocean/10 rounded-2xl p-8 md:p-10 text-center">
            <h2 className="font-display font-bold text-navy text-2xl mb-3">
              Book Gulf Coast Tours & Activities
            </h2>
            <p className="text-navy/60 mb-6 max-w-lg mx-auto">
              Browse hundreds of tours, water sports, and experiences across every Gulf Coast destination — with instant booking and free cancellation on most activities.
            </p>
            {/* TODO: Replace with tracked GetYourGuide affiliate link */}
            <a
              href="https://www.getyourguide.com/gulf-coast/"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="btn-primary"
            >
              Browse on GetYourGuide
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
