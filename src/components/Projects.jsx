const projects = [
  {
    title: 'Axel',
    description: 'A desktop AI assistant with voice and assistant tooling.',
    tags: ['Desktop app', 'AI assistant'],
    badgeLabel: 'AI',
    badgeColor: 'bg-[#08428C]',
    repository: 'https://github.com/vitexcore/Axel',
  },
  {
    title: 'Store',
    description: 'A QR payment platform built for stores.',
    tags: ['QR payments', 'Store platform'],
    badgeLabel: 'Payments',
    badgeColor: 'bg-green-600/80',
    repository: 'https://github.com/vitexcore/Store',
  },
  {
    title: 'School Management System',
    description: 'A system for managing school operations.',
    tags: ['School tools', 'Management system'],
    badgeLabel: 'Education',
    badgeColor: 'bg-purple-600/80',
    repository: 'https://github.com/vitexcore/school-management-system',
  },
  {
    title: 'The Royal',
    description: 'A website for The Royal.',
    tags: ['Website', 'Web design'],
    badgeLabel: 'Website',
    badgeColor: 'bg-[#08428C]',
    repository: 'https://github.com/vitexcore/the-royal',
  },
]

function ProjectCard({ project }) {
  return (
    <article className="reveal group rounded-2xl bg-[#374151]/15 border border-[#374151]/50 overflow-hidden hover:border-[#08428C]/40 transition-all duration-300 hover:-translate-y-1">
      <div className="h-44 bg-[#374151]/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#111827] flex items-center justify-center">
          <span className="font-poppins font-bold text-4xl text-[#08428C]/50" aria-hidden="true">{project.badgeLabel.slice(0, 1)}</span>
        </div>
        <div className={`absolute top-3 right-3 ${project.badgeColor} rounded-full px-2.5 py-1`}>
          <span className="font-inter text-xs text-white">{project.badgeLabel}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-poppins font-semibold text-white text-lg mb-2">{project.title}</h3>
        <p className="font-inter text-sm text-[#E5E7EB]/60 leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => <span key={tag} className="font-inter text-xs text-[#08428C] bg-[#08428C]/10 border border-[#08428C]/20 rounded-full px-2.5 py-1">{tag}</span>)}
        </div>
        <a href={project.repository} target="_blank" rel="noreferrer" className="block text-center bg-[#08428C] hover:bg-[#0a52b0] text-white font-inter text-xs font-semibold py-2.5 rounded-xl transition-colors duration-200">
          GitHub repository <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-[#08428C]/5 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-[#08428C]" />
            <span className="font-inter text-xs font-medium text-[#08428C] uppercase tracking-widest">Projects</span>
          </div>
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-white">Selected Work</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </div>
    </section>
  )
}

export default Projects
