import type { Metadata } from 'next'
import NewsletterBanner from '@/components/NewsletterBanner'

export const metadata: Metadata = {
  title: 'Gulf Coast Beach Vibes Newsletter — Weekly Gulf Coast Tips',
  description:
    'Subscribe to the Gulf Coast Beach Vibes newsletter for weekly beach condition reports, local tips, restaurant finds, and Gulf Coast travel guides.',
}

const perks = [
  {
    icon: '🌊',
    title: 'Weekly Beach Conditions',
    description: 'Water temp, wave height, and jellyfish warnings so you know what to expect before you go.',
  },
  {
    icon: '🍽️',
    title: 'New Restaurant Finds',
    description: "When we find a great new spot on the Gulf Coast, you hear about it first.",
  },
  {
    icon: '🏖️',
    title: 'Hidden Spots & Local Tips',
    description: 'The beaches and experiences the tourist guides miss.',
  },
  {
    icon: '📅',
    title: 'Events & Festivals',
    description: 'Gulf Coast events calendar so you can time your trip to something special.',
  },
  {
    icon: '💰',
    title: 'Deals & Seasonal Tips',
    description: 'Best times to visit for value, off-season picks, and booking tips.',
  },
  {
    icon: '📸',
    title: 'Photo Spots & Sunsets',
    description: 'Where to be and when for the best Gulf Coast shots.',
  },
]

export default function NewsletterPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40 Q20 20 40 40 Q60 60 80 40 L80 80 L0 80 Z' fill='%230EA5BE'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px',
          }}
        />
        <div className="section-container relative z-10 max-w-3xl text-center">
          <div className="text-5xl mb-5" aria-hidden="true">✉️</div>
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl mb-4">
            The Gulf Coast Beach Vibes Newsletter
          </h1>
          <p className="text-white/70 text-xl mb-2">
            Weekly Gulf Coast tips from someone who actually lives here.
          </p>
          <p className="text-white/40 text-sm mb-8">
            Join 2,000+ Gulf Coast lovers. No spam, ever. Unsubscribe anytime.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-lg mx-auto">
            <NewsletterBanner variant="compact" />
          </div>
        </div>
        <div className="wave-divider absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg"
               preserveAspectRatio="none" className="w-full h-8 md:h-10 fill-cream block">
            <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,10 1440,20 L1440,40 L0,40 Z" />
          </svg>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl mb-3">
              What You&apos;ll Get Every Week
            </h2>
            <p className="text-navy/60 text-lg">
              Real Gulf Coast content — not just regurgitated tourism board stuff.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk) => (
              <div key={perk.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <span className="text-3xl" aria-hidden="true">{perk.icon}</span>
                <h3 className="font-display font-bold text-navy text-lg mt-3 mb-2">{perk.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
