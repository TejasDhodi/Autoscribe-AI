import { Hero } from '@/components/Hero';
import { Navigation } from '@/components/Navigation';
import { HowItWorks } from '@/components/HowItWorks';
import { Features } from '@/components/Features';
import { Stats } from '@/components/Stats';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import './styles/landing.css';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <Navigation />
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
