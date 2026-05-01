import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MicroParticles from "@/components/MicroParticles";

/* ── reusable visual effects ── */
const ScanSweep = () => (
  <div
    className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full"
    style={{
      background: "linear-gradient(90deg,transparent,rgba(68,76,231,0.04),transparent)",
      transition: "transform 0.6s ease",
    }}
  />
);
const CornerAccent = () => (
  <>
    <span className="pointer-events-none absolute top-0 left-0 w-4 h-px bg-[#444CE7]/40" />
    <span className="pointer-events-none absolute top-0 left-0 h-4 w-px bg-[#444CE7]/40" />
  </>
);

const AffiliatePage = () => {
  /* ── SEO ── */
  useEffect(() => {
    const prev = document.title;
    document.title = "Become a Partner — Affiliate Program | Incluence";
    const setMeta = (n: string, c: string) => {
      let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); }
      el.content = c;
    };
    const setProp = (p: string, c: string) => {
      let el = document.querySelector(`meta[property="${p}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); }
      el.content = c;
    };
    setMeta("description", "Join the Incluence Partner Program. Earn up to 20% commission on every referred client. Work with FinTech, Crypto, Gambling and Forex licensing projects.");
    setMeta("keywords", "affiliate program, partner program, referral commission, fintech affiliate, licensing referral");
    setProp("og:title", "Become a Partner — Affiliate Program | Incluence");
    setProp("og:description", "Join the Incluence Partner Program. Earn up to 20% commission on every referred client.");
    setProp("og:type", "website");
    let canon = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canon) { canon = document.createElement("link"); canon.rel = "canonical"; document.head.appendChild(canon); }
    canon.href = "https://incluence.com/affiliate-program";

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "affiliate-schema";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Incluence Affiliate Program",
      provider: { "@type": "Organization", name: "Incluence" },
      url: "https://incluence.com/affiliate-program",
    });
    document.head.appendChild(schema);

    return () => {
      document.title = prev;
      document.getElementById("affiliate-schema")?.remove();
    };
  }, []);

  /* ── form state ── */
  const [form, setForm] = useState({ name: "", email: "", company: "", referral: "", message: "" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const inputCls = "w-full bg-[#080808] border border-white/[0.08] focus:border-[#444CE7]/50 text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 outline-none text-[13px]";
  const labelCls = "text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mb-2 block";

  /* ── hero stats ── */
  const STATS = [
    { value: "Up to 20%", cls: "text-[#444CE7] font-semibold", label: "Commission per project" },
    { value: "1–3 days", cls: "text-[#F0EBE0]", label: "To get your manager" },
    { value: "4", cls: "text-[#F0EBE0]", label: "High-risk industries" },
    { value: "Global", cls: "text-[#F0EBE0]", label: "Jurisdiction coverage" },
  ];

  /* ── process steps ── */
  const STEPS = [
    { num: "01", title: "Submit Application", body: "Fill out the partner application. Within 1–3 business days you will receive a personal manager and partnership materials." },
    { num: "02", title: "Refer Clients", body: "Refer companies that need international legal solutions, licenses, or account opening services in any jurisdiction." },
    { num: "03", title: "We Handle Everything", body: "The Incluence team takes care of the entire legal and compliance process. Your client is in professional hands." },
    { num: "04", title: "Receive Your Reward", body: "Receive a fixed commission or a percentage of the transaction value for each successfully completed client project." },
  ];

  /* ── benefits ── */
  const BENEFITS = [
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444CE7" strokeWidth="2" strokeLinecap="square">
          <line x1="19" y1="5" x2="5" y2="19" /><circle cx="6.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" />
        </svg>
      ),
      title: "Up to 20% Commission",
      body: "Fixed commission or percentage of each project value. High-ticket licensing projects mean substantial earnings per referral.",
    },
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444CE7" strokeWidth="2" strokeLinecap="square">
          <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      title: "Transparent Reporting",
      body: "Personal client management dashboard with transparent reporting on all referred clients and earned commissions.",
    },
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444CE7" strokeWidth="2" strokeLinecap="square">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "High-Risk Industries",
      body: "Work with Crypto, FinTech, Gambling, eCom, Forex and SaaS — sectors where licensing deals are high-value and in constant demand.",
    },
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444CE7" strokeWidth="2" strokeLinecap="square">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
      title: "Marketing Support",
      body: "Receive support and materials from our marketing team to help you attract and convert the right clients.",
    },
  ];

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* ═══ SECTION 1 — HERO ═══ */}
      <section className="relative overflow-hidden" style={{ background: "#080808", padding: "88px 48px" }}>
        {/* dot-grid */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: "radial-gradient(rgba(68,76,231,0.045) 1px,transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 z-[1]">
          <MicroParticles />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto grid grid-cols-12 gap-12 items-center">
          {/* left */}
          <div className="col-span-12 lg:col-span-7">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Partner Program</span>
            <h1
              className="font-light text-[#F0EBE0] mb-6"
              style={{ fontSize: "clamp(38px,5vw,64px)", lineHeight: 1.1 }}
            >
              Become a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#444CE7] to-[#6E78FF]">Partner</span>
              <br />and Earn
            </h1>
            <p className="text-[15px] text-[#9A9590] max-w-[480px] mb-10 leading-[1.8]">
              Join the Incluence Partner Program to help companies launch their
              businesses in the EU, CIS, the UK, Malta, Cyprus, and other jurisdictions
              — and receive a reward for every client you refer.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#444CE7] text-white text-[13px] font-medium px-7 py-3 hover:bg-[#3940c1] transition-colors"
            >
              Become a Partner →
            </Link>
          </div>

          {/* right — stats grid */}
          <div className="col-span-12 lg:col-span-5">
            <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-2 gap-px">
              {STATS.map((s, i) => (
                <div key={i} className="bg-[#080808] p-7 relative overflow-hidden group">
                  <ScanSweep />
                  <div className={`text-[28px] font-light leading-none mb-1 ${s.cls}`}>{s.value}</div>
                  <div className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 — HOW IT WORKS ═══ */}
      <section style={{ background: "#0d0d0d", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Process</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">How the Partner Program Works</h2>
          <p className="text-[14px] text-[#9A9590] max-w-[480px] mb-14 leading-[1.8]">
            A simple four-step process. Submit once, receive a personal manager,
            and start earning on every referral.
          </p>

          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px">
            {STEPS.map((s) => (
              <div key={s.num} className="bg-[#0d0d0d] p-7 group relative overflow-hidden">
                <ScanSweep />
                <div className="text-[11px] text-[#444CE7] uppercase tracking-[0.1em] mb-3">{s.num}</div>
                <div className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{s.title}</div>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 — BENEFITS ═══ */}
      <section style={{ background: "#111111", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-12">
          {/* left text */}
          <div className="col-span-12 lg:col-span-5">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Partner Benefits</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-6">Why Partner with Incluence</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">
              We work in high-value industries where a single referred client
              can generate significant commission. Our transparent reporting
              and dedicated manager make the program easy to run alongside
              any business.
            </p>
          </div>

          {/* right cards */}
          <div className="col-span-12 lg:col-span-7">
            <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-1 md:grid-cols-2 gap-px">
              {BENEFITS.map((b, i) => (
                <div key={i} className="bg-[#111111] p-7 group relative overflow-hidden">
                  <CornerAccent />
                  <ScanSweep />
                  <div className="mb-4">{b.icon}</div>
                  <div className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{b.title}</div>
                  <p className="text-[13px] text-[#9A9590] leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — CTA FORM ═══ */}
      <section style={{ background: "#080808", padding: "88px 48px" }}>
        <div className="max-w-[640px] mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Join Now</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Ready to Start Earning?</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] mb-10">
            Submit your application below. Our partner manager will contact
            you within 1–3 business days with your personal dashboard access
            and all materials you need to start referring clients.
          </p>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className={labelCls}>Full Name</label>
              <input className={inputCls} placeholder="John Smith" value={form.name} onChange={set("name")} />
            </div>
            <div>
              <label className={labelCls}>Email</label>
              <input className={inputCls} placeholder="john@company.com" value={form.email} onChange={set("email")} />
            </div>
            <div>
              <label className={labelCls}>Company / Website</label>
              <input className={inputCls} placeholder="company.com" value={form.company} onChange={set("company")} />
            </div>
            <div>
              <label className={labelCls}>How do you plan to refer clients?</label>
              <input className={inputCls} placeholder="Direct contacts, marketing..." value={form.referral} onChange={set("referral")} />
            </div>
            <div className="md:col-span-2">
              <label className={labelCls}>Message</label>
              <textarea
                className={`${inputCls} min-h-[90px] resize-none`}
                placeholder="Tell us about your audience, network, or marketing channels..."
                value={form.message}
                onChange={set("message")}
              />
            </div>
            <div className="md:col-span-2 mt-2">
              <button
                type="submit"
                className="w-full bg-[#444CE7] text-white text-[13px] font-medium px-7 py-3 hover:bg-[#3940c1] transition-colors"
              >
                Get Free Consultation →
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AffiliatePage;
