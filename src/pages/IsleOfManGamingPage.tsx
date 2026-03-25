import { LicenseDetailPage } from "@/components/templates/LicenseDetailPage";
import { IsleOfManHeroVisual } from "@/components/templates/heroVisuals";
import { Shield, Landmark, Crown } from "lucide-react";

const IsleOfManGamingPage = () => (
  <LicenseDetailPage
    categoryLabel="Gambling License"
    categoryHref="/gamble-license"
    titleAccent="Isle of Man"
    titleRest="Gaming License"
    description="The unique feature of licensing on the Isle of Man is that business owners need to prepare just one package of documents to obtain the right to legally provide any gambling services: online casinos, lotteries, and so on. If another company operates under the same brand, it only requires a sublicense."
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
      "The unique feature of licensing on the Isle of Man is that business owners need to prepare just one package of documents to obtain the right to legally provide any gambling services: online casinos, lotteries, and so on. If another company operates under the same brand, it only requires a sublicense.",
      "The UK government has a favorable attitude toward the gambling industry, which makes the Isle of Man license increasingly attractive to entrepreneurs each year. A business-friendly environment and pragmatic regulatory approach are key advantages that attract entrepreneurs from all over the world.",
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
    requirementsIntro="Licensing of companies registered in this jurisdiction and wishing to provide gambling services is handled by the Gambling Supervision Commission (GSC). This supervisory authority grants licenses for various types of gambling. Specifically, it legalizes: land-based casinos; online casinos and lotteries; bookmaking companies; betting exchanges; poker networks and many other services."
    requirements={[
      "The entire registration procedure must take place on the island, which will also serve as the company's place of incorporation",
      "The company is permitted to open bank accounts only within this jurisdiction",
      "The company structure must include two directors, appointed by the founders. These positions, as well as that of the company representative, must be filled by Isle of Man residents",
      "Player deposits must always be protected",
      "An independent lab must certify all online slots, games, random number generators, and similar tools",
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
      { question: "How to open an online casino on the Isle of Man?", answer: "To open an online casino on the Isle of Man, you need to prepare a business plan, register a company, obtain a license, set up the technical infrastructure, and open a bank account. Proper documentation and a well-prepared license application are crucial. These processes should be entrusted to professionals." },
      { question: "What is the timeframe for obtaining a gambling license on the Isle of Man?", answer: "A gambling license on the Isle of Man can typically be obtained within 3–4 months." },
      { question: "What documents are required to obtain a gambling license on the Isle of Man?", answer: "To obtain an Isle of Man gambling license, you need to submit: - copies of passports and proof of address of company directors and shareholders; - documents confirming the experience and financial standing of company members; - the company's constitutional documents; - technical documentation; - company policies." },
      { question: "What is the cost of obtaining a gambling license on the Isle of Man?", answer: "The final cost of a gambling license on the Isle of Man depends on various factors (the range of services offered, number of domains, etc.). To find out the exact cost for your business, consult our specialists." },
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
