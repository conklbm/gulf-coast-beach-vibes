'use client'

import { useState } from 'react'
import { subscribeToNewsletter } from '@/app/actions/subscribe'

interface NewsletterBannerProps {
  variant?: 'hero' | 'compact'
}

export default function NewsletterBanner({ variant = 'hero' }: NewsletterBannerProps) {
  const [email,     setEmail]     = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)
  const [error,     setError]     = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setError('')
    const result = await subscribeToNewsletter(email)
    if (result.success) {
      setSubmitted(true)
    } else {
      setError(result.error)
    }
    setLoading(false)
  }

  if (variant === 'compact') {
    return (
      <div className="bg-ocean/10 rounded-2xl p-6 md:p-8">
        <h3 className="font-display font-bold text-navy text-xl mb-2">
          The Gulf Coast Insider 🌊
        </h3>
        <p className="text-navy/60 text-sm mb-4">
          Local intel on beaches, eats, and hidden spots — from someone who actually lives here.
        </p>
        {submitted ? (
          <p className="text-ocean font-semibold">You&apos;re in! Check your inbox for a welcome email. 🎉</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <label htmlFor="newsletter-email-compact" className="sr-only">Email address</label>
            <input
              id="newsletter-email-compact"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-full border border-navy/20 bg-white
                         text-navy placeholder-navy/40 text-sm
                         focus:outline-none focus:ring-2 focus:ring-ocean"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-primary text-base py-3 px-6 disabled:opacity-70"
            >
              {loading ? 'Joining…' : 'Count Me In'}
            </button>
          </form>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        )}
      </div>
    )
  }

  return (
    <section className="relative overflow-hidden bg-navy" aria-label="Newsletter signup">
      {/* Decorative wave top */}
      <div className="wave-divider">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 fill-cream block"
        >
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">
        <div className="text-4xl mb-4" aria-hidden="true">✉️</div>
        <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-4">
          Join the Gulf Coast Insider
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">
          Beach intel, local restaurant finds, hidden spots, and travel tips — straight from someone
          who actually lives on the Gulf Coast. No spam, ever.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-white/10 text-white">
            <span className="text-2xl">🎉</span>
            <div className="text-left">
              <p className="font-semibold">Welcome to the Gulf Coast crew!</p>
              <p className="text-white/70 text-sm">Check your inbox for a welcome email.</p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <label htmlFor="newsletter-email-hero" className="sr-only">Email address</label>
            <input
              id="newsletter-email-hero"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20
                         text-white placeholder-white/40
                         focus:outline-none focus:ring-2 focus:ring-ocean focus:bg-white/20
                         transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 rounded-full bg-coral text-white font-semibold
                         hover:bg-coral-600 disabled:opacity-70
                         transition-colors duration-200 shadow-lg whitespace-nowrap"
            >
              {loading ? 'Joining…' : 'I\'m In!'}
            </button>
          </form>
        )}

        {error && <p className="text-red-300 text-sm mt-3">{error}</p>}
        <p className="text-white/40 text-xs mt-4">
          Join 2,000+ Gulf Coast insiders. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
