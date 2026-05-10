"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerGsapPlugins } from "../lib/gsap";

export default function SmoothScrollProvider({
	children
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		registerGsapPlugins();

		const lenis = new Lenis({
			lerp: 0.08,
			smoothWheel: true
		});

		lenis.on("scroll", ScrollTrigger.update);
		const tick = (time: number) => {
			lenis.raf(time * 1000);
		};
		gsap.ticker.add(tick);
		gsap.ticker.lagSmoothing(0);

		return () => {
			gsap.ticker.remove(tick);
			lenis.destroy();
		};
	}, []);

	return <>{children}</>;
}
