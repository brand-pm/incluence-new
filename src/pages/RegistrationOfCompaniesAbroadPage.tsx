import HubPage from "@/components/templates/HubPage";

const PAGE_DATA = {
  categoryTag: "Company Formation · Worldwide",
  titleAccent: "Worldwide",
  titleRest: "company registration",
  description:
    "We help with the registration of companies around the world — EU member states, non-EU Europe, Asian financial hubs, Middle-Eastern free zones, the Americas and classic offshore jurisdictions. Full incorporation, banking and ongoing compliance under one roof.",
  stats: [
    { value: "40+", label: "Jurisdictions Covered" },
    { value: "1–2 wks", label: "Fastest Setup" },
    { value: "2,500+", label: "Companies Registered" },
    { value: "12 yrs", label: "Industry Experience" },
  ],
  jurisdictionsTitle: "Choose Your Region",
  jurisdictionsSubtitle:
    "We cover every major region. Pick the regional hub closest to your business model and explore detailed jurisdictions inside.",
  jurisdictions: [
    { regulator: "13 Jurisdictions", name: "European Union", description: "Estonia, Lithuania, Cyprus, Malta, Czechia, Poland, Ireland, Germany, Netherlands, Luxembourg, Portugal, Bulgaria, Hungary. EU passporting, strong banking, treaty network.", timeline: "1–3 weeks", href: "/company-registration-in-europe", badge: "EU Hub" },
    { regulator: "5 Jurisdictions", name: "Non-EU Europe", description: "United Kingdom, Switzerland, Gibraltar, Croatia, Montenegro. European reputation outside EU framework with competitive tax regimes.", timeline: "1–4 weeks", href: "/company-registration-non-eu-europe", badge: "Non-EU" },
    { regulator: "8 Jurisdictions", name: "Americas & Asia", description: "USA, Canada, UAE, Hong Kong, Singapore, Malaysia, Thailand, China. Asian financial hubs, Middle-Eastern free zones, US LLCs.", timeline: "1–8 weeks", href: "/company-registration-americas-asia", badge: "Asia · Americas" },
    { regulator: "9+ Jurisdictions", name: "Offshore", description: "BVI, Cayman, Seychelles, Panama, Curaçao, Costa Rica, Isle of Man, St Vincent, Cyprus offshore. Privacy, zero tax, asset protection.", timeline: "1–3 weeks", href: "/offshore-company-formation", badge: "Offshore" },
    { regulator: "Marketplace", name: "Ready-Made Companies", description: "Aged offshore and onshore entities ready for immediate use. BVI, Seychelles, UK, Hong Kong, UAE, USA, Estonia and more.", timeline: "1–3 weeks", href: "/ready-made-offshore-companies", badge: "Aged Entities" },
    { regulator: "M&A", name: "Buy a Business Abroad", description: "Acquire an existing operating business in your target jurisdiction. Full M&A advisory, due diligence and post-deal integration.", timeline: "Custom", href: "/buy-a-business-abroad", badge: "M&A" },
  ],
  processTitle: "How Registration Works",
  processSubtitle:
    "A standardised 6-step path from jurisdiction selection to a fully compliant operating company with banking in place.",
  steps: [
    { number: "01", title: "Jurisdiction Selection", description: "We assess your business model, target markets, tax position and substance requirements to recommend the optimal jurisdiction." },
    { number: "02", title: "Structure & Documents", description: "Prepare incorporation documents, articles, shareholder and director details. Power of attorney for remote registration where supported." },
    { number: "03", title: "Name Reservation", description: "Reserve company name with the local registrar. Verify availability and compliance with naming rules of the jurisdiction." },
    { number: "04", title: "Registration Filing", description: "Submit incorporation package to the local registrar. Local agent or POA-based filing as required by jurisdiction." },
    { number: "05", title: "Bank Account Opening", description: "Open corporate account with a local or international bank, EMI or PSP that fits the business profile and target jurisdictions." },
    { number: "06", title: "Compliance Setup", description: "Register for tax, VAT/GST, set up accounting, appoint a company secretary where required. Ongoing administration support included." },
  ],
  requirementsTitle: "General Requirements",
  requirementsIntro: "",
  requirements: [
    "At least one director — residency requirements vary by jurisdiction. Singapore, Hong Kong and the UK require a local company secretary.",
    "At least one shareholder — individual or corporate, any nationality. Beneficial ownership disclosure required in most jurisdictions.",
    "Registered office address in the jurisdiction of incorporation. Virtual or serviced office accepted in most cases.",
    "Passport copies, proof of address and CV for all UBOs and directors. Source of funds documentation for KYC and bank onboarding.",
    "Minimum share capital — varies (often nominal: 1 SGD, 1 HKD, 1 AED). Higher in Switzerland, Germany and certain offshore jurisdictions.",
    "Annual filings — financial statements, annual return, tax returns. Audit thresholds vary by jurisdiction.",
  ],
  faq: [
    { question: "In which countries do you help register a company?", answer: "We help with the registration of companies around the world, including EU member states, non-EU European countries, Asian jurisdictions, the USA, Canada, the Middle East, Australia and Oceania, and classic offshore zones." },
    { question: "Can I register a company abroad online?", answer: "Detailed conditions depend on the legislation of the country of registration. In most cases companies are registered by local representatives based on a power of attorney. Some jurisdictions also accept fully scanned documentation. Personal visits are required in a small number of jurisdictions." },
    { question: "How long does it take to register a company abroad?", answer: "The process depends on the legislation of the country of incorporation. Singapore and US states are the fastest (1–2 weeks). Most other jurisdictions take 2–4 weeks. Some Asian jurisdictions (Thailand, China) and Free Zones take 1–3 months." },
  ],
  formTitle: "Ready to Incorporate?",
  formSubtitle:
    "Tell us about your business and we will recommend the best jurisdiction, prepare the documents and open your corporate bank account.",
  slug: "registration-of-companies-abroad",
};

const RegistrationOfCompaniesAbroadPage = () => <HubPage {...PAGE_DATA} />;

export default RegistrationOfCompaniesAbroadPage;
