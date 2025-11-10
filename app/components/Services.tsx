// app/components/Services.tsx
import { Code2, Palette, Rocket, Users } from "lucide-react"

const services = [
  {
    icon: <Code2 className="w-12 h-12" />,
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks like React, Next.js, and Vue. Focused on performance, scalability, and user experience.",
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed with user-centered principles. From wireframes to high-fidelity prototypes and design systems.",
  },
  {
    icon: <Rocket className="w-12 h-12" />,
    title: "Performance Optimization",
    description:
      "Speed up your web applications with code splitting, lazy loading, and advanced caching strategies. Achieve perfect Lighthouse scores.",
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Consultation",
    description:
      "Technical guidance and architecture planning for your projects. Help with technology selection, best practices, and team mentoring.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Services
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          Full-stack development services tailored to bring your ideas to life
          with cutting-edge technology and best practices
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="text-cyan-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
