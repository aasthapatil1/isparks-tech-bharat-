import { useEffect, useRef, useState } from 'react';
import aboutIllustration from '@/assets/about-illustration.png';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 relative bg-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Badge */}
        <div className="text-center mb-12">
          <span className="pill-badge">ABOUT</span>
        </div>

        {/* Content Container */}
        <div
          className={`about-container p-8 lg:p-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Illustration */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <img
                src={aboutIllustration}
                alt="AI Technology Solutions"
                className="w-full max-w-md mx-auto"
              />
            </div>

            {/* Right - Text Content */}
            <div className="text-white space-y-6">
              <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                iSparks Technologies is an IT services company delivering secure, scalable, and AI-enabled technology solutions. We help organizations improve efficiency, enhance decision-making, and stay competitive through intelligent IT systems designed for today's digital needs.
              </p>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                By combining strong technical expertise with practical business insight, we integrate AI across IT operations to drive automation, performance, and growth. Our focus is on delivering reliable, future-ready IT services that support long-term digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
