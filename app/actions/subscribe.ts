'use server'

export type SubscribeResult =
  | { success: true }
  | { success: false; error: string }

export async function subscribeToNewsletter(email: string): Promise<SubscribeResult> {
  const apiKey  = process.env.BEEHIIV_API_KEY
  const pubId   = process.env.BEEHIIV_PUBLICATION_ID

  if (!apiKey || !pubId) {
    console.error('Missing BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID env vars')
    return { success: false, error: 'Server configuration error.' }
  }

  const res = await fetch(
    `https://api.beehiiv.com/v2/publications/${pubId}/subscriptions`,
    {
      method:  'POST',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        reactivate_existing: false,
        send_welcome_email:  true,
      }),
    }
  )

  if (!res.ok) {
    const body = await res.text()
    console.error('Beehiiv API error:', res.status, body)
    return { success: false, error: 'Could not subscribe. Please try again.' }
  }

  return { success: true }
}
