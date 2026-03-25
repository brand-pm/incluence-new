import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-company-in-usa
const PAGE_DATA = {
  title: `Open company in USA`,
  description: `Register a company in the United States by choosing a state suited to your type of activity. The company must have a local agent and address in the selected state.`,
  requirements: [
    `Copies of passports of company participants`,
    `Proof of address of company participants`,
    `Completed registration forms`,
    `Information about the source of funding`,
    `Local agent and address in the selected state`,
  ],
  faq: [
    { question: `What is the cost of business registration in the USA?`, answer: `Various factors affect the final cost of company formation in the USA. You can find out the exact cost by contacting our specialists.` },
    { question: `How to open a company in the USA as a non-resident?`, answer: `Choose a state, check the desired name in the state registry, and submit data and documents of directors, shareholders, and beneficiaries. You must indicate an American address and type of activity.` },
    { question: `What documents are required to register a company in the USA?`, answer: `The exact list depends on the selected state. Usually you need copies of passports, address information, and completed registration forms with information about the source of funding.` },
    { question: `Is it possible to register a company remotely in the USA?`, answer: `The conditions depend on the rules of a particular state. Some states allow self-registration online, but the company must have a local agent and address.` },
  ],
};

const OpenCompanyInUsaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenCompanyInUsaPage;
export { OpenCompanyInUsaPage };
