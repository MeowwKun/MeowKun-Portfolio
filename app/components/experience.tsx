import Image from "next/image";

interface JourneyItem {
	id: string;
	role: string;
	date: string;
	place: string;
	focus: string;
	contribution: string;
	learning: string;
	image: string;
	imageAlt: string;
}

const journeyItems: JourneyItem[] = [
	{
		id: "01",
		role: "Machine Learning Intern",
		date: "Jul 2025",
		place: "GovTech Bhutan",
		focus: "Translation systems and human trust",
		contribution:
			"Built the interface and stitched the NLP model into a usable flow for the English-Dzongkha translation system.",
		learning:
			"Learned how sensitive language systems are, and how interface choices can make them feel more human.",
		image: "/experience/govtech.png",
		imageAlt: "Government Technology Agency"
	},
	{
		id: "02",
		role: "Web Development Intern",
		date: "Jun 2024 - Jul 2024",
		place: "DHI Internship",
		focus: "Structure, documentation, and clarity",
		contribution:
			"Shaped sections of the DHI website and created clear technical documentation to keep the system legible.",
		learning:
			"Learned to value quiet infrastructure - the kind that lets people work without friction.",
		image: "/experience/dhi.png",
		imageAlt: "Druk Holdings and Investments"
	},
	{
		id: "03",
		role: "Creative Technologist",
		date: "Oct 2023 - Feb 2024",
		place: "Bhutanverse",
		focus: "Digital world-building",
		contribution:
			"Created digital assets and supported land development experiments for an immersive Bhutanverse space.",
		learning:
			"Learned to balance play and structure when building a shared digital world.",
		image: "/experience/bhutanverse.png",
		imageAlt: "Bhutanverse"
	},
	{
		id: "04",
		role: "Media Club",
		date: "Ongoing",
		place: "GCIT Media Club",
		focus: "Storytelling with people",
		contribution:
			"Documented events and helped shape visuals that feel personal, not promotional.",
		learning:
			"Learned to notice the small moments that make a story feel alive.",
		image: "/experience/tedx.png",
		imageAlt: "TEDxThimphu"
	}
];

export default function Experience() {
	return (
		<main className="w-full" id="journey">
			<section className="w-full pt-30 pb-20 px-30" data-reveal>
				<div className="w-full flex justify-between items-center">
					<h2 className="text-6xl font-black tracking-[0.45rem]" data-split-text>
						JOURNEY
					</h2>
					<p className="text-sm tracking-[0.35rem] uppercase text-white/70" data-split-text>
						Experience as a path
					</p>
				</div>
			</section>

			<section className="w-full px-30 pb-30">
				<div className="grid grid-cols-12 gap-6" data-stagger>
					{journeyItems.map((item) => (
						<div
							key={item.id}
							className="col-span-12 rounded-[1.8rem] border border-white/10 bg-[#2A4C4E] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
							data-stagger-item
						>
							<div className="grid grid-cols-12 gap-6">
								<div className="col-span-3 text-white/80">
									<p className="text-xs tracking-[0.35rem] uppercase">{item.id}</p>
									<h3 className="text-xl font-semibold tracking-[0.2rem] mt-3" data-split-text>
										{item.place}
									</h3>
									<p className="text-sm mt-2 uppercase tracking-[0.2rem] text-white/70">
										{item.role}
									</p>
									<p className="text-xs mt-3 tracking-[0.2rem] text-white/60">{item.date}</p>
								</div>
								<div className="col-span-7 text-white/85">
									<p className="text-base tracking-[0.1rem] text-white/70 font-medium">{item.focus}</p>
									<p className="text-sm mt-4 leading-relaxed font-medium">{item.contribution}</p>
									<p className="text-sm mt-4 leading-relaxed text-white/70 font-medium">{item.learning}</p>
								</div>
								<div className="col-span-2 flex items-center justify-end">
									<Image
										src={item.image}
										alt={item.imageAlt}
										width={120}
										height={64}
										className="h-16 w-full object-contain"
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
