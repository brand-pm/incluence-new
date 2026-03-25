import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /buying-a-company-in-germany
const PAGE_DATA = {
  title: `Buying a Company in Germany`,
  description: `Registering a new legal entity in Germany can take up to 3 months. Buying a ready-made company saves time while giving you a business that has already passed financial evaluation and is free of legal issues and debts.`,
  requirements: [
    `Information about future directors`,
    `Identity documents of the owners`,
    `Description of activities and legal address`,
    `Power of attorney (if unable to attend the notary)`,
  ],
  faq: [
    { question: `How to re-register a ready-made company in Germany?`, answer: `You need the personal documents of the seller and buyer, special forms, and powers of attorney. For self-registration, you must visit Germany and resolve bureaucratic issues. Experienced specialists can handle everything with ease.` },
    { question: `What documents are required to buy a company in Germany?`, answer: `You need notarized passport copies of the company participants, powers of attorney from shareholders, and registration forms. All documents must be provided in original form.` },
    { question: `What taxes must be paid when buying a company in Germany?`, answer: `No taxes are charged when buying a company in Germany. Taxes are paid on dividends and company profits. The company may also use preferential tax regimes.` },
    { question: `Can I buy a company in Germany online?`, answer: `Yes, a company in Germany can be bought remotely via power of attorney or in person while visiting Germany.` },
  ],
};

const BuyingACompanyInGermanyPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default BuyingACompanyInGermanyPage;
export { BuyingACompanyInGermanyPage };
