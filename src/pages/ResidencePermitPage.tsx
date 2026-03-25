import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import MicroParticles from "@/components/MicroParticles";

const ScanSweep = () => (
  <span className="pointer-events-none absolute inset-0 z-[5]">
    <span className="scan-line" />
  </span>
);

const CornerAccent = () => (
  <span className="pointer-events-none absolute top-0 right-0 w-8 h-8 z-[3]">
    <span className="absolute top-0 right-0 w-full h-px bg-[#444CE7] opacity-40 group-hover:opacity-80 transition-opacity" />
    <span className="absolute top-0 right-0 h-full w-px bg-[#444CE7] opacity-40 group-hover:opacity-80 transition-opacity" />
  </span>
);

const BottomAccent = () => (
  <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#444CE7]/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-[3]" />
);

const DOT_GRID = {
  backgroundImage: "radial-gradient(rgba(68,76,231,0.045) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

const STATS = [
  { value: "4+", label: "Pathways Available" },
  { value: "~1 month", label: "Case Review Time" },
  { value: "Up to 6 mo", label: "Permit Issuance" },
  { value: "Global", label: "Jurisdictions" },
];

const PATHWAYS = [
  { num: "01", title: "Investment", body: "Many countries offer residence permits through investment programs. The essence of such programs is that a foreigner invests a certain amount in the national economy or buys real estate within the country. As a rule, invested funds cannot be withdrawn for several years. Otherwise, the residence permit will be revoked. In the case of real estate, some countries also require that the investor actually reside in the purchased property. Violation of this condition may also lead to cancellation of the permit." },
  { num: "02", title: "Business", body: "Financially independent foreigners may acquire a company in the chosen country or start their own business. If they pay taxes properly and create jobs, their chances of obtaining a residence permit abroad increase significantly. It's important to note that requirements vary by country. For example, in Romania, an entrepreneur must create at least 15 jobs to qualify for a residence permit. All these nuances are taken into account by our experts, who can provide personal consultation and assistance with obtaining a residence permit abroad." },
  { num: "03", title: "Employment", body: "If a foreign company is willing to hire a migrant, this provides grounds for obtaining a residence permit. In such cases, the employer must sign an employment contract clearly outlining the conditions of work. Usually, such permits are issued for 1 year, but they can be renewed multiple times as long as the person remains employed. Residence permits abroad can also be issued to migrants who come for seasonal work." },
  { num: "04", title: "Family Reunification", body: "If a migrant's spouse or close relatives live in a certain country, they can apply for a residence permit based on family reunification. In this case, the migrant must prove the relationship, e.g., by providing a marriage or birth certificate. They may also need to prove financial dependence on relatives or, conversely, that family members depend on them financially. There are many other ways to obtain a residence permit abroad. Contact Incluence experts for detailed information about each option." },
];

const BENEFITS = [
  "Study at educational institutions of the chosen country.",
  "Legally work in local companies.",
  "Open their own business or register as a private entrepreneur.",
  "Receive allowances, social benefits, and legal protection.",
  "Access public and private healthcare services on equal terms with citizens.",
  "Legally reside and move freely within the country for the entire duration of the permit.",
];

const DOCS = [
  "National and/or international passport.",
  "Proof of grounds for obtaining a residence permit (e.g., a university enrollment letter, employment contract, property purchase agreement, etc.).",
  "Police clearance certificate.",
  "Medical examination results. Usually, tests confirming the absence of infectious diseases such as tuberculosis are required.",
  "In some cases, certificates confirming the absence of certain mental illnesses are also necessary.",
];

const TIMELINE = [
  { label: "Case review", value: "~1 month" },
  { label: "Permit issued", value: "Up to 6 months" },
  { label: "Temp. permit", value: "1–2 years (varies)" },
  { label: "Perm. permit", value: "Indefinite, renew every 5 yrs" },
];

const FAQS = [
  { q: "What ways exist to obtain a residence permit abroad?", a: "The most common ways are: investment in the national economy or real estate, starting a business, employment with a local company, family reunification with relatives already residing in the country, and study at a local educational institution. Contact us for details on each option." },
  { q: "What is the difference between a temporary and permanent residence permit?", a: "A temporary residence permit is issued to foreigners for a period that may vary depending on the country's requirements and immigration grounds. A permanent residence permit is issued indefinitely. Migrants only need to renew their card every 5 years. They don't have to reapply for a residence permit. Most foreigners first obtain a temporary residence permit, with which they must live in the country for some time, e.g., 3–5 years. After this period, they can apply for permanent status." },
  { q: "What rights does a residence permit abroad provide?", a: "There are many benefits available to residence permit holders abroad. This permit grants foreigners nearly the same civil rights as citizens. The only restrictions are: they cannot vote or hold government positions. With a residence permit abroad, migrants can study at educational institutions, legally work in local companies, open their own business, receive allowances, social benefits, and legal protection, and access public and private healthcare services on equal terms with citizens." },
  { q: "What documents are required for a residence permit abroad?", a: "At minimum: national and/or international passport, proof of grounds for obtaining a residence permit (e.g., a university enrollment letter, employment contract, property purchase agreement, etc.), police clearance certificate, medical examination results. Usually, tests confirming the absence of infectious diseases such as tuberculosis are required. Documents must be notarized or certified at the embassy of the chosen country. They must also be translated into the relevant foreign language depending on the destination country." },
  { q: "How long does the residence permit process take?", a: "Case review usually takes about 1 month, while the residence permit itself can take up to 6 months to issue. The exact timeframes depend on the country and must be clarified individually." },
];

const ResidencePermitPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", country: "", grounds: "", timeline: "", details: "" });

  useEffect(() => {
    document.title = "Residence Permit Abroad — Get Residence Permit | Incluence";
    const setMeta = (n: string, c: string) => {
      let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); }
      el.content = c;
    };
    const setProp = (p: string, c: string) => {
      let el = document.querySelector(`meta[property="${p}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); }
      el.content = c;
    };
    setMeta("description", "Get a residence permit abroad through investment, business, employment or family reunification. Document preparation and full support from Incluence.");
    setMeta("keywords", "residence permit abroad, get residence permit, residence permit investment, residence permit business, immigration abroad");
    setProp("og:title", "Residence Permit Abroad — Get Residence Permit | Incluence");
    setProp("og:description", "Get a residence permit abroad through investment, business, employment or family reunification.");
    setProp("og:type", "website");
    setProp("og:url", "https://incluence.com/residence-permit-abroad");
    let canon = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canon) { canon = document.createElement("link"); canon.rel = "canonical"; document.head.appendChild(canon); }
    canon.href = "https://incluence.com/residence-permit-abroad";
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "residence-schema";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org", "@type": "Service",
      name: "Residence Permit Abroad",
      provider: { "@type": "Organization", name: "Incluence" },
      url: "https://incluence.com/residence-permit-abroad",
    });
    document.head.appendChild(schema);
    return () => { document.getElementById("residence-schema")?.remove(); };
  }, []);

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* BREADCRUMB */}
      <div className="bg-[#080808] border-b border-white/[0.06]">
        <div className="max-w-screen-xl mx-auto px-12 py-3 flex items-center gap-2 text-[12px] text-[#5A5550]">
          <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link>
          <span>/</span>
          <span className="text-[#9A9590]">Residence Permit Abroad</span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#080808] py-[88px] px-12">
        <div className="absolute inset-0 z-0" style={DOT_GRID} />
        <div className="absolute inset-0 z-[1]"><MicroParticles /></div>
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-6">— Residence Permits</span>
          <h1 className="font-light text-[#F0EBE0] mb-6 max-w-[640px]" style={{ fontSize: "clamp(36px,5vw,60px)", lineHeight: 1.1 }}>
            Residence Permit <span className="bg-gradient-to-r from-[#444CE7] to-[#6E7BF7] bg-clip-text text-transparent">Abroad</span>
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[520px] mb-10 leading-[1.8]">
            If you want to apply for a residence permit abroad, contact us. Incluence experts will handle document preparation, application submission, and provide support at all stages of the procedure. There are several ways to obtain a residence permit — each with its advantages and requirements.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3B41C9] transition-colors">
            Discuss the Project →
          </Link>

          {/* STATS */}
          <div className="mt-12 bg-[rgba(255,255,255,0.06)] grid grid-cols-4 gap-px">
            {STATS.map(s => (
              <div key={s.label} className="bg-[#080808] p-7 relative overflow-hidden group">
                <ScanSweep />
                <div className="text-[22px] font-light text-[#F0EBE0] mb-1">{s.value}</div>
                <div className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — PATHWAYS */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Pathways</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">How to Obtain a Residence Permit Abroad</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[540px] leading-[1.8]">
            There are several ways to obtain a residence permit abroad, each with its advantages and requirements. By meeting the conditions, a foreigner can legalize their stay in the chosen country. Below are some of the most common options.
          </p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-2 gap-px">
            {PATHWAYS.map(p => (
              <div key={p.num} className="bg-[#0d0d0d] p-8 relative overflow-hidden group">
                <CornerAccent /><ScanSweep /><BottomAccent />
                <div className="relative z-10">
                  <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.1em] mb-3 block">{p.num}</span>
                  <div className="text-[17px] font-semibold text-[#F0EBE0] mb-3">{p.title}</div>
                  <div className="text-[13px] text-[#9A9590] leading-[1.85]">{p.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — TYPES */}
      <section className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Types</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-10">Temporary vs Permanent Residence Permit</h2>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-2 gap-px">
            <div className="bg-[#111111] p-8 relative overflow-hidden group">
              <CornerAccent /><ScanSweep />
              <div className="relative z-10">
                <div className="text-[17px] font-semibold text-[#F0EBE0] mb-3">Temporary Residence Permit</div>
                <p className="text-[14px] text-[#9A9590] leading-[1.85]">
                  Issued to foreigners for a period that may vary depending on the country's requirements and immigration grounds. Most often, foreigners first obtain a temporary residence permit, with which they must live in the country for some time, e.g., 3–5 years. After this period, they can apply to the local migration authority for a permanent residence permit.
                </p>
              </div>
            </div>
            <div className="bg-[#111111] p-8 relative overflow-hidden group">
              <CornerAccent /><ScanSweep />
              <div className="relative z-10">
                <div className="text-[17px] font-semibold text-[#F0EBE0] mb-3">Permanent Residence Permit</div>
                <p className="text-[14px] text-[#9A9590] leading-[1.85]">
                  Issued indefinitely. Migrants only need to renew their card every 5 years. They don't have to reapply for a residence permit. Later, they may also become eligible to apply for citizenship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — BENEFITS */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— What It Provides</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Why Obtain a Residence Permit Abroad</h2>
          <p className="text-[14px] text-[#9A9590] mb-10 max-w-[540px] leading-[1.8]">
            There are many benefits available to residence permit holders abroad. This permit grants foreigners nearly the same civil rights as citizens. The only restrictions are: they cannot vote or hold government positions.
          </p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
            {BENEFITS.map(b => (
              <div key={b} className="bg-[#0d0d0d] p-6 relative overflow-hidden group">
                <ScanSweep />
                <div className="flex items-start gap-2 relative z-10">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-[#444CE7] shrink-0" />
                  <span className="text-[14px] text-[#9A9590]">{b}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — DOCUMENTS */}
      <section className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Required Documents</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-10">Documents Required for a Residence Permit</h2>
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-7">
              <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-5">
                To apply for a residence permit abroad, a set of documents must be prepared. The list may vary depending on the chosen country. At a minimum, applicants are usually required to provide:
              </p>
              <div className="space-y-3">
                {DOCS.map(d => (
                  <div key={d} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-[#444CE7] shrink-0" />
                    <span className="text-[13px] text-[#9A9590]">{d}</span>
                  </div>
                ))}
              </div>
              <p className="text-[13px] text-[#5A5550] mt-4 italic">
                As a rule, documents must be notarized or certified at the embassy of the chosen country. They must also be translated into the relevant foreign language depending on the destination country.
              </p>
            </div>
            <div className="col-span-5">
              <div className="bg-[#080808] border border-white/[0.06] p-7 relative overflow-hidden group">
                <ScanSweep />
                <div className="relative z-10">
                  <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Timeline</span>
                  <div className="divide-y divide-white/[0.06] mt-4">
                    {TIMELINE.map(t => (
                      <div key={t.label} className="flex justify-between py-3">
                        <span className="text-[12px] text-[#5A5550]">{t.label}</span>
                        <span className="text-[12px] text-[#9A9590]">{t.value}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[12px] text-[#5A5550] italic mt-4">The exact timeframes depend on the country and must be clarified individually.</p>
                  <Link to="/contact" className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3B41C9] transition-colors">
                    Discuss the Project →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FAQ */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— FAQ</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-10">Frequently Asked Questions</h2>
          <div className="max-w-[720px] space-y-px bg-[rgba(255,255,255,0.06)]">
            {FAQS.map((f, i) => (
              <div key={i} className="bg-[#0d0d0d]">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                  <span className="text-[14px] font-medium text-[#F0EBE0] pr-4">{f.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#444CE7] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-[13px] text-[#9A9590] leading-relaxed">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#080808] py-[80px] px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-5">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Get Started</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Apply for a Residence Permit Abroad</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">
              Contact our specialists to discuss your target country, grounds for residence, and timeline.
            </p>
          </div>
          <div className="col-span-7">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Full Name" className="bg-[#111111] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input value={form.country} onChange={e => setForm({ ...form, country: e.target.value })} placeholder="Target Country" className="bg-[#111111] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input value={form.grounds} onChange={e => setForm({ ...form, grounds: e.target.value })} placeholder="Grounds for Residence" className="bg-[#111111] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input value={form.timeline} onChange={e => setForm({ ...form, timeline: e.target.value })} placeholder="Timeline" className="bg-[#111111] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors" />
            </div>
            <textarea value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} placeholder="Additional details — investment amount, employment status, family situation..." rows={4} className="w-full bg-[#111111] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors resize-none mb-4" />
            <button className="bg-[#444CE7] text-white text-[13px] font-medium px-8 py-3 hover:bg-[#3B41C9] transition-colors">
              Discuss the Project →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResidencePermitPage;
