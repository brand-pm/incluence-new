import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-canada
const PAGE_DATA = {
  title: `Company Registration in Canada`,
  description: `How to Successfully Open a Business in Canada The ease of doing business and a clear taxation system attract more and more organizations to Canada. However, successfully registering a company here depends directly on proper planning and understanding local laws.`,
  requirements: [
    `Advantages of Registering a Company in Canada`,
    `Entrepreneurs who establish companies in Canada highlight many positive aspects of doing business here:`,
    `Company registration in Canada without offshore status. No public register of beneficiaries. Possibility to work successfully with multiple currencies since there is no currency control. The right to open a bank account — you can both register a company and open an account in the same country. A Canadian company owner may qualify for citizenship. First, a startup visa is issued (if approved) for 1 year, with the option to extend it, combining the citizenship process with business operations. No requirement for a mandatory audit after company registration. Banks are not obligated to report balances on business accounts to tax authorities. Financial institutions actively work with companies in IT services, exports, and imports. No mandatory minimum share capital requirement`,
    `Additionally, to avoid double taxation, Canada has agreements with 87 countries`,
    `Requirements for a Corporation in Canada`,
    `Corporation is one of the most popular forms of business. Registering a company in Canada as a non-resident requires meeting the following conditions:`,
    `The founder of the new company must be of legal age. They must have no outstanding criminal record. A valid foreign passport is required, with at least one year remaining before expiration at the time of registration`,
    `There are also additional forms of ownership such as Limited Partnership and Limited Liability Partnership. However, they are less common among foreign entrepreneurs because Corporation offers more benefits and allows cooperation with both local and foreign partners`,
    `Company Registration in Canada: What’s Required for a Corporation`,
    `Before opening a business in Canada, you need to choose a name and check its availability in the official registry. Additionally:`,
  ],
  faq: [
    { question: `What is the timeline for registering a company in Canada?`, answer: `You can register a company in Canada in 3 weeks.` },
    { question: `Can a company in Canada be registered online?`, answer: `Yes, a company in Canada can be registered remotely through local representatives.` },
    { question: `Can a non-resident open a business in Canada?`, answer: `A non-resident who is not on sanctions lists and not a resident of a sanctioned country can register a company in Canada.` },
    { question: `What documents are required to register a company in Canada?`, answer: `To register a company in Canada, you need to provide a copy of your passport and proof of address of the company participants.` },
  ],
};

const CompanyRegistrationInCanadaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInCanadaPage;
export { CompanyRegistrationInCanadaPage };
