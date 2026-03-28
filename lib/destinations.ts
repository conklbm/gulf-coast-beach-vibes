// TODO: Replace heroImage and cardImage URLs with real Gulf Coast beach photography

export interface Destination {
  slug: string
  name: string
  state: 'AL' | 'FL'
  tagline: string
  description: string
  heroImage: string
  cardImage: string
  highlights: string[]
  order: number // West → East
  hasFullContent: boolean // true = full page, false = coming soon stub
}

export const destinations: Destination[] = [
  {
    slug: 'dauphin-island',
    name: 'Dauphin Island',
    state: 'AL',
    tagline: "Alabama's most secluded island escape",
    description:
      "A quiet barrier island at the mouth of Mobile Bay, Dauphin Island offers a peaceful alternative to the busier Gulf Coast beaches. Known for world-class birding, shelling, and that authentic \"old Gulf\" feel that's getting harder to find.",
    heroImage:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80',
    cardImage:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Pristine barrier island beaches',
      'Audubon Bird Sanctuary',
      'Laid-back fishing village',
      'Dinosaur Island shelling',
    ],
    order: 1,
    hasFullContent: false,
  },
  {
    slug: 'gulf-shores',
    name: 'Gulf Shores',
    state: 'AL',
    tagline: "Alabama's #1 beach destination",
    description:
      'Gulf Shores is where Alabama goes to the beach. With miles of white-sand Gulf Coast shoreline, Gulf State Park, great restaurants, and family-friendly activities, it earns the title of Alabama\'s beach capital every single year.',
    heroImage:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1920&q=80',
    cardImage:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Gulf State Park & nature trails',
      'Gulf Shores Public Beach',
      'Lively dining & nightlife',
      'Great for families',
    ],
    order: 2,
    hasFullContent: true,
  },
  {
    slug: 'orange-beach',
    name: 'Orange Beach',
    state: 'AL',
    tagline: "Sportfishing capital of the Gulf Coast",
    description:
      "Orange Beach sits right next door to Gulf Shores and packs just as much punch — upscale condos, world-class marinas, deep-sea fishing, and some of the best fresh seafood on the Gulf. A little more resort-polished than its neighbor.",
    heroImage:
      'https://images.unsplash.com/photo-1502635385003-6bd594eae11b?auto=format&fit=crop&w=1920&q=80',
    cardImage:
      'https://images.unsplash.com/photo-1502635385003-6bd594eae11b?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Deep-sea fishing charters',
      'The Wharf entertainment complex',
      'Perdido Pass waterway',
      'Fresh Gulf seafood',
    ],
    order: 3,
    hasFullContent: false,
  },
  {
    slug: 'pensacola-beach',
    name: 'Pensacola Beach',
    state: 'FL',
    tagline: "World's whitest, most beautiful sand beaches",
    description:
      "Pensacola Beach sits on Santa Rosa Island and is home to some of the most stunning white quartz sand on the planet. The water runs every shade of green and blue, and the beach is consistently rated among the best in the country.",
    heroImage:
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=80',
    cardImage:
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Sugar-white quartz sand',
      'Gulf Islands National Seashore',
      'Vibrant Pensacola Beach Boardwalk',
      'Historic Pensacola City nearby',
    ],
    order: 4,
    hasFullContent: true,
  },
  {
    slug: 'gulf-breeze',
    name: 'Gulf Breeze',
    state: 'FL',
    tagline: 'A charming town on the Santa Rosa Sound',
    description:
      "Gulf Breeze is the gateway to Pensacola Beach — a quiet, walkable town on the peninsula between Pensacola Bay and Santa Rosa Sound. Great for kayaking, bay fishing, and experiencing local Florida life without the tourist crowds.",
    heroImage:
      'https://images.unsplash.com/photo-1505228058230-1d7cce43cd57?auto=format&fit=crop&w=1920&q=80',
    cardImage:
      'https://images.unsplash.com/photo-1505228058230-1d7cce43cd57?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Bay kayaking & paddleboarding',
      'Zoo of Northwest Florida',
      'Local dining & craft breweries',
      'Quick access to Pensacola Beach',
    ],
    order: 5,
    hasFullContent: false,
  },
  {
    slug: 'navarre-beach',
    name: 'Navarre Beach',
    state: 'FL',
    tagline: "Florida's best kept secret",
    description:
      "Navarre Beach has earned that nickname honestly. Tucked between Pensacola Beach and Fort Walton Beach, this uncrowded stretch of Gulf Islands National Seashore offers crystal-clear water, spectacular sunsets, and none of the chaos.",
    heroImage:
      'https://images.unsplash.com/photo-1489824904134-2f1e6bbaad52?auto=format&fit=crop&w=1920&q=80',
    cardImage:
      'https://images.unsplash.com/photo-1489824904134-2f1e6bbaad52?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Gulf Islands National Seashore',
      'One of the least-crowded beaches',
      'Amazing fishing pier',
      'Nesting sea turtles in summer',
    ],
    order: 6,
    hasFullContent: false,
  },
  {
    slug: 'fort-walton-beach',
    name: 'Fort Walton Beach',
    state: 'FL',
    tagline: 'Emerald Coast history and beach bliss',
    description:
      "Fort Walton Beach has everything you need for a great Gulf Coast vacation — great beaches, serious water sports, a walkable downtown with good food, and easy access to both Destin and Navarre. No pretension, just a good time.",
    heroImage:
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1920&q=80',
    cardImage:
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Okaloosa Island beaches',
      'Indian Temple Mound Museum',
      'Water sports galore',
      'More affordable than Destin',
    ],
    order: 7,
    hasFullContent: false,
  },
  {
    slug: 'destin',
    name: 'Destin',
    state: 'FL',
    tagline: 'The Emerald Coast jewel — where the water is impossibly green',
    description:
      "Destin's emerald-green water is genuinely unlike anything else on the Gulf Coast. The combination of fine white quartz sand and clear shallow water creates a color that looks almost tropical. Add world-class fishing, great restaurants, and you understand why it's one of Florida's most visited beach towns.",
    heroImage:
      'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1920&q=80',
    cardImage:
      'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Iconic emerald-green water',
      "World's luckiest fishing village",
      'Henderson Beach State Park',
      "Harborwalk Village dining",
    ],
    order: 8,
    hasFullContent: true,
  },
  {
    slug: 'miramar-beach',
    name: 'Miramar Beach',
    state: 'FL',
    tagline: 'Upscale 30A living on the Emerald Coast',
    description:
      "Miramar Beach is the more upscale, residential neighbor to Destin — quieter, more walkable, with luxury rentals right on the beach. It's a great base if you want Destin's water without Destin's crowds.",
    heroImage:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80',
    cardImage:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Quiet, upscale beach community',
      'Sandestin Golf & Beach Resort',
      'Grand Boulevard shopping',
      'Direct access to Destin Commons',
    ],
    order: 9,
    hasFullContent: false,
  },
  {
    slug: 'seaside',
    name: 'Seaside / 30A',
    state: 'FL',
    tagline: 'The iconic Panhandle town that inspired a movement',
    description:
      "Seaside is America's most famous planned community — the town that launched the New Urbanism movement and served as the set for The Truman Show. Its pastel cottages, white-picket fences, and turquoise water are the image most people picture when they think Florida Panhandle perfection.",
    heroImage:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=1920&q=80',
    cardImage:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Iconic pastel architecture',
      'Vibrant Seaside Farmers Market',
      'Grayton Beach State Park nearby',
      'Scenic 30A cycling corridor',
    ],
    order: 10,
    hasFullContent: false,
  },
  {
    slug: 'panama-city-beach',
    name: 'Panama City Beach',
    state: 'FL',
    tagline: '27 miles of white-sand Gulf beaches',
    description:
      "Panama City Beach has the longest stretch of pure white Gulf sand on our list — 27 miles of it. Whether you're here for the beach, the theme parks, the nightlife, or the incredible seafood, PCB has something for everyone. It's bigger and louder than the others, and that's exactly why people love it.",
    heroImage:
      'https://images.unsplash.com/photo-1515165980-f7faeba0a2ab?auto=format&fit=crop&w=1920&q=80',
    cardImage:
      'https://images.unsplash.com/photo-1515165980-f7faeba0a2ab?auto=format&fit=crop&w=800&q=80',
    highlights: [
      '27 miles of Gulf beach',
      'Pier Park shopping & entertainment',
      'St. Andrews State Park',
      'Shell Island day trips',
    ],
    order: 11,
    hasFullContent: false,
  },
]

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug)
}

export function getFeaturedDestinations(): Destination[] {
  return destinations.filter((d) => d.hasFullContent)
}
