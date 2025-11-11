import About from "../components/About"
import Link from "next/link"
import { Github, Linkedin, Facebook } from "lucide-react"
import Logo from "../components/Logo"

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white">
      <aside className="w-full shrink-0 mb-10 text-center lg:hidden">
        {/* Make sticky only on large screens to avoid awkward behavior on mobile */}
        <div className="space-y-6 lg:sticky lg:top-20">
          {/* Profile card (GitHub-like) */}
          <div className="p-5 lg:p-6 rounded-2xl border border-slate-800 bg-slate-900/50">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-cyan-500/30">
                <img
                  src="https://avatars.githubusercontent.com/u/137647786?v=4"
                  alt="Profile"
                  className="object-cover"
                  sizes="120px"
                />
              </div>
              <div className="mt-4">
                <Logo text={"Nouman Khan"} />
                <div className="text-slate-400 text-sm">@developer-nomi</div>
              </div>
            </div>
            <p className="text-slate-300 text-sm mt-4 text-center">
              Building modern web apps with latest technologies.
            </p>

            <div className="mt-5 grid grid-cols-3 divide-x divide-slate-800 rounded-md border border-slate-800 overflow-hidden">
              {[
                {
                  name: "GitHub",
                  icon: Github,
                  href: "https://github.com/nouman4o4",
                  color: "from-cyan-500/10 to-blue-500/10",
                },
                {
                  name: "LinkedIn",
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/nouman-khan-68372228b/",
                  color: "from-blue-500/10 to-sky-500/10",
                },
                {
                  name: "Facebook",
                  icon: Facebook,
                  href: "#",
                  color: "from-blue-400/10 to-indigo-500/10",
                },
              ].map(({ name, icon: Icon, href, color }, i) => (
                <div
                  key={name}
                  className="group relative px-3 py-3 text-center cursor-pointer transition-all duration-300 hover:scale-[1.03]"
                >
                  {/* Glow background on hover */}
                  <div
                    className={`absolute inset-0 bg-linear-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity blur-xl`}
                  />

                  <a
                    href={href}
                    aria-label={name}
                    target="_blank"
                    className="relative z-10 inline-block"
                  >
                    <Icon className="h-5 w-5 mx-auto mb-2 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                    <div className="text-[11px] uppercase tracking-wide text-slate-400 group-hover:text-cyan-400 relative z-10 transition-colors duration-300">
                      {name}
                    </div>{" "}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation (GitHub-like repo list styling) */}
        </div>
      </aside>
      <div className="rounded-2xl border border-slate-800 bg-slate-900/50">
        <About />
      </div>
    </div>
  )
}
