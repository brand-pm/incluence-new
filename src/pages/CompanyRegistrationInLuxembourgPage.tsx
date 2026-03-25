import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-luxembourg
const PAGE_DATA = {
  title: `Company Registration in Luxembourg`,
  description: `Luxembourg offers a stable political and economic environment with full foreign ownership of businesses, favorable conditions for foreign investment, and access to EU markets through its developed banking and financial sectors.`,
  requirements: [
    `Notarized articles of association`,
    `Founding agreement`,
    `Company charter`,
    `Resolution appointing directors`,
    `Bank certificate confirming share capital deposit`,
    `SARL minimum share capital: EUR 21,400 (fully paid)`,
    `SA minimum share capital: EUR 31,100 (25% at incorporation)`,
    `Copies of participants’ passports and proof of address`,
  ],
  faq: [
    { question: `What is the timeframe for company registration in Luxembourg?`, answer: `Usually, company registration in Luxembourg takes 2–3 weeks.` },
    { question: `Can a company in Luxembourg be registered online?`, answer: `A company in Luxembourg can be registered remotely through a power of attorney or via a personal visit.` },
    { question: `Can a non-resident open a business in Luxembourg?`, answer: `A non-resident can register a company in Luxembourg. You can learn all the details of setting up a business in Luxembourg for non-residents from our specialists.` },
    { question: `What documents are required to register a company in Luxembourg?`, answer: `To register a company in Luxembourg, copies of the participants’ passports and proof of address are required. Registration forms must also be submitted, including information on the source of funds for company formation.` },
  ],
};

const CompanyRegistrationInLuxembourgPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInLuxembourgPage;
export { CompanyRegistrationInLuxembourgPage };
