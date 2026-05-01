import { useEffect } from "react";
import { Link } from "react-router-dom";

const ScanSweep = () => (<span className="pointer-events-none absolute inset-0 z-[5]"><span className="scan-line" /></span>);
const CornerAccent = () => (<span className="pointer-events-none absolute top-0 right-0 w-8 h-8 z-[3]"><span className="absolute top-0 right-0 w-full h-px bg-[#444CE7] opacity-40 group-hover:opacity-80 transition-opacity" /><span className="absolute top-0 right-0 h-full w-px bg-[#444CE7] opacity-40 group-hover:opacity-80 transition-opacity" /></span>);

const DOT_GRID = { backgroundImage: "radial-gradient(rgba(68,76,231,0.045) 1px, transparent 1px)", backgroundSize: "28px 28px" };

const BENEFITS = [
  { title: "Accessibility & Flexibility", body: "The main reason to open an offshore bank account is the accessibility and flexibility of the products. Clients can manage their accounts and conduct financial transactions regardless of location, for example, using online banking." },
  { title: "Confidentiality", body: "Confidentiality of personal data is one of the main reasons individuals and companies choose offshore accounts: the account is highly protected from third parties. Banks do not disclose client information and provide a high level of asset security." },
  { title: "Payment Operations", body: "Companies registered in offshore jurisdictions can open accounts that enable them to conduct payment operations." },
];

const CRITERIA = [
  "Convenient operations. Online banking should be available, allowing remote account management for quick resolution of urgent matters.",
  "Currency choice. Not all offshore accounts can be opened in the desired currency, especially if it's not USD or EUR but less common currencies.",
  "Simple opening procedures. Sometimes opening an offshore account involves numerous requirements regarding documents and client compliance.",
];

const OffshoreBankAccountPage = () => {
  useEffect(() => {
    document.title = "Opening an Offshore Bank Account | Incluence";
    const setMeta = (n: string, c: string) => { let el = document.querySelector(`meta[name="${n}"]`); if (!el) { el = document.createElement("meta"); el.setAttribute("name", n); document.head.appendChild(el); } el.setAttribute("content", c); };
    const setProp = (p: string, c: string) => { let el = document.querySelector(`meta[property="${p}"]`); if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); } el.setAttribute("content", c); };
    setMeta("description", "Open an offshore bank account for your company. Internet banking, currency choice, confidentiality. Document preparation and bank selection by Incluence.");
    setMeta("keywords", "offshore bank account, open offshore account, offshore banking, internet banking offshore");
    setProp("og:title", "Opening an Offshore Bank Account | Incluence");
    setProp("og:description", "Open an offshore bank account for your company. Internet banking, currency choice, confidentiality.");
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = "https://incluence.com/opening-an-offshore-bank-account";
    const schema = document.createElement("script"); schema.type = "application/ld+json"; schema.id = "offshore-bank-schema";
    schema.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Offshore Bank Account Opening", provider: { "@type": "Organization", name: "Incluence" }, url: "https://incluence.com/opening-an-offshore-bank-account" });
    document.head.appendChild(schema);
    return () => { document.getElementById("offshore-bank-schema")?.remove(); };
  }, []);

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* BREADCRUMB */}
      <section className="bg-[#080808] border-b border-white/[0.06]" style={{ padding: "14px 48px" }}>
        <div className="max-w-screen-xl mx-auto flex items-center gap-2 text-[12px] text-[#5A5550]">
          <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link><span>/</span>
          <Link to="/accounts-bank" className="hover:text-[#9A9590] transition-colors">Bank Accounts</Link><span>/</span>
          <span className="text-[#9A9590]">Offshore Bank Account</span>
        </div>
      </section>

      {/* HERO */}
      <section className="bg-[#080808] relative overflow-hidden" style={{ padding: "80px 48px" }}>
        <div className="absolute inset-0 z-0" style={DOT_GRID} />
        <div className="max-w-screen-xl mx-auto relative z-10">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Banking Services</span>
          <h1 className="font-light mb-6" style={{ fontSize: "clamp(34px,5vw,58px)", lineHeight: 1.1 }}>
            Opening an <span className="bg-gradient-to-r from-[#444CE7] to-[#6366F1] bg-clip-text text-transparent">Offshore</span><br />Bank Account
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[500px] mb-10 leading-[1.8]">
            Today, companies registered in offshore jurisdictions can open accounts that enable them to conduct payment operations. Clients' personal data is kept confidential, and anyone can open an offshore account. However, it is important to note that banks' requirements for corporate clients and individuals can vary significantly.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3538CD] transition-colors">Get Free Consultation →</Link>
        </div>
      </section>

      {/* SECTION 2 — BENEFITS */}
      <section className="bg-[#0d0d0d]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Benefits</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Opening an Account for an Offshore Company: Benefits</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[500px] leading-relaxed">Partnering with an offshore bank provides entrepreneurs with a wide range of benefits.</p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-1 md:grid-cols-3 gap-px">
            {BENEFITS.map((b, i) => (
              <div key={i} className="bg-[#0d0d0d] p-7 group relative overflow-hidden">
                <CornerAccent /><ScanSweep />
                <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{b.title}</h3>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — HOW TO OPEN */}
      <section className="bg-[#111111]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Process</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-12">How to Open an Offshore Account</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-5">Each bank sets specific requirements for clients. If you want to open an offshore account at a particular bank, consult our specialists. If necessary, we will help you choose a jurisdiction that meets your requirements and conditions.</p>
              <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-5">An offshore account can only be opened after preparing and submitting: apostilled original corporate documents; notarized copies of passports for the beneficiary and account manager; proof of income sources for the participants and the company as a whole; proof of actual residence for each shareholder and director (e.g., utility bill).</p>
              <p className="text-[14px] text-[#9A9590] leading-[1.85]">This is the minimum set of documents required for legal entities, as opening accounts in offshore banks may have additional requirements. For example, if the bank requests additional documents, they must be prepared and submitted. Otherwise, the offshore account cannot be opened.</p>
            </div>
            <div className="md:col-span-5">
              <div className="bg-[#080808] border border-white/[0.06] p-7 group relative overflow-hidden">
                <ScanSweep />
                <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Bank Selection Criteria</span>
                <p className="text-[14px] font-semibold text-[#F0EBE0] mb-4">We Recommend Banks That Offer:</p>
                <div className="space-y-3">
                  {CRITERIA.map((c, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#444CE7] mt-1.5 flex-shrink-0" />
                      <span className="text-[13px] text-[#9A9590]">{c}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/[0.06]">
                  <p className="text-[12px] text-[#5A5550] italic">Note: offshore account opening timelines can vary, especially if compliance reviews are busy.</p>
                </div>
                <Link to="/contact" className="block w-full text-center bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3538CD] transition-colors mt-4">Get Free Consultation →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — GUARANTEE */}
      <section className="bg-[#0d0d0d]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Important</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-12">Is Offshore Account Opening Guaranteed?</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
              <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-5">Having a bank account for an offshore company offers many advantages, making this service popular. However, there is no guarantee that the account will be opened. The decision is made solely by bank staff, who carefully review all documents and assess potential risks.</p>
              <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-5">Moreover, a bank may close an existing account without explanation, usually if the offshore company conducts illegal business or operates without required licenses.</p>
              <p className="text-[14px] text-[#9A9590] leading-[1.85]">To increase the chances of successfully opening an offshore account, careful preparation is required. Incluence specialists can suggest alternative banks if this improves the likelihood of account approval. If you want to open an offshore account efficiently, our specialists will select optimal options and handle document preparation and submission. Your involvement will be minimal, except in situations where client identification is required by the bank.</p>
            </div>
            <div className="md:col-span-4">
              <div className="bg-[#080808] border border-[#444CE7]/20 p-6 group relative overflow-hidden">
                <ScanSweep />
                <p className="text-[13px] font-semibold text-[#F0EBE0] mb-2">Can an Offshore Account Be Opened Online?</p>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">Currently, very few banks allow remote account registration. If you want to open an offshore account online, the list of available options is significantly reduced. For detailed consultation, contact our company managers, who will help you open an offshore account online and select a suitable country.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#080808]" style={{ padding: "80px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-[600px] mx-auto">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Get Started</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Open Your Offshore Bank Account</h2>
            <p className="text-[14px] text-[#9A9590] leading-relaxed mb-8">Contact us to discuss your offshore banking needs. We'll select the right bank and handle everything.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3538CD] transition-colors">Get Free Consultation →</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OffshoreBankAccountPage;
