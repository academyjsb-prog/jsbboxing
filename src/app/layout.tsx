import type { Metadata } from 'next';
import { PT_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { DonationProvider } from '@/context/donation-context';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import DonationDialog from '@/components/shared/donation-dialog';
import { cn } from '@/lib/utils';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  title: {
    default: 'JSB Boxing Academy - Punch for Hope',
    template: '%s | JSB Boxing Academy',
  },
  description: 'JSB Boxing Academy - Training Champions, Building Futures',
  icons: {
    icon: '/favicon.ico',
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
      </body>
    </html>
  );
}
