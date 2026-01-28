import { projects } from "@/lib/staticData"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <section id="projects" className="py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 ">
        <h2 className="text-4xl font-bold text-center mb-4 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          A selection of recent projects showcasing my expertise in web
          development
        </p>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
