import type { Metadata } from 'next';
import { Legal } from '@/components/Legal';

export const metadata: Metadata = { title: 'Terms of Service', description: 'The terms for using the Urban Essential website and services.', alternates: { canonical: '/terms' } };

export default function Page() {
  return (
    <Legal title="Terms of Service" items={[
      { h: 'Our services', p: 'We build, manage and help grow websites and online tools for local businesses. The scope, timeline and price of each project are confirmed in writing before work starts.' },
      { h: 'Prices', p: 'Prices on this site are starting prices. Third-party charges such as domain, payment gateway fees, WhatsApp API, AI usage, SMS or email and advertising budgets are billed separately.' },
      { h: 'No guaranteed results', p: 'We do not guarantee sales, rankings or traffic. We commit to a clear process and report on measurable results.' },
      { h: 'Your content and data', p: 'You own your domain, content and customer data. You can export your data at any time.' }
    ]} />
  );
}
