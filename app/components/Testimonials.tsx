// app/components/Testimonials.tsx
const testimonials = [
	{
		name: "Sarah Johnson",
		role: "CEO, TechStart Inc",
		image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
		text:
			"Outstanding developer who delivered our project on time and exceeded expectations. The code quality is exceptional.",
	},
	{
		name: "Michael Chen",
		role: "Product Manager, Digital Solutions",
		image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
		text:
			"A true professional with excellent communication skills. Transformed our vision into a beautiful, functional product.",
	},
	{
		name: "Emily Rodriguez",
		role: "Founder, Creative Studios",
		image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
		text:
			"Incredibly talented developer with a keen eye for design. Our website performance improved by 300% after the optimization.",
	},
]

export default function Testimonials() {
	return (
		<section id="testimonials" className="py-20 bg-slate-900/50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
					Testimonials
				</h2>
				<p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">What clients say about working with me</p>
				<div className="grid md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<div key={index} className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
							<p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
							<div className="flex items-center gap-4">
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className="w-12 h-12 rounded-full object-cover"
								/>
								<div>
									<div className="font-semibold">{testimonial.name}</div>
									<div className="text-sm text-slate-400">{testimonial.role}</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}


