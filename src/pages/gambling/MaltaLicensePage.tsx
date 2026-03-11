import LicensePageTemplate from "@/components/LicensePageTemplate";

/* ── Malta-specific SVG map ──────────────────────────── */

const MaltaMapSvg = (
  <svg
    className="absolute pointer-events-none z-[1]"
    style={{ right: '18%', top: '50%', transform: 'translateY(-50%)', width: '420px', height: '520px' }}
    viewBox="0 0 300 400" fill="none"
  >
    {/* === GOZO === */}
    <path d="M65 55 C72 42, 88 35, 108 38 C125 40, 140 48, 148 60 C154 70, 152 82, 145 92 C138 100, 125 106, 110 108 C95 110, 78 106, 68 96 C58 86, 55 70, 65 55Z"
      fill="#141822" stroke="rgba(240,235,224,0.12)" strokeWidth="1" />
    <path d="M85 50 L95 80 L75 95" stroke="rgba(240,235,224,0.06)" strokeWidth="0.5" fill="none" />
    <path d="M110 42 L108 75 L130 85" stroke="rgba(240,235,224,0.06)" strokeWidth="0.5" fill="none" />
    <circle cx="105" cy="72" r="2" fill="rgba(240,235,224,0.35)" />
    <text x="80" y="68" fill="rgba(240,235,224,0.3)" fontSize="7" fontFamily="Manrope" fontWeight="400">Victoria</text>

    {/* === COMINO === */}
    <ellipse cx="140" cy="120" rx="10" ry="6" fill="#141822" stroke="rgba(240,235,224,0.1)" strokeWidth="0.8" />

    {/* === MAIN MALTA ISLAND === */}
    <path d="
      M115 148 C120 140, 132 135, 148 132 C165 130, 182 132, 195 138
      C208 144, 218 148, 225 155 C232 162, 238 168, 240 178
      C243 190, 242 200, 238 212 C234 225, 228 235, 220 248
      C215 258, 210 268, 200 278 C192 286, 182 292, 170 295
      C158 298, 145 296, 135 290 C125 284, 118 275, 114 264
      C110 252, 108 240, 110 228 C112 216, 115 205, 116 195
      C117 182, 115 165, 115 148Z
    " fill="#141822" stroke="rgba(240,235,224,0.15)" strokeWidth="1.2" />
    <path d="M148 132 C142 125, 138 118, 142 114 C146 110, 155 112, 158 118 C160 124, 155 130, 148 132Z"
      fill="#141822" stroke="rgba(240,235,224,0.1)" strokeWidth="0.8" />
    <path d="M140 155 L165 180 L145 210" stroke="rgba(240,235,224,0.05)" strokeWidth="0.5" fill="none" />
    <path d="M175 145 L180 185 L210 200" stroke="rgba(240,235,224,0.05)" strokeWidth="0.5" fill="none" />
    <path d="M130 220 L165 230 L175 260" stroke="rgba(240,235,224,0.05)" strokeWidth="0.5" fill="none" />
    <path d="M155 175 L195 190 L210 225" stroke="rgba(240,235,224,0.05)" strokeWidth="0.5" fill="none" />

    {/* === CITY MARKERS === */}
    <circle cx="205" cy="195" r="5" fill="#444CE7" opacity="0.9" />
    <circle cx="205" cy="195" r="12" stroke="#444CE7" strokeWidth="1" fill="none" opacity="0.4">
      <animate attributeName="r" values="12;22;12" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.4;0.05;0.4" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="205" cy="195" r="18" stroke="#444CE7" strokeWidth="0.5" fill="none" opacity="0.15">
      <animate attributeName="r" values="18;30;18" dur="4s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.15;0;0.15" dur="4s" repeatCount="indefinite" />
    </circle>
    <text x="215" y="192" fill="#444CE7" fontSize="9" fontFamily="Manrope" fontWeight="600">Valletta</text>
    <text x="215" y="203" fill="#444CE7" fontSize="7" fontFamily="Manrope" fontWeight="500" opacity="0.6">MGA HQ</text>

    <circle cx="155" cy="195" r="2" fill="rgba(240,235,224,0.4)" />
    <text x="135" y="190" fill="rgba(240,235,224,0.25)" fontSize="7" fontFamily="Manrope">Mdina</text>
    <circle cx="195" cy="178" r="1.5" fill="rgba(240,235,224,0.3)" />
    <text x="200" y="175" fill="rgba(240,235,224,0.2)" fontSize="6" fontFamily="Manrope">Sliema</text>
    <circle cx="210" cy="248" r="1.5" fill="rgba(240,235,224,0.3)" />
    <text x="216" y="252" fill="rgba(240,235,224,0.2)" fontSize="6.5" fontFamily="Manrope">Marsaskala</text>
    <circle cx="185" cy="275" r="1.5" fill="rgba(240,235,224,0.3)" />
    <text x="155" y="282" fill="rgba(240,235,224,0.2)" fontSize="6.5" fontFamily="Manrope">Birżebbuġa</text>

    <text x="150" y="225" fill="rgba(240,235,224,0.08)" fontSize="28" fontFamily="Manrope" fontWeight="300" textAnchor="middle">Malta</text>
  </svg>
);

/* ── Page data ───────────────────────────────────────── */

const MaltaLicensePage = () => (
  <LicensePageTemplate
    breadcrumbs={[
      { label: "Incluence", href: "/" },
      { label: "Gamble license", href: "/licenses/gambling" },
      { label: "Malta Gaming license" },
    ]}
    hero={{
      tag: "Gambling License",
      subTag: "EU · MGA",
      titleAccent: "Malta",
      titleRest: "Gaming\nLicense",
      description:
        "Malta is a state with one of the most well-regulated systems of gambling activities. The MGA — Malta Gaming Authority — not only regulates gambling activities but also directly licenses gambling entities. The license is issued for five years and is renewable.",
      cta1: "Get a Free Quote →",
      cta2: "View Requirements",
    }}
    mapSvg={MaltaMapSvg}
    fireflies={{ originX: 72, originY: 48, count: 10 }}
    facts={[
      { label: "Jurisdiction", value: "Malta", cls: "text-[#F0EBE0]" },
      { label: "Regulator", value: "MGA", cls: "text-[#444CE7] font-semibold" },
      { label: "License valid", value: "5 years", cls: "text-[#F0EBE0]" },
      { label: "Timeline", value: "~6 months", cls: "text-[#F0EBE0]" },
      { label: "Cost", value: "On request", cls: "text-[#9A9590] italic" },
      { label: "Renewal", value: "Extendable", cls: "text-[#F0EBE0]" },
    ]}
    process={{
      tag: "— Process",
      title: "How to obtain a Malta gaming license",
      subtitle:
        "A structured 8-step process. We handle every stage — you only provide basic information.",
    }}
    steps={[
      { num: "01", title: "Company registration in Malta", body: "It is necessary to register a local company, for which a license will subsequently be issued. You should select the name of the company, indicate the participants and provide their documents." },
      { num: "02", title: "Account opening", body: "The company needs to open a bank account in order to deposit the share capital. Opening an account is a complex process that should be entrusted to professionals. A package of documents is collected and negotiations are conducted." },
      { num: "03", title: "Contribution of authorized capital", body: "The exact amount of authorized capital depends on the type of the license. The beneficiary must provide documents on the source of origin of funds contributed as authorized capital upon bank's request." },
      { num: "04", title: "Hiring required employees", body: "The company must have key positions employees, some of them must be local. We will help with the search and selection of employees." },
      { num: "05", title: "Office rent", body: "Office rent is not mandatory, but having one will significantly increase your chances of obtaining a license. We will select a budget option that meets the requirements." },
      { num: "06", title: "Preparation of documents for applying for a license", body: "It is necessary to prepare a business plan, and policies. In addition, application forms must be filled out. The client will only need to provide basic information, on the basis of which we will prepare documents, taking into account local legislation." },
    ]}
    finalSteps={{
      step7: {
        num: "07",
        title: "Filing an application",
        body: "It is necessary to submit an application to the regulator after preparing the company and documents. After submitting an application, you must be ready to answer additional questions from the regulator. We will take care of timely and competent answers.",
      },
      step8: {
        num: "08",
        title: "Obtaining a license",
        body: "The company receives a license after successfully passing the previous stages. At the same time, it must begin work within six months from the date of receipt of the license. Otherwise, the license may be cancelled.",
        badge: "~6 months total",
      },
    }}
    requirements={{
      intro:
        "Malta's MGA is one of the most rigorous gaming regulators in the world. Operators must demonstrate genuine substance — a registered company, physical office presence, local employees, and sufficient capitalization. The authority reviews every detail of your business model, ownership structure, and technical platform.",
      docsTitle: "Documents required",
      docs: [
        "Copies of passports and confirmation of the address of directors and shareholders",
        "Documents confirming the experience and well-being of the company's participants",
        "Statutory documents of the company",
        "Technical documentation",
        "Company policies",
        "Business plan",
      ],
      checklistDocs: [
        "Passport copies — directors & shareholders",
        "Address confirmation — directors & shareholders",
        "Experience & background documentation",
        "Company statutory documents",
        "Technical platform documentation",
        "Company policies (AML, responsible gambling)",
      ],
      checklistNote:
        "We prepare and verify all documents. You provide basic information — we handle the rest.",
    }}
    faqs={[
      { q: "How to open an online casino in Malta?", a: "In order to open an online casino in Malta, you need to prepare a business plan, register a company, obtain a license, set up a technical base and open a bank account. You should carefully prepare all the documentation and correctly apply for a license for the online casino creation. These processes should be entrusted to professionals." },
      { q: "What are the terms of registration of a gaming license in Malta?", a: "The company registration and the gambling license obtaining in Malta takes about 6 months." },
      { q: "What documents are required to obtain a gaming license in Malta?", a: "In order to obtain a gambling license in Malta, you must submit: copies of passports and confirmation of the address of directors and shareholders of the company; documents confirming the experience and well-being of the company's participants; statutory documents of the company; technical documentation; company policies." },
      { q: "What is the cost of obtaining a gambling license in Malta?", a: "Various factors (the list of services offered, the number of domains, etc.) affect the final cost of obtaining a license for a gambling business in Malta. You can find out the exact cost of obtaining a license for a gambling business in Malta by contacting our specialists." },
    ]}
    relatedTag="— Related"
    relatedTitle="Other gambling jurisdictions"
    related={[
      { href: "/licenses/gambling/costa-rica", flag: "🇨🇷", reg: "Municipality", name: "Gambling License in Costa Rica", desc: "A Data Processing license allowing operators to legally organize online gambling. Fast and cost-effective entry." },
      { href: "/licenses/gambling/isle-of-man", flag: "🇮🇲", reg: "GSC", name: "Gambling License of the Isle of Man", desc: "One of the most advanced telecommunications infrastructures. GSC licenses all gambling types under one permit." },
      { href: "/licenses/gambling/curacao", flag: "🇨🇼", reg: "CGA", name: "Curacao Gaming License", desc: "Simple and business-friendly legislation. Low taxation, accessibility, and one of the shortest licensing timelines." },
    ]}
    contact={{
      tag: "— Get in Touch",
      title: "Start your Malta MGA application",
      description:
        "Tell us about your business model and target markets. We will assess your application and provide a detailed cost breakdown based on your specific requirements.",
      benefits: [
        "Fixed fee pricing — no hourly surprises",
        "Senior attorneys on every case, no juniors",
        "Response within 2 business hours, Mon–Fri",
      ],
      licenseOptions: [
        "Malta / MGA License",
        "Gambling License in Costa Rica",
        "Isle of Man / GSC",
        "Curacao Gaming License",
        "Not sure — need advice",
      ],
      defaultLicense: "Malta / MGA License",
    }}
  />
);

export default MaltaLicensePage;
