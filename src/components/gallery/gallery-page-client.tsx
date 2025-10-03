
'use client';

import { useEffect, useState } from 'react';
import { listAll, getDownloadURL, ref } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import GalleryGrid from '@/components/gallery/gallery-grid';
import { Skeleton } from '@/components/ui/skeleton';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

export default function GalleryPageClient() {
  const [images, setImages] = useState<ImagePlaceholder[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const storageRef = ref(storage, 'gallery');
      const result = await listAll(storageRef);
      const urls = await Promise.all(
        result.items.map(async (imageRef) => {
          const url = await getDownloadURL(imageRef);
          return {
            id: imageRef.name,
            imageUrl: url,
            description: 'A photo from the JSB Boxing Academy gallery.',
            imageHint: 'boxing academy'
          };
        })
      );
      setImages(urls);
    } catch (e) {
      console.error("Error fetching images: ", e);
      setError('Failed to load images. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="aspect-square rounded-lg" />
          ))}
        </div>
      )}

      {!isLoading && error && (
        <p className="text-center text-destructive">{error}</p>
      )}

      {!isLoading && !error && (
        <>
          {images.length === 0 ? (
            <p className="text-center text-muted-foreground">The gallery is currently empty.</p>
          ) : (
            <GalleryGrid images={images} />
          )}
        </>
      )}
    </div>
  );
}
