import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    num: "/01", title: "Company Formation & Structuring",
    desc: "Offshore and onshore company registration with optimal holding structures for tax efficiency and asset protection.",
    tags: ["Company", "Holding", "Offshore"],
  },
  {
    num: "/02", title: "Licensing & Regulatory Approval",
    desc: "Full-cycle license acquisition: preparation, filing, authority communication, and license maintenance.",
    tags: ["License", "Regulatory", "Compliance"],
  },
  {
    num: "/03", title: "Tax Structuring",
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

const ServiceCard = ({ svc, i }: { svc: typeof services[0]; i: number }) => (
  <motion.div
    className="group relative overflow-hidden"
    style={{ background: "#080808", padding: "36px 32px", transition: "background 0.3s" }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: i * 0.08 }}
    onMouseEnter={(e) => (e.currentTarget.style.background = "#0d0d0d")}
    onMouseLeave={(e) => (e.currentTarget.style.background = "#080808")}
  >
    {/* Bottom accent border */}
    <div
      className="absolute bottom-0 left-0 w-full h-[2px]"
      style={{
        background: "#444CE7", transform: "scaleX(0)", transformOrigin: "left",
        transition: "transform 0.35s ease",
      }}
      ref={(el) => {
        if (!el) return;
        const parent = el.parentElement!;
        parent.addEventListener("mouseenter", () => (el.style.transform = "scaleX(1)"));
        parent.addEventListener("mouseleave", () => (el.style.transform = "scaleX(0)"));
      }}
    />

    {/* Top row: number + arrow */}
    <div className="flex items-center justify-between">
      <span style={{ fontSize: 11, fontWeight: 500, color: "#444CE7", letterSpacing: "0.1em" }}>
        {svc.num}
      </span>
      <ArrowRight
        size={18}
        style={{
          color: "#9A9590",
          transition: "transform 0.3s, color 0.3s",
        }}
        className="group-hover:rotate-[-45deg] group-hover:text-foreground"
      />
    </div>

    <h3 style={{ fontSize: 18, fontWeight: 600, color: "#F0EBE0", marginTop: 32, marginBottom: 12 }}>
      {svc.title}
    </h3>
    <p style={{ fontSize: 13, color: "#9A9590", lineHeight: 1.7, marginBottom: 20 }}>
      {svc.desc}
    </p>

    <div className="flex flex-wrap gap-1.5">
      {svc.tags.map((tag) => (
        <span
          key={tag}
          style={{
            fontSize: 11, color: "#5A5550", padding: "3px 8px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const OurServicesSection = () => (
  <section style={{ background: "#080808", padding: "72px 48px" }}>
    <div className="mx-auto max-w-[1280px]">
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
