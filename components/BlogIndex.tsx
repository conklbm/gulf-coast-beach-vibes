'use client'

import { useMemo, useState } from 'react'
import ContentCard from '@/components/ContentCard'
import type { Post } from '@/lib/posts'

const PAGE_SIZE = 12

interface BlogIndexProps {
  posts: Post[]
}

export default function BlogIndex({ posts }: BlogIndexProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE)

  // Category chips: "All" first, then categories ordered by post count (desc)
  const categories = useMemo(() => {
    const counts = new Map<string, number>()
    for (const post of posts) {
      counts.set(post.category, (counts.get(post.category) ?? 0) + 1)
    }
    const ordered = Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([name]) => name)
    return ['All', ...ordered]
  }, [posts])

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? posts
        : posts.filter((post) => post.category === activeCategory),
    [posts, activeCategory],
  )

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  const selectCategory = (category: string) => {
    setActiveCategory(category)
    setVisibleCount(PAGE_SIZE)
  }

  return (
    <>
      {/* Category filter */}
      <div
        className="flex gap-2 overflow-x-auto scrollbar-hide pb-3 mb-8
                   sm:flex-wrap sm:overflow-visible sm:justify-center"
        role="group"
        aria-label="Filter posts by category"
      >
        {categories.map((category) => {
          const isActive = category === activeCategory
          return (
            <button
              key={category}
              type="button"
              onClick={() => selectCategory(category)}
              aria-pressed={isActive}
              className={`flex-shrink-0 min-h-[44px] px-4 py-2 rounded-full text-sm font-semibold
                          transition-colors duration-200 whitespace-nowrap
                          ${
                            isActive
                              ? 'bg-ocean text-white shadow-sm'
                              : 'bg-white text-navy border border-navy/15 hover:border-ocean hover:text-ocean'
                          }`}
            >
              {category}
            </button>
          )
        })}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((post) => (
          <ContentCard
            key={post.slug}
            href={`/blog/${post.slug}`}
            imageSrc={post.heroImage}
            imageAlt={post.title}
            category={post.category}
            title={post.title}
            excerpt={post.excerpt}
            meta={post.readTime}
          />
        ))}
      </div>

      {/* Load more */}
      {hasMore && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            className="btn-secondary"
          >
            Load More
          </button>
          <p className="mt-3 text-sm text-navy/50">
            Showing {visible.length} of {filtered.length}
          </p>
        </div>
      )}
    </>
  )
}
