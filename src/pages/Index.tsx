import WorldMapCanvas from "@/components/WorldMapCanvas";
import HeroContent from "@/components/HeroContent";
import IndustriesTicker from "@/components/IndustriesTicker";
import LicenseCategories from "@/components/LicenseCategories";
import OurServicesSection from "@/components/OurServicesSection";
import JurisdictionComparison from "@/components/sections/JurisdictionComparison";
import ProcessSection from "@/components/ProcessSection";
import JurisdictionsSection from "@/components/JurisdictionsSection";
import MarketplaceTeaser from "@/components/MarketplaceTeaser";
import StatsBar from "@/components/StatsBar";
import PartnersSection from "@/components/PartnersSection";
import ContactCTA from "@/components/ContactCTA";
import SectionDivider from "@/components/SectionDivider";

const Index = () => (
  <div>
    {/* ══════════ HERO ══════════ */}
    <section className="relative overflow-hidden" style={{ background: "#080808", height: "88vh" }}>
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

      {/* Noise overlay */}
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

    {/* bg: #0d0d0d */}
    <LicenseCategories />
    <SectionDivider />

    {/* bg: #111111 */}
    <ProcessSection />
    <SectionDivider />

    {/* bg: #0d0d0d */}
    <OurServicesSection />
    <SectionDivider />

    {/* bg: #111111 */}
    <JurisdictionComparison />
    <SectionDivider />

    {/* bg: #0d0d0d */}
    <JurisdictionsSection />
    <SectionDivider />

    {/* bg: #111111 */}
    <MarketplaceTeaser />
    <SectionDivider />

    {/* bg: #080808 */}
    <StatsBar />
    <SectionDivider />

    {/* bg: #0d0d0d */}
    <PartnersSection />
    <SectionDivider />

    {/* bg: #080808 */}
    <ContactCTA />
  </div>
);

export default Index;
