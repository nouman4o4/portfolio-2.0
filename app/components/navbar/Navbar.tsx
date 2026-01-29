// app/components/Navbar.tsx
"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"
import Link from "next/link"
import Logo from "../Logo"
import MobileMenu from "./MobileMenu"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />

          <div className="hidden md:flex space-x-8">
            {[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-cyan-400 font-semibold transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden cursor-pointer"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </nav>
  )
}
