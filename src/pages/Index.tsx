import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import WorldMapCanvas from "@/components/WorldMapCanvas";
import HeroContent from "@/components/HeroContent";
import IndustriesTicker from "@/components/IndustriesTicker";
import LicenseCategories from "@/components/LicenseCategories";
import ServicesSection from "@/components/ServicesSection";
import OurServicesSection from "@/components/OurServicesSection";
import ProcessSection from "@/components/ProcessSection";
import StatsSection from "@/components/StatsSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div>
    {/* ══════════ HERO ══════════ */}
    <section className="relative overflow-hidden" style={{ background: "#080808", height: "85vh" }}>
      <WorldMapCanvas />

      {/* Vignettes — z-index 3 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 3,
          background: [
            "radial-gradient(ellipse 60% 100% at 0% 50%, rgba(8,8,8,0.97) 0%, rgba(8,8,8,0.7) 35%, transparent 58%)",
            "linear-gradient(to top, rgba(8,8,8,1) 0%, rgba(8,8,8,0.97) 3%, rgba(8,8,8,0.9) 7%, rgba(8,8,8,0.78) 12%, rgba(8,8,8,0.6) 18%, rgba(8,8,8,0.4) 24%, rgba(8,8,8,0.2) 31%, rgba(8,8,8,0.08) 38%, transparent 48%)",
            "linear-gradient(to bottom, rgba(8,8,8,0.8) 0%, rgba(8,8,8,0.5) 6%, rgba(8,8,8,0.2) 12%, transparent 20%)",
          ].join(", "),
        }}
      />

      {/* Noise overlay to eliminate gradient banding */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 4,
          opacity: 0.035,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      <HeroContent />
    </section>

    <IndustriesTicker />
    <LicenseCategories />
    <ServicesSection />
    <ProcessSection />
    <StatsSection />
    <PartnersSection />
    <ContactSection />
  </div>
);

export default Index;
