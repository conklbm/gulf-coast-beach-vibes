import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateLink from '@/components/AffiliateLink'
import TipCallout from '@/components/TipCallout'
import NewsletterBanner from '@/components/NewsletterBanner'

interface Props {
  params: { slug: string }
}

const activityContent: Record<string, { title: string; description: string }> = {
  'best-things-to-do-gulf-shores':     { title: 'Best Things to Do in Gulf Shores, AL',  description: 'The complete activity guide to Gulf Shores.' },
  'best-water-sports-gulf-coast':      { title: 'Best Water Sports on the Gulf Coast',    description: 'Parasailing, kayaking, and more across the Gulf Coast.' },
  'best-fishing-charters-gulf-coast':  { title: 'Best Fishing Charters on the Gulf Coast', description: 'Top charter fishing at every Gulf Coast port.' },
}

export async function generateStaticParams() {
  return Object.keys(activityContent).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const content = activityContent[params.slug]
  if (!content) return {}
  return { title: content.title, description: content.description }
}

const gulfShoresActivities = [
  { name: 'Gulf State Park — Hiking & Biking', description: 'Over 28 miles of trails through coastal pine forest, dune ecosystems, and lakeside paths. Rent a bike at the park shop and spend a full morning exploring. The pier is a highlight at sunrise.', href: 'https://www.getyourguide.com/gulf-shores-l100568/' },
  { name: 'Deep-Sea Fishing Charter', description: 'Dozens of charter boats operate out of the Gulf Shores/Orange Beach marina area. Red snapper, amberjack, and grouper are the targets. Half-day trips are great for first-timers.', href: 'https://www.getyourguide.com/gulf-shores-l100568/fishing/' },
  { name: 'Waterville USA Water Park', description: "Alabama's biggest water park — slides, a wave pool, go-karts, and mini golf all in one spot. Great when the beach crowd gets thick or the kids need a change of pace.", href: null },
  { name: 'Gulf Shores Public Pier', description: 'One of the longest fishing piers on the Gulf Coast at over 1,500 feet. Fish for free with your pier admission, or walk to the end and watch the pelicans dive. Spectacular at sunrise.', href: null },
  { name: 'Alabama Gulf Coast Zoo', description: 'The "little zoo that could" — survived multiple hurricanes and keeps going. A small but beloved zoo that\'s great for families with young kids.', href: null },
  { name: 'Dolphin Cruise', description: 'Sunset dolphin tours and eco-cruises run regularly from the Gulf Shores marina. Bottlenose dolphins are year-round residents and easy to spot.', href: 'https://www.getyourguide.com/gulf-shores-l100568/dolphin-tour/' },
  { name: 'Bon Secour National Wildlife Refuge', description: 'Undeveloped beach and maritime forest accessible via hiking trails. Some of the most pristine and empty coastline in Alabama — pack water and a picnic.', href: null },
  { name: 'The Track Family Fun Center', description: 'Go-karts, bumper boats, mini golf, and arcade games. The kind of place that keeps the whole family happy after a long day at the beach.', href: null },
]

export default function ActivitySlugPage({ params }: Props) {
  if (params.slug !== 'best-things-to-do-gulf-shores') {
    return (
      <section className="min-h-screen flex items-center justify-center bg-cream pt-16">
        <div className="text-center max-w-lg px-4">
          <div className="text-5xl mb-4">🏄</div>
          <h1 className="font-display font-bold text-navy text-3xl mb-3">Guide Coming Soon</h1>
          <p className="text-navy/60 mb-6">
            We&apos;re working on this activity guide. Subscribe to be notified when it&apos;s live.
          </p>
          <NewsletterBanner variant="compact" />
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="relative pt-32 pb-16 bg-navy">
        <div className="section-container relative z-10">
          <Breadcrumb items={[{ label: 'Activities', href: '/activities' }, { label: 'Gulf Shores, AL' }]} />
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl mt-6 mb-4 max-w-3xl">
            Best Things to Do in Gulf Shores, AL
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Gulf Shores has a lot more going on than just the beach — here&apos;s the local&apos;s guide to the best activities, hidden spots, and must-do experiences.
          </p>
        </div>
        <div className="wave-divider absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg"
               preserveAspectRatio="none" className="w-full h-8 fill-cream block">
            <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,10 1440,20 L1440,40 L0,40 Z" />
          </svg>
        </div>
      </section>

      <article className="bg-cream py-16">
        <div className="section-container max-w-4xl">
          <p className="text-navy/70 text-lg leading-relaxed mb-10">
            Most people come to Gulf Shores for the beach — and the beach is spectacular. But Alabama&apos;s Gulf Coast has a depth of activities that surprises first-time visitors. Here&apos;s everything worth doing, from the free to the bucket-list.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {gulfShoresActivities.map((activity) => (
              <div key={activity.name} className="card p-6 flex flex-col">
                <h3 className="font-display font-bold text-navy text-lg mb-2">{activity.name}</h3>
                <p className="text-navy/60 text-sm leading-relaxed flex-1 mb-4">{activity.description}</p>
                {activity.href && (
                  // TODO: Replace href with tracked GetYourGuide affiliate link
                  <AffiliateLink href={activity.href} label="Book This" provider="getyourguide" />
                )}
              </div>
            ))}
          </div>

          <TipCallout title="Best Time for Activities" variant="tip">
            The Gulf Coast is best for outdoor activities April–June and September–October — before the summer crush and after it clears out. Water is still warm in October (75°F+) and the crowds are gone. Deep-sea fishing is excellent year-round, but red snapper season (usually June–July) is the most popular time to go.
          </TipCallout>
        </div>
      </article>

      <NewsletterBanner variant="hero" />
    </>
  )
}
