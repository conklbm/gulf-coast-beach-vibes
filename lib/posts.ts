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
    heroImage:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    publishedAt: '2024-11-01',
    readTime: '7 min read',
  },
  {
    slug: 'gulf-shores-vs-destin',
    title: 'Gulf Shores vs. Destin: Which Beach Is Right for You?',
    excerpt:
      "It's the most common question Gulf Coast travelers ask. Both have stunning white sand and warm Gulf water — but they're very different trips. Here's the honest breakdown.",
    category: 'Destination Guides',
    heroImage: '/images/gulf-shores-beach-alabama.jpg',
    publishedAt: '2025-01-10',
    readTime: '9 min read',
  },
  {
    slug: 'gulf-coast-from-atlanta',
    title: 'Best Gulf Coast Beach from Atlanta (and How to Get There)',
    excerpt:
      "Atlanta to the Gulf Coast is one of the best beach drives in the Southeast — under 6 hours, no tolls, and some of the most beautiful white-sand beaches in America waiting at the end.",
    category: 'Road Trips',
    heroImage:
      'https://images.unsplash.com/photo-1753744402410-44319f72f8c5?auto=format&fit=crop&w=800&q=80',
    publishedAt: '2025-01-20',
    readTime: '8 min read',
  },
  {
    slug: 'best-time-to-visit-gulf-shores',
    title: 'Best Time to Visit Gulf Shores: A Month-by-Month Guide',
    excerpt:
      "Gulf Shores is good in every season — but some months are dramatically better than others. Here's what to expect every month of the year, plus the two windows most locals would recommend.",
    category: 'Travel Tips',
    heroImage:
      'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=800&q=80',
    publishedAt: '2025-02-01',
    readTime: '10 min read',
  },
  {
    slug: 'destin-vs-pensacola-beach',
    title: 'Destin vs. Pensacola Beach: Which Should You Choose?',
    excerpt:
      "Two of the best beaches on the planet, 50 miles apart. Same white quartz sand, same emerald Gulf water — but very different vibes, prices, and experiences. Here's how to choose.",
    category: 'Destination Guides',
    heroImage: '/images/destin-vs-pensacola-beach.jpg',
    publishedAt: '2025-02-15',
    readTime: '8 min read',
  },
  {
    slug: 'gulf-coast-in-october',
    title: 'Gulf Coast in October: The Best Month Nobody Talks About',
    excerpt:
      "September crowds are gone, the water is still 75°F, prices drop 30%, and the weather is perfect. October might be the best month to visit the Gulf Coast — and almost no one knows it.",
    category: 'Travel Tips',
    heroImage:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
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
    heroImage:
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80',
    publishedAt: '2025-03-20',
    readTime: '6 min read',
  },
  {
    slug: 'gulf-coast-from-nashville',
    title: 'Gulf Coast Beach from Nashville: Your Complete Drive Guide',
    excerpt:
      "Gulf Shores is closer to Nashville than most people realize — a straight shot down I-65, under 5 hours on a good day. Here's everything you need to plan the perfect Nashville-to-Gulf-Coast trip.",
    category: 'Road Trips',
    heroImage: '/images/beachers-near-Nashville-TN.jpg',
    publishedAt: '2025-04-01',
    readTime: '7 min read',
  },
  {
    slug: 'gulf-coast-from-new-orleans',
    title: 'Gulf Coast Beach from New Orleans: 2.5 Hours to White Sand',
    excerpt:
      "New Orleans sits 80 miles from the Gulf — but the best beaches are 2.5 hours east in Alabama and the Florida Panhandle. Here's why locals make the drive and exactly how to do it.",
    category: 'Road Trips',
    heroImage:
      'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=800&q=80',
    publishedAt: '2025-04-15',
    readTime: '7 min read',
  },
  {
    slug: 'gulf-coast-from-birmingham',
    title: 'Gulf Coast Beach from Birmingham: Your 3-Hour Escape',
    excerpt:
      "Birmingham to Gulf Shores is 3 hours on I-65 — one straight shot, no tolls, and some of the best white-sand beaches in the country at the end. Here's everything you need to plan it.",
    category: 'Road Trips',
    heroImage:
      'https://images.unsplash.com/photo-1495563381401-ecf3b1abe044?auto=format&fit=crop&w=800&q=80',
    publishedAt: '2025-04-20',
    readTime: '7 min read',
  },
  {
    slug: 'gulf-shores-vs-orange-beach',
    title: 'Gulf Shores vs. Orange Beach: Which Should You Choose?',
    excerpt:
      "Gulf Shores and Orange Beach are 10 minutes apart with the same gorgeous Gulf water — but they attract different travelers for real reasons. Here's the honest breakdown.",
    category: 'Destination Guides',
    heroImage: '/images/gulf-shores-beach-alabama.jpg',
    publishedAt: '2025-05-01',
    readTime: '8 min read',
  },
  {
    slug: '3-days-in-gulf-shores',
    title: '3 Days in Gulf Shores: The Perfect Long Weekend Itinerary',
    excerpt:
      "Three days is enough to do Gulf Shores right — two beach days, one state park day, great seafood every night. Here's exactly how to spend a long weekend on the Alabama Gulf Coast.",
    category: 'Travel Tips',
    heroImage: '/images/gulf-shores-beach-alabama.jpg',
    publishedAt: '2025-05-10',
    readTime: '8 min read',
  },
  {
    slug: 'is-destin-worth-it',
    title: 'Is Destin Worth It? An Honest Take',
    excerpt:
      "Destin is expensive and crowded in summer. So is it actually worth the premium — or are you paying for a brand name? Here's a straight answer with no sales pitch.",
    category: 'Destination Guides',
    heroImage:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    publishedAt: '2025-05-20',
    readTime: '8 min read',
  },
  {
    slug: 'gulf-coast-from-memphis',
    title: 'Gulf Coast Beach from Memphis: Everything You Need to Know',
    excerpt:
      "Memphis to Gulf Shores is 6 hours on I-65 — a very doable beach drive with one of the best white-sand Gulf Coast destinations at the end. Here's the best route and everything to plan.",
    category: 'Road Trips',
    heroImage:
      'https://images.unsplash.com/photo-1476984251899-8d7fdfc5c92c?auto=format&fit=crop&w=800&q=80',
    publishedAt: '2025-06-01',
    readTime: '7 min read',
  },
  {
    slug: 'gulf-coast-on-a-budget',
    title: 'Gulf Coast on a Budget: How to Do It Right for Less',
    excerpt:
      "The Gulf Coast doesn't have to be expensive. The right timing, the right beach, and a few smart moves can cut your costs 30–40% while delivering the same white sand and warm Gulf water.",
    category: 'Travel Tips',
    heroImage:
      'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=800&q=80',
    publishedAt: '2025-06-10',
    readTime: '9 min read',
  },
  {
    slug: 'best-time-to-visit-destin',
    title: 'Best Time to Visit Destin: A Month-by-Month Guide',
    excerpt:
      "Destin is worth visiting any time of year — but the experience (and price) varies dramatically by season. Here's exactly what to expect each month, plus the two windows locals recommend.",
    category: 'Travel Tips',
    heroImage:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    publishedAt: '2025-06-20',
    readTime: '10 min read',
  },
  {
    slug: '3-days-in-destin',
    title: '3 Days in Destin: The Perfect Long Weekend Itinerary',
    excerpt:
      "Three days is enough to experience the best of Destin — the emerald water, Henderson Beach, Harborwalk Village, world-class fishing, and the freshest Gulf seafood you've ever had.",
    category: 'Travel Tips',
    heroImage:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    publishedAt: '2025-07-01',
    readTime: '8 min read',
  },
  {
    slug: 'panama-city-beach-vs-destin',
    title: 'Panama City Beach vs. Destin: Which Is Right for You?',
    excerpt:
      "PCB and Destin are the two biggest names on the Florida Panhandle — same white sand, similar Gulf water, but very different vibes, prices, and experiences. Here's the honest breakdown.",
    category: 'Destination Guides',
    heroImage: '/images/destin-vs-pensacola-beach.jpg',
    publishedAt: '2025-07-10',
    readTime: '8 min read',
  },
  {
    slug: 'navarre-beach-guide',
    title: "Navarre Beach, Florida: Florida's Best Kept Secret",
    excerpt:
      "Navarre Beach sits between Pensacola Beach and Fort Walton Beach with the same white sand and emerald water — and a fraction of the crowds. Here's everything you need to know about one of the most underrated beaches on the Gulf Coast.",
    category: 'Destination Guides',
    heroImage:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    publishedAt: '2025-08-01',
    readTime: '8 min read',
  },
  {
    slug: 'fort-walton-beach-guide',
    title: 'Fort Walton Beach, Florida: The Underrated Alternative to Destin',
    excerpt:
      "Fort Walton Beach shares the same barrier island and emerald Gulf water as Destin — at prices 15–25% lower, with far less traffic and a beach that actually has room on it. Here's the complete guide.",
    category: 'Destination Guides',
    heroImage:
      'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=800&q=80',
    publishedAt: '2025-08-10',
    readTime: '8 min read',
  },
  {
    slug: 'fort-walton-beach-vs-destin',
    title: 'Fort Walton Beach vs. Destin: Which Should You Choose?',
    excerpt:
      "Same barrier island, same emerald water, same white sand — but Fort Walton Beach is significantly cheaper and less crowded than Destin. Here's the honest comparison to help you decide.",
    category: 'Destination Guides',
    heroImage:
      'https://images.unsplash.com/photo-1495563381401-ecf3b1abe044?auto=format&fit=crop&w=800&q=80',
    publishedAt: '2025-08-20',
    readTime: '7 min read',
  },
  {
    slug: 'dauphin-island-guide',
    title: 'Dauphin Island, Alabama: Complete Travel Guide',
    excerpt:
      "Dauphin Island sits at the western edge of the Gulf Coast corridor with a Civil War fort, one of the best birding spots in North America, excellent shelling, and some of the most uncrowded beaches in Alabama. Here's everything you need to know.",
    category: 'Destination Guides',
    heroImage:
      'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=800&q=80',
    publishedAt: '2025-09-01',
    readTime: '9 min read',
  },
  {
    slug: '30a-florida-guide',
    title: '30A Florida: Complete Guide to the Beach Towns',
    excerpt:
      "Highway 30A traces 24 miles of the most distinctive coast on the Florida Panhandle — rare dune lakes, height-restricted development, and a string of planned communities from Seaside to Rosemary Beach. Here's the complete guide.",
    category: 'Destination Guides',
    heroImage:
      'https://images.unsplash.com/photo-1476984251899-8d7fdfc5c92c?auto=format&fit=crop&w=800&q=80',
    publishedAt: '2025-09-10',
    readTime: '10 min read',
  },
  {
    slug: 'gulf-coast-road-trip-itinerary',
    title: 'The Ultimate Gulf Coast Road Trip: Dauphin Island to Panama City Beach',
    excerpt:
      "200 miles of white sand, emerald water, Civil War forts, barrier islands, and the best beaches in the country — all on one coastal road trip. Here's how to drive the full Gulf Coast corridor from Alabama to the Florida Panhandle.",
    category: 'Road Trips',
    heroImage:
      'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=800&q=80',
    publishedAt: '2025-09-20',
    readTime: '10 min read',
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
