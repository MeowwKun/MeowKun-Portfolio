"use client";

import { useState } from "react";
import Image from "next/image";
import type { MediaItem } from "../../lib/media";
import { getMediaSrc } from "../../lib/media";
import WatermarkOverlay from "../ui/WatermarkOverlay";
import MediaCarousel from "./MediaCarousel";

type PhotoGridProps = {
	items: MediaItem[];
};

export default function PhotoGrid({ items }: PhotoGridProps) {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	return (
		<>
			<div
				className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 auto-rows-[120px] sm:auto-rows-[140px]"
				data-stagger
			>
				{items.map((item, index) => {
					const src = getMediaSrc(item);
					return (
						<button
							key={item.id}
							type="button"
							className="group relative row-span-2 overflow-hidden rounded-[1rem] border border-white/10 bg-surface shadow-[0_14px_36px_rgba(0,0,0,0.35)]"
							onClick={() => setActiveIndex(index)}
							data-stagger-item
						>
							<div className="relative h-full w-full">
								<Image
									src={src}
									alt={item.alt ?? item.filename}
									fill
									sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
									className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
								/>
								<WatermarkOverlay size="tile" />
							</div>
						</button>
					);
				})}
			</div>
			{activeIndex !== null && (
				<MediaCarousel
					items={items}
					initialIndex={activeIndex}
					onClose={() => setActiveIndex(null)}
				/>
			)}
		</>
	);
}
