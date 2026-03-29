import { notFound, redirect } from 'next/navigation'
import affiliateLinks from '@/lib/affiliateLinks'

// Server-side redirect — browser gets a 307 response immediately,
// no HTML is rendered or parsed. Vercel Analytics still records a
// page view for every /go/* URL hit.

export default function GoPage({ params }: { params: { slug: string } }) {
  const destination = affiliateLinks[params.slug]

  if (!destination) notFound()

  redirect(destination)
}
