const socialLinks = [
	{ label: "Email", href: "mailto:sujal75.n@gmail.com" },
	{ label: "LinkedIn", href: "#linkedin" },
	{ label: "GitHub", href: "#github" },
	{ label: "Instagram", href: "#instagram" }
];

export default function Contact() {
	return (
		<section id="contact" className="w-full pt-28 pb-32 px-30" data-reveal>
			<div className="rounded-[2rem] border border-white/10 bg-[#0B0E16] p-12 shadow-[0_40px_90px_rgba(0,0,0,0.45)]">
				<div className="flex flex-col gap-8" data-stagger>
					<p className="text-xs uppercase tracking-[0.35rem] text-white/70" data-stagger-item>
						Contact
					</p>
					<h2 className="text-5xl font-black tracking-[0.35rem] leading-tight" data-split-text>
						If you would like to build something thoughtful together,
						let us start with a gentle conversation.
					</h2>
					<p className="text-lg leading-relaxed text-white/80 max-w-3xl" data-stagger-item>
						I am open to collaborations that feel calm, intentional, and curious.
						Share a story, a question, or a quiet idea - I will read it closely.
					</p>

					<div className="flex flex-wrap gap-4" data-stagger-item>
						{socialLinks.map((link) => (
							<a
								key={link.label}
								href={link.href}
								className="text-sm tracking-[0.25rem] uppercase px-5 py-3 rounded-full border border-white/20 hover:border-[#2A4C4E]/60 transition-colors"
							>
								{link.label}
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
