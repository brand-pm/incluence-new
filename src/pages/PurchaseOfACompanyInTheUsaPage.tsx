import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { USACompanyVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /purchase-of-a-company-in-the-usa
const PAGE_DATA = {
  title: `Purchase of a Company in the USA`,
  description: `Doing business in the United States is not only prestigious but also profitable and reliable. Buying a ready-made business in the USA allows you to quickly start operations, bypassing certain mandatory procedures related to registering and licensing a new company.`,
  sections: [
    {
      heading: `How to Buy a Company in the USA: Key Features of the Procedure`,
      body: `Doing business in the United States is not only prestigious but also profitable and reliable. The government constantly works on improving conditions for both citizens and entrepreneurs, including foreign investors. Buying a ready-made business in the USA is an attractive solution for many entrepreneurs. This option allows you to quickly start operations, bypassing certain mandatory procedures related to registering and licensing a new company.\n\nIf you are interested in purchasing a company in the USA, such a firm is initially active. This means it already operates, employs staff, generates profit, and so on. As a potential buyer, you can simply review the financial reports, analyze the information, and assess whether the business is viable and what can be improved.`,
    },
    {
      heading: `How to Buy a Company in the USA: Acquisition Methods`,
      body: `There are two main ways to acquire an existing business:\n\nShare deal \u2014 purchase of corporate rights; Asset deal \u2014 purchase of ownership rights to specific assets.\n\nEach method has its own features and should be considered carefully.\n\nBuying a Company in the USA \u2014 Share Deal\nThis method means that after the transaction, the buyer:\n\nGains control over the company's assets; can manage the company, including voting at shareholder meetings; can earn profits from the business in the form of dividends.\n\nBy purchasing a company in the USA this way, you receive many benefits, particularly ownership of all:\n\nThe company's assets; licenses, permits, contracts with business partners, and more.\n\nBuying a Company in the USA \u2014 Asset Deal\nThis method means that the buyer does not acquire the company itself, but only specific assets. These can include:\n\nMovable property \u2014 both tangible assets (e.g., vehicles) and intangible assets such as patents and trademarks. Immovable property \u2014 buildings, facilities, land plots, and so on.\n\nPurchasing a ready-made business in the USA in this way allows you to acquire only the assets you need, saving money. Another advantage is that any business-related risks are avoided, since you are not acquiring the company itself, only its assets.\n\nOur specialists have extensive experience in the U.S. ready-made company market. They will help you choose the most suitable option and provide support at every stage of the acquisition. Contact us by phone or submit an online request to buy a ready-made company in the USA quickly and profitably.`,
    },
    {
      heading: `Why Buying a Company in the USA is Beneficial`,
      body: `If you are focused on acquiring a ready-made business, among our offers you will find an option that meets your requirements and conditions. The main advantage is that an existing business already holds all the licenses and regulatory approvals necessary to carry out its operations. This means you can start conducting business immediately after purchase.\n\nBuying a company in the USA is also beneficial because the business already has some market reputation. It has an existing customer base, loyal to this firm over its competitors. The same applies to established relationships with business partners, contractors, and suppliers.\n\nThe key advantage is the time a buyer saves by acquiring a company in the USA. Compared to the time needed to register a new company from scratch, the difference is significant.`,
    },
    {
      heading: `What You Need to Know Before Buying a Company in the USA`,
      body: `Regardless of the state, all companies in the USA must have at least one director. This can be either an individual or a legal entity. In some states, shareholder and director details are not publicly disclosed in registries, meaning this information is not available to third parties. The number of shareholders is unlimited and they may be either individuals or corporate entities.\n\nIf the company has an open bank account, during the acquisition and ownership transfer, the existing account must be closed and a new one opened. Our specialists can provide consultation and support during this process if required.`,
    },
  ],
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
    { question: `What documents are required to buy a business in the USA?`, answer: `The exact list of documents required to purchase a company in the USA depends on the state where the company is registered. Typically, copies of passports of all company participants and proof of their residential addresses are submitted.` },
    { question: `How long does the process of buying a company in the USA take?`, answer: `The timeframe for transferring ownership depends on the state of registration. It can take anywhere from a few days to several weeks.` },
    { question: `What taxes must be paid when purchasing a company in the USA?`, answer: `When purchasing a company in the USA, only the registration fee must be paid. Tax obligations arise only after the company begins operations, or if the previous owner failed to pay taxes for past activities.` },
    { question: `Can I buy a company in the USA online?`, answer: `Yes, you can buy a company in the USA online. However, each state has its own rules for transferring ownership.` },
  ],
};

const PurchaseOfACompanyInTheUsaPage = () => (
  <ServiceDetailPage
    slug="purchase-of-a-company-in-the-usa"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}

  />
);

export default PurchaseOfACompanyInTheUsaPage;
export { PurchaseOfACompanyInTheUsaPage };
