import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-a-company-in-estonia
const PAGE_DATA = {
  title: `Open a company in Estonia`,
  description: `Registering a company in Estonia According to the ranking of the international magazine Doing Business, the country has been in the top 20 for the ease of starting and doing business for years.`,
  requirements: [
    `Registering a company in Estonia`,
    `According to the ranking of the international magazine Doing Business, the country has been in the top 20 for the ease of starting and doing business for years. The favorable business climate is evident in everything, from tax rates to the attitude of state authorities to the activities of Estonian companies`,
    `Estonia company registration is a unique opportunity for non-resident businessmen as there are no taxes on retained earnings. This opens wide opportunities for business development and capital accumulation`,
  ],
  faq: [
    { question: `How much does Estonia company registration cost?`, answer: `The total cost depends on the number of participants, their residency, and the specifics of the company\'s activities. Also you should add the cost of notarization of documents and the cost of delivering documents to Estonia to the cost of intermedia` },
    { question: `What are the terms of the company’s registration in Estonia?`, answer: `Registration of a company in Estonia takes 2-3 weeks from the date of submission of all documents and payment.` },
    { question: `How to register a company in Estonia?`, answer: `First of all, it is necessary to check the availability of the name for the future Estonian company. Non-residents usually register a company through intermediaries by power of attorney. Previously, you need to prepare a package of documents (power o` },
    { question: `Is it possible to register a company remotely in Estonia?`, answer: `You can register a company online in Estonia using an e-resident\'s card or a local ID card. Registration takes place directly on the website of the Estonian Registry. In this case, you need to have a local registration address, and for non-residents` },
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
