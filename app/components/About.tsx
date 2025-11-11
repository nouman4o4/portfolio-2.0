"use client"

import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiNpm,
} from "react-icons/si"
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaGithub,
} from "react-icons/fa"

export default function About() {
  const tech = [
    { name: "HTML", icon: FaHtml5, color: "group-hover:text-orange-500" },
    { name: "CSS", icon: FaCss3Alt, color: "group-hover:text-blue-500" },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "group-hover:text-yellow-400",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "group-hover:text-blue-400",
    },
    {
      name: "React.js",
      icon: FaReact,
      color: "group-hover:text-cyan-400",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "group-hover:text-white",
    },
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      color: "group-hover:text-cyan-400",
    },
    { name: "Node.js", icon: FaNodeJs, color: "group-hover:text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "group-hover:text-gray-300" },
    { name: "MongoDB", icon: FaDatabase, color: "group-hover:text-green-500" },
    {
      name: "npm",
      icon: SiNpm,
      color: "group-hover:text-red-500",
    },
    {
      name: "Git/GitHub",
      icon: FaGithub,
      color: "group-hover:text-gray-400",
    },
  ]

  return (
    <section id="about" className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Header */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-8 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-4xl">
              I'm a passionate{" "}
              <span className="text-cyan-400 font-semibold">
                Full Stack Web Developer
              </span>{" "}
              specializing in the{" "}
              <span className="text-cyan-400 font-semibold">MERN stack</span>.
              Over the past{" "}
              <span className="text-cyan-400 font-semibold">two+ years</span>,
              I've been building real-world projects, learning through hands-on
              practice, and refining my ability to craft seamless, modern web
              experiences.
            </p>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-bold text-slate-200 mb-8 uppercase tracking-wider">
              What I Can Build
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Frontend Skills */}
              <div className="group relative p-8 bg-linear-to-br from-slate-900/80 to-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20 transition-colors duration-300">
                      <svg
                        className="w-7 h-7 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-cyan-400">
                      Frontend Development
                    </h4>
                  </div>

                  <p className="text-slate-300 mb-5 leading-relaxed">
                    I build modern, responsive user interfaces with React.js and
                    can handle any frontend task thrown my way.
                  </p>

                  <ul className="space-y-3 text-sm text-slate-400">
                    <li className="flex items-start gap-2.5">
                      <span className="text-cyan-400 mt-0.5 font-bold">✓</span>
                      <span>
                        Custom component development with{" "}
                        <span className="text-slate-200 font-medium">
                          React.js
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-cyan-400 mt-0.5 font-bold">✓</span>
                      <span>
                        Styling with{" "}
                        <span className="text-slate-200 font-medium">
                          Tailwind CSS
                        </span>{" "}
                        and other CSS frameworks
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-cyan-400 mt-0.5 font-bold">✓</span>
                      <span>
                        Form management with validation and error handling
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-cyan-400 mt-0.5 font-bold">✓</span>
                      <span>
                        State management using{" "}
                        <span className="text-slate-200 font-medium">
                          Redux
                        </span>{" "}
                        and{" "}
                        <span className="text-slate-200 font-medium">
                          Zustand
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-cyan-400 mt-0.5 font-bold">✓</span>
                      <span>
                        UI libraries integration:{" "}
                        <span className="text-slate-200 font-medium">
                          shadcn/ui
                        </span>
                        ,{" "}
                        <span className="text-slate-200 font-medium">
                          DaisyUI
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-cyan-400 mt-0.5 font-bold">✓</span>
                      <span>Responsive design and mobile-first approach</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Backend Skills */}
              <div className="group relative p-8 bg-linear-to-br from-slate-900/80 to-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors duration-300">
                      <svg
                        className="w-7 h-7 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-blue-400">
                      Backend Development
                    </h4>
                  </div>

                  <p className="text-slate-300 mb-5 leading-relaxed">
                    I create robust, scalable backend systems with complete CRUD
                    operations and beyond.
                  </p>

                  <ul className="space-y-3 text-sm text-slate-400">
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-400 mt-0.5 font-bold">✓</span>
                      <span>RESTful API design and implementation</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-400 mt-0.5 font-bold">✓</span>
                      <span>
                        Full CRUD operations with{" "}
                        <span className="text-slate-200 font-medium">
                          Node.js
                        </span>{" "}
                        and{" "}
                        <span className="text-slate-200 font-medium">
                          Express.js
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-400 mt-0.5 font-bold">✓</span>
                      <span>
                        Database management with{" "}
                        <span className="text-slate-200 font-medium">
                          MongoDB
                        </span>{" "}
                        and{" "}
                        <span className="text-slate-200 font-medium">
                          Mongoose
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-400 mt-0.5 font-bold">✓</span>
                      <span>
                        User authentication and authorization (JWT, sessions)
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-400 mt-0.5 font-bold">✓</span>
                      <span>
                        Admin dashboards with role-based access control
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-400 mt-0.5 font-bold">✓</span>
                      <span>
                        Advanced features: pagination, filtering, search
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* AI-Powered Workflow */}
            <div className="group relative p-8 bg-linear-to-br from-slate-900/80 to-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 text-center">
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-5">
                  <div className="p-2.5 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors duration-300">
                    <svg
                      className="w-7 h-7 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-purple-400">
                    AI-Powered Workflow
                  </h4>
                </div>

                <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto">
                  I efficiently use AI tools like{" "}
                  <span className="text-purple-400 font-semibold">ChatGPT</span>
                  ,
                  <span className="text-purple-400 font-semibold"> Claude</span>
                  , and
                  <span className="text-purple-400 font-semibold">
                    {" "}
                    Cursor IDE
                  </span>{" "}
                  to speed up my development process, boost productivity, and
                  stay focused on the bigger picture — solving real problems and
                  building meaningful things faster.
                </p>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-2xl font-bold text-slate-200 mb-8 uppercase tracking-wider">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto">
              {tech.map(({ name, icon: Icon, color }, index) => (
                <div
                  key={name}
                  className="group relative"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-all duration-300 cursor-pointer hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10">
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Icon
                      className={`h-9 w-9 text-slate-400 ${color} transition-all duration-300 relative z-10`}
                    />
                    <span className="text-xs text-slate-500 group-hover:text-slate-200 font-medium transition-colors duration-300 relative z-10">
                      {name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* My Journey */}
          <div className="max-w-4xl">
            <h3 className="text-2xl font-bold text-slate-200 mb-6 flex items-center gap-2">
              My Journey
            </h3>
            <div className="space-y-5">
              <p className="text-slate-300 leading-relaxed text-lg">
                My journey into web development began in{" "}
                <span className="text-cyan-400 font-semibold">2023</span> during
                my IT diploma. What started as basic HTML experiments quickly
                became a passion for building dynamic interfaces and full-stack
                applications.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                Despite working full-time as a{" "}
                <span className="text-cyan-400 font-semibold">carpenter</span>,
                I've dedicated my evenings and weekends to learning through{" "}
                <span className="text-cyan-400 font-semibold">
                  YouTube tutorials
                </span>
                ,{" "}
                <span className="text-cyan-400 font-semibold">
                  FreeCodeCamp
                </span>
                , and personal projects — writing thousands of lines of code
                along the way.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                My goal now is to transition fully into tech and continue
                building meaningful, scalable digital products that make a real
                impact.
              </p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-slate-200 mb-8 uppercase tracking-wider">
              Educational Background
            </h3>
            <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
              <div className="group relative p-6 bg-linear-to-br from-slate-900/80 to-slate-900/50 border border-slate-800 rounded-xl backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="absolute inset-0 rounded-xl bg-linear-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h4 className="text-cyan-400 font-bold text-lg relative z-10 mb-2">
                  Diploma in Information Technology (DIT)
                </h4>
                <p className="text-slate-400 text-sm relative z-10 leading-relaxed">
                  Completed during my early journey in tech, where I was
                  introduced to the fundamentals of web development.
                </p>
              </div>

              <div className="group relative p-6 bg-linear-to-br from-slate-900/80 to-slate-900/50 border border-slate-800 rounded-xl backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h4 className="text-cyan-400 font-bold text-lg relative z-10 mb-2">
                  Intermediate — Faculty of Arts
                </h4>
                <p className="text-slate-400 text-sm relative z-10 leading-relaxed">
                  Provided a creative foundation and discipline that complements
                  my technical skills as a developer.
                </p>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div>
            <h3 className="text-2xl font-bold text-slate-200 mb-8 uppercase tracking-wider">
              Interests
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl">
              {[
                {
                  title: "Technology & Innovation",
                  description:
                    "I'm fascinated by how technology evolves and shapes our lives — always exploring new tools and frameworks that push web development forward.",
                },
                {
                  title: "Coding & Problem Solving",
                  description:
                    "Writing code feels like solving puzzles — I enjoy breaking down problems and finding clean, efficient solutions.",
                },
                {
                  title: "Topic Discussions",
                  description:
                    "I love engaging in thoughtful conversations with other developers about ideas, trends, and experiences in tech.",
                },
                {
                  title: "Fitness & Workouts",
                  description:
                    "Staying active keeps me focused and disciplined — it balances my long coding sessions with physical energy.",
                },
                {
                  title: "Learning & Exploration",
                  description:
                    "I'm a lifelong learner — always curious to try new tech stacks, improve my skills, and explore emerging technologies.",
                },
              ].map((interest, index) => (
                <div
                  key={index}
                  className="group relative p-5 bg-linear-to-br from-slate-900/80 to-slate-900/50 border border-slate-800 rounded-xl backdrop-blur-sm hover:border-slate-700 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="absolute inset-0 rounded-xl bg-linear-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <h4 className="text-slate-200 font-semibold text-base mb-2 group-hover:text-cyan-400 transition-colors duration-300 relative z-10">
                    {interest.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
