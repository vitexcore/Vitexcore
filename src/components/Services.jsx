// Services data
const services = [
  {
    title: 'Responsive Website Development',
    description: 'Pixel-perfect websites that look great and work flawlessly on every screen size and device.',
    icon: (
      <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Landing Page Design',
    description: 'Conversion-focused landing pages designed to captivate visitors and drive meaningful action.',
    icon: (
      <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: 'Frontend Development',
    description: 'Clean, maintainable frontend code with smooth interactions and excellent user experience.',
    icon: (
      <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Website Maintenance',
    description: 'Ongoing support, updates, and improvements to keep your website running at its best.',
    icon: (
      <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
]

function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-border" />
            <span className="font-inter text-xs font-medium text-muted uppercase tracking-widest">Services</span>
            <div className="w-8 h-0.5 bg-border" />
          </div>
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-copy">What I Do</h2>
          <p className="font-inter text-base text-muted mt-4 max-w-lg mx-auto">
            Services I offer to bring your digital ideas to life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="reveal group rounded-2xl bg-surface border border-border p-7 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-page border border-border flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="font-poppins font-semibold text-copy text-base mb-3">{service.title}</h3>
              <p className="font-inter text-sm text-muted leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
