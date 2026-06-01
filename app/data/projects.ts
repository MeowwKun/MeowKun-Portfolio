export interface ProjectStory {
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

export const projectStories: ProjectStory[] = [
{
		id: "01",
		title: "Sweet Escapes Bhutan – Tourism Website",
		year: "2026",
		role: "Developer",
		concept:
			"Developed a responsive tourism website with a focus on modern UI, performance, and user experience.",
		why: "To create a seamless and visually engaging platform for exploring tourism experiences in Bhutan.",
		tech: ["Next.js", "Tailwind", "Vercel"],
		challenge:
			"Balancing visual richness with fast loading speeds and responsive performance across devices.",
		atmosphere: "Modern layouts, vibrant visuals, smooth navigation.",
		interaction: "Responsive transitions, clean animations, intuitive browsing experience.",
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
		interaction: "Real-time detection overlays with clear confidence cues.",
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
		interaction: "Soft framing guides and minimal alerting.",
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
		interaction: "Live gesture overlays with gentle confirmations.",
	},
];
