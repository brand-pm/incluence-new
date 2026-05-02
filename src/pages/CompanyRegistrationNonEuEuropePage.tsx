import HubPage from "@/components/templates/HubPage";

const PAGE_DATA = {
  categoryTag: "Company Formation · Non-EU Europe",
  titleAccent: "Non-EU Europe",
  titleRest: "company registration",
  description:
    "Incorporate in the United Kingdom, Switzerland, Gibraltar, Croatia or Montenegro. European reputation outside the EU framework — strong banking, flexible structures and competitive tax regimes. Full incorporation, banking and compliance support.",
  stats: [
    { value: "5", label: "Jurisdictions Covered" },
    { value: "1–3 wks", label: "Typical Timeline" },
    { value: "9%", label: "Lowest Corporate Tax" },
    { value: "Remote", label: "Process Available" },
  ],
  jurisdictionsTitle: "Choose Your Jurisdiction",
  jurisdictionsSubtitle:
    "Each non-EU European jurisdiction offers a distinct mix of reputation, taxation and banking access. We match the right one to your business model.",
  jurisdictions: [
    {
      regulator: "Companies House",
      name: "United Kingdom",
      description:
        "LTD or LLP company in one of the world's most respected business jurisdictions. Strong banking access, English common law, 25% corporate tax with reliefs for small companies.",
      timeline: "1–2 weeks",
      href: "/register-company-in-uk",
      badge: "Tier 1",
    },
    {
      regulator: "Commercial Register",
      name: "Switzerland",
      description:
        "AG or GmbH formation in one of the world's most stable jurisdictions. Premium reputation, multi-currency banking, double-tax treaties and political neutrality.",
      timeline: "2–4 weeks",
      href: "/register-company-in-switzerland",
      badge: "Premium",
    },
    {
      regulator: "Companies House Gibraltar",
      name: "Gibraltar",
      description:
        "Crypto-friendly jurisdiction with a clear DLT regulatory framework. Common-law system, English-speaking, 12.5% corporate tax for local activities.",
      timeline: "2–3 weeks",
      href: "/company-registration-in-gibraltar",
      badge: "Crypto-friendly",
    },
    {
      regulator: "Court Register",
      name: "Croatia",
      description:
        "d.o.o. (limited liability) formation in an EU-adjacent Adriatic jurisdiction. Modern infrastructure, EU member with euro adoption, attractive for tourism and tech ventures.",
      timeline: "2–3 weeks",
      href: "/company-registration-in-croatia",
      badge: "EU Member",
    },
    {
      regulator: "Central Register",
      name: "Montenegro",
      description:
        "9% flat corporate tax — one of the lowest in Europe. EU candidate country, euro as official currency, simple incorporation and competitive operating costs.",
      timeline: "1–2 weeks",
      href: "/starting-a-business-in-montenegro",
      badge: "9% Flat Tax",
    },
  ],
  processTitle: "How Registration Works",
  processSubtitle:
    "A standardised 6-step path from jurisdiction selection to a fully compliant operating company with banking in place.",
  steps: [
    { number: "01", title: "Jurisdiction Selection", description: "We assess your business model, target markets and tax position to recommend the optimal non-EU European jurisdiction." },
    { number: "02", title: "Structure & Documents", description: "Prepare incorporation documents, articles, shareholder and director details. Power of attorney for remote registration where supported." },
    { number: "03", title: "Name Reservation", description: "Reserve company name with the local registrar. Verify availability and compliance with naming rules." },
    { number: "04", title: "Registration Filing", description: "Submit the incorporation package to the local registrar. Local agent or POA-based filing as required by jurisdiction." },
    { number: "05", title: "Bank Account Opening", description: "Open a corporate account with a local or international bank, EMI or PSP that fits the business profile." },
    { number: "06", title: "Compliance Setup", description: "Register for tax and VAT, set up accounting, appoint a company secretary or registered agent where required." },
  ],
  requirementsTitle: "General Requirements",
  requirementsIntro: "",
  requirements: [
    "At least one director — residency requirements vary by jurisdiction. Switzerland requires at least one Swiss-resident director or signatory. UK and Gibraltar accept fully foreign directors.",
    "At least one shareholder — individual or corporate, any nationality. Beneficial ownership disclosure is required in all five jurisdictions.",
    "Registered office address in the jurisdiction of incorporation. Virtual or serviced office arrangements are accepted in most cases.",
    "Passport copies, proof of address and CV for all UBOs and directors. Source of funds documentation for KYC and bank onboarding.",
    "Minimum share capital — UK from £1, Gibraltar from £100, Croatia from €2,500, Montenegro from €1, Switzerland from CHF 20,000 (GmbH) or CHF 100,000 (AG, 50% paid in).",
    "Annual filings — financial statements, annual return and tax returns according to the rules of the chosen jurisdiction.",
  ],
  faq: [
    { question: "Why choose a non-EU European jurisdiction over an EU one?", answer: "Non-EU European jurisdictions combine European reputation with greater regulatory flexibility, lower taxation (Montenegro 9%, Gibraltar 12.5%) and freedom from certain EU-wide reporting and harmonisation rules. They are particularly attractive for crypto, holding and trading structures." },
    { question: "Can I register a company remotely?", answer: "Yes. UK, Gibraltar, Croatia and Montenegro all allow remote incorporation through a power of attorney. Switzerland generally requires either a local resident director or a personal visit for notarisation, but most steps can still be handled remotely." },
    { question: "How long does registration take?", answer: "Typical timelines range from 1–2 weeks (UK, Montenegro) to 3–4 weeks (Switzerland). Bank account opening usually adds another 2–6 weeks depending on the bank's compliance review." },
    { question: "Which jurisdiction has the lowest tax?", answer: "Montenegro offers a flat 9% corporate income tax — one of the lowest in Europe. Gibraltar levies 12.5% on locally-sourced income. Switzerland's effective rate varies by canton (11.9%–21%)." },
  ],
  formTitle: "Ready to Incorporate in Non-EU Europe?",
  formSubtitle:
    "Tell us about your business and we will recommend the best jurisdiction, prepare the documents and open your corporate bank account.",
  slug: "company-registration-non-eu-europe",
};

const CompanyRegistrationNonEuEuropePage = () => <HubPage {...PAGE_DATA} />;

export default CompanyRegistrationNonEuEuropePage;
