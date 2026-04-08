'use client';

import Header from '@/components/core-shift/Header';
import HeroSection from '@/components/core-shift/HeroSection';
import BuiltForEveryone from '@/components/core-shift/BuiltForEveryone';
import Integrations from '@/components/core-shift/Integrations';
import Testimonials from '@/components/core-shift/Testimonials';
import Footer from '@/components/core-shift/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Main Container */}
      <div className="mx-auto max-w-[1200px] rounded-3xl bg-white shadow-[0_0_40px_rgba(0,0,0,0.06)]">
        <Header />
        <main>
          <HeroSection />
          <BuiltForEveryone />
          <Integrations />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </div>
  );
}
