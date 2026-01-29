import Navbar from "../components/navbar/Navbar"
import Services from "../components/Services"
import Footer from "../components/Footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen text-white">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/50">
        <Services />
      </div>
    </div>
  )
}
