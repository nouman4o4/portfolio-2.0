"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Home, Folder, User, Mail, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"
import Portal from "./Portal"

type Props = {
  isMenuOpen: boolean
  setIsMenuOpen: (v: boolean) => void
}

const menuItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Projects", href: "/projects", icon: Folder },
  { label: "About", href: "/about", icon: User },
  { label: "Contact", href: "/contact", icon: Mail },
]

export default function MobileMenu({ isMenuOpen, setIsMenuOpen }: Props) {
  const menuRef = useRef<HTMLDivElement>(null)

  // ✅ Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent | TouchEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("touchstart", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <Portal>
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Drawer */}
            <motion.aside
              ref={menuRef}
              className="fixed right-0 top-0 z-50 h-full w-[75%] bg-slate-900 border-l border-slate-800 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
            >
              {/* Header */}
              <div className="flex items-center justify-end p-4 border-b border-slate-800">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-slate-800 active:bg-slate-700 transition"
                >
                  <X className="text-slate-300" />
                </motion.button>
              </div>

              {/* Menu Items */}
              <motion.ul
                className="px-4 py-6 space-y-4"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.08 },
                  },
                }}
              >
                {menuItems.map(({ label, href, icon: Icon }) => (
                  <motion.li
                    key={label}
                    variants={{
                      hidden: { opacity: 0, x: 30 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <motion.div
                      whileTap={{ scale: 0.96 }}
                      transition={{
                        type: "spring",
                        stiffness: 600,
                        damping: 20,
                      }}
                    >
                      <Link
                        href={href}
                        onClick={() => setIsMenuOpen(false)}
                        className="group flex items-center gap-4 rounded-xl px-3 py-3 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/60 active:bg-slate-800 transition"
                      >
                        {/* Icon Button */}
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 group-active:bg-slate-800 transition">
                          <Icon className="h-5 w-5 text-slate-300" />
                        </span>

                        <span className="text-slate-200 font-medium group-active:text-white transition">
                          {label}
                        </span>
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </Portal>
  )
}
