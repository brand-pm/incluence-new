import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import type { ServiceCardData } from "./ServiceCard";

const services: ServiceCardData[] = [
  {
    num: "/01", title: "Licensing",
    desc: "Full-cycle license acquisition across Crypto / MiCA, EMI, PSP, Forex and Gambling — preparation, filing, regulator communication and ongoing maintenance.",
    tags: ["Crypto/MiCA", "EMI/PSP", "Forex", "Gambling"],
  },
  {
    num: "/02", title: "Company Formation",
    desc: "Onshore and offshore incorporation in EU, UK, USA, Asia and classic offshore jurisdictions — plus ready-made companies for fast market entry.",
    tags: ["EU", "Non-EU", "Offshore", "Ready-Made"],
  },
  {
    num: "/03", title: "Banking & Merchant Accounts",
    desc: "Corporate bank accounts in 20+ countries, merchant accounts for high-risk industries, PSP integrations and crypto-friendly banking partners.",
    tags: ["Banking", "Merchant", "PSP"],
  },
  {
    num: "/04", title: "Investment Funds & Residency",
    desc: "Fund structuring in Luxembourg, Malta, Estonia and Czech Republic. Residence permit programs in Portugal, Cyprus, Dubai and Lithuania.",
    tags: ["Funds", "Hedge Fund", "Residency"],
  },
  {
    num: "/05", title: "AML / KYC Compliance",
    desc: "Anti-money laundering program design, KYC policy development, compliance officer services and regulatory reporting.",
    tags: ["AML", "KYC", "RegTech"],
  },
  {
    num: "/06", title: "Legal Support & Tax Structuring",
    desc: "Ongoing legal counsel, contract drafting, cross-border tax planning, transfer pricing and representation before authorities.",
    tags: ["Legal", "Tax", "Contracts"],
  },
];

const OurServicesSection = () => (
  <section className="relative py-12 px-5 md:py-[72px] md:px-12" style={{ background: "linear-gradient(180deg, #0f1029 0%, #111133 50%, #0f1029 100%)" }}>
    {/* Grid dots pattern */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(circle, hsl(233 84% 60% / 0.08) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        opacity: 0.5,
      }}
    />

    <div className="mx-auto max-w-[1280px] relative" style={{ zIndex: 1 }}>
      <motion.div
        className="mb-10 md:mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag" style={{ marginBottom: 16 }}>Services</div>
        <h2 style={{
          fontFamily: "Manrope, sans-serif", fontWeight: 300,
          color: "#F0EBE0", maxWidth: 560, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16,
          fontSize: "clamp(28px, 5vw, 48px)",
        }}>
          Everything you need to operate globally
        </h2>
      </motion.div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{ gap: 1, background: "rgba(255,255,255,0.06)" }}
      >
        {services.map((svc, i) => (
          <ServiceCard key={svc.num} svc={svc} i={i} />
        ))}
      </div>

      {/* CTA bar */}
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-5 md:px-12 py-6"
        style={{
          background: "#0d0d0d",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          gap: 16,
        }}
      >
        <p style={{ fontSize: 14, color: "#9A9590", margin: 0 }}>
          Need a custom service package for your business?
        </p>
        <Link
          to="/about"
          className="btn-primary inline-flex items-center gap-2"
          style={{ padding: "12px 24px", fontSize: 11, textDecoration: "none" }}
        >
          Get Free Consultation <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  </section>
);

export default OurServicesSection;
