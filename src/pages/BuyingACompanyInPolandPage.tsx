import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /buying-a-company-in-poland
const PAGE_DATA = {
  title: `Buying a company in Poland`,
  description: `How to buy a company in Poland: what’s included in the services Professional tax consulting.Accounting support for financial issues related to the purchase of a company and further business operations.Company name change, new trademark registration, license applications.`,
  requirements: [
    `Ready-made companies in Poland: requirements for purchase`,
    `If you want to buy a company ready for business, the simplest and fastest option is acquiring a firm by appointing a new director. In this case, the shareholders remain unchanged. This procedure involves the following steps:`,
    `Preparation of documents regarding the change, as well as an order appointing the new CEO. This also includes shareholder resolutions.Notarized certification of the new CEO’s signature.Submission of documents to the tax office to register the CEO appointment`,
    `If an entrepreneur decides to buy a ready-made Polish company with both a new CEO and new shareholders, the process requires:`,
    `preparation and signing of share transfer documents;a shareholders’ meeting to change the board;notarized sale and purchase agreement;submission of applications to tax and court authorities for the change of ownership`,
    `If the entrepreneur wants to buy a Polish company and change, for example, its name, an additional shareholders’ meeting is required`,
    `All these actions are included in our company’s services, so by choosing to buy a ready-made company in Poland, entrepreneurs relieve themselves of these formalities — our specialists will handle them`,
  ],
  faq: [
    { question: `What documents are required to buy a business in Poland?`, answer: `To buy a company in Poland, you need notarized copies of shareholder passports, shareholder powers of attorney, and registration forms. All documents must be provided in originals.` },
    { question: `How can a foreigner buy a company in Poland?`, answer: `First, you need to find a seller independently or through intermediaries. To re-register a company in Poland, you must either visit Poland or issue a power of attorney to an official local representative. The purchase through a representative is the ` },
    { question: `What taxes need to be paid when buying a company in Poland?`, answer: `No taxes are charged when purchasing a company in Poland. Taxes are paid on dividends and company profits. At the same time, the company may use preferential taxation regimes.` },
    { question: `Can you buy a company in Poland online?`, answer: `A company in Poland can be purchased remotely by proxy or by visiting Poland.` },
  ],
};

const BuyingACompanyInPolandPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default BuyingACompanyInPolandPage;
export { BuyingACompanyInPolandPage };
