
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
    name: 'Bhavya Pratap',
    role: 'Fighter, Asian Championship, Participation',
    image: PlaceHolderImages.find(img => img.id === 'team-2'),
  },
  {
    name: 'Sonam',
    role: 'NIS coach',
    image: PlaceHolderImages.find(img => img.id === 'team-3'),
  },
  {
    name: 'Riya',
    role: 'National Player',
    image: PlaceHolderImages.find(img => img.id === 'team-5'),
  },
  {
    name: 'Jiya',
    role: 'National Player',
    image: PlaceHolderImages.find(img => img.id === 'team-jiya'),
  },
  {
    name: 'Love Sharma',
    role: 'National Player',
    image: PlaceHolderImages.find(img => img.id === 'team-love'),
  },
  {
    name: 'Krish Bhati',
    role: 'National Player',
    image: PlaceHolderImages.find(img => img.id === 'team-krish'),
  },
  {
    name: 'Sachin Kumar',
    role: 'Co-Founder',
    image: PlaceHolderImages.find(img => img.id === 'team-4'),
  },
  {
    name: 'Pramod Kumar',
    role: 'Coach',
    image: PlaceHolderImages.find(img => img.id === 'team-pramod'),
  },
  {
    name: 'Ashok Kumar',
    role: 'Coach',
    image: PlaceHolderImages.find(img => img.id === 'team-ashok'),
  },
  {
    name: 'Pravesh Kumar',
    role: 'Coach',
    image: PlaceHolderImages.find(img => img.id === 'team-pravesh'),
  },
  {
    name: 'Vijendra Kumar Nagar',
    role: 'Businessman, Donator',
    image: PlaceHolderImages.find(img => img.id === 'testimonial-new-supporter'),
  },
  {
    name: 'Dr. Parth Chopra',
    role: 'Resident Doctor, Germany, Donator',
    image: PlaceHolderImages.find(img => img.id === 'testimonial-parth'),
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
    name: 'Dr. Parth Chopra',
    role: 'Resident Doctor, Germany',
    quote: 'JSB Boxing Academy is a wonderful initiative! Helping kids discover strength and confidence, while my contribution makes a real impact and is 80G tax-beneficial, feels truly rewarding.',
    image: PlaceHolderImages.find(img => img.id === 'testimonial-parth'),
  }
];
