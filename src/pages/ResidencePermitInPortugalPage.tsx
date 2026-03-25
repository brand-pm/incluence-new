import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /residence-permit-in-portugal
const PAGE_DATA = {
  title: `Residence Permit in Portugal`,
  description: `Portugal is mostly sunny, has a relatively high level of safety, and many other advantages. The country is considered an excellent place to live, but migrants need to obtain a residence permit to relocate here.`,
  requirements: [
    `Passport`,
    `Temporary visa for EU travel`,
    `Marriage/birth certificates (if applicable)`,
    `Health insurance`,
    `Criminal record check`,
    `Proof of no debts or legal issues`,
    `Property purchase agreement (for investors)`,
    `All documents must be apostilled and translated`,
  ],
  faq: [
    { question: `What does a residence permit in Portugal provide?`, answer: `A Portuguese residence permit allows living, working, studying, accessing social benefits, and traveling/residing in the Schengen zone without a visa.` },
    { question: `Can a residence permit be obtained via investment?`, answer: `Yes, through Portugal’s “Golden Visa” program via real estate, capital, or job creation.` },
    { question: `How to obtain a residence permit in Portugal?`, answer: `It can be obtained through employment, investment, property purchase, or family reunification.` },
    { question: `What documents are required for a residence permit in Portugal?`, answer: `Passport, proof of legal basis (work, investment, study, family), financial guarantees, medical insurance, and proof of accommodation.` },
  ],
};

const ResidencePermitInPortugalPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default ResidencePermitInPortugalPage;
export { ResidencePermitInPortugalPage };
