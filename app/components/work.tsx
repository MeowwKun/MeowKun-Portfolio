interface ProjectStory {
	id: string;
	title: string;
	year: string;
	role: string;
	concept: string;
	why: string;
	tech: string[];
	challenge: string;
	atmosphere: string;
	interaction: string;
}

const projectStories: ProjectStory[] = [
	{
		id: "01",
		title: "Namzoed - Super App",
		year: "2026",
		role: "Web Developer",
		concept:
			"Built a responsive web platform with expressive motion and a clear, fast structure for daily use.",
		why: "To make a super app feel lightweight, elegant, and reliable.",
		tech: ["Next.js", "Supabase", "GSAP", "HTML/CSS/JS"],
		challenge:
			"Keeping animation fluid while maintaining performance and SEO clarity through Google Search Console.",
		atmosphere: "Deep greens, clean surfaces, patient motion.",
		interaction: "Soft page transitions, gentle micro-reveals, smooth GSAP easing."
	},
	{
		id: "02",
		title: "EcoVision - Smart Recycling System",
		year: "2026",
		role: "AI Developer",
		concept:
			"Developed a YOLOv8-based bottle detection model for real-time classification of plastic bottles, condition, and a null class.",
		why: "To reduce confusion at collection points and improve recycling accuracy.",
		tech: ["Python", "OpenCV", "YOLOv8"],
		challenge: "Achieving reliable classification speed without sacrificing precision.",
		atmosphere: "Practical, focused, and fast.",
		interaction: "Real-time detection overlays with clear confidence cues."
	},
	{
		id: "03",
		title: "Liveness Detection for Face Payment",
		year: "2025",
		role: "AI Developer",
		concept:
			"Built a real-time blink-detection anti-spoofing system for facial liveness verification using OpenCV and Haar Cascades.",
		why: "To keep face payments secure without adding friction.",
		tech: ["Python", "OpenCV"],
		challenge: "Reducing false positives while keeping latency minimal.",
		atmosphere: "Focused, low-noise, precise.",
		interaction: "Soft framing guides and minimal alerting."
	},
	{
		id: "04",
		title: "HandSpeak - Sign Language Detection",
		year: "2025",
		role: "AI & Frontend Developer",
		concept:
			"Real-time gesture recognition with TensorFlow and OpenCV, wrapped in an accessible interactive web interface.",
		why: "To make communication feel more inclusive and expressive.",
		tech: ["TensorFlow", "OpenCV", "HTML/CSS/JS"],
		challenge: "Preserving nuance in hand motion while keeping the UI calm.",
		atmosphere: "Soft focus, quiet contrast, patient feedback.",
		interaction: "Live gesture overlays with gentle confirmations."
	}
];

export default function Work() {
	return (
		<main id="projects">
			<section className="w-full pt-30 pb-20" data-reveal>
				<div className="w-full flex justify-between items-center">
					<h2 className="text-6xl font-black tracking-[0.45rem]" data-split-text>
						PROJECTS
					</h2>
					<p className="text-sm tracking-[0.35rem] uppercase text-white/70" data-split-text>
						Stories in progress
					</p>
				</div>
			</section>

			<section className="w-full px-30 pb-30">
				<div className="grid grid-cols-12 gap-6" data-stagger>
					{projectStories.map((project) => (
						<div
							key={project.id}
							className="col-span-6 rounded-[1.8rem] border border-white/10 bg-[#2A4C4E] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-1 hover:border-white/50"
							data-stagger-item
						>
							<div className="flex items-start justify-between">
								<p className="text-xs uppercase tracking-[0.35rem] text-white/60">{project.id}</p>
								<p className="text-xs uppercase tracking-[0.35rem] text-white/60">{project.year}</p>
							</div>
							<h3 className="text-2xl font-semibold tracking-[0.2rem] mt-4" data-split-text>
								{project.title}
							</h3>
							<p className="text-xs uppercase tracking-[0.3rem] text-white/60 mt-2">{project.role}</p>
							<p className="text-sm text-white/75 mt-4 leading-relaxed font-medium">{project.concept}</p>
							<p className="text-sm text-white/75 mt-4 leading-relaxed font-medium">{project.why}</p>
							<div className="mt-6 flex flex-wrap gap-2">
								{project.tech.map((tech) => (
									<span
										key={tech}
										className="text-xs tracking-[0.2rem] uppercase px-3 py-1 border border-white/15 rounded-full text-white/70"
									>
										{tech}
									</span>
								))}
							</div>
							<div className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/75">
								<p className="leading-relaxed font-medium">
									<span className="uppercase text-xs tracking-[0.3rem] text-white/60">Challenge</span>
									<br />
									{project.challenge}
								</p>
								<p className="leading-relaxed font-medium">
									<span className="uppercase text-xs tracking-[0.3rem] text-white/60">Interaction</span>
									<br />
									{project.interaction}
								</p>
							</div>
							<p className="text-xs uppercase tracking-[0.35rem] text-white/50 mt-6">
								{project.atmosphere}
							</p>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
