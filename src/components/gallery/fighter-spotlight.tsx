import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { teamMembers } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function FighterSpotlight() {
  const fighters = teamMembers.filter(member => member.role.toLowerCase().includes('fighter'));

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">Fighter Spotlight</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Celebrating the dedication and talent of our top athletes.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {fighters.map((fighter) => (
          <Card key={fighter.name} className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
            <Avatar className="w-32 h-32 border-4 border-primary">
              {fighter.image && (
                <AvatarImage
                  src={fighter.image.imageUrl}
                  alt={`Photo of ${fighter.name}`}
                  data-ai-hint={fighter.image.imageHint}
                />
              )}
              <AvatarFallback>{fighter.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <CardHeader className="pb-2">
              <h3 className="text-xl font-bold font-headline">{fighter.name}</h3>
              <p className="text-sm text-primary font-semibold">{fighter.role}</p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
