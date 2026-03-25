import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-portugal
const PAGE_DATA = {
  title: `Company Registration in Portugal: Incluence Online Consultation & Service`,
  description: `The process of company formation in Portugal is methodical, transparent, and increasingly digital. Incluence helps you register a company in Portugal from name approval to tax registration.`,
  requirements: [
    `Valid passport (clear, full-page scan)`,
    `Portuguese Tax Identification Number (NIF)`,
    `Proof of residential address (within last 90 days)`,
    `Proof of professional status or employment`,
    `Portuguese mobile number and email address`,
    `Certificate of Incorporation of parent company (if corporate)`,
    `Memorandum and Articles of Association of parent company`,
    `Shareholder resolution for subsidiary establishment`,
    `Power of Attorney for Portuguese legal representative`,
    `Articles of Association tailored to business model`,
    `Proof of share capital deposit`,
    `Certificate of Admissibility from RNPC`,
    `Notarization and apostille per Hague Convention`,
    `Certified translations into Portuguese`,
  ],
  faq: [
    { question: `What is the minimum share capital for a company in Portugal?`, answer: `LDA companies may start from 1 EUR per shareholder. 5,000+ EUR is recommended for credibility and banking.` },
    { question: `How long does it take to register a company in Portugal?`, answer: `Typically 10-25 business days, depending on bank account setup and document readiness.` },
    { question: `Can a foreigner register a company in Portugal?`, answer: `Yes, 100% foreign ownership is allowed. A fiscal representative is required for non-residents.` },
    { question: `What is an LDA company in Portugal?`, answer: `A private limited company (Sociedade por Quotas) with limited liability and simplified management.` },
    { question: `Do I need a physical address to register a company in Portugal?`, answer: `Yes, a local registered address is mandatory and can be rented via service providers.` },
    { question: `What are the annual costs of maintaining a company in Portugal?`, answer: `Expect around 1,000-1,500 EUR per year.` },
    { question: `How can I open a business bank account in Portugal?`, answer: `Usually requires personal presence, NIF, company documents, and proof of business intent.` },
    { question: `What documents are required for company registration in Portugal?`, answer: `Passport, NIF, proof of address, Articles of Association, and capital deposit proof.` },
    { question: `What are the tax benefits of opening a company in Portugal?`, answer: `The NHR regime, Madeira IBC, and corporate tax incentives provide significant savings.` },
    { question: `Is it possible to register a company in Portugal online?`, answer: `Yes, via the Empresa na Hora system, but expert assistance is advised for accuracy.` },
  ],
};

const CompanyRegistrationPortugalPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationPortugalPage;
export { CompanyRegistrationPortugalPage };
