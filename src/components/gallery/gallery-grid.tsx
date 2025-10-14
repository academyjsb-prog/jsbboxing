
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

interface GalleryGridProps {
  images: ImagePlaceholder[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<ImagePlaceholder | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <Dialog key={image.id} onOpenChange={(isOpen) => { if (!isOpen) setSelectedImage(null) }}>
            <DialogTrigger asChild onClick={() => setSelectedImage(image)}>
              <div className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer shadow-md">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  fill
                  loading="lazy"
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
              <DialogContent className="max-w-7xl w-full h-full bg-transparent border-0 p-0 flex justify-center items-center">
                 <DialogHeader className="sr-only">
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
                  width={1920}
                  height={1080}
                  className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg"
                  loading="lazy"
                />
                <DialogClose className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "absolute top-4 right-4 h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/75 hover:text-white"
                )}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close</span>
                </DialogClose>
              </DialogContent>
            )}
          </Dialog>
        ))}
      </div>
    </>
  );
}
