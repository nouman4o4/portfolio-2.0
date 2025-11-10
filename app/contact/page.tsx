import Navbar from "../components/Navbar"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen text-white">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/50">
        <Contact />
      </div>
    </div>
  )
}
