import Link from "next/link"

type LogoProps = {
  className?: string
  text?: string
}

export default function Logo({
  className = "",
  text = "Developer Nomi",
}: LogoProps) {
  return (
    <Link
      href="/"
      className={`text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ${className}`}
    >
      {text}
    </Link>
  )
}
