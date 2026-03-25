import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceDetailPageProps {
  title: string;
  description: string;
  requirements?: string[];
  faq?: FAQItem[];
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  title,
  description,
  requirements = [],
  faq = [],
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const location = useLocation();

  // Auto breadcrumb from URL
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const breadcrumbLabel = pathSegments[pathSegments.length - 1]
    ?.replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase()) || title;

  return (
    <div className="min-h-screen bg-[#080808] font-manrope">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-[#080808] border-b border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-3">
          <div className="flex items-center gap-2 text-[12px] text-[#5A5550]">
            <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link>
            <span>/</span>
            <span className="text-[#9A9590]">{breadcrumbLabel}</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-[#080808] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <h1 className="text-[clamp(32px,5vw,56px)] font-light text-[#F0EBE0] leading-[1.1] tracking-[-0.02em] mb-6">
            {title}
          </h1>
          <p className="text-[16px] text-[#9A9590] leading-[1.8] max-w-[720px] mb-10">
            {description}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.1em] px-8 py-4 transition-colors"
          >
            Discuss the project →
          </Link>
        </div>
      </section>

      {/* REQUIREMENTS */}
      {requirements.length > 0 && (
        <section className="bg-[#0d0d0d] py-20">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="text-[11px] text-[#5A5550] uppercase tracking-[0.15em] mb-4 flex items-center gap-3">
              <span className="w-5 h-px bg-[#444CE7]" />
              Requirements
            </div>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-10">
              What You'll Need
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(255,255,255,0.06)]">
              {requirements.map((req, i) => (
                <div key={i} className="bg-[#0d0d0d] p-5 flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#444CE7] mt-2 shrink-0" />
                  <span className="text-[14px] text-[#9A9590] leading-[1.7]">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faq.length > 0 && (
        <section className="bg-[#080808] py-20">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="text-[11px] text-[#5A5550] uppercase tracking-[0.15em] mb-4 flex items-center gap-3">
              <span className="w-5 h-px bg-[#444CE7]" />
              FAQ
            </div>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-10">
              Common Questions
            </h2>

            <div className="flex flex-col gap-px bg-[rgba(255,255,255,0.06)]">
              {faq.map((item, i) => (
                <div key={i} className="bg-[#080808]">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="text-[15px] text-[#F0EBE0] font-normal pr-4">
                      {item.question}
                    </span>
                    <span className="text-[20px] text-[#5A5550] shrink-0 w-6 text-center">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <p className="text-[14px] text-[#9A9590] leading-[1.8]">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <ContactCTA />

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
export { ServiceDetailPage };
