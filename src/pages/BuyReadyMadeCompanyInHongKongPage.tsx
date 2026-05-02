import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/buy-ready-made-company-in-hong-kong (1:1 copy)
const PAGE_DATA = {
  title: `Buy ready made company in Hong Kong`,
  description: `Hong Kong is a special administrative region of China, one of the leading financial centers of Asia and the world. In essence, it is an area of the People's Republic of China, but in fact, it can be called a separate state. Many issues in Hong Kong, from the mentality to the loyalty of the legal system, contribute to the development of international business, so it attracts businessmen from all over the world.

This is largely determined by the special laws in force in this territory. Since Hong Kong was governed by Great Britain till 1997, the common law of England is applied here almost as native, and practically all commercial documents are in English. This is an additional advantage for entrepreneurs willing to buy shelf companies Hong Kong as they often have no language problems while doing business.`,
  sections: [
    {
      heading: `01. Choosing a company in Hong-Kong`,
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
    { question: `What documents are needed to buy a business in Hong Kong?`, answer: `In order to buy a business in Hong Kong, you must submit copies of passports and proof of the address of the participants in the company. You must also submit completed registration forms.` },
    { question: `How long does it take to buy a company in Hong Kong?`, answer: `The process of buying a company in Hong Kong depends on the state of the company. If the seller has fully prepared the company for the sale, the process can take up to 3 weeks after the submission of all documents and payment.` },
    { question: `What taxes must I pay to buy a company in Hong Kong?`, answer: `When buying a company in Hong Kong, you only need to pay a registration fee. Obligations to pay taxes arise only after the start of the company's activities or if the previous owner did not pay taxes on previous activities.` },
    { question: `Can I buy a company in Hong Kong online?`, answer: `A company in Hong Kong can be re-registered remotely through a local secretary.` },
  ],
};

const BuyReadyMadeCompanyInHongKongPage = () => (
  <ServiceDetailPage
    slug="buy-ready-made-company-in-hong-kong"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default BuyReadyMadeCompanyInHongKongPage;
export { BuyReadyMadeCompanyInHongKongPage };
