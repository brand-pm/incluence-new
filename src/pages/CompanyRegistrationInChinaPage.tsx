import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-china
const PAGE_DATA = {
  title: `Company Registration in China`,
  description: `How Company Registration in China Works: Main Stages Planning and preparation. Preparing documents, drafting the business description, choosing a name, selecting a registered address, and resolving other organizational matters. Company registration in China.`,
  requirements: [
    `What You Need to Know Before Opening a Company in China`,
    `Chinese legislation is specific — it restricts the activities of foreign organizations, allowing them to operate only in two forms:`,
    `Establishing a wholly foreign-owned company with non-resident founders; Creating a joint venture with participants from China and other countries`,
    `In the latter case, company registration in China may take the form of:`,
    `Equity joint ventures — combining investments; Cooperative enterprises — combining foreign and local partners`,
    `In addition, there are restrictions on business types. The government allows activities in the following areas:`,
    `Manufacturing, trade, or services in China; Import and export of goods`,
    `Key Points for Entrepreneurs`,
    `Before opening a company in China, you must first choose your business activity, as this will affect:`,
    `The amount of registered capital: ranging from 500,000 to 1.5 million RMB (depending on the type of activity)`,
  ],
  faq: [
    { question: `How can a non-resident open a business in China?`, answer: `To register a business in China, you need to choose an available company name, prepare the required documents, and pay the necessary fees. After registration, you must open a bank account. If your business involves accepting online payments, you will` },
    { question: `How much does it cost to open a company in China?`, answer: `The final cost of opening a company in China depends on various factors. Contact our specialists to find out the exact price of company registration in China.` },
    { question: `What documents are required to register a company in China?`, answer: `To register a company in China, you must provide copies of shareholders’ passports and proof of address. In certain cases, additional documents may be required.` },
    { question: `Can a company in China be registered online?`, answer: `You can register a company in China remotely with the help of a local representative or by visiting in person.` },
  ],
};

const CompanyRegistrationInChinaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInChinaPage;
export { CompanyRegistrationInChinaPage };
