import LicensePageTemplate from "@/components/LicensePageTemplate";
import { TerritoryMap } from "@/components/map/TerritoryMap";
import heroImg from "@/assets/hero-curacao-gaming.jpg";

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
        "Curaçao hosts many companies operating in the gambling industry. This is explained by simple and business-friendly legislation regulating gaming activities. Additional factors include accessibility and low taxation. All of this makes the Curaçao gaming license highly attractive for online casino operators, opening wide opportunities for successful business in the gambling sector.",
      cta1: "Get a Free Quote →",
      cta2: "View Requirements",
    }}
    mapSvg={<TerritoryMap iso="CW" />}
    heroImage={heroImg}
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
        "To obtain a casino license in Curaçao, the necessary documentation must be provided. At the time of submission, all documents except the passport copy must be no older than 3 months.",
      docsTitle: "Personal documents",
      docs: [
        "Copy of passport",
        "Proof of residential address (utility bill or bank statement)",
        "Bank reference letter",
        "Certificate of no criminal record",
      ],
      additionalText: "Additionally, to obtain a casino license in Curaçao, the following are required:",
      notRequiredTitle: "Corporate & technical documents",
      notRequired: [
        "Company incorporation documents",
        "Proof of ownership of the chosen website for the online casino",
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
      { q: "How to open an online casino in Curacao?", a: "To open an online casino in Curacao, you must prepare a business plan, register a company, obtain a license, set up technical infrastructure, and open a bank account. Proper preparation of documentation and correct submission of the license application are crucial, and these processes should be entrusted to professionals." },
      { q: "How long does it take to obtain a Curacao gambling license?", a: "Company registration and obtaining a gambling license in Curacao typically takes 3–4 months." },
      { q: "What documents are required for a Curacao gambling license?", a: "To obtain a Curacao gambling license, you must submit: copies of passports and proof of address for directors and shareholders; documents confirming the experience and financial status of company participants; company incorporation documents; technical documentation; company policies." },
      { q: "What is the cost of obtaining a gambling license in Curacao?", a: "The final cost depends on various factors (services offered, number of domains, etc.). To get the exact cost, contact our specialists." },
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
