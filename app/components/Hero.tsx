// app/components/Hero.tsx
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Full Stack Developer
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Crafting exceptional digital experiences with clean code and modern
          technologies
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/portfolio"
            className="px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-cyan-400 rounded-full font-semibold hover:bg-cyan-400/10 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>

        <div className="flex gap-6 justify-center mt-12">
          <a href="#" className="hover:text-cyan-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-cyan-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-cyan-400 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
