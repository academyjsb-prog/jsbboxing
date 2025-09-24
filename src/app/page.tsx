'use client';

import { useEffect } from 'react';
import Hero from '@/components/home/hero';
import Mission from '@/components/home/mission';
import Testimonials from '@/components/home/testimonials';
import GalleryPreview from '@/components/home/gallery-preview';
import GetInvolved from '@/components/home/get-involved';
import { useDonation } from '@/context/donation-context';

export default function Home() {
  const { setIsOpen } = useDonation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [setIsOpen]);

  return (
    <>
      <Hero />
      <Mission />
      <Testimonials />
      <GalleryPreview />
      <GetInvolved />
    </>
  );
}
