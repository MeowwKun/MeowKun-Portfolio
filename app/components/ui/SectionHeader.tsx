type SectionHeaderProps = {
	title: string;
	subtitle: string;
	layout?: "stack" | "split";
	as?: "h1" | "h2";
	className?: string;
};

export default function SectionHeader({
	title,
	subtitle,
	layout = "stack",
	as = "h2",
	className = "",
}: SectionHeaderProps) {
	const TitleTag = as;
	const layoutClass =
		layout === "split"
			? `w-full flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-end ${className}`
			: `w-full flex flex-col gap-6 ${className}`;

	return (
		<section className={layoutClass} data-reveal>
			<TitleTag className="section-title" data-split-text>
				{title}
			</TitleTag>
			<p className="section-eyebrow" data-split-text>
				{subtitle}
			</p>
		</section>
	);
}
