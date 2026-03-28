import { notFound } from 'next/navigation'
import affiliateLinks from '@/lib/affiliateLinks'

// Vercel Analytics (in layout.tsx) automatically records a page view for
// every /go/* URL, giving you click counts per slug in the Vercel dashboard.
// No database needed — just deploy and clicks start appearing.

export default function GoPage({ params }: { params: { slug: string } }) {
  const destination = affiliateLinks[params.slug]

  if (!destination) notFound()

  return (
    <>
      {/* Instant browser redirect — no visible flash for the user */}
      <meta httpEquiv="refresh" content={`0; url=${destination}`} />
      <p style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
        Redirecting…{' '}
        <a href={destination}>Click here if you are not redirected</a>
      </p>
    </>
  )
}
