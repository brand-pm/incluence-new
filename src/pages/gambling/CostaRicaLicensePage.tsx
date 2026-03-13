import LicensePageTemplate from "@/components/LicensePageTemplate";
import FocusedWorldMap from "@/components/FocusedWorldMap";

/* ── Page data ───────────────────────────────────────── */

const CostaRicaLicensePage = () => (
  <LicensePageTemplate
    breadcrumbs={[
      { label: "Incluence", href: "/" },
      { label: "Gamble license", href: "/gamble-license" },
      { label: "Gambling License in Costa Rica" },
    ]}
    hero={{
      tag: "Gambling License",
      subTag: "Central America · Municipality",
      titleAccent: "Costa Rica",
      titleRest: "Gambling License in",
      accentPosition: "end",
      description:
        "Costa Rica offers a unique regulatory model: no traditional gambling license exists. Online operators use a Data Processing License issued by the local municipality, allowing them to legally process internet bets worldwide — with no mandatory business plan, no financial reporting, and no capital requirements beyond share capital.",
      cta1: "Get a Free Quote →",
      cta2: "View Requirements",
      heroOverlay:
        "linear-gradient(to right, #080808 45%, rgba(8,8,8,0.7) 65%, rgba(8,8,8,0) 100%)",
    }}
    mapSvg={<FocusedWorldMap focusX={198} focusY={460} zoom={5} flagColor="68,76,231" />}
    facts={[
      { label: "Jurisdiction", value: "Costa Rica", cls: "text-[#F0EBE0]" },
      { label: "Regulator", value: "Municipality", cls: "text-[#444CE7] font-semibold" },
      { label: "License type", value: "Data Processing", cls: "text-[#F0EBE0]" },
      { label: "Timeline", value: "2–4 months", cls: "text-[#F0EBE0]" },
      { label: "Cost", value: "from $15,000", cls: "text-[#F0EBE0]" },
      { label: "Renewal", value: "$1,500 / quarter", cls: "text-[#9A9590] italic" },
    ]}
    process={{
      tag: "— Process",
      title: "How to obtain a Costa Rica gambling license",
      subtitle:
        "A structured 8-step process. We handle every stage — you only provide basic information.",
    }}
    steps={[
      {
        num: "01",
        title: "Company Registration in Costa Rica",
        body: "You must register a local company to which the license will later be issued. This requires choosing a company name, specifying the participants, and providing their documents.",
      },
      {
        num: "02",
        title: "Opening a Bank Account",
        body: "The company must open a bank account to deposit share capital. Opening an account is a complex process that should be entrusted to professionals.",
      },
      {
        num: "03",
        title: "Contribution of Share Capital",
        body: "The exact amount of share capital depends on the license type. If necessary, the beneficiary must provide documents confirming the source of funds contributed.",
      },
      {
        num: "04",
        title: "Hiring Mandatory Staff",
        body: "The company must employ staff in key positions, some of whom must be local residents. We assist with recruitment and staffing.",
      },
      {
        num: "05",
        title: "Renting an Office",
        body: "One of the mandatory requirements is renting an office. We will help select a cost-effective option that meets all requirements.",
      },
      {
        num: "06",
        title: "Preparing Documents",
        body: "A business plan, policies, and technical documentation must be prepared. The client only provides basic information, and we prepare all documents in compliance with local legislation.",
      },
    ]}
    finalSteps={{
      step7: {
        num: "07",
        title: "Submitting the Application",
        body: "After preparing the company and documents, the application must be submitted to the regulator. We ensure timely and professional responses to any additional queries.",
      },
      step8: {
        num: "08",
        title: "Obtaining the License",
        body: "After successfully completing all steps, the company receives the license. It must begin operations within six months; otherwise, the license may be revoked.",
        badge: "~2–4 months total",
      },
    }}
    requirements={{
      title: "What is required for licensing",
      intro:
        "The Data Processing license is issued by the local municipality. To apply, you only need to have an office in the country and hire a legal representative. If the enterprise is foreign-owned, this position must be filled by a Costa Rican resident.",
      notRequiredTitle: "What's NOT required",
      notRequired: [
        "No business plan is needed",
        "No profit plan requirements",
        "No measures required regarding gambling addiction prevention",
        "No requirements related to software",
        "No financial reporting or mandatory bank accounts",
      ],
      additionalText:
        "There are no requirements for a large initial capital. However, at least 25% of the issued share capital must be paid during company registration. The company's activities must not target Costa Rica or its residents — operators are prohibited from accepting bets from Costa Rican residents, and equipment must be physically located outside of Costa Rica.",
      docsTitle: "Documents required",
      docs: [
        "Copies of passports and proof of address of company directors and shareholders",
        "Documents confirming the experience and financial standing of company participants",
        "Company's founding documents",
        "Technical documentation",
        "Company policies",
        "Proof of registered office in Costa Rica",
        "Appointment of local legal representative",
      ],
      checklistDocs: [
        "Passport copies — directors & shareholders",
        "Address confirmation — directors & shareholders",
        "Experience & financial standing documentation",
        "Company founding documents",
        "Technical documentation",
        "Company policies",
        "Proof of registered office",
        "Local legal representative appointment",
      ],
      checklistNote:
        "We prepare and verify all documents. You provide basic information — we handle the rest.",
    }}
    faqs={[
      {
        q: "How to open an online casino in Costa Rica?",
        a: "To open an online casino in Costa Rica, you need to prepare a business plan, register a company, obtain a license, set up the technical infrastructure, and open a bank account. The entire documentation must be prepared carefully, and the license application submitted correctly. These processes are best entrusted to professionals.",
      },
      {
        q: "What are the timeframes for obtaining a gambling license in Costa Rica?",
        a: "A Costa Rican gambling license can be obtained within 2–4 months.",
      },
      {
        q: "What documents are required to obtain a gambling license in Costa Rica?",
        a: "To obtain a gambling license in Costa Rica, you need to submit: copies of passports and proof of address of company directors and shareholders; documents confirming the experience and financial standing of company participants; company's founding documents; technical documentation; company policies.",
      },
      {
        q: "What is the cost of obtaining a gambling license in Costa Rica?",
        a: "The final cost of obtaining a gambling license in Costa Rica depends on various factors (list of services offered, number of domains, etc.). You can find out the exact cost by contacting our specialists.",
      },
    ]}
    relatedTag="— Related"
    relatedTitle="Other gambling jurisdictions"
    related={[
      {
        href: "/malta-gaming-license",
        flag: "🇲🇹",
        reg: "MGA",
        name: "Malta Gaming License",
        desc: "EU-regulated, 5-year license from Malta Gaming Authority. Gold standard for European market entry.",
      },
      {
        href: "/curacao-gaming-license",
        flag: "🇨🇼",
        reg: "CGA",
        name: "Curacao Gaming License",
        desc: "Fast, affordable offshore license. Sub-license available in 4–8 weeks. Widely recognized globally.",
      },
      {
        href: "/licenses/gambling/isle-of-man",
        flag: "🇮🇲",
        reg: "GSC",
        name: "Isle of Man License",
        desc: "Tier-1 prestige license from the Gambling Supervision Commission. Trusted by top-tier operators.",
      },
    ]}
    contact={{
      tag: "— Get in Touch",
      title: "Start your Costa Rica application",
      description:
        "Tell us about your business model and target markets. We will assess your application and provide a detailed cost breakdown based on your specific requirements.",
      benefits: [
        "Fixed fee pricing — no hourly surprises",
        "Senior attorneys on every case, no juniors",
        "Response within 2 business hours, Mon–Fri",
      ],
      licenseOptions: [
        "Gambling License in Costa Rica",
        "Malta / MGA License",
        "Isle of Man / GSC",
        "Curacao Gaming License",
        "Not sure — need advice",
      ],
      defaultLicense: "Gambling License in Costa Rica",
    }}
  />
);

export default CostaRicaLicensePage;
