import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/company-purchase-in-the-netherlands (1:1 copy)
const PAGE_DATA = {
  title: `Company Purchase in the Netherlands`,
  description: `In recent years, the GDP of the Netherlands has shown consistently positive growth, proving that the country has largely recovered from the effects of the global financial crisis. Today, many entrepreneurs are interested in opening a company in the Netherlands, as the state is considered attractive for investment. This is largely due to the wide range of advantages that entrepreneurs can benefit from when starting a business in this country.

In the Netherlands, both registering a new company and acquiring a ready-made business are popular. In the latter case, the entrepreneur avoids many mandatory procedures such as preparing documents, filing a registration application, resolving legal issues, and more.

The choice to buy a company in the Netherlands rather than another country is explained by several advantages of this jurisdiction:

- Favorable tax policy: no stamp duty, no withholding tax on royalties and interest, and VAT exemptions with reduced rates down to 0%.
- Strategic location: the Netherlands provides access to European markets, opening unique opportunities for capital growth and increasing import/export volumes.
- International credibility: the strong reputation of the Netherlands extends to companies registered here, boosting trust not only from potential business partners but also from consumers.

Another important aspect is favorable cooperation with local banks. In the Netherlands, some banks specialize in specific industries, such as agriculture, making business in these sectors more convenient thanks to tailored financial services.

The two most common legal forms are Besloten Vennootschap (private limited liability company) and Naamloze Vennootschap (public limited liability company).

If you plan to buy a company in the Netherlands, note that each legal form has specific requirements concerning ownership, management, shareholder data confidentiality, and other aspects.

If you plan to operate in the banking or insurance sector, you will need to obtain a license. The same applies to other financial activities. For detailed advice on this or any other matter, contact our specialists.

Accounting and reporting are mandatory for all companies registered in the Netherlands, regardless of turnover, legal form, or other factors. Audit requirements depend on company profit. Furthermore, all financial records must be stored at an office registered in the Netherlands.

If you decide to buy a company in the Netherlands, contact our specialists for a personalized consultation. We will find the most suitable option, prepare all necessary documents, and handle all legal procedures related to the transaction.`,
  sections: [
    {
      heading: `01. Choosing a Company in the Netherlands`,
      body: `You must select a company to purchase and discuss transaction terms. This can be done independently or with our assistance. We have clients and partners seeking buyers for their companies.`,
    },
    {
      heading: `02. Company Audit`,
      body: `Before purchase, the company should be checked for debts to government authorities, including tax obligations, as well as outstanding receivables and payables.`,
    },
    {
      heading: `03. Preparing Documents`,
      body: `It is necessary to prepare the buyer’s personal documents, powers of attorney, and re-registration forms.`,
    },
    {
      heading: `04. Submitting Documents for Re-registration`,
      body: `The completed package of documents is submitted to the Registry. After submission, the registrar processes them and updates the company information in the Registry database.`,
    },
    {
      heading: `05. Receiving Confirmation of Re-registration`,
      body: `Once the company’s updated data is entered into the Registry, you can view its registration details and, if necessary, order notarized or apostilled copies of corporate documents, with or without certification. Our specialists can also provide notarization, apostille, and translations into other languages if required.`,
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
    { question: `How to re-register a ready-made company in the Netherlands?`, answer: `To re-register a Dutch company, the seller and buyer must either issue a power of attorney or visit the Netherlands, prepare a copy of their passport, and complete re-registration forms. The prepared documents must then be submitted to the Registry.` },
    { question: `What documents are required to purchase a company in the Netherlands?`, answer: `To purchase a company in the Netherlands, you need to provide copies of passports and proof of address for company participants. You also need to submit completed registration forms including information about the source of company funding. During re-registration, beneficiaries may be required to provide proof of the origin of funds used to establish the company.` },
    { question: `What taxes must be paid when buying a company in the Netherlands?`, answer: `When buying a company in the Netherlands, you only need to pay the registration fee. Tax obligations arise only after the company starts operating, or if the previous owner has unpaid taxes from earlier activities.` },
    { question: `Can I buy a company in the Netherlands online?`, answer: `Yes, a company in the Netherlands can be purchased remotely via power of attorney or by visiting the Netherlands in person.` },
  ],
};

const CompanyPurchaseInTheNetherlandsPage = () => (
  <ServiceDetailPage
    slug="company-purchase-in-the-netherlands"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyPurchaseInTheNetherlandsPage;
export { CompanyPurchaseInTheNetherlandsPage };
