"use client";

import { useEffect } from "react";
import type { MediaItem } from "../../lib/media";
import { getMediaSrc } from "../../lib/media";
import WatermarkOverlay from "../ui/WatermarkOverlay";

type VideoViewerProps = {
	item: MediaItem;
	onClose: () => void;
};

export default function VideoViewer({ item, onClose }: VideoViewerProps) {
	const src = getMediaSrc(item);

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
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [onClose]);

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-10"
			onClick={onClose}
			role="dialog"
			aria-modal="true"
			aria-label="Video viewer"
		>
			<button
				type="button"
				onClick={onClose}
				className="absolute right-4 top-4 z-30 min-h-11 min-w-11 p-3 text-sm uppercase tracking-[0.35rem] text-white/70 hover:text-white sm:right-10 sm:top-10"
				aria-label="Close"
			>
				Close
			</button>

			<div
				className="relative mx-auto h-full w-full max-h-[85dvh] max-w-6xl"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="relative h-full overflow-hidden rounded-[1.8rem] border border-white/10 bg-surface">
					<video
						key={src}
						src={src}
						controls
						playsInline
						autoPlay
						className="h-full min-h-[50dvh] w-full object-contain sm:min-h-[60dvh]"
					/>
					<WatermarkOverlay size="viewer" />
				</div>
			</div>
		</div>
	);
}
