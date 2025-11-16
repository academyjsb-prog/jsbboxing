
import DonationForm from '@/components/shared/donation-form';
import { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
    title: 'Donate | JSB Boxing Academy',
    description: 'Support our young fighters by making a donation. Your contribution helps us provide free training, equipment, and opportunities.'
};

export default function DonatePage() {
    const donateImage = PlaceHolderImages.find(img => img.id === 'vision-champions');

    return (
        <div className="bg-background text-foreground py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">Support a Champion's Dream</h1>
                        <p className="mt-4 text-lg text-muted-foreground">Your donation fuels the future of boxing.</p>
                        {donateImage && (
                            <div className="mt-8 w-full aspect-video relative">
                                <Image
                                    src={donateImage.imageUrl}
                                    alt={donateImage.description}
                                    data-ai-hint={donateImage.imageHint}
                                    fill
                                    className="rounded-lg object-cover shadow-lg"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        )}
                    </div>
                    <div className="w-full">
                        <div className="border rounded-lg p-6 shadow-lg bg-card">
                            <DonationForm />
                        </div>
                         <p className="text-xs text-muted-foreground mt-4 text-center">
                            Registered under Section 8 of the Indian Companies Act, 2013 and under Section 12A of the Income Tax Act, 1961. Donations to JSB Boxing Academy are tax exempted under 80G of the Indian Income Tax Act.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
