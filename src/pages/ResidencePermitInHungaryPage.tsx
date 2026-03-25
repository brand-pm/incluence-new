import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /residence-permit-in-hungary
const PAGE_DATA = {
  title: `Residence Permit in Hungary`,
  description: `If you want to live in Europe with official status, Hungary may be one of the simplest ways to achieve this goal. A Hungarian residence permit is one of the most accessible options that allows you to relocate to Europe for permanent residence.`,
  requirements: [
    `Valid passport`,
    `Proof of grounds for residence (employment, study, family ties)`,
    `Proof of financial resources`,
    `Medical insurance`,
    `Proof of housing in Hungary`,
    `Criminal record certificate`,
    `Due Diligence check (if applying as a company)`,
  ],
  faq: [
    { question: `What are the benefits of a Hungarian residence permit?`, answer: `A Hungarian RP grants the right to live, work, access social protection and healthcare, and travel freely within the Schengen zone.` },
    { question: `Can I obtain Hungarian residency through investment?`, answer: `Currently, Hungary has no direct residency-by-investment program. The previous program has been canceled.` },
    { question: `How to obtain a Hungarian residence permit?`, answer: `A Hungarian RP is issued based on employment, self-employment, studies, marriage to a Hungarian citizen, or proof of sufficient financial resources. Applications are submitted at the local immigration office.` },
    { question: `What documents are required for a Hungarian RP?`, answer: `You will need a valid passport, proof of grounds for residence (employment, study, family ties), proof of financial resources, medical insurance, and proof of housing in Hungary.` },
  ],
};

const ResidencePermitInHungaryPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default ResidencePermitInHungaryPage;
export { ResidencePermitInHungaryPage };
