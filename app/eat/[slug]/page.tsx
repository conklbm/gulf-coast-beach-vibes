import type { Metadata } from 'next'
import NewsletterBanner from '@/components/NewsletterBanner'

interface Props { params: { slug: string } }

const eatContent: Record<string, { title: string; description: string }> = {
  'best-seafood-gulf-shores': { title: 'Best Seafood Restaurants in Gulf Shores', description: 'Top seafood spots in Gulf Shores, AL.' },
  'best-restaurants-destin':  { title: 'Best Restaurants in Destin, FL',           description: 'Top dining in Destin, FL.' },
  'best-breakfast-gulf-coast':{ title: 'Best Breakfast on the Gulf Coast',          description: 'Top breakfast spots across the Gulf Coast.' },
}

export async function generateStaticParams() {
  return Object.keys(eatContent).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const content = eatContent[params.slug]
  if (!content) return {}
  return { title: content.title, description: content.description }
}

export default function EatSlugPage({ params }: Props) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cream pt-16">
      <div className="text-center max-w-lg px-4">
        <div className="text-5xl mb-4">🍽️</div>
        <h1 className="font-display font-bold text-navy text-3xl mb-3">
          {eatContent[params.slug]?.title ?? 'Restaurant Guide Coming Soon'}
        </h1>
        <p className="text-navy/60 mb-6">
          We&apos;re putting together this dining guide. Drop your email below and we&apos;ll let you know when it&apos;s ready.
        </p>
        <div className="max-w-sm mx-auto">
          <NewsletterBanner variant="compact" />
        </div>
      </div>
    </section>
  )
}
