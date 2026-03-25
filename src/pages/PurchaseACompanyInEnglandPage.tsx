import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /purchase-a-company-in-england
const PAGE_DATA = {
  title: `Purchase a Company in England`,
  description: `Certificate of incorporation Approved company articles of association Document of the first shareholder meeting Share certificate When purchasing without specialized lawyers, all documents must be apostilled, including powers of attorney if used. A company can also create its own Company Seal.`,
  requirements: [
    `Buying a Company in England: Key Points`,
    `The United Kingdom is one of the countries demonstrating economic stability, with clear and transparent legislation. Foreign investors worldwide plan to buy companies in England. Not being an offshore jurisdiction, the country provides access to the European market. A legal entity registered in the UK guarantees the trust of clients and international partners`,
    `What Business Owners Should Know Before Buying a Ready-Made Company in the UK`,
    `Before purchasing a ready-made business, it is essential to study the existing business forms and taxation. This helps determine the priority business direction and approximate maintenance costs. Companies in England can be registered in the following legal forms:`,
    `Limited Partnership (LP) – requires at least 2 partners. One general partner is fully responsible for the company’s operations. LPs have lost popularity due to banks refusing to serve this legal form. Limited Liability Partnership (LLP) – requires 2 or more founders and a UK registered address. In an LLP, tax liability lies with individual partners rather than the company. Unlike LPs, all partners are equal. Private Limited Company (LTD) – can operate globally and is not on the offshore blacklist. It is easier to open a bank account for an LTD than for partnerships`,
    `Those interested in ready-made companies in the UK should note:`,
    `The UK has agreements to avoid double taxation with over 100 countries. VAT registration is mandatory for turnover above £83,000, with a standard tax rate of 20%. Required documents include notarized copies of passports, proof of registration, and a description of the intended business activities`,
    `Why Entrepreneurs Prefer Buying a Company in England`,
    `Fast re-registration of the company to a new owner – from 1 day. Availability of active companies in promising business niches. The new owner does not pay the authorized capital. Remote management is possible using a nominal staff. Flexible requirements for directors and shareholders – both legal and natural persons can be owners. Director citizenship does not matter, and there are no mandatory board meeting requirements. No currency control in the UK; the tax system is stable, and the economic and political situation is calm`,
    `Buying a Company in London: Expenses for the New Owner`,
  ],
  faq: [
    { question: `How to transfer ownership of a ready-made company in England?`, answer: `Transferring a company in England requires personal documents of the seller and buyer, special forms, and powers of attorney. Experienced specialists handle this smoothly. Doing it independently may require visiting the UK and managing bureaucratic m` },
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
