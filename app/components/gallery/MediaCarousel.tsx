"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { MediaItem } from "../../lib/media";
import { getMediaSrc } from "../../lib/media";
import WatermarkOverlay from "../ui/WatermarkOverlay";

type MediaCarouselProps = {
	items: MediaItem[];
	initialIndex: number;
	onClose: () => void;
};

export default function MediaCarousel({ items, initialIndex, onClose }: MediaCarouselProps) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ startIndex: initialIndex, loop: true });
	const [activeIndex, setActiveIndex] = useState(initialIndex);

	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
		emblaApi.on("select", onSelect);
		onSelect();
		return () => {
			emblaApi.off("select", onSelect);
		};
	}, [emblaApi]);

	useEffect(() => {
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = prev;
		};
	}, []);

	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowLeft") scrollPrev();
			if (e.key === "ArrowRight") scrollNext();
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [onClose, scrollPrev, scrollNext]);

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-10"
			onClick={onClose}
			role="dialog"
			aria-modal="true"
			aria-label="Media viewer"
		>
			<div
				className="relative flex h-full w-full max-w-6xl flex-col"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="absolute right-0 top-0 z-20 flex items-center gap-4">
					<span className="text-xs uppercase tracking-[0.35rem] text-white/50">
						{activeIndex + 1} / {items.length}
					</span>
					<button
						type="button"
						onClick={onClose}
						className="min-h-11 min-w-11 p-3 text-sm uppercase tracking-[0.35rem] text-white/70 hover:text-white"
						aria-label="Close"
					>
						Close
					</button>
				</div>

				<button
					type="button"
					onClick={scrollPrev}
					className="absolute left-0 top-1/2 z-20 hidden min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 p-2 text-white/70 hover:text-white md:flex"
					aria-label="Previous"
				>
					<ChevronLeft size={24} />
				</button>
				<button
					type="button"
					onClick={scrollNext}
					className="absolute right-0 top-1/2 z-20 hidden min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 p-2 text-white/70 hover:text-white md:flex"
					aria-label="Next"
				>
					<ChevronRight size={24} />
				</button>

				<div className="relative mx-auto h-full w-full max-h-[85dvh] overflow-hidden rounded-[1.8rem] border border-white/10 bg-surface">
					<div ref={emblaRef} className="h-full overflow-hidden">
						<div className="flex h-full">
							{items.map((item) => {
								const src = getMediaSrc(item);
								return (
									<div
										key={item.id}
										className="relative min-w-0 flex-[0_0_100%] h-full min-h-[50dvh] sm:min-h-[60dvh]"
									>
										{item.kind === "video" ? (
											<video
												src={src}
												controls
												autoPlay
												playsInline
												className="h-full w-full object-contain"
											/>
										) : (
											<TransformWrapper
												initialScale={1}
												minScale={1}
												maxScale={4}
												centerOnInit
												doubleClick={{ mode: "toggle" }}
												pinch={{ step: 5 }}
											>
												<TransformComponent
													wrapperClass="!h-full !w-full"
													contentClass="!h-full !w-full flex items-center justify-center"
												>
													<div className="relative h-full w-full min-h-[40dvh]">
														<Image
															src={src}
															alt={item.alt ?? item.filename}
															fill
															sizes="100vw"
															className="object-contain"
															unoptimized={item.unoptimized}
														/>
													</div>
												</TransformComponent>
											</TransformWrapper>
										)}
									</div>
								);
							})}
						</div>
					</div>
					<WatermarkOverlay size="viewer" />
				</div>
			</div>
		</div>
	);
}
