import { createMediaItem, type MediaItem } from "../../lib/media";

const filenames = [
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
	"mmm.mp4",
];

export const videoItems: MediaItem[] = filenames.map((filename) =>
	createMediaItem(filename, "video", { kind: "video" })
);
