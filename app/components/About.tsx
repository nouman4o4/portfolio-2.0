// app/components/About.tsx
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

export default function About() {
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
    <section id="about" className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
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
          {/* <div className="relative">
            <div className="aspect-square rounded-2xl bg-linear-to-br from-cyan-500/20 to-blue-500/20 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=600&h=600&fit=crop"
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
