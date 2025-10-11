
'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useDonation } from '@/context/donation-context';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';

const sliderContent = [
  {
    id: 'hero-slider-1',
    title: (
      <>
        Free Training. <br /> Equal <span style={{ color: '#57ADF5' }}>Dreams</span>.
      </>
    ),
    description:
      'At JSB Boxing Academy, both boys and girls receive free professional boxing training — unlocking strength, confidence, and opportunity.',
    buttonText: 'About Us',
    buttonLink: '/about',
    action: 'link',
  },
  {
    id: 'hero-slider-2',
    title: (
      <>
        We Train <span style={{ color: '#57ADF5' }}>Champions</span>, <br /> Not Just Boxers.
      </>
    ),
    description:
      'We shape discipline, ethics, and values - helping every child grow stronger inside and outside the ring.',
    buttonText: 'What our Supporters say',
    buttonLink: '/#testimonials',
    action: 'link',
  },
  {
    id: 'hero-slider-3',
    title: (
      <>
        <span style={{ color: '#57ADF5' }}>Donate</span> to Train <br /> a Champion
      </>
    ),
    description:
      'Be the reason a child finds purpose, power, and pride through boxing.',
    buttonText: 'Donate Now',
    buttonLink: '#',
    action: 'donate',
  },
  {
    id: 'hero-slider-4',
    title: (
      <>
        Champions <br /> <span style={{ color: '#57ADF5' }}>in the Making</span>
      </>
    ),
    description:
      'Each child in our academy has a story of courage and determination.',
    buttonText: 'Meet the champion',
    buttonLink: '/about',
    action: 'link',
  },
];

export default function Hero() {
  const { openDonationDialog } = useDonation();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);


  const handleButtonClick = (action: string) => {
    if (action === 'donate') {
      openDonationDialog();
    }
  };

  const handleDotClick = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);


  const currentSlide = sliderContent[current];

  return (
    <section className="w-full bg-background text-foreground py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="flex flex-col justify-center space-y-6 md:order-1 order-2">
            <div className="space-y-4">
                <h1 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl uppercase">
                  {currentSlide.title}
                </h1>
                <p className="text-sm text-muted-foreground font-body max-w-md">
                  {currentSlide.description}
                </p>
            </div>
            
            {currentSlide.action === 'link' ? (
              <Button asChild size="lg" className="w-fit">
                <Link href={currentSlide.buttonLink}>
                  {currentSlide.buttonText} <ArrowRight className="ml-2" />
                </Link>
              </Button>
            ) : (
              <Button
                size="lg"
                onClick={() => handleButtonClick(currentSlide.action)}
                className="w-fit"
              >
                {currentSlide.buttonText} <ArrowRight className="ml-2" />
              </Button>
            )}

            <div className="flex gap-2 pt-4">
                {sliderContent.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={cn(
                            'h-2 w-10 rounded-full transition-colors',
                            index === current ? 'bg-primary' : 'bg-muted'
                        )}
                    >
                        <span className="sr-only">Go to slide {index + 1}</span>
                    </button>
                ))}
            </div>
          </div>

          <div className="md:order-2 order-1">
            <Carousel
              setApi={setApi}
              className="w-full"
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
                      <div className="relative aspect-[4/3] w-full">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            data-ai-hint={image.imageHint}
                            fill
                            className="object-cover rounded-[2.5rem]"
                            priority={slide.id === 'hero-slider-1'}
                          />
                        )}
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>

        </div>
      </div>
    </section>
  );
}
