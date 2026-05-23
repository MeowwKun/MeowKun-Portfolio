export type CaseStudySection = {
	id: string;
	eyebrow: string;
	title: string;
	body: string[];
	bullets?: string[];
	cards?: Array<{
		label: string;
		title: string;
		text: string;
	}>;
	visualLabel?: string;
	visualNote?: string;
	visualImage?: string;
};

export type CaseStudy = {
	slug: string;
	code: string;
	title: string;
	summary: string;
	category: string;
	tags: string[];
	timeline: string;
	figmaUrl: string;
	coverImage: string;
	coverLabel: string;
	coverAccent: string;
	heroHighlights: string[];
	outcomes: string[];
	sections: CaseStudySection[];
};

const sharedFigmaUrl =
	"https://www.figma.com/design/HT5YOy6YsfS0svoUgbXJFc/Case-Study-01?node-id=0-1&p=f&t=7LvUKd0IzuHF7Qsq-0";

export const caseStudies: CaseStudy[] = [
	{
		slug: "studio-struct",
		code: "01",
		title: "STUDIO_STRUCT",
		summary:
			"A monochrome portfolio website using structural layouts, modular grids, and architectural-inspired visual hierarchy.",
		category: "Portfolio website · Bento",
		tags: ["UX Research", "Bento Grid", "Branding", "Web Design"],
		timeline: "3 Weeks",
		figmaUrl: sharedFigmaUrl,
		coverImage: "/Studio_Struct.png",
		coverLabel: "Monochrome grid",
		coverAccent: "from-stone-950 via-neutral-900 to-stone-600",
		heroHighlights: ["Monochrome palette", "Bold typography", "Structural layout"],
		outcomes: [
			"Improved content hierarchy using Bento grid layouts.",
			"Strong visual identity through wireframe-inspired design language.",
		],
		sections: [
			{
				id: "overview",
				eyebrow: "Case Study",
				title: "A structured studio presence",
				body: ["A monochrome portfolio concept using modular grids, careful spacing, and architectural hierarchy."],
				cards: [
					{ label: "Focus", title: "Bento IA", text: "Modular content blocks keep scanning simple." },
					{ label: "Tone", title: "Minimal", text: "Clean surfaces keep the work feeling premium." },
				],
				visualLabel: "Hero mockup",
				visualNote: "Monochrome layout study with structural blocks.",
				visualImage: "/Studio_Struct.png",
			},
			{
				id: "problem",
				eyebrow: "Problem statement",
				title: "Design studios often present work inconsistently",
				body: ["That makes it harder to communicate structure, process, and credibility clearly."],
				bullets: ["Show services fast.", "Keep the hierarchy calm and direct."],
			},
			{
				id: "research",
				eyebrow: "Research insights",
				title: "What users preferred",
				body: ["Users preferred modular layouts for scanning projects quickly."],
				bullets: ["Minimal interfaces kept attention on featured work.", "Short labels were easier to scan than decorative copy."],
			},
			{
				id: "wireframes",
				eyebrow: "Wireframes",
				title: "Layout studies",
				body: ["Sketched a vertical stack with modular blocks and cleaner card spacing."],
				cards: [
					{ label: "Frame", title: "Editorial stack", text: "Strong hero, compact service rail, clear project blocks." },
					{ label: "Frame", title: "Bento matrix", text: "A modular layout for quick scanning and flexible growth." },
				],
				visualLabel: "Wireframe mockup",
				visualNote: "Low-fidelity layout blocks and spacing tests.",
			},
			{
				id: "hi-fi",
				eyebrow: "High-fidelity",
				title: "Final visual direction",
				body: ["Dark canvas with neutral accents, large captions, and accessible focus states."],
				cards: [
					{ label: "Palette", title: "Monochrome", text: "Neutral surfaces keep the layout timeless." },
					{ label: "Type", title: "Bold sans", text: "Typography carries most of the visual weight." },
				],
				visualLabel: "UI mockup",
				visualNote: "Final desktop composition with card depth.",
			},
			{
				id: "prototype",
				eyebrow: "Prototype",
				title: "Clickable flow",
				body: ["Prototype covered browsing, expanded project states, and quick contact entry."],
				cards: [
					{ label: "Flow", title: "Browse", text: "Start from the hero and move into featured work." },
					{ label: "Flow", title: "Open", text: "Expand projects into concise case study pages." },
				],
			},
			{
				id: "iterations",
				eyebrow: "Iterations & rationale",
				title: "What changed",
				body: ["The strongest iteration reduced decorative clutter and tightened hierarchy."],
				bullets: ["Removed extra decoration.", "Kept motion subtle and quick.", "Added smaller, calmer card transitions."],
			},
			{
				id: "reflections",
				eyebrow: "Reflections",
				title: "A calmer, more credible studio site",
				body: ["The result feels composed, readable, and ready to scale into a larger portfolio system."],
			},
		],
	},
	{
		slug: "voyager",
		code: "02",
		title: "VOYAGER",
		summary:
			"A premium travel booking experience focused on immersive destination discovery and seamless booking interactions.",
		category: "Travel platform · Booking experience",
		tags: ["UX Strategy", "Search UX", "Responsive Web", "Booking Flow"],
		timeline: "4 weeks",
		figmaUrl: sharedFigmaUrl,
		coverImage: "/Voyager.png",
		coverLabel: "Luxury route",
		coverAccent: "from-slate-950 via-sky-950 to-amber-700",
		heroHighlights: ["Deep navy + gold", "Large imagery", "Spacious UI"],
		outcomes: [
			"Improved package comparison using structured card layouts.",
			"Increased booking clarity with simplified search flows.",
		],
		sections: [
			{
				id: "overview",
				eyebrow: "Case Study",
				title: "A premium booking interface",
				body: ["A travel platform built to feel premium, readable, and easy to compare."],
				cards: [
					{ label: "Focus", title: "Discovery", text: "Clear cards and big imagery guide exploration." },
					{ label: "Tone", title: "Luxury", text: "Editorial spacing keeps the interface elevated." },
				],
				visualLabel: "Hero mockup",
				visualNote: "Destination grid with premium imagery spacing.",
				visualImage: "/Voyager.png",
			},
			{
				id: "problem",
				eyebrow: "Problem statement",
				title: "Travel UI gets cluttered fast",
				body: ["Travel products often overwhelm people with dense information and busy booking steps."],
				bullets: ["Keep comparison simple.", "Make booking feel calm."],
			},
			{
				id: "research",
				eyebrow: "Research insights",
				title: "What users responded to",
				body: ["Users responded better to large destination imagery and clean metadata."],
				bullets: ["Clear metadata improved package comparison.", "Whitespace made the experience feel more premium."],
			},
			{
				id: "wireframes",
				eyebrow: "Wireframes",
				title: "Search and booking layout studies",
				body: ["Wireframes explored search filters, destination cards, and a clean booking summary."],
				cards: [
					{ label: "Frame", title: "Destination cards", text: "Big images with concise trip metadata." },
					{ label: "Frame", title: "Search tray", text: "Filters stay visible without crowding the page." },
				],
				visualLabel: "Wireframe mockup",
				visualNote: "Search results and booking summary spacing.",
			},
			{
				id: "hi-fi",
				eyebrow: "High-fidelity",
				title: "Refined visual direction",
				body: ["The final design used navy surfaces, gold accents, and generous card spacing."],
				bullets: ["Large imagery carries the premium feel.", "Elegant cards keep the UI approachable."],
				visualLabel: "UI mockup",
				visualNote: "Editorial travel layout with luxury spacing.",
			},
			{
				id: "prototype",
				eyebrow: "Prototype",
				title: "Clickable booking flow",
				body: ["Prototype covered search, package compare, and reservation handoff."],
				cards: [
					{ label: "Flow", title: "Search", text: "Filters and destination cards move together." },
					{ label: "Flow", title: "Book", text: "Booking steps stay short and readable." },
				],
			},
			{
				id: "iterations",
				eyebrow: "Iterations & rationale",
				title: "What changed",
				body: ["The strongest iteration simplified the search flow and reduced visual noise."],
				bullets: ["Moved key actions closer to the content.", "Kept the booking path shorter.", "Reduced decorative chrome around cards."],
			},
			{
				id: "reflections",
				eyebrow: "Reflections",
				title: "Premium, readable, and easier to trust",
				body: ["The result feels more editorial, but still practical for quick booking decisions."],
			},
		],
	},
	{
		slug: "canvasly",
		code: "03",
		title: "CANVASLY",
		summary:
			"A mobile-first digital art marketplace designed for immersive artwork browsing and artist interaction.",
		category: "Mobile app · Art marketplace",
		tags: ["Mobile UX", "Marketplace", "Art Direction", "Editorial Design"],
		timeline: "5 weeks",
		figmaUrl: sharedFigmaUrl,
		coverImage: "/Canvasly_1.png",
		coverLabel: "Gallery mobile",
		coverAccent: "from-neutral-950 via-zinc-800 to-amber-900",
		heroHighlights: ["Editorial typography", "Soft neutral palette", "Mobile-first"],
		outcomes: [
			"Improved artwork discoverability with clean navigation.",
			"Increased engagement through immersive artwork previews.",
		],
		sections: [
			{
				id: "overview",
				eyebrow: "Case Study",
				title: "A gallery-like mobile marketplace",
				body: ["A mobile-first art marketplace built to feel curated, calm, and easy to browse."],
				cards: [
					{ label: "Focus", title: "Discovery", text: "Artwork feels easier to find and save." },
					{ label: "Tone", title: "Minimal luxury", text: "Quiet surfaces keep attention on the art." },
				],
				visualLabel: "Hero mockup",
				visualNote: "Artwork feed with editorial spacing.",
				visualImage: "/Canvasly_1.png",
			},
			{
				id: "problem",
				eyebrow: "Problem statement",
				title: "Art marketplaces can feel transactional",
				body: ["Online art marketplaces often feel crowded instead of immersive."],
				bullets: ["Keep the gallery feel intact.", "Make artist interaction feel immediate."],
			},
			{
				id: "research",
				eyebrow: "Research insights",
				title: "What mobile users needed",
				body: ["Users preferred gallery-like layouts with fewer distractions."],
				bullets: ["Faster access to artwork details mattered.", "Favorites needed to be easy to reach."],
			},
			{
				id: "wireframes",
				eyebrow: "Wireframes",
				title: "Mobile-first layout studies",
				body: ["Wireframes explored thumb-friendly navigation and large artwork cards."],
				cards: [
					{ label: "Frame", title: "Gallery feed", text: "Tall cards create an immersive scroll rhythm." },
					{ label: "Frame", title: "Artist sheet", text: "Artist details stay close to the work." },
				],
				visualLabel: "Wireframe mockup",
				visualNote: "Mobile browsing and artist detail layout.",
				visualImage: "/Canvasly_2.png",
			},
			{
				id: "hi-fi",
				eyebrow: "High-fidelity",
				title: "Refined visual direction",
				body: ["The final UI used editorial typography, soft neutrals, and restrained luxury details."],
				bullets: ["Typography gives the experience character.", "The palette keeps the work feeling premium."],
				visualLabel: "UI mockup",
				visualNote: "Artwork page with immersive preview states.",
			},
			{
				id: "prototype",
				eyebrow: "Prototype",
				title: "Clickable gallery flow",
				body: ["Prototype covered artwork browsing, saving, and artist interaction."],
				cards: [
					{ label: "Flow", title: "Browse", text: "Card-led discovery uses large imagery and concise labels." },
					{ label: "Flow", title: "Save", text: "Favorites stay easy to reach from any view." },
				],
			},
			{
				id: "iterations",
				eyebrow: "Iterations & rationale",
				title: "What changed",
				body: ["The strongest iteration simplified navigation and made artwork feel more present."],
				bullets: ["Kept interactions thumb-friendly.", "Removed excess clutter from browsing.", "Added clearer saves and quick details."],
			},
			{
				id: "reflections",
				eyebrow: "Reflections",
				title: "A calmer art marketplace",
				body: ["The final experience feels more curated, less transactional, and easier to browse on mobile."],
			},
		],
	},
];

export function getCaseStudyBySlug(slug: string) {
	return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
