import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-purchase-in-the-netherlands
const PAGE_DATA = {
  title: `Company Purchase in the Netherlands`,
  description: `How to Buy a Company in the Netherlands: Key Information for Entrepreneurs In recent years, the GDP of the Netherlands has shown consistently positive growth, proving that the country has largely recovered from the effects of the global financial crisis.`,
  requirements: [
    `Why Entrepreneurs Want to Buy a Company in the Netherlands: Benefits of Doing Business`,
    `In the Netherlands, both registering a new company and acquiring a ready-made business are popular. In the latter case, the entrepreneur avoids many mandatory procedures such as preparing documents, filing a registration application, resolving legal issues, and more`,
    `The choice to buy a company in the Netherlands rather than another country is explained by several advantages of this jurisdiction:`,
    `Favorable tax policy: no stamp duty, no withholding tax on royalties and interest, and VAT exemptions with reduced rates down to 0%.Strategic location: the Netherlands provides access to European markets, opening unique opportunities for capital growth and increasing import/export volumes.International credibility: the strong reputation of the Netherlands extends to companies registered here, boosting trust not only from potential business partners but also from consumers`,
    `Another important aspect is favorable cooperation with local banks. In the Netherlands, some banks specialize in specific industries, such as agriculture, making business in these sectors more convenient thanks to tailored financial services`,
    `Types of Companies Available for Purchase in the Netherlands`,
    `The two most common legal forms are Besloten Vennootschap (private limited liability company) and Naamloze Vennootschap (public limited liability company)`,
    `If you plan to buy a company in the Netherlands, note that each legal form has specific requirements concerning ownership, management, shareholder data confidentiality, and other aspects`,
    `What to Consider Before Buying a Company in the Netherlands`,
    `If you plan to operate in the banking or insurance sector, you will need to obtain a license. The same applies to other financial activities. For detailed advice on this or any other matter, contact our specialists`,
  ],
  faq: [
    { question: `How to re-register a ready-made company in the Netherlands?`, answer: `To re-register a Dutch company, the seller and buyer must either issue a power of attorney or visit the Netherlands, prepare a copy of their passport, and complete re-registration forms. The prepared documents must then be submitted to the Registry.` },
    { question: `What documents are required to purchase a company in the Netherlands?`, answer: `To purchase a company in the Netherlands, you need to provide copies of passports and proof of address for company participants. You also need to submit completed registration forms including information about the source of company funding. During re` },
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
