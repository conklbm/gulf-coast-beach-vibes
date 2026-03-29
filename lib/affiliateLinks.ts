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
  // TODO: Replace each with a tp.st deep link from your TravelPayouts dashboard.
  // Instructions: TP Dashboard → Tools → Links → paste the booking.com URL → Generate.
  // Until then these all route through the tracked general link so no revenue is lost.
  'booking-gulf-shores':        'https://tp.media/click?shmarker=293410&promo_id=2962&source_type=link&type=click&campaign_id=84&trs=177474', // fallback tracked — swap for tp.st deep link
  'booking-destin':             'https://tp.media/click?shmarker=293410&promo_id=2962&source_type=link&type=click&campaign_id=84&trs=177474', // fallback tracked — swap for tp.st deep link
  'booking-pensacola-beach':    'https://tp.media/click?shmarker=293410&promo_id=2962&source_type=link&type=click&campaign_id=84&trs=177474', // fallback tracked — swap for tp.st deep link
  'booking-orange-beach':       'https://tp.media/click?shmarker=293410&promo_id=2962&source_type=link&type=click&campaign_id=84&trs=177474', // fallback tracked — swap for tp.st deep link
  'booking-panama-city-beach':  'https://tp.media/click?shmarker=293410&promo_id=2962&source_type=link&type=click&campaign_id=84&trs=177474', // fallback tracked — swap for tp.st deep link
  'booking-fort-walton-beach':  'https://tp.media/click?shmarker=293410&promo_id=2962&source_type=link&type=click&campaign_id=84&trs=177474', // fallback tracked — swap for tp.st deep link
  'booking-navarre-beach':      'https://tp.media/click?shmarker=293410&promo_id=2962&source_type=link&type=click&campaign_id=84&trs=177474', // fallback tracked — swap for tp.st deep link
  'booking-gulf-breeze':        'https://tp.media/click?shmarker=293410&promo_id=2962&source_type=link&type=click&campaign_id=84&trs=177474', // fallback tracked — swap for tp.st deep link
  'booking-miramar-beach':      'https://tp.media/click?shmarker=293410&promo_id=2962&source_type=link&type=click&campaign_id=84&trs=177474', // fallback tracked — swap for tp.st deep link
  'booking-seaside-30a':        'https://tp.media/click?shmarker=293410&promo_id=2962&source_type=link&type=click&campaign_id=84&trs=177474', // fallback tracked — swap for tp.st deep link
  'booking-dauphin-island':     'https://tp.media/click?shmarker=293410&promo_id=2962&source_type=link&type=click&campaign_id=84&trs=177474', // fallback tracked — swap for tp.st deep link
  // Specific property deep links — replace with tp.st versions from your TP dashboard
  'booking-lodge-gulf-state-park': 'https://tp.media/click?shmarker=293410&promo_id=2962&source_type=link&type=click&campaign_id=84&trs=177474', // TODO: deep link to Lodge at Gulf State Park
  'booking-henderson-park-inn': 'https://tp.media/click?shmarker=293410&promo_id=2962&source_type=link&type=click&campaign_id=84&trs=177474',    // TODO: deep link to Henderson Park Inn
  'booking-hilton-pensacola':   'https://tp.media/click?shmarker=293410&promo_id=2962&source_type=link&type=click&campaign_id=84&trs=177474',    // TODO: deep link to Hilton Pensacola Beach
  'booking-emerald-grande':     'https://tp.media/click?shmarker=293410&promo_id=2962&source_type=link&type=click&campaign_id=84&trs=177474',    // TODO: deep link to Emerald Grande
  'booking-margaritaville-pcb': 'https://tp.media/click?shmarker=293410&promo_id=2962&source_type=link&type=click&campaign_id=84&trs=177474',    // TODO: deep link to Margaritaville PCB
  'booking-sandestin':          'https://tp.media/click?shmarker=293410&promo_id=2962&source_type=link&type=click&campaign_id=84&trs=177474',    // TODO: deep link to Sandestin

  // ── VRBO ────────────────────────────────────────────────────────────────
  // TODO: Replace each with a tp.st deep link from your TravelPayouts dashboard.
  // Instructions: TP Dashboard → Tools → Links → paste the vrbo.com URL → Generate.
  // Until then these all route through the tracked general link.
  'vrbo-gulf-shores':           'https://vrbo.tp.st/rB1ITlqz',  // fallback tracked — swap for destination deep link
  'vrbo-orange-beach':          'https://vrbo.tp.st/rB1ITlqz',  // fallback tracked — swap for destination deep link
  'vrbo-destin':                'https://vrbo.tp.st/rB1ITlqz',  // fallback tracked — swap for destination deep link
  'vrbo-pensacola-beach':       'https://vrbo.tp.st/rB1ITlqz',  // fallback tracked — swap for destination deep link
  'vrbo-30a':                   'https://vrbo.tp.st/rB1ITlqz',  // fallback tracked — swap for destination deep link
  'vrbo-panama-city-beach':     'https://vrbo.tp.st/rB1ITlqz',  // fallback tracked — swap for destination deep link
  'vrbo-fort-walton-beach':     'https://vrbo.tp.st/rB1ITlqz',  // fallback tracked — swap for destination deep link
  'vrbo-navarre-beach':         'https://vrbo.tp.st/rB1ITlqz',  // fallback tracked — swap for destination deep link
  'vrbo-gulf-breeze':           'https://vrbo.tp.st/rB1ITlqz',  // fallback tracked — swap for destination deep link
  'vrbo-miramar-beach':         'https://vrbo.tp.st/rB1ITlqz',  // fallback tracked — swap for destination deep link
  'vrbo-seaside-30a':           'https://vrbo.tp.st/rB1ITlqz',  // fallback tracked — swap for destination deep link
  'vrbo-dauphin-island':        'https://vrbo.tp.st/rB1ITlqz',  // fallback tracked — swap for destination deep link

  // ── GetYourGuide ─────────────────────────────────────────────────────────
  // TODO: Replace untracked GYG links with tp.st deep links from TravelPayouts dashboard.
  'gyg-gulf-shores':            'https://viator.tp.st/dDeat4RV',  // fallback to Viator tracked — swap for GYG tp.st when available
  'gyg-gulf-shores-fishing':    'https://www.getyourguide.com/gulf-shores-l100568/fishing/',     // TODO: add tp.st tracking
  'gyg-gulf-shores-dolphin':    'https://www.getyourguide.com/gulf-shores-l100568/dolphin-tour/', // TODO: add tp.st tracking
  'gyg-destin':                 'https://www.getyourguide.com/destin-l2038/',                     // TODO: add tp.st tracking
  'gyg-destin-fishing':         'https://www.getyourguide.com/destin-l2038/fishing/',             // TODO: add tp.st tracking
  'gyg-destin-pontoon':         'https://www.getyourguide.com/destin-l2038/boat-rental/',         // TODO: add tp.st tracking
  'gyg-pensacola-beach':        'https://www.getyourguide.com/pensacola-beach-l3093/',            // TODO: add tp.st tracking
  'gyg-pensacola-parasailing':  'https://www.getyourguide.com/pensacola-beach-l3093/parasailing/', // TODO: add tp.st tracking
  'gyg-pensacola-kayak':        'https://www.getyourguide.com/pensacola-beach-l3093/kayaking/',   // TODO: add tp.st tracking

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
  // TODO: Replace with tp.st link from TravelPayouts. FishingBooker pays 20% commission.
  // In TP: Tools → Links → paste https://fishingbooker.com/ → Generate
  'fishingbooker-gulf-coast':        'https://fishingbooker.tp.st/lQGpTKBV',  // ✓ tracked (same as used in destination content)

  // ── Rentalcars.com / TravelPayouts ────────────────────────────────────────
  // For fly-in visitors and road trip posts. Available in TravelPayouts — join program first.
  // TODO: Generate tp.st link from TP dashboard after joining Rentalcars program.
  'rentalcars-pensacola':            'https://www.rentalcars.com/Airport/US/PNS/',  // TODO: add tp.st tracking — PNS airport
  'rentalcars-destin':               'https://www.rentalcars.com/Airport/US/VPS/',  // TODO: add tp.st tracking — VPS airport
  'rentalcars-panama-city-beach':    'https://www.rentalcars.com/Airport/US/ECP/',  // TODO: add tp.st tracking — ECP airport
  'rentalcars-mobile':               'https://www.rentalcars.com/Airport/US/MOB/',  // TODO: add tp.st tracking — MOB airport

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
