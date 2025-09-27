import AboutPageClient from '@/components/about/about-page-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | JSB Boxing Academy',
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-background text-foreground py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">About Us</h1>
          <p className="mt-4 mx-auto text-base text-muted-foreground font-body">
            From a small room with a big dream to a thriving academy, our journey is one of passion, perseverance, and community.
          </p>
        </div>
      </div>
      <AboutPageClient />
    </>
  );
}
