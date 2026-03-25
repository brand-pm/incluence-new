import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-germany
const PAGE_DATA = {
  title: `Company Registration in Germany`,
  description: `Germany offers a safe business environment characterized by stability in social and political spheres, a developed banking system, a stable economy, and a favorable climate for small and medium-sized businesses.`,
  requirements: [
    `Copies of passports of all participants`,
    `Proof of address for all participants`,
    `Completed registration forms`,
    `Information on the source of funding`,
    `Share capital of at least €25,000 for GmbH`,
    `Share capital of €1 minimum for UG (mini GmbH)`,
    `Choice of legal form (GmbH or UG)`,
  ],
  faq: [
    { question: `How much does it cost to start a business in Germany?`, answer: `The final cost of starting a business in Germany depends on the type of activity, number of participants, and other factors. To find out the exact cost of company registration in Germany for your case, please contact our specialists.` },
    { question: `Can a company in Germany be registered online?`, answer: `A company in Germany can be registered remotely via power of attorney or by visiting the country in person.` },
    { question: `Can a non-resident open a business in Germany?`, answer: `A non-resident who is not on a sanctions list and is not a resident of a sanctioned state may register a company in Germany.` },
    { question: `What documents are required to register a company in Germany?`, answer: `To register a company in Germany, copies of passports and proof of address of the company’s participants are required. You must also submit completed registration forms, including information on the source of funding for the company’s establishment.` },
  ],
};

const CompanyRegistrationInGermanyPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInGermanyPage;
export { CompanyRegistrationInGermanyPage };
