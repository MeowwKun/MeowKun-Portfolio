import { WATERMARK } from "../../lib/media";

type WatermarkOverlayProps = {
	size?: "tile" | "viewer";
};

const sizeClasses = {
	tile: "text-xs tracking-[0.45rem] text-white/20",
	viewer: "text-2xl tracking-[0.6rem] text-white/15",
};

export default function WatermarkOverlay({ size = "tile" }: WatermarkOverlayProps) {
	return (
		<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
			<span className={sizeClasses[size]}>{WATERMARK}</span>
		</div>
	);
}
