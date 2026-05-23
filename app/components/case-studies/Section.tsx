import type { ReactNode } from "react";

type SectionProps = {
	id: string;
	eyebrow: string;
	title: string;
	intro?: string;
	children: ReactNode;
	className?: string;
};

export default function Section({ id, eyebrow, title, intro, children, className = "" }: SectionProps) {
	return (
		<section id={id} className={`scroll-mt-28 ${className}`}>
			<div className="mb-6 flex flex-col gap-3 border-b border-white/10 pb-5">
				<div className="max-w-3xl">
					<p className="text-[0.68rem] uppercase tracking-[0.35em] text-white/45">{eyebrow}</p>
					<h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
						{title}
					</h2>
				</div>
				{intro ? <p className="max-w-2xl text-sm leading-7 text-white/62">{intro}</p> : null}
			</div>
			{children}
		</section>
	);
}
