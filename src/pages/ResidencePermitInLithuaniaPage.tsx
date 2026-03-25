import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /residence-permit-in-lithuania
const PAGE_DATA = {
  title: `Residence Permit in Lithuania`,
  description: `Obtaining a Residence Permit: Lithuania There are many reasons to move to Lithuania — numerous business opportunities, plenty of employment options, prestigious educational institutions, and more. However, for relocation, foreigners must obtain the appropriate status — a residence permit.`,
  requirements: [
    `Obtaining a Residence Permit: Lithuania`,
    `There are many reasons to move to Lithuania — numerous business opportunities, plenty of employment options, prestigious educational institutions, and more. However, for relocation, foreigners must obtain the appropriate status — a residence permit. Lithuania grants it to migrants who meet certain conditions`,
    `In particular, grounds are required to obtain such a permit. This may include employment in a Lithuanian company, a significant investment in the country’s economy, running a business, and so on. For additional information about residence permits in Lithuania, contact the specialists at Incluence`,
    `Basic Information About a Temporary Residence Permit: Lithuania`,
    `In most cases, authorities issue residence permits to migrants for 1–2 years. However, in some situations, the period may be longer. For example, if a foreigner has the right to restore Lithuanian citizenship, their permit will be valid for 5 years. In all cases, residence permits can be extended, but the total term cannot exceed 5 years`,
    `To apply, you must first submit the application electronically via Lithuania’s migration information system — MIGRIS. After that, the foreigner has 4 months to appear in person at the Migration Department. To obtain the permit, they must provide biometric data and a set of required documents`,
    `When applying for a residence permit, the migrant must legally reside in Lithuania. The same applies at the time the ready permit is issued. Legal residence means holding a visa, or in some cases, using the visa-free regime if applicable. Migrants may also request a national visa from the Migration Department, valid for no more than 5 months`,
    `Grounds for Obtaining a Residence Permit in Lithuania`,
    `If you are interested in Lithuania, you can obtain a residence permit based on specific grounds. The most common are:`,
    `Family reunification (only close relatives — spouses, parents, children). Official employment with a Lithuanian company. Enrollment in an educational institution in Lithuania. Engagement in legal activities in the country. Restoration of Lithuanian citizenship`,
  ],
  faq: [
    { question: `What does a residence permit in Lithuania provide?`, answer: `A residence permit in Lithuania allows foreigners to legally live in the country, work, study, access healthcare and social services, and travel freely within the Schengen Area without a visa.` },
    { question: `Can I obtain a residence permit in Lithuania through investment?`, answer: `Yes. Foreigners can obtain a residence permit in Lithuania through investments. This requires investing in Lithuanian companies or making significant financial contributions to the country’s economy.` },
    { question: `How to obtain a residence permit in Lithuania?`, answer: `To obtain a residence permit in Lithuania, you must apply to the Lithuanian Migration Department with the appropriate application and supporting documents proving your grounds for residence (e.g., employment, education, or marriage to a Lithuanian ci` },
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
