const services = [
  {
    title: 'Full Stack Web Development',
    description: 'I build fast responsive web apps from the interface to the database using React, Next.js, TypeScript and Node.',
    icon: (
      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 5.75A1.75 1.75 0 014.75 4h14.5A1.75 1.75 0 0121 5.75v9.5A1.75 1.75 0 0119.25 17H4.75A1.75 1.75 0 013 15.25v-9.5zM8 21h8m-4-4v4" />
      </svg>
    ),
  },
  {
    title: 'Secure Backend and APIs',
    description: 'I build REST APIs with Node, Express, Python and FastAPI, with auth, validation and rate limiting from day one.',
    icon: (
      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3l7 3v5c0 4.5-3 7.5-7 10-4-2.5-7-5.5-7-10V6l7-3zM9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'AI Integration',
    description: 'I add AI to real products like assistants, voice tools and smart features using the Anthropic and Gemini APIs.',
    icon: (
      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3v3m0 12v3M3 12h3m12 0h3M5.64 5.64l2.12 2.12m8.48 8.48 2.12 2.12m0-12.72-2.12 2.12m-8.48 8.48-2.12 2.12M9 10a3 3 0 016 0v4a3 3 0 01-6 0v-4zm-3 3a6 6 0 0012 0" />
      </svg>
    ),
  },
  {
    title: 'Machine Learning',
    description: 'Currently building machine learning skills with Python, scikit-learn and PyTorch.',
    icon: (
      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 19V5m0 14h16M7 15l4-4 3 2 5-6" />
        <circle cx="7" cy="15" r="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="11" cy="11" r="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="13" r="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="19" cy="7" r="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
]

function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-16 text-center">
          <div className="flex justify-center mb-4">
            <span className="font-inter text-xs font-medium text-muted uppercase tracking-widest">Services</span>
          </div>
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-copy">What I Do</h2>
          <p className="font-inter text-base text-muted mt-4 max-w-lg mx-auto">
            Services I offer to bring your digital ideas to life.
          </p>
        </div>

        <div className="grid auto-rows-fr md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="reveal h-full rounded-2xl bg-surface border border-border p-7 transition-colors duration-300 hover:border-accent"
            >
              <div className="w-12 h-12 rounded-xl bg-page border border-border flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="font-poppins font-semibold text-copy text-base mb-3">{service.title}</h3>
              <p className="font-inter text-sm text-muted leading-relaxed">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
