import AnimatedBackground from '@/components/AnimatedBackground';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Mockup3D from '@/components/Mockup3D';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-dark-bg">
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <Features />
      <Mockup3D />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
