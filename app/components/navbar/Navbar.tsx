// app/components/Navbar.tsx
"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Logo from "../Logo"
import MobileMenu from "./MobileMenu"
import CodingLogo from "./CodingLogo"

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

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GRID LAYOUT */}
        <div className="grid grid-cols-3 items-center h-20">
          {/* LEFT (empty for balance) */}
          <Logo />

          {/* CENTER NAV LINKS */}
          <div className="hidden md:flex justify-center gap-10">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-slate-300 hover:text-cyan-400 font-semibold transition-all duration-300 group"
              >
                {item.label}

                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE (Logo + Mobile Menu) */}
          <div className="flex justify-end items-center gap-4">
            <CodingLogo />

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden cursor-pointer"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </nav>
  )
}
