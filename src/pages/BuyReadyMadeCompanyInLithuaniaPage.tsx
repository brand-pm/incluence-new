import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /buy-ready-made-company-in-lithuania
const PAGE_DATA = {
  title: `Buy ready made company in Lithuania`,
  description: `Among all the countries in the Baltic region, Lithuania is one of the best options for businessmen willing to take their business to a new stage of development. You can quickly buy a shelf company in Lithuania, saving time and effort usually spent on registration.`,
  requirements: [
    `Copy of passport`,
    `Registration documents`,
    `Power of attorney (if re-registering through a representative)`,
    `Company re-registration form`,
  ],
  faq: [
    { question: `How to re-register a ready-made company in Lithuania?`, answer: `The seller and the buyer need to issue a power of attorney or visit Lithuania, prepare a copy of the passport and the company re-registration form. Completed documents must be submitted to the Registry.` },
    { question: `What documents are needed to buy a company in Lithuania?`, answer: `You must submit a copy of your passport, registration documents, and a power of attorney in case of re-registration through a representative.` },
    { question: `What taxes must be paid to buy a company in Lithuania?`, answer: `When buying a company in Lithuania, you only need to pay the registration fee. Obligations to pay taxes arise only after the start of the company's activities or if the previous owner did not pay taxes on previous activities.` },
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
