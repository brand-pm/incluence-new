import { LicenseDetailPage } from "@/components/templates/LicenseDetailPage";
import { CostaRicaHeroVisual } from "@/components/templates/heroVisuals";
import { Clock, DollarSign, FileX } from "lucide-react";

const CostaRicaGamingPage = () => (
  <LicenseDetailPage
    categoryLabel="Gambling License"
    categoryHref="/gamble-license"
    titleAccent="Costa Rica"
    titleRest="Gambling License"
    description="The fastest path to legal gambling operations. A Data Processing license issued by the local municipality — no business plan, no capital requirements, no financial reporting. Operational in 2–5 weeks. Income tax exempt for international operators."
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
      "The Costa Rica Data Processing license is issued by the local municipality rather than a national regulator. This means significantly fewer requirements compared to other jurisdictions and a process that can be completed in as little as 2–5 weeks.",
      "The state imposes only one condition: the company's activities must not target Costa Rican residents. For international operators this is a non-issue — you simply operate elsewhere. No business plan, no profit forecast, no anti-gambling addiction measures, no software requirements.",
      "A major financial advantage: if the operator serves any country except Costa Rica, the government treats the company as self-regulated and therefore exempt from income tax. This makes Costa Rica one of the most tax-efficient gambling jurisdictions available.",
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
    requirementsIntro="The lightest requirements of any gambling jurisdiction. No business plan, no software certification — just basic company and KYC documentation."
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
      { question: "How fast can I get a Costa Rica gambling license?", answer: "The municipal license is typically issued within 2–5 weeks of application submission. This makes it the fastest major gambling license available globally." },
      { question: "Is income tax payable on a Costa Rica gambling license?", answer: "No. If your operation serves players outside Costa Rica, the government classifies the company as self-regulated and fully exempt from income tax on international revenue." },
      { question: "Do I need a business plan for a Costa Rica license?", answer: "No. Unlike Malta, Curaçao or Isle of Man licenses, Costa Rica requires no business plan, no profit forecast, no responsible gaming measures, and no software documentation." },
      { question: "Can I accept players from any country?", answer: "Yes, from any country except Costa Rica. Serving Costa Rican residents is prohibited. All other markets are unrestricted." },
      { question: "What are the ongoing costs after license issuance?", answer: "A quarterly renewal fee of $1,500 is the main ongoing cost. Annual total renewal: $6,000. There are no revenue-based taxes for international operators." },
      { question: "Is a Costa Rica license accepted by payment processors?", answer: "Some payment processors accept it, others require EU-regulated licenses. For tier-1 PSPs and banks, we recommend pairing a Costa Rica license with an EU entity structure." },
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
