'use client';

import Header from '@/components/core-shift/Header';
import HeroSection from '@/components/core-shift/HeroSection';
import BuiltForEveryone from '@/components/core-shift/BuiltForEveryone';
import TimelineDemo from '@/components/core-shift/TimelineDemo';
import Integrations from '@/components/core-shift/Integrations';
import Testimonials from '@/components/core-shift/Testimonials';
import FlickeringFooter from '@/components/ui/flickering-footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <BuiltForEveryone />
        <TimelineDemo />
        <Integrations />
        <Testimonials />
      </main>
      <FlickeringFooter />
    </div>
  );
}
