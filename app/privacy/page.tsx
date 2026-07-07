import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Gulf Coast Beach Vibes collects, uses, and protects your information — including analytics, newsletter, and affiliate link tracking.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-24 pb-16">
        <div className="section-container max-w-3xl text-center">
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl mb-4">
            Privacy Policy
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
              Gulf Coast Beach Vibes (&quot;we,&quot; &quot;us,&quot; or &quot;this site&quot;) is a travel
              guide operated from Mobile, Alabama, available at gulfcoastbeachvibes.com. This policy
              explains what information we collect when you visit, how we use it, and the choices you
              have.
            </p>

            <h2>Information We Collect</h2>

            <h3>Information you give us</h3>
            <p>
              The only information you provide directly is your <strong>email address</strong>, if you
              choose to subscribe to our newsletter. Subscribing is optional, and you can unsubscribe at
              any time using the link in any newsletter email.
            </p>

            <h3>Information collected automatically</h3>
            <p>
              Like most websites, we collect standard usage data when you visit: pages viewed,
              approximate location (city/region level), device and browser type, and how you found the
              site. This is collected through the analytics services listed below and is used in
              aggregate — we do not use it to identify you personally.
            </p>

            <h2>Third-Party Services We Use</h2>
            <p>
              We share data only with the service providers needed to run this site. Each of these
              processes data under its own privacy policy:
            </p>
            <ul>
              <li>
                <strong>Google Analytics 4</strong> — website usage analytics. Uses cookies to measure
                visits and traffic sources.
              </li>
              <li>
                <strong>Vercel</strong> — website hosting and privacy-friendly analytics (no
                cross-site tracking cookies).
              </li>
              <li>
                <strong>Beehiiv</strong> — our newsletter platform. If you subscribe, your email
                address is stored with Beehiiv and used only to send you our newsletter.
              </li>
            </ul>

            <h2>Affiliate Links &amp; Cookies</h2>
            <p>
              This site earns revenue through affiliate partnerships. When you click a booking or
              product link (for example, links labeled with VRBO, Booking.com, or &quot;Book
              Now&quot;), you are redirected to a partner site — including VRBO/Expedia Group,
              Booking.com, Amazon, Viator, TripShock, FishingBooker, TripAdvisor, Airbnb, and partners
              in the Travelpayouts network. These partners may set cookies to attribute your booking or
              purchase to this site, which is how we earn a commission at no extra cost to you. We do
              not see your payment details or booking information — that relationship is between you
              and the partner site.
            </p>

            <h2>Cookies</h2>
            <p>
              Cookies on this site come from the analytics and affiliate services described above. You
              can block or delete cookies in your browser settings; the site works fine without them.
            </p>

            <h2>How We Use Information</h2>
            <ul>
              <li>To understand which guides and destinations are most useful, so we can write better ones</li>
              <li>To send the newsletter you signed up for</li>
              <li>To earn affiliate commissions that keep the site free</li>
            </ul>
            <p>
              We do not sell your personal information, and we do not send marketing on behalf of third
              parties.
            </p>

            <h2>Your Choices &amp; Rights</h2>
            <ul>
              <li>
                <strong>Newsletter:</strong> unsubscribe anytime via the link in any email, or{' '}
                <Link href="/contact">contact us</Link> and we&apos;ll remove you.
              </li>
              <li>
                <strong>Analytics:</strong> block cookies in your browser, or use Google&apos;s
                Analytics opt-out browser add-on.
              </li>
              <li>
                <strong>Access or deletion:</strong> to ask what data we hold about you (typically just
                a newsletter email address) or to have it deleted, <Link href="/contact">contact us</Link>{' '}
                and we&apos;ll handle it promptly.
              </li>
            </ul>

            <h2>Children&apos;s Privacy</h2>
            <p>
              This site is a general-audience travel guide and is not directed at children under 13. We
              do not knowingly collect personal information from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              If we change this policy, we&apos;ll update it here and revise the &quot;Last
              updated&quot; date above.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy? Reach us through the <Link href="/contact">contact page</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
