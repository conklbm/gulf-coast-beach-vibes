import { destinations } from '@/lib/destinations'
import DestinationCard from './DestinationCard'

interface RelatedDestinationsProps {
  currentSlug: string
  count?: number
}

export default function RelatedDestinations({
  currentSlug,
  count = 3,
}: RelatedDestinationsProps) {
  // Get nearby destinations (exclude current)
  const others = destinations
    .filter((d) => d.slug !== currentSlug)
    .slice(0, count)

  return (
    <section aria-label="Related destinations">
      <h2 className="font-display font-bold text-navy text-2xl mb-6">
        Explore More Gulf Coast Beaches
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {others.map((destination) => (
          <DestinationCard key={destination.slug} destination={destination} size="md" />
        ))}
      </div>
    </section>
  )
}
