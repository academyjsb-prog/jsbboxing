import { Target, Shield, HeartHandshake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: 'Our Mission',
    description:
      'To provide a safe and supportive environment where underprivileged youth can learn the art of boxing, develop self-discipline, and build a foundation for a successful future.',
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: 'Our Vision',
    description:
      'We envision a community where every young person has the opportunity to realize their potential, using the discipline of sport to overcome adversity and become leaders.',
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
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            More Than Just a Gym
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
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
