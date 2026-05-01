import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/SectionTag";

type PageStatus = "done" | "in-progress" | "planned";

type SitemapEntry = {
  title: string;
  url: string;
  status: PageStatus;
  category: string;
  isNew?: boolean;
};

const SITEMAP_DATA: SitemapEntry[] = [
  // ── CORE ──
  { title: "Homepage", url: "/", status: "done", category: "Core" },
  { title: "About Us", url: "/about-us", status: "done", category: "Core" },
  { title: "About (alias)", url: "/about", status: "done", category: "Core", isNew: true },
  { title: "Marketplace", url: "/marketplace", status: "done", category: "Core" },
  { title: "Affiliate Program", url: "/affiliate-program", status: "done", category: "Core" },
  { title: "Contact", url: "/contact", status: "done", category: "Core" },
  { title: "Blog", url: "/blog", status: "done", category: "Core", isNew: true },
  { title: "Sitemap", url: "/sitemap", status: "done", category: "Core", isNew: true },
  { title: "Privacy Policy", url: "/privacy-policy", status: "done", category: "Core" },
  { title: "Cookie Policy", url: "/cookie-policy", status: "done", category: "Core" },

  // ── LICENSES OVERVIEW ──
  { title: "Licenses (Overview)", url: "/licenses", status: "done", category: "Core", isNew: true },

  // ── GAMBLING ──
  { title: "Gambling License (Hub)", url: "/gamble-license", status: "done", category: "Gambling" },
  { title: "Malta Gaming License", url: "/malta-gaming-license", status: "done", category: "Gambling" },
  { title: "Curaçao Gaming License", url: "/curacao-gaming-license", status: "done", category: "Gambling" },
  { title: "Isle of Man Gambling License", url: "/gambling-license-of-the-isle-of-man", status: "done", category: "Gambling" },
  { title: "Costa Rica Gambling License", url: "/gambling-license-in-costa-rica", status: "done", category: "Gambling" },

  // ── FOREX ──
  { title: "Forex License (Hub)", url: "/forex-license", status: "done", category: "Forex" },
  { title: "Cyprus Forex License", url: "/cyprus-forex-license", status: "done", category: "Forex" },
  { title: "Malta Forex License", url: "/forex-broker-licence-in-malta", status: "done", category: "Forex" },
  { title: "Vanuatu Forex License", url: "/forex-broker-licence-in-vanuatu", status: "done", category: "Forex" },
  { title: "Mauritius Forex License", url: "/forex-broker-licence-in-mauritius", status: "done", category: "Forex" },
  { title: "Montenegro Forex License", url: "/forex-broker-licence-in-montenegro", status: "done", category: "Forex" },
  { title: "Seychelles Financial License", url: "/forex-license-seychelles", status: "done", category: "Forex" },

  // ── CRYPTO ──
  { title: "Crypto License (Hub)", url: "/cryptocurrency-exchange-license", status: "done", category: "Crypto" },
  { title: "Estonia Crypto License", url: "/cryptocurrency-exchange-license-in-estonia", status: "done", category: "Crypto" },
  { title: "Lithuania Crypto License", url: "/lithuania-crypto-license", status: "done", category: "Crypto" },
  { title: "Switzerland Crypto License", url: "/cryptocurrency-exchange-license-in-switzerland", status: "done", category: "Crypto" },
  { title: "Malta Crypto License", url: "/cryptocurrency-license-in-malta", status: "done", category: "Crypto" },
  { title: "Poland Crypto License", url: "/poland-crypto-license", status: "done", category: "Crypto" },
  { title: "USA Crypto License", url: "/cryptocurrency-exchange-license-in-the-usa", status: "done", category: "Crypto" },
  { title: "MiCA License (EU)", url: "/mica-license", status: "done", category: "Crypto", isNew: true },

  // ── EMI ──
  { title: "EMI License (Hub)", url: "/emi-license", status: "done", category: "EMI" },
  { title: "Estonia EMI License", url: "/emi-license-in-estonia", status: "done", category: "EMI" },
  { title: "Malta EMI License", url: "/e-money-license-malta", status: "done", category: "EMI" },
  { title: "UK EMI License", url: "/e-money-license-uk", status: "done", category: "EMI" },
  { title: "Lithuania EMI License", url: "/e-money-license-lithuania", status: "done", category: "EMI" },

  // ── PAYMENT SYSTEMS ──
  { title: "Payment Systems (Hub)", url: "/provider-payment-systems", status: "done", category: "Payment" },
  { title: "Merchant Account", url: "/opening-a-merchant-account", status: "done", category: "Payment" },
  { title: "Payment System Account", url: "/open-an-account-in-a-payment-system", status: "done", category: "Payment" },
  { title: "Cyprus Payment License", url: "/payment-system-license-in-cyprus", status: "done", category: "Payment" },
  { title: "Lithuania Payment License", url: "/payment-system-license-in-lithuania", status: "done", category: "Payment" },
  { title: "UK PSP License", url: "/psp-system-uk", status: "done", category: "Payment" },
  { title: "Denmark Payment License", url: "/payment-system-license-in-denmark", status: "done", category: "Payment" },
  { title: "Czech Payment License", url: "/czech-payment-system-license", status: "done", category: "Payment" },
  { title: "Hong Kong Payment License", url: "/hong-kong-payment-system-license", status: "done", category: "Payment" },

  // ── OFFSHORE ──
  { title: "Offshore Company (Hub)", url: "/offshore-company-formation", status: "done", category: "Offshore" },
  { title: "BVI Offshore", url: "/offshore-in-the-british-virgin-islands", status: "done", category: "Offshore" },
  { title: "Cayman Islands Offshore", url: "/offshore-in-the-cayman-islands", status: "done", category: "Offshore" },
  { title: "Seychelles Offshore", url: "/offshore-company-formation-in-seychelles", status: "done", category: "Offshore" },
  { title: "Curaçao Offshore", url: "/offshore-company-formation-in-curacao", status: "done", category: "Offshore" },
  { title: "Costa Rica Offshore", url: "/offshore-costa-rica", status: "done", category: "Offshore" },
  { title: "Panama Offshore", url: "/panama-company-formation", status: "done", category: "Offshore" },
  { title: "Isle of Man Offshore", url: "/offshore-in-the-isle-of-man", status: "done", category: "Offshore" },
  { title: "St Vincent Offshore", url: "/offshore-company-formation-in-st-vincent-and-the-grenadines", status: "done", category: "Offshore" },
  { title: "Cyprus Offshore", url: "/cyprus-offshore-company-formation", status: "done", category: "Offshore" },

  // ── COMPANY REGISTRATION ──
  { title: "Company Registration (Hub)", url: "/registration-of-companies-abroad", status: "done", category: "Company Reg" },
  { title: "Estonia Company", url: "/open-a-company-in-estonia", status: "done", category: "Company Reg" },
  { title: "Malta Company", url: "/company-registration-in-malta", status: "done", category: "Company Reg" },
  { title: "Switzerland Company", url: "/register-company-in-switzerland", status: "done", category: "Company Reg" },
  { title: "Ireland Company", url: "/company-registration-in-ireland", status: "done", category: "Company Reg" },
  { title: "Cyprus Company", url: "/company-registration-in-cyprus", status: "done", category: "Company Reg" },
  { title: "Germany Company", url: "/company-registration-in-germany", status: "done", category: "Company Reg" },
  { title: "Poland Company", url: "/company-registration-in-poland", status: "done", category: "Company Reg" },
  { title: "UK Company", url: "/register-company-in-uk", status: "done", category: "Company Reg" },
  { title: "USA Company", url: "/open-company-in-usa", status: "done", category: "Company Reg" },
  { title: "Singapore Company", url: "/register-company-in-singapore", status: "done", category: "Company Reg" },
  { title: "Hong Kong Company", url: "/register-company-in-hong-kong", status: "done", category: "Company Reg" },
  { title: "Lithuania Company", url: "/register-company-in-lithuania", status: "done", category: "Company Reg" },
  { title: "UAE Company", url: "/register-company-in-uae", status: "done", category: "Company Reg" },
  { title: "Hungary Company", url: "/starting-a-business-in-hungary", status: "done", category: "Company Reg" },
  { title: "Bulgaria Company", url: "/register-company-in-bulgaria", status: "done", category: "Company Reg" },
  { title: "Portugal Company", url: "/company-registration-portugal", status: "done", category: "Company Reg" },
  { title: "Netherlands Company", url: "/company-registration-netherlands", status: "done", category: "Company Reg" },
  { title: "Luxembourg Company", url: "/company-registration-in-luxembourg", status: "done", category: "Company Reg" },
  { title: "Gibraltar Company", url: "/company-registration-in-gibraltar", status: "done", category: "Company Reg" },
  { title: "EU Company Registration", url: "/company-registration-in-europe", status: "done", category: "Company Reg" },
  { title: "Croatia Company", url: "/company-registration-in-croatia", status: "done", category: "Company Reg" },
  { title: "Malaysia Company", url: "/malaysia-company-registration", status: "done", category: "Company Reg" },
  { title: "Montenegro Company", url: "/starting-a-business-in-montenegro", status: "done", category: "Company Reg" },
  { title: "Thailand Company", url: "/open-a-company-in-thailand", status: "done", category: "Company Reg" },
  { title: "China Company", url: "/company-registration-in-china", status: "done", category: "Company Reg" },
  { title: "Canada Company", url: "/company-registration-in-canada", status: "done", category: "Company Reg" },
  { title: "Czechia Company", url: "/company-registration-in-czechia", status: "done", category: "Company Reg" },

  // ── READY-MADE ──
  { title: "Ready-Made Companies (Hub)", url: "/buy-a-business-abroad", status: "done", category: "Ready-Made" },
  { title: "Ready-Made Offshore", url: "/ready-made-offshore-companies", status: "done", category: "Ready-Made" },
  { title: "Hungary Ready-Made", url: "/ready-made-companies-in-hungary", status: "done", category: "Ready-Made" },
  { title: "Estonia Ready-Made", url: "/buy-company-in-estonia", status: "done", category: "Ready-Made" },
  { title: "Hong Kong Ready-Made", url: "/buy-ready-made-company-in-hong-kong", status: "done", category: "Ready-Made" },
  { title: "Lithuania Ready-Made", url: "/buy-ready-made-company-in-lithuania", status: "done", category: "Ready-Made" },
  { title: "Malta Ready-Made", url: "/buying-a-company-in-malta", status: "done", category: "Ready-Made" },
  { title: "Bulgaria Ready-Made", url: "/buying-a-company-in-bulgaria", status: "done", category: "Ready-Made" },
  { title: "Switzerland Ready-Made", url: "/buying-a-company-in-switzerland", status: "done", category: "Ready-Made" },
  { title: "Buy a Company in Canada", url: "/buying-a-company-in-canada", status: "done", category: "Ready-Made" },
  { title: "Buy a Company in Germany", url: "/buying-a-company-in-germany", status: "done", category: "Ready-Made" },
  { title: "Buy a Company in Poland", url: "/buying-a-company-in-poland", status: "done", category: "Ready-Made" },
  { title: "Buy a Company in Netherlands", url: "/company-purchase-in-the-netherlands", status: "done", category: "Ready-Made" },
  { title: "Buy a Company in China", url: "/purchase-a-company-in-china", status: "done", category: "Ready-Made" },
  { title: "Buy a Company in England", url: "/purchase-a-company-in-england", status: "done", category: "Ready-Made" },
  { title: "Buy a Company in Cyprus", url: "/purchase-of-a-company-in-cyprus", status: "done", category: "Ready-Made" },
  { title: "Buy a Company in Luxembourg", url: "/purchase-of-a-company-in-luxembourg", status: "done", category: "Ready-Made" },
  { title: "Buy a Company in Czech Republic", url: "/purchase-of-a-company-in-the-czech-republic", status: "done", category: "Ready-Made" },
  { title: "Buy a Company in UAE", url: "/purchase-of-a-company-in-the-uae", status: "done", category: "Ready-Made" },
  { title: "Buy a Company in USA", url: "/purchase-of-a-company-in-the-usa", status: "done", category: "Ready-Made" },

  // ── BANK ACCOUNTS ──
  { title: "Bank Accounts (Hub)", url: "/accounts-bank", status: "done", category: "Banking" },
  { title: "Foreign Bank Account", url: "/opening-a-foreign-bank-account", status: "done", category: "Banking" },
  { title: "Offshore Bank Account", url: "/opening-an-offshore-bank-account", status: "done", category: "Banking" },
  { title: "Cyprus Bank Account", url: "/open-a-bank-account-in-cyprus", status: "done", category: "Banking" },
  { title: "Germany Bank Account", url: "/open-a-bank-account-in-germany", status: "done", category: "Banking" },
  { title: "UK Bank Account", url: "/opening-a-bank-account-in-the-united-kingdom", status: "done", category: "Banking" },
  { title: "Switzerland Bank Account", url: "/open-bank-account-as-foreigner-in-switzerland", status: "done", category: "Banking" },
  { title: "USA Bank Account", url: "/open-bank-account-as-foreigner-in-usa", status: "done", category: "Banking" },
  { title: "Hungary Bank Account", url: "/open-a-bank-account-in-hungary", status: "done", category: "Banking" },
  { title: "Luxembourg Bank Account", url: "/open-a-bank-account-in-luxembourg", status: "done", category: "Banking" },
  { title: "Poland Bank Account", url: "/open-a-bank-account-in-poland", status: "done", category: "Banking" },
  { title: "Bulgaria Bank Account", url: "/open-a-bank-account-in-bulgaria", status: "done", category: "Banking" },
  { title: "Gibraltar Bank Account", url: "/open-a-bank-account-in-gibraltar", status: "done", category: "Banking" },
  { title: "Turkey Bank Account", url: "/open-a-bank-account-in-turkey", status: "done", category: "Banking" },
  { title: "Andorra Bank Account", url: "/open-a-bank-account-in-andorra", status: "done", category: "Banking" },
  { title: "Saint Lucia Bank Account", url: "/open-a-bank-account-in-saint-lucia", status: "done", category: "Banking" },
  { title: "Liechtenstein Bank Account", url: "/open-an-account-in-liechtenstein", status: "done", category: "Banking" },
  { title: "Account at Banque de Luxembourg", url: "/opening-an-account-at-banque-de-luxembourg", status: "done", category: "Banking" },
  { title: "Account at MKB Bank Hungary", url: "/opening-an-account-at-mkb-bank-hungary", status: "done", category: "Banking" },
  { title: "Account in Barclays Bank", url: "/opening-an-account-in-barclays-bank", status: "done", category: "Banking" },
  { title: "Account in HSBC Bank", url: "/opening-an-account-in-hsbc-bank", status: "done", category: "Banking" },
  { title: "Account in Revolut", url: "/opening-an-account-in-revolut", status: "done", category: "Banking" },
  { title: "Account in PayPal", url: "/opening-an-account-in-the-pay-pal-payment-system", status: "done", category: "Banking" },
  { title: "Account in Payoneer", url: "/opening-an-account-in-the-payoneer-payment-system", status: "done", category: "Banking" },
  { title: "Account in Wise", url: "/opening-an-account-in-the-wise-payment-system", status: "done", category: "Banking" },

  // ── FUNDS ──
  { title: "Investment Funds (Hub)", url: "/offshore-investment-funds", status: "done", category: "Funds" },
  { title: "Hedge Fund", url: "/open-a-hedge-fund", status: "done", category: "Funds" },
  { title: "Luxembourg Fund", url: "/open-an-investment-fund-in-luxembourg", status: "done", category: "Funds" },
  { title: "Estonia Fund", url: "/open-an-investment-fund-in-estonia", status: "done", category: "Funds" },
  { title: "Malta Fund", url: "/registration-of-investment-funds-in-malta", status: "done", category: "Funds" },
  { title: "Czech Fund", url: "/registration-of-investment-funds-in-czech", status: "done", category: "Funds" },
  { title: "Switzerland Fund", url: "/registration-of-investment-funds-in-switzerland", status: "done", category: "Funds" },

  // ── RESIDENCE ──
  { title: "Residence Permit (Hub)", url: "/residence-permit-abroad", status: "done", category: "Residence" },
  { title: "Portugal Residence", url: "/residence-permit-in-portugal", status: "done", category: "Residence" },
  { title: "Dubai Residence", url: "/residence-permit-in-dubai", status: "done", category: "Residence" },
  { title: "Lithuania Residence", url: "/residence-permit-in-lithuania", status: "done", category: "Residence" },
  { title: "Cyprus Residence", url: "/residence-permit-in-cyprus", status: "done", category: "Residence" },
  { title: "Hungary Residence", url: "/residence-permit-in-hungary", status: "done", category: "Residence" },
  { title: "Slovakia Residence", url: "/residence-permit-in-slovakia", status: "done", category: "Residence" },

  // ── LEGAL ──
  { title: "Business Legitimization", url: "/legal-business", status: "done", category: "Legal" },
  { title: "Tax & Financial Reporting", url: "/finance-reporting", status: "done", category: "Legal" },
  { title: "Legal Support", url: "/support-legal", status: "done", category: "Legal" },
  { title: "International Contracts", url: "/drafting-international-contracts", status: "done", category: "Legal" },
];

const STATUS_FILTERS: { label: string; value: string }[] = [
  { label: "All", value: "all" },
  { label: "Done", value: "done" },
  { label: "In Progress", value: "in-progress" },
  { label: "Planned", value: "planned" },
];

const StatusDot = ({ status }: { status: PageStatus }) => {
  const base = "w-2 h-2 flex-shrink-0";
  if (status === "done") return <div className={base} style={{ background: "#22c55e" }} />;
  if (status === "in-progress")
    return (
      <div
        className={base}
        style={{ background: "#f59e0b", animation: "status-pulse 2s ease-in-out infinite" }}
      />
    );
  return <div className={base} style={{ background: "rgba(255,255,255,0.1)" }} />;
};

const StatusBadge = ({ status }: { status: PageStatus }) => {
  const map = {
    done: { label: "Migrated", color: "#22c55e", border: "rgba(34,197,94,0.3)" },
    "in-progress": { label: "In Progress", color: "#f59e0b", border: "rgba(245,158,11,0.3)" },
    planned: { label: "Planned", color: "#5A5550", border: "rgba(255,255,255,0.1)" },
  };
  const s = map[status];
  return (
    <span
      style={{
        fontSize: 9,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        color: s.color,
        border: `1px solid ${s.border}`,
        padding: "2px 8px",
      }}
    >
      {s.label}
    </span>
  );
};

const SitemapPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const [catFilter, setCatFilter] = useState("all");

  const done = SITEMAP_DATA.filter((p) => p.status === "done").length;
  const inProgress = SITEMAP_DATA.filter((p) => p.status === "in-progress").length;
  const planned = SITEMAP_DATA.filter((p) => p.status === "planned").length;
  const total = SITEMAP_DATA.length;
  const pct = Math.round((done / total) * 100);

  const filtered = SITEMAP_DATA.filter(
    (p) =>
      (filter === "all" || p.status === filter) &&
      (catFilter === "all" || p.category === catFilter)
  );

  const categories = [...new Set(SITEMAP_DATA.map((p) => p.category))];
  const uniqueCatsInFiltered = [...new Set(filtered.map((p) => p.category))];

  const statCells = [
    { label: "Total Pages", value: total, color: "#F0EBE0" },
    { label: "Migrated", value: done, color: "#22c55e" },
    { label: "In Progress", value: inProgress, color: "#f59e0b" },
    { label: "Remaining", value: planned, color: "#5A5550" },
  ];

  return (
    <div style={{ background: "#080808", minHeight: "100vh", fontFamily: "Manrope, sans-serif" }}>
      {/* HERO */}
      <div style={{ padding: "72px 48px 0" }}>
        <SectionTag>Site Map</SectionTag>
        <h1
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 300,
            color: "#F0EBE0",
            marginTop: 12,
            lineHeight: 1.15,
          }}
        >
          Migration Progress
        </h1>

        {/* Stats row */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4"
          style={{ marginTop: 40, gap: 1, background: "rgba(255,255,255,0.06)" }}
        >
          {statCells.map((s) => (
            <div key={s.label} style={{ background: "#080808", padding: 28 }}>
              <div style={{ fontSize: 32, fontWeight: 300, color: s.color, lineHeight: 1 }}>
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "#5A5550",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginTop: 4,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div style={{ marginTop: 32, maxWidth: 600 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 11, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Overall Progress
            </span>
            <span style={{ fontSize: 11, color: "#444CE7" }}>{pct}%</span>
          </div>
          <div style={{ height: 3, background: "rgba(255,255,255,0.06)", width: "100%" }}>
            <div style={{ height: "100%", background: "#444CE7", width: `${pct}%`, transition: "width 0.5s ease" }} />
          </div>
        </div>
      </div>

      {/* FILTER BAR */}
      <div style={{ padding: "32px 48px 0" }} className="flex gap-3 flex-wrap items-center">
        {STATUS_FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            style={{
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              padding: "6px 16px",
              border: filter === f.value ? "none" : "1px solid rgba(255,255,255,0.1)",
              background: filter === f.value ? "#444CE7" : "transparent",
              color: filter === f.value ? "#fff" : "#9A9590",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              if (filter !== f.value) (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.25)";
            }}
            onMouseLeave={(e) => {
              if (filter !== f.value) (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            {f.label}
          </button>
        ))}

        <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.1)", margin: "0 4px" }} />

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCatFilter(catFilter === cat ? "all" : cat)}
            style={{
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              padding: "4px 12px",
              border: catFilter === cat ? "none" : "1px solid rgba(255,255,255,0.1)",
              background: catFilter === cat ? "#444CE7" : "transparent",
              color: catFilter === cat ? "#fff" : "#9A9590",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* SITEMAP GRID */}
      <div style={{ padding: "32px 48px 96px" }}>
        {categories
          .filter((cat) => uniqueCatsInFiltered.includes(cat))
          .map((cat) => {
            const catEntries = filtered.filter((p) => p.category === cat);
            const catDone = SITEMAP_DATA.filter((p) => p.category === cat && p.status === "done").length;
            const catTotal = SITEMAP_DATA.filter((p) => p.category === cat).length;

            return (
              <div key={cat} style={{ marginBottom: 40 }}>
                {/* Category header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#444CE7" }}>
                    — {cat}
                  </span>
                  <span style={{ fontSize: 11, color: "#5A5550" }}>
                    {catDone}/{catTotal} migrated
                  </span>
                </div>

                {/* Rows */}
                <div style={{ background: "rgba(255,255,255,0.06)", display: "grid", gap: 1 }}>
                  {catEntries.map((p) => (
                    <div
                      key={p.url}
                      onClick={() => navigate(p.url)}
                      className="group"
                      style={{
                        background: "#080808",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "12px 20px",
                        cursor: "pointer",
                        transition: "background 0.2s",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#0d0d0d")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#080808")}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        <StatusDot status={p.status} />
                        <span
                          className="group-hover:text-[#444CE7]"
                          style={{
                            fontSize: 13,
                            fontWeight: 500,
                            color: "#F0EBE0",
                            transition: "color 0.2s",
                          }}
                        >
                          {p.title}
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        <span
                          style={{
                            fontSize: 11,
                            color: "#5A5550",
                            fontFamily: "monospace",
                          }}
                          className="hidden sm:inline"
                        >
                          {p.url}
                        </span>
                        <StatusBadge status={p.status} />
                        <span
                          className="opacity-0 group-hover:opacity-100"
                          style={{ color: "#444CE7", fontSize: 13, transition: "opacity 0.2s" }}
                        >
                          →
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
      </div>

      <style>{`
        @keyframes status-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default SitemapPage;
