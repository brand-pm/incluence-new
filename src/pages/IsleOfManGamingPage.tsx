import { LicenseDetailPage } from "@/components/templates/LicenseDetailPage";
import { IsleOfManHeroVisual } from "@/components/templates/heroVisuals";
import { Shield, Landmark, Crown } from "lucide-react";

const IsleOfManGamingPage = () => (
  <LicenseDetailPage
    categoryLabel="Gambling License"
    categoryHref="/gamble-license"
    titleAccent="Isle of Man"
    titleRest="Gaming License"
    description="A Tier-1 prestige gambling license from the Gambling Supervision Commission. One document package covers all gambling verticals — casino, lottery, sports betting, poker networks. Trusted by top-tier operators worldwide."
    heroVisual={<IsleOfManHeroVisual />}
    seo={{
      title: "Isle of Man Gambling License GSC — iGaming License | Incluence",
      description: "Obtain an Isle of Man GSC gambling license — Tier-1 prestige for all gaming verticals. From £25,000, 6–12 months. Full legal support by Incluence.",
      keywords: "Isle of Man gambling license, GSC license, Isle of Man iGaming, GSC gaming license",
      canonical: "https://incluence.com/gambling-license-of-the-isle-of-man",
      schemaId: "iom-schema",
      schemaName: "Isle of Man GSC Gambling License",
      schemaPrice: "25000",
      schemaCurrency: "GBP",
    }}
    stats={[
      { value: "6–12 months", label: "TIMELINE" },
      { value: "Annual", label: "LICENSE VALIDITY" },
      { value: "GSC", label: "REGULATOR" },
      { value: "Tier 1", label: "STATUS" },
    ]}
    aboutTag="ABOUT GSC LICENSE"
    aboutTitle="Why the Isle of Man Stands Out"
    aboutParagraphs={[
      "The Isle of Man is not part of the UK or the European Union, yet it benefits from the UK government's favorable attitude toward the gambling industry. The Gambling Supervision Commission (GSC) is the licensing authority — known for its pragmatic regulatory approach and business-friendly environment.",
      "The unique feature of Isle of Man licensing is that a single package of documents grants the right to operate all gambling services — online casinos, lotteries, sports betting, bookmaking, poker networks and betting exchanges. If another company operates under the same brand, only a sublicense is required.",
      "The Isle of Man license is recognized by tier-1 banks, major payment processors and software providers worldwide, making it one of the most operationally powerful licenses available outside the EU.",
    ]}
    benefits={[
      { icon: <Shield className="w-5 h-5" />, title: "Single License — All Verticals", description: "One document package covers every gambling vertical. No additional applications per game type." },
      { icon: <Landmark className="w-5 h-5" />, title: "Strong Banking Relationships", description: "GSC license is recognized by tier-1 international banks and major payment processors globally." },
      { icon: <Crown className="w-5 h-5" />, title: "UK-Adjacent Prestige", description: "Favorable UK regulatory attitude without the complexity of a full UKGC license. Pragmatic and business-friendly." },
    ]}
    processTitle="How to Obtain an Isle of Man License"
    processSubtitle="A 6-step process managed by our team. Company must be incorporated on the island — we handle all local requirements."
    steps={[
      { number: "01", title: "Isle of Man Incorporation", description: "Register the company on the island — this is mandatory, as Isle of Man must serve as the company's place of incorporation. Minimum two directors required." },
      { number: "02", title: "Local Directors & Bank Account", description: "Appoint two Isle of Man resident directors. Open a bank account within the jurisdiction — banking outside the island is not permitted." },
      { number: "03", title: "Technical Certification", description: "All online slots, RNGs, and gaming tools must be certified by an independent laboratory. Player deposits must be protected at all times." },
      { number: "04", title: "Document Preparation", description: "Full document package prepared: business plan, AML policy, technical documentation, personnel CVs, and source of funds evidence." },
      { number: "05", title: "GSC Application", description: "Application submitted to the Gambling Supervision Commission. Review period typically 10–12 weeks. We manage all correspondence." },
      { number: "06", title: "License Issued", description: "GSC grants the license. Your operation may commence immediately. Ongoing compliance support and annual renewal included." },
    ]}
    requirementsIntro="Comprehensive requirements reflecting the license's Tier-1 status. We prepare the full documentation package on your behalf."
    requirements={[
      "Company must be incorporated on the Isle of Man (mandatory)",
      "Minimum two directors — both must be Isle of Man residents",
      "Bank accounts must be opened within Isle of Man jurisdiction only",
      "Passport copies and proof of address for all principals",
      "CVs and professional backgrounds of all key personnel",
      "Source of funds and financial standing documentation",
      "Detailed business plan covering all proposed gambling activities",
      "AML/KYC policy compliant with GSC requirements",
      "Independent laboratory certification of all RNGs and gaming tools",
      "Player deposit protection mechanism in place",
      "Physical registered office on the island",
    ]}
    keyFacts={[
      { label: "Regulator", value: "Gambling Supervision Commission (GSC)" },
      { label: "Validity", value: "Annual, renewable" },
      { label: "Directors", value: "2 IOM residents required" },
      { label: "Banking", value: "IOM jurisdiction only" },
      { label: "Timeline", value: "6–12 months" },
      { label: "Starting from", value: "£25,000" },
      { label: "Coverage", value: "All gambling verticals" },
      { label: "Status", value: "Tier 1" },
    ]}
    advantages={[
      "Tier-1 global reputation — trusted by banks and processors worldwide",
      "Single license covers every gambling vertical",
      "UK government favorable stance toward gambling industry",
      "Pragmatic GSC regulator — clear and predictable rules",
      "No capital gains tax, inheritance tax or wealth tax",
      "Recognized by major international payment processors",
    ]}
    limitations={[
      "Company must be physically incorporated on the island",
      "Two Isle of Man resident directors mandatory",
      "Banking restricted to Isle of Man jurisdiction only",
      "Higher operational costs vs offshore alternatives",
      "Timeline 6–12 months — not for fast launches",
      "Independent lab certification required for all RNGs",
    ]}
    faq={[
      { question: "What is the timeframe for an Isle of Man gambling license?", answer: "GSC application review is typically 10–12 weeks after submission. Including company formation and document preparation, total timeline is 6–12 months." },
      { question: "Why must directors be Isle of Man residents?", answer: "The GSC requires genuine local governance. Both directors must be island residents to ensure regulatory accountability and company substance on the island." },
      { question: "Can I bank outside the Isle of Man with this license?", answer: "No. Licensed companies are required to maintain bank accounts exclusively within the Isle of Man jurisdiction. We assist with local bank account opening." },
      { question: "Does one license cover all gambling types?", answer: "Yes — one document package from the GSC covers online casinos, lotteries, sports betting, bookmaking, poker networks and betting exchanges. Subbrands only require a sublicense." },
      { question: "What documents are required for an Isle of Man gambling license?", answer: "Company incorporation documents, passport copies and CVs for all directors and shareholders, source of funds documentation, business plan, AML policy, technical documentation, and independent RNG certification." },
      { question: "How much does an Isle of Man gambling license cost?", answer: "Starting from £25,000 for our full service including company formation, director arrangements, document preparation, and GSC application. Contact us for an exact breakdown." },
    ]}
    related={[
      { regulator: "MGA", name: "Malta", description: "EU gold standard. Full European market access. 6–9 months.", href: "/malta-gaming-license" },
      { regulator: "CGA", name: "Curaçao", description: "Most affordable. All verticals, crypto-friendly. 3–4 months.", href: "/curacao-gaming-license" },
      { regulator: "Municipal", name: "Costa Rica", description: "Fastest option. No business plan. 2–5 weeks.", href: "/gambling-license-in-costa-rica" },
    ]}
    formTitle="Apply for an Isle of Man Gaming License"
    formSubtitle="Tell us about your project. We'll handle everything — from company incorporation to GSC application and license issuance."
    formFields={["Full Name", "Company Name", "Gambling Verticals", "Target Markets"]}
    formTextareaLabel="Additional details — existing structure, timeline, budget..."
    formButtonText="Send Request →"
  />
);

export default IsleOfManGamingPage;
