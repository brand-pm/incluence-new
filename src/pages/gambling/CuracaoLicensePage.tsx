import LicensePageTemplate from "@/components/LicensePageTemplate";
import { TerritoryMap } from "@/components/map/TerritoryMap";

const CuracaoLicensePage = () => (
  <LicensePageTemplate
    breadcrumbs={[
      { label: "Incluence", href: "/" },
      { label: "Licenses", href: "/licenses" },
      { label: "Gambling", href: "/gamble-license" },
      { label: "Curaçao Gaming License" },
    ]}
    hero={{
      tag: "Gambling License",
      subTag: "Caribbean · CGA",
      titleAccent: "Curaçao",
      titleRest: "Gaming\nLicense",
      description:
        "Curaçao hosts many companies operating in the gambling industry. Simple and business-friendly legislation, low taxation, and no paid-up capital requirement make the CGA license one of the most accessible entry points for online casino operators worldwide. One sub-license covers all gambling types.",
      cta1: "Get a Free Quote →",
      cta2: "View Requirements",
    }}
    mapSvg={<TerritoryMap iso="CW" />}
    facts={[
      { label: "Jurisdiction", value: "Curaçao", cls: "text-[#F0EBE0]" },
      { label: "Regulator", value: "CGA", cls: "text-[#444CE7] font-semibold" },
      { label: "License type", value: "Master / Sub", cls: "text-[#F0EBE0]" },
      { label: "Timeline", value: "3–4 months", cls: "text-[#F0EBE0]" },
      { label: "Cost", value: "From €15,000", cls: "text-[#F0EBE0]" },
      { label: "Capital req.", value: "None", cls: "text-[#22c55e] font-medium" },
    ]}
    process={{
      tag: "— Process",
      title: "How to obtain a Curaçao gaming license",
      subtitle:
        "A structured 8-step process. We handle every stage — you only provide basic information.",
    }}
    steps={[
      { num: "01", title: "Company Registration in Curaçao", body: "You must register a local company that will later receive the license. This involves choosing a company name, listing participants, and submitting their documents." },
      { num: "02", title: "Bank Account Opening", body: "The company must open a bank account for the paid-up capital. This is a complex process that should be handled by professionals. Documentation must be collected and negotiations conducted properly." },
      { num: "03", title: "Paid-Up Capital Contribution", body: "The required capital depends on the license type. If needed, the beneficiary must provide documents confirming the source of funds. Unlike other jurisdictions, no minimum capital is mandated." },
      { num: "04", title: "Hiring Required Staff", body: "Key staff positions must be filled. Some roles require local residents. We assist with recruitment and help identify candidates who meet regulatory expectations." },
      { num: "05", title: "Office Registration", body: "A registered office address in Curaçao is required. Physical presence is not mandatory for day-to-day operations. We assist in selecting a cost-effective registered address solution." },
      { num: "06", title: "Preparation of Documents", body: "A full documentation package must be prepared: business plan, policies, technical documentation, and application forms. We handle the entire preparation based on basic information from the client." },
    ]}
    finalSteps={{
      step7: {
        num: "07",
        title: "Submitting the Application",
        body: "The completed application is submitted to the CGA regulator. We monitor the review process and professionally respond to any additional queries from the authority.",
      },
      step8: {
        num: "08",
        title: "Obtaining the License",
        body: "Upon approval, the company receives the Curaçao gaming license. Operations must commence within the specified period. The license is valid indefinitely subject to annual renewal fees.",
        badge: "~3–4 months total",
      },
    }}
    requirements={{
      title: "What is required for licensing",
      intro:
        "Curaçao operates a two-tier licensing model: a Master License held by a CGA-approved entity, and a Sub-License issued under it. Most operators obtain a sub-license, which covers all gambling types under a single permit.\n\nTo obtain a casino license in Curaçao, the following personal documents must be provided. At the time of submission, all documents except the passport copy must be no older than 3 months.",
      docsTitle: "Personal documents",
      docs: [
        "Copy of passport",
        "Proof of residential address (utility bill or bank statement)",
        "Bank reference letter",
        "Certificate of no criminal record",
      ],
      additionalText: "In addition to personal documents, the following corporate and technical documentation is required:",
      notRequiredTitle: "Corporate & technical documents",
      notRequired: [
        "Company incorporation documents",
        "Proof of ownership of the chosen website domain",
        "Information about the software to be used for casino games",
        "Agreements with software and hardware providers",
        "Diagram of physical equipment placement",
        "Detailed information about planned business activities",
      ],
      checklistDocs: [
        "Passport copy (any date)",
        "Proof of address — max 3 months old",
        "Bank reference letter — max 3 months old",
        "Certificate of no criminal record — max 3 months old",
        "Company incorporation documents",
        "Domain ownership proof",
        "Software agreements with providers",
        "Equipment placement diagram",
        "Business activity description",
      ],
      checklistNote:
        "We prepare and verify all documents. You provide basic information — we handle the rest.",
    }}
    faqs={[
      { q: "How to open an online casino in Curaçao?", a: "To open an online casino in Curaçao, you must prepare a business plan, register a company, obtain a license, set up technical infrastructure, and open a bank account. Proper preparation of documentation and correct submission of the license application are crucial. These processes should be entrusted to professionals." },
      { q: "How long does it take to obtain a Curaçao gambling license?", a: "Company registration and obtaining a gambling license in Curaçao typically takes 3–4 months." },
      { q: "What documents are required for a Curaçao gambling license?", a: "To obtain a Curaçao gambling license, you need to provide: a passport copy; proof of address, bank reference letter, and certificate of no criminal record (all no older than 3 months); plus company incorporation documents, domain ownership proof, software agreements, equipment diagram, and a description of planned business activities." },
      { q: "What is the cost of a Curaçao gambling license?", a: "The cost depends on the type of license (master or sub-license) and the scope of services. Contact our specialists to receive an accurate quote based on your specific situation." },
    ]}
    relatedTag="— Related"
    relatedTitle="Other gambling jurisdictions"
    related={[
      { href: "/malta-gaming-license", flag: "🇲🇹", reg: "MGA", name: "Malta Gaming License", desc: "EU gold standard. 5-year license, full access to European payment systems and player markets." },
      { href: "/gambling-license-of-the-isle-of-man", flag: "🇮🇲", reg: "GSC", name: "Isle of Man License", desc: "Tier-1 prestige. Advanced telecom infrastructure, strong international recognition." },
      { href: "/gambling-license-in-costa-rica", flag: "🇨🇷", reg: "Municipality", name: "Costa Rica License", desc: "Fastest entry. Data Processing license in 2–5 weeks. No capital requirements, tax-exempt offshore." },
    ]}
    contact={{
      tag: "— Get in Touch",
      title: "Start your Curaçao CGA application",
      description:
        "Tell us about your business model and target markets. We will assess your application and provide a detailed cost breakdown based on your specific requirements.",
      benefits: [
        "Fixed fee pricing — no hourly surprises",
        "Senior attorneys on every case, no juniors",
        "Response within 2 business hours, Mon–Fri",
      ],
      licenseOptions: [
        "Curaçao / CGA License",
        "Malta / MGA License",
        "Isle of Man / GSC",
        "Costa Rica License",
        "Not sure — need advice",
      ],
      defaultLicense: "Curaçao / CGA License",
    }}
  />
);

export default CuracaoLicensePage;
