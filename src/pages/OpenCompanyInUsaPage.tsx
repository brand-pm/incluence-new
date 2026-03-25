import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-company-in-usa
const PAGE_DATA = {
  title: `Open company in USA`,
  description: `Register a company in the United States by choosing a state suited to your type of activity. The company must have a local agent and address in the selected state.`,
  sections: [],
  requirements: [
    `Copies of passports of company participants`,
    `Proof of address of company participants`,
    `Completed registration forms`,
    `Information about the source of funding`,
    `Local agent and address in the selected state`,
  ],
  faq: [
    { question: `What is the cost of business registration in the USA?`, answer: `Various factors affect the final cost of the company formation in the USA. You can find out the exact cost of registering a company in the USA by contacting our specialists.` },
    { question: `How to open a company in the USA to a non-resident?`, answer: `In order to register a company in the United States, you need to choose a state for the selected type of activity, as well as check the availability of the desired name in the state registry. Depending on the state law, submit to the register data and documents of directors, shareholders and beneficiaries of the company, indicate the American address and type of activity independently or through the local secretary.` },
    { question: `What documents are required for the company to register in the USA?`, answer: `The exact list of documents depends on the rules for registering a company in the selected state. Usually, it is necessary to submit copies of passports and information about the address of company participants in order to register a company in the United States. It is also necessary to submit completed registration forms, including information about the source of funding for the creation of the company.` },
    { question: `Is it possible to register a company remotely in the USA?`, answer: `The conditions of company formation in the United States depend on the rules of a particular state. Some states allow self-registration of a company online. But the company must have a local agent and address.` },
  ],
};

const OpenCompanyInUsaPage = () => (
  <ServiceDetailPage
    slug="open-company-in-usa"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenCompanyInUsaPage;
export { OpenCompanyInUsaPage };
