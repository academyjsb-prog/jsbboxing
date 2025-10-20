'use client';

import Mission from '@/components/home/mission';
import Testimonials from '@/components/home/testimonials';
import GalleryPreview from '@/components/home/gallery-preview';
import GetInvolved from '@/components/home/get-involved';
import AboutPreview from '@/components/home/about-preview';
import ChampionsPreview from '@/components/home/champions-preview';
import ImpactPreview from '@/components/home/impact-preview';
import Hero from '@/components/home/hero';
import DonationModalTrigger from '@/components/home/donation-modal-trigger';

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <ImpactPreview />
      <Testimonials />
      <ChampionsPreview />
      <GalleryPreview />
      <GetInvolved />
      <AboutPreview />
      <DonationModalTrigger />
    </>
  );
}
