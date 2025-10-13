import type { Metadata } from 'next';
import { PT_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { DonationProvider } from '@/context/donation-context';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import DonationDialog from '@/components/shared/donation-dialog';
import { cn } from '@/lib/utils';
import Script from 'next/script';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

const boxingGloveSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a2 2 0 0 0 2-2v-2H8v2c0 1.1.9 2 2 2Z"/><path d="M16 18H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.57a3 3 0 0 1 2.39 1.08L14 10h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"/><path d="M9.5 8.5v-1a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v2"/><path d="M12.5 6.5v-1a1 1 0 0 1 1-1h1"/><path d="M16 10h1.5a1 1 0 0 1 1 1v1"/></svg>`;
const faviconDataUri = `data:image/svg+xml;base64,${btoa(boxingGloveSvg)}`;

export const metadata: Metadata = {
  title: {
    default: 'JSB Boxing Academy - Punch for Hope',
    template: '%s | JSB Boxing Academy',
  },
  description: 'JSB Boxing Academy - Training Champions, Building Futures',
  icons: {
    icon: faviconDataUri,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('font-body antialiased', ptSans.variable, playfairDisplay.variable)}>
        <DonationProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <DonationDialog />
          <Toaster />
        </DonationProvider>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      </body>
    </html>
  );
}
