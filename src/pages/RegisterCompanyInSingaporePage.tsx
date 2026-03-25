import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /register-company-in-singapore
const PAGE_DATA = {
  title: `Register company in Singapore`,
  description: `Registration of companies in Singapore Before registration of company in Singapore, you should study general information about this state — find out the current languages and study the legal system. Please note that the local currency is the Singapore dollar, but there is no currency control.`,
  requirements: [
    `Registration of companies in Singapore`,
    `Before registration of company in Singapore, you should study general information about this state — find out the current languages and study the legal system. Please note that the local currency is the Singapore dollar, but there is no currency control`,
    `If you plan to register a company in Singapore, you must, first of all, choose the right form of business. If you define the structure correctly, the organization can operate offshore or onshore, as well as fall under low rates of taxation`,
  ],
  faq: [
    { question: `What are the term for opening a firm in Singapore?`, answer: `The firm registration process in Singapore usually takes around 10 working days.` },
    { question: `Can I register a company remotely in Singapore?`, answer: `You can register a company in Singapore remotely by power of attorney or when visiting Singapore.` },
    { question: `What is the cost of opening a company in Singapore?`, answer: `Various factors affect the final cost of the firm formation in Singapore. You can find out the exact cost of registering a company in Singapore by contacting our specialists.` },
    { question: `What documents are required to register a company in Singapore?`, answer: `In order to register a company in Singapore, you should submit copies of passport and confirmations of the address of company\'s participants. It is also necessary to submit completed registration forms.` },
  ],
};

const RegisterCompanyInSingaporePage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default RegisterCompanyInSingaporePage;
export { RegisterCompanyInSingaporePage };
