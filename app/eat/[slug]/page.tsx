import type { Metadata } from 'next'
import NewsletterBanner from '@/components/NewsletterBanner'

interface Props { params: { slug: string } }

const eatContent: Record<string, { title: string; description: string }> = {
}

// Slugs with real content. Everything else renders the stub and must stay out
// of the index until it's actually written.
const WRITTEN = new Set<string>([])

export async function generateStaticParams() {
  return Object.keys(eatContent).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const content = eatContent[params.slug]
  if (!content) return {}
  return {
    title: content.title,
    description: content.description,
    alternates: { canonical: `/eat/${params.slug}` },
    ...(WRITTEN.has(params.slug) ? {} : { robots: { index: false, follow: true } }),
  }
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
