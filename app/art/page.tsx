'use client';

import { useState } from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";

const imageNames = [
	"14.7.24 2.png",
	"15.4.23 2.png",
	"20230629_170213 2.png",
	"20230721_102252 2.png",
	"20250304_212744 2.png",
	"20250306_004712 2.png",
	"20250307_002402 2.png",
	"20250413_143003 2.png",
	"20250802_165838 2.png",
	"20250802_165857 2.png",
	"20250830_212113 2.png",
	"4.2.23 2.png",
	"Escape 2.png",
	"IMG_20250605_185623_373 2.png",
	"Snapchat-1405832003 2.png",
	"Snapchat-18240968 2.png",
	"SotFP 2.png"
];

const watermark = "MEOW KUN";

export default function ArtPage() {
	const [activeImage, setActiveImage] = useState<string | null>(null);
	const aspectClasses = ["aspect-[4/5]", "aspect-[1/1]", "aspect-[5/4]"];

	return (
		<main className="w-full min-h-screen px-15 pb-20 pt-10">
			<NavBar />
			<section className="w-full flex flex-col gap-6 mt-10" data-reveal>
				<h1 className="text-6xl font-black tracking-[0.45rem]" data-split-text>
					ART
				</h1>
				<p className="text-sm tracking-[0.35rem] uppercase text-white/70" data-split-text>
					Acrylic, digital, and the horizon between
				</p>
			</section>

			<section className="w-full mt-12">
				<div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]" data-stagger>
					{imageNames.map((name, index) => {
							const src = `/art/${encodeURIComponent(name)}`;
							const aspectClass = aspectClasses[Math.abs(name.length) % aspectClasses.length];
							return (
								<button
									key={name}
									type="button"
									className="group relative mb-4 w-full break-inside-avoid overflow-hidden rounded-[1.1rem] border border-white/10 bg-[#0B0E16] shadow-[0_14px_36px_rgba(0,0,0,0.35)]"
									onClick={() => setActiveImage(src)}
									data-stagger-item
								>
									<div className={`relative w-full ${aspectClass}`}>
										<Image
											src={src}
											alt={name}
											fill
											sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
											className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
											priority={index < 3}
											unoptimized
										/>
										<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
											<span className="text-xs tracking-[0.45rem] text-white/20">{watermark}</span>
										</div>
									</div>
								</button>
							);
						})}
				</div>
			</section>

			{activeImage && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-10"
					onClick={() => setActiveImage(null)}
				>
					<div
						className="relative h-full w-full max-w-6xl"
						onClick={(event) => event.stopPropagation()}
					>
						<button
							type="button"
							onClick={() => setActiveImage(null)}
							className="absolute right-4 top-4 z-10 text-sm uppercase tracking-[0.35rem] text-white/70 hover:text-white"
						>
							Close
						</button>
						<div className="relative h-full w-full overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#0B0E16]">
							<Image
								src={activeImage}
								alt="Selected artwork"
								fill
								sizes="100vw"
								className="object-contain"
									unoptimized
							/>
							<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
								<span className="text-2xl tracking-[0.6rem] text-white/15">{watermark}</span>
							</div>
						</div>
					</div>
				</div>
			)}
		</main>
	);
}
