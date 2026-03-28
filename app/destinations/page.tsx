import type { Metadata } from 'next'
import Link from 'next/link'
import DestinationCard from '@/components/DestinationCard'
import { destinations } from '@/lib/destinations'

export const metadata: Metadata = {
  title: 'All Gulf Coast Beach Destinations',
  description:
    'Explore 11 Gulf Coast beach destinations from Dauphin Island, AL to Panama City Beach, FL — with local guides for where to stay, eat, and play at each one.',
  openGraph: {
    title: 'All Gulf Coast Beach Destinations | Gulf Coast Beach Vibes',
    description:
      'Your complete guide to every beach destination on the Gulf Coast.',
  },
}

const alabamaDestinations = destinations.filter((d) => d.state === 'AL')
const floridaDestinations  = destinations.filter((d) => d.state === 'FL')

export default function DestinationsPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="relative pt-32 pb-16 bg-navy overflow-hidden"
        aria-label="Destinations header"
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 30 50 50 Q75 70 100 50 L100 100 L0 100 Z' fill='%230EA5BE' fill-opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px',
          }}
        />
        <div className="section-container relative z-10 text-center">
          <p className="text-ocean-300 text-sm font-semibold tracking-widest uppercase mb-3">
            West to East
          </p>
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl mb-4">
            Gulf Coast Destinations
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto">
            11 beaches stretching from the Alabama coast to the Florida Panhandle.
            Find your perfect Gulf Coast escape.
          </p>
        </div>
        <div className="wave-divider absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg"
               preserveAspectRatio="none" className="w-full h-8 md:h-10 fill-cream block">
            <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,10 1440,20 L1440,40 L0,40 Z" />
          </svg>
        </div>
      </section>

      {/* Alabama Destinations */}
      <section className="pt-16 pb-8 bg-cream" aria-label="Alabama beaches">
        <div className="section-container">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-sand-300" />
            <div className="flex items-center gap-2 px-4">
              <span className="text-2xl" aria-hidden="true">🦐</span>
              <h2 className="font-display font-bold text-navy text-2xl">Alabama Beaches</h2>
            </div>
            <div className="h-px flex-1 bg-sand-300" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {alabamaDestinations.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} size="lg" />
            ))}
          </div>
        </div>
      </section>

      {/* Florida Destinations */}
      <section className="py-8 pb-20 bg-cream" aria-label="Florida beaches">
        <div className="section-container">
          <div className="flex items-center gap-4 mb-8 mt-8">
            <div className="h-px flex-1 bg-sand-300" />
            <div className="flex items-center gap-2 px-4">
              <span className="text-2xl" aria-hidden="true">🌴</span>
              <h2 className="font-display font-bold text-navy text-2xl">Florida Panhandle</h2>
            </div>
            <div className="h-px flex-1 bg-sand-300" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {floridaDestinations.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} size="lg" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-sand-300" aria-label="Newsletter CTA">
        <div className="section-container text-center">
          <h2 className="font-display font-bold text-navy text-3xl mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-navy/60 text-lg mb-8 max-w-xl mx-auto">
            Get Gulf Coast insider tips, hidden beach spots, and local finds — straight from someone who lives here.
          </p>
          <Link href="/newsletter" className="btn-primary">
            Get Gulf Coast Tips
          </Link>
        </div>
      </section>
    </>
  )
}
