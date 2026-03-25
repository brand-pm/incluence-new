import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /register-company-in-hong-kong
const PAGE_DATA = {
  title: `Register company in Hong Kong`,
  description: `Hong Kong is the world’s first administrative region by the number of registered offshore businesses. The financial center of China is attractive for business and is not included in the list of offshore zones, though the territorial principle of taxation applies.`,
  requirements: [
    `Territorial principle of taxation applies`,
    `Personal documents of company members`,
    `Completed registration forms (originals required)`,
    `Original forms must be sent to Hong Kong`,
    `Local secretary required`,
    `Local registered address required`,
  ],
  faq: [
    { question: `What is the cost of registering companies in Hong Kong?`, answer: `Various factors affect the final cost of the company formation in Hong Kong. You can find out the exact cost of registering a company in Hong Kong by contacting our specialists.` },
    { question: `What are the terms of the company’s registration in Hong Kong?`, answer: `Registration of a company in Hong Kong takes about 2 weeks after receiving the original documents and payment.` },
    { question: `How to register a company in Hong Kong?`, answer: `You should submit personal documents of company members and completed registration forms. The original forms must be sent to Hong Kong. The registration process requires a local secretary and address.` },
    { question: `Is it possible to register a company remotely in Hong Kong?`, answer: `Non-residents can register a company remotely through relevant specialists. The local secretary will be able to register a company in Hong Kong online.` },
  ],
};

const RegisterCompanyInHongKongPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default RegisterCompanyInHongKongPage;
export { RegisterCompanyInHongKongPage };
