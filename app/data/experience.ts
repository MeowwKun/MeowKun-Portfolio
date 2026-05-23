export interface JourneyItem {
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

export const journeyItems: JourneyItem[] = [
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
		imageAlt: "Government Technology Agency",
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
		imageAlt: "Druk Holdings and Investments",
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
		imageAlt: "Bhutanverse",
	},
	{
		id: "04",
		role: "Volunteer",
		date: "March 18 2026 - March 20 2026",
		place: "Thimphu",
		focus: "Storytelling with people",
		contribution:
			"Volunteered for the TEDxThimphu event and helped organize the event.",
		learning:
			"Learned to coordinate speakers and craft narratives that connect with diverse audiences.",
		image: "/experience/tedx.png",
		imageAlt: "TEDxThimphu",
	},
];
