import Link from 'next/link'
import { SOCIAL } from '@/lib/social'
import { EtsyIcon, FacebookIcon, PinterestIcon } from '@/components/SocialIcons'

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
    { href: SOCIAL.etsy,      label: 'Shop on Etsy', external: true },
    { href: SOCIAL.facebook,  label: 'Facebook Page', external: true },
    { href: SOCIAL.pinterest, label: 'Pinterest', external: true },
    { href: '/newsletter', label: 'Get the Insider Tips' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
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
            <div className="flex flex-wrap gap-2">
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10
                           hover:bg-white/20 text-sm font-medium transition-colors"
              >
                <FacebookIcon />
                Follow on Facebook
              </a>
              <a
                href={SOCIAL.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10
                           hover:bg-white/20 text-sm font-medium transition-colors"
              >
                <PinterestIcon />
                Pinterest
              </a>
              <a
                href={SOCIAL.etsy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral
                           hover:bg-coral-600 text-sm font-semibold transition-colors"
              >
                <EtsyIcon />
                Shop on Etsy
              </a>
            </div>
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
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <p className="text-white/30 text-xs">
              © {year} Gulf Coast Beach Vibes. All rights reserved.
            </p>
            <nav aria-label="Legal" className="flex items-center gap-4">
              <Link href="/privacy" className="text-white/30 hover:text-ocean-300 text-xs transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/30 hover:text-ocean-300 text-xs transition-colors">
                Terms of Use
              </Link>
              <Link href="/contact" className="text-white/30 hover:text-ocean-300 text-xs transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
