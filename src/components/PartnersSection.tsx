import { motion } from "framer-motion";

/* Inline SVG logos styled to match each brand's identity */
const NebeusLogo = () => (
  <svg width="120" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="14" r="10" stroke="#F0EBE0" strokeWidth="2" fill="none" />
    <circle cx="12" cy="14" r="4" fill="#F0EBE0" />
    <text x="28" y="19" fontFamily="Manrope, sans-serif" fontSize="16" fontWeight="400" fill="#F0EBE0" letterSpacing="0.5">nebeus</text>
  </svg>
);

const B5Logo = () => (
  <svg width="130" height="28" viewBox="0 0 130 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="12" fill="none" stroke="#C89560" strokeWidth="1.5" />
    <text x="8" y="19" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="700" fill="#C89560">5</text>
    <text x="32" y="19" fontFamily="Manrope, sans-serif" fontSize="15" fontWeight="700" fill="#F0EBE0">B5</text>
    <text x="52" y="19" fontFamily="Manrope, sans-serif" fontSize="13" fontWeight="300" fill="#9A9590" letterSpacing="0.5">Exchange</text>
  </svg>
);

const N5BankLogo = () => (
  <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="4" width="24" height="24" rx="0" fill="none" stroke="#4F6AFF" strokeWidth="1.5" />
    <path d="M6 22 L6 10 L18 22 L18 10" stroke="#4F6AFF" strokeWidth="2" fill="none" strokeLinecap="square" />
    <text x="30" y="21" fontFamily="Manrope, sans-serif" fontSize="15" fontWeight="600" fill="#F0EBE0" letterSpacing="-0.5">bank</text>
  </svg>
);

const AvitarLogo = () => (
  <svg width="90" height="28" viewBox="0 0 90 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="20" fontFamily="Manrope, sans-serif" fontSize="18" fontWeight="700" fill="#F0EBE0" letterSpacing="1.5">AVITAR</text>
    <circle cx="85" cy="18" r="2.5" fill="#E83B6C" />
  </svg>
);

const partners = [
  { name: "nebeus", domain: "nebeus.com", Logo: NebeusLogo },
  { name: "B5 Exchange", domain: "b5exchange.com", Logo: B5Logo },
  { name: "N5 Bank", domain: "n5bank.com", Logo: N5BankLogo },
  { name: "Avitar", domain: "avitar.legal", Logo: AvitarLogo },
];

const PartnersSection = () => (
  <section className="relative" style={{ background: "#0d0d0d", padding: "64px 48px" }}>
    {/* Dot pattern */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(circle, hsl(233 84% 60% / 0.06) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        opacity: 0.4,
      }}
    />

    <div className="mx-auto max-w-[1280px] relative" style={{ zIndex: 1 }}>
      <div className="section-tag" style={{ marginBottom: 12 }}>Trusted By</div>
      <p style={{ fontSize: 16, color: "#9A9590", marginBottom: 40 }}>
        Our partners and integrations
      </p>

      <div className="flex flex-wrap justify-around items-center" style={{ gap: 48 }}>
        {partners.map((p, i) => (
          <motion.a
            key={p.name}
            href={`https://${p.domain}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-center"
            style={{
              background: "#131313",
              border: "1px solid rgba(255,255,255,0.06)",
              padding: "28px 40px",
              minWidth: 200,
              minHeight: 90,
              filter: "grayscale(100%) brightness(1.8) opacity(0.5)",
              transition: "filter 0.3s, border-color 0.3s",
              cursor: "pointer",
              textDecoration: "none",
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "grayscale(0%) brightness(1) opacity(1)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "grayscale(100%) brightness(1.8) opacity(0.5)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
            }}
          >
            <p.Logo />
            <div style={{ fontSize: 11, color: "#5A5550", marginTop: 8 }}>{p.domain}</div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
