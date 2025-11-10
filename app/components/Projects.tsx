// app/components/Portfolio.tsx
import { ExternalLink } from "lucide-react"
import ProjectCard from "./ProjectCard"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Full Stack",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    description:
      "Modern e-commerce solution with Next.js, Stripe integration, and real-time inventory",
    tech: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
  },
  {
    title: "SaaS Dashboard",
    category: "Frontend",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    description:
      "Analytics dashboard with interactive charts and real-time data visualization",
    tech: ["React", "D3.js", "Node.js", "MongoDB"],
  },
  {
    title: "Mobile Banking App",
    category: "Mobile",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    description:
      "Secure mobile banking application with biometric authentication",
    tech: ["React Native", "Firebase", "Redux", "Jest"],
  },
  {
    title: "AI Content Generator",
    category: "Full Stack",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    description: "AI-powered content creation tool leveraging GPT-4 API",
    tech: ["Next.js", "OpenAI", "PostgreSQL", "Vercel"],
  },
  {
    title: "Social Media Platform",
    category: "Full Stack",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    description: "Real-time social networking platform with live messaging",
    tech: ["Next.js", "Socket.io", "Redis", "AWS"],
  },
  {
    title: "Portfolio CMS",
    category: "Backend",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
    description:
      "Headless CMS for creative professionals with drag-and-drop builder",
    tech: ["Strapi", "GraphQL", "Docker", "Nginx"],
  },
]

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
