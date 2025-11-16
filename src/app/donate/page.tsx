import DonationForm from '@/components/shared/donation-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Donate | JSB Boxing Academy',
    description: 'Support our young fighters by making a donation. Your contribution helps us provide free training, equipment, and opportunities.'
};

export default function DonatePage() {
    return (
        <div className="bg-background text-foreground py-12 md:py-20">
            <div className="container mx-auto px-4 flex justify-center">
                <div className="max-w-lg w-full">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">Support Our Fighters</h1>
                        <p className="mt-4 mx-auto text-base text-muted-foreground">
                            Your generosity fuels their dreams and builds a stronger community. Every contribution, big or small, makes a difference.
                        </p>
                    </div>
                    <div className="border rounded-lg p-6 shadow-lg">
                        <DonationForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
