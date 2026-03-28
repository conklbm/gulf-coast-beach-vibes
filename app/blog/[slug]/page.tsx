import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import TipCallout from '@/components/TipCallout'
import AffiliateLink from '@/components/AffiliateLink'
import NewsletterBanner from '@/components/NewsletterBanner'
import { posts, getPostBySlug } from '@/lib/posts'

interface Props {
  params: { slug: string }
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

  // For posts without full content yet, show coming soon
  if (params.slug !== 'gulf-coast-beach-packing-list') {
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

  // Full packing list article
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
          <p className="text-white/60 text-sm mt-3">{post.readTime} · {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </section>

      {/* Article body */}
      <article className="bg-cream py-16">
        <div className="section-container max-w-3xl">
          <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />

          <div className="mt-8 prose prose-lg max-w-none
                          prose-headings:font-display prose-headings:text-navy
                          prose-p:text-navy/70 prose-p:leading-relaxed
                          prose-a:text-ocean prose-a:no-underline hover:prose-a:underline
                          prose-li:text-navy/70">

            <p className="text-xl text-navy/80 leading-relaxed font-medium">
              The Gulf Coast has its own packing requirements. Forget what you know from Caribbean or California beach trips — the Gulf is different, and getting prepared right makes a huge difference in how much you enjoy your time there.
            </p>

            <TipCallout title="Affiliate Disclosure" variant="info">
              Some product links on this page go to Amazon. We may earn a small commission if you purchase through them.
            </TipCallout>

            <h2>The Essentials (Seriously, Don&apos;t Skip These)</h2>

            <h3>Sun Protection</h3>
            <p>
              The Gulf Coast sun is no joke. The white quartz sand reflects UV rays back up at you, and the water creates additional reflection. You&apos;re getting hit from above <em>and</em> below. Standard SPF 30 isn&apos;t enough for all-day beach days — bring SPF 50+ and reapply every 90 minutes without fail.
            </p>
            <ul>
              <li>Reef-safe SPF 50+ sunscreen (minimum 2 bottles for a week)</li>
              <li>SPF lip balm — your lips will burn before you notice</li>
              <li>A wide-brim sun hat (the floppy beach kind, not a baseball cap)</li>
              <li>UV-protective rash guard or swim shirt for all-day beach days</li>
              <li>Polarized sunglasses — the glare off the water is brutal</li>
            </ul>

            <h3>Footwear</h3>
            <p>
              The sand at Pensacola Beach, Destin, and Gulf Shores gets <em>extremely</em> hot in summer. We&apos;re talking 130°F sand temperature at 2 PM in July. Flip flops for walking from the car to the water are mandatory — you can&apos;t walk barefoot on the beach at midday.
            </p>
            <ul>
              <li>Comfortable flip flops for beach walks</li>
              <li>Water shoes if you plan to wade through rocky areas or jetties</li>
              <li>Regular sneakers for evening activities — it gets nicer at night</li>
            </ul>

            <h2>Beach Day Gear</h2>

            <h3>Shade Setup</h3>
            <p>
              Most Gulf Coast public beaches don&apos;t have natural shade. You need to bring your own or rent it. A quality beach umbrella plus a beach tent or shade canopy is the gold standard for families.
            </p>
            <ul>
              <li>Heavy-duty beach umbrella (wind will destroy flimsy ones)</li>
              <li>Sand anchor to keep it in place</li>
              <li>Folding beach chairs (the low-rider kind is easier to carry)</li>
              <li>A small pop-up beach tent if you have kids under 2</li>
            </ul>

            <div className="not-prose my-6">
              {/* TODO: Replace with tracked Amazon affiliate link */}
              <AffiliateLink
                href="https://www.amazon.com/s?k=beach+umbrella+sand+anchor"
                label="Shop Beach Umbrellas on Amazon"
                provider="amazon"
              />
            </div>

            <h3>Hydration & Food</h3>
            <p>
              Gulf Coast heat + saltwater + sun = you will get dehydrated faster than you expect. A well-insulated cooler full of water is non-negotiable for any beach day over 3 hours.
            </p>
            <ul>
              <li>Large insulated cooler (the kind that keeps ice 2+ days)</li>
              <li>Reusable water bottles for every person in your group</li>
              <li>A small soft cooler for day beach use</li>
              <li>Electrolyte packets or drinks — water alone isn&apos;t always enough</li>
            </ul>

            <h2>For the Water</h2>
            <ul>
              <li>Snorkel mask and fins (the jetties in Destin and Pensacola have great snorkeling)</li>
              <li>Dry bag for your phone and wallet</li>
              <li>Floaties, noodles, or a raft for lounging in the waves</li>
              <li>Mesh bag to carry everything to the water&apos;s edge</li>
              <li>Life jacket for children who aren&apos;t strong swimmers (Gulf rip currents are real)</li>
            </ul>

            <TipCallout title="About Rip Currents" variant="warning">
              Rip currents are common on Gulf Coast beaches, especially around inlets and piers. Always swim near a lifeguard when possible. If caught in a rip current, swim parallel to the shore — never fight it straight back. Children should always wear a life jacket in the Gulf.
            </TipCallout>

            <h2>What NOT to Bring</h2>
            <ul>
              <li><strong>Glass bottles</strong> — prohibited on most Gulf Coast beaches</li>
              <li><strong>Pets</strong> — most public beaches are no-pet zones from Memorial Day through Labor Day</li>
              <li><strong>Drones</strong> — prohibited at Gulf Islands National Seashore and most public beaches</li>
              <li><strong>Disposable everything</strong> — the sea turtles thank you</li>
            </ul>

            <h2>The &quot;Nice to Have&quot; List</h2>
            <ul>
              <li>Sand-free beach mat (they&apos;re real, they work)</li>
              <li>Portable Bluetooth speaker</li>
              <li>Outdoor games — bocce, spikeball, cornhole for the beach</li>
              <li>After-sun aloe vera gel — for the inevitable first-day burn</li>
              <li>Baby powder — seriously dries sand right off your skin</li>
              <li>Insect repellent — especially important around sunset near marshy areas</li>
            </ul>

            <h2>Practical Logistics</h2>
            <p>
              Parking at Gulf Coast beaches can be a nightmare in peak summer. Most major beaches have paid parking lots that fill up by 10 AM on weekends. Arrive early (before 9 AM for a good spot), or use apps like ParkMobile where available. Many vacation rental properties are walking distance to beach accesses — factor this into your lodging choice.
            </p>

          </div>
        </div>
      </article>

      {/* Related destinations */}
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
                {slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NewsletterBanner variant="hero" />
    </>
  )
}
