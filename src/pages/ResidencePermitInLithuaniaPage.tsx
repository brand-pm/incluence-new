import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /residence-permit-in-lithuania
const PAGE_DATA = {
  title: `Residence Permit in Lithuania`,
  description: `There are many reasons to move to Lithuania — numerous business opportunities, plenty of employment options, and prestigious educational institutions. For relocation, foreigners must obtain a residence permit, which Lithuania grants to migrants who meet certain conditions.`,
  requirements: [
    `Valid passport`,
    `Work contract or university admission letter`,
    `Proof of financial means`,
    `Valid health insurance`,
    `Proof of accommodation in Lithuania`,
    `Biometric data (submitted at Migration Department)`,
    `Electronic application via MIGRIS system`,
  ],
  faq: [
    { question: `What does a residence permit in Lithuania provide?`, answer: `A residence permit in Lithuania allows foreigners to legally live in the country, work, study, access healthcare and social services, and travel freely within the Schengen Area without a visa.` },
    { question: `Can I obtain a residence permit in Lithuania through investment?`, answer: `Yes. Foreigners can obtain a residence permit in Lithuania through investments. This requires investing in Lithuanian companies or making significant financial contributions to the country’s economy.` },
    { question: `How to obtain a residence permit in Lithuania?`, answer: `You must apply to the Lithuanian Migration Department with the appropriate application and supporting documents proving your grounds for residence (e.g., employment, education, or marriage to a Lithuanian citizen).` },
    { question: `What documents are required?`, answer: `The main documents include a valid passport, documents confirming the grounds for residence (e.g., work contract or university admission letter), proof of financial means, valid health insurance, and proof of accommodation in Lithuania.` },
  ],
};

const ResidencePermitInLithuaniaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default ResidencePermitInLithuaniaPage;
export { ResidencePermitInLithuaniaPage };
