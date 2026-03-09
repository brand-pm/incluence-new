import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import WorldMapCanvas from "@/components/WorldMapCanvas";
import HeroContent from "@/components/HeroContent";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import StatsSection from "@/components/StatsSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div>
    {/* ══════════ HERO ══════════ */}
    <section className="relative h-screen overflow-hidden" style={{ background: "#080808" }}>
      <WorldMapCanvas />

      {/* Vignettes — z-index 3 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 3,
          background: [
            "radial-gradient(ellipse 52% 100% at 0% 50%, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.6) 30%, transparent 60%)",
            "linear-gradient(to top, rgba(8,8,8,1) 0%, rgba(8,8,8,0.92) 6%, rgba(8,8,8,0.7) 14%, rgba(8,8,8,0.4) 22%, rgba(8,8,8,0.15) 30%, transparent 42%)",
            "linear-gradient(to bottom, rgba(8,8,8,0.8) 0%, rgba(8,8,8,0.4) 8%, transparent 20%)",
          ].join(", "),
        }}
      />

      <HeroContent />
    </section>

    <ServicesSection />
    <ProcessSection />
    <StatsSection />
    <PartnersSection />
    <ContactSection />
  </div>
);

export default Index;
