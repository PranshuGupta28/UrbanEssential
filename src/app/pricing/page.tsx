import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Pricing } from '@/components/Pricing';
import { WhyUs, FAQ } from '@/components/Sections';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple rupee pricing for local businesses: Digital Starter, Business, Growth and Custom. One-time setup plus a small monthly fee.',
  alternates: { canonical: '/pricing' }
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Simple prices in rupees" sub="No hidden costs. Third-party charges are always shown separately." />
      <Pricing />
      <WhyUs />
      <FAQ />
    </>
  );
}
