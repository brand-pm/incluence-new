import HubPage from "@/components/templates/HubPage";

const PAGE_DATA = {
  categoryTag: "Company Formation · Americas & Asia",
  titleAccent: "Americas & Asia",
  titleRest: "company registration",
  description:
    "Incorporate in the USA, Canada, UAE, Hong Kong, Singapore, Malaysia, Thailand or China. From Asian financial hubs to Middle-Eastern free zones and US LLCs — full incorporation, banking and ongoing compliance under one roof.",
  stats: [
    { value: "8", label: "Jurisdictions Covered" },
    { value: "1–2 wks", label: "Fastest (Singapore)" },
    { value: "0%", label: "UAE Free Zones Tax" },
    { value: "Remote", label: "Process Available" },
  ],
  jurisdictionsTitle: "Choose Your Jurisdiction",
  jurisdictionsSubtitle:
    "Each jurisdiction offers a different mix of tax efficiency, banking access, reputation and substance requirements. We match the right one to your business model.",
  jurisdictions: [
    {
      regulator: "State / IRS",
      name: "USA",
      description:
        "Delaware C-Corp for fundraising and SaaS, Wyoming and Florida LLCs for asset protection. Strong banking, world-class infrastructure and access to the largest consumer market.",
      timeline: "1–2 weeks",
      href: "/open-company-in-usa",
      badge: "LLC · C-Corp",
    },
    {
      regulator: "DED / Free Zones",
      name: "UAE",
      description:
        "Mainland LLC or Free Zone company in Dubai, RAK, IFZA. 0% corporate tax thresholds, no currency controls, residence visa for shareholders.",
      timeline: "2–4 weeks",
      href: "/register-company-in-uae",
      badge: "Mainland · FZ",
    },
    {
      regulator: "Companies Registry",
      name: "Hong Kong",
      description:
        "Limited company under Hong Kong's common-law system. Territorial tax regime, world-class banking, ideal for trading and holding structures.",
      timeline: "1–3 weeks",
      href: "/register-company-in-hong-kong",
      badge: "Asia · Trading Hub",
    },
    {
      regulator: "ACRA",
      name: "Singapore",
      description:
        "Pte Ltd in one of Asia's most respected financial hubs. Strong banking, double-tax treaties, 17% corporate tax with extensive reliefs.",
      timeline: "1–2 weeks",
      href: "/register-company-in-singapore",
      badge: "Asia · Tier 1",
    },
    {
      regulator: "Corporations Canada",
      name: "Canada",
      description:
        "Federal or provincial incorporation in Ontario, BC and other provinces. Strong reputation for cross-border trade with the US and global markets.",
      timeline: "2–4 weeks",
      href: "/company-registration-in-canada",
      badge: "Federal · Provincial",
    },
    {
      regulator: "SSM",
      name: "Malaysia",
      description:
        "Sdn Bhd (private limited) in Kuala Lumpur or Labuan. Cost-efficient Asian base with double-tax treaties and modern banking infrastructure.",
      timeline: "2–4 weeks",
      href: "/malaysia-company-registration",
      badge: "Asia · Sdn Bhd",
    },
    {
      regulator: "DBD",
      name: "Thailand",
      description:
        "Thai Limited Company or BOI-promoted entity. Strategic location for Southeast Asian operations, manufacturing, e-commerce and regional trade.",
      timeline: "3–5 weeks",
      href: "/open-a-company-in-thailand",
      badge: "Asia · SE",
    },
    {
      regulator: "SAMR",
      name: "China",
      description:
        "Wholly Foreign-Owned Enterprise (WFOE) or Joint Venture. Direct access to the world's second-largest consumer market with full operational control.",
      timeline: "2–3 months",
      href: "/company-registration-in-china",
      badge: "WFOE · JV",
    },
  ],
  processTitle: "How Registration Works",
  processSubtitle:
    "A standardised 6-step path from jurisdiction selection to a fully compliant operating company with banking in place.",
  steps: [
    { number: "01", title: "Jurisdiction Selection", description: "We assess your business model, target markets, tax position and substance requirements to recommend the optimal Asian, Middle-Eastern or American jurisdiction." },
    { number: "02", title: "Structure & Documents", description: "Prepare incorporation documents, articles, shareholder and director details. Power of attorney for remote registration where supported." },
    { number: "03", title: "Name Reservation", description: "Reserve company name with the local registrar. Verify availability and compliance with naming rules." },
    { number: "04", title: "Registration Filing", description: "Submit incorporation package to the local registrar (ACRA, Companies Registry, SSM, DED, etc.)." },
    { number: "05", title: "Bank Account Opening", description: "Open corporate account with a local or international bank, EMI or PSP that fits the business profile and target jurisdictions." },
    { number: "06", title: "Compliance Setup", description: "Register for tax, VAT/GST, set up accounting, appoint a company secretary where required. Ongoing administration support included." },
  ],
  requirementsTitle: "General Requirements",
  requirementsIntro: "",
  requirements: [
    "At least one director — residency requirements vary by jurisdiction. Most jurisdictions accept foreign directors; Singapore and Hong Kong require a local secretary.",
    "At least one shareholder — individual or corporate, any nationality. Beneficial ownership disclosure is required in most jurisdictions.",
    "Registered office address in the jurisdiction of incorporation. Free zone packages typically include the registered address.",
    "Passport copies, proof of address and CV for all UBOs and directors. Source of funds documentation for KYC and bank onboarding.",
    "Minimum share capital — often nominal (1 SGD, 1 HKD, 1 AED), but UAE Free Zones and certain US states have specific requirements.",
    "Annual filings — financial statements, annual return, tax returns. Audit thresholds vary by jurisdiction.",
  ],
  faq: [
    { question: "In which countries do you help register companies?", answer: "We cover Asian financial hubs (Singapore, Hong Kong, Malaysia, Thailand, China), Middle-Eastern free zones (UAE) and the Americas (USA, Canada). Each comes with full incorporation, banking and compliance support." },
    { question: "Can I register a company remotely?", answer: "Yes. Most jurisdictions allow remote incorporation through a power of attorney based on scanned documents. Bank account opening sometimes requires a personal visit, but many international banks and EMIs offer fully remote onboarding." },
    { question: "How long does it take to register a company?", answer: "Singapore and US states are the fastest (1–2 weeks). UAE Free Zones, Hong Kong and Canada take 2–4 weeks. Thailand and China typically take 1–3 months due to additional licensing." },
    { question: "Which jurisdiction has the lowest tax?", answer: "UAE Free Zones offer 0% corporate tax up to AED 375,000 of taxable income (9% above). Hong Kong applies a territorial 16.5% rate only on locally-sourced profits. Singapore offers extensive startup reliefs effectively reducing the rate well below 17%." },
  ],
  formTitle: "Ready to Incorporate in Asia or the Americas?",
  formSubtitle:
    "Tell us about your business and we will recommend the best jurisdiction, prepare the documents and open your corporate bank account.",
  slug: "company-registration-americas-asia",
};

const CompanyRegistrationAmericasAsiaPage = () => <HubPage {...PAGE_DATA} />;

export default CompanyRegistrationAmericasAsiaPage;
