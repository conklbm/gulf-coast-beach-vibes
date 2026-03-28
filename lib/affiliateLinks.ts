/**
 * Affiliate link registry.
 *
 * Usage in components:   href="/go/booking-gulf-shores"
 * To add a link:         add one entry here and redeploy.
 *
 * Naming convention:     {provider}-{destination}-{type?}
 *   booking-gulf-shores
 *   vrbo-destin
 *   getyourguide-pensacola-parasailing
 *   amazon-beach-umbrella
 *
 * Tracking status:
 *   // TODO: add affiliate tag  →  placeholder URL, NO earnings tracking yet
 *   // ✓ tracked                →  confirmed affiliate/tracking link, earns commission
 *   // TODO: confirm tracking   →  link exists but tracking not yet verified
 */

const affiliateLinks: Record<string, string> = {
  // ── Booking.com ─────────────────────────────────────────────────────────
  'booking-gulf-shores':        'https://www.booking.com/searchresults/us/gulf-shores.html',       // TODO: add affiliate tag
  'booking-destin':             'https://www.booking.com/searchresults/us/destin.html',             // TODO: add affiliate tag
  'booking-pensacola-beach':    'https://www.booking.com/searchresults/us/pensacola-beach.html',    // TODO: add affiliate tag
  'booking-orange-beach':       'https://www.booking.com/searchresults/us/orange-beach.html',       // TODO: add affiliate tag
  'booking-panama-city-beach':  'https://www.booking.com/searchresults/us/panama-city-beach.html',  // TODO: add affiliate tag
  'booking-lodge-gulf-state-park': 'https://www.booking.com/hotel/us/the-lodge-at-gulf-state-park.html',
  'booking-henderson-park-inn': 'https://www.booking.com/hotel/us/henderson-park-inn.html',
  'booking-hilton-pensacola':   'https://www.booking.com/hotel/us/hilton-pensacola-beach.html',
  'booking-emerald-grande':     'https://www.booking.com/hotel/us/emerald-grande-at-harborwalk-village.html',
  'booking-margaritaville-pcb': 'https://www.booking.com/hotel/us/margaritaville-pensacola-beach.html',

  // ── VRBO ────────────────────────────────────────────────────────────────
  'vrbo-gulf-shores':           'https://www.vrbo.com/vacation-rentals/usa/alabama/gulf-shores',    // TODO: add affiliate tag
  'vrbo-orange-beach':          'https://www.vrbo.com/vacation-rentals/usa/alabama/orange-beach',   // TODO: add affiliate tag
  'vrbo-destin':                'https://www.vrbo.com/vacation-rentals/usa/florida/destin',         // TODO: add affiliate tag
  'vrbo-pensacola-beach':       'https://www.vrbo.com/vacation-rentals/usa/florida/pensacola-beach', // TODO: add affiliate tag
  'vrbo-30a':                   'https://www.vrbo.com/vacation-rentals/usa/florida/santa-rosa-beach', // TODO: add affiliate tag
  'vrbo-panama-city-beach':     'https://www.vrbo.com/vacation-rentals/usa/florida/panama-city-beach', // TODO: add affiliate tag

  // ── GetYourGuide ─────────────────────────────────────────────────────────
  'gyg-gulf-shores':            'https://www.getyourguide.com/gulf-shores-l100568/',                // TODO: add affiliate tag
  'gyg-gulf-shores-fishing':    'https://www.getyourguide.com/gulf-shores-l100568/fishing/',
  'gyg-gulf-shores-dolphin':    'https://www.getyourguide.com/gulf-shores-l100568/dolphin-tour/',
  'gyg-destin':                 'https://www.getyourguide.com/destin-l2038/',
  'gyg-destin-fishing':         'https://www.getyourguide.com/destin-l2038/fishing/',
  'gyg-destin-pontoon':         'https://www.getyourguide.com/destin-l2038/boat-rental/',
  'gyg-pensacola-beach':        'https://www.getyourguide.com/pensacola-beach-l3093/',
  'gyg-pensacola-parasailing':  'https://www.getyourguide.com/pensacola-beach-l3093/parasailing/',
  'gyg-pensacola-kayak':        'https://www.getyourguide.com/pensacola-beach-l3093/kayaking/',

  // ── Amazon ───────────────────────────────────────────────────────────────
  'amazon-beach-umbrella':      'https://www.amazon.com/s?k=beach+umbrella+sand+anchor',           // TODO: add affiliate tag
  'amazon-beach-chairs':        'https://www.amazon.com/s?k=low+profile+beach+chairs',             // TODO: add affiliate tag
  'amazon-cooler':              'https://www.amazon.com/s?k=beach+cooler+insulated',               // TODO: add affiliate tag
  'amazon-dry-bag':             'https://www.amazon.com/s?k=dry+bag+waterproof',                   // TODO: add affiliate tag
  'amazon-sunscreen-spf50':     'https://www.amazon.com/s?k=reef+safe+sunscreen+spf+50',           // TODO: add affiliate tag
  'amazon-beach-tent':          'https://www.amazon.com/s?k=pop+up+beach+tent+uv',                 // TODO: add affiliate tag
  'amazon-snorkel-gear':        'https://www.amazon.com/s?k=snorkel+mask+fins+set',                // TODO: add affiliate tag
  'amazon-rash-guard':          'https://www.amazon.com/s?k=rash+guard+upf+50',                    // TODO: add affiliate tag

  // ── TripShock (✓ tracked via ?aff=themobilerundown) ──────────────────────
  'tripshock-gulf-shores-all':       'https://tripshock.com/attractions/Gulf-Shores-Orange-Beach/?aff=themobilerundown',                        // ✓ tracked
  'tripshock-dolphin-waverunner':    'https://tripshock.com/attractions/Gulf-Shores-Orange-Beach/Waverunner-Dolphin-Tours/?aff=themobilerundown', // ✓ tracked
  'tripshock-dolphin-cruises-oba':   'https://tripshock.com/attractions/Gulf-Shores-Orange-Beach/Dolphin-Cruises-and-Tours/?aff=themobilerundown', // ✓ tracked
  'tripshock-helicopter-oba':        'https://tripshock.com/attractions/Gulf-Shores-Orange-Beach/Helicopter-Tours/?aff=themobilerundown',         // ✓ tracked
  'tripshock-jetski-oba':            'https://tripshock.com/attractions/Gulf-Shores-Orange-Beach/Jet-Ski-Waverunner-Rentals/?aff=themobilerundown', // ✓ tracked
  'tripshock-boat-rentals-oba':      'https://tripshock.com/attractions/Gulf-Shores-Orange-Beach/boat-rentals/?aff=themobilerundown',             // ✓ tracked
  'tripshock-parasailing-oba':       'https://tripshock.com/attractions/Gulf-Shores-Orange-Beach/Parasailing/?aff=themobilerundown',              // ✓ tracked
  'tripshock-pensacola-navarre':     'https://tripshock.com/attractions/Pensacola-Beach-Navarre/?aff=themobilerundown',                           // ✓ tracked
  'tripshock-ocean-springs':         'https://tripshock.com/attractions/Ocean-Springs/?aff=themobilerundown',                                     // ✓ tracked
  'tripshock-biloxi-gulfport':       'https://tripshock.com/attractions/Biloxi-Gulfport/?aff=themobilerundown',                                   // ✓ tracked

  // ── Viator / Travel Payouts (✓ tracked via tp.st short links) ────────────
  'viator-gulf-coast':               'https://viator.tp.st/dDeat4RV',   // ✓ tracked — general Viator
  'viator-mobile':                   'https://viator.tp.st/hWURyRxf',   // ✓ tracked — Mobile, AL area
  'viator-bienville-bites':          'https://viator.tp.st/RJz6W2G6',   // ✓ tracked — Bienville Bites food tour (Mobile)
  'viator-fairhope-food-tour':       'https://viator.tp.st/otC4wktI',   // ✓ tracked — Taste of Fairhope food tour

  // ── FishingBooker ─────────────────────────────────────────────────────────
  'fishingbooker-gulf-coast':        'https://fishingbooker.com/#65205c1e15efd',  // TODO: confirm tracking

  // ── TripAdvisor / Travel Payouts ──────────────────────────────────────────
  'tripadvisor-gulf-coast':          'https://tripadvisor.tp.st/IBfrRntP',  // ✓ tracked

  // ── Booking.com / Travel Payouts (✓ tracked) ─────────────────────────────
  // Use this for general Booking.com links; keep destination-specific entries above for deep links
  'booking-travel-payouts':          'https://tp.media/click?shmarker=293410&promo_id=2962&source_type=link&type=click&campaign_id=84&trs=177474', // ✓ tracked

  // ── VRBO / Travel Payouts (✓ tracked) ────────────────────────────────────
  // Use this for general VRBO links; keep destination-specific entries above for deep links
  'vrbo-travel-payouts':             'https://vrbo.tp.st/rB1ITlqz',  // ✓ tracked

  // ── Hotels.com (CJ affiliate) ─────────────────────────────────────────────
  'hotels-com':                      'https://www.anrdoezrs.net/click-7185154-10772148',  // ✓ tracked

  // ── Airbnb (host referral) ───────────────────────────────────────────────
  'airbnb-referral':                 'https://www.airbnb.com/rp/bconkle',  // ✓ tracked

  // ── PDF Resources (hosted on themobilerundown.com) ───────────────────────
  'ebook-mardi-gras':                'https://www.themobilerundown.com/wp-content/uploads/2025/01/Experience-Mardi-Gras-Like-a-Local.pdf',
  'ebook-mardi-gras-schedule-2026':  'https://www.themobilerundown.com/wp-content/uploads/2026/02/2026-MARDI-GRAS-rundown-parade-schedule.pdf',
}

export default affiliateLinks
