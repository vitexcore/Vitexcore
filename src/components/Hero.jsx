import profileImage from '../Assets/vitexcore.png'

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
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="reveal">
            <h1 className="font-poppins font-black text-5xl lg:text-6xl xl:text-7xl text-copy leading-[1.1] mb-6">
              Hi, I&apos;m<br />
              <span className="text-accent">Innocent</span><br />
              Danjuma
            </h1>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-0.5 bg-border" />
              <p className="font-poppins font-medium text-base text-muted tracking-wide">
                Full Stack Developer · Jos, Nigeria
              </p>
            </div>
            <p className="font-inter text-base text-muted leading-relaxed mb-10 max-w-lg">
              I’m Innocent Danjuma, also known as Vitex, a full stack developer based in Jos, Nigeria. I build web applications and am building my machine learning skills.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('#projects') }}
                className="bg-surface border border-border text-copy font-inter font-semibold text-sm px-7 py-3.5 rounded-xl transition-colors duration-200 hover:border-accent">
                View Projects
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
                className="bg-surface border border-accent text-accent font-inter font-semibold text-sm px-7 py-3.5 rounded-xl transition-colors duration-200">
                Contact Me
              </a>
            </div>
            <div className="flex items-center gap-8 mt-14 pt-10 border-t border-border">
              <div>
                <p className="font-poppins font-bold text-3xl text-copy">10+</p>
                <p className="font-inter text-xs text-muted mt-0.5">Projects Built</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="font-poppins font-bold text-3xl text-copy">2+</p>
                <p className="font-inter text-xs text-muted mt-0.5">Years Learning</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="font-poppins font-bold text-3xl text-copy">5+</p>
                <p className="font-inter text-xs text-muted mt-0.5">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right: Profile card */}
          <div className="reveal flex justify-center lg:justify-end">
            <div className="relative w-72 lg:w-80">
              <div className="absolute inset-0 rounded-[2rem] border-2 border-border rotate-3" />
              <div className="relative aspect-[4/5] rounded-[2rem] bg-surface border border-border p-2 rotate-[-2deg] overflow-hidden">
                <img
                  src={profileImage}
                  alt="Innocent Danjuma"
                  className="h-full w-full rounded-[1.5rem] object-cover object-center grayscale"
                />
                <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between gap-3 rounded-b-[1.5rem] bg-page p-5">
                  <div>
                    <p className="font-poppins font-semibold text-copy text-lg">Innocent Danjuma</p>
                    <p className="font-inter text-xs text-copy mt-1">Full Stack Developer</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 left-0 -translate-x-8 bg-surface border border-border rounded-xl px-3 py-2 rotate-2">
                <p className="font-poppins font-semibold text-copy text-xs">Tailwind CSS</p>
              </div>
              <div className="absolute bottom-10 right-0 translate-x-8 bg-surface rounded-xl px-3 py-2 -rotate-2">
                <p className="font-poppins font-semibold text-copy text-xs">JavaScript</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-inter text-xs text-muted">Scroll</span>
        <div className="w-px h-8 bg-border" />
      </div>
    </section>
  )
}

export default Hero
