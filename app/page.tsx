// app/page.tsx
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Stats from "./components/Stats"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
    </div>
  )
}
