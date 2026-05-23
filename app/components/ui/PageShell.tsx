import type { ReactNode } from "react";
import ScrollAnimations from "../scroll-animations";

type PageShellProps = {
	children: ReactNode;
	withScrollAnimations?: boolean;
	className?: string;
};

export default function PageShell({
	children,
	withScrollAnimations = false,
	className = "",
}: PageShellProps) {
	return (
		<main className={`w-full min-h-screen page-x pb-20 pt-10 ${className}`}>
			{withScrollAnimations && <ScrollAnimations />}
			{children}
		</main>
	);
}
