// app/components/Footer.tsx
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
	return (
		<footer className="py-12 border-t border-slate-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 md:mb-0">
						DevPortfolio
					</div>
					<div className="flex gap-6">
						<a href="#" className="hover:text-cyan-400 transition-colors">
							<Github className="w-5 h-5" />
						</a>
						<a href="#" className="hover:text-cyan-400 transition-colors">
							<Linkedin className="w-5 h-5" />
						</a>
						<a href="#" className="hover:text-cyan-400 transition-colors">
							<Mail className="w-5 h-5" />
						</a>
					</div>
				</div>
				<div className="text-center text-slate-400 text-sm mt-8">© 2024 DevPortfolio. All rights reserved.</div>
			</div>
		</footer>
	)
}


