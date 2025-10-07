'use client';

import { Card, CardHeader } from '@/components/ui/card';
import { Users, Target, Shield, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const impactStats = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: '200+',
    label: 'Youth Trained',
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    value: '50+',
    label: 'National Medals',
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    value: '10+',
    label: 'International Competitions',
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    value: '100%',
    label: 'Free of Cost',
  },
];

export default function ImpactPreview() {
  return (
    <section className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">Our Impact at a Glance</h2>
          <p className="mt-4 mx-auto text-base text-muted-foreground">
            A quick look at the milestones we've achieved with your support.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {impactStats.map((stat) => (
            <Card key={stat.label} className="text-center shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
              <CardHeader className="items-center pb-4 pt-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-2">
                    {stat.icon}
                </div>
                <p className="text-4xl font-bold font-headline text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-semibold">{stat.label}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="text-center">
            <Button asChild size="lg">
                <Link href="/reports">
                    View Full Report <ArrowRight className="ml-2" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}