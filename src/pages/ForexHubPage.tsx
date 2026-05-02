import HubPage from "@/components/templates/HubPage";

const PAGE_DATA = {
  slug: "forex-license",
  categoryTag: "Licensing",
  titleAccent: "Forex",
  titleRest: "broker license",
  description:
    "Get a Forex broker license in Cyprus (CySEC), Malta (MFSA), Vanuatu (VFSC), Montenegro, Mauritius, Seychelles. EU MiFID II passporting and offshore options. Full legal support from company formation to regulator approval.",
  stats: [
    { value: "8+", label: "Jurisdictions" },
    { value: "2–3 mo", label: "Fastest License" },
    { value: "500+", label: "Licenses Obtained" },
    { value: "12 yrs", label: "Industry Experience" },
  ],
  jurisdictionsTitle: "Choose Your Jurisdiction",
  jurisdictionsSubtitle:
    "Each jurisdiction offers different levels of credibility, market access, and regulatory requirements. We match your business model to the right license.",
  jurisdictions: [
    { regulator: "CySEC", name: "Cyprus", badge: "EU Regulated", description: "If a Forex broker is planning to expand activities in the European Union, Cyprus is usually chosen for this purpose. CySEC license allows brokers to legally operate, take customer deposits, and perform other legal actions in any EU member state.", timeline: "6–9 months", href: "/cyprus-forex-license" },
    { regulator: "MFSA", name: "Malta", badge: "EU Regulated", description: "In order to obtain a forex license in Malta, it is necessary to register a company, prepare policies, technical documentation and other documents. After opening an account and depositing the authorized capital, submit an application to the regulator.", timeline: "5–7 months", href: "/forex-broker-licence-in-malta" },
    { regulator: "VFSC", name: "Vanuatu", badge: "Offshore", description: "Forex licensing requires the applicant to comply with certain requirements and conditions. Business owners choose Vanuatu because the Financial Services Commission has established the most favorable conditions for licensing companies in this jurisdiction.", timeline: "2–3 months", href: "/forex-broker-licence-in-vanuatu" },
    { regulator: "SEC", name: "Montenegro", badge: "Emerging", description: "A license provides a Forex broker with access to professional stock markets and gives the legal right to conduct trading operations. For traders and investors, a license is a guarantee of reliability and a good reputation of a broker.", timeline: "4–7 months", href: "/forex-broker-licence-in-montenegro" },
    { regulator: "FSC", name: "Mauritius", badge: "Offshore", description: "Companies registered in Mauritius can apply for a license that allows them to operate legally with options, securities, and futures. It is also the document that authorizes companies to trade in foreign exchange markets.", timeline: "3–6 months", href: "/forex-broker-licence-in-mauritius" },
    { regulator: "FSAS", name: "Seychelles", badge: "Offshore", description: "Relatively low financial costs for registration. Quick processing of license applications — around 3 months. Required share capital 50,000 USD. Corporate tax rate only 1.5%.", timeline: "2–3 months", href: "/forex-license-seychelles" },
  ],
  processTitle: "From Application to License",
  processSubtitle:
    "We manage every step. You focus on building your brokerage while we navigate the regulatory process.",
  steps: [
    { number: "01", title: "Document Preparation", description: "Preparation of a package of documents for the registration of a legal entity." },
    { number: "02", title: "Company Establishment", description: "Establishment of a Forex company to provide brokerage services." },
    { number: "03", title: "Bank Accounts & Capital", description: "Opening bank accounts to pay the authorized capital and carry out financial transfers." },
    { number: "04", title: "Licensing Application", description: "Applying for Forex licensing and support of this process." },
    { number: "05", title: "Regulator Review", description: "As a rule, it takes 3-4 months to get a Forex broker license, but in some cases, the procedure may last up to 9 months or even longer." },
    { number: "06", title: "License Issued", description: "Regulator approves the license. Just submit an application, and we will take care of the licensing process, reducing your involvement to a minimum." },
  ],
  requirementsTitle: "Minimum Requirements",
  requirementsIntro:
    "An investment company whose activities are related to the Forex market must comply with certain requirements. They vary depending on the country where you wish to obtain the Forex license.",
  requirements: [
    "The size of the authorized capital of the company that receives a license must be no less than 100 thousand USD",
    "Registration of a Forex company must imply the presence of certain employees (directors, accountants, AML officers) in the number required by the legislation of the specific country",
    "The license for investment activity implies payment of all state fees. This must be done before applying for licensing",
    "A Memorandum of Association or a resolution",
    "Articles of Association of the company",
    "Business plan",
    "A description of the organizational structure",
    "Proof of paid-up authorized capital",
    "A list of shareholders and their shares in the company",
  ],
  faq: [
    { question: "What are the requirements for obtaining a Forex license?", answer: "In order to obtain a forex license, it is necessary to register a company, prepare policies, technical documentation and other documents. After opening an account and depositing the authorized capital it is necessary to submit an application to the regulator. After obtaining a license, it is necessary to demonstrate the activity of the company in order to avoid its cancellation." },
    { question: "In which countries do we help with obtaining an investment license?", answer: "Our lawyers have many years' experience in obtaining investment licenses. Among the most popular countries for obtaining an investment license are Cyprus, Lithuania, Malta, Montenegro, Vanuatu, Mauritius, Labuan, Seychelles." },
    { question: "What is the cost of an investment license?", answer: "The final cost of obtaining an investment license is influenced by various factors (the country of registration of the company, the exact list of future services, the region of operation, etc.). You can find out the exact cost of obtaining an investment license by contacting our specialists." },
    { question: "What documents are required to obtain an investment license?", answer: "In order to obtain an investment license, the following documents are required: statutory documents of the company, business plan, AML policy, rules for using the resource, confirmation of the identity and experience of company members, technical documentation." },
  ],
  formTitle: "Ready to License Your Forex Brokerage?",
  formSubtitle:
    "Tell us about your business and we'll identify the right jurisdiction, structure and timeline. Response within 24 hours.",
};

const ForexHubPage = () => <HubPage {...PAGE_DATA} />;
export default ForexHubPage;
