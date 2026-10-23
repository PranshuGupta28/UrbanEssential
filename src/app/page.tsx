import { Hero } from '@/components/Hero';
import { BusinessPicker } from '@/components/BusinessPicker';
import { TemplateGallery } from '@/components/TemplateGallery';
import { Problem, BuildManageGrow, FeatureMap, WhyUs, Proof, FAQ } from '@/components/Sections';
import { Audit } from '@/components/Audit';
import { DashboardDemo } from '@/components/DashboardDemo';
import { Pricing } from '@/components/Pricing';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessPicker />
      <TemplateGallery />
      <Problem />
      <BuildManageGrow />
      <Audit />
      <DashboardDemo />
      <FeatureMap />
      <Pricing />
      <WhyUs />
      <Proof />
      <FAQ />
      <ContactSection />
    </>
  );
}
