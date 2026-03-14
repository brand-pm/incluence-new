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

const CookiePolicyPage = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Cookie Policy — Incluence";
    const setMeta = (n: string, c: string) => {
      let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); }
      el.content = c;
    };
    setMeta("description", "Cookie Policy for Incluence Limited. How we use cookies and how you can control them.");
    let canon = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canon) { canon = document.createElement("link"); canon.rel = "canonical"; document.head.appendChild(canon); }
    canon.href = "https://incluence.com/cookie-policy";
    return () => { document.title = prev; };
  }, []);

  const thCls = "bg-[#111111] text-[#5A5550] uppercase text-[10px] tracking-[0.08em] px-4 py-3 text-left font-medium";
  const tdCls = "bg-[#080808] hover:bg-[#0d0d0d] px-4 py-3 text-[13px] text-[#9A9590] border border-white/[0.06]";

  const ANALYTICS_COOKIES = [
    ["_gid", "Unique visitor ID for usage statistics", "Google Analytics", "1 day"],
    ["_gat", "Controls Google Analytics request rate", "Google Analytics", "1 minute"],
    ["#collect", "Sends visitor behavior data to Google", "Google Analytics", "Session"],
    ["_ga", "Distinguishes users via random client ID", "Google Analytics", "~2 years"],
    ["dc_gtm_UA", "Controls Google Tag Manager script loading", "Google Tag Manager", "1 minute"],
  ];

  const AD_COOKIES = [
    ["td", "Targeted adverts based on browsing activity", "UnrulyX", "Session"],
    ["ga-audiences", "Re-engages visitors likely to convert", "Google AdWords", "Session"],
  ];

  return (
    <div style={{ fontFamily: "Manrope, sans-serif", background: "#080808", minHeight: "100vh" }}>
      <div className="max-w-[800px] mx-auto px-12 py-[72px]">
        <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Legal</span>
        <h1 className="text-[clamp(28px,3vw,42px)] font-light text-[#F0EBE0] mb-2">Cookie Policy</h1>
        <p className="text-[13px] text-[#5A5550] mb-12">
          Incluence Limited · info@incluence.net · Rm 7B, One Capital Place, 18 Luard Road, Wan Chai, Hong Kong
        </p>
        <div className="border-b border-white/[0.06] mb-12" />

        <S title="1. Introduction">
          <P>
            This Cookie Policy explains how Incluence Limited uses cookies to recognize
            you when you visit our website. This helps us provide a good experience and
            allows us to improve our site. In some cases, we may use cookies to collect
            personal information if combined with other data.
          </P>
        </S>

        <S title="2. What Are Cookies?">
          <P>
            A cookie is a small data file stored on your browser or computer's hard drive
            when you visit a website. First-party cookies are set by us. Third-party cookies
            are set by external parties to provide features or functionality through our website
            (e.g. analytics, advertising). Third parties can recognize your computer on both
            our website and other websites.
          </P>
        </S>

        <S title="3. Why We Use Cookies">
          <P>
            We use first- and third-party cookies for several reasons. Essential cookies are
            required for the website to operate. Other cookies enable us to track user interests
            to enhance the experience. Third parties serve cookies through our website for
            advertising, analytics, and other purposes.
          </P>
        </S>

        <S title="4. How to Control Cookies">
          <P>
            You have the right to accept or reject cookies via the Cookie Consent Manager
            in the notification banner on our website. Essential cookies cannot be rejected
            as they are required for the service. You may also control cookies via your
            browser settings — some parts of the website may not function if cookies are disabled.
          </P>
        </S>

        <S title="5. Cookies We Use">
          <div className="mt-4">
            <h3 className="text-[14px] font-semibold text-[#F0EBE0] mb-4">Analytics &amp; Customization Cookies</h3>
            <table className="w-full border-collapse mb-8">
              <thead>
                <tr>
                  <th className={thCls}>Cookie</th>
                  <th className={thCls}>Purpose</th>
                  <th className={thCls}>Service</th>
                  <th className={thCls}>Expires</th>
                </tr>
              </thead>
              <tbody>
                {ANALYTICS_COOKIES.map(([cookie, purpose, service, expires]) => (
                  <tr key={cookie}>
                    <td className={tdCls}><code className="text-[#F0EBE0]">{cookie}</code></td>
                    <td className={tdCls}>{purpose}</td>
                    <td className={tdCls}>{service}</td>
                    <td className={tdCls}>{expires}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="text-[14px] font-semibold text-[#F0EBE0] mb-4">Advertising Cookies</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className={thCls}>Cookie</th>
                  <th className={thCls}>Purpose</th>
                  <th className={thCls}>Service</th>
                  <th className={thCls}>Expires</th>
                </tr>
              </thead>
              <tbody>
                {AD_COOKIES.map(([cookie, purpose, service, expires]) => (
                  <tr key={cookie}>
                    <td className={tdCls}><code className="text-[#F0EBE0]">{cookie}</code></td>
                    <td className={tdCls}>{purpose}</td>
                    <td className={tdCls}>{service}</td>
                    <td className={tdCls}>{expires}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </S>

        <S title="6. Policy Updates">
          <P>
            We may update this Cookie Policy to reflect changes in cookies used or for
            legal or regulatory reasons. Revisit this page regularly to stay informed.
            The date at the top indicates when it was last updated.
          </P>
        </S>

        <S title="7. Contact">
          <P>For questions about our cookie usage:</P>
          <div className="text-[14px] text-[#9A9590] leading-[1.85] mt-2">
            <div>Email: info@incluence.net</div>
            <div>Address: Rm 7B, One Capital Place, 18 Luard Road, Wan Chai, Hong Kong</div>
          </div>
          <P>
            See also our{" "}
            <Link to="/privacy-policy" className="text-[#444CE7] hover:underline">Privacy Policy</Link>.
          </P>
        </S>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
