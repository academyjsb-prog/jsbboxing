
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import { useDonation } from '@/context/donation-context';
import Autoplay from "embla-carousel-autoplay"
import { ArrowRight } from 'lucide-react';

const sliderContent = [
    {
        id: 'hero-slider-1',
        title: 'Free Training. Equal Dreams.',
        description: 'At JSB Boxing Academy, both boys and girls receive free professional boxing training — unlocking strength, confidence, and opportunity.',
        buttonText: 'About Us',
        buttonLink: '/about',
    },
    {
        id: 'hero-slider-2',
        title: 'Join a Community of Fighters',
        description: 'Our academy is more than just a gym; it’s a family. We foster a supportive environment where young athletes build lifelong friendships and learn the value of teamwork.',
        buttonText: 'Meet the Team',
        buttonLink: '/about',
    },
    {
        id: 'hero-slider-3',
        title: 'Empowering Girls Through Sport',
        description: 'We are committed to providing a safe and empowering space for girls to train, compete, and break barriers. Your support helps us create equal opportunities for all.',
        buttonText: 'See Our Gallery',
        buttonLink: '/gallery',
    },
    {
        id: 'hero-slider-4',
        title: 'Discipline, Dedication, and Dreams',
        description: 'Through rigorous training and mentorship, our boxers learn the discipline it takes to become champions and the dedication to pursue their dreams against all odds.',
        buttonText: 'Our Impact',
        buttonLink: '/reports',
    }
]

export default function Hero() {
  const { openDonationDialog } = useDonation();
  const heroImages = PlaceHolderImages.filter((img) =>
    img.id.startsWith('hero-slider-')
  );

  return (
    <section className="w-full bg-background">
        <Carousel 
            className="w-full"
            plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: true,
                }),
              ]}
        >
        <CarouselContent>
          {sliderContent.map((content, index) => {
            const image = heroImages.find(img => img.id === content.id);
            return (
              <CarouselItem key={content.id}>
                <div className="relative w-full h-[60vh] md:h-[70vh] bg-black">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      fill
                      className="object-cover opacity-50"
                      priority={index === 0} 
                    />
                  )}
                  <div className="absolute inset-0 flex items-center bg-black/50">
                    <div className="container mx-auto px-4 md:px-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col justify-center space-y-4 text-white">
                          <h1 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-shadow-lg">
                            {content.title}
                          </h1>
                          <p className="max-w-[600px] text-gray-200 md:text-xl font-body text-sm text-shadow">
                            {content.description}
                          </p>
                          <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            {content.buttonAction === 'donate' ? (
                                <Button size="lg" onClick={openDonationDialog}>
                                    {content.buttonText}
                                </Button>
                            ) : (
                                <Button asChild size="lg">
                                    <Link href={content.buttonLink || '/'}>
                                        {content.buttonText} <ArrowRight className="ml-2" />
                                    </Link>
                                </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
      </Carousel>
    </section>
  );
}
