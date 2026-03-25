import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /purchase-of-a-company-in-the-usa
const PAGE_DATA = {
  title: `Purchase of a Company in the USA`,
  description: `How to Buy a Company in the USA: Key Features of the Procedure Doing business in the United States is not only prestigious but also profitable and reliable. The government constantly works on improving conditions for both citizens and entrepreneurs, including foreign investors.`,
  requirements: [
    `What You Need to Know Before Buying a Company in the USA`,
    `Regardless of the state, all companies in the USA must have at least one director. This can be either an individual or a legal entity. In some states, shareholder and director details are not publicly disclosed in registries, meaning this information is not available to third parties. The number of shareholders is unlimited and they may be either individuals or corporate entities`,
    `If the company has an open bank account, during the acquisition and ownership transfer, the existing account must be closed and a new one opened. Our specialists can provide consultation and support during this process if required`,
  ],
  faq: [
    { question: `What documents are required to buy a business in the USA?`, answer: `The exact list of documents required to purchase a company in the USA depends on the state where the company is registered. Typically, copies of passports of all company participants and proof of their residential addresses are submitted.` },
    { question: `How long does the process of buying a company in the USA take?`, answer: `The timeframe for transferring ownership depends on the state of registration. It can take anywhere from a few days to several weeks.` },
    { question: `What taxes must be paid when purchasing a company in the USA?`, answer: `When purchasing a company in the USA, only the registration fee must be paid. Tax obligations arise only after the company begins operations, or if the previous owner failed to pay taxes for past activities.` },
    { question: `Can I buy a company in the USA online?`, answer: `Yes, you can buy a company in the USA online. However, each state has its own rules for transferring ownership.` },
  ],
};

const PurchaseOfACompanyInTheUsaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default PurchaseOfACompanyInTheUsaPage;
export { PurchaseOfACompanyInTheUsaPage };
