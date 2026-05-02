import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/purchase-a-company-in-china (1:1 copy)
const PAGE_DATA = {
  title: `Purchase a Company in China`,
  description: `Thanks to inexpensive labor and foreign investment, the People’s Republic of China is trusted by investors and entrepreneurs worldwide. Many aspire to conduct business in this communist state with a relatively closed economy, but there are some difficulties.

Setting up a company and scaling a business internationally requires entrepreneurs to follow a series of procedures, such as registration, licensing, obtaining approvals from various authorities, and more. However, instead of creating a company from scratch, you can purchase a company in China and immediately start business operations.

By acquiring an existing business, you can simultaneously:

Legally operate across the country in any type of business permitted by law

- Engage in import and export. This requires applying for a special license. We can assist in obtaining approval for licensing companies wishing to operate in this sector.
- Offset the value-added tax (VAT) through exports.
- Hire personnel who are Chinese residents, without the need for work visas required for foreigners.

Business in this jurisdiction has specific rules that every entrepreneur should know. In particular, after acquiring a company, you will need to:

Pay a fixed tax – all businesses pay 25% of annual profit

- Maintain accounting records.
- Prepare annual company reports.
- Comply with mandatory foreign exchange control requirements.

It’s also important to note that information about directors, shareholders, and owners is publicly available, so anonymity is not guaranteed.

If you decide to purchase a company in China, you may also consider Hong Kong. Although part of the People’s Republic of China, it operates under different laws, particularly with more business-friendly taxation and general commercial openness.

Several legal forms of business are popular in mainland China. However, not all are suitable for entrepreneurs. For instance, representative offices are used for market monitoring and building business contacts but are legally prohibited from conducting commercial activities.

WFOEs (Wholly Foreign-Owned Enterprises), on the other hand, are companies where 100% of the capital belongs to foreign investors. Such entities can earn profits, pay taxes, and conduct business operations. WFOEs are often used as service providers, technology manufacturers, and more.

Once you decide which type of ready-made company you want to buy in China, contact us to order the service. We will handle all bureaucratic and legal issues and guide you through all stages of the purchase transaction in the People’s Republic of China.`,
  sections: [
    {
      heading: `01. Selecting a Company in China`,
      body: `You need to find a company to purchase and discuss the terms of the deal. This can be done independently or with our assistance. We have clients and partners seeking buyers for their companies.`,
    },
    {
      heading: `02. Company Audit`,
      body: `Before buying, the company should be checked for debts to government authorities, including taxes, as well as accounts receivable and payable.`,
    },
    {
      heading: `03. Document Preparation`,
      body: `Prepare the buyer’s personal documents and forms required for the transfer of ownership.`,
    },
    {
      heading: `04. Submission of Documents for Re-Registration`,
      body: `The complete set of documents is submitted to the Registry. The registrar processes the documents, and the changes are entered into the company’s records.`,
    },
    {
      heading: `05. Receiving Confirmation of Company Re-Registration`,
      body: `After the company data is updated in the Registry, you can view its registration details and, if needed, order certified or uncertified copies of the charter documents. Our specialists can assist with notarization, apostilles, and translations as required.`,
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
    { question: `What documents are required to purchase a business in China?`, answer: `To purchase a business in China, copies of passports and proof of address for all company participants are required. Additional documents may be requested in some cases.` },
    { question: `How long does it take to purchase a company in China?`, answer: `The process of purchasing a company in China takes about three weeks.` },
    { question: `What taxes need to be paid when buying a company in China?`, answer: `When purchasing a company in China, only the registration fee must be paid. Tax obligations arise only after the company begins operations or if the previous owner did not pay taxes for prior activities.` },
    { question: `Can a company in China be purchased online?`, answer: `A company in China can be transferred remotely through a local representative or via a personal visit.` },
  ],
};

const PurchaseACompanyInChinaPage = () => (
  <ServiceDetailPage
    slug="purchase-a-company-in-china"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default PurchaseACompanyInChinaPage;
export { PurchaseACompanyInChinaPage };
