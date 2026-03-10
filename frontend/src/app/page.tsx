'use client';

import LandingNavbar from '@/components/landing/LandingNavbar';
import HeroSection from '@/components/landing/HeroSection';
import BenefitsSection from '@/components/landing/BenefitsSection';
import PriorityPreview from '@/components/landing/PriorityPreview';
import WorkflowSection from '@/components/landing/WorkflowSection';
import DashboardPreview from '@/components/landing/DashboardPreview';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <LandingNavbar />
      <HeroSection />
      <BenefitsSection />
      <PriorityPreview />
      <WorkflowSection />
      <DashboardPreview />
      <CTASection />
      <Footer />
    </main>
  );
}
