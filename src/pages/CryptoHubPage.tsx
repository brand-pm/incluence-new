import HubPage from "@/components/templates/HubPage";

const PAGE_DATA = {
  slug: "cryptocurrency-exchange-license",
  categoryTag: "Licensing",
  titleAccent: "Cryptocurrency",
  titleRest: "exchange license",
  description:
    "Get a crypto exchange license (VASP) in Lithuania, Estonia, Malta, Poland, Switzerland, USA. MiCA-ready EU jurisdictions. Full legal support — from company formation and AML framework to regulator approval.",
  stats: [
    { value: "10+", label: "Jurisdictions" },
    { value: "4–6 wks", label: "Fastest (Lithuania)" },
    { value: "400+", label: "Licenses Obtained" },
    { value: "12 yrs", label: "Industry Experience" },
  ],
  jurisdictionsTitle: "Choose Your VASP Jurisdiction",
  jurisdictionsSubtitle:
    "Each jurisdiction offers a different balance of speed, cost, EU market access and MiCA readiness. We select the right one for your crypto business model.",
  jurisdictions: [
    { regulator: "FIU", name: "Estonia", badge: "EU · E-Residency", description: "Estonia offers relatively simple and quick company registration, favorable taxation, and enjoys investor and partner trust. One of the first EU countries to regulate crypto.", timeline: "3–6 months", href: "/cryptocurrency-exchange-license-in-estonia" },
    { regulator: "FCIS", name: "Lithuania", badge: "EU · MiCA Ready", description: "Fast-track crypto licensing in Lithuania. One of the most progressive FinTech jurisdictions in the EU with a streamlined registration process.", timeline: "1–3 months", href: "/lithuania-crypto-license" },
    { regulator: "FINMA", name: "Switzerland", badge: "Tier 1", description: "Reliable banking system, stable currency, multiple double taxation treaties. Swiss crypto companies enjoy high reputation among investors and partners.", timeline: "6–12 months", href: "/cryptocurrency-exchange-license-in-switzerland" },
    { regulator: "MFSA", name: "Malta", badge: "EU · 4 Classes", description: "Malta is one of the first countries in the world to provide a regulatory framework for blockchain and cryptocurrency companies — the 'Blockchain Island'.", timeline: "6–9 months", href: "/cryptocurrency-license-in-malta" },
    { regulator: "PFSA", name: "Poland", badge: "EU · VASP", description: "Poland offers a regulated environment for cryptocurrency exchange companies. Registration in the Polish Virtual Asset Register required.", timeline: "2–3 months", href: "/poland-crypto-license" },
    { regulator: "FinCEN", name: "USA", badge: "Federal · MSB", description: "Cryptocurrency exchange licensing in the USA requires compliance with state-level Money Transmitter Licenses and federal FinCEN registration.", timeline: "4–8 months", href: "/cryptocurrency-exchange-license-in-the-usa" },
  ],
  processTitle: "From Registration to Licensed VASP",
  processSubtitle:
    "We manage every step of the VASP licensing process. Timeline depends on jurisdiction — fastest with Lithuania at 1–3 months.",
  steps: [
    { number: "01", title: "Jurisdiction Selection", description: "We assess your crypto business model, target EU markets, capital available, and MiCA timeline to recommend Estonia, Lithuania, Malta or another jurisdiction." },
    { number: "02", title: "Company Formation", description: "Incorporate the legal entity — UAB in Lithuania, OÜ in Estonia, or Ltd in Malta. Registered office, directors, shareholders all set up correctly." },
    { number: "03", title: "AML/KYC Framework", description: "Develop comprehensive AML/KYC policies, appoint a qualified local AML Officer (MLRO), and implement transaction monitoring technology." },
    { number: "04", title: "Capital & Banking", description: "Open corporate account at a regulator-approved bank or EMI. Deposit required share capital (€125,000 for exchange operators under MiCA)." },
    { number: "05", title: "Regulator Submission", description: "Submit full application to FCIS (Lithuania), FIU (Estonia), or MFSA (Malta). We manage all follow-up queries and compliance correspondence." },
    { number: "06", title: "License Issued", description: "VASP license granted. Company entered into the official VASP register. Post-licensing compliance support and MiCA transition planning included." },
  ],
  requirementsTitle: "Common VASP Requirements",
  requirementsIntro:
    "Requirements vary by jurisdiction. EU licenses (MiCA-aligned) require stricter compliance frameworks. We prepare the full documentation package — you provide personal documents only.",
  requirements: [
    "Company incorporated in the licensing jurisdiction with registered office",
    "Minimum share capital — €125,000 for exchange operators (MiCA standard)",
    "Qualified local AML Officer (MLRO) appointed — mandatory in all EU jurisdictions",
    "Comprehensive AML/KYC policy including Customer Due Diligence procedures",
    "Transaction monitoring system integrated into platform operations",
    "Sanctions screening against EU, UN and OFAC lists",
    "Passport copies, CVs and source of funds for all directors and shareholders",
    "Detailed business plan covering all crypto services and target markets",
    "IT infrastructure and cybersecurity framework documentation",
    "Proof of no criminal record for all company principals",
    "Bank or EMI account for authorized capital deposit",
  ],
  faq: [
    { question: "What are the conditions for obtaining a license to exchange cryptocurrencies?", answer: "In order to obtain a license for the exchange of cryptocurrencies, it is necessary to select the country of registration and obtaining a license, prepare an AML policy, business plan and other documents, hire the necessary key persons (director, AML officer, etc.). If you have all the documents, you need to correctly submit an application to the regulator. After submitting the application, you need to promptly and correctly answer additional questions. The process of obtaining a license is better to entrust to professionals." },
    { question: "In which countries do we propose to make a license to exchange cryptocurrencies?", answer: "We assist with obtaining crypto licenses all over the world. We help to choose the country of registration according to the regions of future activity, the wishes of customers, types of services, etc. Among the countries for obtaining a license are Lithuania, Estonia, Poland, Bulgaria, Singapore, the USA and others." },
    { question: "Why do I need a license to exchange cryptocurrencies?", answer: "The crypto license is needed to provide services for the exchange of fiat currency for cryptocurrency, one cryptocurrency for another, cryptocurrency for fiat, as well as opening crypto wallets." },
    { question: "What documents are required to obtain a license to exchange cryptocurrencies?", answer: "In order to obtain a license for the exchange of cryptocurrencies, you must provide: the company's statutory documents, copies of passports and resumes of its participants, business plan, AML policy and other documents. The exact list of documents, depending on the characteristics of future activities, you can find out from the specialists of our company." },
  ],
  formTitle: "Apply for a Crypto / VASP License",
  formSubtitle:
    "Tell us about your crypto services — exchange, custody, OTC, wallet — and we'll design the right licensing structure with a full MiCA transition roadmap.",
};

const CryptoHubPage = () => <HubPage {...PAGE_DATA} />;
export default CryptoHubPage;
