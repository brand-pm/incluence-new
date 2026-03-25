import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-netherlands
const PAGE_DATA = {
  title: `Company Registration in the Netherlands – Incluence Solutions`,
  description: `The Netherlands is one of the most strategically positioned countries in Europe for launching or expanding an international business. With a strong focus on trade, technology, innovation, and logistics, it is no surprise that thousands of global entrepreneurs choose to incorporate here every year.`,
  requirements: [
    `Valid passport or EU identity card for founders/directors`,
    `Proof of address (utility bill or bank statement, under 3 months old)`,
    `Trade register extract (dated within 3 months)`,
    `Certificate of good standing (depending on jurisdiction)`,
    `UBO (Ultimate Beneficial Owner) declaration`,
    `Apostille or certified translation if not in Dutch or English`,
    `Valid residency or work permit for non-EU/EEA nationals`,
    `Physical Dutch registered business address`,
    `Local bank account setup`,
  ],
  faq: [
    { question: `What are the main types of legal entities for company registration in the Netherlands?`, answer: `The main legal entities are BV (Besloten Vennootschap) -- the most common due to liability protection and low capital requirement; NV (Naamloze Vennootschap) -- larger firms with public capital ambitions; and Eenmanszaak -- for individual business owners with unlimited liability.` },
    { question: `How long does it take to register a company in the Netherlands?`, answer: `Typically, you can complete the process -- including notarization and KvK entry -- in 3-5 business days, especially when working with professionals like Incluence.` },
    { question: `What documents are required for foreign entrepreneurs to register a company?`, answer: `Required documents include valid passports, proof of address, extract from foreign trade register for corporate shareholders, the UBO declaration, and any apostille or translation required per Dutch notary standards.` },
    { question: `Do I need a physical office address in the Netherlands to register my company?`, answer: `Yes, you need a registered Dutch address, though it can be virtual or managed via professional services offering a legal business address.` },
    { question: `What are the typical costs associated with company registration in the Netherlands?`, answer: `Costs include notary fees (from 400 to 1,200+ EUR), KvK registration fee (approximately 80 EUR), and banking setup expenses. Incluence offers transparent, all-inclusive pricing.` },
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
