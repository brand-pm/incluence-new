import HubPage from "@/components/templates/HubPage";

const PAGE_DATA = {
  categoryTag: "Company Formation · European Union",
  titleAccent: "EU",
  titleRest: "company registration",
  description:
    "The reputation of an EU-registered company is much higher than non-EU entities. Foreign banks and partners are more open to working with EU-based businesses. Incorporate in Estonia, Lithuania, Cyprus, Malta, Czechia, Poland, Ireland, Germany, Netherlands, Luxembourg, Portugal, Bulgaria or Hungary — full incorporation, banking and compliance support.",
  stats: [
    { value: "13", label: "EU Jurisdictions" },
    { value: "9%", label: "Lowest Corporate Tax (HU)" },
    { value: "1–3 wks", label: "Typical Timeline" },
    { value: "Remote", label: "Process Available" },
  ],
  jurisdictionsTitle: "Choose Your EU Jurisdiction",
  jurisdictionsSubtitle:
    "Each EU member state offers a different mix of taxation, banking access, reputation and substance requirements. We match the right one to your business model.",
  jurisdictions: [
    { regulator: "Commercial Register", name: "Estonia", description: "OÜ company with e-Residency. Fully digital incorporation, 0% tax on retained earnings, world-leading e-government infrastructure.", timeline: "1–2 weeks", href: "/open-a-company-in-estonia", badge: "e-Residency" },
    { regulator: "Centre of Registers", name: "Lithuania", description: "UAB company in one of Europe's most fintech-friendly regulators. Strong EMI and PSP licensing pipeline, modern banking ecosystem.", timeline: "1–2 weeks", href: "/register-company-in-lithuania", badge: "Fintech-friendly" },
    { regulator: "Department of Registrar", name: "Cyprus", description: "Limited company with 12.5% corporate tax — one of the lowest in the EU. Extensive double-tax treaty network and IP-friendly regime.", timeline: "1–2 weeks", href: "/company-registration-in-cyprus", badge: "12.5% Tax" },
    { regulator: "Malta Business Registry", name: "Malta", description: "Private limited company with full EU passporting. Effective corporate tax of 5% via refund system. Strong fintech, gaming and shipping sectors.", timeline: "2–3 weeks", href: "/company-registration-in-malta", badge: "EU Passport" },
    { regulator: "Commercial Register", name: "Czechia", description: "s.r.o. (limited liability) — popular for trading and IT in Central Europe. 21% corporate tax, EU member, modern banking and stable economy.", timeline: "2–3 weeks", href: "/company-registration-in-czechia", badge: "Central EU" },
    { regulator: "KRS", name: "Poland", description: "Sp. z o.o. — entry-level company in the EU's fastest-growing economy. 9% corporate tax for small companies, strong domestic market.", timeline: "2–3 weeks", href: "/company-registration-in-poland", badge: "9% (Small)" },
    { regulator: "Companies Registration Office", name: "Ireland", description: "Limited company with 12.5% corporate tax. Premier hub for tech and holding structures with extensive double-tax treaties.", timeline: "1–2 weeks", href: "/company-registration-in-ireland", badge: "Tech & Holding" },
    { regulator: "Handelsregister", name: "Germany", description: "GmbH or UG (haftungsbeschränkt) in Europe's largest economy. Strong reputation, top-tier banking, robust legal framework.", timeline: "3–4 weeks", href: "/company-registration-in-germany", badge: "GmbH · UG" },
    { regulator: "KvK", name: "Netherlands", description: "BV company in a leading European holding jurisdiction. Innovation Box, participation exemption and extensive treaty network.", timeline: "2–3 weeks", href: "/company-registration-netherlands", badge: "Holdings" },
    { regulator: "RCS", name: "Luxembourg", description: "S.à r.l., S.A. or SOPARFI — premier holding and fund jurisdiction. Strong reputation, sophisticated banking and legal infrastructure.", timeline: "2–4 weeks", href: "/company-registration-in-luxembourg", badge: "Holdings & Funds" },
    { regulator: "IRN", name: "Portugal", description: "Lda company in Western Europe. Madeira IBC offers preferential 5% corporate tax. Attractive for IT, e-commerce and Atlantic operations.", timeline: "2–3 weeks", href: "/company-registration-portugal", badge: "Lda · Madeira" },
    { regulator: "Commercial Register", name: "Bulgaria", description: "OOD (limited liability) with 10% flat corporate tax — joint lowest in the EU. Cost-efficient EU base for trading and tech ventures.", timeline: "1–2 weeks", href: "/register-company-in-bulgaria", badge: "10% Flat" },
    { regulator: "Cégbíróság", name: "Hungary", description: "Kft. (limited liability) with 9% flat corporate tax — the lowest in the EU. Central European location with modern banking.", timeline: "1–2 weeks", href: "/starting-a-business-in-hungary", badge: "9% Flat" },
  ],
  processTitle: "How EU Registration Works",
  processSubtitle:
    "A standardised path from jurisdiction selection to a fully compliant operating company with banking in place.",
  steps: [
    { number: "01", title: "Jurisdiction Selection", description: "Select primary business activity, suitable legal form and the optimal EU jurisdiction based on tax, banking and substance requirements." },
    { number: "02", title: "Company Name & Address", description: "Reserve company name with the local registrar. Lease a registered legal address in the chosen country." },
    { number: "03", title: "Incorporation Documents", description: "Prepare Articles of Association — company name, legal form, registered office, founders, directors and share capital — in line with national legislation." },
    { number: "04", title: "Share Capital Deposit", description: "Open a temporary bank account to deposit the share capital. Minimum amount varies by country (Estonia from €0.01, Germany from €25,000)." },
    { number: "05", title: "Registration Filing", description: "Notarisation of incorporation documents and filing in the Trade Register of the chosen country. Power of attorney accepted in most jurisdictions." },
    { number: "06", title: "Bank Account & Operations", description: "Open the company's permanent corporate bank account, register for VAT/tax and start operating activity." },
  ],
  requirementsTitle: "General Requirements",
  requirementsIntro: "",
  requirements: [
    "Civil passport and copy of the beneficiary's international passport. Notarised translations may be required depending on the jurisdiction.",
    "Proof of residence of the beneficiary — typically a utility bill or bank statement no older than 3 months.",
    "Proof of financial solvency — required to open a corporate bank account in the EU. Source of funds documentation for KYC.",
    "Selected company name, legal form and lease of a registered legal address in the chosen jurisdiction.",
    "Articles of Association — company name, legal form, registered office, founders and directors with personal details, and share capital structure.",
    "Temporary bank account for share capital deposit. Notarised incorporation documents for filing in the Trade Register.",
  ],
  faq: [
    { question: "Can a non-resident open a business in the EU?", answer: "Yes. A non-resident who is not on sanctions lists and is not a resident of a sanctioned state can register a company in any EU member state. In some countries a local director may be required to open a bank account, but most jurisdictions accept fully foreign ownership and management." },
    { question: "What is the cost of business registration in Europe?", answer: "The final cost depends on the country of registration, business activity, number of participants and required services. Estonia and Bulgaria are the most affordable; Germany, Switzerland-adjacent jurisdictions and Luxembourg are more expensive due to share capital and notary requirements. For a precise quote, contact our specialists." },
    { question: "Can a company in Europe be registered online?", answer: "Yes. Most EU jurisdictions accept incorporation via power of attorney based on scanned documents. Estonia offers fully digital incorporation through e-Residency. Some jurisdictions (Germany, Luxembourg) require a notary visit, but most steps can still be handled remotely." },
    { question: "How long does it take to open a company in Europe?", answer: "The timeline depends on the country of registration. Estonia, Bulgaria and Hungary can be completed in 1–2 weeks. Most other EU jurisdictions take 2–3 weeks. Bank account opening typically adds another 2–6 weeks depending on the bank's compliance review." },
  ],
  formTitle: "Ready to Incorporate in the EU?",
  formSubtitle:
    "Tell us about your business and we will recommend the best EU jurisdiction, prepare the documents and open your corporate bank account.",
  slug: "company-registration-in-europe",
};

const CompanyRegistrationInEuropePage = () => <HubPage {...PAGE_DATA} />;

export default CompanyRegistrationInEuropePage;
export { CompanyRegistrationInEuropePage };
