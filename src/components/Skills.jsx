const skillCategories = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS 4'] },
  { title: 'Backend', items: ['Python', 'Django', 'Flask', 'FastAPI', 'Node.js', 'Express', 'REST APIs', 'Prisma'] },
  { title: 'Security', items: ['helmet', 'Rate limiting', 'CORS', 'zod validation', 'Password hashing', 'JWT', 'npm audit'] },
  { title: 'AI', items: ['Anthropic API integration', 'Gemini API integration', 'Voice tooling', 'Assistant tooling'] },
  { title: 'Learning', items: ['Machine learning', 'scikit-learn', 'PyTorch', 'NumPy', 'Pandas'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Linux', 'VS Code', 'Antigravity'] },
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
            A practical toolkit for full stack development, AI integrations, and growing machine learning skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <article key={category.title} className="reveal group rounded-2xl bg-[#374151]/15 border border-[#374151]/50 p-7 hover:border-[#08428C]/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#08428C]/20 border border-[#08428C]/30 flex items-center justify-center mb-6 group-hover:bg-[#08428C]/30 transition-colors duration-300">
                <span className="font-poppins font-bold text-sm text-[#08428C]">0{index + 1}</span>
              </div>
              <h3 className="font-poppins font-semibold text-white text-lg mb-6">{category.title}</h3>
              <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                {category.items.map((item) => (
                  <li key={item} className="font-inter text-xs text-[#E5E7EB]/75 bg-black/30 border border-[#374151]/60 rounded-full px-3 py-2">{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="font-inter text-sm text-[#E5E7EB]/50 mt-8 text-center">Currently building my machine learning skills.</p>
      </div>
    </section>
  )
}

export default Skills
