// Projects data array - each item becomes one project card
const projects = [
  {
    title: 'Restaurant Website',
    description: 'A modern, multi-page restaurant website with menu showcase, cart functionality, and WhatsApp ordering integration.',
    tags: ['HTML5', 'Tailwind', 'JavaScript'],
    badgeLabel: 'Web App',
    badgeColor: 'bg-[#08428C]',
  },
  {
    title: 'Food Hub Platform',
    description: 'A complete food ordering platform with backend API, JWT authentication, payment integration, and admin dashboard.',
    tags: ['Node.js', 'Tailwind', 'Prisma'],
    badgeLabel: 'Full Stack',
    badgeColor: 'bg-green-600/80',
  },
  {
    title: 'Student Management System',
    description: 'A comprehensive system for managing student records, grades, and attendance with a clean admin interface.',
    tags: ['HTML5', 'Tailwind', 'JavaScript'],
    badgeLabel: 'System',
    badgeColor: 'bg-purple-600/80',
  },
  {
    title: 'Grocery Store Website',
    description: 'A clean e-commerce storefront for a grocery business featuring product listings, filtering, and a smooth cart experience.',
    tags: ['HTML5', 'Tailwind', 'JavaScript'],
    badgeLabel: 'Frontend',
    badgeColor: 'bg-[#08428C]',
  },
  {
    title: 'Personal Portfolio',
    description: 'A polished portfolio website featuring canvas animations, typing effects, scroll-triggered animations, and dark premium design.',
    tags: ['Tailwind', 'JavaScript', 'GSAP'],
    badgeLabel: 'Creative',
    badgeColor: 'bg-rose-600/80',
  },
  {
    title: 'Business Landing Page',
    description: 'A high-converting business landing page with hero section, features, pricing, testimonials, and CTA sections.',
    tags: ['HTML5', 'Tailwind', 'JavaScript'],
    badgeLabel: 'Landing',
    badgeColor: 'bg-amber-600/80',
  },
]

// A single project card
function ProjectCard({ project }) {
  return (
    <div className="reveal group rounded-2xl bg-[#374151]/15 border border-[#374151]/50 overflow-hidden hover:border-[#08428C]/40 transition-all duration-300 hover:-translate-y-1">
      {/* Image placeholder */}
      <div className="h-44 bg-[#374151]/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#08428C]/30 to-[#374151]/20 flex items-center justify-center">
          <svg className="w-10 h-10 text-[#08428C]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div className={`absolute top-3 right-3 ${project.badgeColor} rounded-full px-2.5 py-1`}>
          <span className="font-inter text-xs text-white">{project.badgeLabel}</span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6">
        <h3 className="font-poppins font-semibold text-white text-lg mb-2">{project.title}</h3>
        <p className="font-inter text-sm text-[#E5E7EB]/50 leading-relaxed mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-inter text-xs text-[#08428C] bg-[#08428C]/10 border border-[#08428C]/20 rounded-full px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <a href="#" className="flex-1 text-center bg-[#08428C] hover:bg-[#0a52b0] text-white font-inter text-xs font-semibold py-2.5 rounded-xl transition-colors duration-200">
            Live Demo
          </a>
          <a href="#" className="flex-1 text-center border border-[#374151] hover:border-[#08428C]/50 text-[#E5E7EB]/70 hover:text-[#E5E7EB] font-inter text-xs font-semibold py-2.5 rounded-xl transition-all duration-200">
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

// Projects section
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
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-white">Selected Work</h2>
            <a href="#" className="font-inter text-sm text-[#08428C] hover:underline underline-offset-4 flex items-center gap-1.5">
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
