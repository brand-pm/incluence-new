import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /register-company-in-switzerland
const PAGE_DATA = {
  title: `Register company in Switzerland`,
  description: `Starting a business in Switzerland is the best option for entrepreneurs looking for trouble-free company registration and simple working conditions. The state also attracts business representatives with its stability in the legal, political, and economic spheres.`,
  requirements: [
    `Trouble-free company registration process`,
    `Stability in legal, political, and economic spheres`,
    `Simple working conditions for entrepreneurs`,
  ],
  faq: [
    { question: `What is the cost of business registration in Switzerland?`, answer: `Various factors affect the final cost of the business formation in Switzerland. You can find out the exact cost of registering a company in Switzerland by contacting our specialists.` },
    { question: `How long does it take to register a company in Switzerland?`, answer: `Company registration in Switzerland takes about 2-3 weeks.` },
    { question: `How to start a business in Switzerland?`, answer: `You need to choose a company name that is free for registration, collect a package of documents, and pay the necessary fees. After registering, you need to open a bank account and possibly a merchant account.` },
    { question: `Is it possible to register a company remotely in Switzerland?`, answer: `You can register a company in Switzerland remotely by power of attorney or during a personal visit.` },
  ],
};

const RegisterCompanyInSwitzerlandPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default RegisterCompanyInSwitzerlandPage;
export { RegisterCompanyInSwitzerlandPage };
