'use client';

import { useState } from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";

const imageNames = [
	"SKY 3.png",
	"photo_10_2026-01-27_12-20-44 2.png",
	"photo_10_2026-01-27_23-38-59 2.png",
	"photo_11_2026-01-27_12-20-44 2.png",
	"photo_11_2026-01-27_23-38-59 2.png",
	"photo_12_2026-01-27_12-20-44 2.png",
	"photo_12_2026-01-27_23-38-59 2.png",
	"photo_13_2026-01-27_12-20-44 2.png",
	"photo_14_2026-01-27_12-20-44 2.png",
	"photo_15_2026-01-27_12-20-44 2.png",
	"photo_16_2026-01-27_12-20-44 2.png",
	"photo_17_2026-01-27_12-20-44 2.png",
	"photo_18_2026-01-27_12-20-44 2.png",
	"photo_19_2026-01-27_12-20-44 2.png",
	"photo_1_2026-01-27_12-20-44 2.png",
	"photo_1_2026-01-27_23-38-59 2.png",
	"photo_20_2026-01-27_12-20-44 2.png",
	"photo_21_2026-01-27_12-20-44 2.png",
	"photo_22_2026-01-27_12-20-44 2.png",
	"photo_24_2026-01-27_12-20-44 2.png",
	"photo_25_2026-01-27_12-20-44 2.png",
	"photo_2_2026-01-27_12-20-44 2.png",
	"photo_2_2026-01-27_23-38-59 2.png",
	"photo_3_2026-01-27_12-20-44 2.png",
	"photo_3_2026-01-27_23-38-59 2.png",
	"photo_4_2026-01-27_12-20-44 2.png",
	"photo_4_2026-01-27_23-38-59 2.png",
	"photo_5_2026-01-27_12-20-44 2.png",
	"photo_5_2026-01-27_23-38-59 2.png",
	"photo_6_2026-01-27_12-20-44 2.png",
	"photo_6_2026-01-27_23-38-59 2.png",
	"photo_7_2026-01-27_12-20-44 2.png",
	"photo_7_2026-01-27_23-38-59 2.png",
	"photo_8_2026-01-27_12-20-44 2.png",
	"photo_8_2026-01-27_23-38-59 2.png",
	"photo_9_2026-01-27_12-20-44 2.png",
	"photo_9_2026-01-27_23-38-59 2.png"
];

const watermark = "MEOW KUN";

export default function PhotographyPage() {
	const [activeImage, setActiveImage] = useState<string | null>(null);
	const aspectClasses = ["aspect-[4/5]", "aspect-[3/4]", "aspect-[5/4]"];

	return (
		<main className="w-full min-h-screen px-15 pb-20 pt-10">
			<NavBar />
			<section className="w-full flex flex-col gap-6 mt-10" data-reveal>
				<h1 className="text-6xl font-black tracking-[0.45rem]" data-split-text>
					PHOTOGRAPHY
				</h1>
				<p className="text-sm tracking-[0.35rem] uppercase text-white/70" data-split-text>
					Quiet frames and patient light
				</p>
			</section>

			<section className="w-full mt-12">
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 auto-rows-[140px]" data-stagger>
					{imageNames.map((name) => {
							const src = `/photography/${encodeURIComponent(name)}`;
							return (
								<button
									key={name}
									type="button"
									className="group relative row-span-2 overflow-hidden rounded-[1rem] border border-white/10 bg-[#0B0E16] shadow-[0_14px_36px_rgba(0,0,0,0.35)]"
									onClick={() => setActiveImage(src)}
									data-stagger-item
								>
									<div className="relative h-full w-full">
										<Image
											src={src}
											alt={name}
											fill
											sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
											className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
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
								alt="Selected photograph"
								fill
								sizes="100vw"
								className="object-contain"
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
