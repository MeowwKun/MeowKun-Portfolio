import GalleryLayout from "../components/gallery/GalleryLayout";
import VideoGrid from "../components/gallery/VideoGrid";
import { videoItems } from "../data/media/video";

export default function VideoPage() {
	return (
		<GalleryLayout title="VIDEO" subtitle="Moving images and quiet motion">
			<VideoGrid items={videoItems} />
		</GalleryLayout>
	);
}
