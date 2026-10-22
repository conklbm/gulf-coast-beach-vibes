'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SOCIAL } from '@/lib/social'

const navLinks = [
  { href: '/destinations', label: 'Destinations' },
  { href: '/activities',   label: 'Activities' },
  { href: '/stay',         label: 'Stay' },
  { href: '/eat',          label: 'Eat' },
  { href: '/blog',         label: 'Blog' },
]

export default function Header() {
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [scrolled,   setScrolled]   = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-white shadow-md'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 flex-shrink-0"
            aria-label="Gulf Coast Beach Vibes Home"
          >
            <span className="text-2xl" aria-hidden="true">🌊</span>
            <div className="leading-tight">
              <div className="font-display font-bold text-navy text-base leading-none">
                Gulf Coast
              </div>
              <div className="font-display font-bold text-ocean text-base leading-none">
                Beach Vibes
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  pathname.startsWith(link.href)
                    ? 'bg-ocean/10 text-ocean font-semibold'
                    : 'text-navy/70 hover:text-ocean hover:bg-ocean/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={SOCIAL.etsy}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium text-coral-700
                         hover:text-coral hover:bg-coral/5 transition-colors duration-200"
            >
              Shop
              <span className="sr-only">(opens our Etsy shop in a new tab)</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <Link
              href="/newsletter"
              className="ml-4 px-5 py-2 rounded-full bg-coral text-white text-sm font-semibold
                         hover:bg-coral-600 transition-colors duration-200 shadow-sm"
            >
              Newsletter
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5
                       rounded-full hover:bg-navy/5 transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-navy rounded-full transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-navy rounded-full transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-navy rounded-full transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-[28rem] border-t border-sand-300' : 'max-h-0'
        }`}
      >
        <nav className="px-4 py-4 flex flex-col gap-1 bg-white" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                pathname.startsWith(link.href)
                  ? 'bg-ocean/10 text-ocean font-semibold'
                  : 'text-navy hover:bg-navy/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SOCIAL.etsy}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 rounded-xl text-base font-medium text-coral-700 hover:bg-coral/5 transition-colors"
          >
            Shop Our Etsy Store ↗
          </a>
          <Link
            href="/newsletter"
            className="mt-2 px-4 py-3 rounded-xl bg-coral text-white font-semibold text-center
                       hover:bg-coral-600 transition-colors"
          >
            Get the Newsletter
          </Link>
        </nav>
      </div>
    </header>
  )
}
