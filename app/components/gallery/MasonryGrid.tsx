"use client";

import { useState } from "react";
import Image from "next/image";
import { getArtAspectClass } from "../../data/media/art";
import type { MediaItem } from "../../lib/media";
import { getMediaSrc } from "../../lib/media";
import WatermarkOverlay from "../ui/WatermarkOverlay";
import MediaCarousel from "./MediaCarousel";

type MasonryGridProps = {
	items: MediaItem[];
};

export default function MasonryGrid({ items }: MasonryGridProps) {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	return (
		<>
			<div
				className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]"
				data-stagger
			>
				{items.map((item, index) => {
					const src = getMediaSrc(item);
					const aspectClass = getArtAspectClass(item.filename);
					return (
						<button
							key={item.id}
							type="button"
							className="group relative mb-4 w-full break-inside-avoid overflow-hidden rounded-[1.1rem] border border-white/10 bg-surface shadow-[0_14px_36px_rgba(0,0,0,0.35)]"
							onClick={() => setActiveIndex(index)}
							data-stagger-item
						>
							<div className={`relative w-full ${aspectClass}`}>
								<Image
									src={src}
									alt={item.alt ?? item.filename}
									fill
									sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
									className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
									priority={index < 3}
									unoptimized={item.unoptimized}
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
