import Image from 'next/image'
import Link from 'next/link'

interface ContentCardProps {
  href: string
  imageSrc: string
  imageAlt: string
  category: string
  title: string
  excerpt: string
  meta?: string // e.g. "6 min read" or a date
}

export default function ContentCard({
  href,
  imageSrc,
  imageAlt,
  category,
  title,
  excerpt,
  meta,
}: ContentCardProps) {
  return (
    <article className="card group flex flex-col">
      {/* Image */}
      <Link href={href} className="block relative h-52 overflow-hidden flex-shrink-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full bg-ocean text-white text-xs font-semibold">
            {category}
          </span>
        </div>
      </Link>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display font-bold text-navy text-lg leading-snug mb-2 line-clamp-2">
          <Link href={href} className="hover:text-ocean transition-colors">
            {title}
          </Link>
        </h3>
        <p className="text-navy/60 text-sm leading-relaxed line-clamp-3 flex-1">{excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          {meta && <span className="text-navy/40 text-xs">{meta}</span>}
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-ocean text-sm font-semibold
                       hover:gap-2 transition-all duration-200 ml-auto"
          >
            Read more
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
