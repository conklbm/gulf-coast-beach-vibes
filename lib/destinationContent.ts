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

  'dauphin-island': {
    slug: 'dauphin-island',
    beaches: [
      {
        name: 'East Beach',
        description:
          'The main public beach on the east end of the island — wide, nearly white sand with calm Gulf waters. There\'s a boardwalk, picnic pavilions, restrooms, and paid parking. Lifeguards in peak season. Best for families wanting amenities close by.',
      },
      {
        name: 'West Beach (Cadillac Square)',
        description:
          'Head west past the campground and the beaches thin out to almost nothing — in the best way. Fewer people, wilder shoreline, and a real sense of the undeveloped Gulf Coast. This is where serious shellers come.',
      },
      {
        name: 'Dauphin Island Campground Beach',
        description:
          'The beachfront campground sits right on the Gulf with 151 sites, making it one of the most unique camping spots on the Alabama coast. Even if you\'re not camping, walk the beach in front of it — it\'s beautiful.',
      },
    ],
    whereToStay: [
      {
        name: 'Dauphin Island Vacation Rentals via VRBO',
        type: 'vacation-rental',
        description:
          'Dauphin Island is almost entirely a rental market — beach houses, cottages, and elevated Gulf-front homes are the way to stay here. VRBO has the best selection. Book early for summer, especially the beachfront properties on the east end.',
        affiliateUrl: 'https://vrbo.tp.st/rB1ITlqz', // ✓ tracked
        provider: 'vrbo',
      },
      {
        name: 'Dauphin Island Campground',
        type: 'vacation-rental',
        description:
          'One of the most unique stays on the Gulf Coast — 151 beachfront campsites right on the sand, with a bathhouse, playground, boat launches, and a fish-cleaning pavilion. Pet-friendly. Book well in advance for summer weekends.',
        affiliateUrl: 'https://www.dauphinislandcampground.com/', // TODO: confirm tracking
        provider: 'generic',
      },
      {
        name: 'Gulf-Front Cottages via Airbnb',
        type: 'vacation-rental',
        description:
          'Airbnb has a solid selection of Dauphin Island cottages, including some of the charming old fishing camp "bird houses" that are an island landmark. A great option for couples or small groups wanting a more personal stay.',
        affiliateUrl: 'https://www.airbnb.com/rp/bconkle', // ✓ tracked
        provider: 'generic',
      },
    ],
    whereToEat: [
      {
        name: "Islanders Restaurant",
        cuisine: 'Seafood / American',
        description:
          "The most complete restaurant on the island — open for breakfast through late night, with sunset views over the water. Great seafood, dog-friendly, and handicap accessible. The go-to when you want a real sit-down meal.",
        priceRange: '$$',
      },
      {
        name: "Pirate's Bar and Grill",
        cuisine: 'Seafood / Bar',
        description:
          "Fresh made-to-order seafood, legendary Bushwacker cocktails, signature wings with house-made sauces, and live music on weekends. A true island bar in the best sense — casual, fun, and full of locals.",
        priceRange: '$',
      },
      {
        name: "Lighthouse Bakery",
        cuisine: 'Bakery / Breakfast',
        description:
          "Operating since 1997 out of one of the oldest buildings on the island. The cinnamon rolls are the stuff of legend. Get there early — they sell out. Also carries local artisan goods if you need a gift.",
        priceRange: '$',
      },
      {
        name: "Dockside Seafood Restaurant",
        cuisine: 'Seafood',
        description:
          "Casual dockside dining with generous portions and fresh Gulf seafood. Bay views, indoor and outdoor seating, and the kind of no-frills atmosphere that makes a fried shrimp plate taste better.",
        priceRange: '$',
      },
    ],
    activities: [
      {
        name: 'Dauphin Island Sea Lab & Alabama Aquarium',
        description:
          'The island\'s premier attraction — 100+ marine species from Mobile Bay and the Gulf, interactive stingray touch pools, and exhibits that actually teach you something. Great for kids and adults. Open daily 9 AM–5 PM.',
      },
      {
        name: 'Audubon Bird Sanctuary',
        description:
          '137 acres of diverse coastal habitat along a 3-mile accessible boardwalk. Dauphin Island is one of only four North American spring migration stopover points — over 420 species documented. Peak season is April–May. Even casual birdwatchers will be amazed.',
      },
      {
        name: 'Fort Gaines Historic Site',
        description:
          'Civil War-era masonry fort overlooking Mobile Bay and the Gulf of Mexico. Built from 3 million bricks and designated an endangered historic site. Walk the ramparts for sweeping views of the bay entrance. History buffs will love the context here.',
      },
      {
        name: 'Fishing Charter',
        description:
          'Dauphin Island has a deep charter fishing tradition. Offshore trips target red snapper, cobia, mahi-mahi, and tuna. Inshore trips focus on speckled trout and redfish in Mobile Bay. The Alabama Deep Sea Fishing Rodeo — the world\'s largest, running since 1929 — is held here every July.',
        affiliateUrl: 'https://fishingbooker.tp.st/lQGpTKBV', // ✓ tracked
        provider: 'getyourguide',
      },
      {
        name: 'Kayak & Bike Rentals',
        description:
          'Dauphin Island Kayak & Bicycle Rentals offers island-wide delivery, guided kayak tours for all skill levels, and historical bike tours. Open 9 AM–6 PM. A kayak tour through the back marshes at sunrise is one of the best things you can do here.',
      },
      {
        name: 'Indian Shell Mound Park',
        description:
          'An 11-acre botanical garden built around ancient shell middens left by Native Americans between 1100–1550 CE. Prime spring and fall birdwatching. Free to visit and rarely crowded — a genuine hidden gem.',
      },
    ],
    gettingThere:
      "Dauphin Island is about 35 miles south of Mobile via the Dauphin Island Parkway (AL-193). There's no bridge toll. The island can also be reached from Fort Morgan on the eastern shore via the Mobile Bay Ferry — a scenic 35-minute crossing that avoids Mobile entirely. The closest major airport is Mobile Regional (MOB), about 50 minutes north. Pensacola International (PNS) is about 90 minutes east. There's no public transit on the island — a rental car or bike is essential.",
    localTip:
      "If you're coming for birding, mid-April is peak migration and the island can be absolutely electric with songbirds that have just crossed the Gulf of Mexico overnight. They land exhausted and hungry, making the sanctuary one of the best birdwatching spots in North America for that brief window. Also: the ferry from Fort Morgan is worth taking even if you don't need the shortcut — the bay crossing gives you a perspective on the Gulf Coast that you simply can't get from the road.",
  },

  'orange-beach': {
    slug: 'orange-beach',
    beaches: [
      {
        name: 'Orange Beach Public Beach',
        description:
          'The main Gulf-front beach right in town — wide, white sand with the emerald water Orange Beach is known for. Less crowded than Gulf Shores on peak summer weekends. Beach chair and umbrella rentals available, plus easy parking access.',
      },
      {
        name: 'Perdido Pass Beach',
        description:
          "Where the Gulf meets Perdido Pass, the waterway connecting the Gulf to Perdido Bay. A great spot for watching boats come and go through the pass, plus the currents here create some of the clearest water on the Alabama coast. Popular with snorkelers.",
      },
      {
        name: 'Gulf Beach at Perdido Key (FL border)',
        description:
          "Drive a few miles east and you cross into Florida's Perdido Key State Park — undeveloped barrier island beach with no development in sight. One of the most naturally beautiful stretches of sand on the entire Gulf Coast. Worth the short detour.",
      },
    ],
    whereToStay: [
      {
        name: 'Turquoise Place',
        type: 'vacation-rental',
        description:
          "One of the largest and most amenity-packed condo resorts on the Alabama Gulf Coast. Private hot tubs on select balconies, lazy river, multiple pools, and direct Gulf frontage. A step up from the typical condo experience — great for a splurge trip.",
        affiliateUrl: 'https://vrbo.tp.st/rB1ITlqz', // ✓ tracked
        provider: 'vrbo',
      },
      {
        name: 'Perdido Beach Resort',
        type: 'resort',
        description:
          "Orange Beach's premier full-service hotel — right on the Gulf with a private beach, multiple pools, the excellent Voyagers restaurant, and a marina. The only true resort-style hotel in Orange Beach. Voyagers' wine list alone (700+ bottles) is worth a visit.",
        affiliateUrl: 'https://www.booking.com/hotel/us/perdido-beach-resort.html', // TODO: confirm tracking
        provider: 'booking',
      },
      {
        name: 'Orange Beach Condos via VRBO',
        type: 'vacation-rental',
        description:
          "Orange Beach is a condo town — the rental market is massive and ranges from budget-friendly studios to multi-bedroom beachfront penthouses. VRBO has the best selection. Filter by Gulf-front and private pool for the full experience.",
        affiliateUrl: 'https://vrbo.tp.st/rB1ITlqz', // ✓ tracked
        provider: 'vrbo',
      },
    ],
    whereToEat: [
      {
        name: 'The Gulf',
        cuisine: 'Seasonal Coastal',
        description:
          "One of the best restaurants on the entire Alabama Gulf Coast. The menu rotates with the seasons and uses local producers — the fried grouper sandwich alone is worth the trip. Modern, thoughtful cooking in a beach town. Make a reservation.",
        priceRange: '$$$',
      },
      {
        name: "Cobalt, The Restaurant",
        cuisine: 'Contemporary Gulf Coast',
        description:
          "Upscale waterfront dining you can arrive at by boat. Known for Gulf shrimp barbecue, pecan catfish, and bronze gulf grouper. Happy Hour 3–5 PM is excellent value. One of Orange Beach's most consistently praised restaurants.",
        priceRange: '$$$',
      },
      {
        name: "Tacky Jack's",
        cuisine: 'Seafood / American',
        description:
          "The quintessential Orange Beach waterfront bar and grill — accessible by land or boat. Famous Bushwacker cocktails, solid seafood, live entertainment, and a vibe that perfectly captures the spirit of this town. Great for a long lunch.",
        priceRange: '$$',
      },
      {
        name: 'Wolf Bay Restaurant',
        cuisine: 'Seafood',
        description:
          "A family-owned institution serving fresh Gulf seafood for generations. The stuffed whole flounder is legendary. No frills, no pretension — just excellent Gulf Coast cooking done right. Locals eat here when they want the real thing.",
        priceRange: '$$',
      },
    ],
    activities: [
      {
        name: 'The Wharf',
        description:
          "Orange Beach's waterfront entertainment district — shops, restaurants, waterfront bars, live music, a Ferris wheel, and a laser light experience all in one place. The best spot for an evening out when you want something beyond the beach.",
      },
      {
        name: 'Deep-Sea & Inshore Fishing Charters',
        description:
          "Orange Beach is one of the top sportfishing destinations on the Gulf Coast. Offshore charters target red snapper, amberjack, mahi-mahi, and wahoo. Inshore trips work Perdido Bay for speckled trout and redfish. Dozens of reputable captains operate out of Perdido Pass Marina.",
        affiliateUrl: 'https://fishingbooker.tp.st/lQGpTKBV', // ✓ tracked
        provider: 'getyourguide',
      },
      {
        name: 'Hugh S. Branyon Backcountry Trail',
        description:
          "Over 15 miles of paved and natural trails through six distinct coastal habitats — pine forests, wetlands, dunes, and more. One of the best-kept secrets in Orange Beach. Perfect for cycling, birding, or a morning run away from the crowds.",
      },
      {
        name: 'Dolphin Cruises & Sailing',
        description:
          "Multiple operators run dolphin-watching cruises through the waters around Orange Beach — resident bottlenose dolphins are a near-certain sighting. Sail Wild Hearts offers sunset cruises on a 53-foot ocean yacht that's hard to beat for a romantic evening.",
        affiliateUrl: 'https://viator.tp.st/dDeat4RV', // ✓ tracked
        provider: 'getyourguide',
      },
      {
        name: 'Flora-Bama',
        description:
          "The legendary roadhouse bar sitting right on the Alabama-Florida state line. Live music on five stages, a raw oyster bar, the famous Mullet Toss competition every April, and decades of Gulf Coast history soaked into the walls. An institution.",
      },
    ],
    gettingThere:
      "Orange Beach sits on Alabama's Gulf Coast, directly east of Gulf Shores on Highway 182 (Perdido Beach Blvd). From I-10, take the same Highway 59 exit south as Gulf Shores, then head east on AL-182. The closest airport is Pensacola International (PNS), about 45 minutes east — often the best option for flights. Mobile Regional (MOB) is about 90 minutes west. No toll roads. Parking near the public beach and The Wharf is free.",
    localTip:
      "Orange Beach's secret weapon is Perdido Pass — the deep-water channel that cuts between the Gulf and Perdido Bay. At sunrise, the fishing fleet heads out through the pass and the light on the water is genuinely spectacular. Grab coffee and watch from the public pier at Perdido Pass Park. Also: the stretch of beach just east of the pass is consistently less crowded than the main public beach, with the same water. It's a 10-minute walk from the parking lot but worth every step.",
  },
  'gulf-breeze': {
    slug: 'gulf-breeze',
    beaches: [
      {
        name: 'Quietwater Beach',
        description:
          'A calm, family-friendly beach on the Santa Rosa Sound side of Pensacola Beach — accessible via the Gulf Breeze Causeway. No Gulf waves here, just flat, clear water perfect for young kids and paddleboarders. Free parking, picnic tables, and a small playground.',
      },
      {
        name: 'Bob Sikes Public Boat Ramp Beach',
        description:
          'A low-key spot on the bay where locals fish, launch kayaks, and watch pelicans work the shallows. Not a swimming beach, but a great place to absorb authentic Gulf Breeze waterfront life away from the tourist strip.',
      },
      {
        name: 'Pensacola Beach (5 minutes away)',
        description:
          "Gulf Breeze's best feature: you're literally 5 minutes across the bridge from some of the most stunning white quartz sand on the Gulf Coast. Stay in Gulf Breeze for better rates and quieter evenings, then walk or drive to the beach for the day.",
      },
    ],
    whereToStay: [
      {
        name: 'Gulf Breeze Vacation Rentals',
        type: 'vacation-rental',
        description:
          'VRBO has a solid selection of Gulf Breeze homes — mostly 2–4 bedroom houses with bay views or water access. Rates run significantly lower than comparable Pensacola Beach condos while putting you 5 minutes from the Gulf. Great for families who want space.',
        affiliateUrl: 'https://vrbo.tp.st/gulfbreeze',
        provider: 'vrbo',
      },
      {
        name: 'Hampton Inn Gulf Breeze',
        type: 'hotel',
        description:
          'A reliable mid-range hotel option for Gulf Breeze with easy bridge access to Pensacola Beach. Clean, consistent, and significantly more affordable than beachfront properties across the bridge.',
        affiliateUrl: 'https://booking.tp.st/gulfbreeze',
        provider: 'booking',
      },
    ],
    whereToEat: [
      {
        name: 'Surf Burger',
        cuisine: 'American / Burgers',
        description:
          'A beloved local burger joint with a serious following. Straightforward menu, fresh ingredients, and the kind of no-frills execution that builds regulars. Lines out the door on summer weekends — worth the wait.',
        priceRange: '$',
      },
      {
        name: 'Peg Leg Pete\'s',
        cuisine: 'Seafood',
        description:
          'A Gulf Breeze classic — laid-back waterfront seafood with generous portions and cold drinks. The boiled shrimp and grouper sandwich are the moves. Great sunset views from the deck over the water.',
        priceRange: '$$',
      },
      {
        name: 'Global Grill',
        cuisine: 'International / Upscale',
        description:
          "One of the best restaurants in the area by any measure. The menu travels — Cuban pork, Thai-spiced fish, Mediterranean influences — but every plate is executed with serious skill. A genuinely special dinner option that doesn't require crossing the bridge.",
        priceRange: '$$$',
      },
      {
        name: 'Chan\'s Wine World',
        cuisine: 'Wine Bar / Small Plates',
        description:
          "More than a wine shop — Chan's is a gathering spot with a carefully curated selection of bottles, artisan cheeses, charcuterie, and small plates. Perfect for a relaxed evening where the conversation matters as much as the food.",
        priceRange: '$$',
      },
    ],
    activities: [
      {
        name: 'Gulf Breeze Zoo (Northwest Florida Zoo)',
        description:
          'A surprisingly impressive zoo for a small beach town — over 900 animals on 50 acres of natural habitat. A great half-day option for families, especially on days when beach conditions aren\'t ideal. The giraffe feeding experience is a hit with kids.',
      },
      {
        name: 'Kayaking & Paddleboarding on the Sound',
        description:
          'The calm, shallow Santa Rosa Sound is ideal for paddling. Multiple rental outfitters in the area offer kayaks, SUPs, and guided tours through the sea grass beds where you can spot rays, sea turtles, and dolphins in the shallows.',
        affiliateUrl: 'https://viator.tp.st/gulfbreeze',
        provider: 'getyourguide',
      },
      {
        name: 'Shoreline Park South',
        description:
          "A hidden gem — a small bayfront park with a fishing pier, boat ramp, and some of the best sunset views in the region. Gulf Breeze locals consider this one of their best-kept secrets. Bring a fishing rod or just a lawn chair.",
      },
      {
        name: 'UWF Archaeological Site & Presidio de Santa María de Galve',
        description:
          'History buffs will appreciate the nearby archaeological remains of one of the earliest Spanish colonial settlements in North America. The University of West Florida runs the excavation site with guided tours explaining the 400+ year history of the Pensacola region.',
      },
    ],
    gettingThere:
      "Gulf Breeze sits on the peninsula between Pensacola Bay and Santa Rosa Sound, connected to Pensacola via the Three-Mile Bridge (US-98) and to Pensacola Beach via the Bob Sikes Bridge (FL-399). From I-10, take Exit 13 (US-98 East) toward Gulf Breeze — about 15 miles. Pensacola International Airport (PNS) is 20–25 minutes west via US-98. No toll roads. Parking is free throughout Gulf Breeze.",
    localTip:
      "Gulf Breeze is the move if you want Pensacola Beach access without Pensacola Beach prices. Book a VRBO house in Gulf Breeze, walk or bike across the Bob Sikes Bridge to the beach (it's about 1.5 miles), and you'll have a quieter, more local experience than the condo-resort crowd. The weekday morning bike ride over the bridge at sunrise — with dolphins often visible in the sound below — is one of the best free experiences in the entire Panhandle.",
  },
  'navarre-beach': {
    slug: 'navarre-beach',
    beaches: [
      {
        name: 'Navarre Beach (Gulf Islands National Seashore)',
        description:
          "The main beach — and it genuinely earns the 'best kept secret' nickname. Miles of pure white quartz sand within Gulf Islands National Seashore, with water that shifts from pale green to deep turquoise depending on the light. Crowds here are a fraction of what you'll find at Pensacola Beach or Destin.",
      },
      {
        name: 'Navarre Beach Marine Sanctuary',
        description:
          "The nation's first designated beach-based marine sanctuary sits just offshore here. The artificial reef system attracts exceptional snorkeling and diving — tropical fish, sea fans, and occasional sea turtles in crystal-clear, shallow water. Gear rentals are available near the pier.",
      },
      {
        name: 'Navarre Beach County Park',
        description:
          "A well-maintained public beach park with restrooms, showers, and ample free parking — rare on the Gulf Coast. Less than a mile from the pier and consistently less crowded than the main beach access points. A local favorite for exactly that reason.",
      },
    ],
    whereToStay: [
      {
        name: 'Navarre Beach Vacation Rentals',
        type: 'vacation-rental',
        description:
          'VRBO and Airbnb have excellent Gulf-front and second-row vacation homes and condos in Navarre Beach. Because this area is less marketed than Destin or PCB, you can often find beachfront properties at significantly lower rates. Most rentals are 2–5 bedrooms.',
        affiliateUrl: 'https://vrbo.tp.st/navarrebeach',
        provider: 'vrbo',
      },
      {
        name: 'Navarre Beach Camping Resort',
        type: 'vacation-rental',
        description:
          'For campers and RV travelers, Navarre Beach Camping Resort offers sites just steps from the Gulf. Wake up to the sound of waves for a fraction of the cost of a vacation rental. Full hookups available.',
        affiliateUrl: 'https://booking.tp.st/navarrebeach',
        provider: 'booking',
      },
    ],
    whereToEat: [
      {
        name: 'Navarre Beach Bar & Grill',
        cuisine: 'Seafood / American',
        description:
          "Right on the beach, this open-air spot delivers exactly what the name promises — cold drinks, fresh Gulf seafood, and a view. The grouper tacos and shrimp baskets are consistently reliable. Come for lunch and stay for the sunset.",
        priceRange: '$$',
      },
      {
        name: 'Sailor\'s Grill',
        cuisine: 'Seafood',
        description:
          'A local mainstay with a casual atmosphere and a menu that leans hard into Gulf Coast tradition — boiled crawfish in season, raw oysters, and fried seafood platters. Nothing fancy, everything satisfying.',
        priceRange: '$',
      },
      {
        name: 'Juana\'s Pagodas',
        cuisine: 'Beach Bar / Seafood',
        description:
          "The most famous beachfront bar in the Navarre area — a longtime Gulf Coast institution known for live music, strong drinks, and a back deck that practically sits on the sand. The party scene here is tame compared to Destin but reliably fun.",
        priceRange: '$$',
      },
    ],
    activities: [
      {
        name: 'Navarre Beach Fishing Pier',
        description:
          'At 1,545 feet, this is one of the longest piers on the Gulf Coast. An absolutely excellent place to fish for Spanish mackerel, king mackerel, and cobia — and equally great for sunset walks even if you don\'t fish. Equipment rentals available on the pier.',
      },
      {
        name: 'Snorkeling the Marine Sanctuary',
        description:
          "Navarre Beach sits above the nation's only beach-based marine sanctuary — an artificial reef teeming with marine life in shallow, clear water. Even novice snorkelers can see tropical fish, sea fans, and rays. Gear rentals available at the pier.",
        affiliateUrl: 'https://viator.tp.st/navarrebeach',
        provider: 'getyourguide',
      },
      {
        name: 'Sea Turtle Nesting Season',
        description:
          'From May through October, loggerhead and green sea turtles nest on Navarre Beach. The Gulf Islands National Seashore staff runs guided turtle walks during peak season (July–August) — one of the most memorable wildlife experiences on the Gulf Coast. Reserve early.',
      },
      {
        name: 'Kayaking & Water Sports',
        description:
          "The calm Navarre Sound on the north side of Santa Rosa Island is ideal for kayaking, paddleboarding, and windsurfing. Several outfitters operate near the bridge with rentals and guided tours through the sea grass beds.",
      },
    ],
    gettingThere:
      "Navarre Beach is located on Santa Rosa Island, accessible via the Navarre Beach Bridge from US-98 in Navarre, Florida. From I-10, take Exit 31 (Navarre/Milton exit) south on FL-87 for about 20 miles to US-98, then head west a few miles to the bridge. Pensacola International Airport (PNS) is approximately 40 minutes west. The beach sits within Gulf Islands National Seashore — no admission fee for the beach itself. Free parking at the county park.",
    localTip:
      "Navarre Beach is at its absolute best during the week in late spring (May) or early fall (September–October). The water is warm, the sand is perfect, and you may genuinely have stretches of National Seashore beach nearly to yourself. If you visit in summer, arrive before 9am — the parking lots fill up by late morning on weekends, and early birds get that otherworldly morning light on the white sand that belongs on a postcard.",
  },
  'fort-walton-beach': {
    slug: 'fort-walton-beach',
    beaches: [
      {
        name: 'Okaloosa Island Beach',
        description:
          "Fort Walton Beach's main beach sits on Okaloosa Island — the same barrier island as Destin, just a few miles west. The same brilliant emerald water, the same powdery white quartz sand, and substantially fewer people and lower prices. The public beach park has paid parking, restrooms, and a pavilion.",
      },
      {
        name: 'Beasley Park',
        description:
          'A large beachfront park on Okaloosa Island with ample parking, volleyball courts, picnic areas, and easy beach access. One of the better-equipped public beach parks on the Emerald Coast, and a consistent pick for locals who want the full beach experience without paying resort prices.',
      },
      {
        name: 'Santa Rosa Island (Destin side)',
        description:
          "Fort Walton Beach sits at the western end of the same barrier island as Destin, so you have easy driving access east toward Henderson Beach State Park and all of Destin's beachfront. The drive along US-98 through Destin offers some of the most stunning water views on the Gulf Coast.",
      },
    ],
    whereToStay: [
      {
        name: 'Fort Walton Beach Hotels & Condos',
        type: 'hotel',
        description:
          "Fort Walton Beach has a range of beachfront hotels and condo rentals at prices noticeably lower than Destin. Booking.com shows strong availability at properties along Miracle Strip Parkway and Okaloosa Island. A practical base camp for exploring the entire Emerald Coast.",
        affiliateUrl: 'https://booking.tp.st/fortwaltonsbeach',
        provider: 'booking',
      },
      {
        name: 'Vacation Rentals via VRBO',
        type: 'vacation-rental',
        description:
          'VRBO has a solid selection of vacation homes and condos in Fort Walton Beach — many Gulf-front or with easy beach access. Larger groups save significantly compared to equivalent Destin properties.',
        affiliateUrl: 'https://vrbo.tp.st/fortwaltonbeach',
        provider: 'vrbo',
      },
    ],
    whereToEat: [
      {
        name: 'Staff\'s Restaurant',
        cuisine: 'Seafood / American',
        description:
          "A Fort Walton Beach institution since 1931. Old-school Gulf Coast dining at its most authentic — fresh grouper, hand-cut steaks, and a room full of locals who've been coming here for decades. The kind of place that doesn't need to advertise.",
        priceRange: '$$',
      },
      {
        name: 'The Boathouse Oyster Bar',
        cuisine: 'Oysters / Seafood',
        description:
          "Raw oysters, fried fish, cold beer, and a back deck that looks out over the Intracoastal Waterway. Everything a Gulf Coast oyster bar should be. Live music on weekends and one of the best happy hours in the area.",
        priceRange: '$',
      },
      {
        name: 'Angler\'s Beachside Grill & Bar',
        cuisine: 'Seafood / Beach Bar',
        description:
          "Right on Okaloosa Island with beach views and a menu built around fresh Gulf catch. The grouper sandwich and crab claws are standouts. A casual, all-ages spot that delivers solid food with a genuine beach atmosphere.",
        priceRange: '$$',
      },
      {
        name: 'Crab Trap',
        cuisine: 'Seafood',
        description:
          'A local landmark sitting on the Intracoastal Waterway — fresh Gulf seafood, enormous portions, and a menu that changes with whatever the boats brought in. The stone crab claws (in season, October–May) are exceptional.',
        priceRange: '$$',
      },
    ],
    activities: [
      {
        name: 'Indian Temple Mound Museum',
        description:
          "One of the most impressive Native American archaeological sites on the Gulf Coast — a massive ceremonial mound built by the Fort Walton Culture over 1,000 years ago, right in the middle of downtown. The museum tells 12,000 years of Gulf Coast human history through an excellent collection of artifacts.",
      },
      {
        name: 'Water Sports on Okaloosa Island',
        description:
          "Jet ski rentals, parasailing, paddleboard rentals, banana boat rides — all the Emerald Coast water sports available right on Okaloosa Island. Multiple vendors operate along the beach strip and prices here are noticeably lower than Destin.",
        affiliateUrl: 'https://viator.tp.st/fortwaltonbeach',
        provider: 'getyourguide',
      },
      {
        name: 'Emerald Coast Science Center',
        description:
          "A hands-on science museum in downtown Fort Walton Beach — more relevant than it sounds for a beach vacation. Great rainy-day option for families with kids, and genuinely engaging interactive exhibits covering everything from local ecology to space.",
      },
      {
        name: 'Air Force Armament Museum',
        description:
          "Adjacent to Eglin Air Force Base, this free museum houses an extraordinary collection of military aircraft — B-52, SR-71 Blackbird, F-117 Nighthawk — displayed both indoors and on an outdoor flight line. One of the best free military aviation museums in the Southeast.",
      },
    ],
    gettingThere:
      "Fort Walton Beach sits on the Emerald Coast of the Florida Panhandle, on US-98 (Miracle Strip Parkway) and Okaloosa Island. From I-10, take Exit 56 (Crestview) south on FL-85 for about 25 miles to Fort Walton Beach, then follow US-98 to Okaloosa Island. Destin-Fort Walton Beach Airport (VPS) is just 10 minutes east — a convenient option with Delta, American, and Southwest service. Pensacola International (PNS) is 50 minutes west.",
    localTip:
      "Fort Walton Beach is the Emerald Coast's best value play. You get the exact same emerald-green water and white quartz sand as Destin — the barrier island is the same island — for 20–30% less. Go east on US-98 toward Henderson Beach State Park for some of the most beautiful protected beach on the Gulf Coast, then come back west to Fort Walton for dinner. You beat the Destin prices and parking hassles while missing out on nothing.",
  },
  'miramar-beach': {
    slug: 'miramar-beach',
    beaches: [
      {
        name: 'Miramar Beach Public Access',
        description:
          "The main public beach access point in Miramar Beach — free parking, clean facilities, and direct access to the same brilliant emerald Gulf water as Destin. The beach here is slightly less crowded than Destin's main public beaches, which makes it an easy sell.",
      },
      {
        name: 'Sandestin Resort Beach',
        description:
          'Guests of the Sandestin Golf & Beach Resort have access to a beautifully maintained private beachfront with beach chairs, umbrellas, and attendants. The resort sits on 2,400 acres with both Gulf and bay frontage — a rare combination on the Panhandle.',
      },
      {
        name: 'Henderson Beach State Park',
        description:
          "Just east of the Sandestin resort, Henderson Beach is 208 acres of protected, pristine Emerald Coast beach — consistently rated among the best state parks in Florida. Old-growth scrub dunes, nesting sea turtles, and some of the most photogenic white sand on the entire Gulf Coast.",
      },
    ],
    whereToStay: [
      {
        name: 'Sandestin Golf & Beach Resort',
        type: 'resort',
        description:
          "The centerpiece of Miramar Beach — a massive self-contained resort with condos, villas, hotel towers, golf courses, a marina, and the Village of Baytowne Wharf retail/dining complex. Booking through Booking.com often surfaces the best available rates across the various property types.",
        affiliateUrl: 'https://booking.tp.st/sandestin',
        provider: 'booking',
      },
      {
        name: 'Miramar Beach Vacation Rentals',
        type: 'vacation-rental',
        description:
          "VRBO has an excellent selection of Gulf-front and Gulf-view condos and homes throughout Miramar Beach. The residential character of the community means you'll find genuinely nice properties in quiet neighborhoods — a very different feel from resort condo towers.",
        affiliateUrl: 'https://vrbo.tp.st/miramarfl',
        provider: 'vrbo',
      },
    ],
    whereToEat: [
      {
        name: 'Bijoux Restaurant',
        cuisine: 'French-Inspired / Upscale',
        description:
          'One of the finest dining experiences on the Emerald Coast — a sophisticated French-accented menu with impeccable local seafood, a serious wine program, and service to match. The place you go when the occasion calls for something exceptional.',
        priceRange: '$$$',
      },
      {
        name: 'Seagar\'s Prime Steaks & Seafood',
        cuisine: 'Steakhouse / Seafood',
        description:
          "Located inside the Hilton Sandestin, Seagar's is the Emerald Coast's premier steakhouse — AAA Four Diamond awarded, with dry-aged prime cuts and Gulf seafood sourced daily. The oysters Rockefeller are a must.",
        priceRange: '$$$$',
      },
      {
        name: 'Johnny Rockets at Grand Boulevard',
        cuisine: 'American',
        description:
          "Grand Boulevard is the upscale outdoor shopping center connecting Miramar Beach to Sandestin's main entrance — a great spot for a casual lunch between beach sessions. Multiple dining options from fast casual to sit-down.",
        priceRange: '$',
      },
      {
        name: 'Baytowne Wharf Restaurants',
        cuisine: 'Varied / Village',
        description:
          "The Village of Baytowne Wharf inside Sandestin has a dozen dining options from sports bars to waterfront seafood. Best for groups or families who want variety — walk around the village and pick what looks right.",
        priceRange: '$$',
      },
    ],
    activities: [
      {
        name: 'Sandestin Golf Courses',
        description:
          "Sandestin Resort has four championship golf courses — Burnt Pine, The Links, Baytowne, and The Raven — ranging from beginner-friendly to PGA Tour-quality. The Links course plays along the Gulf and is consistently rated among the best in Florida.",
        affiliateUrl: 'https://viator.tp.st/sandestin',
        provider: 'getyourguide',
      },
      {
        name: 'Grand Boulevard Shopping',
        description:
          "The upscale open-air shopping district connecting Miramar Beach to Sandestin has everything from local boutiques to national brands like Tommy Bahama and Anthropologie. More pleasant than a mall — outdoor dining, fountains, and a curated tenant mix.",
      },
      {
        name: 'Baytowne Wharf Village',
        description:
          "The entertainment village inside Sandestin — boutique shops, restaurants, bars, a ropes course, a kids' splash zone, mini golf, and regular live music and events. A reliable evening activity even on rainy days.",
      },
      {
        name: 'Henderson Beach State Park Hiking',
        description:
          "186 acres of protected coastal scrub adjacent to Miramar Beach — old dune ridges, wildlife-rich trails through sand pine and rosemary scrub, and 30 campsites if you want to sleep under the stars. The 1-mile Nature Trail is accessible and rewarding.",
      },
    ],
    gettingThere:
      "Miramar Beach sits on US-98 between Destin (5 miles west) and 30A (10 miles east), in Walton County, Florida. From I-10, take Exit 85 (Defuniak Springs) south on US-331 — about 30 miles to US-98 at the coast, then head west a couple miles. Destin-Fort Walton Beach Airport (VPS) is 20 minutes west. Northwest Florida Beaches International Airport (ECP) in Panama City Beach is about 45 minutes east. Most Sandestin guests receive parking passes — public beach parking is available at the Miramar Beach access point on Scenic Gulf Drive.",
    localTip:
      "The move at Miramar Beach is to walk Henderson Beach State Park first thing in the morning — arrive at or before 8am on summer days before the lot fills. The old-growth dunes here are some of the most dramatic on the Gulf Coast, and you'll often see deer, gopher tortoises, and scrub jays along the trail before it opens to that spectacular beach. Then head back to your Sandestin rental or Grand Boulevard for lunch. It's a perfect half-day.",
  },
  'seaside': {
    slug: 'seaside',
    beaches: [
      {
        name: 'Seaside Beach',
        description:
          "The iconic beach at the heart of the Seaside community — white quartz sand, emerald water, and a perfectly framed view of the pastel cottages beyond the dunes. The beach pavilion at the end of County Road 30A is the postcard shot. Parking requires patience on summer weekends.",
      },
      {
        name: 'Grayton Beach State Park',
        description:
          "A mile west of Seaside, Grayton Beach State Park consistently ranks among the best beaches in the United States — pristine, protected, and stunning. Crystal-clear water in Western Lake, old-growth dunes, and a beach so beautiful it almost feels unreal. Day-use fee applies.",
      },
      {
        name: 'Watercolor Beach Club',
        description:
          "The adjacent WaterColor resort community shares the same stretch of coastline as Seaside with a private beach club for resort guests. The transition from WaterColor to Seaside's public beach is seamless — walk east along the sand.",
      },
    ],
    whereToStay: [
      {
        name: 'Seaside Cottage Rentals',
        type: 'vacation-rental',
        description:
          "The original Seaside cottages are available for rent directly through the Seaside community rental program and via VRBO. These pastel architectural gems — the ones featured in The Truman Show — book up months in advance for summer. Reserve early. Prices reflect the demand.",
        affiliateUrl: 'https://vrbo.tp.st/seaside30a',
        provider: 'vrbo',
      },
      {
        name: 'WaterColor Inn & Resort',
        type: 'resort',
        description:
          "The boutique resort adjacent to Seaside offers luxury accommodations with beach club access and a gorgeous pool. A more traditional resort experience than Seaside's cottage rentals, with the same access to the 30A corridor.",
        affiliateUrl: 'https://booking.tp.st/watercolor30a',
        provider: 'booking',
      },
    ],
    whereToEat: [
      {
        name: 'Bud & Alley\'s Restaurant',
        cuisine: 'Seafood / Coastal',
        description:
          "Seaside's original restaurant and still its best. Opened in 1986 with the town, Bud & Alley's sits right on the beach and serves Gulf-fresh seafood with a creative, seasonal menu. The rooftop bar at sunset is one of the iconic 30A experiences.",
        priceRange: '$$$',
      },
      {
        name: 'The Great Southern Café',
        cuisine: 'Southern / Brunch',
        description:
          "The breakfast and brunch spot in Seaside — shrimp and grits, Southern-style eggs benedict, biscuits with local honey. The kind of place that draws a line out the door by 9am on summer mornings. Worth the wait.",
        priceRange: '$$',
      },
      {
        name: 'Airstream Row',
        cuisine: 'Food Trucks / Varied',
        description:
          "Seaside's famous cluster of converted Airstream trailers on the town green, each operating as a food vendor. Tacos, crepes, gourmet grilled cheese, ice cream, smoothies — the best casual lunch option in town and a genuinely fun social experience.",
        priceRange: '$',
      },
      {
        name: 'The Pickle',
        cuisine: 'American / Deli',
        description:
          'A Seaside institution for sandwiches, salads, and quick bites. Great for a beach picnic — pick up provisions here before heading to the sand. The lobster roll has serious devotees.',
        priceRange: '$$',
      },
    ],
    activities: [
      {
        name: 'Cycling the 30A Corridor',
        description:
          "County Road 30A runs 28 miles through 16 distinct beach communities — one of the great cycling routes in the American South. Bike rentals are readily available in Seaside. The full out-and-back to Rosemary Beach is a beautiful 30-mile ride; even a 5-mile spin through WaterColor and Watergrass is spectacular.",
        affiliateUrl: 'https://viator.tp.st/seaside30a',
        provider: 'getyourguide',
      },
      {
        name: 'Seaside Amphitheater & Saturday Market',
        description:
          "The Seaside amphitheater hosts live music, movies, and community events throughout the year. The Saturday Farmers Market (spring through fall) is one of the best on the Panhandle — local produce, artisan goods, live music, and a gathering energy that captures everything Seaside aspired to be.",
      },
      {
        name: 'Grayton Beach State Park',
        description:
          "Beyond the beach, Grayton has paddling on Western Lake (kayak rentals available), miles of hiking trails through coastal dune lake habitat, and some of the best nature photography opportunities on the Gulf Coast. The rare coastal dune lakes here — found in very few places on Earth — support unique ecosystems.",
      },
      {
        name: 'Architecture Walking Tour',
        description:
          "Seaside was designed by Andrés Duany and Elizabeth Plater-Zyberk as a prototype for New Urbanism — the movement to design walkable, human-scaled communities. A self-guided walk through the neighborhood examining the street patterns, building codes, and public spaces is genuinely interesting even for non-architects.",
      },
    ],
    gettingThere:
      "Seaside sits on County Road 30A in Walton County, Florida, about 20 miles east of Destin. From US-98, turn south on CR-283 or CR-393 to reach 30A — Seaside will be clearly signed. Northwest Florida Beaches International Airport (ECP) near Panama City Beach is about 45 minutes east; Destin-Fort Walton Beach Airport (VPS) is about 40 minutes west. Parking in Seaside is notoriously limited in summer — arrive by 8am or use the public lot and walk in. Many visitors rent bikes to avoid parking altogether.",
    localTip:
      "Seaside is genuinely one of the most architecturally interesting places in America, but it's also genuinely small. Most visitors see everything in half a day. The move is to stay here for the experience — rent a cottage for a week, live within the community, cycle 30A every morning, and use it as a base for exploring the other beach towns. As a day trip destination it can disappoint; as a home base for a week it's exceptional.",
  },
  'panama-city-beach': {
    slug: 'panama-city-beach',
    beaches: [
      {
        name: 'Panama City Beach Public Beach',
        description:
          "The main beach — and there's a lot of it. 27 miles of Gulf-front white quartz sand stretching along Front Beach Road (US-98 Alt). This is the heart of PCB's beach scene, with lifeguards in season, water sports vendors, parasailing, and all the energy of one of Florida's most-visited beach destinations.",
      },
      {
        name: 'St. Andrews State Park',
        description:
          "The crown jewel of PCB. This 1,260-acre state park at the eastern tip of the peninsula has pristine, uncrowded beaches, crystal-clear water, snorkeling on the jetties, hiking trails through pine flatwoods, and stunning lagoon views. Consistently rated one of the best beaches in the country. Day-use fee applies.",
      },
      {
        name: 'Shell Island',
        description:
          "An uninhabited barrier island accessible only by boat, Shell Island is a surreal experience — over 7 miles of completely undeveloped Gulf beach. Dolphin sightings on the crossing are virtually guaranteed. Water taxis run from St. Andrews State Park marina throughout the day.",
      },
    ],
    whereToStay: [
      {
        name: 'PCB Gulf-Front Hotels & Condos',
        type: 'hotel',
        description:
          "Panama City Beach has the widest range of Gulf-front accommodations on the Panhandle — from budget motels to full-service condo towers. Booking.com covers the full spectrum. The stretch of Front Beach Road between Pier Park and St. Andrews State Park offers the best balance of access and value.",
        affiliateUrl: 'https://booking.tp.st/panamacitybeach',
        provider: 'booking',
      },
      {
        name: 'Vacation Rentals via VRBO',
        type: 'vacation-rental',
        description:
          "PCB has one of the largest vacation rental inventories on the Gulf Coast — thousands of condos, townhouses, and single-family homes. VRBO is the best place to search. Large groups get exceptional value in the 4–6 bedroom Gulf-front condos here.",
        affiliateUrl: 'https://vrbo.tp.st/panamacitybeach',
        provider: 'vrbo',
      },
    ],
    whereToEat: [
      {
        name: 'Schooners',
        cuisine: 'Seafood / Beach Bar',
        description:
          "Self-described as 'the last local beach club' and that's basically accurate. Right on the sand, live music every night, cold beer, fresh Gulf seafood, and a crowd that ranges from college groups to families to retirees. The fish tacos and fresh grouper are the go-to orders.",
        priceRange: '$$',
      },
      {
        name: 'Thomas Donut & Snack Shop',
        cuisine: 'Donuts / Breakfast',
        description:
          'A PCB institution since 1971. The line runs out the door on summer mornings and every local will tell you the same thing: go early, get the glazed, and eat them warm in the parking lot. Old-school, no pretension, absolutely essential.',
        priceRange: '$',
      },
      {
        name: 'Hunt\'s Oyster Bar & Seafood Restaurant',
        cuisine: 'Oysters / Seafood',
        description:
          "A dive bar masquerading as a seafood restaurant, or a seafood restaurant masquerading as a dive bar — either way, it's one of the best raw oyster bars on the Panhandle. Cash only, paper plates, and oysters that come straight off local boats. An institution.",
        priceRange: '$',
      },
      {
        name: 'Firefly Restaurant',
        cuisine: 'New American / Upscale',
        description:
          "The nicest restaurant in PCB, full stop. A sophisticated menu with exceptional local seafood, a serious cocktail program, and an intimate dining room that feels a world away from Front Beach Road. Reserve well in advance in summer.",
        priceRange: '$$$',
      },
    ],
    activities: [
      {
        name: 'Shell Island Water Taxi',
        description:
          "The quintessential PCB experience. Take the water taxi from St. Andrews State Park to Shell Island — a completely undeveloped barrier island with wild beaches, crystal-clear snorkeling near the jetties, and dolphins that routinely swim alongside the boat. Pack a lunch and spend the day.",
        affiliateUrl: 'https://viator.tp.st/panamacitybeach',
        provider: 'getyourguide',
      },
      {
        name: 'Pier Park',
        description:
          "PCB's main entertainment and shopping complex — a massive outdoor mall with 100+ stores, 30+ restaurants, a movie theater, a giant Ferris wheel, and continuous live events. Located right at the edge of the beach. More Vegas than beach town, but genuinely fun for groups.",
      },
      {
        name: 'Ripley\'s Believe It or Not & Gulf World Marine Park',
        description:
          "PCB has a full lineup of classic Florida tourist attractions — dolphin shows, a marine park, Ripley's museum, mini golf, go-karts, and more. The Gulf World Marine Park dolphin encounters are particularly popular with families.",
      },
      {
        name: 'Deep-Sea Fishing Charters',
        description:
          "PCB's fishing fleet is one of the largest on the Gulf Coast. Half-day party boats let you fish for bottom species without a full charter; private offshore trips target red snapper, mahi-mahi, and wahoo. Fishing Booker has the best selection of vetted captains.",
        affiliateUrl: 'https://fishingbooker.tp.st/lQGpTKBV',
        provider: 'getyourguide',
      },
    ],
    gettingThere:
      "Panama City Beach sits at the eastern end of the Florida Panhandle, accessible via US-98/98 Alt (Front Beach Road) from the east or west. From I-10, take Exit 296 (Chipley) south on FL-77 for about 35 miles to PCB, or Exit 304 south on FL-79. Northwest Florida Beaches International Airport (ECP) serves PCB directly — a modern airport with Delta, American, Southwest, and United service. It's the most convenient air option. Destin-Fort Walton Beach Airport (VPS) is about 90 minutes west. Most public beach parking along Front Beach Road is free.",
    localTip:
      "St. Andrews State Park is the real PCB — arrive when the gates open (8am) on any summer day and you'll have some of the most beautiful beach in Florida largely to yourself. The main tourist strip is pure spectacle and fine for a day, but the park is what you'll remember. Snorkel around the rock jetties for an impressive variety of fish in very clear, shallow water — no boat required. Then catch the Shell Island water taxi at the marina for the afternoon.",
  },
}
