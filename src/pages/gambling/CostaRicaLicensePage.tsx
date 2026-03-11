import LicensePageTemplate from "@/components/LicensePageTemplate";

/* ── Costa Rica SVG map ──────────────────────────── */

const CostaRicaMapSvg = (
  <svg
    className="absolute pointer-events-none z-[1]"
    style={{ right: '12%', top: '50%', transform: 'translateY(-50%)', width: '480px', height: '560px' }}
    viewBox="0 0 360 420" fill="none"
  >
    {/* === MAIN COSTA RICA LANDMASS — NW-SE diagonal shape === */}
    <path d="
      M 85,65 C 90,58 100,52 115,48 C 130,44 148,42 168,45
      C 188,48 205,55 220,65 C 235,75 248,88 258,102
      C 268,116 275,132 280,150 C 285,168 288,186 288,205
      C 288,224 284,242 276,258 C 268,274 256,288 242,298
      C 228,308 212,314 195,316 C 178,318 160,316 145,310
      C 130,304 118,294 108,280 C 98,266 90,248 85,228
      C 80,208 78,186 78,165 C 78,144 80,124 84,106
      C 88,88 82,72 85,65Z
    " fill="#141822" stroke="rgba(240,235,224,0.15)" strokeWidth="1.2" />

    {/* Nicoya Peninsula (northwest bulge) */}
    <path d="
      M 85,65 C 78,70 68,80 62,95 C 56,110 54,128 58,145
      C 62,160 70,170 80,175 C 78,165 78,148 80,132
      C 82,116 85,100 85,85Z
    " fill="#141822" stroke="rgba(240,235,224,0.12)" strokeWidth="1" />

    {/* Osa Peninsula (southwest) */}
    <path d="
      M 145,310 C 138,318 128,325 120,328 C 112,331 105,330 100,325
      C 95,320 94,312 98,305 C 102,298 110,294 120,296
      C 130,298 138,304 145,310Z
    " fill="#141822" stroke="rgba(240,235,224,0.1)" strokeWidth="0.8" />

    {/* === INTERNAL TERRAIN / MOUNTAIN RIDGES === */}
    {/* Cordillera Central */}
    <path d="M 105,80 C 130,90 160,105 190,125 C 220,145 248,168 268,195"
      fill="none" stroke="rgba(240,235,224,0.06)" strokeWidth="0.5" />
    <path d="M 95,110 C 125,118 155,132 185,150 C 215,168 242,190 262,215"
      fill="none" stroke="rgba(240,235,224,0.05)" strokeWidth="0.5" />
    <path d="M 88,145 C 118,150 148,162 178,178 C 208,194 235,215 255,240"
      fill="none" stroke="rgba(240,235,224,0.05)" strokeWidth="0.5" />

    {/* River lines */}
    <path d="M 160,100 C 155,120 148,140 140,160"
      fill="none" stroke="rgba(68,76,231,0.12)" strokeWidth="0.4" />
    <path d="M 200,140 C 195,160 188,180 180,200"
      fill="none" stroke="rgba(68,76,231,0.1)" strokeWidth="0.4" />
    <path d="M 240,180 C 235,200 228,220 220,240"
      fill="none" stroke="rgba(68,76,231,0.08)" strokeWidth="0.4" />

    {/* === SAN JOSÉ — CAPITAL MARKER === */}
    <circle cx="175" cy="155" r="5" fill="#444CE7" opacity="0.9" />
    <circle cx="175" cy="155" r="12" stroke="#444CE7" strokeWidth="1" fill="none" opacity="0.4">
      <animate attributeName="r" values="12;22;12" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.4;0.05;0.4" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="175" cy="155" r="18" stroke="#444CE7" strokeWidth="0.5" fill="none" opacity="0.15">
      <animate attributeName="r" values="18;30;18" dur="4s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.15;0;0.15" dur="4s" repeatCount="indefinite" />
    </circle>
    <text x="185" y="152" fill="#444CE7" fontSize="9" fontFamily="Manrope" fontWeight="600">San José</text>
    <text x="185" y="163" fill="#444CE7" fontSize="7" fontFamily="Manrope" fontWeight="500" opacity="0.6">Capital</text>

    {/* === SECONDARY CITY MARKERS === */}
    {/* Alajuela */}
    <circle cx="158" cy="138" r="2" fill="rgba(240,235,224,0.4)" />
    <text x="135" y="135" fill="rgba(240,235,224,0.25)" fontSize="7" fontFamily="Manrope">Alajuela</text>

    {/* Cartago */}
    <circle cx="195" cy="168" r="2" fill="rgba(240,235,224,0.35)" />
    <text x="200" y="172" fill="rgba(240,235,224,0.2)" fontSize="6.5" fontFamily="Manrope">Cartago</text>

    {/* Limón (Caribbean coast) */}
    <circle cx="255" cy="185" r="1.5" fill="rgba(240,235,224,0.3)" />
    <text x="260" y="188" fill="rgba(240,235,224,0.2)" fontSize="6" fontFamily="Manrope">Limón</text>

    {/* Liberia (northwest) */}
    <circle cx="105" cy="82" r="1.5" fill="rgba(240,235,224,0.3)" />
    <text x="82" y="78" fill="rgba(240,235,224,0.2)" fontSize="6" fontFamily="Manrope">Liberia</text>

    {/* Puntarenas */}
    <circle cx="120" cy="175" r="1.5" fill="rgba(240,235,224,0.3)" />
    <text x="92" y="180" fill="rgba(240,235,224,0.2)" fontSize="6.5" fontFamily="Manrope">Puntarenas</text>

    {/* === WATERMARK TEXT === */}
    <text x="180" y="250" fill="rgba(240,235,224,0.08)" fontSize="28" fontFamily="Manrope" fontWeight="300" textAnchor="middle">Costa Rica</text>
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
    fireflies={{ originX: 68, originY: 47, count: 10 }}
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
