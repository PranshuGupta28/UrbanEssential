import type { Metadata } from 'next';
import { Audit } from '@/components/Audit';

export const metadata: Metadata = {
  title: 'Free Business Digital Score',
  description: 'Get a free score out of 100 for how visible your business is online, with clear next steps and a recommended plan.',
  alternates: { canonical: '/audit' }
};

export default function Page() {
  return <Audit />;
}
