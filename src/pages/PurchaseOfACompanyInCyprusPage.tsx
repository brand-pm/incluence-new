import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /purchase-of-a-company-in-cyprus
const PAGE_DATA = {
  title: `Purchase of a Company in Cyprus`,
  description: `When new companies are incorporated in Cyprus, they must meet specific requirements. Buying a ready-made company is usually much faster, and operations can begin within just a few days after the purchase.`,
  sections: [
    {
      heading: `Why Buy a Company in Cyprus: Advantages of Ready-Made Firms`,
      body: `When new companies are incorporated in Cyprus, they must meet specific requirements. For example, they need to have a registered legal office on the island, at least for storing corporate documentation. Every company must also appoint a secretary, and this position must be held by a Cypriot resident.\n\nIt is also worth noting the time involved in processes directly related to registering a new company in Cyprus:\n\nCompany name check; preparation of incorporation documents; handover of documents to the business owner.\n\nReady-made companies do not need to go through these steps, and entrepreneurs are freed, in particular, from the need to find office space. Therefore, buying a company in Cyprus is usually much faster, and operations can begin within just a few days after the purchase.\n\nThanks to the joint efforts of the EU and the Cypriot government, small business support has improved significantly. Companies are being helped to enter the global market while maintaining competitiveness.\n\nAdditional advantages of buying a ready-made company in Cyprus include:\n\nThe right to open an account in a European bank; relatively low taxes \u2014 19% VAT and 12.5% corporate tax; a wide range of tools and opportunities to run a fully legal business within the EU.`,
    },
    {
      heading: `What You Need to Know Before Buying a Ready-Made Company in Cyprus`,
      body: `If you plan to start a business or acquire an existing Cypriot company, you should keep in mind that the country's authorities have implemented several significant changes, simplifying this process. The establishment of Cyprus as a reliable business hub is confirmed by the growing interest of foreign entrepreneurs and the increase in registration applications over the past few years.\n\nToday, more and more entrepreneurs seek to expand their business by registering or buying a ready-made company in Cyprus. This is also supported by statistics from the Cypriot Department of Registrar of Companies and Official Receiver. To a large extent, this is due to the fact that Cyprus is one of the most favorable jurisdictions in the EU in terms of corporate taxation.\n\nBy registering or buying a company in Cyprus, business owners can benefit from a favorable business climate and stable economic environment.`,
    },
    {
      heading: `Why You May Need to Buy a Cypriot Company: Business Types`,
      body: `A ready-made firm is a legal entity that has already been incorporated and gone through all necessary procedures. Such a company can immediately engage in trading and financial operations and carry out any activity that does not require special licenses or permits.\n\nThese companies have no assets or liabilities, and if needed, the owner may at any time:\n\nChange the company name; replace the director, secretary, or registered office address; change the share capital; review and amend the company's Articles of Association or Memorandum.\n\nCyprus is a jurisdiction suitable for businesses in a wide range of industries, including international trade, banking, outsourcing, and more.\n\nEntrepreneurs often choose to buy a ready-made Cypriot company for investment purposes due to tax advantages. According to current legislation, any interest, dividends, and royalties received by non-residents are not subject to taxation.\n\nIt is particularly important to note that dividends received from subsidiaries in other countries are also tax-exempt. This provides an additional advantage for holding companies registered in Cyprus.`,
    },
    {
      heading: `Requirements for Buying a Company in Cyprus`,
      body: `Since ready-made firms are already incorporated, the requirements primarily concern ongoing operations. In particular, a minimum share capital is required \u2014 usually around EUR 1,000.\n\nIn addition, the company must have the following persons:\n\nShareholders \u2014 at least one; director \u2014 one or more (both individuals and legal entities are allowed); secretary \u2014 without signing authority; it is recommended that this role be held by a Cypriot resident.\n\nIf all requirements are met, you can conduct business not only in Cyprus but also throughout the EU and participate in international trade.\n\nTo purchase a company in Cyprus, contact our specialists for detailed information using the contact details provided. They will explain the acquisition process, answer your questions, and offer suitable options based on your needs.`,
    },
  ],
  requirements: [
    `Registered legal office on the island required`,
    `Cypriot-resident secretary must be appointed`,
    `At least one shareholder required`,
    `One or more directors (individuals or legal entities)`,
    `Minimum share capital around EUR 1,000`,
    `Copies of participants' passports and proof of address`,
    `Proof of the origin of funds`,
    `Completed registration forms`,
  ],
  faq: [
    { question: `What documents are required to buy a business in Cyprus?`, answer: `To buy a business in Cyprus, you need to provide copies of the participants' passports and proof of address. You also need to submit completed registration forms, including information about the source of funds used to establish the company. Beneficiaries may be asked to provide confirmation of the origin of funds.` },
    { question: `How can a foreigner buy a company in Cyprus?`, answer: `To buy a company in Cyprus as a foreigner, you must provide personal documents, pay all fees and charges, and ensure the appointment of a Cypriot-resident director and local registered address. Before purchase, due diligence should be conducted to check the company's status and possible debts.` },
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
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default PurchaseOfACompanyInCyprusPage;
export { PurchaseOfACompanyInCyprusPage };
