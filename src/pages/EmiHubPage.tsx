import HubPage from "@/components/templates/HubPage";

const PAGE_DATA = {
  slug: "emi-license",
  categoryTag: "Licensing",
  titleAccent: "EMI",
  titleRest: "Electronic Money Institution license",
  description:
    "Electronic money is increasingly used in domestic and international transactions. An EMI license authorizes your company to issue electronic money, open and manage e-wallets for clients, provide payment services, and create payment systems. Our managers are always ready to advise on implementation and licensing.",
  stats: [
    { value: "10+", label: "Jurisdictions" },
    { value: "6 mo", label: "Typical Timeline" },
    { value: "€350K", label: "Min. Capital EU" },
    { value: "12 yrs", label: "Industry Experience" },
  ],
  jurisdictionsTitle: "Choose Your EMI Jurisdiction",
  jurisdictionsSubtitle:
    "Each jurisdiction offers different capital requirements, timelines, and market access. Lithuania and the UK are the most popular globally — for different reasons.",
  jurisdictions: [
    { regulator: "Finantsinspektsioon", name: "Estonia", badge: "EU · 0% Tax", description: "By obtaining an EMI permit in Estonia, you are legally entitled to issue electronic currency, provide payment services to clients, create and maintain payment systems.", timeline: "6–12 months", href: "/emi-license-in-estonia" },
    { regulator: "MFSA", name: "Malta", badge: "EU · Top 3", description: "Malta is one of the top three countries by number of issued EMI licenses. Single European passport, tax preferences, and loyal attitude to foreign investors.", timeline: "6–12 months", href: "/e-money-license-malta" },
    { regulator: "FCA", name: "United Kingdom", badge: "Tier 1", description: "The United Kingdom continues to be one of the top jurisdictions for obtaining an EMI license — a prerequisite for legal activities related to electronic payments.", timeline: "12–18 months", href: "/e-money-license-uk" },
    { regulator: "Bank of Lithuania", name: "Lithuania", badge: "EU · Top 5", description: "Lithuania has been among the top five countries by number of issued EMI permits for several years. The Bank of Lithuania regulates e-money licensing. One of the most attractive countries for FinTech.", timeline: "6–12 months", href: "/e-money-license-lithuania" },
  ],
  processTitle: "From Application to Licensed EMI",
  processSubtitle:
    "A thorough 6-step process. EMI licensing requires genuine substance — qualified people, real capital, and functional compliance infrastructure.",
  steps: [
    { number: "01", title: "Jurisdiction Selection", description: "We assess your payment model, target markets, capital available, and EU vs. global access to recommend Lithuania, UK, Malta or Estonia." },
    { number: "02", title: "Company Formation", description: "Incorporate with qualified directors holding payment sector experience, compliance officer, AML officer, and registered office in jurisdiction." },
    { number: "03", title: "Capital Deposit", description: "Open corporate account at approved bank. Deposit minimum €350,000 (EU) or £350,000 (UK FCA). Source of funds documentation required." },
    { number: "04", title: "AML/KYC Framework", description: "Develop comprehensive AML policy, KYC procedures, transaction monitoring systems, and risk management framework compliant with EU AMLD." },
    { number: "05", title: "Full Documentation", description: "Business plan, technical security measures, organizational structure, HR policy, personnel qualifications, IT infrastructure — full package." },
    { number: "06", title: "License Issued", description: "Regulator grants the EMI license. E-money issuance and payment services can commence. Ongoing annual reporting and fee obligations." },
  ],
  requirementsTitle: "Core EMI Requirements",
  requirementsIntro:
    "The process of obtaining a license is quite complicated and can also vary from jurisdiction to jurisdiction. Owners of any company applying for an EMI license are subject to thorough due diligence. On average, it takes three to six months, but the terms can vary.",
  requirements: [
    "The company's shareholders must be over 18 years of age",
    "There must be no restrictions imposed by the regulatory authorities of the country in which the licensing takes place",
    "The company must have a registered office in the territory of the state in which the EMI license is issued",
    "The beneficiary has experience in conducting activities related to the field of payment services or those similar to it",
    "Has no unpaid taxes and debts",
    "Has evidence of the source of funds and general wealth",
    "Does not have a criminal record",
    "Has a bank account",
    "The firm must have at least three directors who, together with the shareholders, must have experience in the financial sector",
    "Having a comprehensive human resource policy as well as procedures needed to ensure the business model",
    "Payment of share capital, the amount of which depends on the company's turnover, region of operation, and the nature of the services to be provided",
    "Annual renewal fee — amount varies by jurisdiction",
  ],
  faq: [
    { question: "What are the conditions for obtaining an EMI license?", answer: "In order to obtain an EMI license, it is necessary to prepare a business plan, AML policy and other documents, register a company, hire specialists for mandatory positions (director, AML officer, etc.). Integral elements for obtaining a license are a bank account and contributed authorized capital." },
    { question: "In which countries do we offer EMI licensing?", answer: "Our lawyers have many years' experience in registering EMI companies around the world. Among the most popular countries for obtaining an EMI license are Lithuania, Great Britain, Czech Republic, Cyprus, Bulgaria, Netherlands, Estonia, Malta, Singapore, Hong Kong, New Zealand." },
    { question: "Why do I need an E-Money license?", answer: "The E-Money Issuer license is needed for a business providing payment services, as well as issuing its own electronic money." },
    { question: "What documents are required to obtain an EMI license?", answer: "In order to obtain an EMI license, you must provide: the company's statutory documents, copies of passports and resumes of its participants, business plan, AML policy and other documents. The exact list of documents, depending on the characteristics of future activities and the country of registration you can find out from the specialists of our company." },
  ],
  formTitle: "Apply for an EMI License",
  formSubtitle:
    "Tell us about your payment business — e-wallet, neobank, remittance, card issuing — and we'll design the optimal EMI licensing structure for your market.",
};

const EmiHubPage = () => <HubPage {...PAGE_DATA} />;
export default EmiHubPage;
