'use client';

import { useState } from "react";
import NavBar from "../components/NavBar";

const videos = [
	"2024-07-25-190207812.mp4",
	"FInal.mp4",
	"Hackathon111.mp4",
	"IMG_0859.mov",
	"Lungchutse.mp4",
	"The Final Stretch.MP4",
	"lv_0_20230831161128.mp4",
	"lv_0_20240806012034.mp4",
	"lv_0_20240827190026.mp4",
	"lv_0_20250202101231.mp4",
	"mmm.mp4"
];

const watermark = "MEOW KUN";

export default function VideoPage() {
	const [activeVideo, setActiveVideo] = useState<string | null>(null);

	return (
		<main className="w-full min-h-screen px-15 pb-20 pt-10">
			<NavBar />
			<section className="w-full flex flex-col gap-6 mt-10" data-reveal>
				<h1 className="text-6xl font-black tracking-[0.45rem]" data-split-text>
					VIDEO
				</h1>
				<p className="text-sm tracking-[0.35rem] uppercase text-white/70" data-split-text>
					Moving images and quiet motion
				</p>
			</section>

			<section className="w-full mt-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-stagger>
					{videos.map((name) => {
							const src = `/vid/${encodeURIComponent(name)}`;
							return (
								<button
									key={name}
									type="button"
									className="group relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-[#0B0E16] shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
									data-stagger-item
									onClick={() => setActiveVideo(src)}
								>
									<div className="relative aspect-video w-full">
										<video
											src={src}
											muted
											playsInline
											preload="metadata"
											className="h-full w-full object-cover"
										/>
										<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
											<span className="text-xs tracking-[0.45rem] text-white/15">{watermark}</span>
										</div>
										<div className="absolute bottom-4 right-4 rounded-full border border-white/30 px-3 py-1 text-[0.55rem] uppercase tracking-[0.3rem] text-white/70">
											Play
										</div>
									</div>
								</button>
							);
						})}
				</div>
			</section>

			{activeVideo && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-10"
					onClick={() => setActiveVideo(null)}
				>
					<div
						className="relative h-full w-full max-w-6xl"
						onClick={(event) => event.stopPropagation()}
					>
						<button
							type="button"
							onClick={() => setActiveVideo(null)}
							className="absolute right-4 top-4 z-10 text-sm uppercase tracking-[0.35rem] text-white/70 hover:text-white"
						>
							Close
						</button>
						<div className="relative h-full w-full overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#0B0E16]">
							<video
								src={activeVideo}
								controls
								autoPlay
								className="h-full w-full object-contain"
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
