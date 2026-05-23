import Image from "next/image";
import { journeyItems } from "../data/experience";
import SectionHeader from "./ui/SectionHeader";

export default function Experience() {
	return (
		<main className="w-full" id="journey">
			<section className="w-full pt-30 pb-20 section-x">
				<SectionHeader title="JOURNEY" subtitle="Experience as a path" layout="split" />
			</section>

			<section className="w-full section-x pb-30">
				<div className="grid grid-cols-12 gap-6" data-stagger>
					{journeyItems.map((item) => (
						<div
							key={item.id}
							className="col-span-12 rounded-[1.8rem] border border-white/10 bg-accent p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
							data-stagger-item
						>
							<div className="grid grid-cols-12 gap-6">
								<div className="col-span-12 md:col-span-3 text-white/80">
									<p className="text-xs tracking-[0.35rem] uppercase">{item.id}</p>
									<h3 className="text-xl font-semibold tracking-[0.2rem] mt-3" data-split-text>
										{item.place}
									</h3>
									<p className="text-sm mt-2 uppercase tracking-[0.2rem] text-white/70">
										{item.role}
									</p>
									<p className="text-xs mt-3 tracking-[0.2rem] text-white/60">{item.date}</p>
								</div>
								<div className="col-span-12 md:col-span-7 text-white/85">
									<p className="text-base tracking-[0.1rem] text-white/70 font-medium">{item.focus}</p>
									<p className="text-sm mt-4 leading-relaxed font-medium">{item.contribution}</p>
									<p className="text-sm mt-4 leading-relaxed text-white/70 font-medium">{item.learning}</p>
								</div>
								<div className="col-span-12 md:col-span-2 flex items-center justify-start md:justify-end">
									<Image
										src={item.image}
										alt={item.imageAlt}
										width={120}
										height={64}
										className="h-16 w-auto object-contain"
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
