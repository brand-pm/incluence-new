import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /residence-permit-in-portugal
const PAGE_DATA = {
  title: `Residence Permit in Portugal`,
  description: `Obtaining a Residence Permit: Portugal Portugal is mostly sunny, has a relatively high level of safety, and many other advantages. The country is considered an excellent place to live, but migrants need to obtain a residence permit (V.N.J.) to relocate here.`,
  requirements: [
    `Conditions for Obtaining a Residence Permit in Portugal`,
    `Residence permits can also be granted for reasons other than investment, including:`,
    `Education – students admitted to Portuguese schools/universities (Bachelor’s, Master’s, Doctorate). Employment – employees of Portuguese companies with contracts of 4 months or longer. Family reunification – relatives supported by Portuguese citizens can apply. Marriage to a Portuguese citizen – authorities carefully verify legitimacy of the marriage`,
    `Required Documents for a Residence Permit`,
    `Documents vary depending on the applicant’s situation. Basic documents typically include:`,
    `Passport Temporary visa for EU travel Marriage/birth certificates (if applicable) Health insurance Criminal record check Proof of no debts or legal issues`,
    `Property purchase agreement Proof of bank transfer of investment Certificate of property rights transfer`,
    `All documents must be properly apostilled and translated, otherwise authorities may reject the application`,
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
