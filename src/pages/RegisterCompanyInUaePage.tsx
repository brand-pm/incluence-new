import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /register-company-in-uae
const PAGE_DATA = {
  title: `Register company in UAE`,
  description: `Register a company in United Arab Emirates Today, the United Arab Emirates offers a wide range of business opportunities for business people. The country provides three organizational-legal forms that have their advantages and disadvantages.`,
  requirements: [
    `Contact our specialists for detailed requirements`,
  ],
  faq: [
    { question: `What is the cost of business registration in the UAE?`, answer: `Various factors affect the final cost of the company formation in the UAE. You can find out the exact cost of registering a company in the UAE by contacting our specialists.` },
    { question: `How to open a company in the UAE?`, answer: `In order to register a company in the UAE, you must select the territory of registration (the mainland or a free zone) and the desired emirate. You should prepare a package of documents, submit documents for registering a company and obtaining a lice` },
    { question: `What documents are required for the company’s registration in the UAE?`, answer: `In order to register a company in the UAE, you must submit copies of passport and confirmations of the address of company\'s participants. It is also necessary to submit completed registration forms, including information about the source of funding ` },
    { question: `Is it possible to register a company remotely in the UAE?`, answer: `You can register a company in the UAE remotely by power of attorney or when visiting the UAE.` },
  ],
};

const RegisterCompanyInUaePage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default RegisterCompanyInUaePage;
export { RegisterCompanyInUaePage };
