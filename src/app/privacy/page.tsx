import type { Metadata } from 'next';
import { Legal } from '@/components/Legal';

export const metadata: Metadata = { title: 'Privacy Policy', description: 'How Urban Essential collects, uses and protects your information.', alternates: { canonical: '/privacy' } };

export default function Page() {
  return (
    <Legal title="Privacy Policy" items={[
      { h: 'What we collect', p: 'Details you send us through forms: name, phone, email, business type and your message. The Free Digital Score form asks about your business. We do not ask for passwords or payment details.' },
      { h: 'How we use it', p: 'To reply to your request, prepare a quote and improve our service. We do not sell your information.' },
      { h: 'Where it is stored', p: 'Form entries are saved in your own browser and sent to us when you choose to send them by WhatsApp or email. If we connect a lead service, we will update this page.' },
      { h: 'Your choices', p: 'You can ask us to delete your information at any time by writing to us.' }
    ]} />
  );
}
