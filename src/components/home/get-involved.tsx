'use client';

import { useDonation } from '@/context/donation-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Handshake, Heart, UserPlus } from 'lucide-react';

const involvementOptions = [
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: 'Donate',
    description: 'Your financial support provides equipment, facilities, and opportunities for our young athletes.',
    buttonText: 'Donate Now',
    action: 'donate',
  },
  {
    icon: <Handshake className="h-10 w-10 text-primary" />,
    title: 'Sponsor',
    description: 'Become a corporate or individual sponsor to support our programs and gain visibility in the community.',
    buttonText: 'Learn More',
    action: 'sponsor',
  },
  {
    icon: <UserPlus className="h-10 w-10 text-primary" />,
    title: 'Volunteer',
    description: 'Lend your time and skills as a mentor, tutor, or event helper. Your presence makes a huge difference.',
    buttonText: 'Join Us',
    action: 'volunteer',
  },
];

export default function GetInvolved() {
  const { openDonationDialog } = useDonation();

  const handleAction = (action: string) => {
    if (action === 'donate') {
      openDonationDialog();
    }
    // In a real app, you would navigate to other pages or open other dialogs
    // for 'sponsor' and 'volunteer'.
  };

  return (
    <section className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            Get Involved
          </h2>
          <p className="mt-4 mx-auto text-lg text-muted-foreground">
            There are many ways to support our mission and empower our youth.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {involvementOptions.map((option) => (
            <Card key={option.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="items-center">
                {option.icon}
                <CardTitle className="mt-4 font-headline">{option.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground flex-grow">{option.description}</p>
                <Button onClick={() => handleAction(option.action)} className="mt-6 w-full">
                  {option.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
