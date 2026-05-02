import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/ready-made-companies-in-hungary (1:1 copy)
const PAGE_DATA = {
  title: `Ready made companies in Hungary`,
  description: `How to Buy a Shelf Company in HungaryHungary is located in the center of Europe and occupies a small area, but the population density is actively growing. In this regard, advances in the economic development of the country have been observed in recent years. The local legislation has undergone many positive and fundamental changes, and much attention was paid to investor activity. Therefore, the number of those wishing to buy ready-made companies in Hungary has increased dramatically since the local jurisdiction offers favorable conditions for investing money today.‍`,
  sections: [
    {
      heading: `01. Choosing a company in Hungary`,
      body: `You need to find a company to buy and negotiate the terms of the deal. This can be done independently or with our assistance. We have clients and partners who are looking for buyers for their companies.`,
    },
    {
      heading: `02. Company audit`,
      body: `The company should be checked for debts to government agencies, including tax, as well as the presence of receivables and payables, before purchase.`,
    },
    {
      heading: `03. Preparation of the documents`,
      body: `It is necessary to prepare personal documents of the buyer, powers of attorney from the parties, re-registration forms.`,
    },
    {
      heading: `04. Submission of documents for re-registration`,
      body: `The collected package of documents is submitted to the Register. After that, the documents are processed by the registrar and amendments in the company are entered into the Registry database.`,
    },
    {
      heading: `05. Obtaining confirmation of company re-registration`,
      body: `After making amendments to the company data in the Register, you can see its registration data in it and if necessary order paper versions of the statutory documents with or without certification. The specialists of our company will help you with all the necessary certification (notarization, apostille) and translations into other languages, if necessary.`,
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
    { question: `What documents are needed to buy a business in Hungary?`, answer: `In order to purchase a company in Hungary you will need notarized copies of the passports of the company's participants, powers of attorney from shareholders, and registration forms. All documents must be in hard copies.` },
    { question: `How to buy a company in Hungary for a foreigner?`, answer: `Previously, you need to find the seller of the company on your own or through intermediaries. In order to re-register the company in Hungary, you must visit Hungary or issue a power of attorney for an official local representative. The most commonly used option is to purchase through a representative, as it is more convenient, faster and cheaper.` },
    { question: `What taxes must be paid to buy a company in Hungary?`, answer: `When buying a company in Hungary, taxes are not levied. Taxes must be paid upon receipt of dividends, on the profits of the company. In this case, the company can use the preferential tax regime.` },
    { question: `Can I buy a company remotely in Hungary?`, answer: `You can buy a company in Hungary remotely by power of attorney or when visiting Hungary.` },
  ],
};

const ReadyMadeCompaniesInHungaryPage = () => (
  <ServiceDetailPage
    slug="ready-made-companies-in-hungary"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default ReadyMadeCompaniesInHungaryPage;
export { ReadyMadeCompaniesInHungaryPage };
