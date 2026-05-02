import HubPage from "@/components/templates/HubPage";

const PAGE_DATA = {
  categoryTag: "Company Formation · Offshore",
  titleAccent: "Offshore",
  titleRest: "company formation",
  description:
    "Register an offshore company in BVI, Cayman, Seychelles, Panama, Curaçao, Costa Rica, Isle of Man, St Vincent and other classic offshore jurisdictions. Privacy, zero or minimal taxation, asset protection and fully remote setup. Full incorporation and banking support from Incluence.",
  stats: [
    { value: "9+", label: "Offshore Jurisdictions" },
    { value: "1 wk", label: "Fastest Setup" },
    { value: "0%", label: "Tax (most jurisdictions)" },
    { value: "Remote", label: "Process Available" },
  ],
  jurisdictionsTitle: "Where We Register Offshore Companies",
  jurisdictionsSubtitle:
    "Each offshore jurisdiction offers a distinct mix of privacy, taxation, reputation and banking access. We match the right one to your business profile.",
  jurisdictions: [
    { regulator: "FSC", name: "British Virgin Islands", description: "BVI Business Company (BC) — the world's most popular offshore vehicle. Zero tax, full confidentiality, flexible corporate structure.", timeline: "1–2 weeks", href: "/offshore-in-the-british-virgin-islands", badge: "BC · Zero Tax" },
    { regulator: "CIMA", name: "Cayman Islands", description: "Premier financial center for funds and holdings. No income, capital gains or withholding tax. Sophisticated legal infrastructure.", timeline: "2–3 weeks", href: "/offshore-in-the-cayman-islands", badge: "Funds & Holdings" },
    { regulator: "FSA", name: "Seychelles", description: "International Business Company (IBC) — fast registration, minimal capital, strong privacy laws and political stability.", timeline: "1–2 weeks", href: "/offshore-company-formation-in-seychelles", badge: "IBC · Fast" },
    { regulator: "Public Registry", name: "Panama", description: "Territorial tax system — only locally-sourced income is taxed. Bearer shares allowed, strong privacy, established offshore tradition.", timeline: "2–3 weeks", href: "/panama-company-formation", badge: "Territorial Tax" },
    { regulator: "Chamber of Commerce", name: "Curaçao", description: "iGaming-friendly jurisdiction with the well-known Master Gaming License. Stable Dutch Caribbean legal system.", timeline: "2–4 weeks", href: "/offshore-company-formation-in-curacao", badge: "iGaming-friendly" },
    { regulator: "Public Registry", name: "Costa Rica", description: "SRL (limited liability) with Data Processing license available. Income tax exempt for international operators. 2–5 weeks setup.", timeline: "2–5 weeks", href: "/offshore-costa-rica", badge: "SRL · Data Proc." },
    { regulator: "Companies Registry", name: "Isle of Man", description: "Crown Dependency with strong reputation, reliable banking and 0% corporate tax for most activities. EU-adjacent without EU rules.", timeline: "2–3 weeks", href: "/offshore-in-the-isle-of-man", badge: "Crown Dependency" },
    { regulator: "FSA", name: "St Vincent & Grenadines", description: "Business Company (BC) with annual government fee instead of corporate tax. Strong privacy, simple administration.", timeline: "1–2 weeks", href: "/offshore-company-formation-in-st-vincent-and-the-grenadines", badge: "BC · Annual Fee" },
    { regulator: "Department of Registrar", name: "Cyprus Offshore", description: "Non-domiciled regime with 12.5% corporate tax and extensive treaty network. EU member with offshore-style benefits for non-residents.", timeline: "1–2 weeks", href: "/cyprus-offshore-company-formation", badge: "Non-dom" },
  ],
  processTitle: "How Offshore Registration Works",
  processSubtitle:
    "Standard 4-step path from document preparation to a fully incorporated offshore company with banking in place.",
  steps: [
    { number: "01", title: "Prepare Documents", description: "Apostilled corporate documents. Notarised passport copies of the beneficiary and account manager. Confirmation of income sources and proof of residential address for each shareholder and director." },
    { number: "02", title: "Submit to Registrar", description: "Submit copies of documents and registration forms. Indicate the contacts of the local representative and the registration address in the chosen jurisdiction." },
    { number: "03", title: "Company Incorporated", description: "The registrar issues the statutory documents — typically within one week of filing the complete package. Certificate of Incorporation and Memorandum & Articles delivered." },
    { number: "04", title: "Open Bank Account", description: "Open an offshore corporate account once the company is incorporated. Additional KYC requirements apply depending on the bank, with some banks offering fully remote onboarding." },
  ],
  requirementsTitle: "General Requirements",
  requirementsIntro: "",
  requirements: [
    "Apostilled original corporate documents — required for international recognition and bank onboarding.",
    "Notarised copies of passports of the beneficiary, directors and account manager. CV and proof of professional background may be requested.",
    "Confirmation of the sources of income of all participants and the company as a whole. Source-of-funds documentation is mandatory for KYC.",
    "Proof of actual residential address for each shareholder and director — typically a utility bill or bank statement no older than 3 months.",
    "Letters of recommendation from a bank or professional adviser — required by some jurisdictions and most international banks.",
    "Annual government fee instead of corporate tax in classic offshore jurisdictions. Annual return and registered agent maintenance required.",
  ],
  faq: [
    { question: "How much does it cost to open a company in an offshore zone?", answer: "The final cost depends on the country of registration, nature of activity, number of participants and supporting services required. Seychelles and BVI are the most affordable; Cayman and Isle of Man are higher due to substance requirements. Contact our specialists for an exact quote." },
    { question: "What does it take to open an offshore?", answer: "You need apostilled corporate documents, notarised passport copies, proof of residential address and confirmation of the sources of income for all participants. Some jurisdictions and banks also require letters of recommendation from a bank or professional adviser." },
    { question: "How does the registration of an offshore company work?", answer: "You submit copies of documents and registration forms together with the local representative's contacts and registration address. The registrar issues the statutory documents — Certificate of Incorporation and Memorandum & Articles — within approximately one week of filing." },
    { question: "How to choose the right foreign bank for an offshore company?", answer: "We select banks taking into account the country of registration, residence of beneficiaries and directors, planned turnover, required currencies and regions of payments. Bank reputation and fee structure are also considered. Contact our specialists for a tailored recommendation." },
  ],
  formTitle: "Ready to Set Up Offshore?",
  formSubtitle:
    "Tell us about your business and we will recommend the best offshore jurisdiction, prepare the documents and open your corporate bank account.",
  slug: "offshore-company-formation",
};

const OffshoreFormationPage = () => <HubPage {...PAGE_DATA} />;

export default OffshoreFormationPage;
