interface TipCalloutProps {
  children: React.ReactNode
  title?: string
  variant?: 'tip' | 'warning' | 'info'
}

const variantStyles = {
  tip: {
    container: 'bg-sand-200 border-sand-500 border-l-ocean',
    icon:      '💡',
    label:     'Local Tip',
    titleColor: 'text-navy',
  },
  warning: {
    container: 'bg-coral-100 border-coral-300 border-l-coral',
    icon:      '⚠️',
    label:     'Heads Up',
    titleColor: 'text-coral-700',
  },
  info: {
    container: 'bg-ocean-50 border-ocean-200 border-l-ocean',
    icon:      'ℹ️',
    label:     'Good to Know',
    titleColor: 'text-ocean-700',
  },
}

export default function TipCallout({
  children,
  title,
  variant = 'tip',
}: TipCalloutProps) {
  const styles = variantStyles[variant]

  return (
    <aside
      className={`rounded-xl border border-l-4 p-5 my-6 ${styles.container}`}
      role="note"
    >
      <div className="flex items-start gap-3">
        <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">
          {styles.icon}
        </span>
        <div>
          <p className={`font-semibold text-sm mb-1 ${styles.titleColor}`}>
            {title || styles.label}
          </p>
          <div className="text-navy/70 text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </aside>
  )
}
