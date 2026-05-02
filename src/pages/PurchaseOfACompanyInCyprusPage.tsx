import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/purchase-of-a-company-in-cyprus (1:1 copy)
const PAGE_DATA = {
  title: `Purchase of a Company in Cyprus`,
  description: `If you plan to start a business or acquire an existing Cypriot company, you should keep in mind that the country’s authorities have implemented several significant changes, simplifying this process. The establishment of Cyprus as a reliable business hub is confirmed by the growing interest of foreign entrepreneurs and the increase in registration applications over the past few years.

Today, more and more entrepreneurs seek to expand their business by registering or buying a ready-made company in Cyprus. This is also supported by statistics from the Cypriot Department of Registrar of Companies and Official Receiver. To a large extent, this is due to the fact that Cyprus is one of the most favorable jurisdictions in the EU in terms of corporate taxation.

By registering or buying a company in Cyprus, business owners can benefit from a favorable business climate and stable economic environment.

When new companies are incorporated in Cyprus, they must meet specific requirements. For example, they need to have a registered legal office on the island, at least for storing corporate documentation. Every company must also appoint a secretary, and this position must be held by a Cypriot resident.

It is also worth noting the time involved in processes directly related to registering a new company in Cyprus:

- company name check;
- preparation of incorporation documents;
- handover of documents to the business owner.

Ready-made companies do not need to go through these steps, and entrepreneurs are freed, in particular, from the need to find office space. Therefore, buying a company in Cyprus is usually much faster, and operations can begin within just a few days after the purchase.

Thanks to the joint efforts of the EU and the Cypriot government, small business support has improved significantly. Companies are being helped to enter the global market while maintaining competitiveness.

Additional advantages of buying a ready-made company in Cyprus include:

- the right to open an account in a European bank;
- relatively low taxes — 19% VAT and 12.5% corporate tax;
- a wide range of tools and opportunities to run a fully legal business within the EU.

A ready-made firm is a legal entity that has already been incorporated and gone through all necessary procedures. Such a company can immediately engage in trading and financial operations and carry out any activity that does not require special licenses or permits.

These companies have no assets or liabilities, and if needed, the owner may at any time:

- change the company name;
- replace the director, secretary, or registered office address;
- change the share capital;
- review and amend the company’s Articles of Association or Memorandum.

Cyprus is a jurisdiction suitable for businesses in a wide range of industries, including international trade, banking, outsourcing, and more.

Entrepreneurs often choose to buy a ready-made Cypriot company for investment purposes due to tax advantages. According to current legislation, any interest, dividends, and royalties received by non-residents are not subject to taxation.

It is particularly important to note that dividends received from subsidiaries in other countries are also tax-exempt. This provides an additional advantage for holding companies registered in Cyprus.

Since ready-made firms are already incorporated, the requirements primarily concern ongoing operations. In particular, a minimum share capital is required — usually around EUR 1,000.

In addition, the company must have the following persons:

- shareholders — at least one;
- director — one or more (both individuals and legal entities are allowed);
- secretary — without signing authority; it is recommended that this role be held by a Cypriot resident.

If all requirements are met, you can conduct business not only in Cyprus but also throughout the EU and participate in international trade.

To purchase a company in Cyprus, contact our specialists for detailed information using the contact details provided. They will explain the acquisition process, answer your questions, and offer suitable options based on your needs.`,
  sections: [
    {
      heading: `01. Choosing a Company in Cyprus`,
      body: `You need to select a company for purchase and discuss the terms of the transaction. This can be done independently or with our assistance. We have clients and partners looking for buyers for their companies.`,
    },
    {
      heading: `02. Company Audit`,
      body: `Before purchasing, the company should be checked for debts to state authorities, including tax liabilities, as well as any outstanding receivables or payables.`,
    },
    {
      heading: `03. Document Preparation`,
      body: `Personal documents of the buyer, powers of attorney from the parties, and forms for re-registration must be prepared.`,
    },
    {
      heading: `04. Submission of Re-Registration Documents`,
      body: `The collected set of documents is submitted to the Registrar. After processing, the registrar updates the company’s information in the registry database.`,
    },
    {
      heading: `05. Confirmation of Re-Registration`,
      body: `Once the changes are recorded in the Registry, the company’s updated registration details become available. If necessary, paper copies of the company’s statutory documents with certification (notarization, apostille) and translations into other languages can be provided by our specialists.`,
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
    { question: `What documents are required to buy a business in Cyprus?`, answer: `To buy a business in Cyprus, you need to provide copies of the participants’ passports and proof of address. You also need to submit completed registration forms, including information about the source of funds used to establish the company. Beneficiaries may be asked to provide confirmation of the origin of funds.` },
    { question: `How can a foreigner buy a company in Cyprus?`, answer: `To buy a company in Cyprus as a foreigner, you must provide personal documents, pay all fees and charges, and ensure the appointment of a Cypriot-resident director and local registered address. Before purchase, due diligence should be conducted to check the company’s status and possible debts.` },
    { question: `What taxes must be paid when buying a company in Cyprus?`, answer: `When buying a company in Cyprus, you only need to pay the registration fee. Tax obligations arise only after the company starts operating, or if the previous owner failed to pay taxes on prior activities.` },
    { question: `Can I buy a company in Cyprus online?`, answer: `You can choose a company online and re-register it through a power of attorney or by visiting Cyprus in person.` },
  ],
};

const PurchaseOfACompanyInCyprusPage = () => (
  <ServiceDetailPage
    slug="purchase-of-a-company-in-cyprus"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default PurchaseOfACompanyInCyprusPage;
export { PurchaseOfACompanyInCyprusPage };
