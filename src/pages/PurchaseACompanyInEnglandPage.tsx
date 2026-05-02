import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/purchase-a-company-in-england (1:1 copy)
const PAGE_DATA = {
  title: `Purchase a Company in England`,
  description: `The United Kingdom is one of the countries demonstrating economic stability, with clear and transparent legislation. Foreign investors worldwide plan to buy companies in England. Not being an offshore jurisdiction, the country provides access to the European market. A legal entity registered in the UK guarantees the trust of clients and international partners.

Before purchasing a ready-made business, it is essential to study the existing business forms and taxation. This helps determine the priority business direction and approximate maintenance costs. Companies in England can be registered in the following legal forms:

- Limited Partnership (LP) – requires at least 2 partners. One general partner is fully responsible for the company’s operations. LPs have lost popularity due to banks refusing to serve this legal form.
- Limited Liability Partnership (LLP) – requires 2 or more founders and a UK registered address. In an LLP, tax liability lies with individual partners rather than the company. Unlike LPs, all partners are equal.
- Private Limited Company (LTD) – can operate globally and is not on the offshore blacklist. It is easier to open a bank account for an LTD than for partnerships.

Those interested in ready-made companies in the UK should note:

- The UK has agreements to avoid double taxation with over 100 countries.
- VAT registration is mandatory for turnover above £83,000, with a standard tax rate of 20%.
- Required documents include notarized copies of passports, proof of registration, and a description of the intended business activities.

- Fast re-registration of the company to a new owner – from 1 day.
- Availability of active companies in promising business niches.
- The new owner does not pay the authorized capital.
- Remote management is possible using a nominal staff.
- Flexible requirements for directors and shareholders – both legal and natural persons can be owners.
- Director citizenship does not matter, and there are no mandatory board meeting requirements.
- No currency control in the UK; the tax system is stable, and the economic and political situation is calm.

Since UK law does not impose restrictions on the owner’s citizenship, even a CIS citizen can purchase a company in England. After completing the transaction, depending on the legal form, the new owner will receive:

- Certificate of incorporation
- Approved company articles of association
- Document of the first shareholder meeting
- Share certificate

When purchasing without specialized lawyers, all documents must be apostilled, including powers of attorney if used. A company can also create its own Company Seal.

Before buying a company in London, or elsewhere in the UK, the future owner should consider expenses for the transaction and ongoing business operation. These include:

- Legal support for the purchase
- Payment for the company and reimbursement of existing authorized capital
- Rental of a registered office address
- Accounting and financial reporting

These are minimum expenses, and ongoing operational costs must be planned continuously, especially reporting deadlines, as penalties and removal from the commercial register may apply.

Deciding whether to buy a company in England or register a company from scratch is an individual decision. Experienced specialists from our company can assist in any case. Contact us via the website form or listed contacts to discuss questions or your project.`,
  sections: [
    {
      heading: `01. Selecting a Company in England`,
      body: `Find a company to buy and discuss the deal terms. This can be done independently or with our help. We have clients and partners seeking buyers for their companies.`,
    },
    {
      heading: `02. Company Audit`,
      body: `Before purchase, check the company for debts to government authorities, including taxes, as well as accounts receivable and payable.`,
    },
    {
      heading: `03. Document Preparation`,
      body: `Prepare buyer’s personal documents and forms for re-registration. Online verification may also be required.`,
    },
    {
      heading: `04. Submission of Documents for Re-Registration`,
      body: `The complete set of documents is submitted to the Registry. The registrar processes the documents, and changes are entered into the company records.`,
    },
    {
      heading: `05. Receiving Confirmation of Company Re-Registration`,
      body: `After the company data is updated in the Registry, you can view registration details and, if needed, order certified or uncertified copies of the articles of association. Our specialists can assist with notarization, apostilles, and translations as required.`,
    },
    {
      heading: `Additional services — Shelf company for sale in Singapore`,
      body: `A favorable tax environment and business friendliness of the Republic of Singapore are the main advantages of the jurisdiction. To a large extent, this country is now an attractive destination for business people thanks to these benefits. If you also want to buy shelf company Singapore, you can do it in two ways: by registering a company "from scratch" or by buying a shelf company in Singapore.The registration process takes more time, but difficulties may concern other nuances of the procedure. For example, businessmen need to prepare plenty of documents, obtain licenses and permits from various bodies without rejection from regulatory authorities.By deciding to buy a Singapore shelf company, the businessman avoids almost all procedures, except for some mandatory ones. This can significantly speed up the process, saving time and effort that can be spent on running a business immediately after the purchase of a shelf company Singapore.`,
    },
    {
      heading: `Additional services — Buying a Company in Bulgaria`,
      body: `Today, Bulgaria offers a favorable business environment, largely due to the simplicity and convenience of most processes necessary for enterprises. Registering a new business in this jurisdiction is not complicated, however, starting operations in a foreign country, entrepreneurs often face a number of bureaucratic and legal challenges. Fortunately, all of this can be avoided, and business activities can be launched quickly by deciding to buy a company in Bulgaria.`,
    },
    {
      heading: `Additional services — Buying a Company in Germany`,
      body: `The maximum time to register a new legal entity in Germany through the standard procedure can take up to 3 months. This requires an in-person meeting with a notary and visits to several government authorities. However, if for any reason the registration procedure needs to be completed in a shorter period, you can buy a company in Germany and save time.`,
    },
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
    faq={PAGE_DATA.faq}
  />
);

export default PurchaseACompanyInEnglandPage;
export { PurchaseACompanyInEnglandPage };
