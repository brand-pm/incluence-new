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
  { value: "1.5–2 mo", label: "Registration Timeline" },
  { value: "EU + Offshore", label: "Jurisdictions" },
  { value: "5 steps", label: "Registration Process" },
  { value: "Remote", label: "Available" },
];

const USE_CASES = [
  { title: "Third-Party Fund Management", body: "Effective management of third-party funds." },
  { title: "Asset Protection", body: "Protection of personal assets." },
  { title: "Capital Raising", body: "Raising capital from private individuals and professional investors." },
  { title: "Ownership Confidentiality", body: "Ensuring confidentiality of ownership of foreign companies, and more." },
];

const STEPS = [
  { num: "01", title: "Consultation with a Registrar", body: "Our team has many years of experience registering funds in different countries, so during the consultation you'll learn what documents are required in a given jurisdiction and how to prepare them. Our specialists handle all these procedures for you." },
  { num: "02", title: "Selecting a Management Company", body: "This can be done in two ways: by hiring a professional trustee or engaging an existing company." },
  { num: "03", title: "Finding a Guarantor", body: "Often a bank plays this role. This requires experience in attracting guarantors, sufficient qualifications, and negotiation skills. To make the process easier, we handle this on your behalf." },
  { num: "04", title: "Finding a Broker", body: "This is necessary to operate in securities markets as well as commodity and currency markets. Our specialists will find a licensed broker and perform all legal checks." },
  { num: "05", title: "Attracting Investors", body: "Finding those who will entrust their capital to your hedge fund is the main purpose of creating it. To attract investors, we can recommend PR and marketing experts who understand the processes within hedge funds." },
];

const FAQS = [
  { q: "Hedge Fund in Simple Terms", a: "A hedge fund is an investment fund focused on maximizing profit while minimizing risk. Most often, hedge funds invest in securities." },
  { q: "What are the conditions for opening a hedge fund?", a: "To open a hedge fund, you must choose the country of registration, type of hedge fund, and conditions of its operation. After defining these key elements, you need to appoint specialists to key positions (broker, auditor, guarantor), prepare documents, and submit the registration application." },
  { q: "In which countries do we help open hedge funds?", a: "We assist with hedge fund registration worldwide, including in the EU (Czech Republic, Estonia, Latvia, Malta), offshore jurisdictions (BVI, Cayman Islands, Bahamas), and other locations." },
  { q: "Why do you need a hedge fund?", a: "Hedge funds provide additional opportunities for generating profit through investment or investment management." },
];

const OFFSHORE_LIST = ["Cayman Islands", "BVI", "Belize", "Mauritius", "Bahamas"];
const EU_LIST = ["Czech Republic", "Estonia", "Latvia", "Malta"];

const BASIC_DOCS = [
  "A high-resolution scan of your international passport",
  "Your full residential address, including city/town",
  "A police clearance certificate",
];
const OFFSHORE_DOCS = [
  "A memorandum",
  "The company's articles of association",
  "An investment management agreement",
  "A securities purchase agreement, and more",
];

const HedgeFundPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", jurisdiction: "", fundType: "", investors: "", details: "" });

  useEffect(() => {
    document.title = "Open a Hedge Fund — Start Hedge Fund Registration | Incluence";
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
    setMeta("description", "Open a hedge fund in Cayman Islands, BVI, EU (Czech, Estonia, Malta). Full registration support: management company, broker, guarantor, investor attraction. Incluence.");
    setMeta("keywords", "hedge fund, open hedge fund, hedge fund registration, offshore hedge fund, EU hedge fund");
    setProp("og:title", "Open a Hedge Fund — Start Hedge Fund Registration | Incluence");
    setProp("og:description", "Open a hedge fund in Cayman Islands, BVI, EU. Full registration support from Incluence.");
    setProp("og:type", "website");
    setProp("og:url", "https://incluence.com/open-a-hedge-fund");
    let canon = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canon) { canon = document.createElement("link"); canon.rel = "canonical"; document.head.appendChild(canon); }
    canon.href = "https://incluence.com/open-a-hedge-fund";
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "hedge-schema";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org", "@type": "Service",
      name: "Hedge Fund Registration",
      provider: { "@type": "Organization", name: "Incluence" },
      url: "https://incluence.com/open-a-hedge-fund",
    });
    document.head.appendChild(schema);
    return () => { document.getElementById("hedge-schema")?.remove(); };
  }, []);

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* BREADCRUMB */}
      <div className="bg-[#080808] border-b border-white/[0.06]">
        <div className="max-w-screen-xl mx-auto px-12 py-3 flex items-center gap-2 text-[12px] text-[#5A5550]">
          <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link>
          <span>/</span>
          <span className="text-[#9A9590]">Open a Hedge Fund</span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#080808] py-[88px] px-12">
        <div className="absolute inset-0 z-0" style={DOT_GRID} />
        <div className="absolute inset-0 z-[1]"><MicroParticles /></div>
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-6">— Investment Funds</span>
          <h1 className="font-light text-[#F0EBE0] mb-6" style={{ fontSize: "clamp(36px,5vw,60px)", lineHeight: 1.1 }}>
            Open a <span className="bg-gradient-to-r from-[#444CE7] to-[#6E7BF7] bg-clip-text text-transparent">Hedge Fund</span>
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[500px] mb-10 leading-[1.8]">
            A hedge fund is a private investment vehicle for specific investors. Such funds are generally not subject to strict regulation and are not accessible to a wide range of individuals. At the same time, hedge funds are often used for effective management of third-party funds, protection of personal assets, raising capital from private individuals and professional investors, ensuring confidentiality of ownership of foreign companies, and more.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3B41C9] transition-colors">
            Get Free Consultation →
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

      {/* SECTION 2 — WHY HEDGE FUND */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Use Cases</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Why Create a Hedge Fund</h2>
          <p className="text-[14px] text-[#9A9590] mb-10 max-w-[500px] leading-[1.8]">
            A hedge fund is a private investment vehicle for specific investors. Such funds are generally not subject to strict regulation and are not accessible to a wide range of individuals. At the same time, hedge funds are often used for:
          </p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-4 gap-px">
            {USE_CASES.map(u => (
              <div key={u.title} className="bg-[#0d0d0d] p-6 relative overflow-hidden group">
                <ScanSweep />
                <div className="relative z-10">
                  <div className="text-[14px] font-semibold text-[#F0EBE0] mb-2">{u.title}</div>
                  <div className="text-[13px] text-[#9A9590] leading-relaxed">{u.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — JURISDICTIONS */}
      <section className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Where to Register</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-10">Offshore vs EU Jurisdictions</h2>
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-6">
              <div className="bg-[#080808] border border-white/[0.06] p-7 relative overflow-hidden group h-full">
                <CornerAccent /><ScanSweep />
                <div className="relative z-10">
                  <div className="text-[16px] font-semibold text-[#F0EBE0] mb-3">Offshore Jurisdictions</div>
                  <p className="text-[13px] text-[#9A9590] leading-[1.85] mb-4">
                    The most common option is offshore jurisdictions — Cayman Islands, Belize, Mauritius, etc. These jurisdictions are popular for hedge funds, so registration procedures there are simplified. Generally more lenient requirements, and opening and maintaining a fund there is often cheaper than in Europe or the United States. In some cases, you don't need to visit the country in person.
                  </p>
                  <div className="space-y-1">
                    {OFFSHORE_LIST.map(j => (
                      <div key={j} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#444CE7]" />
                        <span className="text-[12px] text-[#9A9590]">{j}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="bg-[#080808] border border-white/[0.06] p-7 relative overflow-hidden group h-full">
                <CornerAccent /><ScanSweep />
                <div className="relative z-10">
                  <div className="text-[16px] font-semibold text-[#F0EBE0] mb-3">EU Jurisdictions</div>
                  <p className="text-[13px] text-[#9A9590] leading-[1.85] mb-4">
                    If you are interested in Europe, they will explain the specific features of various EU countries where funds can be registered. This allows you to attract European investors who may not be keen on offshore jurisdictions but are willing to work with European hedge funds. The choice of country determines the registration requirements, costs, and timelines.
                  </p>
                  <div className="space-y-1">
                    {EU_LIST.map(j => (
                      <div key={j} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#444CE7]" />
                        <span className="text-[12px] text-[#9A9590]">{j}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PROCESS */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Registration Process</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">How Hedge Fund Registration Works</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[480px] leading-[1.8]">
            The fund registration process may vary depending on the country, but there are several common steps you will need to follow when opening a hedge fund.
          </p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
            {STEPS.map(s => (
              <div key={s.num} className="bg-[#0d0d0d] p-7 relative overflow-hidden group">
                <ScanSweep />
                <div className="relative z-10">
                  <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.1em] mb-2 block">{s.num}</span>
                  <div className="text-[15px] font-semibold text-[#F0EBE0] mb-3">{s.title}</div>
                  <div className="text-[13px] text-[#9A9590] leading-relaxed">{s.body}</div>
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
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-10">What Documents Are Required</h2>
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-7">
              <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-5">
                Requirements differ across jurisdictions, but some general rules apply. You will typically need at least the following documents:
              </p>
              <div className="space-y-3 mb-6">
                {BASIC_DOCS.map(d => (
                  <div key={d} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-[#444CE7] shrink-0" />
                    <span className="text-[13px] text-[#9A9590]">{d}</span>
                  </div>
                ))}
              </div>
              <p className="text-[14px] text-[#F0EBE0] font-semibold mt-6 mb-3">If you are interested in setting up a hedge fund in an offshore jurisdiction, additional documents may be required, such as:</p>
              <div className="space-y-3">
                {OFFSHORE_DOCS.map(d => (
                  <div key={d} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-[#444CE7] shrink-0" />
                    <span className="text-[13px] text-[#9A9590]">{d}</span>
                  </div>
                ))}
              </div>
              <p className="text-[12px] text-[#5A5550] italic mt-4">
                Please note that the above are just the basic documents. Depending on the chosen jurisdiction and other circumstances, additional paperwork may be necessary. For guidance, we recommend consulting our managers.
              </p>
            </div>
            <div className="col-span-5">
              <div className="bg-[#080808] border border-white/[0.06] p-7 relative overflow-hidden group">
                <ScanSweep />
                <div className="relative z-10">
                  <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Cost & Timeline</span>
                  <p className="text-[14px] font-semibold text-[#F0EBE0] mb-3">How Much Does It Cost?</p>
                  <p className="text-[13px] text-[#9A9590] leading-relaxed mb-4">
                    There is no universal answer, since each fund is unique. In offshore jurisdictions, minimum capital requirements are lower than in the US or EU, but you must also account for taxes and additional expenses when establishing a fund. For example, hedge funds often require various services such as accounting, auditing, administrative support, and more. In addition, you must pay government fees, which vary depending on the jurisdiction of registration.
                  </p>
                  <p className="text-[13px] text-[#9A9590] leading-relaxed">
                    If you want precise information on the cost of opening a hedge fund, our managers are always ready to assist. We provide comprehensive consulting and legal services, prepare and process all necessary documents, and register the fund in the jurisdiction of your choice. On average, registration takes 1.5–2 months, but timelines may vary. Please clarify during consultation.
                  </p>
                  <Link to="/contact" className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3B41C9] transition-colors">
                    Get Free Consultation →
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
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-10">Frequently Asked Questions</h2>
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
            <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Open Your Hedge Fund</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">
              Contact our specialists to discuss jurisdiction, fund structure, and investor strategy.
            </p>
          </div>
          <div className="col-span-7">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Full Name" className="bg-[#111111] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input value={form.jurisdiction} onChange={e => setForm({ ...form, jurisdiction: e.target.value })} placeholder="Target Jurisdiction" className="bg-[#111111] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input value={form.fundType} onChange={e => setForm({ ...form, fundType: e.target.value })} placeholder="Fund Type" className="bg-[#111111] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input value={form.investors} onChange={e => setForm({ ...form, investors: e.target.value })} placeholder="Target Investors" className="bg-[#111111] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors" />
            </div>
            <textarea value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} placeholder="Describe your fund goals — investment strategy, capital size, investor base..." rows={4} className="w-full bg-[#111111] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors resize-none mb-4" />
            <button className="bg-[#444CE7] text-white text-[13px] font-medium px-8 py-3 hover:bg-[#3B41C9] transition-colors">
              Get Free Consultation →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HedgeFundPage;
