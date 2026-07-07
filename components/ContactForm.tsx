'use client'

import { useState } from 'react'
import { sendContactMessage } from '@/app/actions/contact'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    setStatus('sending')
    setError('')

    const result = await sendContactMessage({
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      message: String(data.get('message') ?? ''),
      botField: String(data.get('website') ?? ''),
    })

    if (result.success) {
      setStatus('success')
      form.reset()
    } else {
      setStatus('error')
      setError(result.error)
    }
  }

  if (status === 'success') {
    return (
      <div className="card p-8 text-center" role="status">
        <span className="text-4xl block mb-3" aria-hidden="true">🌊</span>
        <h2 className="font-display font-bold text-navy text-2xl mb-2">Message sent</h2>
        <p className="text-navy/60">We read everything and reply when a response is needed.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8 flex flex-col gap-5">
      {/* Honeypot — hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-navy font-semibold text-sm">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            maxLength={100}
            autoComplete="name"
            className="min-h-[44px] px-4 py-2.5 rounded-xl border border-navy/15 bg-white
                       text-navy placeholder:text-navy/35
                       focus:outline-none focus:ring-2 focus:ring-ocean focus:border-ocean"
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-navy font-semibold text-sm">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={200}
            autoComplete="email"
            className="min-h-[44px] px-4 py-2.5 rounded-xl border border-navy/15 bg-white
                       text-navy placeholder:text-navy/35
                       focus:outline-none focus:ring-2 focus:ring-ocean focus:border-ocean"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-navy font-semibold text-sm">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          className="px-4 py-3 rounded-xl border border-navy/15 bg-white
                     text-navy placeholder:text-navy/35 resize-y
                     focus:outline-none focus:ring-2 focus:ring-ocean focus:border-ocean"
          placeholder="A question, a correction, a local tip we should know about..."
        />
      </div>

      {status === 'error' && (
        <p className="text-coral text-sm font-medium" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary self-start disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
