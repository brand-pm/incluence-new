import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/buy-company-in-estonia (1:1 copy)
const PAGE_DATA = {
  title: `Buy company in Estonia`,
  description: `Buying a ready-made company in Estonia is an opportunity for businessmen to simplify and speed up the process of starting business operations. If you buy company in Estonia, you will be able to start a business faster and also decrease the costs required for the formation of share capital.`,
  sections: [
    {
      heading: `01. Choosing a company in Estonia`,
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
    { question: `What documents are needed to buy a company in Estonia?`, answer: `In order to purchase a company in Estonia you will need notarized copies of the passports of the company's participants, powers of attorney from shareholders, and registration forms. All documents must be in hard copies.` },
    { question: `How to buy a company in Estonia for a foreigner?`, answer: `Previously, you need to find the seller of the company on your own or through intermediaries. In order to re-register the company in Estonia, you must visit Estonia or issue a power of attorney for an official local representative. The most commonly used option is to purchase through a representative, as it is more convenient, faster and cheaper.` },
    { question: `What taxes must be paid to buy a company in Estonia?`, answer: `When buying a company in Estonia, taxes are not levied. Taxes need to be paid only on the distribution of profits. In this case, the company can use the preferential tax treatment.` },
    { question: `Can I buy a company remotely in Estonia?`, answer: `A company in Estonia can be re-registered online in the registry using an e-resident's card or a resident ID card. Non-residents usually buy a company by proxy.` },
  ],
};

const BuyCompanyInEstoniaPage = () => (
  <ServiceDetailPage
    slug="buy-company-in-estonia"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default BuyCompanyInEstoniaPage;
export { BuyCompanyInEstoniaPage };
