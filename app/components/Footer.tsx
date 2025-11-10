// app/components/Footer.tsx
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import Logo from "./Logo"

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/50 bg-slate-950">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main content - single row layout */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Logo className="order-2 sm:order-1" />

          {/* Social links */}
          <div className="flex items-center gap-3 order-1 sm:order-2">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="group p-2.5 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-300"
              >
                <Icon className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-6" />

        {/* Copyright - minimal & centered */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-slate-500 text-sm">
          <span>© {new Date().getFullYear()} Nouman Khan.</span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span className="flex items-center gap-1">
            Crafted with{" "}
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> &
            Next.js
          </span>
        </div>
      </div>
    </footer>
  )
}
