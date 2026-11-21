# Vitex Portfolio

## Contact form email

The contact form sends messages through the Resend API using the Vercel Function in `api/contact.js`. Messages are delivered to `paulinnocent2005@gmail.com`, and replies go to the sender's email address.

Set these server-side environment variables in Vercel for the Production, Preview, and Development environments:

- `RESEND_API_KEY`: a Resend API key with email sending access.
- `RESEND_FROM_EMAIL`: a sender address on a domain verified in Resend, such as `Innocent Danjuma <hello@your-verified-domain.com>`.

For local development, copy `.env.example` to `.env.local` and set both values. Run the app with `vercel dev` so the `/api/contact` function runs alongside the Vite site. Never use a `VITE_` prefix for the API key or expose it in browser code.
