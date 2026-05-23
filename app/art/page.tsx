import GalleryLayout from "../components/gallery/GalleryLayout";
import MasonryGrid from "../components/gallery/MasonryGrid";
import { artItems } from "../data/media/art";

export default function ArtPage() {
	return (
		<GalleryLayout title="ART" subtitle="Acrylic, digital, and the horizon between">
			<MasonryGrid items={artItems} />
		</GalleryLayout>
	);
}
