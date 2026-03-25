import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /register-company-in-hong-kong
const PAGE_DATA = {
  title: `Register company in Hong Kong`,
  description: `The territorial principle of taxation applies here.The issue of opening accounts should be carefully thought over.`,
  requirements: [
    `Contact our specialists for detailed requirements`,
  ],
  faq: [
    { question: `What is the cost of registering companies in Hong Kong?`, answer: `Various factors affect the final cost of the company formation in Hong Kong. You can find out the exact cost of registering a company in Hong Kong by contacting our specialists.` },
    { question: `What are the terms of the company’s registration in Hong Kong?`, answer: `Registration of a company in Hong Kong takes about 2 weeks after receiving the original documents and payment.` },
    { question: `How to register a company in Hong Kong?`, answer: `In order to register a company in Hong Kong you should submit personal documents of company members, as well as completed registration forms. The original forms must be sent to Hong Kong. Registration process requires a local secretary and address.` },
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
