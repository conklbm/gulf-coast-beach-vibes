import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Gulf Coast Beach Vibes — questions, corrections, local tips, or partnership inquiries.',
  alternates: { canonical: '/contact' },
}

const contactMethods = [
  {
    title: 'Email',
    description: 'Best for corrections, privacy requests, and partnership or advertising inquiries.',
    action: 'hello@gulfcoastbeachvibes.com',
    href: 'mailto:hello@gulfcoastbeachvibes.com',
    icon: '✉️',
  },
  {
    title: 'Facebook',
    description: 'Best for quick questions and trip advice — we check messages regularly.',
    action: 'Message us on Facebook',
    href: 'https://facebook.com/gulfcoastbeachvibes',
    icon: '💬',
    external: true,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-24 pb-16">
        <div className="section-container max-w-3xl text-center">
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl mb-4">
            Get in Touch
          </h1>
          <p className="text-white/60 text-lg">
            Questions, corrections, local tips, or partnerships — we read everything.
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

      {/* Contact methods */}
      <section className="bg-cream py-16">
        <div className="section-container max-w-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                {...(method.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="card p-6 flex flex-col gap-2 no-underline"
              >
                <span className="text-3xl" aria-hidden="true">{method.icon}</span>
                <h2 className="font-display font-bold text-navy text-xl">{method.title}</h2>
                <p className="text-navy/60 text-sm leading-relaxed">{method.description}</p>
                <span className="text-ocean font-semibold text-sm mt-1">{method.action}</span>
              </a>
            ))}
          </div>

          <div className="prose prose-lg max-w-none
                          prose-headings:font-display prose-headings:text-navy
                          prose-p:text-navy/70 prose-p:leading-relaxed
                          prose-a:text-ocean prose-a:no-underline hover:prose-a:underline">
            <h2>A few notes</h2>
            <p>
              <strong>Spotted something out of date?</strong> Beach conditions and business hours
              change fast on the Gulf Coast. If a guide needs a correction, tell us — we&apos;ll fix
              it.
            </p>
            <p>
              <strong>Have a local tip?</strong> The best parts of this site come from people who know
              these beaches. If you&apos;ve got a spot, a season, or a story worth sharing, we want to
              hear it.
            </p>
            <p>
              <strong>Booking issues:</strong> reservations made through our partner links (VRBO,
              Booking.com, and others) are handled by that partner — contact them directly for changes
              or refunds. More in our <Link href="/terms">Terms of Use</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
