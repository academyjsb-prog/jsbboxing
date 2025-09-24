import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { teamMembers } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function TeamSection() {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">Meet the Team</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          The dedicated individuals behind our success.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <Card key={member.name} className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
            <Avatar className="w-32 h-32 border-4 border-primary">
              {member.image && (
                <AvatarImage
                  src={member.image.imageUrl}
                  alt={`Photo of ${member.name}`}
                  data-ai-hint={member.image.imageHint}
                />
              )}
              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <CardHeader className="pb-2">
              <h3 className="text-xl font-bold font-headline">{member.name}</h3>
              <p className="text-sm text-primary font-semibold">{member.role}</p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
