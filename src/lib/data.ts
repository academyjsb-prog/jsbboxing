import { Facebook, Instagram, Youtube } from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/gallery', label: 'Gallery' },
];

export const socialLinks = [
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Youtube, label: 'YouTube' },
];

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

export const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));
