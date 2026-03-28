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
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
