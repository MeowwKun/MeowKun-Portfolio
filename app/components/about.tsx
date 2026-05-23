import SectionHeader from "./ui/SectionHeader";

export default function About() {
	return (
		<section id="about" className="w-full pt-16 pb-20 sm:pt-24 md:pt-28 md:pb-26 section-x">
			<div className="w-full flex flex-col gap-6 sm:gap-10">
				<SectionHeader title="ABOUT" subtitle="Identity notes" layout="split" className="sm:items-end" />

				<div className="grid grid-cols-12 gap-6 sm:gap-8 lg:gap-10" data-stagger>
					<div className="col-span-12 lg:col-span-7 text-white/90">
						<p className="text-lg sm:text-xl md:text-2xl leading-relaxed tracking-[0.04rem] sm:tracking-[0.08rem] font-medium" data-stagger-item>
							I am an AI and Data Science student at GCIT, drawn to the quiet
							places where code becomes texture and interfaces become feeling.
						</p>
						<p className="text-base sm:text-lg leading-relaxed mt-4 sm:mt-6 text-white/80 font-medium" data-stagger-item>
							As a creative developer, digital artist, and frontend engineer, I build
							worlds that are soft to touch but precise in structure. I care about
							people first - how they pause, how they notice, how a system can feel
							gentle and human while staying ambitious.
						</p>
						<p className="text-base sm:text-lg leading-relaxed mt-4 sm:mt-6 text-white/80 font-medium" data-stagger-item>
							My practice blends art and technology into expressive digital systems:
							motion, light, and narrative woven into usable spaces. I am still
							learning, still experimenting, still listening for the emotion inside
							the machine.
						</p>
					</div>

					<div className="col-span-12 lg:col-span-5" data-stagger-item>
						<div className="rounded-[1.2rem] sm:rounded-[1.6rem] border border-white/10 bg-accent p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
							<div className="flex flex-col gap-5 sm:gap-6">
								<p className="text-xs uppercase tracking-[0.25rem] sm:tracking-[0.35rem] text-white/70">Roles</p>
								<div className="flex flex-col gap-3 sm:gap-4 text-sm sm:text-base tracking-[0.08rem] sm:tracking-[0.1rem] text-white/85">
									<span>creative developer</span>
									<span>digital artist</span>
									<span>frontend engineer</span>
									<span>human-centered builder</span>
								</div>
								<div className="h-px bg-white/10" />
								<p className="text-xs uppercase tracking-[0.25rem] sm:tracking-[0.35rem] text-white/70">Focus</p>
								<div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm tracking-[0.1rem] sm:tracking-[0.12rem] text-white/80">
									<span className="px-3 py-1 border border-white/15 rounded-full">AI</span>
									<span className="px-3 py-1 border border-white/15 rounded-full">motion</span>
									<span className="px-3 py-1 border border-white/15 rounded-full">interfaces</span>
									<span className="px-3 py-1 border border-white/15 rounded-full">visual systems</span>
									<span className="px-3 py-1 border border-white/15 rounded-full">storytelling</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
