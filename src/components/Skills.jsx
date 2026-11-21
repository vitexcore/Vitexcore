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
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-16 text-center">
          <div className="flex justify-center mb-4">
            <span className="font-inter text-xs font-medium text-muted uppercase tracking-widest">Skills</span>
          </div>
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-copy">My Toolkit</h2>
          <p className="font-inter text-base text-muted mt-4 max-w-lg mx-auto">
            A practical toolkit for full stack development, AI integrations, and growing machine learning skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <article key={category.title} className="reveal group rounded-2xl bg-surface border border-border p-7 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl bg-page border border-border flex items-center justify-center mb-6">
                <span className="font-poppins font-bold text-sm text-muted">0{index + 1}</span>
              </div>
              <h3 className="font-poppins font-semibold text-copy text-lg mb-6">{category.title}</h3>
              <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                {category.items.map((item) => (
                  <li key={item} className="font-inter text-xs text-muted bg-page border border-border rounded-full px-3 py-2">{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="font-inter text-sm text-muted mt-8 text-center">Currently building my machine learning skills.</p>
      </div>
    </section>
  )
}

export default Skills
