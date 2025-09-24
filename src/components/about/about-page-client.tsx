'use client';

import Image from 'next/image';
import TeamSection from '@/components/about/team-section';
import { Button } from '@/components/ui/button';
import { useDonation } from '@/context/donation-context';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPageClient() {
  const { openDonationDialog } = useDonation();
  const aboutImage = PlaceHolderImages.find(img => img.id === 'gallery-3');

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">Our Story</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            From a small room with a big dream to a thriving academy, our journey is one of passion, perseverance, and community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
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
          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-headline">The Vision of JSB Academy</h2>
            <p className="text-muted-foreground">
              JSB Boxing Academy was founded on a simple yet powerful belief: that the discipline and art of boxing can be a transformative force in a young person's life. We started in a borrowed space with a handful of gloves and an unwavering commitment to provide a positive outlet for the youth in our community.
            </p>
            <p className="text-muted-foreground">
              Today, we are proud to be a pillar of the community, offering not just world-class boxing training, but also mentorship, academic support, and a safe haven for dozens of aspiring athletes. Our vision is to create champions—not just in the ring, but in every aspect of their lives.
            </p>
          </div>
        </div>

        <TeamSection />

        <div className="mt-20 text-center bg-card p-10 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold font-headline">Support Our Mission</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Your contribution helps us keep the lights on, the gloves new, and the dreams of our young fighters alive. Join us in making a difference.
          </p>
          <Button size="lg" onClick={openDonationDialog} className="mt-6">
            Donate to Our Cause
          </Button>
        </div>
      </div>
    </div>
  );
}
