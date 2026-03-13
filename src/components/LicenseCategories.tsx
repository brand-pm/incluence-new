import { ShieldCheck, Zap, CreditCard, Building, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const cards = [
  {
    num: "01", icon: ShieldCheck, title: "Gambling & Gaming",
    desc: "MGA, Gibraltar, Curaçao, Estonia, Belize — online casino, sports betting, poker platforms",
    count: "12 licenses available", href: "/gamble-license",
  },
  {
    num: "02", icon: Zap, title: "Crypto & Blockchain",
    desc: "VASP, exchange, custody, DeFi — EU regulated and offshore jurisdictions including Estonia, Lithuania, Poland",
    count: "9 licenses available", href: "/cryptocurrency-exchange-license",
  },
  {
    num: "03", icon: CreditCard, title: "EMI & PSP",
    desc: "Electronic Money Institution and Payment Service Provider licenses — UK, Lithuania, Malta, Cyprus",
    count: "8 licenses available", href: "/emi-license",
  },
  {
    num: "04", icon: Building, title: "Company Formation",
    desc: "Offshore and onshore structures — BVI, Cayman, Seychelles, UK, HK, UAE Free Zone, Delaware",
    count: "15 jurisdictions", href: "/offshore-company-formation",
  },
  {
    num: "05", icon: TrendingUp, title: "Investment & Funds",
    desc: "Investment firm licenses, fund registration, asset management — CySEC, CIMA, FSA, Cayman, BVI",
    count: "6 licenses available", href: "/offshore-investment-funds",
  },
];

const LicenseCategories = () => (
  <section style={{ background: "#0d0d0d", padding: "72px 48px" }}>
    <div className="mx-auto max-w-[1280px]">
      <motion.div
        style={{ marginBottom: 64 }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag" style={{ marginBottom: 12 }}>What We License</div>
        <h2 style={{
          fontFamily: "Manrope, sans-serif", fontSize: 48, fontWeight: 300,
          color: "#F0EBE0", maxWidth: 640, marginBottom: 16, lineHeight: 1.15,
          letterSpacing: "-0.02em",
        }}>
          Every license your business needs — in one place
        </h2>
        <p style={{ fontSize: 16, color: "#9A9590", lineHeight: 1.6 }}>
          From regulated EU jurisdictions to efficient offshore structures — we cover the full spectrum.
        </p>
      </motion.div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
        style={{ gap: 1, background: "rgba(255,255,255,0.06)" }}
      >
        {cards.map((card, i) => (
          <Link key={card.num} to={card.href} style={{ textDecoration: "none" }}>
          <motion.div
            className="group relative flex flex-col cursor-pointer overflow-hidden h-full"
            style={{ background: "#0d0d0d", padding: "32px 28px", transition: "background 0.3s" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#111111")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#0d0d0d")}
          >
            <div
              className="absolute bottom-0 left-0 w-full h-[2px]"
              style={{
                background: "#444CE7",
                transform: "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.35s ease",
              }}
              ref={(el) => {
                if (!el) return;
                const parent = el.parentElement!;
                parent.addEventListener("mouseenter", () => (el.style.transform = "scaleX(1)"));
                parent.addEventListener("mouseleave", () => (el.style.transform = "scaleX(0)"));
              }}
            />

            <span style={{ fontSize: 48, fontWeight: 300, color: "rgba(68,76,231,0.2)", lineHeight: 1 }}>
              {card.num}
            </span>
            <card.icon
              size={40} strokeWidth={1.5} color="#444CE7"
              style={{ marginTop: 20 }}
            />
            <h3 style={{ fontSize: 16, fontWeight: 600, color: "#F0EBE0", marginTop: 20, marginBottom: 8 }}>
              {card.title}
            </h3>
            <p style={{ fontSize: 13, color: "#9A9590", lineHeight: 1.6, marginBottom: 20, flex: 1 }}>
              {card.desc}
            </p>
            <span style={{ fontSize: 11, color: "#444CE7", fontWeight: 500 }}>
              {card.count}
            </span>
          </motion.div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default LicenseCategories;
