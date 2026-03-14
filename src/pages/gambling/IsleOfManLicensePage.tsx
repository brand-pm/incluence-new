import LicensePageTemplate from "@/components/LicensePageTemplate";
import { TerritoryMap } from "@/components/map/TerritoryMap";

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
        "The Isle of Man Gambling Supervision Commission sets the global benchmark for regulatory excellence. A GSC license signals institutional-grade compliance — attracting Tier-1 payment processors, premium software providers, and sophisticated players who demand verified operator legitimacy.",
      cta1: "Get a Free Quote →",
      cta2: "View Requirements",
    }}
    mapSvg={<TerritoryMap iso="IM" markerLabel="Douglas" subLabel="GSC HQ" />}
    facts={[
      { label: "Jurisdiction", value: "Isle of Man", cls: "text-[#F0EBE0]" },
      { label: "Regulator", value: "GSC", cls: "text-[#444CE7] font-semibold" },
      { label: "License valid", value: "5 years", cls: "text-[#F0EBE0]" },
      { label: "Timeline", value: "6–12 months", cls: "text-[#F0EBE0]" },
      { label: "Cost", value: "From £25,000", cls: "text-[#F0EBE0]" },
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
        "The Isle of Man operates one of the world's most respected regulatory frameworks for online gambling. The GSC applies strict fit-and-proper standards to all applicants, requiring thorough documentation of corporate structure, technical systems, and responsible gambling measures.\n\nAll key personnel must demonstrate relevant experience in the gambling industry or adjacent regulated sectors. The GSC will not issue a license to operators who cannot evidence both financial substance and operational capability.",
      docsTitle: "Key requirements",
      docs: [
        "Incorporated Isle of Man company with local registered office",
        "Fit and proper assessment for all directors and beneficial owners",
        "Certified RNG and platform technical audit",
        "AML/CFT compliance programme documentation",
        "Responsible gambling policy and player protection tools",
        "Minimum financial resources as required by license category",
        "Detailed business plan including market analysis",
        "Agreements with certified software and hardware providers",
      ],
      checklistDocs: [
        "Passport copies for all directors and beneficial owners",
        "Proof of address — max 3 months old",
        "Certificate of no criminal record for all key persons",
        "CV / professional biography for all key persons",
        "Company incorporation documents",
        "Source of funds / wealth documentation",
        "Business plan with 3-year financial projections",
        "AML/CFT policy framework",
        "Technical audit report from approved testing lab",
        "Responsible gambling policy",
        "Software and hardware provider agreements",
      ],
      checklistNote:
        "We prepare and verify all documents. You provide basic information — we handle the rest.",
    }}
    faqs={[
      { q: "What types of gambling does the Isle of Man license cover?", a: "The Isle of Man GSC license covers all major gambling verticals under a single permit: online casino, sports betting, poker, bingo, and lotteries. This makes it one of the most comprehensive licenses available." },
      { q: "How long does it take to obtain an Isle of Man gambling license?", a: "The process typically takes 6 to 12 months from company incorporation to license grant, depending on the completeness of documentation and the GSC review timeline." },
      { q: "What is the cost of an Isle of Man gambling license?", a: "Application fees start from £25,000 and vary by license category. Annual license fees and regulatory levies also apply. Contact our specialists for a detailed cost breakdown based on your business model." },
      { q: "Why choose the Isle of Man over other jurisdictions?", a: "The Isle of Man GSC license is a Tier-1 credential that opens doors to premium payment processors, top-tier software providers, and markets that require licensed operators. For serious operators targeting European and global markets, the Isle of Man combines prestige with a flexible, business-friendly regulatory environment." },
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
