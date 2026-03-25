import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { PolandCompanyVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /buying-a-company-in-poland
const BuyingACompanyInPolandPage = () => (
  <ServiceDetailPage
    slug="buying-a-company-in-poland"
    title="Buying a company in Poland"
    description="Acquiring a ready-made company is quite a difficult task if handled independently. Our specialists will help you buy a Polish company, taking into account all the details of such transactions."
    sections={[
      {
        heading: "How to buy a company in Poland: what's included in the services",
        body: "Acquiring a ready-made company is quite a difficult task if handled independently. Our specialists will help you buy a Polish company, taking into account all the details of such transactions.\n\nWe offer cooperation in a convenient format:\n\nCompany selection. Our experts help you choose a company for purchase, discuss deal conditions. You can do this independently, but we also have partners already looking to sell their businesses. Company audit. Before concluding a deal, you must verify the company's transparency. Our specialists will conduct an audit to ensure there are no creditor, debtor, or government liabilities. Preparation of all documents required to change only the CEO or also the shareholders. This includes the buyer's personal documentation, powers of attorney, and re-registration forms. Document submission. The full package is submitted to the Register, where the registrar records the new owner's data and updates the database. Registration is then confirmed \u2014 you can order a seal and document certification.\n\nWe also provide the following additional services:\n\nProfessional tax consulting. Accounting support for financial issues related to the purchase of a company and further business operations. Company name change, new trademark registration, license applications.\n\nBy working with our company, you will be able to start a business in Poland in the shortest possible time, while our specialists handle all bureaucratic formalities.\n\nFill out an application and we'll contact you!",
      },
      {
        heading: "Features of buying a company in Poland",
        body: "Over the past decade, Poland has demonstrated excellent growth and economic development results. This has influenced not only the general standard of living but also the business culture and business profitability prospects. All this makes Poland attractive for people looking for a country to run entrepreneurial activities.\n\nBusiness can be started in two ways: registering a company from scratch or buying a ready-made Polish company. The key difference is that standard registration requires fewer financial costs but is rather complicated and involves preparing many documents and formalities.\n\nOn the other hand, a ready-made company in Poland allows you to start business activities almost instantly, with minimal time and effort. Also, purchasing an existing company helps the entrepreneur avoid various bureaucratic formalities typical of the registration process.",
      },
      {
        heading: "Buying a company in Poland: advantages of local business",
        body: "Poland is attractive to entrepreneurs for the following reasons:\n\nstable economy; optimal transit and logistics location; favorable lending conditions, EU subsidies; optimal level of taxation among other EU countries \u2014 corporate tax is 19%.\n\nIf an entrepreneur decides to buy a ready-made company in Poland, they can gain even more benefits, including:\n\nnotarized confirmation that the company has no obligations to the state or third parties; a company with no history of business activity; bank financing under favorable conditions, subsidies.\n\nA ready-made company allows its owner to purchase real estate in Poland, participate in tenders, apply for certain types of licenses, and more.\n\nSuch companies already have the necessary registration numbers for business activities:\n\nKRS \u2014 in the national court register; REGON \u2014 in the central statistical register; NIP \u2014 taxpayer identification number.\n\nImmediately after purchasing a ready-made company in Poland, the entrepreneur becomes its new owner and can start doing business. The company has a registered address, a bank account, a corporate seal, and other tools for full business activity.\n\nEach company undergoes a thorough check, and most documents are notarized, ensuring legal safety during the sale and purchase transaction.",
      },
      {
        heading: "Ready-made company in Poland: price and what it depends on",
        body: "The cost of buying a ready-made Polish company depends on several factors, the main one being the type of company:\n\n\"Clean\" company \u2014 a firm with no economic activity, transactions, etc. It is technically active but has not conducted business. Ready, operating business \u2014 a firm that already has production capacity, operations, signed contracts, etc.\n\nThe most common legal form is Sp. z o.o. \u2014 a limited liability company. Buying such a company implies additional expenses for notary services, state fees, representation of interests by proxy, and more. All this directly affects the final cost of purchasing a Polish company.",
      },
      {
        heading: "Ready-made companies in Poland: requirements for purchase",
        body: "If you want to buy a company ready for business, the simplest and fastest option is acquiring a firm by appointing a new director. In this case, the shareholders remain unchanged. This procedure involves the following steps:\n\nPreparation of documents regarding the change, as well as an order appointing the new CEO. This also includes shareholder resolutions. Notarized certification of the new CEO's signature. Submission of documents to the tax office to register the CEO appointment.\n\nIf an entrepreneur decides to buy a ready-made Polish company with both a new CEO and new shareholders, the process requires:\n\npreparation and signing of share transfer documents; a shareholders' meeting to change the board; notarized sale and purchase agreement; submission of applications to tax and court authorities for the change of ownership.\n\nIf the entrepreneur wants to buy a Polish company and change, for example, its name, an additional shareholders' meeting is required.\n\nAll these actions are included in our company's services, so by choosing to buy a ready-made company in Poland, entrepreneurs relieve themselves of these formalities \u2014 our specialists will handle them.",
      },
      {
        heading: "Additional services",
        body: "See all countries",
      },
    ]}
    requirements={[
      "Notarized copies of shareholder passports",
      "Shareholder powers of attorney",
      "Registration forms (originals)",
      "Share transfer documents",
      "Notarized sale and purchase agreement",
    ]}
    faq={[
      {
        question: "What documents are required to buy a business in Poland?",
        answer: "To buy a company in Poland, you need notarized copies of shareholder passports, shareholder powers of attorney, and registration forms. All documents must be provided in originals.",
      },
      {
        question: "How can a foreigner buy a company in Poland?",
        answer: "First, you need to find a seller independently or through intermediaries. To re-register a company in Poland, you must either visit Poland or issue a power of attorney to an official local representative. The purchase through a representative is the most convenient, fast, and cost-effective option.",
      },
      {
        question: "What taxes need to be paid when buying a company in Poland?",
        answer: "No taxes are charged when purchasing a company in Poland. Taxes are paid on dividends and company profits. At the same time, the company may use preferential taxation regimes.",
      },
      {
        question: "Can you buy a company in Poland online?",
        answer: "A company in Poland can be purchased remotely by proxy or by visiting Poland.",
      },
    ]}
    heroVisual={<PolandCompanyVisual />}

  />
);

export default BuyingACompanyInPolandPage;
export { BuyingACompanyInPolandPage };
