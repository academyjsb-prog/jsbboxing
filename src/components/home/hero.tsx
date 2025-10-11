
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
import { useState, useEffect, useCallback } from 'react';
import type { CarouselApi } from "@/components/ui/carousel"


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

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }
 
    setCurrent(api.selectedScrollSnap())
 
    const onSelect = (api: CarouselApi) => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
 
    return () => {
      api.off("select", onSelect)
    }
  }, [api])


  const currentContent = sliderContent[current] || sliderContent[0];

  return (
    <section className="w-full bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col justify-center space-y-6 md:order-1 order-2">
                <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    {currentContent.title}
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl font-body">
                    {currentContent.description}
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    {currentContent.buttonAction === 'donate' ? (
                        <Button size="lg" onClick={openDonationDialog}>
                            {currentContent.buttonText}
                        </Button>
                    ) : (
                        <Button asChild size="lg">
                            <Link href={currentContent.buttonLink || '/'}>
                                {currentContent.buttonText} <ArrowRight className="ml-2" />
                            </Link>
                        </Button>
                    )}
                </div>
                <div className="flex gap-2 pt-4">
                  {sliderContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={`h-2 w-2 rounded-full transition-colors ${
                        current === index ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
            </div>
            <div className="md:order-2 order-1">
                <Carousel 
                    setApi={setApi}
                    className="w-full p-4 border-8 border-primary rounded-3xl"
                    plugins={[
                        Autoplay({
                          delay: 5000,
                          stopOnInteraction: true,
                        }),
                      ]}
                >
                <CarouselContent className="-ml-1">
                  {heroImages.map((image, index) => (
                      <CarouselItem key={image.id} className="pl-1">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              data-ai-hint={image.imageHint}
                              fill
                              className="object-cover"
                              priority={index === 0} 
                            />
                        </div>
                      </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
              </Carousel>
            </div>
        </div>
      </div>
    </section>
  );
}
