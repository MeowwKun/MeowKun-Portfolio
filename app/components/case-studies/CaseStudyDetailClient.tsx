"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import type { CaseStudy } from "../../data/case-studies";
import Section from "./Section";

function MockupPanel({ image, title }: { title: string; image: string }) {
	return (
		<div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-3">
			<div className="relative overflow-hidden rounded-[1rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))]">
				<div className="relative min-h-[210px] sm:min-h-[300px]">
					<Image
						src={image}
						alt={title}
						fill
						sizes="(max-width: 640px) 100vw, 960px"
						className="object-cover"
					/>
				</div>
			</div>
		</div>
	);
}

type CaseStudyDetailClientProps = {
	caseStudy: CaseStudy;
};

export default function CaseStudyDetailClient({ caseStudy }: CaseStudyDetailClientProps) {
	const pageRef = useRef<HTMLElement | null>(null);
	const { scrollYProgress } = useScroll({ target: pageRef, offset: ["start start", "end end"] });
	const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main
			ref={pageRef}
			className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_30%),linear-gradient(180deg,#090c13_0%,#06070b_100%)] text-white"
		>
			<motion.div
				className="fixed left-0 top-0 z-[90] h-[3px] w-full origin-left bg-white/70"
				style={{ scaleX: progress }}
			/>

			<div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
				<div className="space-y-10">
					<section className="space-y-4">
						<p className="text-[0.72rem] uppercase tracking-[0.35em] text-white/45">{caseStudy.category}</p>
						<h1 className="max-w-3xl text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
							{caseStudy.title}
						</h1>
						<p className="max-w-3xl text-base leading-8 text-white/70 sm:text-lg">{caseStudy.summary}</p>
						<div className="flex flex-wrap gap-2">
							{caseStudy.heroHighlights.map((item) => (
								<span
									key={item}
									className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-white/72"
								>
									{item}
								</span>
							))}
						</div>
					</section>

					<MockupPanel title={caseStudy.coverLabel} image={caseStudy.coverImage} />

					<section className="grid gap-4 rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-4 sm:grid-cols-3">
						<div>
							<p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/42">Timeline</p>
							<p className="mt-2 text-sm text-white/84">{caseStudy.timeline}</p>
						</div>
						<div>
							<p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/42">Figma</p>
							<p className="mt-2 text-sm text-white/84">Available</p>
						</div>
						<div>
							<p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/42">Format</p>
							<p className="mt-2 text-sm text-white/84">Responsive web</p>
						</div>
					</section>

					<div className="flex flex-wrap gap-3">
						<Link
							href="/case-studies"
							className="rounded-full border border-white/12 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/88 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10"
						>
							Back to case studies
						</Link>
						<a
							href={caseStudy.figmaUrl}
							target="_blank"
							rel="noreferrer"
							className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
						>
							Open Figma
						</a>
					</div>

					<div className="space-y-5">
						{caseStudy.sections.map((section) => (
							<Section
								key={section.id}
								id={section.id}
								eyebrow={section.eyebrow}
								title={section.title}
								intro={section.body[0]}
								className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-4 sm:p-5"
							>
								{section.body.slice(1).length ? (
									<div className="space-y-3 text-sm leading-7 text-white/72">
										{section.body.slice(1).map((paragraph) => (
											<p key={paragraph}>{paragraph}</p>
										))}
									</div>
								) : null}

								{section.bullets ? (
									<ul className="mt-4 space-y-2 text-sm leading-6 text-white/74">
										{section.bullets.map((bullet) => (
											<li key={bullet} className="flex gap-2">
												<span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/70" />
												<span>{bullet}</span>
											</li>
										))}
									</ul>
								) : null}

								{section.cards ? (
									<div className="mt-4 grid gap-3 sm:grid-cols-2">
										{section.cards.map((card) => (
											<div key={card.title} className="rounded-[1rem] border border-white/10 bg-black/18 p-4">
												<p className="text-[0.62rem] uppercase tracking-[0.28em] text-white/42">{card.label}</p>
												<h3 className="mt-2 text-sm font-semibold text-white">{card.title}</h3>
												<p className="mt-1 text-sm leading-6 text-white/68">{card.text}</p>
											</div>
										))}
									</div>
								) : null}
							</Section>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
