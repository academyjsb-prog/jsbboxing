'use client';

import { useState } from 'react';
import Image from 'next/image';
import { galleryImages } from '@/lib/data';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<ImagePlaceholder | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image) => (
          <Dialog key={image.id} onOpenChange={(isOpen) => { if (!isOpen) setSelectedImage(null) }}>
            <DialogTrigger asChild onClick={() => setSelectedImage(image)}>
              <div className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer shadow-md">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-end p-4">
                  <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {image.description}
                  </p>
                </div>
              </div>
            </DialogTrigger>
            {selectedImage && selectedImage.id === image.id && (
              <DialogContent className="max-w-4xl p-0 border-0">
                 <DialogHeader>
                    <DialogTitle>
                        <VisuallyHidden>{selectedImage.description}</VisuallyHidden>
                    </DialogTitle>
                    <DialogDescription>
                         <VisuallyHidden>A larger view of the gallery image: {selectedImage.description}</VisuallyHidden>
                    </DialogDescription>
                </DialogHeader>
                <Image
                  src={selectedImage.imageUrl}
                  alt={selectedImage.description}
                  data-ai-hint={selectedImage.imageHint}
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg object-contain"
                />
              </DialogContent>
            )}
          </Dialog>
        ))}
      </div>
    </>
  );
}
