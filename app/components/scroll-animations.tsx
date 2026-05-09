"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollAnimations() {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const ctx = gsap.context(() => {
			ScrollTrigger.defaults({
				scrub: false,
				fastScrollEnd: true
			});

			const revealElements = gsap.utils.toArray<HTMLElement>("[data-reveal]");
			revealElements.forEach((element) => {
				gsap.fromTo(
					element,
					{ autoAlpha: 0, y: 42, scale: 0.98, filter: "blur(6px)" },
					{
						autoAlpha: 1,
						y: 0,
						scale: 1,
						filter: "blur(0px)",
						duration: 0.8,
						ease: "power3.out",
						scrollTrigger: {
							trigger: element,
							start: "top 80%",
							toggleActions: "play reset play reset"
						}
					}
				);
			});

			const staggerContainers = gsap.utils.toArray<HTMLElement>("[data-stagger]");
			staggerContainers.forEach((container) => {
				const items = Array.from(
					container.querySelectorAll<HTMLElement>("[data-stagger-item]")
				);

				gsap.fromTo(
					items,
					{ autoAlpha: 0, y: 32, scale: 0.98, filter: "blur(6px)" },
					{
						autoAlpha: 1,
						y: 0,
						scale: 1,
						filter: "blur(0px)",
						duration: 0.7,
						ease: "power3.out",
						stagger: 0.08,
						scrollTrigger: {
							trigger: container,
							start: "top 80%",
							toggleActions: "play reset play reset"
						}
					}
				);
			});

			const wordContainers = gsap.utils.toArray<HTMLElement>("[data-words]");
			wordContainers.forEach((container) => {
				const words = Array.from(
					container.querySelectorAll<HTMLElement>("[data-word]")
				);
				const directions = words.map(() => (Math.random() > 0.5 ? 1 : -1));

				gsap.fromTo(
					words,
					{
						autoAlpha: 0,
						x: (index) => directions[index] * gsap.utils.random(24, 60),
						y: gsap.utils.random(6, 18),
						filter: "blur(5px)"
					},
					{
						autoAlpha: 1,
						x: 0,
						y: 0,
						filter: "blur(0px)",
						duration: 0.7,
						ease: "power3.out",
						stagger: 0.018,
						scrollTrigger: {
							trigger: container,
							start: "top 80%",
							toggleActions: "play reset play reset"
						}
					}
				);
			});

			const waveContainers = gsap.utils.toArray<HTMLElement>("[data-wave]");
			waveContainers.forEach((container) => {
				const letters = Array.from(
					container.querySelectorAll<HTMLElement>("[data-wave-letter]")
				);
				const offsets = letters.map((_, index) => {
					return Math.sin(index / 1.6) * 6;
				});

				gsap.fromTo(
					letters,
					{ autoAlpha: 0, y: 26, filter: "blur(6px)" },
					{
						autoAlpha: 1,
						y: (index) => offsets[index] ?? 0,
						filter: "blur(0px)",
						duration: 0.9,
						ease: "power3.out",
						stagger: 0.05,
						scrollTrigger: {
							trigger: container,
							start: "top 85%",
							toggleActions: "play reset play reset"
						}
					}
				);
			});

			const parallaxElements = gsap.utils.toArray<HTMLElement>("[data-parallax]");
			parallaxElements.forEach((element) => {
				const amount = Number(element.dataset.parallax ?? "16");
				gsap.to(element, {
					y: amount,
					ease: "none",
					scrollTrigger: {
						trigger: element,
						start: "top bottom",
						end: "bottom top",
						scrub: true
					}
				});
			});
		});

		return () => ctx.revert();
	}, []);

	return null;
}
