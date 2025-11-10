"use client"

import { ExternalLink, Github } from "lucide-react"
import toast from "react-hot-toast"

type Project = {
  title: string
  category: string
  image: string
  description: string
  repo: string
  liveUrl?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col justify-between bg-slate-900/60 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500 transition-all duration-300">
      <div>
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
        </div>
      </div>
      <div className="flex gap-3 py-3 px-2">
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex curosr-pointer items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-lg transition-colors duration-200 text-sm"
        >
          <Github className="w-4 h-4" />
          <span>Repository</span>
        </a>
        <a
          onClick={() => {
            !project.liveUrl &&
              toast.error("Live preview is not available yet.")
          }}
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-1 flex ${
            !project.liveUrl ? "cursor-not-allowed" : "cursor-pointer"
          } items-center justify-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors duration-200 text-sm text-slate-900 font-medium`}
        >
          <ExternalLink className="w-4 h-4" />
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  )
}
