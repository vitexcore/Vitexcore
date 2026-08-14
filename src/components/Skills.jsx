// Skill card data
const skillCategories = [
  {
    title: 'Frontend',
    icon: (
      <svg className="w-5 h-5 text-[#08428C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
    cardClass: 'bg-[#374151]/15 border-[#374151]/50 hover:border-[#08428C]/40',
    items: [
      { label: 'HTML5', abbr: 'H5', color: 'bg-orange-500/15 text-orange-400' },
      { label: 'CSS3', abbr: 'C3', color: 'bg-blue-500/15 text-blue-400' },
      { label: 'Tailwind CSS', abbr: 'TW', color: 'bg-[#08428C]/20 text-[#08428C]' },
      { label: 'JavaScript', abbr: 'JS', color: 'bg-yellow-500/15 text-yellow-400' },
    ],
  },
  {
    title: 'Currently Learning',
    icon: (
      <svg className="w-5 h-5 text-[#08428C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    cardClass: 'bg-[#08428C]/10 border-[#08428C]/30 hover:border-[#08428C]/60 relative overflow-hidden',
    badge: 'Learning',
    items: [
      { label: 'React', abbr: 'Re', color: 'bg-cyan-500/15 text-cyan-400' },
      { label: 'Node.js', abbr: 'N', color: 'bg-green-500/15 text-green-400' },
      { label: 'Express', abbr: 'Ex', color: 'bg-gray-500/15 text-gray-400' },
      { label: 'MongoDB', abbr: 'Mo', color: 'bg-green-600/15 text-green-500' },
    ],
  },
  {
    title: 'Tools',
    icon: (
      <svg className="w-5 h-5 text-[#08428C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    cardClass: 'bg-[#374151]/15 border-[#374151]/50 hover:border-[#08428C]/40',
    items: [
      { label: 'Git', abbr: 'Git', color: 'bg-orange-600/15 text-orange-500' },
      { label: 'GitHub', abbr: 'GH', color: 'bg-gray-500/15 text-gray-400' },
      { label: 'VS Code', abbr: 'VS', color: 'bg-blue-500/15 text-blue-400' },
      { label: 'Linux', abbr: 'Lx', color: 'bg-yellow-700/15 text-yellow-600' },
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-[500px] h-[500px] rounded-full bg-[#08428C]/5 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-[#08428C]" />
            <span className="font-inter text-xs font-medium text-[#08428C] uppercase tracking-widest">Skills</span>
            <div className="w-8 h-0.5 bg-[#08428C]" />
          </div>
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-white">My Toolkit</h2>
          <p className="font-inter text-base text-[#E5E7EB]/50 mt-4 max-w-lg mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`reveal group rounded-2xl border p-7 hover:-translate-y-1 transition-all duration-300 ${category.cardClass}`}
            >
              {category.badge && (
                <div className="absolute top-3 right-3 bg-[#08428C] rounded-full px-2.5 py-1">
                  <span className="font-inter text-xs text-white font-medium">{category.badge}</span>
                </div>
              )}
              <div className="w-12 h-12 rounded-xl bg-[#08428C]/20 border border-[#08428C]/30 flex items-center justify-center mb-6 group-hover:bg-[#08428C]/30 transition-colors duration-300">
                {category.icon}
              </div>
              <h3 className="font-poppins font-semibold text-white text-lg mb-6">{category.title}</h3>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#08428C]/10 transition-colors duration-200 cursor-default"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${item.color.split(' ')[0]}`}>
                      <span className={`font-poppins font-bold text-xs ${item.color.split(' ')[1]}`}>{item.abbr}</span>
                    </div>
                    <span className="font-inter text-sm text-[#E5E7EB]/80">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
