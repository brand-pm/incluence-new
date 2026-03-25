import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /purchase-of-a-company-in-the-usa
const PAGE_DATA = {
  title: `Purchase of a Company in the USA`,
  description: `Doing business in the United States is not only prestigious but also profitable and reliable. Buying a ready-made business in the USA allows you to quickly start operations, bypassing certain mandatory procedures related to registering and licensing a new company.`,
  requirements: [
    `At least one director required (individual or legal entity)`,
    `Unlimited number of shareholders allowed`,
    `Shareholders may be individuals or corporate entities`,
    `Existing bank account must be closed and new one opened`,
    `Copies of passports of all company participants`,
    `Proof of residential addresses of participants`,
    `Requirements vary by state of registration`,
  ],
  faq: [
    { question: `What documents are required to buy a business in the USA?`, answer: `The exact list of documents depends on the state where the company is registered. Typically, copies of passports of all company participants and proof of their residential addresses are submitted.` },
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
