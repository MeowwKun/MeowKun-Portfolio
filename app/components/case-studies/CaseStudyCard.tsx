"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { CaseStudy } from "../../data/case-studies";

type CaseStudyCardProps = {
	caseStudy: CaseStudy;
};

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
	return (
		<motion.article
			layout
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-10%" }}
			whileHover={{ y: -4, scale: 1.005 }}
			transition={{ duration: 0.35, ease: "easeOut" }}
			className="group relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.025] shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
		>
			<div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.coverAccent} opacity-30`} />

			<div className="relative flex h-full flex-col p-5 sm:p-5">
				<div className="flex items-start justify-between gap-4 text-[0.65rem] uppercase tracking-[0.28em] text-white/56">
					<span>{caseStudy.category}</span>
					<span>{caseStudy.timeline}</span>
				</div>

				<div className="mt-5 overflow-hidden rounded-[1rem] border border-white/10 bg-black/14">
					<div className="relative aspect-[16/10]">
						<Image
							src={caseStudy.coverImage}
							alt={`${caseStudy.title} preview`}
							fill
							sizes="(max-width: 640px) 100vw, 420px"
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/46 via-black/6 to-transparent" />
					</div>
				</div>

				<div className="mt-5 flex flex-col justify-end">
					<h3 className="text-xl font-black tracking-[-0.03em] text-white sm:text-[1.7rem]">
						{caseStudy.title}
					</h3>
					<p className="mt-2 text-sm font-medium text-white/70">{caseStudy.summary}</p>

					<div className="mt-4 space-y-2">
						<p className="text-[0.66rem] uppercase tracking-[0.28em] text-white/45">Outcomes</p>
						<ul className="space-y-2 text-[0.88rem] leading-6 text-white/74">
							{caseStudy.outcomes.map((outcome) => (
								<li key={outcome} className="flex gap-2">
									<span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/75" />
									<span>{outcome}</span>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="mt-5 flex flex-col gap-3 sm:flex-row">
					<Link
						href={`/case-studies/${caseStudy.slug}`}
						className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white px-4 py-2.5 text-sm font-semibold text-black transition-transform duration-300 group-hover:-translate-y-0.5 hover:bg-white/95"
					>
						View Case Study
					</Link>
					<a
						href={caseStudy.figmaUrl}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/84 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10"
					>
						Open Figma
					</a>
				</div>
			</div>
		</motion.article>
	);
}
