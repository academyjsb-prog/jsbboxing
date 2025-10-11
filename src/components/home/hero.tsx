
'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import { useDonation } from '@/context/donation-context';
import Autoplay from "embla-carousel-autoplay"


export default function Hero() {
  const { openDonationDialog } = useDonation();
  const heroImages = PlaceHolderImages.filter((img) =>
    img.id.startsWith('hero-slider-')
  );

  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-background">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Training Champions, Building Futures
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl font-body text-sm">
            At JSB Boxing Academy, we empower underprivileged youth through the discipline of boxing, providing them with the skills, confidence, and hope they need to succeed in and out of the ring.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" onClick={openDonationDialog}>
              Donate Now
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
            <Carousel 
                className="w-full max-w-md"
                plugins={[
                    Autoplay({
                      delay: 3000,
                      stopOnInteraction: true,
                    }),
                  ]}
            >
            <CarouselContent>
              {heroImages.map((image) => (
                <CarouselItem key={image.id}>
                  <div className="p-1">
                      <div className="relative aspect-square overflow-hidden rounded-lg">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          data-ai-hint={image.imageHint}
                          fill
                          className="object-cover"
                        />
                      </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

    