import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import type { ServiceCardData } from "./ServiceCard";

const services: ServiceCardData[] = [
  {
    num: "/01", title: "International Company Formation & Offshore Structuring",
    desc: "Offshore and onshore company registration with optimal holding structures for tax efficiency and asset protection.",
    tags: ["Company", "Holding", "Offshore"],
  },
  {
    num: "/02", title: "International Licensing & Regulatory Approval",
    desc: "Full-cycle license acquisition: preparation, filing, authority communication, and license maintenance.",
    tags: ["License", "Regulatory", "Compliance"],
  },
  {
    num: "/03", title: "International Tax Structuring & Planning",
    desc: "International tax planning, transfer pricing, substance requirements, and daily tax advisory for global operations.",
    tags: ["Tax", "Planning", "Advisory"],
  },
  {
    num: "/04", title: "Banking & Payment Accounts",
    desc: "Corporate bank account opening in 20+ countries, merchant accounts, PSP connections, and payment infrastructure.",
    tags: ["Banking", "PSP", "Merchant"],
  },
  {
    num: "/05", title: "AML/KYC Compliance",
    desc: "Anti-money laundering program design, KYC policy development, compliance officer services, and regulatory reporting.",
    tags: ["AML", "KYC", "RegTech"],
  },
  {
    num: "/06", title: "Legal Support & Representation",
    desc: "Ongoing legal counsel, contract drafting, regulatory correspondence, and representation before authorities.",
    tags: ["Legal", "Contracts", "Support"],
  },
];

const OurServicesSection = () => (
  <section className="relative" style={{ background: "linear-gradient(180deg, #0f1029 0%, #111133 50%, #0f1029 100%)", padding: "72px 48px" }}>
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
        style={{ marginBottom: 64 }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag" style={{ marginBottom: 12 }}>Services</div>
        <h2 style={{
          fontFamily: "Manrope, sans-serif", fontSize: 48, fontWeight: 300,
          color: "#F0EBE0", maxWidth: 560, lineHeight: 1.15, letterSpacing: "-0.02em",
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
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between"
        style={{
          background: "#0d0d0d",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "24px 48px",
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
          Talk to a specialist <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  </section>
);

export default OurServicesSection;
