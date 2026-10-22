import { SOCIAL } from '@/lib/social'
import { EtsyIcon, FacebookIcon, PinterestIcon } from '@/components/SocialIcons'

interface EtsyPromoProps {
  /** Optional post-specific lead-in, e.g. "Planning a fall beach trip?" */
  lead?: string
}

/**
 * In-article callout promoting the GCBV Etsy shop + social follow line.
 * Place mid-post or near the end — never at the top of an article.
 * Uses `not-prose` so the article's typography styles don't leak in.
 */
export default function EtsyPromo({ lead }: EtsyPromoProps) {
  return (
    <aside
      className="not-prose my-10 rounded-2xl border border-coral-200 bg-gradient-to-br from-sand-100 to-coral-100 p-6 sm:p-7 shadow-sm"
      aria-label="Gulf Coast Beach Vibes Etsy shop"
    >
      <div className="flex items-start gap-4">
        <span
          className="hidden sm:flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-full bg-coral text-white"
          aria-hidden="true"
        >
          <EtsyIcon className="w-5 h-5" />
        </span>
        <div className="min-w-0">
          <p className="text-coral-700 text-xs font-semibold tracking-widest uppercase mb-1">
            New: Our Etsy Shop
          </p>
          <p className="font-display font-bold text-navy text-xl leading-snug mb-2">
            {lead ? `${lead} ` : ''}Take the beach vibes home with you.
          </p>
          <p className="text-navy/70 text-sm leading-relaxed mb-4">
            We just opened the Gulf Coast Beach Vibes shop on Etsy with beach-vibe designs made for
            people who love this stretch of sand as much as we do. A fun keepsake from your trip, or a
            gift for the beach lover in your life.
          </p>
          <a
            href={SOCIAL.etsy}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-coral text-white text-sm font-semibold
                       hover:bg-coral-600 transition-colors shadow-sm"
          >
            Shop the collection on Etsy
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="mt-4 text-navy/60 text-sm flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>Follow us for daily beach vibes:</span>
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-ocean hover:underline"
            >
              <FacebookIcon className="w-4 h-4" /> Facebook
            </a>
            <a
              href={SOCIAL.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-ocean hover:underline"
            >
              <PinterestIcon className="w-4 h-4" /> Pinterest
            </a>
          </p>
        </div>
      </div>
    </aside>
  )
}
