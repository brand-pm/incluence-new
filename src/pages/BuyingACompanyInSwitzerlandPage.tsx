import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/buying-a-company-in-switzerland (1:1 copy)
const PAGE_DATA = {
  title: `Buying a Company in Switzerland`,
  description: `If you decide to open a company “from scratch” or expand an existing business, achieving this goal may take a lot of effort and time. Switzerland is a country of strict rules and specific standards, so while anyone can engage in business here, not everyone is able to meet the requirements. The reason is that every procedure must be completed in strict accordance with legal regulations, otherwise you risk rejection by the Commercial Register, tax authorities, and other institutions.

The level of Swiss economic development and business culture is attractive for entrepreneurs, which is why they constantly try to register their company in this jurisdiction. However, it is often more rational to buy a ready-made company in Switzerland. Such companies have already completed all registration procedures, are registered with the tax authorities, have an open bank account, and have their authorized capital fully paid in accordance with the law.

Regardless of which company you choose to acquire, a Swiss bank is required to check the new beneficial owners. Based on this, the bank will decide whether to continue working with the company or to close the current account. This decision cannot be influenced, but even in case of an unfavorable outcome, we will assist you with opening a new corporate account.

The timeframe for this procedure varies and largely depends on the type of business and the particular bank. In some cases, new owners may be asked to provide additional documents, such as a business plan or proof of the legality of the source of funds.

If you are aiming for long-term business activity, the following legal forms are available in Switzerland:

1\\. Public limited company (AG). Requires a capital of at least 100,000 CHF, at least 1 shareholder-resident and 1 director. This type of company allows for easy share transfers and provides a sufficient level of anonymity, which is attractive to certain groups of investors.

2\\. Limited liability company (GmbH). Requires at least 20,000 CHF, at least 1 shareholder, and 1 director (the director must be a Swiss resident). The advantage of this form is the lower capital requirement, which is typically appealing to small business owners.

3\\. General partnership. Requires at least 2 individuals. No minimum capital requirement is set by law. Buying such a company in Switzerland offers certain advantages, including flexibility in structuring business relationships, such as profit and share distribution.

4\\. Sole proprietorship. Allows entrepreneurial activity without restrictions in business areas. A ready-made sole proprietorship in Switzerland can operate in any field, including trade, manufacturing, software development, etc. No minimum capital is required. The owner must be a resident of Switzerland.

Even if you purchase a newly registered company in Switzerland, you will be able to benefit from all government business support programs. In recent years, the government has tripled funding for startups and small businesses. State support measures are constantly improving and expanding, and by purchasing a ready-made Swiss company, you will be able to use them at your discretion.

We have many years of experience in selling Swiss companies, so we can quickly and efficiently select the right option for your needs and requirements. Order the service by contacting our specialists via phone. We also provide clients with comprehensive consulting and support at every stage of the transaction.`,
  sections: [
    {
      heading: `01. Choosing a company in Switzerland`,
      body: `You need to find a company to buy and discuss the terms of the transaction. This can be done independently or with our assistance. We have clients and partners looking for buyers for their companies.`,
    },
    {
      heading: `02. Company audit`,
      body: `Before purchasing, the company should be checked for debts to state authorities, including taxes, as well as for receivables and payables.`,
    },
    {
      heading: `03. Document preparation`,
      body: `Personal documents of the buyer, powers of attorney, and re-registration forms must be prepared.`,
    },
    {
      heading: `04. Submission of documents for re-registration`,
      body: `The collected package of documents is submitted to the Commercial Register. After this, the registrar processes the documents and updates the company’s information in the Register database.`,
    },
    {
      heading: `05. Confirmation of re-registration`,
      body: `Once the company’s information has been updated in the Register, its registration details can be viewed and official statutory documents can be ordered in paper form, with or without certification. Our specialists can assist with all necessary certifications (notarial certification, apostille) and translations into other languages if required.`,
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
    { question: `What documents are required to buy a business in Switzerland?`, answer: `To purchase a company in Switzerland, you must provide copies of the participants’ passports and proof of address. Completed registration forms including information on the source of funds are also required. Beneficiaries may be asked to provide confirmation of the origin of funds for company establishment.` },
    { question: `How long does the process of buying a company in Switzerland take?`, answer: `Buying a company in Switzerland takes about 2–3 weeks.` },
    { question: `What taxes must be paid when buying a company in Switzerland?`, answer: `When buying a company in Switzerland, you only need to pay the registration fee. Tax obligations arise only after the company begins its activity or if the previous owner failed to pay taxes on prior activities.` },
    { question: `Can I buy a company in Switzerland online?`, answer: `Yes, a company in Switzerland can be transferred remotely through a power of attorney or in person.` },
  ],
};

const BuyingACompanyInSwitzerlandPage = () => (
  <ServiceDetailPage
    slug="buying-a-company-in-switzerland"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default BuyingACompanyInSwitzerlandPage;
export { BuyingACompanyInSwitzerlandPage };
