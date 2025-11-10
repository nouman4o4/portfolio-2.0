// app/page.tsx
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Stats from "./components/Stats"
import Services from "./components/Services"
import Portfolio from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden pt-5">
        <Hero />
      </div>
    </div>
  )
}
