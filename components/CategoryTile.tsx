import Image from 'next/image'
import Link from 'next/link'

interface CategoryTileProps {
  href: string
  label: string
  icon: string
  imageSrc: string
  imageAlt: string
  description?: string
}

export default function CategoryTile({
  href,
  label,
  icon,
  imageSrc,
  imageAlt,
  description,
}: CategoryTileProps) {
  return (
    <Link
      href={href}
      className="relative overflow-hidden rounded-2xl group aspect-[4/3] flex items-end
                 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Background image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-4 sm:p-5 w-full">
        <div className="flex items-center gap-2">
          <span className="text-2xl" aria-hidden="true">{icon}</span>
          <div>
            <h3 className="font-display font-bold text-white text-lg leading-tight">
              {label}
            </h3>
            {description && (
              <p className="text-white/70 text-xs mt-0.5 leading-snug">{description}</p>
            )}
          </div>
        </div>
        <div className="mt-2 flex items-center gap-1 text-ocean-200 text-sm font-medium
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
