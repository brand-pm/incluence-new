import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-a-company-in-estonia
const PAGE_DATA = {
  title: `Open a company in Estonia`,
  description: `Estonia has been in the top 20 for the ease of starting and doing business for years. Company registration here is a unique opportunity for non-residents as there are no taxes on retained earnings.`,
  requirements: [
    `Power of attorney for registration (non-residents)`,
    `KYC forms for all participants`,
    `Notarized copies of participants’ passports`,
    `Local registration address in Estonia`,
    `Local contact person (for non-residents)`,
    `E-resident card or local ID card (for online registration)`,
  ],
  faq: [
    { question: `How much does Estonia company registration cost?`, answer: `The total cost depends on the number of participants, their residency, and the specifics of the company’s activities, plus the cost of notarization and document delivery to Estonia.` },
    { question: `What are the terms of the company’s registration in Estonia?`, answer: `Registration of a company in Estonia takes 2-3 weeks from the date of submission of all documents and payment.` },
    { question: `How to register a company in Estonia?`, answer: `First, check the name availability. Non-residents usually register through intermediaries by power of attorney. Prepare a package of documents (power of attorney, KYC forms, etc.) and send them to Estonia.` },
    { question: `Is it possible to register a company remotely in Estonia?`, answer: `Yes, you can register online using an e-resident’s card or a local ID card directly on the Estonian Registry website. You need a local registration address and a local contact person.` },
  ],
};

const OpenACompanyInEstoniaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenACompanyInEstoniaPage;
export { OpenACompanyInEstoniaPage };
