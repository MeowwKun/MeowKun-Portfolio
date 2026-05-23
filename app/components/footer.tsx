"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import gsap from "gsap";
import { useGsapScrollTrigger } from "../hooks/use-gsap-scroll-trigger";

type FooterLink = {
	label: string;
	href: string;
	external?: boolean;
	gridClass: string;
};

const footerLinks: FooterLink[] = [
	{ label: "Video", href: "/video", gridClass: "lg:[grid-column:1/span_7] lg:[grid-row:1/span_1]" },
	{ label: "Photography", href: "/photography", gridClass: "lg:[grid-column:8/span_5] lg:[grid-row:1/span_1]" },
	{ label: "GitHub", href: "https://github.com/MeowwKun", gridClass: "lg:[grid-column:1/span_4] lg:[grid-row:2/span_1]", external: true },
	{ label: "Art", href: "/art", gridClass: "lg:[grid-column:5/span_4] lg:[grid-row:2/span_2]" },
	{ label: "LinkedIn", href: "https://www.linkedin.com/in/sujal-nepal-meowkun/", gridClass: "lg:[grid-column:9/span_4] lg:[grid-row:2/span_2]", external: true },
	{ label: "Instagram", href: "https://www.instagram.com/meow0_0kun/", gridClass: "lg:[grid-column:1/span_4] lg:[grid-row:3/span_1]", external: true },
];

const tileClassName =
	"rounded-[1.4rem] p-6 pb-[1.1rem] bg-white/70 hover:bg-white/90 transition-colors text-black/86 no-underline flex items-end min-h-[120px] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_28px_rgba(0,0,0,0.2)]";

export default function Footer() {
	const footerRef = useRef<HTMLDivElement | null>(null);

	useGsapScrollTrigger(footerRef, (element) =>
		gsap.from(element, {
			yPercent: 30,
			opacity: 0,
			scrollTrigger: {
				trigger: element,
				start: "top 85%",
				end: "bottom bottom",
				scrub: 1,
			},
		})
	);

	return (
		<footer className="w-full p-0 mt-auto self-stretch">
			<div
				ref={footerRef}
				className="relative w-full rounded-[2rem] bg-gradient-to-b from-background to-accent p-4 sm:p-8 overflow-hidden min-h-[100vh]"
			>
				<div className="pointer-events-none absolute inset-0 flex items-center justify-center z-[1]">
					<div
						className="text-center text-black/60 font-black tracking-[0.55em] text-[clamp(2rem,5vw,3.8rem)] leading-[1.2] select-none uppercase"
						data-parallax="22"
					>
						MEOW
						<br />
						KUN
					</div>
				</div>

				<div
					className="relative z-[2] overflow-hidden mb-6 text-white/65 text-[0.85rem] tracking-[0.4em] uppercase whitespace-nowrap"
					data-marquee
				>
					<div className="inline-flex gap-12 pl-6" data-marquee-track>
						<span>MeowKun • Creative Engineer • Visual Systems</span>
						<span aria-hidden="true">MeowKun • Creative Engineer • Visual Systems</span>
						<span aria-hidden="true">MeowKun • Creative Engineer • Visual Systems</span>
					</div>
				</div>

				<div
					className="relative z-[2] grid grid-cols-2 gap-3 auto-rows-min lg:grid-cols-12 lg:gap-3 lg:[grid-template-rows:300px_190px_190px]"
					data-stagger
				>
					{footerLinks.map((link) => {
						const label = (
							<span className="text-[0.7rem] font-black tracking-[0.32em] uppercase text-black">
								{link.label}
							</span>
						);
						const className = `${tileClassName} lg:min-h-0 ${link.gridClass}`;

						if (link.external) {
							return (
								<a
									key={link.label}
									href={link.href}
									className={className}
									data-stagger-item
									target="_blank"
									rel="noreferrer"
								>
									{label}
								</a>
							);
						}

						return (
							<Link key={link.label} href={link.href} className={className} data-stagger-item>
								{label}
							</Link>
						);
					})}
				</div>

				<div className="relative z-[2] mt-8 grid grid-cols-1 sm:grid-cols-[120px_1fr_auto] items-start gap-6 text-white/85 text-[0.85rem] tracking-[0.18em] uppercase">
					<div className="mt-3 ml-2">
						<Image src={logo} alt="MeowKun" width={96} height={96} />
					</div>
					<div className="flex flex-col gap-2.5 sm:ml-10">
						<a href="mailto:sujal75.n@gmail.com" className="text-inherit no-underline">
							sujal75.n@gmail.com
						</a>
						<a href="tel:+97517313524" className="text-inherit no-underline">
							+975-17313524
						</a>
						<span>Thimphu, Bhutan</span>
					</div>
					<span className="sm:justify-self-end">© MeowKun</span>
				</div>
			</div>
		</footer>
	);
}
