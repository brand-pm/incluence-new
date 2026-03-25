import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /purchase-a-company-in-england
const PAGE_DATA = {
  title: `Purchase a Company in England`,
  description: `Since UK law does not impose restrictions on the owner’s citizenship, even a CIS citizen can purchase a company in England. After completing the transaction, the new owner will receive a certificate of incorporation, approved articles of association, and a share certificate.`,
  requirements: [
    `No restrictions on owner’s citizenship`,
    `Certificate of incorporation provided after purchase`,
    `Documents must be apostilled if no lawyers used`,
    `Notarized copies of passports of all participants`,
    `Proof of registration address`,
    `Description of intended business activities`,
    `VAT registration required for turnover above £83,000`,
    `Double taxation agreements with over 100 countries`,
  ],
  faq: [
    { question: `How to transfer ownership of a ready-made company in England?`, answer: `Transferring a company in England requires personal documents of the seller and buyer, special forms, and powers of attorney. Experienced specialists handle this smoothly. Doing it independently may require visiting the UK.` },
    { question: `What documents are required to buy a company in England?`, answer: `Notarized copies of passports of company participants, shareholder powers of attorney, and registration forms are required. All documents must be originals.` },
    { question: `What taxes need to be paid when purchasing a company in England?`, answer: `No taxes are charged when buying a company in England. Taxes are payable on dividends and company profits. The company can benefit from favorable tax regimes.` },
    { question: `Can a company in England be purchased online?`, answer: `A company in England can be purchased remotely via power of attorney or by visiting the UK.` },
  ],
};

const PurchaseACompanyInEnglandPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default PurchaseACompanyInEnglandPage;
export { PurchaseACompanyInEnglandPage };
