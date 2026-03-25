import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /buy-company-in-estonia
const PAGE_DATA = {
  title: `Buy company in Estonia`,
  description: `Buying a ready-made company in Estonia is an opportunity for businessmen to simplify and speed up the process of starting business operations. You will be able to start a business faster and decrease the costs required for the formation of share capital.`,
  requirements: [
    `Notarized copies of participants' passports`,
    `Powers of attorney from shareholders`,
    `Registration forms (original hard copies)`,
  ],
  faq: [
    { question: `What documents are needed to buy a company in Estonia?`, answer: `You will need notarized copies of the passports of the company's participants, powers of attorney from shareholders, and registration forms. All documents must be in hard copies.` },
    { question: `How to buy a company in Estonia for a foreigner?`, answer: `You need to find the seller on your own or through intermediaries. To re-register the company, you must visit Estonia or issue a power of attorney for an official local representative. Purchase through a representative is the most convenient option.` },
    { question: `What taxes must be paid to buy a company in Estonia?`, answer: `When buying a company in Estonia, taxes are not levied. Taxes need to be paid only on the distribution of profits. In this case, the company can use the preferential tax treatment.` },
    { question: `Can I buy a company remotely in Estonia?`, answer: `A company in Estonia can be re-registered online in the registry using an e-resident's card or a resident ID card. Non-residents usually buy a company by proxy.` },
  ],
};

const BuyCompanyInEstoniaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default BuyCompanyInEstoniaPage;
export { BuyCompanyInEstoniaPage };
