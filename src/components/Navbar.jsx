import { useState, useEffect } from 'react'

// Navbar component with scroll effects and mobile menu
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Nav links list
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]

  useEffect(() => {
    // Handle scroll to change navbar style and highlight active section
    function handleScroll() {
      setScrolled(window.scrollY > 20)

      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach((section) => {
        const top = section.offsetTop - 120
        if (window.scrollY >= top) {
          current = section.getAttribute('id')
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll when a nav link is clicked
  function handleLinkClick(href) {
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md shadow-xl shadow-black/20 border-b border-[#374151]/30 py-3'
          : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleLinkClick('#home') }}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-lg bg-[#08428C] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
            <span className="font-poppins font-black text-white text-sm">ID</span>
          </div>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href) }}
                className={`font-inter text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-[#08428C]'
                    : 'text-[#E5E7EB] hover:text-[#08428C]'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me button (desktop) */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleLinkClick('#contact') }}
          className="hidden md:block bg-[#08428C] hover:bg-[#0a52b0] text-white font-inter text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#08428C]/30"
        >
          Hire Me
        </a>

        {/* Hamburger button (mobile only) */}
        <button
          id="hamburger"
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className="w-6 h-0.5 bg-[#E5E7EB] transition-all duration-300 origin-center block"
            style={{ transform: menuOpen ? 'translateY(8px) rotate(45deg)' : '' }}
          />
          <span
            className="w-6 h-0.5 bg-[#E5E7EB] transition-all duration-300 block"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="w-6 h-0.5 bg-[#E5E7EB] transition-all duration-300 origin-center block"
            style={{ transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : '' }}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: menuOpen ? '400px' : '0' }}
      >
        <div className="mx-6 mt-4 rounded-xl bg-[#374151]/50 backdrop-blur-md border border-[#374151]/60 p-5">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href) }}
                  className="font-inter text-sm font-medium text-[#E5E7EB] hover:text-[#08428C] transition-colors duration-200 block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleLinkClick('#contact') }}
            className="mt-5 block text-center bg-[#08428C] text-white font-inter text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-200"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
