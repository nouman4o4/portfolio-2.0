// app/components/Stats.tsx
const stats = [
	{ number: "50+", label: "Completed Projects" },
	{ number: "30+", label: "Happy Clients" },
	{ number: "100+", label: "Code Reviews" },
	{ number: "5+", label: "Years Experience" },
]

export default function Stats() {
	return (
		<section className="py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{stats.map((stat, index) => (
						<div key={index} className="text-center">
							<div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
								{stat.number}
							</div>
							<div className="text-slate-400">{stat.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}


