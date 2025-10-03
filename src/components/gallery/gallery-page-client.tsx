
'use client';

import GalleryGrid from '@/components/gallery/gallery-grid';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function GalleryPageClient() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  return (
    <div>
      {galleryImages.length === 0 ? (
        <p className="text-center text-muted-foreground">The gallery is currently empty.</p>
      ) : (
        <GalleryGrid images={galleryImages} />
      )}
    </div>
  );
}
