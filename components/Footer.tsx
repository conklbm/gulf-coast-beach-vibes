import Link from 'next/link'

const footerLinks = {
  Explore: [
    { href: '/destinations', label: 'All Destinations' },
    { href: '/activities',   label: 'Activities' },
    { href: '/stay',         label: 'Places to Stay' },
    { href: '/eat',          label: 'Restaurants & Food' },
    { href: '/blog',         label: 'Blog' },
  ],
  Destinations: [
    { href: '/destinations/gulf-shores',      label: 'Gulf Shores, AL' },
    { href: '/destinations/destin',           label: 'Destin, FL' },
    { href: '/destinations/pensacola-beach',  label: 'Pensacola Beach, FL' },
    { href: '/destinations/orange-beach',     label: 'Orange Beach, AL' },
    { href: '/destinations/panama-city-beach',label: 'Panama City Beach, FL' },
  ],
  Connect: [
    { href: 'https://facebook.com/gulfcoastbeachvibes', label: 'Facebook Page', external: true },
    { href: '/newsletter', label: 'Get the Insider Tips' },
    { href: '/about', label: 'About' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      {/* Wave top */}
      <div className="wave-divider">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-16 fill-cream block"
        >
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4" aria-label="Home">
              <span className="text-2xl" aria-hidden="true">🌊</span>
              <div className="leading-tight">
                <div className="font-display font-bold text-white text-base leading-none">Gulf Coast</div>
                <div className="font-display font-bold text-ocean-300 text-base leading-none">Beach Vibes</div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Your local guide to the Gulf Coast&apos;s most beautiful beaches &mdash; from Dauphin Island, AL to Panama City Beach, FL.
            </p>
            <a
              href="https://facebook.com/gulfcoastbeachvibes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10
                         hover:bg-white/20 text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Follow on Facebook
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="font-display font-semibold text-white text-base mb-4">{group}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-ocean-300 text-sm transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-ocean-300 text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">
          {/* Affiliate disclosure */}
          <p className="text-white/40 text-xs leading-relaxed mb-4 max-w-2xl">
            <strong className="text-white/50">Affiliate Disclosure:</strong> Gulf Coast Beach Vibes participates in affiliate programs
            including Booking.com, VRBO, GetYourGuide, and Amazon Associates. We may earn a commission when you book or
            purchase through our links, at no extra cost to you. We only recommend places and products we genuinely believe in.
          </p>
          <p className="text-white/30 text-xs">
            © {year} Gulf Coast Beach Vibes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
