import AboutPageClient from '@/components/about/about-page-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | JSB Boxing Academy',
};

export default function AboutPage() {
  return <AboutPageClient />;
}
