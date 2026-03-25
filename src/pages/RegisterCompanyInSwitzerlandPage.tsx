import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /register-company-in-switzerland
const PAGE_DATA = {
  title: `Register company in Switzerland`,
  description: `Starting a business in Switzerland is the best option for entrepreneurs looking for trouble-free company registration and simple working conditions.`,
  sections: [
    {
      heading: `What is the benefit of registering a company in Switzerland: Company features`,
      body: `Starting a business in Switzerland is the best option for entrepreneurs looking for trouble-free company registration and simple working conditions. The state also attracts business representatives with its stability in the legal, political, and economic spheres.`,
    },
  ],
  faq: [
    { question: `What is the cost of business registration in Switzerland?`, answer: `Various factors affect the final cost of the business formation in Switzerland. You can find out the exact cost of registering a company in Switzerland by contacting our specialists.` },
    { question: `How long does it take to register a company in Switzerland?`, answer: `Company registeration in Switzerland takes about 2-3 weeks.` },
    { question: `How to start a business in Switzerland?`, answer: `In order to register a business in Switzerland, you need to choose a name of the future company that is free for registration, collect a package of documents, and pay the necessary fees. After registering a company, you need to open a bank account. If the business involves accepting payments through the site, you should also open a merchant account.` },
    { question: `Is it possible to register a company remotely in Switzerland?`, answer: `You can register a company in Switzerland remotely by power of attorney or during personal visit.` },
  ],
};

const RegisterCompanyInSwitzerlandPage = () => (
  <ServiceDetailPage
    slug="register-company-in-switzerland"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default RegisterCompanyInSwitzerlandPage;
export { RegisterCompanyInSwitzerlandPage };
