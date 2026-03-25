import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-netherlands
const PAGE_DATA = {
  title: `Company Registration in the Netherlands – Incluence Solutions`,
  description: `Netherlands Company Formation: Full Process Services The Netherlands is one of the most strategically positioned countries in Europe for launching or expanding an international business.`,
  requirements: [
    `Required Documents for Company Formation`,
    `To ensure a smooth incorporation process, you\'ll need to prepare the following documents:Founders / Directors:Valid passport or EU identity card (for individuals)Proof of address (e.g., utility bill or bank statement not older than 3 months).An extract from the trade register or general commercial register of the country where the company is registered, dated within three months.Possibly a certificate of good standing, depending on jurisdiction.UBO (Ultimate Beneficial Owner) Declaration:A formal declaration identifying individuals who ultimately control or benefit from the company (typically persons holding >25% of shares or voting rights).Notarization Requirements: Copies of identity documents may require legalization, apostille, or certified translation if not in Dutch or English`,
    `Key Requirements and Considerations for Foreigners`,
    `Foreign entrepreneurs must address specific considerations when founding in the Netherlands:Visa and Residency Permits: Non‑EU/EEA nationals generally need a valid residency permit or work permit to act as a director or run daily operations. Programs like the Dutch startup visa may apply.Registered Address Requirements: Your company must have a physical Dutch business address. While virtual offices are permitted, they must allow for official correspondence and must not be used for fraudulent purposes.Local Bank Account: Opening a Dutch business bank account often requires at least one director or authorized representative to visit the branch in person. Some fintech platforms support remote account opening, but they may come with limitations.Dutch Director (Tax Residency Concerns): While not legally mandatory, having a resident director in the Netherlands is often advisable to demonstrate local substance and mitigate permanent establishment (PE) risks for tax purposes.Language and Cultural Context: English is widely spoken, especially in business, legal, and academic environments. However, for official communication, some Dutch may still be used—especially with notaries and authorities`,
  ],
  faq: [
    { question: `What are the main types of legal entities for company registration in the Netherlands?`, answer: `The main legal entities are BV (Besloten Vennootschap) – the most common due to liability protection and low capital requirement; NV (Naamloze Vennootschap) – larger firms with public capital ambitions; and Eenmanszaak – for individual business owner` },
    { question: `How long does it take to register a company in the Netherlands?`, answer: `Typically, you can complete the process of Netherlands company register—including notarization and KvK entry—in 3–5 business days, especially when working with professionals like Incluence company.` },
    { question: `What documents are required for foreign entrepreneurs to register a company?`, answer: `Required documents include valid passports, proof of address, extract from foreign trade register for corporate shareholders, the UBO declaration, and any apostille or translation required per Dutch notary standards.` },
    { question: `Do I need a physical office address in the Netherlands to register my company?`, answer: `Yes—you need a registered Dutch address, though it can be virtual or managed via professional services offering a legal business address.` },
    { question: `What are the typical costs associated with company registration in the Netherlands?`, answer: `Costs include notary fees (€2,500+), KvK registration fee (€1), and banking setup expenses. Incluence offers package transparency to give you value and clarity.` },
  ],
};

const CompanyRegistrationNetherlandsPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationNetherlandsPage;
export { CompanyRegistrationNetherlandsPage };
