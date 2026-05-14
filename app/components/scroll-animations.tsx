"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { registerGsapPlugins } from "../lib/gsap";

export default function ScrollAnimations() {
	useEffect(() => {
		registerGsapPlugins();
		const prefersReducedMotion =
			typeof window !== "undefined" &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (prefersReducedMotion) {
			return;
		}

		const splits: SplitText[] = [];
		const splitMasks: HTMLElement[] = [];

		const ctx = gsap.context(() => {
			const splitElements = gsap.utils.toArray<HTMLElement>("[data-split-text]");
			splitElements.forEach((element) => {
				if (element.dataset.splitReady === "true") {
					return;
				}
				element.dataset.splitReady = "true";

				const split = new SplitText(element, {
					type: "lines",
					linesClass: "split-line"
				});
				splits.push(split);

				split.lines.forEach((line) => {
					const mask = document.createElement("div");
					mask.style.overflow = "hidden";
					mask.style.display = "block";
					mask.className = "split-line-mask";
					splitMasks.push(mask);
					line.parentNode?.insertBefore(mask, line);
					mask.appendChild(line);
					(line as HTMLElement).style.display = "block";
				});

				gsap.set(split.lines, { y: "100%" });
				gsap.to(split.lines, {
					y: "0%",
					stagger: 0.05,
					ease: "power3.out",
					scrollTrigger: {
						trigger: element,
						start: "top 85%",
						end: "top 40%",
						scrub: 0.8,
						once: true
					}
				});
			});

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
							toggleActions: "play none none none",
							once: true
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
				).filter(
					(item) =>
						!item.hasAttribute("data-split-text") &&
						!item.hasAttribute("data-myself-text")
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
							toggleActions: "play none none none",
							once: true
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
							toggleActions: "play none none none",
							once: true
						}
					}
				);
			});

			const parallaxElements = gsap.utils.toArray<HTMLElement>("[data-parallax]");
			parallaxElements.forEach((element) => {
				const amount = element.dataset.parallax
					? `${element.dataset.parallax}%`
					: "20%";
				gsap.to(element, {
					y: amount,
					ease: "none",
					scrollTrigger: {
						trigger: element,
						start: "top bottom",
						end: "bottom top",
						scrub: true,
						once: true
					}
				});
			});

			const myselfTextBlocks = gsap.utils.toArray<HTMLElement>("[data-myself-text]");
			myselfTextBlocks.forEach((container) => {
				const words = Array.from(
					container.querySelectorAll<HTMLElement>("[data-myself-word]")
				);
				if (!words.length) {
					return;
				}

				gsap.fromTo(
					words,
					{
						autoAlpha: 0,
						x: (index) => (index % 2 === 0 ? -30 : 30)
					},
					{
						autoAlpha: 1,
						x: 0,
						ease: "power3.out",
						stagger: 0.04,
						scrollTrigger: {
							trigger: container,
							start: "top 85%",
							end: "top 10%",
							scrub: 1.2,
							once: true
						}
					}
				);
			});

			const scrollImageContainers = gsap.utils.toArray<HTMLElement>("[data-scroll-image]");
			scrollImageContainers.forEach((container) => {
				if (container.hasAttribute("data-overlap-image")) {
					return;
				}
				const image = container.querySelector<HTMLElement>("[data-scroll-image-inner]");

				gsap.fromTo(
					container,
					{ scale: 0.82, borderRadius: "2rem" },
					{
						scale: 1,
						borderRadius: "0.5rem",
						ease: "none",
						scrollTrigger: {
							trigger: container,
							start: "top 90%",
							end: "top 20%",
							scrub: 1,
							once: true
						}
					}
				);

				if (image) {
					gsap.fromTo(
						image,
						{ scale: 1.15 },
						{
							scale: 1,
							ease: "none",
							scrollTrigger: {
								trigger: container,
								start: "top 90%",
								end: "top 20%",
								scrub: 1,
								once: true
							}
						}
					);
				}
			});

			const overlapHero = document.querySelector<HTMLElement>("[data-overlap-hero]");
			const overlapImage = document.querySelector<HTMLElement>("[data-overlap-image]");
			if (overlapHero && overlapImage) {
				const overlapImageInner = overlapImage.querySelector<HTMLElement>(
					"[data-overlap-image-inner]"
				);
				const overlapFrame = overlapImage.querySelector<HTMLElement>(
					"[data-overlap-frame]"
				);

				gsap.set(overlapImage, {
					scale: 0.88,
					borderRadius: "2rem 2rem 0 0"
				});

				if (overlapImageInner) {
					gsap.set(overlapImageInner, { scale: 1.12 });
				}

				const overlapTimeline = gsap.timeline({
					scrollTrigger: {
						trigger: overlapHero,
						start: "top top",
						end: "bottom top",
						scrub: 1,
						once: true
					}
				});

				overlapTimeline.to(
					overlapHero,
					{
						opacity: 1,
						scale: 0.95,
						ease: "none"
					},
					0
				);

				overlapTimeline.to(
					overlapImage,
					{
						borderRadius: "0.5rem",
						scale: 1,
						ease: "none"
					},
					0
				);

				if (overlapFrame) {
					overlapTimeline.to(
						overlapFrame,
						{
							padding: 0,
							ease: "none"
						},
						0
					);
				}

				if (overlapImageInner) {
					overlapTimeline.to(
						overlapImageInner,
						{
							scale: 1,
							ease: "none"
						},
						0
					);
				}
			}

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
						pin: true,
						once: true
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

		return () => {
			splits.forEach((split) => split.revert());
			splitMasks.forEach((mask) => {
				if (mask.parentNode) {
					mask.parentNode.removeChild(mask);
				}
			});
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			ctx.revert();
		};
	}, []);

	return null;
}
