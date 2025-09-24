import GalleryGrid from '@/components/gallery/gallery-grid';
import FighterSpotlight from '@/components/gallery/fighter-spotlight';
import { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Gallery | JSB Boxing Academy',
};

export default function GalleryPage() {
  const behindTheScenesImage = PlaceHolderImages.find(img => img.id === 'gallery-6');
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">Our Gallery</h1>
          <p className="mt-4 mx-auto text-lg text-muted-foreground">
            A glimpse into the heart of JSB Boxing Academy – discipline, dedication, and community.
          </p>
        </div>
        
        <div className="mb-20">
          <GalleryGrid />
        </div>

        <div className="py-20 bg-card rounded-lg shadow-xl my-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold font-headline mb-4">Behind the Scenes</h2>
                <p className="text-muted-foreground mb-4">
                  Our gallery is more than just a collection of photos; it's a testament to the hard work, sweat, and triumphs of our athletes. Each image captures a moment of intense focus, unwavering determination, and the supportive community that defines JSB Boxing Academy.
                </p>
                <p className="text-muted-foreground">
                  From early morning training sessions to the roar of the crowd during a match, these pictures tell the story of our journey. They showcase the raw emotion of the sport and the unbreakable bonds forged between our members and coaches.
                </p>
              </div>
              {behindTheScenesImage && (
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={behindTheScenesImage.imageUrl}
                    alt={behindTheScenesImage.description}
                    data-ai-hint={behindTheScenesImage.imageHint}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="my-20">
          <FighterSpotlight />
        </div>
      </div>
    </div>
  );
}
