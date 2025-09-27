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
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">Our Story</h1>
          <p className="mt-4 text-lg text-muted-foreground">
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
              JSB Boxing Academy is a citizen-led, not-for-profit initiative, run with passion and purpose to change lives through the power of sport. Founded and nurtured by two brothers, the academy was created with a simple yet powerful belief — that boxing can be a tool to break the cycle of poverty and open doors of opportunity for those who need it most.
            </p>
            <p className="text-muted-foreground">
              The academy provides completely free training to young girls and boys from villages and nearby communities, giving them access to facilities, mentorship, and opportunities that would otherwise be out of reach. At JSB, we welcome everyone — irrespective of caste, creed, or religion — because we believe talent has no boundaries.
            </p>
          </div>
        </div>
        
        <div className="py-20 bg-card rounded-lg shadow-xl mb-20 text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">Our Impact</h2>
            <p className="text-muted-foreground max-w-4xl mx-auto px-4">
              Over the years, JSB Boxing Academy has trained hundreds of children and young people from underprivileged backgrounds, many of whom have proudly represented India in national and international championships. For our students, the academy is not just a training ground, but a safe space where discipline, resilience, and hope are built every single day. Together, let’s build a future where every child has the chance to dream, fight, and rise — inside the ring and beyond.
            </p>
        </div>

        <div className="mt-20">
          <TeamSection />
        </div>

        <div className="mt-20 text-center bg-card p-10 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold font-headline">Join the Fight</h2>
            <div className="max-w-4xl mx-auto text-muted-foreground mt-4 space-y-4">
                <p>
                    But we can’t do this alone. JSB Boxing Academy is citizen-led and open to all. If you’re a boxer, coach, or trainer, you can come and share your skills. If you want to run a free workshop, our children are eager to learn. If you wish to donate or volunteer, your support will help us grow stronger.
                </p>
                <p className="font-semibold text-foreground">
                    At JSB, everyone has a role to play — because building champions is not the work of one person, but of an entire community standing together.
                </p>
                <p>
                  Join us in any way you can. Together, let’s fight for their dreams.
                </p>
            </div>
          <Button size="lg" onClick={openDonationDialog} className="mt-6">
            Donate to Our Cause
          </Button>
        </div>
      </div>
    </div>
  );
}
