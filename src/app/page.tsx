'use client';

import { useEffect } from 'react';
import Mission from '@/components/home/mission';
import Testimonials from '@/components/home/testimonials';
import GalleryPreview from '@/components/home/gallery-preview';
import GetInvolved from '@/components/home/get-involved';
import AboutPreview from '@/components/home/about-preview';
import { useDonation } from '@/context/donation-context';
import ChampionsPreview from '@/components/home/champions-preview';
import ImpactPreview from '@/components/home/impact-preview';

export default function Home() {
  const { setIsOpen } = useDonation();

  useEffect(() => {
    // This will only run on the client, after initial hydration
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [setIsOpen]);

  return (
    <>
      <Mission />
      <ImpactPreview />
      <Testimonials />
      <ChampionsPreview />
      <GalleryPreview />
      <GetInvolved />
      <AboutPreview />
    </>
  );
}
