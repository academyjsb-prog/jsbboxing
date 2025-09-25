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
              JSB Boxing Academy was founded on a simple yet powerful belief: that the discipline and art of boxing can be a transformative force in a young person&apos;s life. We started in a borrowed space with a handful of gloves and an unwavering commitment to provide a positive outlet for the youth in our community.
            </p>
            <p className="text-muted-foreground">
              Our vision is to create champions—not just in the ring, but in every aspect of their lives, fostering resilience, integrity, and a sense of belonging.
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
