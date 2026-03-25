import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /register-company-in-uae
const PAGE_DATA = {
  title: `Register company in UAE`,
  description: `Today, the United Arab Emirates offers a wide range of business opportunities for business people. The country provides three organizational-legal forms that have their advantages and disadvantages.`,
  requirements: [
    `Copies of passport for company participants`,
    `Proof of address for company participants`,
    `Completed registration forms`,
    `Information about the source of funding`,
    `Confirmation of the origin of funds`,
  ],
  faq: [
    { question: `What is the cost of business registration in the UAE?`, answer: `Various factors affect the final cost of the company formation in the UAE. You can find out the exact cost of registering a company in the UAE by contacting our specialists.` },
    { question: `How to open a company in the UAE?`, answer: `You must select the territory of registration (the mainland or a free zone) and the desired emirate. Prepare a package of documents and submit them for registering a company and obtaining a license for the selected type of activity.` },
    { question: `What documents are required for the company’s registration in the UAE?`, answer: `You must submit copies of passport and address confirmations of company participants, plus completed registration forms including information about the source of funding. Beneficiaries may be asked to confirm the origin of funds.` },
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
