'use client';

import Image from 'next/image';
import Link from 'next/link';
import { galleryImages } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function GalleryPreview() {
  const previewImages = galleryImages.slice(0, 4);

  return (
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
            <div key={image.id} className="group relative aspect-square overflow-hidden rounded-lg shadow-md">
              <Image
                src={image.imageUrl}
                alt={image.description}
                data-ai-hint={image.imageHint}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            </div>
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
  );
}
