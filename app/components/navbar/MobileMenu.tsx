import Link from "next/link"

export default function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean
  setIsMenuOpen: (value: React.SetStateAction<boolean>) => void
}) {
  return (
    <div className="md:hidden bg-slate-900 border-t border-slate-800">
      <div className="px-4 py-6 space-y-4">
        {[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="block hover:text-cyan-400 font-medium transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
