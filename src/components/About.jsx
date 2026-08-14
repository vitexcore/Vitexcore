// About section showing profile card and bio text
function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/2 w-[500px] h-[500px] rounded-full bg-[#08428C]/5 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-[#08428C]" />
            <span className="font-inter text-xs font-medium text-[#08428C] uppercase tracking-widest">About Me</span>
          </div>
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-white">Who I Am</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Profile Card */}
          <div className="reveal">
            <div className="relative rounded-2xl bg-[#374151]/20 border border-[#374151]/50 p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#08428C]/10 blur-2xl" />

              {/* Avatar and name */}
              <div className="relative flex items-center gap-5 mb-8 pb-8 border-b border-[#374151]/50">
                <div className="w-20 h-20 rounded-2xl bg-[#08428C]/20 border border-dashed border-[#08428C]/40 flex items-center justify-center shrink-0">
                  <svg className="w-9 h-9 text-[#08428C]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-xl text-white">Innocent Danjuma</h3>
                  <p className="font-inter text-sm text-[#08428C] mt-0.5">Frontend Developer</p>
                  <div className="flex items-center gap-1.5 mt-2">
                    <svg className="w-3.5 h-3.5 text-[#E5E7EB]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-inter text-xs text-[#E5E7EB]/40">Jos, Nigeria</span>
                  </div>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '10+', label: 'Projects Delivered' },
                  { number: '5+', label: 'Satisfied Clients' },
                  { number: '2+', label: 'Years of Learning' },
                  { number: '100%', label: 'Commitment' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-black/40 rounded-xl p-4">
                    <p className="font-poppins font-bold text-2xl text-[#08428C]">{stat.number}</p>
                    <p className="font-inter text-xs text-[#E5E7EB]/50 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="mt-6 pt-6 border-t border-[#374151]/50">
                <p className="font-inter text-xs text-[#E5E7EB]/30 mb-3">Social Links</p>
                <div className="flex gap-3">
                  {/* GitHub */}
                  <div className="w-9 h-9 rounded-lg bg-[#374151]/50 border border-[#374151]/60 flex items-center justify-center cursor-pointer hover:border-[#08428C]/50 transition-colors duration-200">
                    <svg className="w-4 h-4 text-[#E5E7EB]/40" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  {/* LinkedIn */}
                  <div className="w-9 h-9 rounded-lg bg-[#374151]/50 border border-[#374151]/60 flex items-center justify-center cursor-pointer hover:border-[#08428C]/50 transition-colors duration-200">
                    <svg className="w-4 h-4 text-[#E5E7EB]/40" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  {/* Twitter/X */}
                  <div className="w-9 h-9 rounded-lg bg-[#374151]/50 border border-[#374151]/60 flex items-center justify-center cursor-pointer hover:border-[#08428C]/50 transition-colors duration-200">
                    <svg className="w-4 h-4 text-[#E5E7EB]/40" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div className="reveal">
            <p className="font-inter text-base text-[#E5E7EB]/70 leading-relaxed mb-6">
              I&apos;m a Software Engineering student at{' '}
              <span className="text-[#08428C] font-medium">Blockfuse Labs, Jos</span>,
              actively sharpening my skills as a frontend developer. My journey began with mastering HTML and Tailwind CSS, and I&apos;ve since expanded into JavaScript and am currently diving deep into backend development.
            </p>
            <p className="font-inter text-base text-[#E5E7EB]/70 leading-relaxed mb-8">
              I&apos;m passionate about crafting web experiences that are not just functional but genuinely feel great to use. Every project I ship reflects a commitment to clean, maintainable code and polished design that serves real users.
            </p>

            {/* Trait list */}
            <div className="space-y-4 mb-10">
              {[
                { title: 'Practical Builder', desc: 'I focus on shipping real, usable products, not just theory exercises.' },
                { title: 'Continuous Learner', desc: 'From HTML to JavaScript to backend, I keep pushing my stack forward consistently.' },
                { title: 'Detail Oriented', desc: 'Pixel-perfect execution and clean code are non-negotiables in everything I build.' },
              ].map((trait) => (
                <div key={trait.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#08428C]/15 border border-[#08428C]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: 18, height: 18 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" className="text-[#08428C]" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-white text-sm">{trait.title}</h4>
                    <p className="font-inter text-sm text-[#E5E7EB]/50 mt-0.5">{trait.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#08428C]/15 hover:bg-[#08428C]/25 border border-[#08428C]/30 text-[#08428C] font-inter font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200"
            >
              Download CV
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
