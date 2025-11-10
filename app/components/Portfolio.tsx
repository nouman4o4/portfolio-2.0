// app/components/Portfolio.tsx
import { ExternalLink } from "lucide-react"

const projects = [
	{
		title: "E-Commerce Platform",
		category: "Full Stack",
		image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
		description: "Modern e-commerce solution with Next.js, Stripe integration, and real-time inventory",
		tech: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
	},
	{
		title: "SaaS Dashboard",
		category: "Frontend",
		image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
		description: "Analytics dashboard with interactive charts and real-time data visualization",
		tech: ["React", "D3.js", "Node.js", "MongoDB"],
	},
	{
		title: "Mobile Banking App",
		category: "Mobile",
		image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
		description: "Secure mobile banking application with biometric authentication",
		tech: ["React Native", "Firebase", "Redux", "Jest"],
	},
	{
		title: "AI Content Generator",
		category: "Full Stack",
		image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
		description: "AI-powered content creation tool leveraging GPT-4 API",
		tech: ["Next.js", "OpenAI", "PostgreSQL", "Vercel"],
	},
	{
		title: "Social Media Platform",
		category: "Full Stack",
		image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
		description: "Real-time social networking platform with live messaging",
		tech: ["Next.js", "Socket.io", "Redis", "AWS"],
	},
	{
		title: "Portfolio CMS",
		category: "Backend",
		image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
		description: "Headless CMS for creative professionals with drag-and-drop builder",
		tech: ["Strapi", "GraphQL", "Docker", "Nginx"],
	},
]

export default function Portfolio() {
	return (
		<section id="portfolio" className="py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
					Portfolio
				</h2>
				<p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
					A selection of recent projects showcasing my expertise in web development
				</p>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div
							key={index}
							className="group relative bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300"
						>
							<div className="aspect-video overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
								/>
							</div>
							<div className="p-6">
								<div className="text-cyan-400 text-sm mb-2">{project.category}</div>
								<h3 className="text-xl font-bold mb-2">{project.title}</h3>
								<p className="text-slate-400 mb-4 text-sm">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tech.map((tech) => (
										<span key={tech} className="text-xs px-2 py-1 bg-slate-700 rounded">
											{tech}
										</span>
									))}
								</div>
								<a href="#" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
									View Project <ExternalLink className="w-4 h-4" />
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}


