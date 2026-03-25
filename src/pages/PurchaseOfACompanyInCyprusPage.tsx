import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /purchase-of-a-company-in-cyprus
const PAGE_DATA = {
  title: `Purchase of a Company in Cyprus`,
  description: `Why Buy a Company in Cyprus: Advantages of Ready-Made Firms company name check; preparation of incorporation documents; handover of documents to the business owner.`,
  requirements: [
    `What You Need to Know Before Buying a Ready-Made Company in Cyprus`,
    `If you plan to start a business or acquire an existing Cypriot company, you should keep in mind that the country’s authorities have implemented several significant changes, simplifying this process. The establishment of Cyprus as a reliable business hub is confirmed by the growing interest of foreign entrepreneurs and the increase in registration applications over the past few years`,
    `Today, more and more entrepreneurs seek to expand their business by registering or buying a ready-made company in Cyprus. This is also supported by statistics from the Cypriot Department of Registrar of Companies and Official Receiver. To a large extent, this is due to the fact that Cyprus is one of the most favorable jurisdictions in the EU in terms of corporate taxation`,
    `By registering or buying a company in Cyprus, business owners can benefit from a favorable business climate and stable economic environment`,
    `Why You May Need to Buy a Cypriot Company: Business Types`,
    `A ready-made firm is a legal entity that has already been incorporated and gone through all necessary procedures. Such a company can immediately engage in trading and financial operations and carry out any activity that does not require special licenses or permits`,
    `These companies have no assets or liabilities, and if needed, the owner may at any time:`,
    `change the company name; replace the director, secretary, or registered office address; change the share capital; review and amend the company’s Articles of Association or Memorandum`,
    `Cyprus is a jurisdiction suitable for businesses in a wide range of industries, including international trade, banking, outsourcing, and more`,
    `Entrepreneurs often choose to buy a ready-made Cypriot company for investment purposes due to tax advantages. According to current legislation, any interest, dividends, and royalties received by non-residents are not subject to taxation`,
  ],
  faq: [
    { question: `What documents are required to buy a business in Cyprus?`, answer: `To buy a business in Cyprus, you need to provide copies of the participants’ passports and proof of address. You also need to submit completed registration forms, including information about the source of funds used to establish the company. Benefici` },
    { question: `How can a foreigner buy a company in Cyprus?`, answer: `To buy a company in Cyprus as a foreigner, you must provide personal documents, pay all fees and charges, and ensure the appointment of a Cypriot-resident director and local registered address. Before purchase, due diligence should be conducted to ch` },
    { question: `What taxes must be paid when buying a company in Cyprus?`, answer: `When buying a company in Cyprus, you only need to pay the registration fee. Tax obligations arise only after the company starts operating, or if the previous owner failed to pay taxes on prior activities.` },
    { question: `Can I buy a company in Cyprus online?`, answer: `You can choose a company online and re-register it through a power of attorney or by visiting Cyprus in person.` },
  ],
};

const PurchaseOfACompanyInCyprusPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default PurchaseOfACompanyInCyprusPage;
export { PurchaseOfACompanyInCyprusPage };
