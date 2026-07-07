import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'Terms of use for Gulf Coast Beach Vibes — what you can expect from our travel guides and what we ask of you.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-24 pb-16">
        <div className="section-container max-w-3xl text-center">
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl mb-4">
            Terms of Use
          </h1>
          <p className="text-white/60 text-lg">Last updated: July 7, 2026</p>
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

            <p>
              Welcome to Gulf Coast Beach Vibes (gulfcoastbeachvibes.com). By using this site, you
              agree to these terms. They&apos;re short and written in plain English.
            </p>

            <h2>What This Site Is</h2>
            <p>
              Gulf Coast Beach Vibes is a travel guide covering Gulf Coast beach destinations from
              Dauphin Island, Alabama to Panama City Beach, Florida. Everything here is provided for
              general informational purposes.
            </p>

            <h2>Travel Information Can Change</h2>
            <p>
              We work hard to keep our guides accurate, but beach conditions, hours, prices, pet
              policies, seasonal schedules, and business availability change frequently — often without
              notice. Always verify time-sensitive details (hours, fees, reservations, weather and surf
              conditions, local regulations) directly with the venue or official source before you
              travel. Your travel decisions are your own responsibility.
            </p>

            <h2>Affiliate Relationships</h2>
            <p>
              This site earns revenue through affiliate links. When you book or buy through links on
              this site — including VRBO, Booking.com, Amazon, Viator, TripShock, FishingBooker,
              TripAdvisor, and Airbnb — we may earn a commission at no extra cost to you. Any booking
              or purchase you make is a transaction between you and that partner, governed by the
              partner&apos;s own terms. We are not a party to those transactions and are not
              responsible for the products, services, or accommodations partners provide. See our{' '}
              <Link href="/privacy">Privacy Policy</Link> for details on affiliate tracking.
            </p>

            <h2>Our Content</h2>
            <p>
              The articles, guides, and original photography on this site are our intellectual
              property. You&apos;re welcome to share links to our pages. Please don&apos;t republish
              our content wholesale without permission — <Link href="/contact">ask us first</Link>.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              This site and its content are provided &quot;as is,&quot; without warranties of any kind.
              To the fullest extent permitted by law, Gulf Coast Beach Vibes and its owner are not
              liable for any damages arising from your use of this site or your reliance on its
              content, including travel plans made based on our guides.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              We link to external websites (booking partners, official park pages, local businesses).
              We don&apos;t control those sites and aren&apos;t responsible for their content or
              practices.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of Alabama, USA, without regard to
              conflict-of-law principles.
            </p>

            <h2>Changes</h2>
            <p>
              We may update these terms from time to time. Changes take effect when posted here, with
              the &quot;Last updated&quot; date revised above.
            </p>

            <h2>Contact</h2>
            <p>
              Questions? Reach us through the <Link href="/contact">contact page</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
