import { LicenseDetailPage } from "@/components/templates/LicenseDetailPage";
import { CuracaoHeroVisual } from "@/components/templates/heroVisuals";
import { Zap, Globe, Layers } from "lucide-react";

const CuracaoGamingPage = () => (
  <LicenseDetailPage
    categoryLabel="Gambling License"
    categoryHref="/gamble-license"
    titleAccent="Curaçao"
    titleRest="Gaming License"
    description="Curacao hosts many companies operating in the gambling industry. This is explained by simple, business-friendly legislation regulating gaming activities. Additional factors include accessibility and low taxation — making the Curaçao gaming license highly attractive for online casino operators."
    heroVisual={<CuracaoHeroVisual />}
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
      "Curaçao hosts more online gambling companies than almost any other jurisdiction. This is driven by simple, business-friendly legislation and one of the most accessible licensing procedures in the world.",
      "The key advantage is that a single Curaçao sub-license covers all gambling verticals — casino, sports betting, poker, and lotteries. There is no need to apply for separate licenses per product category.",
      "Unlike most jurisdictions, Curaçao imposes no paid-up capital requirement, no mandatory business plan, and allows fully remote application. Online casino operators can also accept cryptocurrency payments.",
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
    requirementsIntro="One of the lightest document requirements of any gambling jurisdiction. No business plan, no profit forecast — just basic KYC documentation."
    requirements={[
      "Passport copy (valid, full color scan)",
      "Proof of residential address (utility bill or bank statement, max 3 months old)",
      "Bank reference letter on official letterhead",
      "Certificate of no criminal record",
      "Company incorporation documents",
      "Proof of website ownership for the online casino domain",
      "Information about the gaming software to be used",
      "Agreements with software and hardware providers",
      "Physical server location diagram (server must be hosted in Curaçao)",
      "Description of planned business activities",
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
      "Low corporate tax rates — 2% on gambling revenue",
      "Online casino operators can accept cryptocurrency payments",
      "One of the shortest timelines for obtaining a license",
      "One sub-license covers all gambling activity types",
      "Financial reporting at the discretion of the business owner",
      "The gambling license can be obtained fully remotely",
      "No paid-up capital requirement",
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
      { question: "How long does it take to obtain a Curaçao gambling license?", answer: "Company registration and obtaining a gambling license in Curaçao typically takes 3–4 months." },
      { question: "Can I apply for a Curaçao license remotely?", answer: "Yes. The gambling license can be obtained remotely — physical presence is not required at any stage." },
      { question: "Does a Curaçao license cover all gambling types?", answer: "Yes. One sub-license in Curaçao is enough to conduct any type of gambling activity — casino, sports betting, poker, and lotteries." },
      { question: "Can licensed Curaçao operators accept crypto payments?", answer: "Yes. Online casino operators licensed in Curaçao can accept cryptocurrency payments from players." },
      { question: "What documents are required for a Curaçao gambling license?", answer: "You will need to provide: a copy of passport; proof of residential address; bank reference letter; certificate of no criminal record. Additionally: company incorporation documents, proof of website ownership, information about gaming software, agreements with software and hardware providers, server placement diagram, and description of planned business activities." },
      { question: "How much does a Curaçao gaming license cost?", answer: "The cost of a Curaçao gambling license is determined individually after discussing your requirements. Contact our specialists for an exact quote." },
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
