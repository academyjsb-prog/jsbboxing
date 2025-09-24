import GalleryGrid from '@/components/gallery/gallery-grid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
};

export default function GalleryPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">Our Gallery</h1>
          <p className="mt-4 mx-auto text-lg text-muted-foreground">
            A glimpse into the heart of JSB Boxing Academy – discipline, dedication, and community.
          </p>
        </div>
        <GalleryGrid />
      </div>
    </div>
  );
}
