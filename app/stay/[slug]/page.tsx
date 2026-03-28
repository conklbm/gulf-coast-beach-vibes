import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateLink from '@/components/AffiliateLink'
import TipCallout from '@/components/TipCallout'
import NewsletterBanner from '@/components/NewsletterBanner'

interface Props {
  params: { slug: string }
}

// Static content for the launch roundup page
const stayContent: Record<string, { title: string; description: string }> = {
  'best-places-to-stay-gulf-coast': {
    title: 'Best Places to Stay on the Gulf Coast',
    description:
      'Hotels, vacation rentals, and resorts — across all 11 Gulf Coast destinations.',
  },
  'best-vrbo-gulf-shores': {
    title: 'Best VRBO Vacation Rentals in Gulf Shores',
    description: 'Top-rated VRBO rentals in Gulf Shores, AL.',
  },
  'best-hotels-destin-fl': {
    title: 'Best Hotels in Destin, FL',
    description: 'From budget to luxury — the best places to stay in Destin.',
  },
}

export async function generateStaticParams() {
  return Object.keys(stayContent).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const content = stayContent[params.slug]
  if (!content) return {}
  return {
    title: content.title,
    description: content.description,
  }
}

export default function StaySlugPage({ params }: Props) {
  if (params.slug !== 'best-places-to-stay-gulf-coast') {
    // Stub for guides not yet written
    return (
      <section className="min-h-screen flex items-center justify-center bg-cream pt-16">
        <div className="text-center max-w-lg px-4">
          <div className="text-5xl mb-4">🏨</div>
          <h1 className="font-display font-bold text-navy text-3xl mb-3">Guide Coming Soon</h1>
          <p className="text-navy/60 mb-6">
            We&apos;re working on this one. Subscribe to our newsletter to be notified when it&apos;s live.
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
          <Breadcrumb items={[{ label: 'Stay', href: '/stay' }, { label: 'Best Places to Stay' }]} />
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl mt-6 mb-4 max-w-3xl">
            Best Places to Stay on the Gulf Coast
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Whether you want a full-service resort, a cozy beach house, or a budget-friendly condo — here&apos;s how to find the right stay for your Gulf Coast trip.
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

          <TipCallout title="Affiliate Disclosure" variant="info">
            This page contains affiliate links to Booking.com and VRBO. We may earn a small
            commission if you book through them — at no extra cost to you. We only recommend
            places we&apos;d stay at ourselves.
          </TipCallout>

          {/* Best By Category */}
          {[
            {
              title: 'Best Gulf Coast Luxury Resorts',
              description: "If budget isn't the concern, these resorts deliver the full Gulf Coast experience with private beach access, multiple pools, spa services, and world-class dining.",
              items: [
                {
                  name: 'The Lodge at Gulf State Park (Gulf Shores, AL)',
                  description: 'A Hilton-managed resort embedded in Gulf State Park — the best combination of nature and luxury on the Gulf Coast.',
                  href: 'https://www.booking.com/hotel/us/the-lodge-at-gulf-state-park.html',
                  provider: 'booking' as const,
                },
                {
                  name: 'Henderson Park Inn (Destin, FL)',
                  description: 'Adults-only boutique inn adjacent to Henderson Beach State Park. The most romantic stay on the Emerald Coast.',
                  href: 'https://www.booking.com/hotel/us/henderson-park-inn.html',
                  provider: 'booking' as const,
                },
                {
                  name: 'Hilton Pensacola Beach',
                  description: "Full-service beachfront hotel right at Casino Beach — spectacular Gulf views and a great pool complex.",
                  href: 'https://www.booking.com/hotel/us/hilton-pensacola-beach.html',
                  provider: 'booking' as const,
                },
              ],
            },
            {
              title: 'Best Gulf Coast Vacation Rentals (VRBO)',
              description: "For families and groups, vacation rentals beat hotels every time. You get a full kitchen, more space, a private pool sometimes, and you save money per person. VRBO has the best selection on the Gulf Coast.",
              items: [
                {
                  name: 'Gulf Shores, AL Vacation Rentals',
                  description: 'Massive selection of beachfront condos and houses in Alabama\'s beach capital.',
                  href: 'https://www.vrbo.com/vacation-rentals/usa/alabama/gulf-shores',
                  provider: 'vrbo' as const,
                },
                {
                  name: 'Destin, FL Vacation Rentals',
                  description: 'Everything from studio condos to 8-bedroom beach houses right on the Emerald Coast.',
                  href: 'https://www.vrbo.com/vacation-rentals/usa/florida/destin',
                  provider: 'vrbo' as const,
                },
                {
                  name: 'Pensacola Beach, FL Vacation Rentals',
                  description: 'Great condo options all along Santa Rosa Island.',
                  href: 'https://www.vrbo.com/vacation-rentals/usa/florida/pensacola-beach',
                  provider: 'vrbo' as const,
                },
              ],
            },
          ].map((section) => (
            <div key={section.title} className="mb-14">
              <h2 className="font-display font-bold text-navy text-2xl mb-2">{section.title}</h2>
              <p className="text-navy/60 text-base leading-relaxed mb-6">{section.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {section.items.map((item) => (
                  <div key={item.name} className="card p-5 flex flex-col">
                    <h3 className="font-display font-semibold text-navy mb-2 text-base">{item.name}</h3>
                    <p className="text-navy/60 text-sm leading-relaxed flex-1 mb-4">{item.description}</p>
                    {/* TODO: Replace href with tracked affiliate link */}
                    <AffiliateLink href={item.href} label="Check Availability" provider={item.provider} />
                  </div>
                ))}
              </div>
            </div>
          ))}

          <TipCallout title="Pro Tip: Timing" variant="tip">
            Book Gulf Coast accommodations at least 3–4 months in advance for summer travel (June–August),
            and 6+ months for holiday weekends like Fourth of July. September and October offer the best
            combination of warm water, smaller crowds, and lower prices — often 40% cheaper than peak summer rates.
          </TipCallout>
        </div>
      </article>

      <NewsletterBanner variant="hero" />
    </>
  )
}
