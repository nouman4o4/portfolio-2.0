type Project = {
  title: string
  category: string
  image: string
  description: string
  tech: string[]
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative bg-slate-900/60 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500 transition-all duration-300">
      <div className="aspect-16/10 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5 lg:p-4">
        <div className="text-cyan-400 text-xs md:text-sm mb-2">
          {project.category}
        </div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          {project.title}
        </h3>
        <p className="text-slate-400 mb-4 text-sm md:text-[15px] leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-[11px] md:text-xs px-2 py-1 bg-slate-800 rounded border border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
