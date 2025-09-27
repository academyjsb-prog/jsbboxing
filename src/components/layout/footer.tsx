'use client';

import Link from 'next/link';
import { socialLinks } from '@/lib/data';
import { BoxingGloveIcon } from '@/components/shared/icons';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useDonation } from '@/context/donation-context';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const involvementContent = {
  sponsor: {
    title: 'Become a Sponsor',
    description:
      'Sponsoring JSB Boxing Academy is a unique opportunity to align your brand with a cause that builds champions. We offer various sponsorship packages that provide visibility at our events, on our website, and on social media. To discuss sponsorship opportunities, please email us at sponsor@jsboxing.com.',
  },
  volunteer: {
    title: 'Volunteer With Us',
    description:
      'We are always looking for passionate individuals to join our team. Whether you can help with coaching, tutoring, event organization, or administrative tasks, your contribution is invaluable. To get started, please send an email to volunteer@jsboxing.com with your availability and areas of interest.',
  },
};

export default function Footer() {
  const { openDonationDialog } = useDonation();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: '', description: '' });

  const handleSupportClick = (type: 'sponsor' | 'volunteer') => {
    setDialogContent(involvementContent[type]);
    setDialogOpen(true);
  };

  return (
    <>
      <footer className="bg-card text-card-foreground border-t">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                <BoxingGloveIcon className="h-8 w-8 text-primary" />
                <span className="font-headline">JSB Boxing Academy</span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                JSB Boxing Academy is a citizen-led, not-for-profit initiative providing free boxing training to children from villages. Open to all, we build confidence, discipline, and dreams beyond the ring
              </p>
              <div className="mt-6 flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    <link.icon className="h-6 w-6" />
                    <span className="sr-only">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium">About Us</p>
                <nav className="mt-4 flex flex-col space-y-2 text-sm">
                  <Link href="/about" className="text-muted-foreground transition hover:text-primary">Our Mission</Link>
                  <Link href="/about" className="text-muted-foreground transition hover:text-primary">The Team</Link>
                  <Link href="/gallery" className="text-muted-foreground transition hover:text-primary">Gallery</Link>
                </nav>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium">Support Us</p>
                <nav className="mt-4 flex flex-col space-y-2 text-sm">
                  <button onClick={openDonationDialog} className="text-left text-muted-foreground transition hover:text-primary">Donate</button>
                  <button onClick={() => handleSupportClick('volunteer')} className="text-left text-muted-foreground transition hover:text-primary">Volunteer</button>
                  <button onClick={() => handleSupportClick('sponsor')} className="text-left text-muted-foreground transition hover:text-primary">Sponsor</button>
                </nav>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium">Newsletter</p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Stay up to date with our latest news and events.
                </p>
                <form className="mt-4 flex max-w-md gap-2">
                  <Input type="email" placeholder="Enter your email" className="w-full" />
                  <Button type="submit" variant="default">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} JSB Boxing Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-headline text-2xl">{dialogContent.title}</DialogTitle>
            <DialogDescription className="pt-4 text-base">
              {dialogContent.description}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
