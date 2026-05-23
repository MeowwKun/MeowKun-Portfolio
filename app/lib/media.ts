export type MediaCategory = "photography" | "art" | "video";

export type MediaItem = {
	id: string;
	filename: string;
	kind: "image" | "video";
	category: MediaCategory;
	alt?: string;
	unoptimized?: boolean;
};

export const WATERMARK = "MEOW KUN";

const categoryPaths: Record<MediaCategory, string> = {
	photography: "/photography",
	art: "/art",
	video: "/vid",
};

export function getMediaSrc(item: MediaItem): string {
	const base = categoryPaths[item.category];
	return `${base}/${encodeURIComponent(item.filename)}`;
}

export function createMediaItem(
	filename: string,
	category: MediaCategory,
	options?: Partial<Omit<MediaItem, "id" | "filename" | "category" | "kind">> & {
		kind?: MediaItem["kind"];
	}
): MediaItem {
	const kind = options?.kind ?? (category === "video" ? "video" : "image");
	return {
		id: filename,
		filename,
		category,
		kind,
		alt: options?.alt ?? filename,
		unoptimized: options?.unoptimized,
	};
}
