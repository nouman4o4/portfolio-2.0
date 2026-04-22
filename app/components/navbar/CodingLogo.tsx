// app/components/Logo.tsx
"use client"

import { Code2 } from "lucide-react"
import Link from "next/link"

export default function CodingLogo() {
  return (
    <Link href="/" className="group flex items-center gap-2">
      <div className="relative">
        {/* Icon */}
        <Code2 className="size-10 text-cyan-400 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110" />

        {/* Glow */}
        <div className="absolute inset-0 blur-xl bg-cyan-400/30 opacity-0 group-hover:opacity-100 transition duration-300" />
      </div>
    </Link>
  )
}
