"use client";

import { useEffect } from "react";
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

		// Enable smooth scroll behavior
		document.documentElement.style.scrollBehavior = "smooth";

		// Use native scroll with lightweight ScrollTrigger sync
		window.addEventListener("scroll", ScrollTrigger.update);

		return () => {
			window.removeEventListener("scroll", ScrollTrigger.update);
			document.documentElement.style.scrollBehavior = "auto";
		};
	}, []);

	return <>{children}</>;
}
