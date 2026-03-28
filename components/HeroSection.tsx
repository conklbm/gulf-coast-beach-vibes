import Image from 'next/image'
import Link from 'next/link'

interface HeroSectionProps {
  imageSrc: string
  imageAlt: string
  eyebrow?: string
  headline: string
  subheadline?: string
  ctaLabel?: string
  ctaHref?: string
  ctaSecondaryLabel?: string
  ctaSecondaryHref?: string
  overlay?: 'light' | 'medium' | 'dark'
  height?: 'full' | 'large' | 'medium'
  textAlign?: 'center' | 'left'
}

const overlayClasses = {
  light:  'bg-navy/25',
  medium: 'bg-navy/45',
  dark:   'bg-navy/65',
}

const heightClasses = {
  full:   'min-h-screen',
  large:  'min-h-[85vh]',
  medium: 'min-h-[60vh]',
}

export default function HeroSection({
  imageSrc,
  imageAlt,
  eyebrow,
  headline,
  subheadline,
  ctaLabel = 'Explore Destinations',
  ctaHref  = '/destinations',
  ctaSecondaryLabel,
  ctaSecondaryHref,
  overlay  = 'medium',
  height   = 'full',
  textAlign = 'center',
}: HeroSectionProps) {
  return (
    <section
      className={`relative flex items-center justify-center ${heightClasses[height]} pt-16`}
      aria-label="Hero"
    >
      {/* Background image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        quality={90}
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />

      {/* Subtle gradient fade to bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

      {/* Content */}
      <div
        className={`relative z-10 px-4 sm:px-6 max-w-4xl mx-auto ${
          textAlign === 'center' ? 'text-center' : 'text-left'
        }`}
      >
        {eyebrow && (
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-ocean-300" />
            <span className="text-ocean-200 text-sm font-medium tracking-widest uppercase">
              {eyebrow}
            </span>
            <div className="h-px w-8 bg-ocean-300" />
          </div>
        )}

        <h1 className="font-display font-bold text-white text-balance leading-tight mb-6
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                       drop-shadow-lg">
          {headline}
        </h1>

        {subheadline && (
          <p className="text-white/90 text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto
                        leading-relaxed drop-shadow">
            {subheadline}
          </p>
        )}

        <div className={`flex flex-col sm:flex-row gap-4 ${textAlign === 'center' ? 'justify-center' : ''}`}>
          {ctaLabel && ctaHref && (
            <Link href={ctaHref} className="btn-primary">
              {ctaLabel}
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          )}
          {ctaSecondaryLabel && ctaSecondaryHref && (
            <Link
              href={ctaSecondaryHref}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full
                         border-2 border-white/70 text-white font-semibold text-lg
                         hover:bg-white/10 transition-all duration-200"
            >
              {ctaSecondaryLabel}
            </Link>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1
                      animate-bounce text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
