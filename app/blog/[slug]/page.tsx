import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import NewsletterBanner from '@/components/NewsletterBanner'
import { posts, getPostBySlug } from '@/lib/posts'

// Content components — one per article
import PackingListContent from './content/gulf-coast-beach-packing-list'
import BestThingsToDoGulfShoresContent from './content/best-things-to-do-gulf-shores'
import BestGulfCoastBeachesFamiliesContent from './content/best-gulf-coast-beaches-for-families'
import GulfShoresVsDestinContent from './content/gulf-shores-vs-destin'
import GulfCoastFromAtlantaContent from './content/gulf-coast-from-atlanta'
import BestTimeGulfShoresContent from './content/best-time-to-visit-gulf-shores'
import DestinVsPensacolaContent from './content/destin-vs-pensacola-beach'
import GulfCoastOctoberContent from './content/gulf-coast-in-october'
import BestShellingContent from './content/best-shelling-beaches-gulf-coast'
import PetFriendlyContent from './content/pet-friendly-gulf-coast-beaches'
import GulfCoastFromNashvilleContent from './content/gulf-coast-from-nashville'
import GulfCoastFromNewOrleansContent from './content/gulf-coast-from-new-orleans'
import GulfCoastFromBirminghamContent from './content/gulf-coast-from-birmingham'
import GulfShoresVsOrangeBeachContent from './content/gulf-shores-vs-orange-beach'
import ThreeDaysInGulfShoresContent from './content/3-days-in-gulf-shores'
import IsDestinWorthItContent from './content/is-destin-worth-it'
import GulfCoastFromMemphisContent from './content/gulf-coast-from-memphis'
import GulfCoastOnABudgetContent from './content/gulf-coast-on-a-budget'
import BestTimeToVisitDestinContent from './content/best-time-to-visit-destin'
import ThreeDaysInDestinContent from './content/3-days-in-destin'
import PanamaCityBeachVsDestinContent from './content/panama-city-beach-vs-destin'
import NavarreBeachGuideContent from './content/navarre-beach-guide'
import FortWaltonBeachGuideContent from './content/fort-walton-beach-guide'
import FortWaltonBeachVsDestinContent from './content/fort-walton-beach-vs-destin'
import DauphinIslandGuideContent from './content/dauphin-island-guide'
import ThirtyAFloridaGuideContent from './content/30a-florida-guide'
import GulfCoastRoadTripItineraryContent from './content/gulf-coast-road-trip-itinerary'

interface Props {
  params: { slug: string }
}

// Map slugs to their content components
const CONTENT_MAP: Record<string, React.ComponentType> = {
  'gulf-coast-beach-packing-list': PackingListContent,
  'best-things-to-do-gulf-shores': BestThingsToDoGulfShoresContent,
  'best-gulf-coast-beaches-for-families': BestGulfCoastBeachesFamiliesContent,
  'gulf-shores-vs-destin': GulfShoresVsDestinContent,
  'gulf-coast-from-atlanta': GulfCoastFromAtlantaContent,
  'best-time-to-visit-gulf-shores': BestTimeGulfShoresContent,
  'destin-vs-pensacola-beach': DestinVsPensacolaContent,
  'gulf-coast-in-october': GulfCoastOctoberContent,
  'best-shelling-beaches-gulf-coast': BestShellingContent,
  'pet-friendly-gulf-coast-beaches': PetFriendlyContent,
  'gulf-coast-from-nashville': GulfCoastFromNashvilleContent,
  'gulf-coast-from-new-orleans': GulfCoastFromNewOrleansContent,
  'gulf-coast-from-birmingham': GulfCoastFromBirminghamContent,
  'gulf-shores-vs-orange-beach': GulfShoresVsOrangeBeachContent,
  '3-days-in-gulf-shores': ThreeDaysInGulfShoresContent,
  'is-destin-worth-it': IsDestinWorthItContent,
  'gulf-coast-from-memphis': GulfCoastFromMemphisContent,
  'gulf-coast-on-a-budget': GulfCoastOnABudgetContent,
  'best-time-to-visit-destin': BestTimeToVisitDestinContent,
  '3-days-in-destin': ThreeDaysInDestinContent,
  'panama-city-beach-vs-destin': PanamaCityBeachVsDestinContent,
  'navarre-beach-guide': NavarreBeachGuideContent,
  'fort-walton-beach-guide': FortWaltonBeachGuideContent,
  'fort-walton-beach-vs-destin': FortWaltonBeachVsDestinContent,
  'dauphin-island-guide': DauphinIslandGuideContent,
  '30a-florida-guide': ThirtyAFloridaGuideContent,
  'gulf-coast-road-trip-itinerary': GulfCoastRoadTripItineraryContent,
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.heroImage, width: 1200, height: 630 }],
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const ContentComponent = CONTENT_MAP[params.slug]

  // Stub: article in progress
  if (!ContentComponent) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-cream pt-16">
        <div className="text-center max-w-lg px-4">
          <div className="text-5xl mb-4">📋</div>
          <h1 className="font-display font-bold text-navy text-3xl mb-3">{post.title}</h1>
          <p className="text-navy/60 mb-6">
            This article is being written. Drop your email below and we&apos;ll let you know when it&apos;s live.
          </p>
          <div className="max-w-sm mx-auto">
            <NewsletterBanner variant="compact" />
          </div>
        </div>
      </section>
    )
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.heroImage,
    datePublished: post.publishedAt,
    publisher: {
      '@type': 'Organization',
      name: 'Gulf Coast Beach Vibes',
      url: 'https://gulfcoastbeachvibes.com',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-16 h-[50vh] min-h-[400px]">
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          priority
          quality={85}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="relative z-10 h-full flex flex-col justify-end section-container pb-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-ocean text-white text-xs font-semibold mb-3 w-fit">
            {post.category}
          </span>
          <h1 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl max-w-3xl">
            {post.title}
          </h1>
          <p className="text-white/60 text-sm mt-3">
            {post.readTime} &middot;{' '}
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="bg-cream py-16">
        <div className="section-container max-w-3xl">
          <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />

          <div className="mt-8 prose prose-lg max-w-none
                          prose-headings:font-display prose-headings:text-navy
                          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-navy/10
                          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                          prose-p:text-navy/70 prose-p:leading-relaxed prose-p:mb-5
                          prose-a:text-ocean prose-a:no-underline hover:prose-a:underline
                          prose-li:text-navy/70 prose-li:leading-relaxed
                          prose-ul:my-5 prose-ul:space-y-1
                          prose-strong:text-navy">
            <ContentComponent />
          </div>
        </div>
      </article>

      {/* Related destinations CTA */}
      <section className="py-12 bg-sand-300">
        <div className="section-container max-w-3xl">
          <h2 className="font-display font-bold text-navy text-2xl mb-4">
            Ready to Book Your Gulf Coast Trip?
          </h2>
          <p className="text-navy/60 mb-6">
            Browse our destination guides to plan where to go, where to stay, and what to do.
          </p>
          <div className="flex flex-wrap gap-3">
            {['gulf-shores', 'destin', 'pensacola-beach', 'panama-city-beach'].map((slug) => (
              <Link
                key={slug}
                href={`/destinations/${slug}`}
                className="px-5 py-2.5 rounded-full bg-white text-navy text-sm font-medium
                           hover:bg-ocean hover:text-white transition-colors shadow-sm"
              >
                {slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NewsletterBanner variant="hero" />
    </>
  )
}
