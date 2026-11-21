// Footer section
function Footer() {
  function scrollTo(href) {
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center">
                <span className="font-poppins font-black text-copy text-sm">ID</span>
              </div>
              <span className="font-poppins font-bold text-copy text-lg">Innocent Danjuma</span>
            </div>
            <p className="font-inter text-sm text-muted leading-relaxed max-w-xs">
              Full stack developer based in Jos, Nigeria, building useful web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-copy text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#projects', label: 'Projects' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    className="font-inter text-sm text-muted hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-semibold text-copy text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {['Responsive Websites', 'Landing Pages', 'Frontend Development', 'Website Maintenance'].map(
                (service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      onClick={(e) => { e.preventDefault(); scrollTo('#services') }}
                      className="font-inter text-sm text-muted hover:text-accent transition-colors duration-200"
                    >
                      {service}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-muted">
            &copy; 2024 Innocent Danjuma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
