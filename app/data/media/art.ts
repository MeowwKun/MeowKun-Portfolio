import { createMediaItem, type MediaItem } from "../../lib/media";

const filenames = [
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
	"SotFP 2.png",
];

export const artItems: MediaItem[] = filenames.map((filename) =>
	createMediaItem(filename, "art", { unoptimized: true })
);

export const artAspectClasses = ["aspect-[4/5]", "aspect-[1/1]", "aspect-[5/4]"] as const;

export function getArtAspectClass(filename: string): (typeof artAspectClasses)[number] {
	return artAspectClasses[Math.abs(filename.length) % artAspectClasses.length];
}
