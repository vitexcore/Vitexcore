import { useState } from 'react'

// Contact info items
const contactInfo = [
  {
    label: 'Email',
    value: 'paulinnocent2005@gmail.com',
    icon: (
      <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+234 807 729 6132',
    icon: (
      <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Jos North, Plateau State, Nigeria',
    icon: (
      <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSending, setIsSending] = useState(false)
  const [formStatus, setFormStatus] = useState(null)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setIsSending(true)
    setFormStatus(null)

    const payload = Object.fromEntries(new FormData(e.currentTarget).entries())

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(result.error || 'Your message could not be sent. Please try again.')
      }

      setForm({ name: '', email: '', subject: '', message: '' })
      setFormStatus({ type: 'success', message: 'Your message was sent. I’ll get back to you soon.' })
    } catch (error) {
      setFormStatus({ type: 'error', message: error.message || 'Your message could not be sent. Please try again.' })
    } finally {
      setIsSending(false)
    }
  }

  const inputClass =
    'w-full bg-page border border-border rounded-xl px-4 py-3 font-inter text-sm text-copy placeholder:text-muted focus:outline-none focus:border-accent transition-colors duration-200'

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-16 text-center">
          <div className="flex justify-center mb-4">
            <span className="font-inter text-xs font-medium text-muted uppercase tracking-widest">Contact</span>
          </div>
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-copy">Let&apos;s Work Together</h2>
          <p className="font-inter text-base text-muted mt-4 max-w-lg mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info column */}
          <div className="reveal lg:col-span-2 space-y-4">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="group rounded-2xl bg-surface border border-border p-5 flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-page border border-border flex items-center justify-center shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="font-inter text-xs text-muted mb-0.5">{info.label}</p>
                  <p className="font-poppins font-medium text-copy text-sm">{info.value}</p>
                </div>
              </div>
            ))}

            {/* Social media links */}
            <div className="rounded-2xl bg-surface border border-border p-5">
              <p className="font-inter text-xs text-muted mb-4">Social Media</p>
              <div className="flex gap-3">
                {/* GitHub */}
                <a href="https://github.com/vitexcore" className="group w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center hover:border-accent transition-colors duration-200">
                  <svg className="w-4 h-4 text-muted" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/innocent-danjuma-82ab163a2" className="group w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center hover:border-accent transition-colors duration-200">
                  <svg className="w-4 h-4 text-muted" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                {/* Twitter/X */}
                <a href="https://x.com/vitexcore" className="group w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center hover:border-accent transition-colors duration-200">
                  <svg className="w-4 h-4 text-muted" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="reveal lg:col-span-3 rounded-2xl bg-surface border border-border p-8">
            <h3 className="font-poppins font-semibold text-copy text-xl mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="font-inter text-xs text-muted block mb-2">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    autoComplete="name"
                    maxLength={100}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="font-inter text-xs text-muted block mb-2">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    autoComplete="email"
                    maxLength={254}
                    required
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="font-inter text-xs text-muted block mb-2">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  maxLength={160}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="font-inter text-xs text-muted block mb-2">Message</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  maxLength={5000}
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>
              <div className="absolute -left-[10000px]" aria-hidden="true">
                <label htmlFor="contact-website">Leave this field empty</label>
                <input id="contact-website" type="text" name="website" tabIndex={-1} autoComplete="off" />
              </div>
              {formStatus && (
                <p role={formStatus.type === 'error' ? 'alert' : 'status'} className="font-inter text-sm text-muted" aria-live="polite">
                  {formStatus.message}
                </p>
              )}
              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-surface border border-accent text-accent font-inter font-semibold text-sm py-3.5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
              >
                {isSending ? 'Sending…' : 'Send Message'}
                <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
