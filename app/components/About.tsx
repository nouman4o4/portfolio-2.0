"use client"

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
        <div>
          <h2 className="text-4xl font-bold mb-6 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-slate-300 mb-4 leading-relaxed">
            My web development journey began in{" "}
            <span className="text-cyan-400 font-semibold">2023</span> during my
            IT diploma, where I was first introduced to web technologies. What
            started with simple HTML pages soon turned into a passion — I dove
            deep into CSS, JavaScript, and modern frameworks like React to build
            clean, dynamic user interfaces.
          </p>

          <p className="text-slate-300 mb-4 leading-relaxed">
            Exploring backend development with Node.js and Express opened the
            door for me to create full-stack applications. Along the way, I’ve
            been learning from platforms like{" "}
            <span className="text-cyan-400">YouTube tutorials</span>,
            <span className="text-cyan-400"> FreeCodeCamp</span>, and{" "}
            <span className="text-cyan-400">W3Schools</span>, writing thousands
            of lines of code and constantly improving my craft through
            real-world practice.
          </p>

          <p className="text-slate-300 mb-6 leading-relaxed">
            What makes my story unique is that I currently work full-time as a{" "}
            <span className="text-cyan-400">carpenter</span> — and code
            passionately in my free time. With my first developer job, I aim to
            transition fully into tech and dedicate myself to building powerful,
            modern web applications. My focus is on{" "}
            <span className="text-cyan-400">MERN stack</span>
            development — crafting scalable APIs, responsive UIs, and seamless
            digital experiences.
          </p>

          {/* technologies */}
          <div className="mb-14">
            <p className="text-slate-500 text-xl uppercase tracking-wider mb-6 font-semibold">
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
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
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
          {/* education */}
          <div className="mb-12">
            <p className="text-slate-500 text-xl uppercase tracking-wider mb-6 font-semibold">
              Educational Background
            </p>
            <div className="flex flex-col gap-4 max-w-md">
              <div className="group relative p-4 bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-all duration-300 hover:scale-[1.02]">
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <h4 className="text-cyan-400 font-semibold text-base relative z-10">
                  Diploma in Information Technology (DIT)
                </h4>
                <p className="text-slate-400 text-sm relative z-10 mt-1">
                  Completed during my early journey in tech, where I was
                  introduced to the fundamentals of web development.
                </p>
              </div>

              <div className="group relative p-4 bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <h4 className="text-cyan-400 font-semibold text-base relative z-10">
                  Intermediate — Faculty of Arts
                </h4>
                <p className="text-slate-400 text-sm relative z-10 mt-1">
                  Provided a creative foundation and discipline that complements
                  my technical skills as a developer.
                </p>
              </div>
            </div>
          </div>
          {/* interests */}
          {/* --- Interests Section --- */}
          <div className="mb-12">
            <p className="text-slate-500 text-sm uppercase tracking-wider mb-6 font-semibold">
              Interests
            </p>

            <div className="space-y-4">
              <div className="group">
                <h4 className="text-slate-200 font-medium text-sm group-hover:text-cyan-400 transition-colors">
                  Technology & Innovation
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I’m fascinated by how technology evolves and shapes our lives
                  — always exploring new tools and frameworks that push web
                  development forward.
                </p>
              </div>

              <div className="group">
                <h4 className="text-slate-200 font-medium text-sm group-hover:text-cyan-400 transition-colors">
                  Coding & Problem Solving
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Writing code feels like solving puzzles — I enjoy breaking
                  down problems and finding clean, efficient solutions.
                </p>
              </div>

              <div className="group">
                <h4 className="text-slate-200 font-medium text-sm group-hover:text-cyan-400 transition-colors">
                  Topic Discussions
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I love engaging in thoughtful conversations with other
                  developers about ideas, trends, and experiences in tech.
                </p>
              </div>

              <div className="group">
                <h4 className="text-slate-200 font-medium text-sm group-hover:text-cyan-400 transition-colors">
                  Fitness & Workouts
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Staying active keeps me focused and disciplined — it balances
                  my long coding sessions with physical energy.
                </p>
              </div>

              <div className="group">
                <h4 className="text-slate-200 font-medium text-sm group-hover:text-cyan-400 transition-colors">
                  Learning & Exploration
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I’m a lifelong learner — always curious to try new tech
                  stacks, improve my skills, and explore emerging technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
