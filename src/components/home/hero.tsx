'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'empowering-girls');

  return (
    <section className="relative w-full bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
              Empowering Girls Through Sport
            </h1>
            <p className="max-w-md mx-auto md:mx-0 text-lg text-gray-300 font-body">
              We are committed to providing a safe and empowering space for girls to train, compete, and break barriers. Your support helps us create equal opportunities for all.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/gallery">
                See Our Gallery <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
          <div className="w-full">
            {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    data-ai-hint={heroImage.imageHint}
                    width={1280}
                    height={720}
                    className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
