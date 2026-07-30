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
import ThreeDaysInPensacolaBeachContent from './content/3-days-in-pensacola-beach'
import OrangeBeachVsPensacolaBeachContent from './content/orange-beach-vs-pensacola-beach'
import PensacolaBeachVsPanamaCityBeachContent from './content/pensacola-beach-vs-panama-city-beach'
import DestinVs30AContent from './content/destin-vs-30a'
import NavarreBeachVsPensacolaBeachContent from './content/navarre-beach-vs-pensacola-beach'
import NavarreBeachVsDestinContent from './content/navarre-beach-vs-destin'
import GulfShoresVsPanamaCityBeachContent from './content/gulf-shores-vs-panama-city-beach'
import DauphinIslandVsGulfShoresContent from './content/dauphin-island-vs-gulf-shores'
import ThirtyAVsPanamaCityBeachContent from './content/30a-vs-panama-city-beach'
import MiramarBeachVsDestinContent from './content/miramar-beach-vs-destin'
import GulfBreezeVsPensacolaBeachContent from './content/gulf-breeze-vs-pensacola-beach'
import GulfShoresVsMyrtleBeachContent from './content/gulf-shores-vs-myrtle-beach'
import DestinVsClearwaterContent from './content/destin-vs-clearwater'
import IsGulfShoresWorthItContent from './content/is-gulf-shores-worth-it'
import IsPensacolaBeachWorthItContent from './content/is-pensacola-beach-worth-it'
import Is30AWorthItContent from './content/is-30a-worth-it'
import IsPanamaCityBeachWorthItContent from './content/is-panama-city-beach-worth-it'
import IsNavarreBeachWorthItContent from './content/is-navarre-beach-worth-it'
import IsDestinCrowdedContent from './content/is-destin-crowded'
import IsPensacolaBeachCrowdedContent from './content/is-pensacola-beach-crowded'
import OrangeBeachGuideContent from './content/orange-beach-guide'
import BestBeachesPensacolaAreaContent from './content/best-beaches-pensacola-area'
import BestBeachesDestinAreaContent from './content/best-beaches-destin-area'
import WhatIs30AContent from './content/what-is-30a'
import ThreeDaysInOrangeBeachContent from './content/3-days-in-orange-beach'
import ThreeDaysInPanamaCityBeachContent from './content/3-days-in-panama-city-beach'
import ThreeDaysIn30AContent from './content/3-days-in-30a'
import ThreeDaysInNavarreBeachContent from './content/3-days-in-navarre-beach'
import ThreeDaysInFortWaltonBeachContent from './content/3-days-in-fort-walton-beach'
import WeekendInGulfShoresContent from './content/weekend-in-gulf-shores'
import OneWeekGulfCoastContent from './content/one-week-gulf-coast'
import DestinItineraryFamiliesContent from './content/destin-itinerary-families'
import DauphinIslandWeekendContent from './content/dauphin-island-weekend'
import BestTimeToVisitPensacolaBeachContent from './content/best-time-to-visit-pensacola-beach'
import BestTimeToVisitOrangeBeachContent from './content/best-time-to-visit-orange-beach'
import BestTimeToVisitPanamaCityBeachContent from './content/best-time-to-visit-panama-city-beach'
import BestTimeToVisit30AContent from './content/best-time-to-visit-30a'
import BestTimeToVisitNavarreBeachContent from './content/best-time-to-visit-navarre-beach'
import GulfCoastInMarchContent from './content/gulf-coast-in-march'
import GulfCoastInMayContent from './content/gulf-coast-in-may'
import GulfCoastInSeptemberContent from './content/gulf-coast-in-september'
import GulfCoastInDecemberContent from './content/gulf-coast-in-december'
import GulfCoastFromHoustonContent from './content/gulf-coast-from-houston'
import GulfCoastFromDallasContent from './content/gulf-coast-from-dallas'
import GulfCoastFromKnoxvilleContent from './content/gulf-coast-from-knoxville'
import GulfCoastFromChattanoogaContent from './content/gulf-coast-from-chattanooga'
import GulfCoastFromJacksonMsContent from './content/gulf-coast-from-jackson-ms'
import GulfCoastFromCharlotteContent from './content/gulf-coast-from-charlotte'
import GulfCoastFromStLouisContent from './content/gulf-coast-from-st-louis'
import WhereToStayGulfShoresContent from './content/where-to-stay-gulf-shores'
import WhereToStayDestinContent from './content/where-to-stay-destin'
import WhereToStayPensacolaBeachContent from './content/where-to-stay-pensacola-beach'
import WhereToStayOrangeBeachContent from './content/where-to-stay-orange-beach'
import WhereToStay30AContent from './content/where-to-stay-30a'
import WhereToStayPanamaCityBeachContent from './content/where-to-stay-panama-city-beach'
import BestThingsToDoDestinContent from './content/best-things-to-do-destin'
import BestThingsToDoOrangeBeachContent from './content/best-things-to-do-orange-beach'
import BestThingsToDoPensacolaBeachContent from './content/best-things-to-do-pensacola-beach'
import BestThingsToDoPanamaCityBeachContent from './content/best-things-to-do-panama-city-beach'
import BestThingsToDoDauphinIslandContent from './content/best-things-to-do-dauphin-island'
import BestThingsToDoNavarreBeachContent from './content/best-things-to-do-navarre-beach'
import BestThingsToDoFortWaltonBeachContent from './content/best-things-to-do-fort-walton-beach'
import BestThingsToDo30AContent from './content/best-things-to-do-30a'
import GulfCoastFromLittleRockContent from './content/gulf-coast-from-little-rock'
import GulfCoastCampingContent from './content/gulf-coast-camping'
import GulfCoastFishingGuideContent from './content/gulf-coast-fishing-guide'
import BestGulfCoastStateParksContent from './content/best-gulf-coast-state-parks'
import GulfCoastHoneymoonContent from './content/gulf-coast-honeymoon'
import GulfCoastWithKidsContent from './content/gulf-coast-with-kids'

interface Props {
  params: { slug: string }
}

// Map slugs to their content components
const CONTENT_MAP: Record<string, React.ComponentType> = {
  'where-to-stay-gulf-shores': WhereToStayGulfShoresContent,
  'where-to-stay-destin': WhereToStayDestinContent,
  'where-to-stay-pensacola-beach': WhereToStayPensacolaBeachContent,
  'where-to-stay-orange-beach': WhereToStayOrangeBeachContent,
  'where-to-stay-30a': WhereToStay30AContent,
  'where-to-stay-panama-city-beach': WhereToStayPanamaCityBeachContent,
  'best-things-to-do-destin': BestThingsToDoDestinContent,
  'best-things-to-do-orange-beach': BestThingsToDoOrangeBeachContent,
  'best-things-to-do-pensacola-beach': BestThingsToDoPensacolaBeachContent,
  'best-things-to-do-panama-city-beach': BestThingsToDoPanamaCityBeachContent,
  'best-things-to-do-dauphin-island': BestThingsToDoDauphinIslandContent,
  'best-things-to-do-navarre-beach': BestThingsToDoNavarreBeachContent,
  'best-things-to-do-fort-walton-beach': BestThingsToDoFortWaltonBeachContent,
  'best-things-to-do-30a': BestThingsToDo30AContent,
  'gulf-coast-from-little-rock': GulfCoastFromLittleRockContent,
  'gulf-coast-camping': GulfCoastCampingContent,
  'gulf-coast-fishing-guide': GulfCoastFishingGuideContent,
  'best-gulf-coast-state-parks': BestGulfCoastStateParksContent,
  'gulf-coast-honeymoon': GulfCoastHoneymoonContent,
  'gulf-coast-with-kids': GulfCoastWithKidsContent,
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
  '3-days-in-pensacola-beach': ThreeDaysInPensacolaBeachContent,
  'orange-beach-vs-pensacola-beach': OrangeBeachVsPensacolaBeachContent,
  'pensacola-beach-vs-panama-city-beach': PensacolaBeachVsPanamaCityBeachContent,
  'destin-vs-30a': DestinVs30AContent,
  'navarre-beach-vs-pensacola-beach': NavarreBeachVsPensacolaBeachContent,
  'navarre-beach-vs-destin': NavarreBeachVsDestinContent,
  'gulf-shores-vs-panama-city-beach': GulfShoresVsPanamaCityBeachContent,
  'dauphin-island-vs-gulf-shores': DauphinIslandVsGulfShoresContent,
  '30a-vs-panama-city-beach': ThirtyAVsPanamaCityBeachContent,
  'miramar-beach-vs-destin': MiramarBeachVsDestinContent,
  'gulf-breeze-vs-pensacola-beach': GulfBreezeVsPensacolaBeachContent,
  'gulf-shores-vs-myrtle-beach': GulfShoresVsMyrtleBeachContent,
  'destin-vs-clearwater': DestinVsClearwaterContent,
  'is-gulf-shores-worth-it': IsGulfShoresWorthItContent,
  'is-pensacola-beach-worth-it': IsPensacolaBeachWorthItContent,
  'is-30a-worth-it': Is30AWorthItContent,
  'is-panama-city-beach-worth-it': IsPanamaCityBeachWorthItContent,
  'is-navarre-beach-worth-it': IsNavarreBeachWorthItContent,
  'is-destin-crowded': IsDestinCrowdedContent,
  'is-pensacola-beach-crowded': IsPensacolaBeachCrowdedContent,
  'orange-beach-guide': OrangeBeachGuideContent,
  'best-beaches-pensacola-area': BestBeachesPensacolaAreaContent,
  'best-beaches-destin-area': BestBeachesDestinAreaContent,
  'what-is-30a': WhatIs30AContent,
  '3-days-in-orange-beach': ThreeDaysInOrangeBeachContent,
  '3-days-in-panama-city-beach': ThreeDaysInPanamaCityBeachContent,
  '3-days-in-30a': ThreeDaysIn30AContent,
  '3-days-in-navarre-beach': ThreeDaysInNavarreBeachContent,
  '3-days-in-fort-walton-beach': ThreeDaysInFortWaltonBeachContent,
  'weekend-in-gulf-shores': WeekendInGulfShoresContent,
  'one-week-gulf-coast': OneWeekGulfCoastContent,
  'destin-itinerary-families': DestinItineraryFamiliesContent,
  'dauphin-island-weekend': DauphinIslandWeekendContent,
  'best-time-to-visit-pensacola-beach': BestTimeToVisitPensacolaBeachContent,
  'best-time-to-visit-orange-beach': BestTimeToVisitOrangeBeachContent,
  'best-time-to-visit-panama-city-beach': BestTimeToVisitPanamaCityBeachContent,
  'best-time-to-visit-30a': BestTimeToVisit30AContent,
  'best-time-to-visit-navarre-beach': BestTimeToVisitNavarreBeachContent,
  'gulf-coast-in-march': GulfCoastInMarchContent,
  'gulf-coast-in-may': GulfCoastInMayContent,
  'gulf-coast-in-september': GulfCoastInSeptemberContent,
  'gulf-coast-in-december': GulfCoastInDecemberContent,
  'gulf-coast-from-houston': GulfCoastFromHoustonContent,
  'gulf-coast-from-dallas': GulfCoastFromDallasContent,
  'gulf-coast-from-knoxville': GulfCoastFromKnoxvilleContent,
  'gulf-coast-from-chattanooga': GulfCoastFromChattanoogaContent,
  'gulf-coast-from-jackson-ms': GulfCoastFromJacksonMsContent,
  'gulf-coast-from-charlotte': GulfCoastFromCharlotteContent,
  'gulf-coast-from-st-louis': GulfCoastFromStLouisContent,
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
            {post.readTime}
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
