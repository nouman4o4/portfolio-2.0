import Navbar from "../components/Navbar"
import About from "../components/About"
import Footer from "../components/Footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/50">
        <About />
      </div>
    </div>
  )
}
