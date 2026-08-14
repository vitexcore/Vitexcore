// Hero section - the main landing part of the page
function Hero() {
  function scrollTo(href) {
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorative shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-[#08428C]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#08428C]/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#08428C]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#08428C]/8" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#E5E7EB 1px, transparent 1px), linear-gradient(to right, #E5E7EB 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 bg-[#08428C]/15 border border-[#08428C]/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#08428C] animate-pulse" />
              <span className="font-inter text-xs font-medium text-[#08428C]">Available for opportunities</span>
            </div>
            <h1 className="font-poppins font-black text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-6">
              Hi, I&apos;m<br />
              <span className="text-[#08428C]">Innocent</span><br />
              Danjuma
            </h1>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-0.5 bg-[#08428C]" />
              <p className="font-poppins font-medium text-base text-[#E5E7EB]/70 tracking-wide">
                Software Engineering Student · Frontend Developer
              </p>
            </div>
            <p className="font-inter text-base text-[#E5E7EB]/60 leading-relaxed mb-10 max-w-lg">
              I build responsive, scalable, and user-friendly web applications with clean code and sharp attention to detail. Studying at Blockfuse Labs, Jos, and shipping real products.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('#projects') }}
                className="bg-[#08428C] hover:bg-[#0a52b0] text-white font-inter font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#08428C]/30 hover:-translate-y-0.5">
                View Projects
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
                className="border border-[#374151] hover:border-[#08428C] text-[#E5E7EB] hover:text-[#08428C] font-inter font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5">
                Contact Me
              </a>
            </div>
            <div className="flex items-center gap-8 mt-14 pt-10 border-t border-[#374151]/50">
              <div>
                <p className="font-poppins font-bold text-3xl text-white">10+</p>
                <p className="font-inter text-xs text-[#E5E7EB]/50 mt-0.5">Projects Built</p>
              </div>
              <div className="w-px h-10 bg-[#374151]" />
              <div>
                <p className="font-poppins font-bold text-3xl text-white">2+</p>
                <p className="font-inter text-xs text-[#E5E7EB]/50 mt-0.5">Years Learning</p>
              </div>
              <div className="w-px h-10 bg-[#374151]" />
              <div>
                <p className="font-poppins font-bold text-3xl text-white">5+</p>
                <p className="font-inter text-xs text-[#E5E7EB]/50 mt-0.5">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right: Profile card */}
          <div className="reveal flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#08428C]/40 to-transparent rotate-6 scale-105" />
              <div className="absolute inset-0 rounded-3xl border-2 border-[#08428C]/20 rotate-3" />
              <div className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-3xl bg-[#374151]/30 border border-[#374151]/60 backdrop-blur-sm flex flex-col items-center justify-center gap-4 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#08428C]/15 blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-[#08428C]/10 blur-xl" />
                <div className="relative z-10 w-24 h-24 rounded-full bg-[#08428C]/20 border-2 border-dashed border-[#08428C]/40 flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#08428C]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="relative z-10 text-center px-6">
                  <p className="font-poppins font-semibold text-white text-lg">Innocent Danjuma</p>
                </div>
                <div className="relative z-10 mt-2 flex items-center gap-1.5 bg-[#08428C]/20 border border-[#08428C]/30 rounded-full px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-inter text-xs text-[#E5E7EB]/70">Open to work</span>
                </div>
              </div>
              <div className="absolute top-4 left-0 -translate-x-8 bg-[#374151]/80 border border-[#374151] rounded-xl px-3 py-2 backdrop-blur-sm">
                <p className="font-poppins font-semibold text-white text-xs">Tailwind CSS</p>
              </div>
              <div className="absolute bottom-10 right-0 translate-x-8 bg-[#08428C]/90 rounded-xl px-3 py-2">
                <p className="font-poppins font-semibold text-white text-xs">JavaScript</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-inter text-xs text-[#E5E7EB]/30">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#E5E7EB]/30 to-transparent" />
      </div>
    </section>
  )
}

export default Hero
