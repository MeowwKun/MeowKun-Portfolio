const explorations = [
	{
		title: "RAG systems",
		note: "Small archives that breathe - letting memory answer with context and care."
	},
	{
		title: "AI interfaces",
		note: "Softly guided conversations, subtle visual cues, and clear human boundaries."
	},
	{
		title: "Generative visuals",
		note: "Textures that evolve like weather - algorithmic, but tender."
	},
	{
		title: "Motion systems",
		note: "Reusable choreography: timing, easing, and the silence between frames."
	},
	{
		title: "Real-time AI",
		note: "Live perception and adaptive feedback - the system learning while you move."
	},
	{
		title: "Interactive experiences",
		note: "Spaces that respond to curiosity, not just clicks."
	}
];

export default function Exploring() {
	return (
		<section id="exploring" className="w-full pt-24 pb-28 px-30" data-reveal>
			<div className="w-full flex flex-col gap-10">
				<div className="flex items-end justify-between">
					<h2 className="text-6xl font-black tracking-[0.45rem]" data-split-text>
						CURRENTLY
					</h2>
					<p className="text-sm tracking-[0.35rem] uppercase text-white/70" data-split-text>
						Lab fragments
					</p>
				</div>

				<div className="grid grid-cols-12 gap-6" data-stagger>
					{explorations.map((item, index) => (
						<div
							key={item.title}
							className="col-span-6 rounded-[1.4rem] border border-white/10 bg-[#2A4C4E] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.35)] hover:border-white/50 transition-colors"
							data-stagger-item
						>
							<p className="text-xs uppercase tracking-[0.35rem] text-white/60">#{String(index + 1).padStart(2, "0")}</p>
							<h3 className="text-xl font-semibold tracking-[0.2rem] mt-3" data-split-text>
								{item.title}
							</h3>
							<p className="text-sm text-white/75 mt-3 leading-relaxed font-medium">{item.note}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
