import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-croatia
const PAGE_DATA = {
  title: `Company Registration in Croatia`,
  description: `Doing business in Croatia has several advantages for entrepreneurs. Company registration in Croatia is attractive due to tax incentives, political stability, developed infrastructure, and favorable business lending options available in local banks.`,
  requirements: [
    `At least one director and one shareholder`,
    `Share capital payment (HRK 20,000 for an LLC)`,
    `Copy of passport and short business description`,
    `Founding agreement`,
    `Corporate income tax at 20%`,
    `VAT at 25% (reduced rate of 5% for some goods)`,
    `Dividend tax at 12%`,
    `No company secretary required`,
  ],
  faq: [
    { question: `How much does it cost to start a business in Croatia?`, answer: `The final cost of starting a business in Croatia depends on the type of activity, number of participants, and other factors. You can find out the exact cost of company registration in Croatia by contacting our specialists.` },
    { question: `Can a company in Croatia be registered online?`, answer: `A company in Croatia can be registered remotely via power of attorney or by visiting Croatia.` },
    { question: `Can a non-resident open a business in Croatia?`, answer: `A non-resident who is not on sanctions lists and not a resident of a sanctioned country can open a business in Croatia.` },
    { question: `What documents are required to register a company in Croatia?`, answer: `To register a company in Croatia, you must submit copies of passports and proof of address of the company’s participants.` },
  ],
};

const CompanyRegistrationInCroatiaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInCroatiaPage;
export { CompanyRegistrationInCroatiaPage };
