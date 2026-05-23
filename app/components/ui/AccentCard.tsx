import type { ReactNode } from "react";

type AccentCardProps = {
	children: ReactNode;
	className?: string;
	span?: "half" | "full";
	hover?: boolean;
};

export default function AccentCard({
	children,
	className = "",
	span = "half",
	hover = false,
}: AccentCardProps) {
	const spanClass = span === "full" ? "col-span-12" : "col-span-12 lg:col-span-6";
	const hoverClass = hover
		? "transition-transform duration-300 hover:-translate-y-1 hover:border-white/50"
		: "";

	return (
		<div
			className={`${spanClass} rounded-[1.8rem] border border-white/10 bg-accent p-8 shadow-[0_24px_70px_rgba(0,0,0,0.4)] ${hoverClass} ${className}`}
			data-stagger-item
		>
			{children}
		</div>
	);
}
