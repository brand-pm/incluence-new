import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { NetherlandsCompanyVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /company-purchase-in-the-netherlands
const CompanyPurchaseInTheNetherlandsPage = () => (
  <ServiceDetailPage
    title="Company Purchase in the Netherlands"
    description="In recent years, the GDP of the Netherlands has shown consistently positive growth, proving that the country has largely recovered from the effects of the global financial crisis."
    sections={[
      {
        heading: "How to Buy a Company in the Netherlands: Key Information for Entrepreneurs",
        body: "In recent years, the GDP of the Netherlands has shown consistently positive growth, proving that the country has largely recovered from the effects of the global financial crisis. Today, many entrepreneurs are interested in opening a company in the Netherlands, as the state is considered attractive for investment. This is largely due to the wide range of advantages that entrepreneurs can benefit from when starting a business in this country.",
      },
      {
        heading: "Why Entrepreneurs Want to Buy a Company in the Netherlands: Benefits of Doing Business",
        body: "In the Netherlands, both registering a new company and acquiring a ready-made business are popular. In the latter case, the entrepreneur avoids many mandatory procedures such as preparing documents, filing a registration application, resolving legal issues, and more.\n\nThe choice to buy a company in the Netherlands rather than another country is explained by several advantages of this jurisdiction:\n\nFavorable tax policy: no stamp duty, no withholding tax on royalties and interest, and VAT exemptions with reduced rates down to 0%. Strategic location: the Netherlands provides access to European markets, opening unique opportunities for capital growth and increasing import/export volumes. International credibility: the strong reputation of the Netherlands extends to companies registered here, boosting trust not only from potential business partners but also from consumers.\n\nAnother important aspect is favorable cooperation with local banks. In the Netherlands, some banks specialize in specific industries, such as agriculture, making business in these sectors more convenient thanks to tailored financial services.",
      },
      {
        heading: "Types of Companies Available for Purchase in the Netherlands",
        body: "The two most common legal forms are Besloten Vennootschap (private limited liability company) and Naamloze Vennootschap (public limited liability company).\n\nIf you plan to buy a company in the Netherlands, note that each legal form has specific requirements concerning ownership, management, shareholder data confidentiality, and other aspects.",
      },
      {
        heading: "What to Consider Before Buying a Company in the Netherlands",
        body: "If you plan to operate in the banking or insurance sector, you will need to obtain a license. The same applies to other financial activities. For detailed advice on this or any other matter, contact our specialists.\n\nAccounting and reporting are mandatory for all companies registered in the Netherlands, regardless of turnover, legal form, or other factors. Audit requirements depend on company profit. Furthermore, all financial records must be stored at an office registered in the Netherlands.\n\nIf you decide to buy a company in the Netherlands, contact our specialists for a personalized consultation. We will find the most suitable option, prepare all necessary documents, and handle all legal procedures related to the transaction.",
      },
      {
        heading: "Additional services",
        body: "See all countries",
      },
    ]}
    requirements={[
      "Copies of passports for all participants",
      "Proof of address for company participants",
      "Completed registration forms",
      "Information about the source of funding",
      "Power of attorney (if buying remotely)",
    ]}
    faq={[
      {
        question: "How to re-register a ready-made company in the Netherlands?",
        answer: "To re-register a Dutch company, the seller and buyer must either issue a power of attorney or visit the Netherlands, prepare a copy of their passport, and complete re-registration forms. The prepared documents must then be submitted to the Registry.",
      },
      {
        question: "What documents are required to purchase a company in the Netherlands?",
        answer: "To purchase a company in the Netherlands, you need to provide copies of passports and proof of address for company participants. You also need to submit completed registration forms including information about the source of company funding. During re-registration, beneficiaries may be required to provide proof of the origin of funds used to establish the company.",
      },
      {
        question: "What taxes must be paid when buying a company in the Netherlands?",
        answer: "When buying a company in the Netherlands, you only need to pay the registration fee. Tax obligations arise only after the company starts operating, or if the previous owner has unpaid taxes from earlier activities.",
      },
      {
        question: "Can I buy a company in the Netherlands online?",
        answer: "Yes, a company in the Netherlands can be purchased remotely via power of attorney or by visiting the Netherlands in person.",
      },
    ]}
    heroVisual={<NetherlandsCompanyVisual />}

  />
);

export default CompanyPurchaseInTheNetherlandsPage;
export { CompanyPurchaseInTheNetherlandsPage };
