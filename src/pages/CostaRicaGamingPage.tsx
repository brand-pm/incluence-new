import { LicenseDetailPage } from "@/components/templates/LicenseDetailPage";
import { CostaRicaHeroVisual } from "@/components/templates/heroVisuals";
import { Clock, DollarSign, FileX } from "lucide-react";

const CostaRicaGamingPage = () => (
  <LicenseDetailPage
    slug="gambling-license-in-costa-rica"
    categoryLabel="Gambling License"
    categoryHref="/gamble-license"
    titleAccent="Costa Rica"
    titleRest="Gambling License"
    description="The Data Processing license is issued by the local municipality, and to apply, you only need to have an office in the country and hire a legal representative. If the enterprise is foreign-owned, this position must be filled by a Costa Rican resident."
    heroVisual={<CostaRicaHeroVisual />}
    seo={{
      title: "Costa Rica Gambling License — Fastest Online Casino License | Incluence",
      description: "Get a Costa Rica gambling license in 2–5 weeks. No business plan, no capital requirement, income tax exempt. From $15,000. Incluence legal support.",
      keywords: "Costa Rica gambling license, Costa Rica casino license, online gambling Costa Rica, fastest gambling license",
      canonical: "https://incluence.com/gambling-license-in-costa-rica",
      schemaId: "costarica-schema",
      schemaName: "Costa Rica Gambling License",
      schemaPrice: "15000",
      schemaCurrency: "USD",
    }}
    stats={[
      { value: "2–5 weeks", label: "TIMELINE" },
      { value: "1 year", label: "LICENSE VALIDITY" },
      { value: "Municipal", label: "ISSUED BY" },
      { value: "Tax exempt", label: "INTERNATIONAL INCOME" },
    ]}
    aboutTag="ABOUT COSTA RICA LICENSE"
    aboutTitle="The Fastest Offshore Gambling License"
    aboutParagraphs={[
      "The Data Processing license is issued by the local municipality, and to apply, you only need to have an office in the country and hire a legal representative. If the enterprise is foreign-owned, this position must be filled by a Costa Rican resident.",
      "The state does not require what is usually requested in other jurisdictions for licensing: No business plan is needed; No profit plan requirements; No measures required regarding gambling addiction prevention; No requirements related to software; No financial reporting or mandatory bank accounts, etc.",
      "There are also no requirements for a large initial capital. However, to obtain a gambling license in Costa Rica, at least 25% of the issued share capital must be paid during company registration.",
      "If you want to operate in the gambling sector, Costa Rica imposes only one condition: the company's activities must not target the country or its residents. This is because Costa Rican residents are prohibited from using such online operators' services. The restriction also applies to the equipment needed for online operations — it must be physically located outside of Costa Rica.",
      "When applying for a license, business owners must pay a one-time fee of $15,000 and then pay $1,500 quarterly for renewal. An additional advantage is that if the operator offers services in any country in the world except Costa Rica, from the government's perspective such a company is considered self-regulated and therefore exempt from income tax.",
      "If you are interested in a gambling license, Costa Rica issues this permit within 2–5 weeks. You can simplify and speed up the procedure by contacting our specialists. We will handle the entire licensing process, after which you can start operating in the online gambling sector as a licensed operator.",
    ]}
    benefits={[
      { icon: <Clock className="w-5 h-5" />, title: "2–5 Week Timeline", description: "The fastest major gambling license available. Municipal issuance bypasses lengthy national regulator review processes." },
      { icon: <DollarSign className="w-5 h-5" />, title: "Income Tax Exempt", description: "International operators are fully exempt from Costa Rican income tax. No reporting obligation on foreign-sourced revenue." },
      { icon: <FileX className="w-5 h-5" />, title: "Minimal Requirements", description: "No business plan, no paid-up capital, no financial reporting, no software restrictions. The lowest barrier of any jurisdiction." },
    ]}
    processTitle="How to Obtain a Costa Rica License"
    processSubtitle="A streamlined 4-step process. The simplest licensing procedure of any gambling jurisdiction."
    steps={[
      { number: "01", title: "Company Incorporation", description: "Register a Costa Rican Sociedad Anónima (SA) or LLC. Minimum two shareholders. At least 25% of issued share capital must be paid on registration." },
      { number: "02", title: "Local Office & Representative", description: "Establish a physical office address in Costa Rica. Appoint a Costa Rican resident as legal representative — mandatory for foreign-owned companies." },
      { number: "03", title: "License Application", description: "Submit the Data Processing license application to the local municipality. One-time fee of $15,000 payable at submission." },
      { number: "04", title: "License Issued", description: "Municipality issues the license. Process typically 2–5 weeks. Quarterly renewal fee of $1,500 applies. Full operations can commence immediately." },
    ]}
    requirementsIntro="The Data Processing license is issued by the local municipality, and to apply, you only need to have an office in the country and hire a legal representative. If the enterprise is foreign-owned, this position must be filled by a Costa Rican resident."
    requirements={[
      "Company incorporation in Costa Rica (SA or LLC)",
      "Physical office address in Costa Rica",
      "Costa Rican resident as legal representative (for foreign-owned companies)",
      "Minimum 25% of issued share capital paid at registration",
      "Passport copies and proof of address for all directors and shareholders",
      "Company statutory documents",
      "One-time license fee of $15,000",
      "Quarterly renewal fee of $1,500",
      "Equipment for online operations must be located outside Costa Rica",
      "Services must not target Costa Rican residents",
    ]}
    keyFacts={[
      { label: "Issued by", value: "Local Municipality" },
      { label: "License type", value: "Data Processing License" },
      { label: "Validity", value: "Annual (quarterly renewal)" },
      { label: "Min. capital", value: "25% of share capital" },
      { label: "One-time fee", value: "$15,000" },
      { label: "Renewal", value: "$1,500 per quarter" },
      { label: "Income tax", value: "Exempt (international)" },
      { label: "Timeline", value: "2–5 weeks" },
    ]}
    advantages={[
      "Fastest gambling license — 2–5 weeks from start to finish",
      "Income tax exempt for international operators",
      "No business plan or profit forecast required",
      "No paid-up capital requirement beyond 25% of share capital",
      "No financial reporting obligations",
      "No requirements related to software or RNG certification",
      "Simple renewal process — quarterly $1,500 fee",
    ]}
    limitations={[
      "Less prestigious than regulated licenses (MGA, GSC, UKGC)",
      "Major payment processors may require a regulated EU license",
      "Equipment must be physically located outside Costa Rica",
      "Cannot service Costa Rican residents",
      "Not suitable as a long-term EU market strategy",
      "Annual validity requires consistent renewal management",
    ]}
    faq={[
      { question: "How to open an online casino in Costa Rica?", answer: "To open an online casino in Costa Rica, you need to prepare a business plan, register a company, obtain a license, set up the technical infrastructure, and open a bank account. The entire documentation must be prepared carefully, and the license application submitted correctly. These processes are best entrusted to professionals." },
      { question: "What are the timeframes for obtaining a gambling license in Costa Rica?", answer: "A Costa Rican gambling license can be obtained within 2–4 months." },
      { question: "What documents are required to obtain a gambling license in Costa Rica?", answer: "To obtain a gambling license in Costa Rica, you need to submit: – copies of passports and proof of address of company directors and shareholders; – documents confirming the experience and financial standing of company participants; – company's founding documents; – technical documentation; – company policies." },
      { question: "What is the cost of obtaining a gambling license in Costa Rica?", answer: "The final cost of obtaining a gambling license in Costa Rica depends on various factors (list of services offered, number of domains, etc.). You can find out the exact cost by contacting our specialists." },
    ]}
    related={[
      { regulator: "MGA", name: "Malta", description: "EU gold standard. Full European market access. 6–9 months.", href: "/malta-gaming-license" },
      { regulator: "CGA", name: "Curaçao", description: "Most affordable. All verticals, crypto-friendly. 3–4 months.", href: "/curacao-gaming-license" },
      { regulator: "GSC", name: "Isle of Man", description: "Tier-1 prestige. All verticals, strong reputation. 6–12 months.", href: "/gambling-license-of-the-isle-of-man" },
    ]}
    formTitle="Apply for a Costa Rica Gambling License"
    formSubtitle="Tell us about your project. We'll handle everything — from company incorporation to license issuance. Fastest turnaround available."
    formFields={["Full Name", "Company Name", "Target Markets", "Launch Timeline"]}
    formTextareaLabel="Additional details — existing structure, payment processor requirements..."
    formButtonText="Send Request →"
  />
);

export default CostaRicaGamingPage;
