
import ReportsPageClient from '@/components/reports/reports-page-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Impact | JSB Boxing Academy',
};

export default function ReportsPage() {
    return (
        <>
            <ReportsPageClient />
        </>
    );
}
