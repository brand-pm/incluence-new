import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-cyprus
const PAGE_DATA = {
  title: `Company Registration in Cyprus`,
  description: `Setting up a company in Cyprus is a promising undertaking. The island state is not classified as an offshore jurisdiction, offers a low corporate income tax of 12.5%, and provides full opportunities to open a local bank account.`,
  requirements: [
    `Copies of participants’ passports`,
    `Proof of address for all participants`,
    `Completed registration forms`,
    `Information about the source of funds`,
    `Share capital from €1,000 to €5,000`,
    `Company secretary (mandatory for LTDs)`,
    `At least one director and one shareholder`,
    `Company management located on the island`,
  ],
  faq: [
    { question: `How much does it cost to start a business in Cyprus?`, answer: `The final cost of starting a business in Cyprus depends on various factors. You can learn the exact cost of business registration in Cyprus by contacting our specialists.` },
    { question: `How long does company registration in Cyprus take?`, answer: `Company registration in Cyprus takes 10–15 business days.` },
    { question: `What documents are required to register a company in Cyprus?`, answer: `To register a company in Cyprus, it is necessary to submit copies of the participants’ passports and proof of address. It is also required to submit completed registration forms, including information about the source of funds for setting up the company.` },
    { question: `Can a company in Cyprus be registered online?`, answer: `A company in Cyprus can be registered remotely by proxy or by visiting Cyprus.` },
  ],
};

const CompanyRegistrationInCyprusPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInCyprusPage;
export { CompanyRegistrationInCyprusPage };
