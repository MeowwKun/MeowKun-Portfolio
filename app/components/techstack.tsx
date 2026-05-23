import Image from "next/image";

const techRow1 = [
	{ src: "/tech_stack/python.png", alt: "Python", bg: "bg-accent", imgClass: "h-22 w-auto" },
	{ src: "/tech_stack/next.png", alt: "Next.js", bg: "bg-white", imgClass: "h-15 w-auto", padding: "p-20" },
	{ src: "/tech_stack/tailwind.png", alt: "Tailwind", bg: "bg-white", imgClass: "h-22 w-auto" },
];

const techRow2 = [
	{ src: "/tech_stack/supabase.png", alt: "Supabase", imgClass: "h-18 w-auto" },
	{ src: "/tech_stack/gsap.png", alt: "GSAP", imgClass: "h-18 w-auto" },
	{ src: "/tech_stack/vercel.png", alt: "Vercel", imgClass: "h-8 w-auto", padding: "p-20" },
	{ src: "/tech_stack/figma.png", alt: "Figma", imgClass: "h-18 w-auto" },
];

export default function TechStack() {
	return (
		<main>
			<section className="w-full pt-22 pb-16 flex items-center justify-center" data-reveal>
				<div className="text-center">
					<h2 className="section-title mb-2" data-split-text>
						MODERN
					</h2>
					<h2 className="section-title text-accent" data-split-text>
						TECH STACK
					</h2>
				</div>
			</section>

			<section className="w-full section-x pb-24">
				<div className="grid grid-cols-1 sm:grid-cols-3 mb-0" data-stagger>
					{techRow1.map((item) => (
						<div
							key={item.alt}
							className={`${item.bg} border border-black p-10 h-[240px] sm:h-[320px] flex items-center justify-center ${item.padding ?? ""}`}
							data-stagger-item
						>
							<Image src={item.src} alt={item.alt} width={95} height={95} className={item.imgClass} />
						</div>
					))}
				</div>

				<div className="grid grid-cols-2 sm:grid-cols-4" data-stagger>
					{techRow2.map((item) => (
						<div
							key={item.alt}
							className={`bg-white border border-black p-6 h-[240px] sm:h-[300px] flex items-center justify-center ${item.padding ?? ""}`}
							data-stagger-item
						>
							<Image src={item.src} alt={item.alt} width={80} height={80} className={item.imgClass} />
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
