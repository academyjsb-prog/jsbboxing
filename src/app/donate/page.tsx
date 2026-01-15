
import { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
                    <Card className="w-full max-w-md shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-center font-headline text-2xl">Ways to Donate</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center space-y-6">
                            <p className="text-center text-muted-foreground">
                                You can donate directly to our bank account using the details below or by scanning the QR code.
                            </p>
                            <div className="w-48 h-48 relative">
                                <Image
                                    src="https://ik.imagekit.io/nb6cfzd7m/WhatsApp%20Image%202026-01-15%20at%207.56.39%20PM.jpeg"
                                    alt="QR Code for UPI Payment"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <div className="text-center space-y-1">
                                <p className="font-semibold">UPI ID / QR:</p>
                                <p className="text-muted-foreground break-all">7838785088@pthdfc</p>
                            </div>
                            <div className="text-center space-y-1">
                                <p className="font-semibold">Phone:</p>
                                <p className="text-muted-foreground">7838785088</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
