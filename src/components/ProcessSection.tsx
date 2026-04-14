import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProcessFlowCanvas from "./ProcessFlowCanvas";

const steps = [
  {
    num: "01", title: "Discovery & Strategy",
    desc: "We assess your business model, target markets, and regulatory risk profile. You receive a jurisdiction comparison with cost/timeline/risk matrix.",
    duration: "1–2 weeks",
  },
  {
    num: "02", title: "Structure Design",
    desc: "We design the legal and tax structure: holding company, operating entity, licensing entity. Documentation package prepared.",
    duration: "2–3 weeks",
  },
  {
    num: "03", title: "Filing & Licensing",
    desc: "We handle all regulatory submissions, liaise with authorities, respond to queries. You stay informed at every checkpoint.",
    duration: "4–24 weeks",
  },
  {
    num: "04", title: "Launch & Compliance",
    desc: "Once licensed, we open bank and merchant accounts, set up AML/KYC procedures, and provide ongoing compliance retainer.",
    duration: "Ongoing",
  },
];

const ProcessSection = () => (
  <section
    className="relative py-12 px-5 md:py-[72px] md:px-12"
    style={{ background: "#0d0d0d" }}
  >
    <div className="mx-auto max-w-[1280px] relative">
      <ProcessFlowCanvas />
      <motion.div
        className="mb-10 md:mb-[72px]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag" style={{ marginBottom: 12 }}>How It Works</div>
        <h2 style={{
          fontFamily: "Manrope, sans-serif", fontWeight: 300,
          color: "#F0EBE0", maxWidth: 520, marginBottom: 16, lineHeight: 1.15,
          letterSpacing: "-0.02em", fontSize: "clamp(28px, 5vw, 48px)",
        }}>
          From first call to licensed operation
        </h2>
        <p style={{ fontSize: "clamp(14px, 2vw, 16px)", color: "#9A9590", lineHeight: 1.6 }}>
          A structured process refined across 500+ client projects
        </p>
      </motion.div>

      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ gap: 1, background: "rgba(255,255,255,0.06)" }}
      >
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            className="relative overflow-hidden"
            data-step={step.num === "01" ? "1" : step.num === "02" ? "2" : step.num === "03" ? "3" : "4"}
            style={{ background: "#111111", padding: "32px 24px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {/* Ghost number */}
            <span className="step-ghost-num" style={{
              position: "absolute", top: 12, right: 16,
              fontSize: "clamp(56px, 10vw, 80px)", fontWeight: 300, color: "hsl(233 84% 60% / 0.18)", transition: "color 0.3s ease",
              lineHeight: 1, pointerEvents: "none",
            }}>
              {step.num}
            </span>

            <h3 style={{ fontSize: "clamp(16px, 2.5vw, 20px)", fontWeight: 600, color: "#F0EBE0", marginBottom: 12 }}>
              {step.title}
            </h3>
            <p style={{ fontSize: 14, color: "#9A9590", lineHeight: 1.75 }}>
              {step.desc}
            </p>
            <span style={{
              display: "inline-block", marginTop: 20,
              border: "1px solid rgba(68,76,231,0.2)", color: "#6172F3",
              fontSize: 11, padding: "4px 10px", fontWeight: 500,
            }}>
              {step.duration}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        className="flex flex-col items-center"
        style={{ marginTop: 48, gap: 20 }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p style={{ fontSize: 13, color: "#5A5550", textAlign: "center" }}>
          Average full project timeline: 3–6 months depending on jurisdiction
        </p>
        <Link
          to="/about"
          className="btn-secondary inline-flex items-center gap-2"
          style={{ padding: "12px 24px", fontSize: 12, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}
        >
          See detailed process <ArrowRight size={13} />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ProcessSection;
