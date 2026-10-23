import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { BuildManageGrow, FeatureMap, Problem } from '@/components/Sections';
import { DashboardDemo } from '@/components/DashboardDemo';

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Build, Manage, Grow. See how Urban Essential takes a local business from offline to online and helps it grow.',
  alternates: { canonical: '/how-it-works' }
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="How it works" title="From local shop to growing digital business" sub="Three stages, six simple steps, and a team that does the technical work." />
      <Problem />
      <BuildManageGrow />
      <DashboardDemo />
      <FeatureMap />
    </>
  );
}
