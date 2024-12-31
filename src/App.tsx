import { motion } from 'framer-motion';
import Hero3D from './components/Hero3D';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import CustomCursor from './components/CustomCursor';
import StatsSection from './components/StatsSection';
import FeaturesGrid from './components/FeaturesGrid';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import HeroContent from './components/HeroContent';
import MissionStatement from './components/hero/MissionStatement';
import DashboardPreview from './components/admin/DashboardPreview';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50">
      <CustomCursor />
      <Navbar />
      
      <main>
        <section className="relative pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <HeroContent />
              <div className="relative h-[600px]">
                <Hero3D />
              </div>
            </div>
          </div>
        </section>

        <MissionStatement />
        <StatsSection />
        <DashboardPreview />
        <FeaturesGrid />
        <Testimonials />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}