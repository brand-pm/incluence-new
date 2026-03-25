import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /purchase-of-a-company-in-the-czech-republic
const PAGE_DATA = {
  title: `Purchase of a Company in the Czech Republic`,
  description: `How to Buy a Ready-Made Company in the Czech Republic: Features of the Procedure To start a business in the Czech Republic, you need to register a company.`,
  requirements: [
    `Company in the Czech Republic: Buy or Register from Scratch`,
    `A ready-made company is a legal entity registered in the Commercial Register and listed with the tax office at the place of registration. Entrepreneurs can buy such a company, after which it will be re-registered to a new owner within a short time`,
    `Deciding to buy a company in Czechia not only saves the entrepreneur from various formalities related to the registration process but also provides a company that already meets certain requirements. For example, it may already hold licenses or be registered as a VAT payer`,
    `A ready-made company can be the best choice for entrepreneurs who want to:`,
    `obtain a residence visa in the Czech Republic; purchase real estate under the company’s name; quickly start business operations in the Czech Republic`,
    `The key advantage of buying a company in Czechia is that the new owner can immediately obtain a VAT number. This is not possible when registering a company from scratch, as obtaining the number requires an annual turnover exceeding 1 million CZK`,
    `Buying a Company in the Czech Republic: Advantages`,
    `Purchasing a ready-made company has many advantages, including:`,
    `the share capital is fully paid; some companies already hold licenses for specific activities; you can buy a company in Czechia with no business history, no contracts, and no prior activity; a company with history looks more attractive to potential partners; the enterprise already has a bank account; the buyer can make changes during the purchase process, such as changing the company name; the company has a legal address compliant with Czech legislation; offered ready-made companies have no debts or other obligations to the state or third parties`,
    `Ready-Made Company in the Czech Republic — What Can Be Changed`,
  ],
  faq: [
    { question: `What documents are required to purchase a business in the Czech Republic?`, answer: `To buy a company in Czechia, you will need notarized copies of the participants’ passports, a criminal record certificate, powers of attorney from shareholders, and registration forms. All documents must be originals.` },
    { question: `How can a foreigner buy a company in Czechia?`, answer: `You first need to find a seller, either directly or via intermediaries. To re-register the company, you must either travel to Czechia or issue a power of attorney to a local authorized representative. The purchase through a representative is the most` },
    { question: `What taxes need to be paid when purchasing a company in the Czech Republic?`, answer: `No taxes are charged when purchasing a company in Czechia. Taxes apply to company profits and dividends. The company may also benefit from preferential tax regimes.` },
    { question: `Can I buy a company in Czechia online?`, answer: `A company in Czechia can be purchased remotely via power of attorney or by visiting the country in person.` },
  ],
};

const PurchaseOfACompanyInTheCzechRepublicPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default PurchaseOfACompanyInTheCzechRepublicPage;
export { PurchaseOfACompanyInTheCzechRepublicPage };
