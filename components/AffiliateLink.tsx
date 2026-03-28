interface AffiliateLinkProps {
  /** Full URL or a /go/ slug key, e.g. "booking-gulf-shores" */
  href: string
  label: string
  provider?: 'booking' | 'vrbo' | 'getyourguide' | 'amazon' | 'generic'
  variant?: 'button' | 'inline'
}

const providerColors: Record<string, string> = {
  booking:      'bg-blue-600 hover:bg-blue-700',
  vrbo:         'bg-ocean hover:bg-ocean-700',
  getyourguide: 'bg-orange-500 hover:bg-orange-600',
  amazon:       'bg-amber-400 hover:bg-amber-500 text-navy',
  generic:      'bg-coral hover:bg-coral-700',
}

const providerLabels: Record<string, string> = {
  booking:      'Booking.com',
  vrbo:         'VRBO',
  getyourguide: 'GetYourGuide',
  amazon:       'Amazon',
  generic:      '',
}

/** Accepts a /go/ slug key ("booking-gulf-shores") or a full URL. */
function resolveHref(href: string): string {
  if (href.startsWith('http') || href.startsWith('/')) return href
  return `/go/${href}`
}

export default function AffiliateLink({
  href,
  label,
  provider = 'generic',
  variant  = 'button',
}: AffiliateLinkProps) {
  const colorClass   = providerColors[provider]
  const providerName = providerLabels[provider]
  const resolvedHref = resolveHref(href)
  const isExternal   = resolvedHref.startsWith('http')

  const linkProps = {
    href:   resolvedHref,
    target: isExternal ? '_blank' : undefined,
    rel:    isExternal ? 'noopener noreferrer sponsored' : 'sponsored',
  }

  if (variant === 'inline') {
    return (
      <a
        {...linkProps}
        className="text-ocean font-medium underline underline-offset-2 hover:text-ocean-700
                   transition-colors"
      >
        {label}
        <span className="sr-only"> (affiliate link{isExternal ? ', opens in new tab' : ''})</span>
      </a>
    )
  }

  return (
    <a
      {...linkProps}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full
                  ${colorClass} text-white font-semibold text-sm
                  transition-all duration-200 shadow-md hover:shadow-lg`}
    >
      {label}
      {providerName && (
        <span className="opacity-70 text-xs">via {providerName}</span>
      )}
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  )
}
