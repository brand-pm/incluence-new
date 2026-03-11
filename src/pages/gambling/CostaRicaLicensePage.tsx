import LicensePageTemplate from "@/components/LicensePageTemplate";

/* ── Costa Rica SVG map ──────────────────────────── */

const CostaRicaMapSvg = (
  <svg
    className="absolute pointer-events-none z-[1]"
    viewBox="0 0 400 300"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      right: "8%",
      top: "50%",
      transform: "translateY(-50%)",
      width: "460px",
      height: "320px",
      opacity: 0.13,
      pointerEvents: "none",
    }}
  >
    <defs>
      <filter id="cr-glow">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Costa Rica simplified shape */}
    <path
      d="M 80,60 C 100,50 130,45 165,48 C 200,51 230,58 260,70 C 290,82 315,100 330,125 C 345,150 348,175 340,200 C 332,225 312,245 285,258 C 258,271 228,275 200,270 C 172,265 148,250 128,230 C 108,210 90,185 78,158 C 66,131 62,105 68,82 Z"
      fill="#141822"
      stroke="rgba(240,235,224,0.15)"
      strokeWidth="1.5"
    />
    {/* Internal terrain lines */}
    <path
      d="M 100,90 C 140,85 180,88 220,95 C 260,102 290,115 310,135"
      fill="none"
      stroke="rgba(68,76,231,0.2)"
      strokeWidth="0.5"
    />
    <path
      d="M 90,120 C 130,112 175,110 220,115 C 265,120 298,135 318,158"
      fill="none"
      stroke="rgba(68,76,231,0.15)"
      strokeWidth="0.5"
    />
    <path
      d="M 88,150 C 120,140 165,137 210,142 C 255,147 286,162 305,182"
      fill="none"
      stroke="rgba(68,76,231,0.12)"
      strokeWidth="0.5"
    />
    {/* San José capital marker */}
    <circle cx="195" cy="152" r="5" fill="#444CE7" opacity="0.9" filter="url(#cr-glow)" />
    <circle cx="195" cy="152" r="12" fill="none" stroke="#444CE7" strokeWidth="0.8" opacity="0.4">
      <animate attributeName="r" values="8;18;8" dur="2.5s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.5;0;0.5" dur="2.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="195" cy="152" r="20" fill="none" stroke="#444CE7" strokeWidth="0.5" opacity="0.2">
      <animate attributeName="r" values="14;26;14" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.3;0;0.3" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
    </circle>
    {/* Municipality dot */}
    <circle cx="230" cy="138" r="2" fill="rgba(97,114,243,0.6)" />
    {/* City labels */}
    <text x="202" y="148" fontSize="6" fill="rgba(240,235,224,0.3)" fontFamily="Manrope,sans-serif">
      San José
    </text>
    <text x="235" y="135" fontSize="5" fill="rgba(240,235,224,0.2)" fontFamily="Manrope,sans-serif">
      Alajuela
    </text>
    <text x="155" y="170" fontSize="5" fill="rgba(240,235,224,0.2)" fontFamily="Manrope,sans-serif">
      Cartago
    </text>
    {/* Watermark */}
    <text
      x="140"
      y="175"
      fontSize="36"
      fill="rgba(240,235,224,0.05)"
      fontFamily="Manrope,sans-serif"
      fontWeight="300"
    >
      Costa Rica
    </text>
  </svg>
);

/* ── Page data ───────────────────────────────────────── */

const CostaRicaLicensePage = () => (
  <LicensePageTemplate
    breadcrumbs={[
      { label: "Incluence", href: "/" },
      { label: "Gamble license", href: "/licenses/gambling" },
      { label: "Gambling License in Costa Rica" },
    ]}
    hero={{
      tag: "Gambling License",
      subTag: "Central America · Municipality",
      titleAccent: "Costa Rica",
      titleRest: "Gambling License in",
      accentPosition: "end",
      description:
        "Costa Rica offers a unique regulatory model: no traditional gambling license exists. Online operators use a Data Processing License issued by the local municipality, allowing them to legally process internet bets worldwide — with no mandatory business plan, no financial reporting, and no capital requirements beyond share capital.",
      cta1: "Get a Free Quote →",
      cta2: "View Requirements",
      heroOverlay:
        "linear-gradient(to right, #080808 45%, rgba(8,8,8,0.7) 65%, rgba(8,8,8,0) 100%)",
    }}
    mapSvg={CostaRicaMapSvg}
    fireflies={{ originX: 55, originY: 50, count: 8 }}
    facts={[
      { label: "Jurisdiction", value: "Costa Rica", cls: "text-[#F0EBE0]" },
      { label: "Regulator", value: "Municipality", cls: "text-[#444CE7] font-semibold" },
      { label: "License type", value: "Data Processing", cls: "text-[#F0EBE0]" },
      { label: "Timeline", value: "2–4 months", cls: "text-[#F0EBE0]" },
      { label: "Cost", value: "from $15,000", cls: "text-[#F0EBE0]" },
      { label: "Renewal", value: "$1,500 / quarter", cls: "text-[#9A9590] italic" },
    ]}
    process={{
      tag: "— Process",
      title: "How to obtain a Costa Rica gambling license",
      subtitle:
        "A structured 8-step process. We handle every stage — you only provide basic information.",
    }}
    steps={[
      {
        num: "01",
        title: "Company Registration in Costa Rica",
        body: "You must register a local company to which the license will later be issued. This requires choosing a company name, specifying the participants, and providing their documents.",
      },
      {
        num: "02",
        title: "Opening a Bank Account",
        body: "The company must open a bank account to deposit share capital. Opening an account is a complex process that should be entrusted to professionals.",
      },
      {
        num: "03",
        title: "Contribution of Share Capital",
        body: "The exact amount of share capital depends on the license type. If necessary, the beneficiary must provide documents confirming the source of funds contributed.",
      },
      {
        num: "04",
        title: "Hiring Mandatory Staff",
        body: "The company must employ staff in key positions, some of whom must be local residents. We assist with recruitment and staffing.",
      },
      {
        num: "05",
        title: "Renting an Office",
        body: "One of the mandatory requirements is renting an office. We will help select a cost-effective option that meets all requirements.",
      },
      {
        num: "06",
        title: "Preparing Documents",
        body: "A business plan, policies, and technical documentation must be prepared. The client only provides basic information, and we prepare all documents in compliance with local legislation.",
      },
    ]}
    finalSteps={{
      step7: {
        num: "07",
        title: "Submitting the Application",
        body: "After preparing the company and documents, the application must be submitted to the regulator. We ensure timely and professional responses to any additional queries.",
      },
      step8: {
        num: "08",
        title: "Obtaining the License",
        body: "After successfully completing all steps, the company receives the license. It must begin operations within six months; otherwise, the license may be revoked.",
        badge: "~2–4 months total",
      },
    }}
    requirements={{
      title: "What is required for licensing",
      intro:
        "The Data Processing license is issued by the local municipality. To apply, you only need to have an office in the country and hire a legal representative. If the enterprise is foreign-owned, this position must be filled by a Costa Rican resident.",
      notRequiredTitle: "What's NOT required",
      notRequired: [
        "No business plan is needed",
        "No profit plan requirements",
        "No measures required regarding gambling addiction prevention",
        "No requirements related to software",
        "No financial reporting or mandatory bank accounts",
      ],
      additionalText:
        "There are no requirements for a large initial capital. However, at least 25% of the issued share capital must be paid during company registration. The company's activities must not target Costa Rica or its residents — operators are prohibited from accepting bets from Costa Rican residents, and equipment must be physically located outside of Costa Rica.",
      docsTitle: "Documents required",
      docs: [
        "Copies of passports and proof of address of company directors and shareholders",
        "Documents confirming the experience and financial standing of company participants",
        "Company's founding documents",
        "Technical documentation",
        "Company policies",
        "Proof of registered office in Costa Rica",
        "Appointment of local legal representative",
      ],
      checklistDocs: [
        "Passport copies — directors & shareholders",
        "Address confirmation — directors & shareholders",
        "Experience & financial standing documentation",
        "Company founding documents",
        "Technical documentation",
        "Company policies",
        "Proof of registered office",
        "Local legal representative appointment",
      ],
      checklistNote:
        "We prepare and verify all documents. You provide basic information — we handle the rest.",
    }}
    faqs={[
      {
        q: "How to open an online casino in Costa Rica?",
        a: "To open an online casino in Costa Rica, you need to prepare a business plan, register a company, obtain a license, set up the technical infrastructure, and open a bank account. The entire documentation must be prepared carefully, and the license application submitted correctly. These processes are best entrusted to professionals.",
      },
      {
        q: "What are the timeframes for obtaining a gambling license in Costa Rica?",
        a: "A Costa Rican gambling license can be obtained within 2–4 months.",
      },
      {
        q: "What documents are required to obtain a gambling license in Costa Rica?",
        a: "To obtain a gambling license in Costa Rica, you need to submit: copies of passports and proof of address of company directors and shareholders; documents confirming the experience and financial standing of company participants; company's founding documents; technical documentation; company policies.",
      },
      {
        q: "What is the cost of obtaining a gambling license in Costa Rica?",
        a: "The final cost of obtaining a gambling license in Costa Rica depends on various factors (list of services offered, number of domains, etc.). You can find out the exact cost by contacting our specialists.",
      },
    ]}
    relatedTag="— Related"
    relatedTitle="Other gambling jurisdictions"
    related={[
      {
        href: "/licenses/gambling/malta",
        flag: "🇲🇹",
        reg: "MGA",
        name: "Malta Gaming License",
        desc: "EU-regulated, 5-year license from Malta Gaming Authority. Gold standard for European market entry.",
      },
      {
        href: "/licenses/gambling/curacao",
        flag: "🇨🇼",
        reg: "CGA",
        name: "Curacao Gaming License",
        desc: "Fast, affordable offshore license. Sub-license available in 4–8 weeks. Widely recognized globally.",
      },
      {
        href: "/licenses/gambling/isle-of-man",
        flag: "🇮🇲",
        reg: "GSC",
        name: "Isle of Man License",
        desc: "Tier-1 prestige license from the Gambling Supervision Commission. Trusted by top-tier operators.",
      },
    ]}
    contact={{
      tag: "— Get in Touch",
      title: "Start your Costa Rica application",
      description:
        "Tell us about your business model and target markets. We will assess your application and provide a detailed cost breakdown based on your specific requirements.",
      benefits: [
        "Fixed fee pricing — no hourly surprises",
        "Senior attorneys on every case, no juniors",
        "Response within 2 business hours, Mon–Fri",
      ],
      licenseOptions: [
        "Gambling License in Costa Rica",
        "Malta / MGA License",
        "Isle of Man / GSC",
        "Curacao Gaming License",
        "Not sure — need advice",
      ],
      defaultLicense: "Gambling License in Costa Rica",
    }}
  />
);

export default CostaRicaLicensePage;
