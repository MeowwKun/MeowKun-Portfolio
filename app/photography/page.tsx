import GalleryLayout from "../components/gallery/GalleryLayout";
import PhotoGrid from "../components/gallery/PhotoGrid";
import { photographyItems } from "../data/media/photography";

export default function PhotographyPage() {
	return (
		<GalleryLayout title="PHOTOGRAPHY" subtitle="Quiet frames and patient light">
			<PhotoGrid items={photographyItems} />
		</GalleryLayout>
	);
}
