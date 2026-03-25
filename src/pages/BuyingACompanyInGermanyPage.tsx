import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /buying-a-company-in-germany
const PAGE_DATA = {
  title: `Buying a Company in Germany`,
  description: `all legal entities undergo a financial evaluation; the companies are free of legal issues and debts; the transaction is carried out with all necessary business documents in place. the company’s registered address; the brand name; the legal form.`,
  requirements: [
    `What Information Is Required from a Buyer Before Acquiring a Ready-Made Company in Germany`,
    `The list of documents depends on the buyer’s status. The standard minimum includes:`,
    `Information about future directors. Identity documents of the owners. Information about the buyer as a legal entity — description of activities, legal address. Power of attorney — if the owner or representatives cannot attend the notary in person`,
  ],
  faq: [
    { question: `How to re-register a ready-made company in Germany?`, answer: `To re-register a company in Germany, you need the personal documents of the seller and buyer, special forms, and powers of attorney. Experienced specialists can handle everything with ease. For self-registration, you must visit Germany and resolve bu` },
    { question: `What documents are required to buy a company in Germany?`, answer: `To purchase a company in Germany, you need notarized passport copies of the company participants, powers of attorney from shareholders, and registration forms. All documents must be provided in original form.` },
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
