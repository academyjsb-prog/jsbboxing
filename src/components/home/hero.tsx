'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useDonation } from '@/context/donation-context';
import Autoplay from 'embla-carousel-autoplay';

const sliderContent = [
  {
    id: 'hero-slider-1',
    title: 'Free Training. Equal Dreams.',
    description:
      'At JSB Boxing Academy, both boys and girls receive free professional boxing training — unlocking strength, confidence, and opportunity.',
    buttonText: 'About Us',
    buttonLink: '/about',
    action: 'link',
  },
  {
    id: 'hero-slider-2',
    title: 'We Train Champions Not Just Boxers.',
    description:
      'We shape discipline, ethics, and values - helping every child grow stronger inside and outside the ring.',
    buttonText: 'What our Supporters say',
    buttonLink: '/#testimonials',
    action: 'link',
  },
  {
    id: 'hero-slider-3',
    title: 'Donate to Train a Champion',
    description:
      'Be the reason a child finds purpose, power, and pride through boxing.',
    buttonText: 'Donate Now',
    buttonLink: '#',
    action: 'donate',
  },
  {
    id: 'hero-slider-4',
    title: 'Champions in the Making',
    description:
      'Each child in our academy has a story of courage and determination.',
    buttonText: 'Meet the champion',
    buttonLink: '/about',
    action: 'link',
  },
];

export default function Hero() {
  const { openDonationDialog } = useDonation();
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  const handleButtonClick = (action: string) => {
    if (action === 'donate') {
      openDonationDialog();
    }
  };

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] text-white">
      <Carousel
        className="w-full h-full"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{ loop: true }}
      >
        <CarouselContent>
          {sliderContent.map((slide) => {
            const image = PlaceHolderImages.find((img) => img.id === slide.id);
            return (
              <CarouselItem key={slide.id}>
                <div className="relative w-full h-[60vh] md:h-[80vh]">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      fill
                      className="object-cover"
                      priority={slide.id === 'hero-slider-1'}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-0 flex items-center justify-center md:justify-start">
                    <div className="container mx-auto px-4">
                       <div className="w-full md:w-1/2 text-center md:text-left space-y-4 md:space-y-6">
                        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
                          {slide.title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 font-body">
                          {slide.description}
                        </p>
                        {slide.action === 'link' ? (
                          <Button asChild size="lg">
                            <Link href={slide.buttonLink}>
                              {slide.buttonText} <ArrowRight className="ml-2" />
                            </Link>
                          </Button>
                        ) : (
                          <Button
                            size="lg"
                            onClick={() => handleButtonClick(slide.action)}
                          >
                            {slide.buttonText} <ArrowRight className="ml-2" />
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
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
      </Carousel>
    </section>
  );
}
