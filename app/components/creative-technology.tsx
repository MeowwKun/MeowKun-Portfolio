const threads = [
	{
		title: "AI as a companion",
		copy:
			"I treat intelligence as a collaborator, not a shortcut - a way to listen, reinterpret, and reveal new textures."
	},
	{
		title: "Motion as language",
		copy:
			"Movement is how a system breathes. Small shifts, long fades, and gentle delays make interfaces feel alive."
	},
	{
		title: "Interfaces as scenes",
		copy:
			"I design screens like film frames - a light source, a focal point, a quiet cue inviting the next gesture."
	},
	{
		title: "Interaction as empathy",
		copy:
			"Every hover, scroll, and reveal is a micro-relationship. The goal is trust, not spectacle."
	}
];

export default function CreativeTechnology() {
	return (
		<section id="creative-tech" className="w-full pt-28 pb-28 px-30" data-reveal>
			<div className="w-full flex flex-col gap-10">
				<div className="flex items-end justify-between">
					<h2 className="text-6xl font-black tracking-[0.45rem]" data-split-text>
						CREATIVE
					</h2>
					<p className="text-sm tracking-[0.35rem] uppercase text-white/70" data-split-text>
						Technology notes
					</p>
				</div>

				<div className="grid grid-cols-12 gap-12" data-stagger>
					<div className="col-span-5 text-white/85">
						<p className="text-2xl leading-relaxed tracking-[0.08rem] font-medium" data-stagger-item>
							I make creative technology to slow people down. To let a page feel like a
							small world - responsive, quiet, and attentive. These are the threads I
							follow most often.
						</p>
						<p className="text-lg leading-relaxed mt-6 text-white/75 font-medium" data-stagger-item>
							The tools change. The intent stays: build expressive digital systems that
							care about how they are felt, not only how they work.
						</p>
					</div>

					<div className="col-span-7" data-stagger-item>
						<div className="rounded-[1.8rem] border border-white/10 bg-[#2A4C4E] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
							<div className="flex flex-col gap-6">
								{threads.map((thread) => (
									<div key={thread.title} className="border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
										<h3 className="text-lg font-semibold tracking-[0.2rem]" data-split-text>
											{thread.title}
										</h3>
										<p className="text-sm mt-3 text-white/75 leading-relaxed font-medium" data-stagger-item>
											{thread.copy}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
