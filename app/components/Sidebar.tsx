import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import Logo from "./Logo"

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-72 xl:w-80 shrink-0">
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
                sizes="112px"
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
          <div className="mt-5 grid grid-cols-3 divide-x divide-slate-800 rounded-md border border-slate-800 overflow-hidden">
            <div className="px-3 py-2 text-center">
              <div className="text-lg font-semibold">50+</div>
              <div className="text-[11px] uppercase tracking-wide text-slate-400">
                Projects
              </div>
            </div>
            <div className="px-3 py-2 text-center">
              <div className="text-lg font-semibold">30+</div>
              <div className="text-[11px] uppercase tracking-wide text-slate-400">
                Clients
              </div>
            </div>
            <div className="px-3 py-2 text-center">
              <div className="text-lg font-semibold">5+</div>
              <div className="text-[11px] uppercase tracking-wide text-slate-400">
                Years
              </div>
            </div>
          </div>
        </div>

        {/* Navigation (GitHub-like repo list styling) */}
        <nav className="rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden">
          <ul className="text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/projects", label: "Projects" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 hover:bg-slate-800/70 border-b border-slate-800 last:border-b-0"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}
