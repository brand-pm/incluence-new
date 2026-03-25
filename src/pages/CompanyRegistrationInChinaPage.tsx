import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-china
const PAGE_DATA = {
  title: `Company Registration in China`,
  description: `Opening a company in China is a lengthy process that can take up to 90 days and includes multiple steps. It covers planning, registration with the State Administration for Industry and Commerce, and post-registration activities.`,
  requirements: [
    `2 reference letters from shareholder’s financial institution`,
    `Certified copy of identity document or foreign passport`,
    `Photographs of the director or legal representative`,
    `Business activity description with registered capital details`,
    `Documents translated into Chinese and legalized at Consulate`,
  ],
  faq: [
    { question: `How can a non-resident open a business in China?`, answer: `You need to choose an available company name, prepare the required documents, and pay the necessary fees. After registration, you must open a bank account. If your business involves online payments, you will also need a merchant account.` },
    { question: `How much does it cost to open a company in China?`, answer: `The final cost depends on various factors. Contact our specialists to find out the exact price of company registration in China.` },
    { question: `What documents are required to register a company in China?`, answer: `You must provide copies of shareholders’ passports and proof of address. In certain cases, additional documents may be required.` },
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
