// Rich content for full-content destination pages.
// Stubs are generated from destinations.ts for the remaining 8.

export interface Beach {
  name: string
  description: string
}

export interface StayListing {
  name: string
  type: 'hotel' | 'resort' | 'vacation-rental' | 'inn'
  description: string
  affiliateUrl: string
  provider: 'booking' | 'vrbo' | 'generic'
}

export interface Restaurant {
  name: string
  cuisine: string
  description: string
  priceRange: '$' | '$$' | '$$$' | '$$$$'
}

export interface Activity {
  name: string
  description: string
  affiliateUrl?: string
  provider?: 'getyourguide' | 'generic'
}

export interface DestinationContent {
  slug: string
  beaches: Beach[]
  whereToStay: StayListing[]
  whereToEat: Restaurant[]
  activities: Activity[]
  gettingThere: string
  localTip: string
}

export const destinationContent: Record<string, DestinationContent> = {
  'gulf-shores': {
    slug: 'gulf-shores',
    beaches: [
      {
        name: 'Gulf Shores Public Beach',
        description:
          'The main beach in town — wide, clean, and well-maintained with lifeguards in peak season. Parking is paid but generally available. Great for families and first-time visitors who want all the amenities close by.',
      },
      {
        name: 'Gulf State Park Beach',
        description:
          'A short drive east, this is where the beach breathes. Gulf State Park has over 2 miles of protected shoreline with dune boardwalks, sea turtle nesting areas, and far fewer umbrellas. Worth the small park entry fee.',
      },
      {
        name: 'Bon Secour National Wildlife Refuge',
        description:
          'For the adventurous: undeveloped beach accessed via hiking trails through maritime forest. You might have a stretch of Gulf beach entirely to yourself. No facilities — pack everything in.',
      },
    ],
    whereToStay: [
      {
        name: 'The Lodge at Gulf State Park (Hilton)',
        type: 'resort',
        description:
          "The showstopper of Gulf Shores accommodations. A full-service Hilton resort built into Gulf State Park with direct beach access, multiple pools, a spa, and miles of walking trails out your back door. It's expensive, but it's worth it for a special trip.",
        affiliateUrl: 'https://www.booking.com/hotel/us/the-lodge-at-gulf-state-park.html', // TODO: Replace with tracked affiliate link
        provider: 'booking',
      },
      {
        name: 'Gulf-Front Vacation Rentals via VRBO',
        type: 'vacation-rental',
        description:
          'Gulf Shores has an enormous selection of condos and houses right on the beach. VRBO is the best way to find them. For families or groups, a condo beats a hotel every time — you get a full kitchen, a balcony, and more space for less per person.',
        affiliateUrl: 'https://www.vrbo.com/vacation-rentals/usa/alabama/gulf-shores', // TODO: Replace with tracked affiliate link
        provider: 'vrbo',
      },
      {
        name: 'Gulf Shores Beachside Inn',
        type: 'hotel',
        description:
          'A more budget-friendly option right in town with comfortable rooms and easy beach access. Good location for exploring restaurants on foot. Check current availability.',
        affiliateUrl: 'https://www.booking.com/searchresults/us/gulf-shores.html', // TODO: Replace with tracked affiliate link
        provider: 'booking',
      },
    ],
    whereToEat: [
      {
        name: "Lulu's",
        cuisine: 'Seafood / Gulf Coast',
        description:
          "Jimmy Buffett's sister Lucy Buffett opened this place and it's become a Gulf Shores institution. Great Gulf seafood, a big outdoor deck, live music, and a vibe that's hard to beat. Expect a wait on weekends — worth it.",
        priceRange: '$$',
      },
      {
        name: 'The Hangout',
        cuisine: 'American / Seafood',
        description:
          "Right on the beach, The Hangout is the quintessential Gulf Shores family restaurant. Big portions, live entertainment, foam parties for kids, and every kind of fried seafood you could want. Touristy? Sure. Fun? Absolutely.",
        priceRange: '$$',
      },
      {
        name: 'Gulf Shores Steamer',
        cuisine: 'Seafood',
        description:
          "Old-school Gulf Coast dining done right. Order a bucket of shrimp or a pound of crab claws, grab some butter and Old Bay, and get messy. This is how locals eat seafood.",
        priceRange: '$',
      },
      {
        name: "Hazel's Nook",
        cuisine: 'Breakfast / Brunch',
        description:
          "The go-to breakfast spot for locals. Small, unpretentious, and consistently great. Get there early — they run out of the good stuff by 10 AM.",
        priceRange: '$',
      },
    ],
    activities: [
      {
        name: 'Gulf State Park Hiking & Biking',
        description:
          'Over 28 miles of trails through coastal pine forest, dunes, and lakeside paths. Rent a bike at the park and spend a morning exploring. The Nature Center has great info on local wildlife.',
      },
      {
        name: 'Deep-Sea Fishing Charter',
        description:
          'Gulf Shores has dozens of fishing charters operating out of the local marinas. Red snapper, amberjack, and grouper are the big targets. Half-day and full-day trips available.',
        affiliateUrl: 'https://www.getyourguide.com/gulf-shores-l100568/', // TODO: Replace with tracked affiliate link
        provider: 'getyourguide',
      },
      {
        name: 'Waterville USA',
        description:
          "Alabama's largest water park, right in Gulf Shores. Perfect for a hot day when the beach crowd gets thick. Kids love it.",
      },
      {
        name: 'Gulf State Park Pier',
        description:
          'One of the longest fishing piers on the Gulf Coast. You can fish for free with your pier ticket, or just walk to the end and watch the pelicans. Spectacular sunrise spot.',
      },
      {
        name: 'Alabama Gulf Coast Zoo',
        description:
          'Affectionately known as "the little zoo that could" after surviving multiple hurricanes, this small but beloved zoo is a great half-day activity for families.',
      },
    ],
    gettingThere:
      "Gulf Shores is about 60 miles south of Mobile, AL on Highway 59. The closest airport is Pensacola International (PNS), about an hour east — often cheaper than flying into Mobile. From I-10, take Exit 44 south onto Highway 59 and drive straight down to the beach. No toll roads to worry about. Parking at the public beach is metered — bring quarters or use the ParkMobile app.",
    localTip:
      "Skip the public beach on the Fourth of July and Labor Day weekends — it's standing room only. Instead, drive 15 minutes east to Gulf State Park Beach or west toward Bon Secour. Same gorgeous water, a fraction of the crowd. Also: the side streets just north of the beach often have free parking if you're willing to walk a few blocks.",
  },

  'destin': {
    slug: 'destin',
    beaches: [
      {
        name: 'Henderson Beach State Park',
        description:
          "One of the most beautiful and least-crowded stretches of beach in Destin. The park protects 30+ acres of dunes and beach from development, keeping it pristine. There's a small parking fee but it's absolutely worth it. Arrive early in summer.",
      },
      {
        name: 'Crystal Beach',
        description:
          'The neighborhood beach east of the Destin Bridge. Good residential beach with fewer tourists than the main public areas. Crystal Beach Drive has parking if you scout around.',
      },
      {
        name: 'Crab Island Sandbar',
        description:
          "Not really a beach — more of a shallow sandbar in Destin Harbor that gets crowded with boats every summer weekend. Rent a pontoon, anchor in 2 feet of water, and join the floating party. One of the most uniquely Destin experiences you can have.",
      },
      {
        name: 'Norriego Point Beach',
        description:
          'A hidden gem right at Destin Pass. Calm water on the harbor side makes it great for kids and kayaking. Very few tourists know about it.',
      },
    ],
    whereToStay: [
      {
        name: 'Henderson Park Inn',
        type: 'inn',
        description:
          'Adjacent to Henderson Beach State Park, this adults-only beach inn is the most romantic place to stay in Destin. Breakfast included, direct beach access, and a quieter vibe than the condo towers. Books out months in advance.',
        affiliateUrl: 'https://www.booking.com/hotel/us/henderson-park-inn.html', // TODO: Replace with tracked affiliate link
        provider: 'booking',
      },
      {
        name: 'Destin Beachfront Condos via VRBO',
        type: 'vacation-rental',
        description:
          "Destin's condo rental market is massive. You can find everything from a studio to a 5-bedroom penthouse right on the water. VRBO has the best selection — filter by pool access and private beach for the full experience.",
        affiliateUrl: 'https://www.vrbo.com/vacation-rentals/usa/florida/destin', // TODO: Replace with tracked affiliate link
        provider: 'vrbo',
      },
      {
        name: 'Emerald Grande at HarborWalk Village',
        type: 'hotel',
        description:
          "Spectacular views over Destin Harbor from one of the tallest buildings on the Emerald Coast. The location at HarborWalk Village puts you steps from great restaurants and the fishing charter docks.",
        affiliateUrl: 'https://www.booking.com/hotel/us/emerald-grande-at-harborwalk-village.html', // TODO: Replace with tracked affiliate link
        provider: 'booking',
      },
    ],
    whereToEat: [
      {
        name: "Boshamps Seafood & Oyster House",
        cuisine: 'Seafood',
        description:
          "Sits right on the water with a dock you can arrive by boat. Fresh Gulf oysters, incredible grilled fish, and sunsets that will make you want to cancel your flight home. Consistently one of the best restaurants in Destin.",
        priceRange: '$$$',
      },
      {
        name: "AJ's Seafood & Oyster Bar",
        cuisine: 'Seafood / Bar',
        description:
          "The quintessential Destin waterfront experience. Right on the harbor, with live music most nights, great fried shrimp, and an energy that captures what this town is all about. Go at sunset.",
        priceRange: '$$',
      },
      {
        name: "McGuire's Irish Pub",
        cuisine: 'Irish / American',
        description:
          "A Destin institution. Famous for their burgers, steaks, and the ceiling covered in dollar bills signed by decades of visitors. You sign one and pin it up yourself. Try the Senator's Bean Soup — it's been on the menu since day one.",
        priceRange: '$$',
      },
      {
        name: "Dewey Destin's Harborside",
        cuisine: 'Seafood',
        description:
          "Family-run restaurant that's been serving fresh-caught seafood since 1982. No frills, just excellent fish. The boiled shrimp are famous — order them by the pound.",
        priceRange: '$',
      },
    ],
    activities: [
      {
        name: 'Crab Island Pontoon Rental',
        description:
          "Rent a pontoon for the day and anchor at the Crab Island sandbar. Floating vendors will bring you food and drinks while you wade in crystal-clear water. It's a uniquely Destin experience that shouldn't be missed.",
        affiliateUrl: 'https://www.getyourguide.com/destin-l2038/', // TODO: Replace with tracked affiliate link
        provider: 'getyourguide',
      },
      {
        name: 'Fishing Charter — World\'s Luckiest Fishing Village',
        description:
          "Destin earned this nickname for a reason. The 100-fathom curve is closer to shore here than anywhere else on the Gulf Coast, putting big-game fish within easy reach. Half-day bay trips and full-day offshore charters both available.",
        affiliateUrl: 'https://www.getyourguide.com/destin-l2038/fishing/', // TODO: Replace with tracked affiliate link
        provider: 'getyourguide',
      },
      {
        name: 'Henderson Beach State Park Hiking',
        description:
          "Over a mile of nature trails through coastal scrub and dune ecosystems that most tourists never see. Great for birding and morning walks before the beach gets crowded.",
      },
      {
        name: 'HarborWalk Village',
        description:
          "The heart of Destin's waterfront scene. Shops, restaurants, a boardwalk, live entertainment, and front-row seats to the evening fishing fleet coming in. The best free entertainment in Destin.",
      },
      {
        name: 'Snorkeling the Jetties at Destin Pass',
        description:
          "The rock jetties at Destin Pass create an underwater habitat teeming with fish, crabs, and sea life. Snorkel gear rental is available nearby. Best visibility early morning.",
      },
    ],
    gettingThere:
      "Destin is right off US-98 on the Emerald Coast, about 45 minutes east of Pensacola. The closest airport is Northwest Florida Beaches International (ECP) in Panama City Beach, about 45 minutes east — it has direct flights from many major cities. Alternatively, fly into Pensacola (PNS) to the west. Destin has no public transit to speak of, so a rental car is essential. The Mid-Bay Bridge (toll) cuts across Choctawhatchee Bay and saves 30+ minutes versus going around on US-98.",
    localTip:
      "The Emerald Coast Miracle Strip is US-98 — and it gets absolutely brutal in summer. If you're staying west of the bridge, use Harbor Boulevard and the back streets to get around. Also: Destin's famous green water isn't green all year. Winter storms can cloud it up, and summer afternoons after a storm can too. The clearest water is typically in May-June and September-October, outside peak season.",
  },

  'pensacola-beach': {
    slug: 'pensacola-beach',
    beaches: [
      {
        name: 'Casino Beach',
        description:
          'The main beach at Pensacola Beach, named for the old casino that used to stand here. Wide, well-maintained, with the iconic Pensacola Beach sign perfect for photos. Beach chair and umbrella rentals available.',
      },
      {
        name: 'Fort Pickens Beach (Gulf Islands National Seashore)',
        description:
          "Drive west to the far end of Santa Rosa Island and you'll find some of the most pristine beach in the country — protected by the National Park Service. The white quartz sand here is surreal. Pack a picnic and plan to stay all day.",
      },
      {
        name: 'Quietwater Beach (Sound Side)',
        description:
          "The bayside beach on Santa Rosa Sound — calm, shallow, warm water, and kid-perfect. Great if ocean waves are too rough for little ones. The Quietwater Beach Boardwalk is right here with restaurants and nightlife.",
      },
      {
        name: 'Opal Beach',
        description:
          "Part of Gulf Islands National Seashore, east of Casino Beach. More natural setting, smaller crowds, and some of the best shelling on the island. Bring water — no facilities out here.",
      },
    ],
    whereToStay: [
      {
        name: 'Hilton Pensacola Beach',
        type: 'hotel',
        description:
          "The flagship hotel right at Casino Beach. Full amenities, multiple pools, direct beach access, on-site dining, and a prime location for exploring the boardwalk and Quietwater Beach. The rooms on higher floors have spectacular Gulf views.",
        affiliateUrl: 'https://www.booking.com/hotel/us/hilton-pensacola-beach.html', // TODO: Replace with tracked affiliate link
        provider: 'booking',
      },
      {
        name: 'Margaritaville Beach Hotel',
        type: 'hotel',
        description:
          "Right on Pensacola Beach with a fun, island-casual vibe. The pool deck is excellent, the food is solid, and the location is perfect for walking to restaurants and the beach boardwalk.",
        affiliateUrl: 'https://www.booking.com/hotel/us/margaritaville-pensacola-beach.html', // TODO: Replace with tracked affiliate link
        provider: 'booking',
      },
      {
        name: 'Pensacola Beach Vacation Rentals via VRBO',
        type: 'vacation-rental',
        description:
          "Great condo options all along the beachfront. The advantage of a condo rental is the balcony Gulf view at a lower per-night cost than the big hotels.",
        affiliateUrl: 'https://www.vrbo.com/vacation-rentals/usa/florida/pensacola-beach', // TODO: Replace with tracked affiliate link
        provider: 'vrbo',
      },
    ],
    whereToEat: [
      {
        name: "Peg Leg Pete's",
        cuisine: 'Seafood',
        description:
          "The first place locals send you for seafood in Pensacola Beach. The oysters are legendary — get them a dozen ways. Unpretentious, affordable, and consistently packed. Sit on the outdoor deck if you can.",
        priceRange: '$$',
      },
      {
        name: "Flounder's Chowder House",
        cuisine: 'Seafood',
        description:
          "Dockside dining with a lively atmosphere and some of the best chowder on the Gulf Coast. The fried grouper sandwich is not to be missed. Great for families and large groups.",
        priceRange: '$$',
      },
      {
        name: "Shaggy's Pensacola Beach",
        cuisine: 'Seafood / American',
        description:
          "Beachfront dining with live music and a menu heavy on fresh Gulf seafood. Good frozen drinks, a great deck, and a laid-back vibe that embodies everything Pensacola Beach is about.",
        priceRange: '$$',
      },
      {
        name: "Crabs We Got 'Em",
        cuisine: 'Seafood',
        description:
          "The name says it all. This waterfront spot specializes in whole blue crabs, steamed shrimp, and no-frills Gulf seafood done exactly right. Cash-friendly and genuinely delicious.",
        priceRange: '$',
      },
    ],
    activities: [
      {
        name: 'Fort Pickens Historic Tour',
        description:
          "A 19th-century masonry fort at the tip of Santa Rosa Island, part of Gulf Islands National Seashore. Geronimo was held prisoner here. The fort, the beach, and the drive out are all worth the park entry fee.",
      },
      {
        name: 'National Naval Aviation Museum',
        description:
          "Free admission and absolutely world-class. One of the largest aviation museums in the world — 150+ aircraft displayed in 300,000 square feet. If you're even slightly into planes, set aside half a day.",
      },
      {
        name: 'Parasailing & Water Sports',
        description:
          "Several operators run parasailing, jet ski rentals, paddleboard rentals, and boat tours right from Casino Beach. A great way to see the coastline from above.",
        affiliateUrl: 'https://www.getyourguide.com/pensacola-beach-l3093/', // TODO: Replace with tracked affiliate link
        provider: 'getyourguide',
      },
      {
        name: 'Kayaking & Paddleboard Tours',
        description:
          "The sound side of Santa Rosa Island is perfect for flat-water paddling — calm, clear, and usually dolphin territory. Rentals and guided tours available at Quietwater Beach.",
        affiliateUrl: 'https://www.getyourguide.com/pensacola-beach-l3093/kayaking/', // TODO: Replace with tracked affiliate link
        provider: 'getyourguide',
      },
      {
        name: 'Blue Angels Practice Shows (Free)',
        description:
          "The Blue Angels are based at NAS Pensacola and practice over the bay on Tuesday and Wednesday mornings spring through fall. Head to Barrancas Beach or the museum grounds for a free front-row show.",
      },
    ],
    gettingThere:
      "Pensacola Beach is on Santa Rosa Island, reached via the Bob Sikes Bridge (Pensacola Beach Road) from Gulf Breeze. The bridge is toll-free. Pensacola International Airport (PNS) is about 30 minutes north in mainland Pensacola and has regular direct flights from the Southeast and major hubs. From I-10, take Exit 13 south toward Pensacola/Gulf Breeze, then cross the bay to the island. Parking at Casino Beach is metered — the garage on Via de Luna fills up fast on summer weekends.",
    localTip:
      "The quartz sand at Pensacola Beach is so fine and bright white that it squeaks when you walk on it — this is called 'singing sand' and it only happens with ultra-pure quartz. It's not just marketing. Also: the water at Fort Pickens is noticeably clearer than at the main Casino Beach because there's no development disturbing the seafloor. The drive out there at sunset, with the fort silhouetted against the sky, is genuinely one of the most beautiful things on the Gulf Coast.",
  },
}
