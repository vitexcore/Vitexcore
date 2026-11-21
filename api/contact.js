const recipient = 'paulinnocent2005@gmail.com'

function sendJson(response, status, body) {
  return response.status(status).json(body)
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return sendJson(response, 405, { error: 'Method not allowed.' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL

  if (!apiKey || !from) {
    return sendJson(response, 503, { error: 'Email delivery is not configured yet. Please email paulinnocent2005@gmail.com directly.' })
  }

  let body = request.body
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body)
    } catch {
      return sendJson(response, 400, { error: 'Invalid form submission.' })
    }
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return sendJson(response, 400, { error: 'Invalid form submission.' })
  }

  if (typeof body.website === 'string' && body.website.trim()) {
    return sendJson(response, 200, { success: true })
  }

  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const subject = typeof body.subject === 'string' ? body.subject.trim() : ''
  const message = typeof body.message === 'string' ? body.message.trim() : ''
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (
    name.length < 1 || name.length > 100 ||
    !emailPattern.test(email) || email.length > 254 ||
    subject.length < 1 || subject.length > 160 ||
    message.length < 1 || message.length > 5000
  ) {
    return sendJson(response, 400, { error: 'Please check the form fields and try again.' })
  }

  try {
    const delivery = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: `Portfolio contact: ${subject.replace(/[\r\n]+/g, ' ')}`,
        text: `New message from ${name} (${email})\n\n${message}`,
      }),
    })

    if (!delivery.ok) {
      console.error('Resend email delivery failed with status', delivery.status)
      return sendJson(response, 502, { error: 'Email delivery failed. Please email paulinnocent2005@gmail.com directly.' })
    }

    return sendJson(response, 200, { success: true })
  } catch {
    return sendJson(response, 502, { error: 'Email delivery failed. Please email paulinnocent2005@gmail.com directly.' })
  }
}
