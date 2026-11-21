// Star icon used in each testimonial
function StarIcon() {
  return (
    <svg className="w-4 h-4 text-muted" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

// Testimonial data
const testimonials = [
  {
    quote: '"Innocent delivered exactly what we envisioned for our restaurant website. The attention to detail and the polished design exceeded our expectations. Customers love it."',
    name: "Shirley's Signature",
    role: 'Restaurant Owner, Jos',
    initial: 'S',
  },
  {
    quote: '"Working with Innocent was seamless from start to finish. He understood our brand vision immediately and delivered a platform that our customers genuinely enjoy using every day."',
    name: 'The Royale Food Hub',
    role: 'Business Owner, Rayfield',
    initial: 'R',
  },
  {
    quote: '"Innocent brought fresh ideas and technical skill to our project. His code is clean, well-structured, and easy to maintain. I highly recommend him for any web development work."',
    name: 'Blockfuse Labs',
    role: 'Instructor, Jos',
    initial: 'B',
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-border" />
            <span className="font-inter text-xs font-medium text-muted uppercase tracking-widest">Testimonials</span>
            <div className="w-8 h-0.5 bg-border" />
          </div>
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-copy">Client Feedback</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="reveal group rounded-2xl bg-surface border border-border p-7"
            >
              {/* 5 stars */}
              <div className="flex gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="font-inter text-sm text-muted leading-relaxed mb-6 italic">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center shrink-0">
                  <span className="font-poppins font-bold text-muted text-sm">{t.initial}</span>
                </div>
                <div>
                  <p className="font-poppins font-semibold text-copy text-sm">{t.name}</p>
                  <p className="font-inter text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
