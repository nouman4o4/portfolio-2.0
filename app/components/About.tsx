// app/components/About.tsx
export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of
              experience building web applications that users love. I specialize
              in React, Next.js, and Node.js, with a strong focus on creating
              performant, accessible, and beautiful user experiences.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              When I'm not coding, you can find me contributing to open-source
              projects, writing technical blog posts, or exploring the latest
              web technologies. I believe in continuous learning and sharing
              knowledge with the developer community.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Tailwind CSS",
                "GraphQL",
                "PostgreSQL",
                "AWS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-slate-800 rounded-full text-sm border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-linear-to-br from-cyan-500/20 to-blue-500/20 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=600&h=600&fit=crop"
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
