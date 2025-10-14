
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export default function AboutPreview() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'vision-champions');

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 md:order-2">
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">About JSB Boxing Academy</h2>
            <p className="text-muted-foreground text-sm">
              JSB Boxing Academy is a citizen-led, not-for-profit initiative founded by two brothers to give free boxing training to young girls and boys from nearby villages. Open to all, regardless of caste, creed, or religion, the academy is more than just a training ground — it’s a safe space where children learn discipline, confidence, and the courage to dream big.
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link href="/about">
                Read More <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
          {aboutImage && (
            <div className="w-full md:order-1">
               <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={1280}
                height={720}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
