import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /residence-permit-in-slovakia
const PAGE_DATA = {
  title: `Residence Permit in Slovakia`,
  description: `Slovakia is a relatively small yet cozy country located in the heart of Europe. If you want to move here for work, study, or other reasons, you will need a special document — a residence permit, also called the Slovak Pobyt Card.`,
  requirements: [
    `Completed application form`,
    `Two color photos (3x3.5 cm)`,
    `Bank statement proving financial means`,
    `Receipt confirming payment of the state fee`,
    `Valid passport`,
    `Proof of accommodation in Slovakia`,
    `Criminal record certificate`,
    `Proof of purpose of stay`,
  ],
  faq: [
    { question: `What does a residence permit in Slovakia provide?`, answer: `A Slovak residence permit allows foreigners to legally reside in the country, work, or study. It also grants access to healthcare, education, social services, and visa-free travel across the Schengen area.` },
    { question: `Can I get a residence permit in Slovakia through investment?`, answer: `Yes, Slovakia offers residence permits through investment programs, usually requiring investment in local businesses or entrepreneurial activities. This involves significant financial contributions and a business development plan.` },
    { question: `How can I obtain a residence permit in Slovakia?`, answer: `You must apply to the Slovak Foreigners’ Police, providing all required documents and proof of grounds (employment, studies, or family ties with Slovak citizens).` },
    { question: `What documents are required for a residence permit in Slovakia?`, answer: `You will need a valid passport, proof of grounds (job contract, university invitation), proof of sufficient financial means, accommodation confirmation, and health insurance.` },
  ],
};

const ResidencePermitInSlovakiaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default ResidencePermitInSlovakiaPage;
export { ResidencePermitInSlovakiaPage };
