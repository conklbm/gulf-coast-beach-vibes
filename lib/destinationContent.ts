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
}
