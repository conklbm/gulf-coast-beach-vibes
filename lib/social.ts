/**
 * Official Gulf Coast Beach Vibes social + shop profiles.
 * Single source of truth for footer, header, JSON-LD sameAs, and promo callouts.
 * Only add a profile here once it's verified as ours.
 */
export const SOCIAL = {
  facebook:  'https://www.facebook.com/gulfcoastbeachvibes',
  pinterest: 'https://www.pinterest.com/gulfcoastbeachvibes/',
  etsy:      'https://www.etsy.com/shop/GulfCoastBeachVibes',
} as const

export const SAME_AS: string[] = [SOCIAL.facebook, SOCIAL.pinterest, SOCIAL.etsy]
