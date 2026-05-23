"use client";

import { useState } from "react";
import type { MediaItem } from "../../lib/media";
import { getMediaSrc } from "../../lib/media";
import WatermarkOverlay from "../ui/WatermarkOverlay";
import VideoViewer from "./VideoViewer";

type VideoGridProps = {
	items: MediaItem[];
};

export default function VideoGrid({ items }: VideoGridProps) {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-stagger>
				{items.map((item, index) => {
					const src = getMediaSrc(item);
					return (
						<button
							key={item.id}
							type="button"
							className="group relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-surface shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
							data-stagger-item
							onClick={() => setActiveIndex(index)}
						>
							<div className="relative aspect-video w-full">
								<video
									src={src}
									muted
									playsInline
									preload="metadata"
									className="h-full w-full object-cover"
								/>
								<WatermarkOverlay size="tile" />
								<div className="absolute bottom-4 right-4 rounded-full border border-white/30 px-3 py-1 text-[0.55rem] uppercase tracking-[0.3rem] text-white/70">
									Play
								</div>
							</div>
						</button>
					);
				})}
			</div>
			{activeIndex !== null && (
				<VideoViewer item={items[activeIndex]} onClose={() => setActiveIndex(null)} />
			)}
		</>
	);
}
