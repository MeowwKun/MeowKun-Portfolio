"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { CaseStudy } from "../../data/case-studies";
import CaseStudyCard from "./CaseStudyCard";

type CaseStudiesIndexClientProps = {
	caseStudies: CaseStudy[];
};

export default function CaseStudiesIndexClient({ caseStudies }: CaseStudiesIndexClientProps) {
	const orderedStudies = useMemo(() => caseStudies.slice(0, 3), [caseStudies]);

	return (
			<main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_34%),linear-gradient(180deg,#0b0f18_0%,#080b11_54%,#05070b_100%)] text-white">
			<div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
				<section className="max-w-3xl">
					<p className="text-[0.72rem] uppercase tracking-[0.4em] text-white/45">Case studies</p>
					<h1 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
						Case Studies
					</h1>
					<p className="mt-5 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
						Selected UX/UI projects focused on usability, interaction, and visual systems.
					</p>
				</section>

				<section id="case-study-grid" className="mt-14">
					<AnimatePresence mode="popLayout">
						<motion.div layout initial={false} className="grid gap-6 lg:grid-cols-3">
							{orderedStudies.map((caseStudy) => (
								<CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
							))}
						</motion.div>
					</AnimatePresence>
				</section>
			</div>
		</main>
	);
}
