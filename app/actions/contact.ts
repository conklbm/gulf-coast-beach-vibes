'use server'

export type ContactResult =
  | { success: true }
  | { success: false; error: string }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function sendContactMessage(formData: {
  name: string
  email: string
  message: string
  botField?: string
}): Promise<ContactResult> {
  // Honeypot — bots fill hidden fields; silently accept and drop
  if (formData.botField) {
    return { success: true }
  }

  const name = formData.name?.trim() ?? ''
  const email = formData.email?.trim() ?? ''
  const message = formData.message?.trim() ?? ''

  if (!name || name.length > 100) {
    return { success: false, error: 'Please enter your name.' }
  }
  if (!EMAIL_RE.test(email) || email.length > 200) {
    return { success: false, error: 'Please enter a valid email address.' }
  }
  if (!message || message.length < 10) {
    return { success: false, error: 'Please write a message (at least a sentence).' }
  }
  if (message.length > 5000) {
    return { success: false, error: 'Message is too long — please keep it under 5,000 characters.' }
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY
  if (!accessKey) {
    console.error('Missing WEB3FORMS_ACCESS_KEY env var')
    return {
      success: false,
      error: 'The contact form is temporarily unavailable — please message us on Facebook instead.',
    }
  }

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Contact form: ${name}`,
      from_name: 'Gulf Coast Beach Vibes',
      name,
      email,
      message,
    }),
  })

  if (!res.ok) {
    const body = await res.text()
    console.error('Web3Forms API error:', res.status, body)
    return {
      success: false,
      error: "Couldn't send your message — please try again or message us on Facebook.",
    }
  }

  return { success: true }
}
