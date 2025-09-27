
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            What Our Supporters Say
          </h2>
          <p className="mt-4 mx-auto text-lg text-muted-foreground">
            The journey of JSB Boxing Academy is powered by people who believe in us. Their words of encouragement and trust keep us moving forward.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col justify-between h-full p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-0 flex-grow">
                      <p className="text-muted-foreground italic">
                        "{testimonial.quote}"
                      </p>
                    </CardContent>
                    <div className="mt-6">
                      <Avatar className="w-20 h-20 mx-auto border-4 border-primary">
                        {testimonial.image && (
                          <AvatarImage
                            src={testimonial.image.imageUrl}
                            alt={`Photo of ${testimonial.name}`}
                            data-ai-hint={testimonial.image.imageHint}
                          />
                        )}
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <h3 className="mt-4 text-lg font-bold font-headline">{testimonial.name}</h3>
                      <p className="text-sm text-primary font-semibold">{testimonial.role}</p>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
