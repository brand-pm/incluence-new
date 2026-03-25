import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { UAECompanyVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /register-company-in-uae
const PAGE_DATA = {
  title: `Register company in UAE`,
  description: `Today, the United Arab Emirates offers a wide range of business opportunities for business people. The country provides three organizational-legal forms that have their advantages and disadvantages.`,
  sections: [
    {
      heading: `Register a company in United Arab Emirates`,
      body: `Today, the United Arab Emirates offers a wide range of business opportunities for business people. The country provides three organizational-legal forms that have their advantages and disadvantages.\nAt the same time, business registration in UAE can be the best option for entrepreneurs who want to obtain a residence permit in this state. To do this, it is enough to open a company of a certain type and apply for a residency visa.`,
    },
  ],
  faq: [
    { question: `What is the cost of business registration in the UAE?`, answer: `Various factors affect the final cost of the company formation in the UAE. You can find out the exact cost of registering a company in the UAE by contacting our specialists.` },
    { question: `How to open a company in the UAE?`, answer: `In order to register a company in the UAE, you must select the territory of registration (the mainland or a free zone) and the desired emirate. You should prepare a package of documents, submit documents for registering a company and obtaining a license for the selected type of activity in accordance with the requirements of the Emirate and the type of company.` },
    { question: `What documents are required for the company's registration in the UAE?`, answer: `In order to register a company in the UAE, you must submit copies of passport and confirmations of the address of company's participants. It is also necessary to submit completed registration forms, including information about the source of funding for the creation of the company. When registering, beneficiaries may be asked to confirm the origin of funds for the creation of a company.` },
    { question: `Is it possible to register a company remotely in the UAE?`, answer: `You can register a company in the UAE remotely by power of attorney or when visiting the UAE.` },
  ],
};

const RegisterCompanyInUaePage = () => (
  <ServiceDetailPage
    slug="register-company-in-uae"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
    heroVisual={<UAECompanyVisual />}

  />
);

export default RegisterCompanyInUaePage;
export { RegisterCompanyInUaePage };
