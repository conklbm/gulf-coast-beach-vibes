import type { Metadata } from 'next'
import ContentCard from '@/components/ContentCard'
import { posts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Gulf Coast Travel Blog — Tips, Guides & Local Advice',
  description:
    'Travel tips, packing guides, local secrets, and destination deep-dives for the Gulf Coast — written by someone who actually lives here.',
}

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-navy overflow-hidden">
        <div className="section-container relative z-10 text-center">
          <p className="text-ocean-300 text-sm font-semibold tracking-widest uppercase mb-3">
            Travel Tips & Guides
          </p>
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl mb-4">
            The Gulf Coast Blog
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-xl mx-auto">
            Packing lists, local tips, hidden spots, and everything else you need to plan the perfect Gulf Coast trip.
          </p>
        </div>
        <div className="wave-divider absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg"
               preserveAspectRatio="none" className="w-full h-8 md:h-10 fill-cream block">
            <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,10 1440,20 L1440,40 L0,40 Z" />
          </svg>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
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
        </div>
      </section>
    </>
  )
}
