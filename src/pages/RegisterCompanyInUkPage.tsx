import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /register-company-in-uk
const PAGE_DATA = {
  title: `Register company in UK`,
  description: `Registering a company in the United Kingdom Registering a company UK is an option for stable business development rather than a way to take your business offshore. There is a clear system of taxation, which implies paying taxes on profits.`,
  requirements: [
    `Registering a company in the United Kingdom`,
    `Registering a company UK is an option for stable business development rather than a way to take your business offshore. There is a clear system of taxation, which implies paying taxes on profits. Moreover, competent planning of the future company structure and the right choice of organizational-legal form will help to considerably reduce the financial burden`,
  ],
  faq: [
    { question: `What is the cost of registering companies in UK?`, answer: `Various factors affect the final cost of UK company registration. You can find out the exact cost of registering a company in UK by contacting our specialists.` },
    { question: `How to register a company in the UK?`, answer: `It is necessary to submit to the registry data and documents of directors, shareholders and beneficiaries of the company, indicate the British address, describe the company itself in order to register a company in the UK. Registration requires a prio` },
    { question: `What documents are required for the company’s registration in UK?`, answer: `Scan copy of passport or ID card and proof of address are required standardly for company formation in UK. In some cases, additional documents may be required. You can always find out the exact list of documents for your case from our specialists.` },
    { question: `How to check company registration in the UK?`, answer: `All existing UK companies, as well as liquidated companies, are visible in the Companies House register. Anyone can check a company by name for free and without registration. The name, date of registration, registration number and participants of the` },
  ],
};

const RegisterCompanyInUkPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default RegisterCompanyInUkPage;
export { RegisterCompanyInUkPage };
