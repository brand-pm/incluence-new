import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-purchase-in-the-netherlands
const PAGE_DATA = {
  title: `Company Purchase in the Netherlands`,
  description: `The GDP of the Netherlands has shown consistently positive growth, making it attractive for investment. Buying a ready-made company avoids mandatory procedures such as preparing documents, filing registration applications, and resolving legal issues.`,
  requirements: [
    `Copies of passports for all participants`,
    `Proof of address for company participants`,
    `Completed registration forms`,
    `Information about the source of funding`,
    `Power of attorney (if buying remotely)`,
  ],
  faq: [
    { question: `How to re-register a ready-made company in the Netherlands?`, answer: `The seller and buyer must either issue a power of attorney or visit the Netherlands, prepare a copy of their passport, and complete re-registration forms. The prepared documents must then be submitted to the Registry.` },
    { question: `What documents are required to purchase a company in the Netherlands?`, answer: `You need copies of passports and proof of address for company participants. You also need completed registration forms including information about the source of funding. Beneficiaries may need to provide proof of the origin of funds.` },
    { question: `What taxes must be paid when buying a company in the Netherlands?`, answer: `When buying a company in the Netherlands, you only need to pay the registration fee. Tax obligations arise only after the company starts operating, or if the previous owner has unpaid taxes from earlier activities.` },
    { question: `Can I buy a company in the Netherlands online?`, answer: `Yes, a company in the Netherlands can be purchased remotely via power of attorney or by visiting the Netherlands in person.` },
  ],
};

const CompanyPurchaseInTheNetherlandsPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyPurchaseInTheNetherlandsPage;
export { CompanyPurchaseInTheNetherlandsPage };
