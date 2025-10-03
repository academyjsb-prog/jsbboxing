
'use client';

import { useEffect, useState } from 'react';
import { listAll, ref, getDownloadURL } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import GalleryGrid from '@/components/gallery/gallery-grid';
import ImageUploader from '@/components/gallery/image-uploader';
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
      const galleryRef = ref(storage, 'gallery');
      const res = await listAll(galleryRef);
      const urls = await Promise.all(
        res.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return {
            id: itemRef.name,
            imageUrl: url,
            description: 'A photo from the gallery.',
            imageHint: 'boxing',
          };
        })
      );
      setImages(urls);
    } catch (err) {
      console.error('Error fetching images:', err);
      setError('Failed to load images from the gallery. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <div className="mb-8">
        <ImageUploader onUploadSuccess={fetchImages} />
      </div>
      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="aspect-square rounded-lg" />
          ))}
        </div>
      )}
      {error && <p className="text-center text-destructive">{error}</p>}
      {!isLoading && !error && <GalleryGrid images={images} />}
    </div>
  );
}
