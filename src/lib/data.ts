
import { Facebook, Instagram, Youtube } from 'lucide-react';
import placeholderData from './placeholder-images.json';
import type { ImagePlaceholder } from './placeholder-images';

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reports', label: 'Reports' },
];

export const socialLinks = [
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Youtube, label: 'YouTube' },
];

const { placeholderImages: PlaceHolderImages } = placeholderData;

export interface TeamMember {
    name: string;
    role: string;
    image?: ImagePlaceholder;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'John "The Iron Fist" Doe',
    role: 'Head Coach & Founder',
    image: PlaceHolderImages.find(img => img.id === 'team-1'),
  },
  {
    name: 'Jane "Swift" Smith',
    role: 'Senior Trainer & Former Fighter',
    image: PlaceHolderImages.find(img => img.id === 'team-2'),
  },
  {
    name: 'Mike "The Rock" Johnson',
    role: 'Lead Fighter',
    image: PlaceHolderImages.find(img => img.id === 'team-3'),
  },
  {
    name: 'Emily "Lights Out" White',
    role: 'National Champion Fighter',
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
   {
    name: 'Aarav "The Dynamo" Sharma',
    role: 'Junior Champion Fighter',
    image: PlaceHolderImages.find(img => img.id === 'testimonial-1'),
  }
];

export const testimonials = [
  {
    name: 'Vijendra Kumar Nagar',
    role: 'Businessman, Donator',
    quote: 'Supporting JSB Boxing Academy is inspiring—seeing underprivileged kids grow confident and disciplined, knowing my donation helps shape real champions, brings me immense joy.',
    image: PlaceHolderImages.find(img => img.id === 'testimonial-new-supporter'),
  },
  {
    name: 'Sunita Sharma',
    role: 'Local Business Owner',
    quote: 'Every contribution, big or small, goes directly to training and equipment for the kids. That’s what makes JSB Boxing Academy truly impactful.',
    image: PlaceHolderImages.find(img => img.id === 'testimonial-new-supporter'),
  },
  {
    name: 'Parth Chopra',
    role: 'Individual donor and Mentor',
    quote: 'JSB Boxing Academy is a wonderful initiative! Helping kids discover strength and confidence, while my contribution makes a real impact and is 80G tax-beneficial, feels truly rewarding.',
    image: PlaceHolderImages.find(img => img.id === 'testimonial-parth'),
  }
];

    
    
