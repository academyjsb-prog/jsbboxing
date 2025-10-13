
'use client';

import { useEffect, useState } from 'react';
import { useDonation } from '@/context/donation-context';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import DonationForm from './donation-form';

export default function DonationDialog() {
  const { isOpen, setIsOpen } = useDonation();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Support Our Fighters</DialogTitle>
          <DialogDescription>
            Your generosity fuels their dreams and builds a stronger community.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <DonationForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
