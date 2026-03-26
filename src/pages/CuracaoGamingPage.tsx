import { LicenseDetailPage } from "@/components/templates/LicenseDetailPage";
import { CuracaoHeroVisual } from "@/components/templates/heroVisuals";
import { Zap, Globe, Layers } from "lucide-react";

const CuracaoGamingPage = () => (
  <LicenseDetailPage
    slug="curacao-gaming-license"
    categoryLabel="Gambling License"
    categoryHref="/gamble-license"
    titleAccent="Curaçao"
    titleRest="Gaming License"
    description="Curaçao hosts many companies operating in the gambling industry. This is explained by simple and business-friendly legislation regulating gaming activities. Additional factors include accessibility and low taxation. All of this makes the Curaçao gaming license highly attractive for online casino operators, opening wide opportunities for successful business in the gambling sector."
    seo={{
      title: "Curaçao Gaming License CGA — Online Gambling License | Incluence",
      description: "Get a Curaçao CGA gambling license — fastest and most affordable entry point. 3–4 months. Full remote process. Incluence legal support.",
      keywords: "Curacao gaming license, CGA license, Curacao gambling license, online casino Curacao, Curacao iGaming license",
      canonical: "https://incluence.com/curacao-gaming-license",
      schemaId: "curacao-schema",
      schemaName: "Curaçao Gaming License",
    }}
    stats={[
      { value: "3–4 months", label: "TIMELINE" },
      { value: "1 year", label: "LICENSE VALIDITY" },
      { value: "CGA", label: "REGULATOR" },
      { value: "All verticals", label: "ONE LICENSE" },
    ]}
    aboutTag="ABOUT CGA LICENSE"
    aboutTitle="Why Curaçao is the Most Popular Starting Point"
    aboutParagraphs={[
      "Obtaining a gaming license in Curaçao is advantageous for several reasons: Low corporate tax rates; Online casino operators can accept cryptocurrency payments; One of the shortest timelines for obtaining a license; Only one sub-license in Curaçao is enough to conduct any type of gambling activity; Financial reporting is at the discretion of the business owner; The gambling license can be obtained remotely — physical presence is not required; There is no requirement for paid-up capital.",
      "A licensed gambling business complies with laws, allowing operators to contribute to a transparent and fair industry. The license also enables online casino owners to open commercial accounts, which are unavailable to unlicensed operators.",
      "Each operator undergoes audits, which enhances the casino's reputation among players. Licensed businesses attract payment systems and software providers, most of whom cooperate only with legally operating online casinos.",
    ]}
    benefits={[
      { icon: <Zap className="w-5 h-5" />, title: "Fastest Timeline", description: "3–4 months from start to license. One of the shortest procedures globally — no lengthy regulator review queues." },
      { icon: <Globe className="w-5 h-5" />, title: "Crypto-Friendly", description: "Licensed operators can accept cryptocurrency payments from players worldwide. No restrictions on payment methods." },
      { icon: <Layers className="w-5 h-5" />, title: "All Verticals — One License", description: "Casino, sports betting, poker, bingo — all covered under a single sub-license. No additional permits required." },
    ]}
    processTitle="How to Obtain a Curaçao License"
    processSubtitle="A streamlined 5-step process managed entirely by our team. Physical presence not required at any stage."
    steps={[
      { number: "01", title: "Company Registration", description: "Register a private limited liability company (NV or BV) in Curaçao. This is the required legal form for obtaining a gaming license." },
      { number: "02", title: "Local Representative", description: "Appoint a resident of the Netherlands Antilles as local representative — required by the CGA. We arrange this through our network." },
      { number: "03", title: "Document Collection", description: "Passport copy, proof of residential address, bank reference letter, certificate of no criminal record — all documents max 3 months old." },
      { number: "04", title: "License Application", description: "Submit the complete application to the relevant Curaçao authority. Review typically takes 2 weeks. We manage all follow-up correspondence." },
      { number: "05", title: "License Issued", description: "Receive your Curaçao gaming sub-license, valid for 1 year with annual renewal. Your operation can launch immediately after issuance." },
    ]}
    requirementsIntro="To obtain a casino license in Curaçao, the necessary documentation must be provided. At the time of submission, all documents except the passport copy must be no older than 3 months."
    requirements={[
      "Copy of passport",
      "Proof of residential address",
      "Bank reference letter",
      "Certificate of no criminal record",
      "Company incorporation documents",
      "Proof of ownership of the chosen website for the online casino",
      "Information about the software to be used for casino games",
      "Agreements with software and hardware providers",
      "Diagram of physical equipment placement",
      "Detailed information about planned business activities",
    ]}
    keyFacts={[
      { label: "Regulator", value: "Curaçao Gaming Authority (CGA)" },
      { label: "License type", value: "Sub-license (master license)" },
      { label: "Validity", value: "1 year, renewable" },
      { label: "Min. capital", value: "None required" },
      { label: "Timeline", value: "3–4 months" },
      { label: "Starting from", value: "On request" },
      { label: "Coverage", value: "All gambling verticals" },
      { label: "Presence", value: "100% remote" },
      { label: "Crypto", value: "Accepted" },
    ]}
    advantages={[
      "Low corporate tax rates",
      "Online casino operators can accept cryptocurrency payments",
      "One of the shortest timelines for obtaining a license",
      "Only one sub-license in Curaçao is enough to conduct any type of gambling activity",
      "Financial reporting is at the discretion of the business owner",
      "The gambling license can be obtained remotely — physical presence is not required",
      "There is no requirement for paid-up capital",
    ]}
    limitations={[
      "License renewed annually (vs 5-year MGA license)",
      "Less prestigious than EU-regulated licenses",
      "Some payment processors prefer EU-regulated operators",
      "Local representative in Netherlands Antilles required",
      "At least one physical server must be hosted in Curaçao",
      "Restrictions on servicing Curaçao residents",
    ]}
    faq={[
      { question: "How to open an online casino in Curacao?", answer: "To open an online casino in Curacao, you must prepare a business plan, register a company, obtain a license, set up technical infrastructure, and open a bank account. Proper preparation of documentation and correct submission of the license application are crucial, and these processes should be entrusted to professionals." },
      { question: "How long does it take to obtain a Curacao gambling license?", answer: "Company registration and obtaining a gambling license in Curacao typically takes 3–4 months." },
      { question: "What documents are required for a Curacao gambling license?", answer: "To obtain a Curacao gambling license, you must submit: copies of passports and proof of address for directors and shareholders; documents confirming the experience and financial status of company participants; company incorporation documents; technical documentation; company policies." },
      { question: "What is the cost of obtaining a gambling license in Curacao?", answer: "The final cost depends on various factors (services offered, number of domains, etc.). To get the exact cost, contact our specialists." },
    ]}
    related={[
      { regulator: "MGA", name: "Malta", description: "EU gold standard. Full European market access. 6–9 months.", href: "/malta-gaming-license" },
      { regulator: "GSC", name: "Isle of Man", description: "Tier-1 prestige. All verticals, strong reputation. 6–12 months.", href: "/gambling-license-of-the-isle-of-man" },
      { regulator: "Municipal", name: "Costa Rica", description: "Fastest option. No business plan. 2–5 weeks.", href: "/gambling-license-in-costa-rica" },
    ]}
    formTitle="Apply for a Curaçao Gaming License"
    formSubtitle="Tell us about your project. We'll handle everything — from company formation to license issuance. Full remote service."
    formFields={["Full Name", "Company Name", "Gaming Verticals", "Launch Timeline"]}
    formTextareaLabel="Additional details — target markets, existing structure, crypto requirements..."
    formButtonText="Send Request →"
  />
);

export default CuracaoGamingPage;
