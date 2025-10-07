
'use client';

import Image from 'next/image';
import TeamSection from '@/components/about/team-section';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ChampionsSection from '@/components/about/champions-section';
import { teamMembers } from '@/lib/data';

const firstHalfText = (
  <>
    <p className="text-muted-foreground text-sm font-body">
      JSB Boxing Academy is a citizen-led, not-for-profit initiative, run with passion and purpose to change lives through the power of sport. Founded and nurtured by two brothers, the academy was created with a simple yet powerful belief — that boxing can be a tool to break the cycle of poverty and open doors of opportunity for those who need it most.
    </p>
    <p className="text-muted-foreground text-sm font-body">
      The academy provides completely free training to young girls and boys from villages and nearby communities, giving them access to facilities, mentorship, and opportunities that would otherwise be out of reach. At JSB, we welcome everyone — irrespective of caste, creed, or religion — because we believe talent has no boundaries.
    </p>
    <p className="text-muted-foreground text-sm font-body">
      Over the years, JSB Boxing Academy has trained hundreds of children and young people from underprivileged backgrounds, many of whom have proudly represented India in national and international championships. For our students, the academy is not just a training ground, but a safe space where discipline, resilience, and hope are built every single day.
    </p>
  </>
);

const secondHalfText = (
    <>
      <p className="text-muted-foreground text-sm font-body">
        But we cannot do this alone. Your support matters. Every glove, every punch, every medal won is the result of a community standing together. By joining hands with us — as a supporter, donor, or volunteer — you can help a child dream bigger, fight harder, and achieve more.
      </p>
      <p className="text-muted-foreground text-sm font-body">
        Together, let’s build a future where every child has the chance to dream, fight, and rise — inside the ring and beyond.
      </p>
      <p className="text-muted-foreground text-sm font-body">
        But we can’t do this alone. JSB Boxing Academy is citizen-led and open to all.
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm font-body">
        <li>If you’re a boxer, coach, or trainer, you can come and share your skills.</li>
        <li>If you want to run a free workshop, our children are eager to learn.</li>
        <li>If you wish to donate or volunteer, your support will help us grow stronger.</li>
      </ul>
      <p className="text-muted-foreground text-sm font-body">
        At JSB, everyone has a role to play — because building champions is not the work of one person, but of an entire community standing together.
      </p>
      <p className="font-semibold text-foreground font-body">
        Join us in any way you can. Together, let’s fight for their dreams.
      </p>
    </>
  );


export default function AboutPageClient() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'vision-champions');
  const champions = teamMembers.filter(member => member.role.toLowerCase().includes('fighter'));

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">About us</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {aboutImage && (
            <div className="relative aspect-video w-full h-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src={"https://ik.imagekit.io/nb6cfzd7m/About%20us%20HOME.jpg?updatedAt=1759521570512"}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="space-y-4">
            <div className="space-y-4">
              {firstHalfText}
            </div>
          </div>
        </div>

        <div className="space-y-4 my-12">
            {secondHalfText}
        </div>
        
        <div className="mb-20">
          <TeamSection />
        </div>

        <div className="mb-20">
          <ChampionsSection champions={champions} />
        </div>
      </div>
    </div>
  );
}
