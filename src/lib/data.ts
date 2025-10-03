
import { Facebook, Instagram, Youtube } from 'lucide-react';
import placeholderData from './placeholder-images.json';
import type { ImagePlaceholder } from './placeholder-images';

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export const socialLinks = [
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Youtube, label: 'YouTube' },
];

const { placeholderImages: PlaceHolderImages } = placeholderData;

export const teamMembers = [
  {
    name: 'John "The Iron Fist" Doe',
    role: 'Head Coach & Founder',
    image: PlaceHolderImages.find(img => img.id === 'team-1'),
  },
  {
    name: 'Jane "Swift" Smith',
    role: 'Senior Trainer',
    image: PlaceHolderImages.find(img => img.id === 'team-2'),
  },
  {
    name: 'Mike "The Rock" Johnson',
    role: 'Lead Fighter',
    image: PlaceHolderImages.find(img => img.id === 'team-3'),
  },
  {
    name: 'Emily "Lights Out" White',
    role: 'Youth Program Coordinator',
    image: PlaceHolderImages.find(img => img.id === 'team-5'),
  },
    {
    name: 'Chris "The Strategist" Lee',
    role: 'Assistant Coach',
    image: PlaceHolderImages.find(img => img.id === 'team-4'),
  },
  {
    name: 'David "The Vision" Chen',
    role: 'Co-Founder',
    image: PlaceHolderImages.find(img => img.id === 'team-6'),
  },
];

export const galleryImages: ImagePlaceholder[] = [];

export const testimonials = [
  {
    name: 'Aarav Sharma',
    role: 'Junior Champion',
    quote: 'JSB Academy is more than a gym; it’s my second home. The coaches taught me discipline, respect, and how to believe in myself. I wouldn’t be the person I am today without them.',
    image: PlaceHolderImages.find(img => img.id === 'testimonial-1'),
  },
  {
    name: 'Priya Patel',
    role: 'Parent',
    quote: 'My son was struggling with confidence. Since joining JSB, I’ve seen a complete transformation. He’s focused, responsible, and has a positive outlook on life. This place is truly special.',
    image: PlaceHolderImages.find(img => img.id === 'testimonial-2'),
  },
  {
    name: 'Rohan Singh',
    role: 'Former Student, Now Mentor',
    quote: 'This academy saved me. It gave me a purpose and a community that felt like family. Now, I’m proud to give back and mentor the next generation of fighters who walk through these doors.',
    image: PlaceHolderImages.find(img => img.id === 'testimonial-3'),
  }
];
