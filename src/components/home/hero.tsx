
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
        title: 'We Train Champions Not Just Boxers.',
        description: 'We shape discipline, ethics, and values - helping every child grow stronger inside and outside the ring.',
        buttonText: 'What our Supporters say',
        buttonLink: '/#testimonials',
    },
    {
        id: 'hero-slider-3',
        title: 'Donate to Train a Champion',
        description: 'Be the reason a child finds purpose, power, and pride through boxing.',
        buttonText: 'Donate Now',
        buttonAction: 'donate',
    },
    {
        id: 'hero-slider-4',
        title: 'Champions in the Making',
        description: 'Each child in our academy has a story of courage and determination.',
        buttonText: 'Meet the champion',
        buttonLink: '/about',
    }
]

export default function Hero() {
  const { openDonationDialog } = useDonation();
  const heroImages = PlaceHolderImages.filter((img) =>
    sliderContent.some(content => content.id === img.id)
  );

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] bg-background">
      <Carousel 
        className="w-full h-full"
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
              <CarouselItem key={index}>
                <div className="relative h-full w-full">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-8 md:p-16 text-center text-white">
                    <div className="md:order-1 order-2">
                        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                            {content.title}
                        </h1>
                        <p className="max-w-[700px] text-white/90 md:text-xl mt-4 font-body">
                            {content.description}
                        </p>
                        <div className="mt-6">
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
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
