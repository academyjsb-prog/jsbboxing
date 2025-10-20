'use client';

import { useEffect } from 'react';
import { useDonation } from '@/context/donation-context';

export default function DonationModalTrigger() {
  const { setIsOpen } = useDonation();

  useEffect(() => {
    // This will only run on the client, after initial hydration
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [setIsOpen]);

  return null; // This component does not render anything itself
}
