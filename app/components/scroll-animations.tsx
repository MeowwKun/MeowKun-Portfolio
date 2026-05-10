"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { registerGsapPlugins } from "../lib/gsap";

export default function ScrollAnimations() {
	useEffect(() => {
		registerGsapPlugins();

		const ctx = gsap.context(() => {
			const revealElements = gsap.utils.toArray<HTMLElement>("[data-reveal]");
			revealElements.forEach((element) => {
				gsap.fromTo(
					element,
					{ autoAlpha: 0, y: 20 },
					{
						autoAlpha: 1,
						y: 0,
						duration: 0.9,
						ease: "power3.out",
						scrollTrigger: {
							trigger: element,
							start: "top 85%",
							toggleActions: "play none none none"
						}
					}
				);
			});

			const staggerContainers = gsap.utils.toArray<HTMLElement>("[data-stagger]");
			staggerContainers.forEach((container) => {
				const explicitItems = Array.from(
					container.querySelectorAll<HTMLElement>("[data-stagger-item]")
				);
				const autoItems = Array.from(
					container.querySelectorAll<HTMLElement>("h1, h2, h3, p, a, li")
				);
				const items = explicitItems.length ? explicitItems : autoItems;
				const isFast = container.dataset.staggerSpeed === "fast";
				const duration = isFast ? 0.6 : 0.9;
				const stagger = isFast ? 0.04 : 0.08;
				if (!items.length) {
					return;
				}

				gsap.fromTo(
					items,
					{ autoAlpha: 0, y: 20 },
					{
						autoAlpha: 1,
						y: 0,
						duration,
						ease: "power3.out",
						stagger,
						scrollTrigger: {
							trigger: container,
							start: "top 85%",
							toggleActions: "play none none none"
						}
					}
				);
			});

			const waveContainers = gsap.utils.toArray<HTMLElement>("[data-wave]");
			waveContainers.forEach((container) => {
				const letters = Array.from(
					container.querySelectorAll<HTMLElement>("[data-wave-letter]")
				);
				if (!letters.length) {
					return;
				}
				const centerIndex = (letters.length - 1) / 2;
				const offsets = letters.map((_, index) => {
					const base = Math.cos(index / 1.6) * 18;
					return index === 0 ? base - 6 : base;
				});
				const rotations = letters.map((_, index) => (index - centerIndex) * 2.4);

				gsap.fromTo(
					letters,
					{ autoAlpha: 0, y: -40, rotation: 0 },
					{
						autoAlpha: 1,
						y: (index) => offsets[index] ?? 0,
						rotation: (index) => rotations[index] ?? 0,
						duration: 0.8,
						ease: "power3.out",
						stagger: 0.05,
						scrollTrigger: {
							trigger: container,
							start: "top 85%",
							toggleActions: "play none none none"
						}
					}
				);
			});

			const parallaxElements = gsap.utils.toArray<HTMLElement>("[data-parallax]");
			parallaxElements.forEach((element) => {
				gsap.to(element, {
					y: "20%",
					ease: "none",
					scrollTrigger: {
						trigger: element,
						start: "top bottom",
						end: "bottom top",
						scrub: true
					}
				});
			});

			const marqueeTracks = gsap.utils.toArray<HTMLElement>("[data-marquee-track]");
			marqueeTracks.forEach((track) => {
				gsap.to(track, {
					x: "-50%",
					duration: 20,
					ease: "none",
					repeat: -1
				});
			});

			const pinSections = gsap.utils.toArray<HTMLElement>("[data-pin]");
			pinSections.forEach((section) => {
				const items = Array.from(
					section.querySelectorAll<HTMLElement>("[data-pin-item]")
				);
				if (!items.length) {
					return;
				}

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: section,
						start: "top top",
						end: `+=${Math.max(1, items.length) * 240}`,
						scrub: 1,
						pin: true
					}
				});

				items.forEach((item, index) => {
					tl.fromTo(
						item,
						{ autoAlpha: 0, y: 20 },
						{ autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" },
						index === 0 ? 0 : ">-0.2"
					);
				});
			});
		});

		return () => ctx.revert();
	}, []);

	return null;
}
