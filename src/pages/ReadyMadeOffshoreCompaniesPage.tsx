import HubPage from "@/components/templates/HubPage";

const PAGE_DATA = {
  categoryTag: "Company Formation · Ready-Made",
  titleAccent: "Ready-Made",
  titleRest: "offshore companies",
  description:
    "Acquire an aged offshore or onshore entity with a clean history — no debts, no obligations, ready to operate immediately. We help you select and re-register companies in BVI, Seychelles, Hong Kong, UK, UAE, USA, Estonia and other jurisdictions. Save time and start business activity right after the purchase agreement is signed.",
  stats: [
    { value: "100+", label: "Aged Entities Available" },
    { value: "10+", label: "Jurisdictions" },
    { value: "1–3 wks", label: "Re-registration Timeline" },
    { value: "Remote", label: "Process Available" },
  ],
  jurisdictionsTitle: "Available Ready-Made Jurisdictions",
  jurisdictionsSubtitle:
    "Choose between classic offshore zones with annual government fees, midshore jurisdictions with international reputation, and onshore entities for serious operations.",
  jurisdictions: [
    { regulator: "FSC", name: "British Virgin Islands", description: "Aged BVI Business Companies. Zero tax, full confidentiality, the most reputable classic offshore vehicle.", timeline: "1–2 weeks", href: "/offshore-in-the-british-virgin-islands", badge: "BC · Zero Tax" },
    { regulator: "FSA", name: "Seychelles", description: "Aged IBC entities — fast re-registration, minimal capital, strong privacy laws and annual government fee instead of tax.", timeline: "1–2 weeks", href: "/offshore-company-formation-in-seychelles", badge: "IBC · Aged" },
    { regulator: "Companies Registry", name: "Hong Kong", description: "Ready-made limited companies in Hong Kong. Territorial tax regime, world-class banking, ideal for trading and holding.", timeline: "1–3 weeks", href: "/buy-ready-made-company-in-hong-kong", badge: "Aged Ltd" },
    { regulator: "Companies House", name: "United Kingdom", description: "Aged UK LTD companies. English common-law jurisdiction with a premium global reputation and strong banking access.", timeline: "1–2 weeks", href: "/purchase-a-company-in-england", badge: "Aged LTD" },
    { regulator: "DED / Free Zones", name: "UAE", description: "Ready-made Free Zone or Mainland companies. 0% corporate tax thresholds, residence visa, no currency controls.", timeline: "2–4 weeks", href: "/purchase-of-a-company-in-the-uae", badge: "Free Zone" },
    { regulator: "State / IRS", name: "USA", description: "Aged LLC entities in Delaware, Wyoming, Florida and other states. Strong banking access for SaaS, e-commerce and global operations.", timeline: "1–2 weeks", href: "/purchase-of-a-company-in-the-usa", badge: "Aged LLC" },
    { regulator: "Commercial Register", name: "Estonia", description: "Aged OÜ companies with e-Residency support. Fully digital management, 0% tax on retained earnings, EU jurisdiction.", timeline: "1–2 weeks", href: "/buy-company-in-estonia", badge: "Aged OÜ" },
    { regulator: "Marketplace", name: "All Listings", description: "Browse the full marketplace of available ready-made entities across jurisdictions, ages and price points.", timeline: "Browse", href: "/marketplace", badge: "Marketplace" },
    { regulator: "Custom Request", name: "Other Jurisdictions", description: "Looking for a ready-made company in a different jurisdiction? Contact us for a tailored search across our partner network.", timeline: "Custom", href: "/contact", badge: "On Request" },
  ],
  processTitle: "How the Purchase Works",
  processSubtitle:
    "Standard 4-step path from selecting an entity to fully completed re-registration with banking transfer where applicable.",
  steps: [
    { number: "01", title: "Select Entity", description: "Our specialists analyse your requirements (jurisdiction, age, sector, banking) and present several pre-vetted options to choose from." },
    { number: "02", title: "Due Diligence", description: "We confirm the entity has no debts, obligations or regulatory issues. Full company history and corporate documents reviewed before purchase." },
    { number: "03", title: "Re-registration", description: "Re-registration is handled by local representatives based on power of attorney or via personal visit. New directors and shareholders appointed." },
    { number: "04", title: "Bank Account Transfer", description: "If the company has an existing bank account, we notify the bank of the change in signatories. The bank performs KYC on the new beneficiaries." },
  ],
  requirementsTitle: "What to Consider Before Buying",
  requirementsIntro: "",
  requirements: [
    "Business activity must typically be conducted outside the country of registration in classic offshore jurisdictions to maintain tax exemption.",
    "Some jurisdictions require maintaining and filing annual reports. Audit may be mandatory in midshore jurisdictions like Hong Kong and the UK.",
    "Company director residency may be required (Singapore, Hong Kong, UK). We provide nominee director services where needed.",
    "Annual government fee replaces corporate income tax in most classic offshore jurisdictions (typically $100–$1,500 depending on jurisdiction).",
    "If the company has an existing bank account, the bank will perform KYC on the new beneficiaries. There is no guarantee the account remains open after the change.",
    "Choose jurisdiction based on reputation, location of suppliers and customers, and partner requirements. Some counterparties refuse to work with classic offshore entities.",
  ],
  faq: [
    { question: "In which countries do you help with purchasing offshore companies?", answer: "We help with the purchase of companies in any offshore jurisdiction not subject to international sanctions. The most popular are BVI, Seychelles, Saint Vincent & Grenadines, Saint Lucia, Marshall Islands, Vanuatu and Belize. Midshore options include the United Kingdom and Hong Kong." },
    { question: "Can I buy an offshore company online?", answer: "Yes, the selection process can be completed entirely online. Re-registration of the company is typically handled by local representatives based on a power of attorney. Some jurisdictions accept fully scanned documents; a small number require a personal visit." },
    { question: "How long does the process of buying an offshore company take?", answer: "The conditions for re-registering an offshore company depend on the country of registration. Most purchases complete within 1–3 weeks. Bank account transfer or opening typically adds another 2–6 weeks depending on the bank's compliance review." },
    { question: "What should I consider when choosing a jurisdiction?", answer: "Three key factors: reputation (UK and Hong Kong look more reputable to international counterparties), location (Hong Kong is ideal for China trade), and partner requirements (some suppliers refuse to work with companies from certain offshore zones like Seychelles)." },
  ],
  formTitle: "Ready to Acquire a Company?",
  formSubtitle:
    "Tell us about your business needs and we will present pre-vetted ready-made companies that match your requirements.",
  slug: "ready-made-offshore-companies",
};

const ReadyMadeOffshoreCompaniesPage = () => <HubPage {...PAGE_DATA} />;

export default ReadyMadeOffshoreCompaniesPage;
export { ReadyMadeOffshoreCompaniesPage };
