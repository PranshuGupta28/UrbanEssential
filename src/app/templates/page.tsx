import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { TemplateGallery } from '@/components/TemplateGallery';

export const metadata: Metadata = {
  title: 'Website Templates for Local Businesses',
  description: 'Ready-made website and online store templates for salons, restaurants, grocery shops, boutiques, gyms, clinics, home services and more.',
  alternates: { canonical: '/templates' }
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Templates" title="Pick the template made for your business" sub="Ten ready templates for local businesses in India. Preview each one on desktop and mobile." />
      <TemplateGallery standalone />
    </>
  );
}
