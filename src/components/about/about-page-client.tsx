
'use client';

import Image from 'next/image';
import TeamSection from '@/components/about/team-section';
import { Button } from '@/components/ui/button';
import { useDonation } from '@/context/donation-context';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPageClient() {
  const { openDonationDialog } = useDonation();
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-vision');

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
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
            <p className="text-muted-foreground text-sm font-body">
              JSB Boxing Academy is a citizen-led, not-for-profit initiative, run with passion and purpose to change lives through the power of sport. Founded and nurtured by two brothers, the academy was created with a simple yet powerful belief — that boxing can be a tool to break the cycle of poverty and open doors of opportunity for those who need it most.
            </p>
            <p className="text-muted-foreground text-sm font-body">
              The academy provides completely free training to young girls and boys from villages and nearby communities, giving them access to facilities, mentorship, and opportunities that would otherwise be out of reach. At JSB, we welcome everyone — irrespective of caste, creed, or religion — because we believe talent has no boundaries.
            </p>
             <p className="text-muted-foreground text-sm font-body">
              Over the years, JSB Boxing Academy has trained hundreds of children and young people from underprivileged backgrounds, many of whom have proudly represented India in national and international championships. For our students, the academy is not just a training ground, but a safe space where discipline, resilience, and hope are built every single day.
            </p>
          </div>
        </div>
        
        <div className="py-12 bg-card rounded-lg shadow-xl mb-12">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">Our Impact and How You Can Help</h2>
            <div className="space-y-4 text-muted-foreground text-sm font-body">
                <p>
                    But we cannot do this alone. Your support matters. Every glove, every punch, every medal won is the result of a community standing together. By joining hands with us — as a supporter, donor, or volunteer — you can help a child dream bigger, fight harder, and achieve more.
                </p>
                 <p className="font-semibold text-foreground font-body">
                    Together, let’s build a future where every child has the chance to dream, fight, and rise — inside the ring and beyond.
                </p>
            </div>
            <Button size="lg" onClick={openDonationDialog} className="mt-8">
              Support The Mission
            </Button>
          </div>
        </div>
        
        <div className="py-12 mb-12">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-3xl font-bold font-headline mb-4">Be Part of the Community</h2>
             <div className="space-y-4 text-muted-foreground text-sm font-body">
                <p>
                    JSB Boxing Academy is citizen-led and open to all. At JSB, everyone has a role to play — because building champions is not the work of one person, but of an entire community standing together.
                </p>
                <ul className="list-disc list-inside space-y-2 text-left md:text-center md:list-inside">
                    <li>If you’re a boxer, coach, or trainer, you can come and share your skills.</li>
                    <li>If you want to run a free workshop, our children are eager to learn.</li>
                    <li>If you wish to donate or volunteer, your support will help us grow stronger.</li>
                </ul>
                <p className="font-semibold text-foreground pt-4 font-body">
                    Join us in any way you can. Together, let’s fight for their dreams.
                </p>
             </div>
          </div>
        </div>


        <div className="mt-20">
          <TeamSection />
        </div>
      </div>
    </div>
  );
}
