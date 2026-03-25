import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /malaysia-company-registration
const PAGE_DATA = {
  title: `Online Company Registration Malaysia for Foreigners - Incluence`,
  description: `Malaysia offers a business-friendly environment with clear regulatory expectations for foreign entrepreneurs. Every Sdn. Bhd. requires at least one resident director and a registered office address in Malaysia.`,
  requirements: [
    `At least one resident director in Malaysia`,
    `At least one shareholder (individual or corporation)`,
    `Registered office address in Malaysia`,
    `Licensed company secretary (within 30 days of incorporation)`,
    `Minimum paid-up capital of MYR 1 (MYR 2,500+ recommended)`,
    `Name approval letter from SSM`,
    `Incorporation application (Form 14 / Superform)`,
    `Passport copies and proof of address for directors/shareholders`,
    `Power of attorney or certified translations if needed`,
  ],
  faq: [
    { question: `Can a foreigner own 100% of a company in Malaysia?`, answer: `Yes, most industries allow full foreign ownership, especially under a Sdn. Bhd. structure.` },
    { question: `How long does it take to register a company in Malaysia?`, answer: `Between 3-10 working days depending on document readiness.` },
    { question: `Do I need to be in Malaysia to register a company?`, answer: `No, but you will need a resident director and address. Bank account openings often require physical presence.` },
    { question: `What is the minimum capital requirement to start a company in Malaysia?`, answer: `Legally MYR 1; practically MYR 2,500-500,000 depending on business nature and visa needs.` },
    { question: `What is a Company Secretary and why do I need one?`, answer: `It is a legal requirement. The secretary ensures regulatory compliance and manages company filings.` },
    { question: `How much does it cost to register a company in Malaysia?`, answer: `Expect to pay around 3,500-3,800 EUR.` },
    { question: `What documents are required for a foreigner to register a company?`, answer: `Name approval, incorporation forms, passport, proof of address, capital documentation.` },
    { question: `Can I open a corporate bank account in Malaysia as a non-resident?`, answer: `Yes, but many banks require at least one director to be present in person.` },
  ],
};

const MalaysiaCompanyRegistrationPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default MalaysiaCompanyRegistrationPage;
export { MalaysiaCompanyRegistrationPage };
