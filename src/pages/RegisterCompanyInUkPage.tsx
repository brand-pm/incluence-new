import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /register-company-in-uk
const PAGE_DATA = {
  title: `Register company in UK`,
  description: `Registering a company in the UK is an option for stable business development rather than a way to take your business offshore. There is a clear system of taxation, which implies paying taxes on profits.`,
  requirements: [
    `Scan copy of passport or ID card`,
    `Proof of address`,
    `Data of directors, shareholders, and beneficiaries`,
    `British registered address`,
    `Prior authorization for registration`,
  ],
  faq: [
    { question: `What is the cost of registering companies in UK?`, answer: `Various factors affect the final cost of UK company registration. You can find out the exact cost of registering a company in UK by contacting our specialists.` },
    { question: `How to register a company in the UK?`, answer: `Submit to the registry data and documents of directors, shareholders, and beneficiaries, indicate the British address, and describe the company. Registration requires prior authorization and can be done quickly with experienced intermediaries.` },
    { question: `What documents are required for the company’s registration in UK?`, answer: `Scan copy of passport or ID card and proof of address are required standardly for company formation in UK. In some cases, additional documents may be required. Contact our specialists for the exact list.` },
    { question: `How to check company registration in the UK?`, answer: `All existing and liquidated UK companies are visible in the Companies House register. Anyone can check a company by name for free, viewing the name, date of registration, registration number, and participants.` },
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
