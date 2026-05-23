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
		interaction: "Soft page transitions, gentle micro-reveals, smooth GSAP easing.",
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
