
'use client';

import Link from 'next/link';
import { socialLinks } from '@/lib/data';
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
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const involvementContent = {
  volunteer: {
    title: 'Volunteer With Us',
    description:
      'We are always looking for passionate individuals to join our team. Whether you can help with coaching, tutoring, event organization, or administrative tasks, your contribution is invaluable. To get started, please send an email to volunteer@jsboxing.com with your availability and areas of interest.',
  },
  share: {
    title: 'Share Your Skills',
    description:
      'If you have a skill to share, our children are eager to learn. From boxing techniques to financial literacy or public speaking, your knowledge can make a lasting impact. Please email us at volunteer@jsboxing.com to discuss how you can contribute.',
  },
};

export default function Footer() {
  const { openDonationDialog } = useDonation();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: '', description: '' });

  const handleSupportClick = (type: 'volunteer' | 'share') => {
    setDialogContent(involvementContent[type]);
    setDialogOpen(true);
  };

  return (
    <>
      <footer className="bg-card text-card-foreground border-t">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                 <div className="font-headline">
                    <span className="text-foreground">JSB </span>
                    <span className="text-primary">BOXING </span>
                    <span className="text-foreground">ACADEMY</span>
                  </div>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                JSB Boxing Academy is a citizen-led, not-for-profit initiative providing free boxing training to children from villages.
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
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-3">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium">Contact & Legal</p>
                <div className="mt-4 flex flex-col space-y-2 text-sm text-muted-foreground">
                    <p><strong>Address:</strong> C/O MR. ASHOK GATUM BUDH NAGAR , SADOPUR, Uttar Pradesh, India - 203207</p>
                    <p><strong>Email:</strong> info@jsbboxingacademy.org</p>
                    <p><strong>Phone:</strong> +91 98765 43210</p>
                    <p className="pt-2"><strong>Reg. No.:</strong> 12345</p>
                    <p><strong>FCRA No.:</strong> XYZ/FCRA/6789</p>
                    <p>80G Tax Exemption: Available</p>
                </div>
              </div>
              <div className="text-center sm_text-left">
                <p className="text-lg font-medium">Bank Details</p>
                <div className="mt-4 flex flex-col space-y-2 text-sm text-muted-foreground">
                  <p><strong>Account Name:</strong> JAISIDHBABA BOXING ACADEMY FEDERATION</p>
                  <p><strong>Account No.:</strong> 50200065755352</p>
                  <p><strong>Bank:</strong> HDFC Bank, Sector 18, Noida</p>
                  <p><strong>IFSC Code:</strong> HDFC0000088</p>
                  <p><strong>UPI ID / QR:</strong> यूपीआई@HDFC</p>
                </div>
              </div>
               <div className="text-center sm:text-left">
                <p className="text-lg font-medium">Get Involved</p>
                <nav className="mt-4 flex flex-col space-y-2 text-sm">
                  <button onClick={openDonationDialog} className="text-left text-muted-foreground transition hover:text-primary">Donate</button>
                  <button onClick={() => handleSupportClick('volunteer')} className="text-left text-muted-foreground transition hover:text-primary">Volunteer</button>
                  <button onClick={() => handleSupportClick('share')} className="text-left text-muted-foreground transition hover:text-primary">Share Your Skills</button>
                  <Link href="/about" className="text-muted-foreground transition hover:text-primary pt-2">Our Mission</Link>
                  <Link href="/gallery" className="text-muted-foreground transition hover:text-primary">Gallery</Link>
                </nav>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
             <div className="text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} JSB Boxing Academy. All rights reserved.</p>
            </div>
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
