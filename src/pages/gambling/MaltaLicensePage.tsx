import LicensePageTemplate from "@/components/LicensePageTemplate";
import { TerritoryMap } from "@/components/map/TerritoryMap";

/* ── Page data ───────────────────────────────────────── */

const MaltaLicensePage = () => (
  <LicensePageTemplate
    breadcrumbs={[
      { label: "Incluence", href: "/" },
      { label: "Gamble license", href: "/gamble-license" },
      { label: "Malta Gaming license" },
    ]}
    hero={{
      tag: "Gambling License",
      subTag: "EU · MGA",
      titleAccent: "Malta",
      titleRest: "Gaming\nLicense",
      description:
        "Malta is a state with one of the most well-regulated systems of gambling activities. The MGA — Malta Gaming Authority — not only regulates gambling activities but also directly licenses gambling entities. The license is issued for five years and is renewable.",
      cta1: "Get a Free Quote →",
      cta2: "View Requirements",
    }}
    mapSvg={<TerritoryMap iso="MT" markerLabel="Valletta" subLabel="MGA HQ" />}
    fireflies={{ originX: 72, originY: 48, count: 10 }}
    facts={[
      { label: "Jurisdiction", value: "Malta", cls: "text-[#F0EBE0]" },
      { label: "Regulator", value: "MGA", cls: "text-[#444CE7] font-semibold" },
      { label: "License valid", value: "5 years", cls: "text-[#F0EBE0]" },
      { label: "Timeline", value: "~6 months", cls: "text-[#F0EBE0]" },
      { label: "Cost", value: "On request", cls: "text-[#9A9590] italic" },
      { label: "Renewal", value: "Extendable", cls: "text-[#F0EBE0]" },
    ]}
    process={{
      tag: "— Process",
      title: "How to obtain a Malta gaming license",
      subtitle:
        "A structured 8-step process. We handle every stage — you only provide basic information.",
    }}
    steps={[
      { num: "01", title: "Company registration in Malta", body: "It is necessary to register a local company, for which a license will subsequently be issued. You should select the name of the company, indicate the participants and provide their documents." },
      { num: "02", title: "Account opening", body: "The company needs to open a bank account in order to deposit the share capital. Opening an account is a complex process that should be entrusted to professionals. A package of documents is collected and negotiations are conducted." },
      { num: "03", title: "Contribution of authorized capital", body: "The exact amount of authorized capital depends on the type of the license. The beneficiary must provide documents on the source of origin of funds contributed as authorized capital upon bank's request." },
      { num: "04", title: "Hiring required employees", body: "The company must have key positions employees, some of them must be local. We will help with the search and selection of employees." },
      { num: "05", title: "Office rent", body: "Office rent is not mandatory, but having one will significantly increase your chances of obtaining a license. We will select a budget option that meets the requirements." },
      { num: "06", title: "Preparation of documents for applying for a license", body: "It is necessary to prepare a business plan, and policies. In addition, application forms must be filled out. The client will only need to provide basic information, on the basis of which we will prepare documents, taking into account local legislation." },
    ]}
    finalSteps={{
      step7: {
        num: "07",
        title: "Filing an application",
        body: "It is necessary to submit an application to the regulator after preparing the company and documents. After submitting an application, you must be ready to answer additional questions from the regulator. We will take care of timely and competent answers.",
      },
      step8: {
        num: "08",
        title: "Obtaining a license",
        body: "The company receives a license after successfully passing the previous stages. At the same time, it must begin work within six months from the date of receipt of the license. Otherwise, the license may be cancelled.",
        badge: "~6 months total",
      },
    }}
    requirements={{
      intro:
        "Malta's MGA is one of the most rigorous gaming regulators in the world. Operators must demonstrate genuine substance — a registered company, physical office presence, local employees, and sufficient capitalization. The authority reviews every detail of your business model, ownership structure, and technical platform.",
      docsTitle: "Documents required",
      docs: [
        "Copies of passports and confirmation of the address of directors and shareholders",
        "Documents confirming the experience and well-being of the company's participants",
        "Statutory documents of the company",
        "Technical documentation",
        "Company policies",
        "Business plan",
      ],
      checklistDocs: [
        "Passport copies — directors & shareholders",
        "Address confirmation — directors & shareholders",
        "Experience & background documentation",
        "Company statutory documents",
        "Technical platform documentation",
        "Company policies (AML, responsible gambling)",
      ],
      checklistNote:
        "We prepare and verify all documents. You provide basic information — we handle the rest.",
    }}
    faqs={[
      { q: "How to open an online casino in Malta?", a: "In order to open an online casino in Malta, you need to prepare a business plan, register a company, obtain a license, set up a technical base and open a bank account. You should carefully prepare all the documentation and correctly apply for a license for the online casino creation. These processes should be entrusted to professionals." },
      { q: "What are the terms of registration of a gaming license in Malta?", a: "The company registration and the gambling license obtaining in Malta takes about 6 months." },
      { q: "What documents are required to obtain a gaming license in Malta?", a: "In order to obtain a gambling license in Malta, you must submit: copies of passports and confirmation of the address of directors and shareholders of the company; documents confirming the experience and well-being of the company's participants; statutory documents of the company; technical documentation; company policies." },
      { q: "What is the cost of obtaining a gambling license in Malta?", a: "Various factors (the list of services offered, the number of domains, etc.) affect the final cost of obtaining a license for a gambling business in Malta. You can find out the exact cost of obtaining a license for a gambling business in Malta by contacting our specialists." },
    ]}
    relatedTag="— Related"
    relatedTitle="Other gambling jurisdictions"
    related={[
      { href: "/gambling-license-in-costa-rica", flag: "🇨🇷", reg: "Municipality", name: "Gambling License in Costa Rica", desc: "A Data Processing license allowing operators to legally organize online gambling. Fast and cost-effective entry." },
      { href: "/gambling-license-of-the-isle-of-man", flag: "🇮🇲", reg: "GSC", name: "Gambling License of the Isle of Man", desc: "One of the most advanced telecommunications infrastructures. GSC licenses all gambling types under one permit." },
      { href: "/curacao-gaming-license", flag: "🇨🇼", reg: "CGA", name: "Curacao Gaming License", desc: "Simple and business-friendly legislation. Low taxation, accessibility, and one of the shortest licensing timelines." },
    ]}
    contact={{
      tag: "— Get in Touch",
      title: "Start your Malta MGA application",
      description:
        "Tell us about your business model and target markets. We will assess your application and provide a detailed cost breakdown based on your specific requirements.",
      benefits: [
        "Fixed fee pricing — no hourly surprises",
        "Senior attorneys on every case, no juniors",
        "Response within 2 business hours, Mon–Fri",
      ],
      licenseOptions: [
        "Malta / MGA License",
        "Gambling License in Costa Rica",
        "Isle of Man / GSC",
        "Curacao Gaming License",
        "Not sure — need advice",
      ],
      defaultLicense: "Malta / MGA License",
    }}
  />
);

export default MaltaLicensePage;
