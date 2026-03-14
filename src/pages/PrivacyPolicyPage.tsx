import { useEffect } from "react";
import { Link } from "react-router-dom";

const S = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <>
    <h2 className="text-[16px] font-semibold text-[#F0EBE0] mb-3 mt-10">{title}</h2>
    {children}
  </>
);
const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[14px] text-[#9A9590] leading-[1.85]">{children}</p>
);

const PrivacyPolicyPage = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Privacy Policy — Incluence";
    const setMeta = (n: string, c: string) => {
      let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); }
      el.content = c;
    };
    setMeta("description", "Privacy Notice for Incluence Limited. How we collect, use and protect your personal data in accordance with GDPR.");
    let canon = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canon) { canon = document.createElement("link"); canon.rel = "canonical"; document.head.appendChild(canon); }
    canon.href = "https://incluence.com/privacy-policy";
    return () => { document.title = prev; };
  }, []);

  const INFO_TABLE = [
    ["Name", "D", "User identification"],
    ["Phone number", "D", "Communications"],
    ["Email", "D", "Communications"],
    ["Language", "I", "Communication in user's language"],
  ];

  const RIGHTS = [
    "Right of Access",
    "Right to Rectification",
    "Right to Data Portability",
    "Right of Complaint",
    "Right to Be Forgotten",
    "Right to Restrict Processing",
  ];

  const LEGAL_BASES = [
    { label: "Consent", desc: "Processing is based on your explicit consent, which can be withdrawn at any time." },
    { label: "Legitimate Interests", desc: "Processing is necessary for the legitimate interests pursued by the Company." },
    { label: "Legal Obligations", desc: "Processing is necessary for compliance with a legal obligation to which we are subject." },
    { label: "Vital Interests", desc: "Processing is necessary to protect the vital interests of the data subject." },
  ];

  const ADDITIONAL_DOCS = [
    "ID or passport data",
    "Passport scans or photos",
    "Citizenship",
    "Residence confirmation",
    "Proof of funds",
    "Relationship to politically exposed persons",
    "Tax identification number",
    "Social security number (if applicable)",
    "Type of activity",
  ];

  const thCls = "bg-[#111111] text-[#5A5550] uppercase text-[10px] tracking-[0.08em] px-4 py-3 text-left font-medium";
  const tdCls = "bg-[#080808] hover:bg-[#0d0d0d] px-4 py-3 text-[13px] text-[#9A9590] border border-white/[0.06]";

  return (
    <div style={{ fontFamily: "Manrope, sans-serif", background: "#080808", minHeight: "100vh" }}>
      <div className="max-w-[800px] mx-auto px-12 py-[72px]">
        <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Legal</span>
        <h1 className="text-[clamp(28px,3vw,42px)] font-light text-[#F0EBE0] mb-2">Privacy Notice</h1>
        <p className="text-[13px] text-[#5A5550] mb-12">
          Incluence Limited · Last updated: 2024 · info@incluence.net
        </p>
        <div className="border-b border-white/[0.06] mb-12" />

        <S title="1. About This Notice">
          <P>
            This website is owned and operated by Incluence Limited ("Company", "we", "us", "our").
            During its operation the Company may use information provided by Users under this Privacy
            Notice. By accepting this Notice and providing personal information, Users agree that
            the Company may use this information as specified below. Protecting your privacy is very
            important to us.
          </P>
        </S>

        <S title="2. Scope of This Notice">
          <P>This Privacy Notice applies to our website and the personal data processing process.</P>
        </S>

        <S title="3. Definition of Personal Data">
          <P>
            In accordance with Article 4 of GDPR: personal data means any information relating
            to an identified or identifiable natural person. An identifiable natural person is one
            who can be identified directly or indirectly — by name, identification number, location
            data, online identifier, or factors specific to their physical, physiological, genetic,
            mental, economic, cultural or social identity.
          </P>
        </S>

        <S title="4. Types of Personal Data">
          <P>Two categories:</P>
          <ul className="text-[14px] text-[#9A9590] leading-[1.85] mt-2 space-y-1 list-none pl-0">
            <li>• <strong className="text-[#F0EBE0] font-medium">Directly collected (D):</strong> information the User provides directly (e.g. by filling forms)</li>
            <li>• <strong className="text-[#F0EBE0] font-medium">Indirectly collected (I):</strong> information not provided directly (e.g. language preference)</li>
          </ul>
        </S>

        <S title="5. What Information We Collect">
          <table className="w-full border-collapse mt-4">
            <thead>
              <tr>
                <th className={thCls}>Data</th>
                <th className={thCls}>Type</th>
                <th className={thCls}>Purpose</th>
              </tr>
            </thead>
            <tbody>
              {INFO_TABLE.map(([data, type, purpose]) => (
                <tr key={data}>
                  <td className={tdCls}>{data}</td>
                  <td className={tdCls}>{type}</td>
                  <td className={tdCls}>{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </S>

        <S title="6. Additional Verification for Legal Services">
          <P>For legal services, we may additionally request:</P>
          <ul className="text-[14px] text-[#9A9590] leading-[1.85] mt-2 space-y-1 list-none pl-0">
            {ADDITIONAL_DOCS.map((d) => (
              <li key={d}>• {d}</li>
            ))}
          </ul>
        </S>

        <S title="7. How Long We Keep Your Data">
          <P>
            We store personal data for the duration of the service and 24 months after completion.
            After this period, we anonymize the data and store it for statistics and analytics.
          </P>
        </S>

        <S title="8. Data Collection Methods">
          <P>
            Incluence collects information directly via its website. If third-party services are
            used, we will inform Users accordingly.
          </P>
        </S>

        <S title="9. Lawfulness of Processing">
          <P>
            Prior to using our services, Users shall accept this Privacy Notice. Processing is
            then lawful under Article 6(b) of GDPR. In all other cases, explicit prior consent
            is required. We do not use pre-checked consent boxes.
          </P>
        </S>

        <S title="10. Legal Bases for Processing">
          <ul className="text-[14px] text-[#9A9590] leading-[1.85] mt-2 space-y-3 list-none pl-0">
            {LEGAL_BASES.map((b) => (
              <li key={b.label}>
                <strong className="text-[#F0EBE0] font-medium">{b.label}:</strong> {b.desc}
              </li>
            ))}
          </ul>
        </S>

        <S title="11. Data Storage">
          <P>
            We store your data electronically in secure servers. Internet transmission is not
            completely secure — while we take all reasonable measures, transmission is at your
            own risk.
          </P>
        </S>

        <S title="12. User Rights">
          <ul className="text-[14px] text-[#9A9590] leading-[1.85] mt-2 space-y-2 list-none pl-0">
            {RIGHTS.map((r) => (
              <li key={r} className="flex items-start gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444CE7" strokeWidth="2" strokeLinecap="square" className="mt-1 shrink-0">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{r}</span>
              </li>
            ))}
          </ul>
          <P>To exercise your rights, contact us at info@incluence.net</P>
        </S>

        <S title="13. Communications">
          <P>
            You will receive informational messages if you agree to receive them or if they are
            necessary for using our services. Unsubscribe at any time: info@incluence.net
          </P>
        </S>

        <S title="14. Cookies">
          <P>
            For information on cookies we use, please see our{" "}
            <Link to="/cookie-policy" className="text-[#444CE7] hover:underline">Cookie Policy</Link>.
          </P>
        </S>

        <S title="15. Conclusions & Contact">
          <P>
            For questions about this Notice, contact our Data Protection Officer:
          </P>
          <div className="text-[14px] text-[#9A9590] leading-[1.85] mt-2">
            <div>Email: info@incluence.net</div>
            <div>Address: Rm 7B, One Capital Place, 18 Luard Road, Wan Chai, Hong Kong</div>
          </div>
        </S>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
