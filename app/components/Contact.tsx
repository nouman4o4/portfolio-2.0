// app/components/Contact.tsx
export default function Contact() {
	return (
		<section id="contact" className="py-20">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
					Get In Touch
				</h2>
				<p className="text-center text-slate-400 mb-12">
					Have a project in mind? Let's work together to create something amazing
				</p>
				<form className="space-y-6">
					<div className="grid md:grid-cols-2 gap-6">
						<input
							type="text"
							placeholder="Your Name"
							className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
						/>
						<input
							type="email"
							placeholder="Your Email"
							className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
						/>
					</div>
					<input
						type="text"
						placeholder="Subject"
						className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
					/>
					<textarea
						rows={6}
						placeholder="Your Message"
						className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
					></textarea>
					<button
						type="submit"
						className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	)
}


