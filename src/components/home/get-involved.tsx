
'use client';

import { useState } from 'react';
import { useDonation } from '@/context/donation-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Handshake, Heart, UserPlus } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const involvementOptions = [
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: 'Donate',
    description: 'Your support covers training, equipment, nutrition, and more — helping kids chase their dreams.',
    buttonText: 'Donate Now',
    action: 'donate',
    content: {
      title: 'Support Our Fighters',
      description: 'Your generosity fuels their dreams and builds a stronger community. Every contribution, big or small, makes a difference.'
    }
  },
  {
    icon: <UserPlus className="h-8 w-8 text-primary" />,
    title: 'Volunteer',
    description: 'Give your time, guide, or simply cheer — your presence inspires our young boxers.',
    buttonText: 'Join Us',
    action: 'volunteer',
    content: {
      title: 'Volunteer With Us',
      description: 'We are always looking for passionate individuals to join our team. Whether you can help with coaching, tutoring, event organization, or administrative tasks, your contribution is invaluable. To get started, please send an email to volunteer@jsboxing.com with your availability and areas of interest.'
    }
  },
  {
    icon: <Handshake className="h-8 w-8 text-primary" />,
    title: 'Share Your Skills',
    description: 'Run a workshop or session — from boxing to life skills, every lesson empowers our kids.',
    buttonText: 'Host a Session',
    action: 'share',
    content: {
      title: 'Share Your Skills',
      description: 'If you have a skill to share, our children are eager to learn. From boxing techniques to financial literacy or public speaking, your knowledge can make a lasting impact. Please email us at volunteer@jsboxing.com to discuss how you can contribute.'
    }
  },
];

type InvolvementOption = (typeof involvementOptions)[0];

export default function GetInvolved() {
  const { openDonationDialog } = useDonation();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<InvolvementOption | null>(null);

  const handleAction = (action: string) => {
    if (action === 'donate') {
      openDonationDialog();
    } else {
      const option = involvementOptions.find(opt => opt.action === action);
      if (option) {
        setSelectedOption(option);
        setDialogOpen(true);
      }
    }
  };

  return (
    <>
      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
              Get Involved
            </h2>
            <p className="mt-4 mx-auto text-base text-muted-foreground font-body text-sm">
              There are many ways to support our mission and empower our kids.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {involvementOptions.map((option) => (
              <Card key={option.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {option.icon}
                  </div>
                  <CardTitle className="mt-4 font-headline">{option.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground font-body text-sm flex-grow">{option.description}</p>
                  <Button onClick={() => handleAction(option.action)} className="mt-6 w-full">
                    {option.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedOption && (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="font-headline text-2xl">{selectedOption.content.title}</DialogTitle>
              <DialogDescription className="pt-4 text-base font-body text-sm">
                {selectedOption.content.description}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
