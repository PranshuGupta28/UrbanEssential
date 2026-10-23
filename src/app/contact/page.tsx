import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { ContactSection } from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Talk to Urban Essential on WhatsApp, phone or email, or send a request for a free consultation and quote.',
  alternates: { canonical: '/contact' }
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let us take your business online" sub="Message us on WhatsApp for the fastest reply." />
      <ContactSection withHeading={false} />
    </>
  );
}
