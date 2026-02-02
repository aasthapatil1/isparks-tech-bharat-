import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TechMarquee from '@/components/TechMarquee';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import ServicesStrip from '@/components/ServicesStrip';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ProcessSection from '@/components/ProcessSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const Index = () => {
  return (
    <>
      {/* Fixed AI Background */}
      <div className="ai-background" />
      
      <div className="relative min-h-screen">
        {/* Sticky Header */}
        <Header />

        {/* Hero Section */}
        <HeroSection />

        {/* Tech Marquee */}
        <TechMarquee />

        {/* About Section */}
        <AboutSection />

        {/* Stats Section */}
        <StatsSection />

        {/* Services Strip */}
        <ServicesStrip />

        {/* Services Section */}
        <ServicesSection />

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* Process Section */}
        <ProcessSection />

        {/* CTA Section */}
        <CTASection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />

        {/* Floating Buttons (WhatsApp + Chatbot) */}
        <FloatingButtons />
      </div>
    </>
  );
};

export default Index;
