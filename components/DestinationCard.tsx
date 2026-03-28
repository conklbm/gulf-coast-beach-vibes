import Image from 'next/image'
import Link from 'next/link'
import type { Destination } from '@/lib/destinations'

interface DestinationCardProps {
  destination: Destination
  size?: 'sm' | 'md' | 'lg'
}

export default function DestinationCard({ destination, size = 'md' }: DestinationCardProps) {
  const { slug, name, state, tagline, cardImage } = destination

  const heightClass = {
    sm:  'h-48',
    md:  'h-56 sm:h-64',
    lg:  'h-72 sm:h-80',
  }[size]

  const minWidthClass = {
    sm:  'min-w-[200px] max-w-[240px]',
    md:  'min-w-[240px] max-w-[280px]',
    lg:  'min-w-[280px] max-w-[320px]',
  }[size]

  return (
    <Link
      href={`/destinations/${slug}`}
      className={`card flex-shrink-0 group ${minWidthClass}`}
    >
      {/* Image */}
      <div className={`relative ${heightClass} overflow-hidden`}>
        <Image
          src={cardImage}
          alt={`${name} beach, ${state}`}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 280px"
        />
        {/* State badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full bg-white/90 text-navy text-xs font-semibold backdrop-blur-sm">
            {state}
          </span>
        </div>
        {/* Gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
        {/* Name on image */}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="font-display font-bold text-white text-lg leading-tight drop-shadow">
            {name}
          </h3>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4">
        <p className="text-navy/60 text-sm leading-snug line-clamp-2">{tagline}</p>
        <div className="mt-3 flex items-center gap-1 text-ocean text-sm font-medium
                        group-hover:gap-2 transition-all duration-200">
          Explore
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
