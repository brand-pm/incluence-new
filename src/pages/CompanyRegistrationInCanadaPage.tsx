import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-canada
const PAGE_DATA = {
  title: `Company Registration in Canada`,
  description: `The ease of doing business and a clear taxation system attract more and more organizations to Canada. Successfully registering a company here depends on proper planning and understanding local laws.`,
  requirements: [
    `Founder must be of legal age`,
    `No outstanding criminal record`,
    `Valid foreign passport (at least 1 year before expiration)`,
    `Copy of passport and paid utility bill (notarized)`,
    `Bank reference from shareholder’s institution`,
    `Application form and business registration questionnaire`,
  ],
  faq: [
    { question: `What is the timeline for registering a company in Canada?`, answer: `You can register a company in Canada in 3 weeks.` },
    { question: `Can a company in Canada be registered online?`, answer: `Yes, a company in Canada can be registered remotely through local representatives.` },
    { question: `Can a non-resident open a business in Canada?`, answer: `A non-resident who is not on sanctions lists and not a resident of a sanctioned country can register a company in Canada.` },
    { question: `What documents are required to register a company in Canada?`, answer: `You need to provide a copy of your passport and proof of address of the company participants.` },
  ],
};

const CompanyRegistrationInCanadaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInCanadaPage;
export { CompanyRegistrationInCanadaPage };
