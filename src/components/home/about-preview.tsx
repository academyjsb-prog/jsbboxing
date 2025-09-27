'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export default function AboutPreview() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'gallery-3');

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">About JSB Boxing Academy</h2>
            <p className="text-muted-foreground">
              JSB Boxing Academy is a citizen-led, not-for-profit initiative founded by two brothers to give free boxing training to young girls and boys from nearby villages. Open to all, regardless of caste, creed, or religion, the academy is more than just a training ground — it’s a safe space where children learn discipline, confidence, and the courage to dream big.
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link href="/about">
                Read More <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
          {aboutImage && (
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
