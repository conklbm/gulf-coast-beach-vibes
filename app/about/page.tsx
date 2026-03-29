import type { Metadata } from 'next'
import Link from 'next/link'
import NewsletterBanner from '@/components/NewsletterBanner'

export const metadata: Metadata = {
  title: 'About | Gulf Coast Beach Vibes',
  description:
    'Gulf Coast Beach Vibes is written by a Mobile, AL local who has spent 30 years exploring every beach from Dauphin Island to Panama City Beach.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-24 pb-16">
        <div className="section-container max-w-3xl text-center">
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl mb-4">
            About Gulf Coast Beach Vibes
          </h1>
          <p className="text-white/60 text-lg">
            A local&apos;s guide — written by someone who&apos;s been going to these beaches their
            whole life.
          </p>
        </div>
      </section>

      {/* Wave divider */}
      <div className="bg-navy">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 fill-cream block"
        >
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* Main content */}
      <section className="bg-cream py-16">
        <div className="section-container max-w-3xl">

          <div className="prose prose-lg max-w-none
                          prose-headings:font-display prose-headings:text-navy
                          prose-p:text-navy/70 prose-p:leading-relaxed
                          prose-a:text-ocean prose-a:no-underline hover:prose-a:underline
                          prose-li:text-navy/70">

            <h2>Hi, I&apos;m Brooks</h2>

            <p>
              I&apos;m a Mobile, Alabama native who has spent the last 30 years exploring every
              beach on this stretch of Gulf Coast — from Dauphin Island to Panama City Beach and
              every stop in between. Dauphin Island is my closest beach, about 45 minutes from
              my front door, and it&apos;s still the one I return to most.
            </p>

            <p>
              I built Gulf Coast Beach Vibes because I was tired of travel guides written by people
              who visited once and copied their research from other travel guides. The Gulf Coast has
              a character, a rhythm, and a set of local knowledge that only comes from actually
              spending time here — knowing which beach is worth the extra 45-minute drive, which
              month gives you the same water as July for half the crowds and 30% less rent, and
              which fishing pier produces the best Spanish mackerel at the turn of a tide.
            </p>

            <p>
              This site is that knowledge, organized into something useful.
            </p>

            <h2>The Beaches I&apos;ve Covered</h2>

            <p>
              Every destination on this site is one I&apos;ve personally visited — most of them
              many times over 30 years. Here&apos;s the full list:
            </p>

            <ul>
              <li><Link href="/destinations/dauphin-island">Dauphin Island, AL</Link> — my home beach, 45 min from Mobile</li>
              <li><Link href="/destinations/gulf-shores">Gulf Shores, AL</Link></li>
              <li><Link href="/destinations/orange-beach">Orange Beach, AL</Link></li>
              <li><Link href="/destinations/pensacola-beach">Pensacola Beach, FL</Link></li>
              <li><Link href="/destinations/gulf-breeze">Gulf Breeze, FL</Link></li>
              <li><Link href="/destinations/navarre-beach">Navarre Beach, FL</Link></li>
              <li><Link href="/destinations/fort-walton-beach">Fort Walton Beach, FL</Link></li>
              <li><Link href="/destinations/destin">Destin, FL</Link></li>
              <li><Link href="/destinations/miramar-beach">Miramar Beach, FL</Link></li>
              <li><Link href="/destinations/seaside">Seaside / 30A, FL</Link></li>
              <li><Link href="/destinations/panama-city-beach">Panama City Beach, FL</Link></li>
            </ul>

            <p>
              That&apos;s roughly 200 miles of Gulf Coast, and I&apos;ve driven every stretch of
              it more times than I can count.
            </p>

            <h2>What This Site Is (and Isn&apos;t)</h2>

            <p>
              Gulf Coast Beach Vibes is an independent, locally-written travel guide. It&apos;s
              not a booking engine and it&apos;s not affiliated with any resort, tourism board, or
              hotel chain. The opinions here are mine.
            </p>

            <p>
              Like most travel sites, some links earn a small commission if you book through them
              — this is how the site stays free to use. I only link to places I&apos;d genuinely
              recommend to a friend. The full disclosure is in the footer on every page.
            </p>

            <h2>What You&apos;ll Find Here</h2>

            <ul>
              <li>
                <strong><Link href="/destinations">Destination guides</Link></strong> — honest,
                detailed breakdowns of all 11 Gulf Coast beach towns with real local knowledge
              </li>
              <li>
                <strong><Link href="/blog">Blog &amp; guides</Link></strong> — comparison articles,
                seasonal guides, road trip directions, and practical tips for planning your trip
              </li>
              <li>
                <strong><Link href="/stay">Where to stay</Link></strong> — vacation rental and hotel
                roundups built around value and location
              </li>
              <li>
                <strong><Link href="/activities">Things to do</Link></strong> — activity guides
                covering fishing, water sports, state parks, and more
              </li>
            </ul>

            <h2>Get in Touch</h2>

            <p>
              The best way to stay connected is the newsletter — I send Gulf Coast travel tips,
              seasonal guides, and the kind of local intel that doesn&apos;t make it onto the big
              travel sites.
            </p>

          </div>

          {/* Newsletter CTA */}
          <div className="mt-12 max-w-md">
            <NewsletterBanner variant="compact" />
          </div>

        </div>
      </section>

      {/* Back to destinations nudge */}
      <section className="py-12 bg-sand-300">
        <div className="section-container text-center">
          <p className="text-navy/60 mb-4 text-sm">Ready to start planning?</p>
          <Link
            href="/destinations"
            className="btn-primary"
          >
            Browse All Destinations
          </Link>
        </div>
      </section>
    </>
  )
}
