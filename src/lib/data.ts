
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

export const testimonials = [
  {
    name: 'Amit Verma',
    role: 'Corporate Donor',
    quote: 'I’ve supported many causes, but JSB Boxing Academy truly stands out. Seeing children from underprivileged backgrounds grow confident, disciplined, and full of dreams is inspiring. Knowing my donation is helping shape real champions gives me immense satisfaction.',
    image: PlaceHolderImages.find(img => img.id === 'testimonial-1'),
  },
  {
    name: 'Rohit Sharma',
    role: 'Individual Donor',
    quote: 'This is a really nice initiative! I’ve seen how JSB Boxing Academy is helping kids from humble backgrounds discover their strength and confidence. The best part is that my contribution doesn’t just make a difference — it’s also eligible for tax benefits under 80G. It feels good to give where it truly matters.',
    image: PlaceHolderImages.find(img => img.id === 'testimonial-2'),
  },
  {
    name: 'Rohan Singh',
    role: 'Former Student, Now Mentor',
    quote: 'It doesn’t matter how much you give — every single contribution goes directly towards the training and equipment for the kids at the academy. That’s what I love about JSB Boxing Academy — 100% of what you give creates real impact.',
    image: PlaceHolderImages.find(img => img.id === 'testimonial-3'),
  }
];
