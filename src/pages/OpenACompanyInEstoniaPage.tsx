import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-a-company-in-estonia
const PAGE_DATA = {
  title: `Open a company in Estonia`,
  description: `Estonia has been in the top 20 for the ease of starting and doing business for years. Company registration here is a unique opportunity for non-residents as there are no taxes on retained earnings.`,
  sections: [
    {
      heading: `Registering a company in Estonia`,
      body: `According to the ranking of the international magazine Doing Business, the country has been in the top 20 for the ease of starting and doing business for years. The favorable business climate is evident in everything, from tax rates to the attitude of state authorities to the activities of Estonian companies.\n\nEstonia company registration is a unique opportunity for non-resident businessmen as there are no taxes on retained earnings. This opens wide opportunities for business development and capital accumulation.`,
    },
  ],
  requirements: [
    `Power of attorney for registration (non-residents)`,
    `KYC forms for all participants`,
    `Notarized copies of participants' passports`,
    `Local registration address in Estonia`,
    `Local contact person (for non-residents)`,
    `E-resident card or local ID card (for online registration)`,
  ],
  faq: [
    { question: `How much does Estonia company registration cost?`, answer: `The total cost depends on the number of participants, their residency, and the specifics of the company's activities. Also you should add the cost of notarization of documents and the cost of delivering documents to Estonia to the cost of intermediary services.` },
    { question: `What are the terms of the company's registration in Estonia?`, answer: `Registration of a company in Estonia takes 2-3 weeks from the date of submission of all documents and payment.` },
    { question: `How to register a company in Estonia?`, answer: `First of all, it is necessary to check the availability of the name for the future Estonian company. Non-residents usually register a company through intermediaries by power of attorney. Previously, you need to prepare a package of documents (power of attorney, KYC forms, etc.) and send them to Estonia. The experts will take care of everything else.` },
    { question: `Is it possible to register a company remotely in Estonia?`, answer: `You can register a company online in Estonia using an e-resident's card or a local ID card. Registration takes place directly on the website of the Estonian Registry. In this case, you need to have a local registration address, and for non-residents, a local contact person.` },
  ],
};

const OpenACompanyInEstoniaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenACompanyInEstoniaPage;
export { OpenACompanyInEstoniaPage };
