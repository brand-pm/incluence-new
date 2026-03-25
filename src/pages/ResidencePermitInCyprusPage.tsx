import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /residence-permit-in-cyprus
const PAGE_DATA = {
  title: `Residence Permit in Cyprus`,
  description: `Obtaining a Cyprus Residence Permit with Incluence The Republic of Cyprus is popular not only among tourists but also among those seeking a new place of residence. To achieve this goal, migrants try to obtain a special permit — a residence permit (RP).`,
  requirements: [
    `Required documents for obtaining a Cyprus residence permit`,
    `Depending on the chosen legalization option, different documents may be required. The most commonly requested documents include:`,
    `Completed application form. Income declaration — required for some programs, such as investment-based residence permits. Applicant’s biography. Passport of the migrant and their family members (if included in the application). Proof of permanent residence in Cyprus. Criminal record certificate — required for all applicants. Certificates of marriage and children’s birth. Health insurance`,
  ],
  faq: [
    { question: `What does a residence permit in Cyprus provide?`, answer: `A residence permit in Cyprus grants the right to permanent residence, employment, access to healthcare and education, as well as the ability to travel within the European Union without visa restrictions.` },
    { question: `Can you obtain a residence permit in Cyprus through investment?`, answer: `Yes, in Cyprus it is possible to obtain a residence permit through investments in real estate, financial assets, or business.` },
    { question: `How to obtain a residence permit in Cyprus?`, answer: `A residence permit in Cyprus can be obtained through real estate investments, financial contributions to the country’s economy, or employment. To apply, you must contact the Cyprus Immigration Department.` },
    { question: `What documents are required to obtain a residence permit in Cyprus?`, answer: `To obtain a residence permit in Cyprus, you need to present a valid passport, documents confirming legal residence (such as a property purchase contract or employment contract), proof of financial solvency, health insurance, and evidence of housing i` },
  ],
};

const ResidencePermitInCyprusPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default ResidencePermitInCyprusPage;
export { ResidencePermitInCyprusPage };
