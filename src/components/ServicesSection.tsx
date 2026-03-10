import { FileText, Building, Scale, Shield, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: FileText, title: "Licensing", desc: "Obtain regulatory licenses for crypto, gambling, Forex, and financial services across 40+ jurisdictions." },
  { icon: Building, title: "Company Incorporation", desc: "Register companies in any jurisdiction with full legal support and nominee services." },
  { icon: Scale, title: "Bank Account Opening", desc: "Secure corporate bank accounts and payment solutions for high-risk industries." },
  { icon: Shield, title: "Compliance & AML", desc: "Build robust compliance frameworks, AML policies, and KYC procedures." },
  { icon: Users, title: "Offshore Solutions", desc: "Establish offshore entities with optimized tax structures and asset protection." },
  { icon: Globe, title: "Legal Advisory", desc: "Expert legal counsel on international business law, contracts, and regulatory matters." },
];

const sectionPad = { padding: "var(--space-24) var(--space-12)" };
const cardPad = { padding: "var(--space-10) var(--space-10)" };

const ServicesSection = () => (
  <>
    <section style={sectionPad}>
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          style={{ marginBottom: "var(--space-16)" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag" style={{ marginBottom: "var(--space-3)" }}>What We Do</div>
          <h2 className="text-display-lg">Comprehensive Legal Services</h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              className="card-hover bg-card"
              style={cardPad}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <svc.icon className="text-primary" size={28} strokeWidth={1.5} style={{ marginBottom: "var(--space-5)" }} />
              <h3 className="text-display-xs" style={{ marginBottom: "var(--space-3)" }}>{svc.title}</h3>
              <p className="text-body-sm text-muted-foreground">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ServicesSection;
