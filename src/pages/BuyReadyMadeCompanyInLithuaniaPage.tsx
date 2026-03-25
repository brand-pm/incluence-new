import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /buy-ready-made-company-in-lithuania
const PAGE_DATA = {
  title: `Buy ready made company in Lithuania`,
  description: `How to buy a ready-made company in Lithuania: Business features Among all the countries located in the Baltic region, Lithuania is one of the best options for all businessmen willing to take their business to a new stage of development.`,
  requirements: [
    `Contact our specialists for detailed requirements`,
  ],
  faq: [
    { question: `How to re-register a ready-made company in Lithuania?`, answer: `In order to re-register a Lithuanian company, the seller and the buyer need to issue a power of attorney or visit Lithuania, prepare a copy of the passport and the company re-registration form. Completed documents must be submitted to the Registry.` },
    { question: `What documents are needed to buy a company in Lithuania?`, answer: `In order to buy a company in Lithuania, you must submit a copy of your passport, registration documents and a power of attorney, in case of re-registration through a representative.` },
    { question: `What taxes must be paid to buy a company in Lithuania?`, answer: `When buying a company in Lithuania, you only need to pay the registration fee. Obligations to pay taxes arise only after the start of the company\'s activities or if the previous owner did not pay taxes on previous activities.` },
    { question: `Can I buy a company remotely in Lithuania?`, answer: `A company in Lithuania can be bought remotely using a power of attorney or during a personal visit to Lithuania.` },
  ],
};

const BuyReadyMadeCompanyInLithuaniaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default BuyReadyMadeCompanyInLithuaniaPage;
export { BuyReadyMadeCompanyInLithuaniaPage };
