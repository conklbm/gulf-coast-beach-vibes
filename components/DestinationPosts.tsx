import Link from 'next/link'
import { posts, type Post } from '@/lib/posts'
import { destinations } from '@/lib/destinations'

/**
 * Links a destination hub to the articles written about it.
 *
 * Why this exists: destination pages receive 30+ internal links each but linked
 * out to nothing except other destination pages, so they were dead ends — the
 * posts that actually rank got no equity back from the hub. GSC also showed the
 * hub and its `-guide` post competing for the same head term, with the guide
 * winning. Listing the guide first, with the destination name in the anchor,
 * points that signal at the page Google already prefers instead of against it.
 *
 * Matching is by slug substring so new posts join their cluster automatically —
 * no per-destination list to maintain.
 */

// Some destinations are known by a different name in post slugs.
const SLUG_ALIASES: Record<string, string[]> = {
  seaside: ['seaside', '30a'],
}

// Lower sorts first. The guide leads; comparisons trail.
function rank(slug: string): number {
  if (slug.endsWith('-guide')) return 0
  if (slug.startsWith('best-things-to-do')) return 1
  if (slug.startsWith('where-to-stay')) return 2
  if (slug.startsWith('best-time-to-visit')) return 3
  if (slug.startsWith('3-days-in') || slug.endsWith('-weekend')) return 4
  if (slug.startsWith('is-')) return 5
  if (slug.includes('-vs-')) return 7
  return 6
}

export function getPostsForDestination(destinationSlug: string, limit = 8): Post[] {
  const keys = SLUG_ALIASES[destinationSlug] ?? [destinationSlug]
  return posts
    .filter((p) => keys.some((k) => p.slug.includes(k)))
    .sort((a, b) => rank(a.slug) - rank(b.slug) || a.title.localeCompare(b.title))
    .slice(0, limit)
}

export default function DestinationPosts({ destinationSlug }: { destinationSlug: string }) {
  const related = getPostsForDestination(destinationSlug)
  if (related.length === 0) return null

  const destination = destinations.find((d) => d.slug === destinationSlug)
  const name = destination?.name ?? 'This Destination'

  return (
    <section className="bg-cream py-14">
      <div className="section-container max-w-5xl">
        <h2 className="font-display font-bold text-navy text-3xl mb-2">
          Read More About {name}
        </h2>
        <p className="text-navy/60 mb-8">
          Deeper guides from people who actually go.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {related.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="card p-5 h-full flex flex-col cursor-pointer group"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-ocean mb-2">
                  {post.category}
                </span>
                <span className="font-display font-bold text-navy text-base leading-snug mb-2
                                 group-hover:text-ocean transition-colors">
                  {post.title}
                </span>
                <span className="text-navy/60 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
