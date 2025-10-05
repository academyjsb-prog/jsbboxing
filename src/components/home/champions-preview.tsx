'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ChampionsSection from '@/components/about/champions-section';
import { teamMembers } from '@/lib/data';

export default function ChampionsPreview() {
    const champions = teamMembers.filter(member => member.role.toLowerCase().includes('fighter')).slice(0, 3);

    return (
        <section className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4">
                <ChampionsSection champions={champions} />
                <div className="text-center mt-12">
                    <Button asChild size="lg">
                        <Link href="/about">
                            Meet All Champions <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
