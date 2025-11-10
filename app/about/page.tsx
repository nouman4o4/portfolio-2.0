import Navbar from "../components/Navbar"
import About from "../components/About"
import Footer from "../components/Footer"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
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
            <p className="text-slate-300 text-sm mt-4">
              Building modern web apps with Next.js, TypeScript, and Tailwind.
            </p>
            <div className="flex gap-4 mt-5 justify-center">
              <a
                href="#"
                aria-label="GitHub"
                className="hover:text-cyan-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Email"
                className="hover:text-cyan-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
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
