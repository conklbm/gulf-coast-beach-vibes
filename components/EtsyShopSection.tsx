import { SOCIAL } from '@/lib/social'
import { EtsyIcon, FacebookIcon, PinterestIcon } from '@/components/SocialIcons'

/** Homepage band promoting the new GCBV Etsy shop + social follows. */
export default function EtsyShopSection() {
  return (
    <section className="py-14 md:py-16 bg-cream" aria-label="Shop Gulf Coast Beach Vibes on Etsy">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-3xl bg-navy text-white px-6 py-10 sm:px-10 md:px-14 md:py-12 shadow-lg">
          <div
            className="pointer-events-none absolute -right-16 -top-16 w-64 h-64 rounded-full bg-coral/20 blur-2xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-10 -bottom-20 w-72 h-72 rounded-full bg-ocean/20 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral text-white text-xs font-semibold tracking-widest uppercase mb-4">
                <EtsyIcon className="w-3.5 h-3.5" /> Just Opened
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight mb-3">
                Shop Gulf Coast Beach Vibes on Etsy
              </h2>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl">
                Our brand-new Etsy shop brings the beach vibes home. Browse our Gulf Coast beach-vibe
                designs, perfect as a keepsake from your trip or a gift for the beach lover in your life.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:items-end">
              <a
                href={SOCIAL.etsy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-coral text-white
                           font-semibold hover:bg-coral-600 transition-colors shadow-md whitespace-nowrap"
              >
                Shop the Collection
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <span>Follow us:</span>
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Gulf Coast Beach Vibes on Facebook"
                  className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <FacebookIcon />
                </a>
                <a
                  href={SOCIAL.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Gulf Coast Beach Vibes on Pinterest"
                  className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <PinterestIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
