
import ContactPageClient from '@/components/contact/contact-page-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | JSB Boxing Academy',
};

export default function ContactPage() {
    return (
        <>
            <ContactPageClient />
        </>
    );
}
