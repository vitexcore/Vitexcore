import { useEffect, useState } from 'react'

// Import all section components
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Custom hook that makes elements with class "reveal" fade in on scroll
import useReveal from './hooks/useReveal'

function App() {
  // Controls whether the loading screen is shown
  const [loading, setLoading] = useState(true)

  // Hide the loader after 800ms (same timing as the original HTML)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  // Set up the scroll-reveal observer
  useReveal()

  return (
    <div className="bg-black text-[#E5E7EB] font-inter overflow-x-hidden">
      {/* Loading screen */}
      {loading && <Loader />}

      {/* Fixed navigation bar */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating scroll-to-top button */}
      <ScrollToTop />
    </div>
  )
}

export default App
