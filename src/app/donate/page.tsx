
import DonationForm from '@/components/shared/donation-form';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Donate | JSB Boxing Academy',
    description: 'Support our young fighters by making a donation. Your contribution helps us provide free training, equipment, and opportunities.'
};

export default function DonatePage() {

    return (
        <div className="bg-background text-foreground py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-12">
                    <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">Support a Champion's Dream</h1>
                    <p className="mt-4 text-lg text-muted-foreground">Your donation fuels the future of boxing.</p>
                </div>

                <div className="flex justify-center">
                    <div className="w-full max-w-lg">
                        <div className="border rounded-lg p-6 shadow-lg bg-card">
                            <DonationForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
