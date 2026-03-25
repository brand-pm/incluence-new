import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /register-company-in-singapore
const PAGE_DATA = {
  title: `Register company in Singapore`,
  description: `Before registration of a company in Singapore, you should study general information about this state, including current languages and the legal system. The local currency is the Singapore dollar, and there is no currency control.`,
  requirements: [
    `Choose the right form of business`,
    `No currency control in Singapore`,
    `Company can operate offshore or onshore`,
    `Low rates of taxation available`,
    `Copies of passport of company's participants`,
    `Confirmations of address of participants`,
    `Completed registration forms`,
  ],
  faq: [
    { question: `What are the terms for opening a firm in Singapore?`, answer: `The firm registration process in Singapore usually takes around 10 working days.` },
    { question: `Can I register a company remotely in Singapore?`, answer: `You can register a company in Singapore remotely by power of attorney or when visiting Singapore.` },
    { question: `What is the cost of opening a company in Singapore?`, answer: `Various factors affect the final cost of the firm formation in Singapore. You can find out the exact cost of registering a company in Singapore by contacting our specialists.` },
    { question: `What documents are required to register a company in Singapore?`, answer: `You should submit copies of passport and confirmations of the address of company's participants. It is also necessary to submit completed registration forms.` },
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
