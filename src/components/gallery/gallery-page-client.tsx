
'use client';

import GalleryGrid from '@/components/gallery/gallery-grid';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

interface GalleryPageClientProps {
  images: ImagePlaceholder[];
}

export default function GalleryPageClient({ images }: GalleryPageClientProps) {

  return (
    <div>
        <>
          {images.length === 0 ? (
            <p className="text-center text-muted-foreground">The gallery is empty.</p>
          ) : (
            <GalleryGrid images={images} />
          )}
        </>
    </div>
  );
}
