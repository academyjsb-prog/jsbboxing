import { Globe, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BoxingGloveIcon } from '@/components/shared/icons';

const features = [
  {
    icon: <BoxingGloveIcon className="h-8 w-8 text-primary" />,
    title: 'Our Mission',
    description:
      'To help every child be able to access free boxing training, build discipline, gain confidence, and learn life skills that go beyond the ring.',
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: 'Our Vision',
    description:
      'To create a world where every child is able to dream, grow, and succeed — no matter their caste, creed, religion, or financial background.',
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'Our Goal',
    description:
      'To guide young boxers so they are able to compete at national and international levels and become role models who inspire their families and communities.',
  }
];

export default function Mission() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            Why We Fight
          </h2>
          <p className="mt-4 mx-auto text-sm text-muted-foreground font-body">
            We fight not just inside the ring, but against poverty, inequality, and lost opportunities.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="items-center pb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground font-body text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
