import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { EnglandCompanyVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /purchase-a-company-in-england
const PAGE_DATA = {
  title: `Purchase a Company in England`,
  description: `Since UK law does not impose restrictions on the owner's citizenship, even a CIS citizen can purchase a company in England. After completing the transaction, the new owner will receive a certificate of incorporation, approved articles of association, and a share certificate.`,
  sections: [
    {
      heading: `How to Buy a Company in England`,
      body: `Since UK law does not impose restrictions on the owner's citizenship, even a CIS citizen can purchase a company in England. After completing the transaction, depending on the legal form, the new owner will receive:\n\nCertificate of incorporation. Approved company articles of association. Document of the first shareholder meeting. Share certificate.\n\nWhen purchasing without specialized lawyers, all documents must be apostilled, including powers of attorney if used. A company can also create its own Company Seal.`,
    },
    {
      heading: `Buying a Company in England: Key Points`,
      body: `The United Kingdom is one of the countries demonstrating economic stability, with clear and transparent legislation. Foreign investors worldwide plan to buy companies in England. Not being an offshore jurisdiction, the country provides access to the European market. A legal entity registered in the UK guarantees the trust of clients and international partners.`,
    },
    {
      heading: `What Business Owners Should Know Before Buying a Ready-Made Company in the UK`,
      body: `Before purchasing a ready-made business, it is essential to study the existing business forms and taxation. This helps determine the priority business direction and approximate maintenance costs. Companies in England can be registered in the following legal forms:\n\nLimited Partnership (LP) \u2013 requires at least 2 partners. One general partner is fully responsible for the company's operations. LPs have lost popularity due to banks refusing to serve this legal form. Limited Liability Partnership (LLP) \u2013 requires 2 or more founders and a UK registered address. In an LLP, tax liability lies with individual partners rather than the company. Unlike LPs, all partners are equal. Private Limited Company (LTD) \u2013 can operate globally and is not on the offshore blacklist. It is easier to open a bank account for an LTD than for partnerships.\n\nThose interested in ready-made companies in the UK should note:\n\nThe UK has agreements to avoid double taxation with over 100 countries. VAT registration is mandatory for turnover above \u00a383,000, with a standard tax rate of 20%. Required documents include notarized copies of passports, proof of registration, and a description of the intended business activities.`,
    },
    {
      heading: `Why Entrepreneurs Prefer Buying a Company in England`,
      body: `Fast re-registration of the company to a new owner \u2013 from 1 day. Availability of active companies in promising business niches. The new owner does not pay the authorized capital. Remote management is possible using a nominal staff. Flexible requirements for directors and shareholders \u2013 both legal and natural persons can be owners. Director citizenship does not matter, and there are no mandatory board meeting requirements. No currency control in the UK; the tax system is stable, and the economic and political situation is calm.`,
    },
    {
      heading: `Buying a Company in London: Expenses for the New Owner`,
      body: `Before buying a company in London, or elsewhere in the UK, the future owner should consider expenses for the transaction and ongoing business operation. These include:\n\nLegal support for the purchase. Payment for the company and reimbursement of existing authorized capital. Rental of a registered office address. Accounting and financial reporting.\n\nThese are minimum expenses, and ongoing operational costs must be planned continuously, especially reporting deadlines, as penalties and removal from the commercial register may apply.\n\nDeciding whether to buy a company in England or register a company from scratch is an individual decision. Experienced specialists from our company can assist in any case. Contact us via the website form or listed contacts to discuss questions or your project.`,
    },
  ],
  requirements: [
    `No restrictions on owner's citizenship`,
    `Certificate of incorporation provided after purchase`,
    `Documents must be apostilled if no lawyers used`,
    `Notarized copies of passports of all participants`,
    `Proof of registration address`,
    `Description of intended business activities`,
    `VAT registration required for turnover above \u00a383,000`,
    `Double taxation agreements with over 100 countries`,
  ],
  faq: [
    { question: `How to transfer ownership of a ready-made company in England?`, answer: `Transferring a company in England requires personal documents of the seller and buyer, special forms, and powers of attorney. Experienced specialists handle this smoothly. Doing it independently may require visiting the UK and managing bureaucratic matters.` },
    { question: `What documents are required to buy a company in England?`, answer: `Notarized copies of passports of company participants, shareholder powers of attorney, and registration forms are required. All documents must be originals.` },
    { question: `What taxes need to be paid when purchasing a company in England?`, answer: `No taxes are charged when buying a company in England. Taxes are payable on dividends and company profits. The company can benefit from favorable tax regimes.` },
    { question: `Can a company in England be purchased online?`, answer: `A company in England can be purchased remotely via power of attorney or by visiting the UK.` },
  ],
};

const PurchaseACompanyInEnglandPage = () => (
  <ServiceDetailPage
    slug="purchase-a-company-in-england"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}

  />
);

export default PurchaseACompanyInEnglandPage;
export { PurchaseACompanyInEnglandPage };
