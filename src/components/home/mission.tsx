import { Shield, HeartHandshake, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BoxingGloveIcon } from '@/components/shared/icons';

const features = [
  {
    icon: <BoxingGloveIcon className="h-10 w-10 text-primary" />,
    title: 'Our Mission',
    description:
      'We train and support kids from poor backgrounds, helping them gain confidence, discipline, and skills through boxing — so they can dream bigger and achieve more.',
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: 'Our Vision',
    description:
      'We believe every child deserves a chance to shine. Our goal is to create a world where talent and hard work matter more than circumstances.',
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    title: 'Our Goals',
    description:
      'To offer free, high-quality boxing training, mentorship programs, and educational support, empowering our members to achieve excellence in and out of the ring.',
  },
];

export default function Mission() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            Why We Fight
          </h2>
          <p className="mt-4 mx-auto text-lg text-muted-foreground">
            We are a family, a support system, and a beacon of hope for the next generation.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                {feature.icon}
                <CardTitle className="mt-4 font-headline">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
