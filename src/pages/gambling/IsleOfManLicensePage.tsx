import LicensePageTemplate from "@/components/LicensePageTemplate";
import { TerritoryMap } from "@/components/map/TerritoryMap";
import heroImg from "@/assets/hero-isle-of-man-gaming.jpg";

const IsleOfManLicensePage = () => (
  <LicensePageTemplate
    breadcrumbs={[
      { label: "Incluence", href: "/" },
      { label: "Licenses", href: "/licenses" },
      { label: "Gambling", href: "/gamble-license" },
      { label: "Isle of Man Gaming License" },
    ]}
    hero={{
      tag: "Gambling License",
      subTag: "British Isles · GSC",
      titleAccent: "Isle of Man",
      titleRest: "Gaming\nLicense",
      description:
        "The unique feature of licensing on the Isle of Man is that business owners need to prepare just one package of documents to obtain the right to legally provide any gambling services: online casinos, lotteries, and so on. If another company operates under the same brand, it only requires a sublicense.",
      cta1: "Get a Free Quote →",
      cta2: "View Requirements",
    }}
    mapSvg={<TerritoryMap iso="IM" />}
    heroImage={heroImg}
    facts={[
      { label: "Jurisdiction", value: "Isle of Man", cls: "text-[#F0EBE0]" },
      { label: "Regulator", value: "GSC", cls: "text-[#444CE7] font-semibold" },
      { label: "License valid", value: "5 years", cls: "text-[#F0EBE0]" },
      { label: "Timeline", value: "6–12 months", cls: "text-[#F0EBE0]" },
      { label: "Cost", value: "On request", cls: "text-[#F0EBE0]" },
      { label: "Tier", value: "Tier 1", cls: "text-[#444CE7] font-semibold" },
    ]}
    process={{
      tag: "— Process",
      title: "How to obtain an Isle of Man gaming license",
      subtitle:
        "A structured 8-step process. We handle every stage — you only provide basic information.",
    }}
    steps={[
      { num: "01", title: "Company Registration on the Isle of Man", body: "A local Isle of Man company must be incorporated to hold the license. The company structure, director appointments, and shareholder documentation must comply with GSC requirements from the outset." },
      { num: "02", title: "Corporate Bank Account", body: "A corporate bank account must be opened with a reputable bank. The GSC requires evidence of banking relationships and source of funds. We assist with bank introductions and documentation." },
      { num: "03", title: "Minimum Capital Deposit", body: "Applicants must demonstrate adequate financial resources. Minimum capital requirements vary by license category. We advise on the optimal structure to satisfy GSC financial standing requirements." },
      { num: "04", title: "Fit and Proper Assessment", body: "All key personnel — directors, beneficial owners, and senior managers — must pass the GSC fit and proper test. Background checks, financial history, and professional experience are reviewed in detail." },
      { num: "05", title: "Technical Infrastructure", body: "The GSC requires certified Random Number Generators, secure data handling, and responsible gambling tools. We coordinate with approved testing labs to certify your platform before submission." },
      { num: "06", title: "Application Documentation", body: "A comprehensive application pack is prepared: business plan, AML/CFT policies, responsible gambling framework, technical specifications, and corporate governance documents. We handle the full preparation." },
    ]}
    finalSteps={{
      step7: {
        num: "07",
        title: "Submission and GSC Review",
        body: "The application is submitted to the Gambling Supervision Commission. The GSC conducts a thorough review and may request additional information. We manage all correspondence with the regulator.",
      },
      step8: {
        num: "08",
        title: "License Granted",
        body: "Upon approval, the GSC issues the license. The Isle of Man license covers all gambling verticals under one permit — casino, sports betting, poker, and more. Annual reporting obligations apply.",
        badge: "~6–12 months total",
      },
    }}
    requirements={{
      title: "What is required for licensing",
      intro:
        "On average, applications are reviewed within 10–12 weeks, although the process may take longer if errors are made or documents are missing. By contacting our specialists, you will receive full assistance in obtaining an Isle of Man gambling license in the shortest possible time and with minimal risk of refusal. We prepare all documentation, take into account the specifics of your business, and handle all bureaucratic procedures related to licensing.",
      docsTitle: "Key requirements",
      docs: [
        "The entire registration procedure must take place on the island, which will also serve as the company's place of incorporation",
        "The company is permitted to open bank accounts only within this jurisdiction",
        "The company structure must include two directors — Isle of Man residents",
        "Player deposits must always be protected",
        "An independent lab must certify all online slots, games, and random number generators",
        "Copies of passports and proof of address of company directors and shareholders",
        "Documents confirming the experience and financial standing of company members",
        "The company's constitutional documents",
        "Technical documentation and company policies",
      ],
      checklistDocs: [
        "Passport copies for all directors and beneficial owners",
        "Proof of address — max 3 months old",
        "Company incorporation documents",
        "Documents confirming experience and financial standing",
        "The company's constitutional documents",
        "Technical documentation",
        "Company policies",
      ],
      checklistNote:
        "We prepare and verify all documents. You provide basic information — we handle the rest.",
    }}
    faqs={[
      { q: "How to open an online casino on the Isle of Man?", a: "To open an online casino on the Isle of Man, you need to prepare a business plan, register a company, obtain a license, set up the technical infrastructure, and open a bank account. Proper documentation and a well-prepared license application are crucial. These processes should be entrusted to professionals." },
      { q: "What is the timeframe for obtaining a gambling license on the Isle of Man?", a: "A gambling license on the Isle of Man can typically be obtained within 3–4 months." },
      { q: "What documents are required to obtain a gambling license on the Isle of Man?", a: "To obtain an Isle of Man gambling license, you need to submit: copies of passports and proof of address of company directors and shareholders; documents confirming the experience and financial standing of company members; the company's constitutional documents; technical documentation; company policies." },
      { q: "What is the cost of obtaining a gambling license on the Isle of Man?", a: "The final cost of a gambling license on the Isle of Man depends on various factors (the range of services offered, number of domains, etc.). To find out the exact cost for your business, consult our specialists." },
    ]}
    relatedTag="— Related"
    relatedTitle="Other gambling jurisdictions"
    related={[
      { href: "/malta-gaming-license", flag: "🇲🇹", reg: "MGA", name: "Malta Gaming License", desc: "EU gold standard. MGA license gives full access to European payment systems and player markets." },
      { href: "/curacao-gaming-license", flag: "🇨🇼", reg: "CGA", name: "Curaçao Gaming License", desc: "Fastest affordable offshore license. Sub-license in 3–4 months, no capital requirement." },
      { href: "/gambling-license-in-costa-rica", flag: "🇨🇷", reg: "Municipality", name: "Costa Rica License", desc: "Lightest requirements. Data Processing license with no business plan, no financial reporting." },
    ]}
    contact={{
      tag: "— Get in Touch",
      title: "Start your Isle of Man GSC application",
      description:
        "Tell us about your business model and target markets. We will assess your application and provide a detailed cost breakdown based on your specific requirements.",
      benefits: [
        "Fixed fee pricing — no hourly surprises",
        "Senior attorneys on every case, no juniors",
        "Response within 2 business hours, Mon–Fri",
      ],
      licenseOptions: [
        "Isle of Man / GSC License",
        "Malta / MGA License",
        "Curaçao / CGA License",
        "Costa Rica License",
        "Not sure — need advice",
      ],
      defaultLicense: "Isle of Man / GSC License",
    }}
  />
);

export default IsleOfManLicensePage;
