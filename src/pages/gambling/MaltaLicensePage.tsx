import { LicenseDetailPage } from "@/components/templates/LicenseDetailPage";
import { MaltaHeroVisual } from "@/components/templates/heroVisuals";
import { Shield, Scale, Building } from "lucide-react";
import heroImg from "@/assets/hero-malta-gaming.jpg";

const MaltaLicensePage = () => (
  <LicenseDetailPage
    slug="malta-gaming-license"
    categoryLabel="Gambling License"
    categoryHref="/gamble-license"
    titleAccent="Malta"
    titleRest="Gaming License"
    description="Gaming license Malta: Peculiarities of licensing"
    
    seo={{
      title: "Malta Gaming License MGA — Online Gambling License | Incluence",
      description: "Get a Malta MGA gambling license — EU gold standard. 5-year validity, ~6 months timeline. Full legal support by Incluence.",
      keywords: "Malta gaming license, MGA license, Malta gambling license, online casino Malta, Malta iGaming license",
      canonical: "https://incluence.com/malta-gaming-license",
      schemaId: "malta-schema",
      schemaName: "Malta Gaming License MGA",
    }}
    stats={[
      { value: "~6 months", label: "TIMELINE" },
      { value: "5 years", label: "LICENSE VALIDITY" },
      { value: "MGA", label: "REGULATOR" },
      { value: "EU passporting", label: "MARKET ACCESS" },
    ]}
    aboutTag="ABOUT MGA LICENSE"
    aboutTitle="Why Malta is the EU Gold Standard"
    aboutParagraphs={[
      "Malta is a state with one of the most well-regulated systems of gambling activities. This is largely due to the government's loyalty to the gambling business and the presence of a gambling organization — the MGA.",
      "This official government agency not only regulates gambling activities but also directly licenses gambling entities. The license is issued by the MGA to the applicant for five years. After this period, the businessman will be able to extend its validity and continue to conduct gambling activities.",
    ]}
    benefits={[
      { icon: <Shield className="w-5 h-5" />, title: "EU Gold Standard", description: "MGA is the most recognized gaming regulator in the European Union. Full passporting rights across 27 member states." },
      { icon: <Scale className="w-5 h-5" />, title: "5-Year License", description: "Unlike annual renewals elsewhere, MGA grants a 5-year license — providing long-term operational stability." },
      { icon: <Building className="w-5 h-5" />, title: "Tier-1 Banking Access", description: "MGA-licensed operators gain access to top-tier European banks and payment processors without friction." },
    ]}
    processTitle="How to Obtain a Malta Gaming License"
    processSubtitle="A structured 8-step process. We handle every stage — you only provide basic information."
    steps={[
      { number: "01", title: "Company Registration in Malta", description: "It is necessary to register a local company, for which a license will subsequently be issued. You should select the name of the company, indicate the participants and provide their documents." },
      { number: "02", title: "Account Opening", description: "The company needs to open a bank account in order to deposit the share capital. Opening an account is a complex process that should be entrusted to professionals. A package of documents is collected and negotiations are conducted." },
      { number: "03", title: "Contribution of Authorized Capital", description: "The exact amount of authorized capital depends on the type of the license. The beneficiary must provide documents on the source of origin of funds contributed as authorized capital upon bank's request." },
      { number: "04", title: "Hiring Required Employees", description: "The company must have key positions employees, some of them must be local. We will help with the search and selection of employees." },
      { number: "05", title: "Office Rent", description: "Office rent is not mandatory, but having one will significantly increase your chances of obtaining a license. We will select a budget option that meets the requirements." },
      { number: "06", title: "Preparation of Documents", description: "It is necessary to prepare a business plan, and policies. In addition, application forms must be filled out. The client will only need to provide basic information, on the basis of which we will prepare documents, taking into account local legislation." },
      { number: "07", title: "Filing an Application", description: "It is necessary to submit an application to the regulator after preparing the company and documents. After submitting an application, you must be ready to answer additional questions from the regulator. We will take care of timely and competent answers." },
      { number: "08", title: "Obtaining a License", description: "The company receives a license after successfully passing the previous stages. At the same time, it must begin work within six months from the date of receipt of the license. Otherwise, the license may be cancelled." },
    ]}
    requirementsIntro="In order to obtain a gambling license in Malta, you must submit the required documentation. The authority reviews every detail of your business model, ownership structure, and technical platform."
    requirements={[
      "Copies of passports and confirmation of the address of directors and shareholders of the company",
      "Documents confirming the experience and well-being of the company's participants",
      "Statutory documents of the company",
      "Technical documentation",
      "Company policies",
      "Business plan",
    ]}
    keyFacts={[
      { label: "Regulator", value: "Malta Gaming Authority (MGA)" },
      { label: "License type", value: "B2C / B2B" },
      { label: "Validity", value: "5 years, renewable" },
      { label: "Min. capital", value: "€100,000 authorized" },
      { label: "Timeline", value: "~6 months" },
      { label: "Starting from", value: "On request" },
      { label: "Market access", value: "EU passporting (27 states)" },
      { label: "Physical presence", value: "Required" },
      { label: "Local employees", value: "Required" },
    ]}
    faq={[
      { question: "How to open an online casino in Malta?", answer: "In order to open an online casino in Malta, you need to prepare a business plan, register a company, obtain a license, set up a technical base and open a bank account. You should carefully prepare all the documentation and correctly apply for a license for the online casino creation. These processes should be entrusted to professionals." },
      { question: "What are the terms of registration of a gaming license in Malta?", answer: "The company registration and the gambling license obtaining in Malta takes about 6 months." },
      { question: "What documents are required to obtain a gaming license in Malta?", answer: "In order to obtain a gambling license in Malta, you must submit: - copies of passports and confirmation of the address of directors and shareholders of the company; - documents confirming the experience and well-being of the company's participants; - statutory documents of the company; - technical documentation; - company policies." },
      { question: "What is the cost of obtaining a gambling license in Malta?", answer: "Various factors (the list of services offered, the number of domains, etc.) affect the final cost of obtaining a license for a gambling business in Malta. You can find out the exact cost of obtaining a license for a gambling business in Malta by contacting our specialists." },
    ]}
    related={[
      { regulator: "CGA", name: "Curaçao", description: "Simple and business-friendly legislation. Low taxation, one of the shortest licensing timelines.", href: "/curacao-gaming-license" },
      { regulator: "GSC", name: "Isle of Man", description: "One of the most advanced telecommunications infrastructures. GSC licenses all gambling types under one permit.", href: "/gambling-license-of-the-isle-of-man" },
      { regulator: "Municipal", name: "Costa Rica", description: "A Data Processing license allowing operators to legally organize online gambling. Fast and cost-effective entry.", href: "/gambling-license-in-costa-rica" },
    ]}
    formTitle="Start Your Malta MGA Application"
    formSubtitle="Tell us about your business model and target markets. We will assess your application and provide a detailed cost breakdown based on your specific requirements."
    formFields={["Full Name", "Company Name", "Gambling Verticals", "Target Markets"]}
    formTextareaLabel="Additional details — existing structure, timeline, budget..."
    formButtonText="Send Request →"
  />
);

export default MaltaLicensePage;
