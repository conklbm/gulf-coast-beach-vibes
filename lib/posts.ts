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
    heroImage:
      'https://images.unsplash.com/photo-1505228058230-1d7cce43cd57?auto=format&fit=crop&w=800&q=80',
    publishedAt: '2024-12-01',
    readTime: '6 min read',
  },
  {
    slug: 'best-things-to-do-gulf-shores',
    title: 'Best Things to Do in Gulf Shores, AL',
    excerpt:
      "Gulf Shores has a lot more going on than just the beach — here's the local's guide to the best activities, hidden spots, and must-eat restaurants in Alabama's beach capital.",
    category: 'Gulf Shores',
    heroImage:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
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
    heroImage:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
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
      'https://images.unsplash.com/photo-1494266296545-c46a879d7a22?auto=format&fit=crop&w=800&q=80',
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
    heroImage:
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
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
    heroImage:
      'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=800&q=80',
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
    heroImage:
      'https://images.unsplash.com/photo-1530521954074-e64f4810b5d2?auto=format&fit=crop&w=800&q=80',
    publishedAt: '2025-04-01',
    readTime: '7 min read',
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
