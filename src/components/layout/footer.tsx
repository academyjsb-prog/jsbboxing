import Link from 'next/link';
import { socialLinks } from '@/lib/data';
import { BoxingGloveIcon } from '@/components/shared/icons';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <BoxingGloveIcon className="h-8 w-8 text-primary" />
              <span className="font-headline">JSB Boxing Academy</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Empowering youth through the discipline of boxing.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition hover:text-primary"
                >
                  <link.icon className="h-6 w-6" />
                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">About Us</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm">
                <Link href="/about" className="text-muted-foreground transition hover:text-primary">Our Mission</Link>
                <Link href="/about" className="text-muted-foreground transition hover:text-primary">The Team</Link>
                <Link href="/gallery" className="text-muted-foreground transition hover:text-primary">Gallery</Link>
              </nav>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Support Us</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm">
                <button className="text-left text-muted-foreground transition hover:text-primary">Donate</button>
                <button className="text-left text-muted-foreground transition hover:text-primary">Volunteer</button>
                <button className="text-left text-muted-foreground transition hover:text-primary">Sponsor</button>
              </nav>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Newsletter</p>
              <p className="mt-4 text-sm text-muted-foreground">
                Stay up to date with our latest news and events.
              </p>
              <form className="mt-4 flex max-w-md gap-2">
                <Input type="email" placeholder="Enter your email" className="w-full" />
                <Button type="submit" variant="default">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} JSB Boxing Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
