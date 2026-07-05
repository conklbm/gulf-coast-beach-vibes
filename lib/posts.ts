export interface Post {
  slug: string
  title: string
  excerpt: string
  category: string
  heroImage: string
  publishedAt: string
  readTime: string
}

// Static post metadata — MDX files live in /content/blog/
export const posts: Post[] = [
  {
    slug: 'gulf-coast-beach-packing-list',
    title: 'The Ultimate Gulf Coast Beach Packing List',
    excerpt:
      "Don't show up to the Gulf Coast unprepared. Here's exactly what you need to pack for the perfect Gulf beach trip — from beach gear to sun protection to the snacks locals swear by.",
    category: 'Travel Tips',
    heroImage: '/images/beach-packing-list.jpg',
    publishedAt: '2024-12-01',
    readTime: '6 min read',
  },
  {
    slug: 'best-things-to-do-gulf-shores',
    title: 'Best Things to Do in Gulf Shores, AL',
    excerpt:
      "Gulf Shores has a lot more going on than just the beach — here's the local's guide to the best activities, hidden spots, and must-eat restaurants in Alabama's beach capital.",
    category: 'Gulf Shores',
    heroImage: '/images/gulf-shores-beach-alabama.jpg',
    publishedAt: '2024-11-15',
    readTime: '8 min read',
  },
  {
    slug: 'best-gulf-coast-beaches-for-families',
    title: 'The Best Gulf Coast Beaches for Families',
    excerpt:
      "Traveling with kids? Not all Gulf beaches are created equal. Here's where you'll find calm water, soft sand, good food nearby, and easy parking — so everyone has a great day.",
    category: 'Family Travel',
    heroImage: '/images/best-gulf-coast-beaches-families.webp',
    publishedAt: '2024-11-01',
    readTime: '7 min read',
  },
  {
    slug: 'gulf-shores-vs-destin',
    title: 'Gulf Shores vs. Destin: Which Beach Is Right for You?',
    excerpt:
      "It's the most common question Gulf Coast travelers ask. Both have stunning white sand and warm Gulf water — but they're very different trips. Here's the honest breakdown.",
    category: 'Destination Guides',
    heroImage: '/images/gulf-shores-vs-destin.webp',
    publishedAt: '2025-01-10',
    readTime: '9 min read',
  },
  {
    slug: 'gulf-coast-from-atlanta',
    title: 'Best Gulf Coast Beach from Atlanta (and How to Get There)',
    excerpt:
      "Atlanta to the Gulf Coast is one of the best beach drives in the Southeast — under 6 hours, no tolls, and some of the most beautiful white-sand beaches in America waiting at the end.",
    category: 'Road Trips',
    heroImage: '/images/gulf-coast-from-atlanta.webp',
    publishedAt: '2025-01-20',
    readTime: '8 min read',
  },
  {
    slug: 'best-time-to-visit-gulf-shores',
    title: 'Best Time to Visit Gulf Shores: A Month-by-Month Guide',
    excerpt:
      "Gulf Shores is good in every season — but some months are dramatically better than others. Here's what to expect every month of the year, plus the two windows most locals would recommend.",
    category: 'Travel Tips',
    heroImage: '/images/best-time-to-visit-gulf-shores.webp',
    publishedAt: '2025-02-01',
    readTime: '10 min read',
  },
  {
    slug: 'destin-vs-pensacola-beach',
    title: 'Destin vs. Pensacola Beach: Which Should You Choose?',
    excerpt:
      "Two of the best beaches on the planet, 50 miles apart. Same white quartz sand, same emerald Gulf water — but very different vibes, prices, and experiences. Here's how to choose.",
    category: 'Destination Guides',
    heroImage: '/images/pensacola-beach-florida.jpg',
    publishedAt: '2025-02-15',
    readTime: '8 min read',
  },
  {
    slug: 'gulf-coast-in-october',
    title: 'Gulf Coast in October: The Best Month Nobody Talks About',
    excerpt:
      "September crowds are gone, the water is still 75°F, prices drop 30%, and the weather is perfect. October might be the best month to visit the Gulf Coast — and almost no one knows it.",
    category: 'Travel Tips',
    heroImage: '/images/gulf-coast-in-october.webp',
    publishedAt: '2025-03-01',
    readTime: '7 min read',
  },
  {
    slug: 'best-shelling-beaches-gulf-coast',
    title: 'Best Shelling Beaches on the Gulf Coast (Ranked)',
    excerpt:
      "The Gulf Coast won't beat Sanibel for variety, but the right beaches at the right time deliver lightning whelks, sand dollars, horse conchs, and more. Here's where serious shellers go.",
    category: 'Beach Life',
    heroImage: '/images/best-shell-beach.jpg',
    publishedAt: '2025-03-10',
    readTime: '7 min read',
  },
  {
    slug: 'pet-friendly-gulf-coast-beaches',
    title: 'Pet-Friendly Gulf Coast Beaches: Where Dogs Are (and Aren\'t) Allowed',
    excerpt:
      "Dogs are welcome on parts of the Gulf Coast year-round — but the rules vary dramatically by location and season. Here's the complete breakdown so you don't get turned away at the gate.",
    category: 'Travel Tips',
    heroImage: '/images/pet-friendly-gulf-coast.webp',
    publishedAt: '2025-03-20',
    readTime: '6 min read',
  },
  {
    slug: 'gulf-coast-from-nashville',
    title: 'Gulf Coast Beach from Nashville: Your Complete Drive Guide',
    excerpt:
      "Gulf Shores is closer to Nashville than most people realize — a straight shot down I-65, under 5 hours on a good day. Here's everything you need to plan the perfect Nashville-to-Gulf-Coast trip.",
    category: 'Road Trips',
    heroImage: '/images/gulf-coast-from-nashville.webp',
    publishedAt: '2025-04-01',
    readTime: '7 min read',
  },
  {
    slug: 'gulf-coast-from-new-orleans',
    title: 'Gulf Coast Beach from New Orleans: 2.5 Hours to White Sand',
    excerpt:
      "New Orleans sits 80 miles from the Gulf — but the best beaches are 2.5 hours east in Alabama and the Florida Panhandle. Here's why locals make the drive and exactly how to do it.",
    category: 'Road Trips',
    heroImage: '/images/gulf-coast-from-new-orleans.webp',
    publishedAt: '2025-04-15',
    readTime: '7 min read',
  },
  {
    slug: 'gulf-coast-from-birmingham',
    title: 'Gulf Coast Beach from Birmingham: Your 3-Hour Escape',
    excerpt:
      "Birmingham to Gulf Shores is 3 hours on I-65 — one straight shot, no tolls, and some of the best white-sand beaches in the country at the end. Here's everything you need to plan it.",
    category: 'Road Trips',
    heroImage: '/images/gulf-coast-from-birmingham.jpg',
    publishedAt: '2025-04-20',
    readTime: '7 min read',
  },
  {
    slug: 'gulf-shores-vs-orange-beach',
    title: 'Gulf Shores vs. Orange Beach: Which Should You Choose?',
    excerpt:
      "Gulf Shores and Orange Beach are 10 minutes apart with the same gorgeous Gulf water — but they attract different travelers for real reasons. Here's the honest breakdown.",
    category: 'Destination Guides',
    heroImage: '/images/orange-beach-alabama.jpg',
    publishedAt: '2025-05-01',
    readTime: '8 min read',
  },
  {
    slug: '3-days-in-gulf-shores',
    title: '3 Days in Gulf Shores: The Perfect Long Weekend Itinerary',
    excerpt:
      "Three days is enough to do Gulf Shores right — two beach days, one state park day, great seafood every night. Here's exactly how to spend a long weekend on the Alabama Gulf Coast.",
    category: 'Travel Tips',
    heroImage: '/images/3-days-gulf-shores.webp',
    publishedAt: '2025-05-10',
    readTime: '8 min read',
  },
  {
    slug: 'is-destin-worth-it',
    title: 'Is Destin Worth It? An Honest Take',
    excerpt:
      "Destin is expensive and crowded in summer. So is it actually worth the premium — or are you paying for a brand name? Here's a straight answer with no sales pitch.",
    category: 'Destination Guides',
    heroImage: '/images/destin-florida.jpg',
    publishedAt: '2025-05-20',
    readTime: '8 min read',
  },
  {
    slug: 'gulf-coast-from-memphis',
    title: 'Gulf Coast Beach from Memphis: Everything You Need to Know',
    excerpt:
      "Memphis to Gulf Shores is 6 hours on I-65 — a very doable beach drive with one of the best white-sand Gulf Coast destinations at the end. Here's the best route and everything to plan.",
    category: 'Road Trips',
    heroImage: '/images/gulf-coast-from-memphis.webp',
    publishedAt: '2025-06-01',
    readTime: '7 min read',
  },
  {
    slug: 'gulf-coast-on-a-budget',
    title: 'Gulf Coast on a Budget: How to Do It Right for Less',
    excerpt:
      "The Gulf Coast doesn't have to be expensive. The right timing, the right beach, and a few smart moves can cut your costs 30–40% while delivering the same white sand and warm Gulf water.",
    category: 'Travel Tips',
    heroImage: '/images/gulf-coast-on-a-budget.webp',
    publishedAt: '2025-06-10',
    readTime: '9 min read',
  },
  {
    slug: 'best-time-to-visit-destin',
    title: 'Best Time to Visit Destin: A Month-by-Month Guide',
    excerpt:
      "Destin is worth visiting any time of year — but the experience (and price) varies dramatically by season. Here's exactly what to expect each month, plus the two windows locals recommend.",
    category: 'Travel Tips',
    heroImage: '/images/destin-florida.jpg',
    publishedAt: '2025-06-20',
    readTime: '10 min read',
  },
  {
    slug: '3-days-in-destin',
    title: '3 Days in Destin: The Perfect Long Weekend Itinerary',
    excerpt:
      "Three days is enough to experience the best of Destin — the emerald water, Henderson Beach, Harborwalk Village, world-class fishing, and the freshest Gulf seafood you've ever had.",
    category: 'Travel Tips',
    heroImage: '/images/destin-florida.jpg',
    publishedAt: '2025-07-01',
    readTime: '8 min read',
  },
  {
    slug: 'panama-city-beach-vs-destin',
    title: 'Panama City Beach vs. Destin: Which Is Right for You?',
    excerpt:
      "PCB and Destin are the two biggest names on the Florida Panhandle — same white sand, similar Gulf water, but very different vibes, prices, and experiences. Here's the honest breakdown.",
    category: 'Destination Guides',
    heroImage: '/images/panama-city-beach-vs-destin.webp',
    publishedAt: '2025-07-10',
    readTime: '8 min read',
  },
  {
    slug: 'navarre-beach-guide',
    title: "Navarre Beach, Florida: Florida's Best Kept Secret",
    excerpt:
      "Navarre Beach sits between Pensacola Beach and Fort Walton Beach with the same white sand and emerald water — and a fraction of the crowds. Here's everything you need to know about one of the most underrated beaches on the Gulf Coast.",
    category: 'Destination Guides',
    heroImage: '/images/navarre-beach-florida.jpg',
    publishedAt: '2025-08-01',
    readTime: '8 min read',
  },
  {
    slug: 'fort-walton-beach-guide',
    title: 'Fort Walton Beach, Florida: The Underrated Alternative to Destin',
    excerpt:
      "Fort Walton Beach shares the same barrier island and emerald Gulf water as Destin — at prices 15–25% lower, with far less traffic and a beach that actually has room on it. Here's the complete guide.",
    category: 'Destination Guides',
    heroImage: '/images/fort-walton-beach-guide.webp',
    publishedAt: '2025-08-10',
    readTime: '8 min read',
  },
  {
    slug: 'fort-walton-beach-vs-destin',
    title: 'Fort Walton Beach vs. Destin: Which Should You Choose?',
    excerpt:
      "Same barrier island, same emerald water, same white sand — but Fort Walton Beach is significantly cheaper and less crowded than Destin. Here's the honest comparison to help you decide.",
    category: 'Destination Guides',
    heroImage: '/images/fort-walton-beach-vs-destin.webp',
    publishedAt: '2025-08-20',
    readTime: '7 min read',
  },
  {
    slug: 'dauphin-island-guide',
    title: 'Dauphin Island, Alabama: Complete Travel Guide',
    excerpt:
      "Dauphin Island sits at the western edge of the Gulf Coast corridor with a Civil War fort, one of the best birding spots in North America, excellent shelling, and some of the most uncrowded beaches in Alabama. Here's everything you need to know.",
    category: 'Destination Guides',
    heroImage: '/images/dauphin-island-alabama.jpg',
    publishedAt: '2025-09-01',
    readTime: '9 min read',
  },
  {
    slug: '30a-florida-guide',
    title: '30A Florida: Complete Guide to the Beach Towns',
    excerpt:
      "Highway 30A traces 24 miles of the most distinctive coast on the Florida Panhandle — rare dune lakes, height-restricted development, and a string of planned communities from Seaside to Rosemary Beach. Here's the complete guide.",
    category: 'Destination Guides',
    heroImage: '/images/seaside-florida.jpg',
    publishedAt: '2025-09-10',
    readTime: '10 min read',
  },
  {
    slug: 'gulf-coast-road-trip-itinerary',
    title: 'The Ultimate Gulf Coast Road Trip: Dauphin Island to Panama City Beach',
    excerpt:
      "200 miles of white sand, emerald water, Civil War forts, barrier islands, and the best beaches in the country — all on one coastal road trip. Here's how to drive the full Gulf Coast corridor from Alabama to the Florida Panhandle.",
    category: 'Road Trips',
    heroImage: '/images/gulf-coast-road-trip.webp',
    publishedAt: '2025-09-20',
    readTime: '10 min read',
  },
  {
    slug: '3-days-in-pensacola-beach',
    title: '3 Days in Pensacola Beach: A Long Weekend Itinerary That Actually Makes Sense',
    excerpt:
      'Three days in Pensacola Beach gives you enough time for Casino Beach, the Gulf Pier, Fort Pickens, Opal Beach, and one good Pensacola-area side trip. This itinerary keeps the trip realistic, flexible, and easy to plan.',
    category: 'Itinerary',
    heroImage: '/images/3-days-in-pensacola-beach.webp',
    publishedAt: '2026-07-04',
    readTime: '9 min read',
  },
  {
    slug: 'orange-beach-vs-pensacola-beach',
    title: 'Orange Beach vs. Pensacola Beach: Which Should You Choose?',
    excerpt:
      "Orange Beach and Pensacola Beach are less than an hour apart, but they feel like very different trips. Here's how to choose based on beaches, food, crowds, parking, and what you want to do.",
    category: 'Comparison',
    heroImage: '/images/orange-beach-vs-pensacola-beach.webp',
    publishedAt: '2026-07-04',
    readTime: '6 min read',
  },
  {
    slug: 'pensacola-beach-vs-panama-city-beach',
    title: 'Pensacola Beach vs. Panama City Beach',
    excerpt:
      "Pensacola Beach and Panama City Beach both have white sand and Gulf water, but they feel like very different trips. Here's how to choose based on beaches, crowds, food, nightlife, attractions, and overall vibe.",
    category: 'Comparison',
    heroImage: '/images/pensacola-beach-vs-panama-city-beach.webp',
    publishedAt: '2026-07-04',
    readTime: '6 min read',
  },
  {
    slug: 'destin-vs-30a',
    title: 'Destin vs. 30A: Which Part of the Florida Panhandle Is Right for You?',
    excerpt:
      "Destin and 30A both have white sand and emerald water, but they offer very different beach trips. Here's how to choose based on crowds, costs, food, activities, and overall vibe.",
    category: 'Comparison',
    heroImage: '/images/destin-vs-30a.webp',
    publishedAt: '2026-07-04',
    readTime: '7 min read',
  },
  {
    slug: 'navarre-beach-vs-pensacola-beach',
    title: 'Navarre Beach vs. Pensacola Beach: The Quiet One vs. The Famous One',
    excerpt:
      "Navarre Beach and Pensacola Beach are close neighbors on Santa Rosa Island, but they offer very different trips. Here's how to choose based on crowds, food, things to do, parking, and overall vibe.",
    category: 'Comparison',
    heroImage: '/images/navarre-beach-vs-pensacola-beach.webp',
    publishedAt: '2026-07-04',
    readTime: '6 min read',
  },
  {
    slug: 'navarre-beach-vs-destin',
    title: 'Navarre Beach vs. Destin: Same Water, Very Different Trip',
    excerpt:
      "Navarre Beach and Destin both have white sand and clear Gulf water, but they offer very different trips. Here's how to choose based on crowds, food, activities, parking, and overall vibe.",
    category: 'Comparison',
    heroImage: '/images/navarre-beach-vs-destin.webp',
    publishedAt: '2026-07-04',
    readTime: '6 min read',
  },
  {
    slug: 'gulf-shores-vs-panama-city-beach',
    title: 'Gulf Shores vs. Panama City Beach',
    excerpt:
      "Gulf Shores and Panama City Beach both have white sand and Gulf water, but they offer very different trips. Here's how to choose based on crowds, costs, food, attractions, and overall vibe.",
    category: 'Comparison',
    heroImage: '/images/gulf-shores-vs-panama-city-beach.webp',
    publishedAt: '2026-07-04',
    readTime: '7 min read',
  },
  {
    slug: 'dauphin-island-vs-gulf-shores',
    title: 'Dauphin Island vs. Gulf Shores: Two Very Different Alabama Beaches',
    excerpt:
      "Dauphin Island and Gulf Shores are both Alabama beach destinations, but they feel like completely different trips. Here's how to choose based on crowds, food, things to do, parking, and overall vibe.",
    category: 'Comparison',
    heroImage: '/images/dauphin-island-vs-gulf-shores.webp',
    publishedAt: '2026-07-04',
    readTime: '7 min read',
  },
  {
    slug: '30a-vs-panama-city-beach',
    title: '30A vs. Panama City Beach: Laid-Back vs. Go-Big',
    excerpt:
      '30A and Panama City Beach sit close together on the Florida Panhandle, but they deliver two very different beach trips. This guide breaks down the beaches, parking, lodging, food, activities, and overall vibe so you can choose the right one.',
    category: 'Comparison',
    heroImage: '/images/30a-vs-panama-city-beach.webp',
    publishedAt: '2026-07-04',
    readTime: '9 min read',
  },
  {
    slug: 'miramar-beach-vs-destin',
    title: 'Miramar Beach vs. Destin: Are They Really That Different?',
    excerpt:
      'Miramar Beach and Destin sit minutes apart, but they work better for different kinds of beach trips. This guide breaks down the beaches, parking, lodging, food, shopping, boat days, and overall feel so you can choose the right Emerald Coast base.',
    category: 'Comparison',
    heroImage: '/images/miramar-beach-vs-destin.webp',
    publishedAt: '2026-07-04',
    readTime: '8 min read',
  },
  {
    slug: 'gulf-breeze-vs-pensacola-beach',
    title: 'Gulf Breeze vs. Pensacola Beach: Which Side of the Bay?',
    excerpt:
      'Gulf Breeze and Pensacola Beach are close on the map, but they give you two very different kinds of trips. This guide compares beach access, lodging, parking, food, family activities, parks, and overall vacation feel so you can pick the right base.',
    category: 'Comparison',
    heroImage: '/images/gulf-breeze-vs-pensacola-beach.webp',
    publishedAt: '2026-07-04',
    readTime: '7 min read',
  },
  {
    slug: 'gulf-shores-vs-myrtle-beach',
    title: 'Gulf Shores vs. Myrtle Beach: Which Is Actually Better?',
    excerpt:
      'Gulf Shores and Myrtle Beach are both classic family beach destinations, but they deliver very different trips. This guide compares the beaches, parking, lodging, attractions, food, nature, and overall vacation feel so you can choose the right one.',
    category: 'Comparison',
    heroImage: '/images/gulf-shores-vs-myrtle-beach.webp',
    publishedAt: '2026-07-04',
    readTime: '8 min read',
  },
  {
    slug: 'destin-vs-clearwater',
    title: 'Destin vs. Clearwater Beach: Florida Panhandle vs. Tampa Bay',
    excerpt:
      'Destin and Clearwater are both famous Florida Gulf Coast beach destinations, but they feel very different once you arrive. This guide compares the beaches, parking, lodging, boat trips, family activities, restaurants, and overall vacation style so you can choose the better fit.',
    category: 'Comparison',
    heroImage: '/images/destin-vs-clearwater.webp',
    publishedAt: '2026-07-04',
    readTime: '8 min read',
  },
  {
    slug: 'is-gulf-shores-worth-it',
    title: 'Is Gulf Shores Worth It? An Honest Take',
    excerpt:
      "Gulf Shores is worth it for travelers who want white sand, easy beach access, Gulf State Park, family attractions, and a classic Alabama beach-town setup. Here's where it shines, where it falls short, and who should choose another beach.",
    category: 'Destination Guides',
    heroImage: '/images/is-gulf-shores-worth-it.webp',
    publishedAt: '2026-07-04',
    readTime: '9 min read',
  },
  {
    slug: 'is-pensacola-beach-worth-it',
    title: 'Is Pensacola Beach Worth It? An Honest Take',
    excerpt:
      "Pensacola Beach is worth it for travelers who want white sand, clear Gulf water, Fort Pickens, and an easy beach-town setup without the size of Destin or Panama City Beach. Here's where it shines, where it falls short, and who will enjoy it most.",
    category: 'Destination Guides',
    heroImage: '/images/is-pensacola-beach-worth-it.webp',
    publishedAt: '2026-07-04',
    readTime: '9 min read',
  },
  {
    slug: 'is-30a-worth-it',
    title: 'Is 30A Worth the Hype? An Honest Take',
    excerpt:
      "30A is worth it for travelers who want beautiful beaches, walkable beach towns, bike paths, state parks, coastal dune lakes, and a polished Florida Panhandle trip. Here's where it shines, where it gets frustrating, and who should choose another beach.",
    category: 'Destination Guides',
    heroImage: '/images/is-30a-worth-it.webp',
    publishedAt: '2026-07-04',
    readTime: '8 min read',
  },
  {
    slug: 'is-panama-city-beach-worth-it',
    title: 'Is Panama City Beach Worth It?',
    excerpt:
      "Panama City Beach is worth it for travelers who want white sand, easy public beach access, Pier Park, family attractions, St. Andrews State Park, and Shell Island close by. Here's where PCB shines, where it gets frustrating, and who should choose another beach.",
    category: 'Destination Guides',
    heroImage: '/images/is-panama-city-beach-worth-it.webp',
    publishedAt: '2026-07-04',
    readTime: '9 min read',
  },
  {
    slug: 'is-navarre-beach-worth-it',
    title: 'Is Navarre Beach Worth It?',
    excerpt:
      "Navarre Beach is worth it for travelers who want a quieter Florida Panhandle beach with white sand, clear Gulf water, a long fishing pier, snorkel reefs, and easy access to Gulf Islands National Seashore. Here's where it shines, where it feels limited, and who should choose another beach.",
    category: 'Destination Guides',
    heroImage: '/images/is-navarre-beach-worth-it.webp',
    publishedAt: '2026-07-04',
    readTime: '8 min read',
  },
  {
    slug: 'is-destin-crowded',
    title: 'How Crowded Is Destin? What to Expect by Season',
    excerpt:
      "Destin does get crowded, especially in summer, spring break, holiday weekends, and around HarborWalk, Crab Island, U.S. 98, and popular beach access points. Here's when crowds are worst, where they show up, and how to plan a better 2026 trip.",
    category: 'Destination Guides',
    heroImage: '/images/is-destin-crowded.webp',
    publishedAt: '2026-07-04',
    readTime: '8 min read',
  },
  {
    slug: 'is-pensacola-beach-crowded',
    title: 'How Crowded Is Pensacola Beach?',
    excerpt:
      "Pensacola Beach can get crowded around Casino Beach, the Gulf Pier, summer weekends, holidays, and Blue Angels events. Here's when crowds are worst, where they show up, and how to plan a smoother 2026 beach trip.",
    category: 'Destination Guides',
    heroImage: '/images/is-pensacola-beach-crowded.webp',
    publishedAt: '2026-07-04',
    readTime: '8 min read',
  },
  {
    slug: 'orange-beach-guide',
    title: 'Orange Beach, Alabama: The Complete Guide',
    excerpt:
      "Orange Beach is one of Alabama's best beach bases for white sand, condo stays, boating, waterfront restaurants, and easy access to Gulf State Park. Here's where to go, what to do, and what to know before you book the trip.",
    category: 'Destination Guides',
    heroImage: '/images/orange-beach-guide.webp',
    publishedAt: '2026-07-04',
    readTime: '10 min read',
  },
  {
    slug: 'best-beaches-pensacola-area',
    title: 'Best Beaches Near Pensacola: Ranked',
    excerpt:
      "The Pensacola area has more than one kind of beach day, from busy Casino Beach to calm Quietwater Beach, natural Opal Beach, protected Johnson Beach, and quieter Navarre Beach. Here's how to choose the right stretch of sand for your trip.",
    category: 'Destination Guides',
    heroImage: '/images/best-beaches-pensacola-area.webp',
    publishedAt: '2026-07-04',
    readTime: '9 min read',
  },
  {
    slug: 'best-beaches-destin-area',
    title: 'Best Beaches Near Destin: All Your Options Ranked',
    excerpt:
      "The Destin area has several different beach experiences, from Henderson Beach State Park and James Lee Park to Crystal Beach, Norriego Point, Miramar Beach, and Okaloosa Island. Here's how to choose the right beach for your 2026 trip.",
    category: 'Destination Guides',
    heroImage: '/images/best-beaches-destin-area.webp',
    publishedAt: '2026-07-04',
    readTime: '9 min read',
  },
  {
    slug: 'what-is-30a',
    title: "What Is 30A? A Beginner's Guide to Florida's Scenic Highway",
    excerpt:
      "30A is a scenic beach highway and vacation area in South Walton, Florida, known for white sand, turquoise Gulf water, beach towns, biking, state parks, and coastal dune lakes. Here's what the name means, where it is, and what to know before planning a trip.",
    category: 'Destination Guides',
    heroImage: '/images/what-is-30a.webp',
    publishedAt: '2026-07-04',
    readTime: '9 min read',
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
