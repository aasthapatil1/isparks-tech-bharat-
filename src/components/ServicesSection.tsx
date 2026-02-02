import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import iconChatbot from '@/assets/icon-chatbot.png';
import iconInvoice from '@/assets/icon-invoice.png';
import iconWebdev from '@/assets/icon-webdev.png';
import iconSemiconductor from '@/assets/icon-semiconductor.png';
import iconAppdev from '@/assets/icon-appdev.png';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'AI CHATBOT',
    image: iconChatbot,
    position: 'top-left',
    hasPlans: true,
  },
  {
    title: 'DOC-AI EXTRACTION',
    image: iconInvoice,
    position: 'bottom-left',
    hasPlans: false,
  },
  {
    title: 'WEBSITE DEVELOPMENT',
    image: iconWebdev,
    position: 'bottom-right',
    hasPlans: false,
  },
  {
    title: 'SEMICONDUCTOR TESTING SOFTWARE',
    image: iconSemiconductor,
    position: 'center',
    hasPlans: false,
  },
  {
    title: 'APP DEVELOPMENT',
    image: iconAppdev,
    position: 'center',
    hasPlans: false,
  },
];

const chatbotPlans = [
  {
    name: 'BASIC PLAN',
    price: '₹9,999',
    features: [
      'Rule-based chatbot',
      'Website integration',
      'Analytics',
      '1 language',
      '2,000 messages',
    ],
    note: 'Add-ons and extra features billed separately.',
    recommended: false,
  },
  {
    name: 'STANDARD AI PLAN',
    price: '₹24,999',
    features: [
      'AI chatbot',
      '20-document knowledge base',
      'Persona customization',
      '3 languages',
      'API & analytics',
      'Human handoff',
    ],
    note: 'Recommended for small teams and advanced support.',
    recommended: true,
  },
  {
    name: 'BUSINESS ADVANCED',
    price: '₹49,999',
    features: [
      'Unlimited flows',
      '50 documents',
      '30,000 messages',
      'CRM integrations',
      'Team analytics & automation',
      'Multi-channel deployment',
    ],
    note: 'Custom enterprise terms available.',
    recommended: false,
  },
];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPlansModal, setShowPlansModal] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Enquiry form state
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCardClick = (hasPlans: boolean) => {
    if (hasPlans) {
      setShowPlansModal(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEnquiryForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppRedirect = (type: 'rfq' | 'enquiry') => {
    const phoneNumber = '6582154249';
    const { name, email, phone, company, message } = enquiryForm;
    
    let text = '';
    if (type === 'rfq') {
      text = `Hi, I would like to Request a Quote for AI Chatbot Services.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nMessage: ${message}`;
    } else {
      text = `Hi, I have an enquiry about AI Chatbot Services.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nMessage: ${message}`;
    }
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-transparent">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Our <span className="text-yellow-300">AI-enabled</span> IT Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="relative max-w-7xl mx-auto">
          {/* Desktop Layout - Single row */}
          <div className="hidden lg:grid grid-cols-5 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                isVisible={isVisible}
                delay={index * 100}
                onClick={() => handleCardClick(service.hasPlans)}
              />
            ))}
          </div>

          {/* Tablet Layout - 3+2 grid */}
          <div className="hidden md:grid lg:hidden grid-cols-3 gap-6 mb-6">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                isVisible={isVisible}
                delay={index * 100}
                onClick={() => handleCardClick(service.hasPlans)}
              />
            ))}
          </div>
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 max-w-md mx-auto">
            {services.slice(3).map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                isVisible={isVisible}
                delay={(index + 3) * 100}
                onClick={() => handleCardClick(service.hasPlans)}
              />
            ))}
          </div>

          {/* Mobile Layout - 2 column grid */}
          <div className="md:hidden grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                isVisible={isVisible}
                delay={index * 100}
                onClick={() => handleCardClick(service.hasPlans)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Chatbot Plans Modal */}
      <Dialog open={showPlansModal} onOpenChange={setShowPlansModal}>
        <DialogContent className="max-w-5xl bg-slate-50 border-0 p-0 max-h-[90vh] overflow-y-auto">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-2xl font-bold text-primary">
              Chatbot Development
            </DialogTitle>
            <p className="text-lg font-semibold text-foreground mt-2">Plans</p>
          </DialogHeader>
          
          <div className="p-6 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {chatbotPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-xl p-6 shadow-sm border ${
                    plan.recommended ? 'border-primary/20' : 'border-gray-100'
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                        Recommended
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground text-sm"> / month</span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-xs text-muted-foreground mt-auto">
                    {plan.note}
                  </p>
                </div>
              ))}
            </div>

            {/* Enquiry Form */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-foreground mb-4">Enquiry Form</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={enquiryForm.name}
                  onChange={handleInputChange}
                  className="bg-slate-50 border-gray-200"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={enquiryForm.email}
                  onChange={handleInputChange}
                  className="bg-slate-50 border-gray-200"
                />
                <Input
                  name="phone"
                  placeholder="Phone Number"
                  value={enquiryForm.phone}
                  onChange={handleInputChange}
                  className="bg-slate-50 border-gray-200"
                />
                <Input
                  name="company"
                  placeholder="Company Name"
                  value={enquiryForm.company}
                  onChange={handleInputChange}
                  className="bg-slate-50 border-gray-200"
                />
              </div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={enquiryForm.message}
                onChange={handleInputChange}
                className="bg-slate-50 border-gray-200 mb-4"
                rows={3}
              />
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => handleWhatsAppRedirect('rfq')}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Request RFQ
                </Button>
                <Button
                  onClick={() => handleWhatsAppRedirect('enquiry')}
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary/10"
                >
                  Submit Enquiry
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

interface ServiceCardProps {
  service: {
    title: string;
    image: string;
    hasPlans: boolean;
  };
  isVisible: boolean;
  delay: number;
  onClick: () => void;
}

const ServiceCard = ({ service, isVisible, delay, onClick }: ServiceCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`service-card rounded-2xl p-8 text-center transition-all duration-500 group cursor-pointer ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-6 flex justify-center">
        <img
          src={service.image}
          alt={service.title}
          className="w-32 h-32 object-contain transition-transform duration-400 group-hover:scale-110"
        />
      </div>
      <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider group-hover:text-primary transition-colors duration-300">
        {service.title}
      </h4>
    </div>
  );
};

export default ServicesSection;
