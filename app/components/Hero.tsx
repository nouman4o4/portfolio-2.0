"use client"

import { Github, Linkedin, Mail, ArrowDown, Sparkles } from "lucide-react"
import Link from "next/link"
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa"
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const tech = [
    { name: "HTML", icon: FaHtml5, color: "group-hover:text-orange-500" },
    { name: "CSS", icon: FaCss3Alt, color: "group-hover:text-blue-500" },
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      color: "group-hover:text-cyan-400",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "group-hover:text-blue-400",
    },
    { name: "Node.js", icon: FaNodeJs, color: "group-hover:text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "group-hover:text-gray-300" },
    { name: "React.js", icon: FaReact, color: "group-hover:text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "group-hover:text-white" },
    { name: "MongoDB", icon: FaDatabase, color: "group-hover:text-green-500" },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-8"
    >
      {/* Animated gradient background */}
      {/* <div
        className="absolute inset-0 opacity-30 rounded-2xl"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 182, 212, 0.15), transparent 50%) rounded-2xl`,
        }}
      /> */}

      {/* Grid pattern overlay */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] rounded-2xl" /> */}

      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />

      <div
        className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-8 text-left md:text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Main heading with stagger animation */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl  font-black tracking-tight mb-6 leading-[1.2]">
          <div className="relative inline-block">
            <span className="text-white">Hi, I'm </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Nouman
              </span>
              <span className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 blur-xl opacity-30 animate-pulse" />
            </span>
          </div>
          <br />
          <span className="text-slate-300 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Full Stack Developer
          </span>
        </h1>

        {/* Enhanced subheading */}
        <p className="text-slate-400 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-4 font-light">
          Building <span className="text-cyan-400 font-semibold">scalable</span>{" "}
          applications with the MERN stack
        </p>

        <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Specialized in crafting high-performance web experiences with modern
          technologies. Passionate about clean code, seamless UX, and
          pixel-perfect design.
        </p>

        {/* Enhanced CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/projects"
            className="group relative px-8 py-4 rounded-full font-semibold overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 transition-transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 blur transition-opacity" />
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform rotate-[-45deg]" />
            </span>
          </Link>

          <Link
            href="/contact"
            className="group px-8 py-4 rounded-full font-semibold border-2 border-slate-700 bg-slate-900/50 backdrop-blur-sm hover:border-cyan-400/50 hover:bg-slate-800/50 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Let's Talk</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>

        {/* Tech stack with enhanced styling */}
        <div className="mb-12">
          <p className="text-slate-500 text-sm uppercase tracking-wider mb-6 font-semibold">
            Technologies I Work With
          </p>
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            {tech.map(({ name, icon: Icon, color }, index) => (
              <div
                key={name}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-all duration-300 cursor-pointer hover:scale-110 hover:-translate-y-1">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />

                  <Icon
                    className={`h-8 w-8 text-slate-400 ${color} transition-all duration-300 relative z-10`}
                  />
                  <span className="text-xs text-slate-500 group-hover:text-slate-300 font-medium transition-colors duration-300 relative z-10">
                    {name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}
