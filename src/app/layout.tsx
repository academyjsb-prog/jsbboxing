import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { DonationProvider } from '@/context/donation-context';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import DonationDialog from '@/components/shared/donation-dialog';

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
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
