
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
                    <div className="w-full">
                        <div className="border rounded-lg p-6 shadow-lg bg-card">
                            <DonationForm />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="border rounded-lg p-6 shadow-lg bg-card flex flex-col items-center">
                            <h2 className="text-2xl font-bold font-headline mb-4">Other Ways to Donate</h2>
                            <p className="text-muted-foreground mb-4 text-center text-sm">Scan the QR code or use the UPI ID for direct bank transfers.</p>
                            <div className="relative w-48 h-48 mb-4">
                                <Image 
                                    src="https://ik.imagekit.io/nb6cfzd7m/WhatsApp%20Image%202026-01-15%20at%207.56.39%20PM.jpeg" 
                                    alt="Donation QR Code" 
                                    layout="fill" 
                                    objectFit="contain"
                                    data-ai-hint="QR code"
                                />
                            </div>
                            <p className="font-semibold text-lg">7838785088</p>
                            <p className="text-muted-foreground text-sm">UPI ID: 7838785088@pthdfc</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
