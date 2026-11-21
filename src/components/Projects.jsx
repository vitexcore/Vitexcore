const projects = [
  {
    title: 'Axel',
    description: 'A desktop AI assistant with voice and assistant tooling.',
    tags: ['Desktop app', 'AI assistant'],
    badgeLabel: 'AI',
    badgeColor: 'bg-page border border-border',
    repository: 'https://github.com/vitexcore/Axel',
  },
  {
    title: 'Store',
    description: 'A QR payment platform built for stores.',
    tags: ['QR payments', 'Store platform'],
    badgeLabel: 'Payments',
    badgeColor: 'bg-page border border-border',
    repository: 'https://github.com/vitexcore/Store',
  },
  {
    title: 'School Management System',
    description: 'A system for managing school operations.',
    tags: ['School tools', 'Management system'],
    badgeLabel: 'Education',
    badgeColor: 'bg-page border border-border',
    repository: 'https://github.com/vitexcore/school-management-system',
  },
  {
    title: 'The Royal',
    description: 'A website for The Royal.',
    tags: ['Website', 'Web design'],
    badgeLabel: 'Website',
    badgeColor: 'bg-page border border-border',
    repository: 'https://github.com/vitexcore/the-royal',
  },
]

function ProjectCard({ project }) {
  return (
    <article className="reveal group rounded-2xl bg-surface border border-border overflow-hidden transition-colors duration-300">
      <div className="h-44 bg-page relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-poppins font-bold text-4xl text-muted" aria-hidden="true">{project.badgeLabel.slice(0, 1)}</span>
        </div>
        <div className={`absolute top-3 right-3 ${project.badgeColor} rounded-full px-2.5 py-1`}>
          <span className="font-inter text-xs text-copy">{project.badgeLabel}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-poppins font-semibold text-copy text-lg mb-2">{project.title}</h3>
        <p className="font-inter text-sm text-muted leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => <span key={tag} className="font-inter text-xs text-muted bg-page border border-border rounded-full px-2.5 py-1">{tag}</span>)}
        </div>
        <a href={project.repository} target="_blank" rel="noreferrer" className="block text-center text-muted hover:text-accent font-inter text-xs font-semibold py-2.5 rounded-xl transition-colors duration-200">
          GitHub repository <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-16">
          <div className="mb-4">
            <span className="font-inter text-xs font-medium text-muted uppercase tracking-widest">Projects</span>
          </div>
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-copy">Selected Work</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </div>
    </section>
  )
}

export default Projects
