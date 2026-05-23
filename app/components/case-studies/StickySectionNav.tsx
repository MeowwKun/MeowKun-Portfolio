"use client";

import { useEffect, useState } from "react";

type StickySectionNavProps = {
	items: Array<{
		id: string;
		title: string;
	}>;
};

export default function StickySectionNav({ items }: StickySectionNavProps) {
	const [activeId, setActiveId] = useState(items[0]?.id ?? "");

	useEffect(() => {
		const sections = items
			.map((item) => document.getElementById(item.id))
			.filter((element): element is HTMLElement => Boolean(element));

		if (!sections.length) {
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				const visibleEntry = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

				if (visibleEntry?.target.id) {
					setActiveId(visibleEntry.target.id);
				}
			},
			{
				rootMargin: "-20% 0px -55% 0px",
				threshold: [0.08, 0.18, 0.3, 0.45],
			}
		);

		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, [items]);

	return (
		<nav className="sticky top-28 hidden w-full max-w-[280px] self-start rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_18px_48px_rgba(0,0,0,0.2)] backdrop-blur-sm md:block">
			<p className="text-[0.68rem] uppercase tracking-[0.35em] text-white/45">Sections</p>
			<div className="mt-4 flex flex-col gap-2">
				{items.map((item, index) => {
					const isActive = item.id === activeId;

					return (
						<a
							key={item.id}
							href={`#${item.id}`}
							className={`flex items-center gap-3 rounded-[1rem] border px-3 py-3 text-left transition-all duration-300 ${
								isActive
									? "border-white/20 bg-white/10 text-white"
									: "border-transparent text-white/58 hover:border-white/10 hover:bg-white/[0.04] hover:text-white/82"
							}`}
						>
							<span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-white/35">
								{String(index + 1).padStart(2, "0")}
							</span>
							<span className="text-sm font-medium">{item.title}</span>
						</a>
					);
				})}
			</div>
		</nav>
	);
}
