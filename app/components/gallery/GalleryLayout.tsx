"use client";

import type { ReactNode } from "react";
import NavBar from "../NavBar";
import PageShell from "../ui/PageShell";
import SectionHeader from "../ui/SectionHeader";

type GalleryLayoutProps = {
	title: string;
	subtitle: string;
	children: ReactNode;
};

export default function GalleryLayout({ title, subtitle, children }: GalleryLayoutProps) {
	return (
		<PageShell withScrollAnimations>
			<NavBar />
			<SectionHeader
				title={title}
				subtitle={subtitle}
				as="h1"
				layout="stack"
				className="mt-10"
			/>
			<section className="w-full mt-12">{children}</section>
		</PageShell>
	);
}
