
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button, buttonVariants } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { cn } from '@/lib/utils';

export default function GalleryPreview() {
  const previewImages = PlaceHolderImages.filter((img) => img.id.startsWith('gallery-')).slice(0, 4);
  const [selectedImage, setSelectedImage] = useState<ImagePlaceholder | null>(null);

  return (
    <>
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
              A Glimpse of the Action
            </h2>
            <p className="mt-4 mx-auto text-base text-muted-foreground">
              The sweat, dedication, and spirit of our academy, captured in moments.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {previewImages.map((image) => (
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
                  </div>
                </DialogTrigger>
                {selectedImage && selectedImage.id === image.id && (
                  <DialogContent className="max-w-7xl w-full h-full bg-transparent border-0 p-0 flex justify-center items-center">
                    <DialogHeader className="sr-only">
                      <DialogTitle>
                        <VisuallyHidden>{selectedImage.description}</VisuallyHidden>
                      </DialogTitle>
                      <DialogDescription>
                        <VisuallyHidden>
                          A larger view of the gallery image: {selectedImage.description}
                        </VisuallyHidden>
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
                    <DialogClose
                      className={cn(
                        buttonVariants({ variant: 'ghost', size: 'icon' }),
                        'absolute top-4 right-4 h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/75 hover:text-white'
                      )}
                    >
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close</span>
                    </DialogClose>
                  </DialogContent>
                )}
              </Dialog>
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/gallery">
                View Full Gallery <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
