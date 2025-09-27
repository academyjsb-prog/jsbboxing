'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useDonation } from '@/context/donation-context';
import Link from 'next/link';

export default function Hero() {
  const { openDonationDialog } = useDonation();
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-boxing');

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          PUNCH FOR HOPE
        </h1>
        <p className="mt-4 text-base text-gray-200 sm:text-lg">
          JSB Boxing Academy: Forging Champions in the Ring and in Life.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" onClick={openDonationDialog}>
            Donate Now
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/about">Join Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
