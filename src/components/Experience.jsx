// Timeline data for the experience section
const timelineItems = [
  {
    title: 'Started HTML & CSS',
    year: '2024',
    description: 'Began my web development journey learning the fundamentals of HTML structure and CSS styling. Built my first static web pages and discovered a genuine passion for creating on the web.',
    isActive: false,
  },
  {
    title: 'Mastered Tailwind CSS',
    year: '2024',
    description: 'Adopted Tailwind CSS as my primary styling tool and built multiple responsive client websites including restaurant and food business platforms with polished dark premium designs.',
    isActive: false,
  },
  {
    title: 'JvaScript Fundamentals',
    year: '2025',
    description: 'Enrolled at Blockfuse Labs in Jos to formalize my software engineering education and work alongside other developers on real-world projects in a structured learning environment.',
    isActive: false,
  },
  {
    title: 'Joined Blockfuse Labs',
    year: '2026',
    description: 'Dived into JavaScript, learning core concepts including higher-order functions, DOM manipulation, async programming, and interactive frontend development. Shipped several interactive client projects.',
    isActive: false,
  },
  {
    title: 'Learning Backend Development',
    year: 'Now',
    description: 'Currently expanding into backend development with Node.js, Express, Prisma, and PostgreSQL. Building full-stack applications with authentication, payment APIs, and cloud integrations.',
    isActive: true,
  },
]

function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] rounded-full bg-[#08428C]/5 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-[#08428C]" />
            <span className="font-inter text-xs font-medium text-[#08428C] uppercase tracking-widest">Experience</span>
          </div>
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-white">My Journey</h2>
        </div>

        <div className="max-w-3xl">
          {timelineItems.map((item, index) => {
            const isLast = index === timelineItems.length - 1

            return (
              <div key={item.title} className={`reveal relative pl-12 ${isLast ? '' : 'pb-12'}`}>
                {/* Vertical line (not shown on last item) */}
                {!isLast && (
                  <div className="absolute left-4 top-5 bottom-0 w-px bg-[#374151]/50" />
                )}

                {/* Dot */}
                <div
                  className={`absolute left-0 top-4 w-8 h-8 rounded-full bg-[#08428C] border-4 border-black flex items-center justify-center ${item.isActive ? 'ring-4 ring-[#08428C]/20' : ''}`}
                >
                  <div className={`w-2 h-2 rounded-full bg-white ${item.isActive ? 'animate-pulse' : ''}`} />
                </div>

                {/* Card */}
                <div
                  className={`rounded-2xl p-6 hover:border-[#08428C]/30 transition-colors duration-200 border ${
                    item.isActive
                      ? 'bg-[#08428C]/10 border-[#08428C]/30'
                      : 'bg-[#374151]/15 border-[#374151]/50'
                  }`}
                >
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                    <h3 className="font-poppins font-semibold text-white text-lg">{item.title}</h3>
                    <span
                      className={`font-inter text-xs rounded-full px-3 py-1 ${
                        item.isActive
                          ? 'text-white bg-[#08428C]'
                          : 'text-[#08428C] bg-[#08428C]/10 border border-[#08428C]/20'
                      }`}
                    >
                      {item.year}
                    </span>
                  </div>
                  <p className="font-inter text-sm text-[#E5E7EB]/50 leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
