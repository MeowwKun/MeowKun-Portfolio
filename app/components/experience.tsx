import Image from "next/image";

interface ExperienceItem {
	id: number;
	role: string;
	date: string;
	company: string;
	description: string;
	summary: string;
	image: string;
	imageAlt: string;
}

const experienceItems: ExperienceItem[] = [
	{
		id: 1,
		role: "Intern",
		date: "Jun 2024 - Jul 2024",
		company: "Druk Holdings and Investments",
		description: "Web Development intern at DRIVE, DHI",
		summary: "Assisted in developing part of the DHI website, along with technical documentations and other work.",
		image: "/experience/dhi.png",
		imageAlt: "Druk Holdings and Investments"
	},
	{
		id: 2,
		role: "Intern",
		date: "Jul 2025",
		company: "Government Technology Agency",
		description: "Machine Learning intern at GovTech Agency",
		summary: "Developed the interface and integrated the model for the NLP English-Dzongkha Translation system.",
		image: "/experience/govtech.png",
		imageAlt: "Government Technology Agency"
	},
	{
		id: 3,
		role: "Member",
		date: "Oct 2023 - Feb 2024",
		company: "Bhutanverse",
		description: "Team Member for the Bhutanverse Project",
		summary: "Developed digital assets, assisted in land development and various testings.",
		image: "/experience/bhutanverse.png",
		imageAlt: "Bhutanverse"
	},
	{
		id: 4,
		role: "Volunteer",
		date: "Mar 2026",
		company: "TEDxThimphu",
		description: "Volunteered for the TEDxThimphu Event",
		summary: "Helped organize the event ",
		image: "/experience/tedx.png",
		imageAlt: "TEDxThimphu"
	}
];

export default function Experience() {
	return (
		<main className="w-full">
			<section className="w-full pt-30 pb-20 pl-30" data-reveal>
				<div className="w-full flex justify-between items-center">
					<h2 className="text-6xl font-black tracking-[0.45rem]">
						EXPERIENCE
					</h2>
				</div>
			</section>

			<section className="w-full px-30 pb-30">
				<div className="flex flex-col gap-6" data-stagger>
					{experienceItems.map((item) => (
						<div
							key={item.id}
							data-stagger-item
							className="bg-[#2A4C4E] rounded-4xl px-10 py-8 flex items-center justify-between"
						>
							<div className="flex items-center gap-6">
								<div className="text-white font-black tracking-[0.2rem]">
									<p className="text-sm">{String(item.id).padStart(2, "0")}</p>
									<p className="text-lg font-bold">{item.role}</p>
									<p className="text-xs opacity-90 mt-1 tracking-[0.05rem]">
										{item.date}
									</p>
								</div>
								<div className="text-white text-left pl-26">
									<p className="text-base font-bold tracking-[0.1rem] pl-10">
										{item.company}
									</p>
									<p className="text-sm opacity-90 mt-1 tracking-[0.05rem] pl-10">
										{item.description}
									</p>
									<p className="text-sm opacity-90 mt-3 max-w-xl leading-relaxed pl-10">
										{item.summary}
									</p>
								</div>
							</div>

							<div className="flex items-center justify-center w-80 px-4">
								<Image
									src={item.image}
									alt={item.imageAlt}
									width={144}
									height={64}
									className="h-16 w-full object-contain"
								/>
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
