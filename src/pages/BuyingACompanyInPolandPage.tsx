import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/buying-a-company-in-poland (1:1 copy)
const PAGE_DATA = {
  title: `Buying a company in Poland`,
  description: `Incluence Limited is a team of experts with extensive experience in the legal services market. We assist entrepreneurs in the process of registering a business in Europe, including Poland.

We offer a full range of services: helping you choose a business structure or a ready-made business, preparing and submitting personal and registration documents. We explain all aspects of taxation and business management. We represent your interests (based on a power of attorney) until the registration processes in Poland are fully completed. We will also be there after your business is opened — ready to provide professional legal services.

Over the past decade, Poland has demonstrated excellent growth and economic development results. This has influenced not only the general standard of living but also the business culture and business profitability prospects. All this makes Poland attractive for people looking for a country to run entrepreneurial activities.

Business can be started in two ways: registering a company from scratch or buying a ready-made Polish company. The key difference is that standard registration requires fewer financial costs but is rather complicated and involves preparing many documents and formalities.

On the other hand, a ready-made company in Poland allows you to start business activities almost instantly, with minimal time and effort. Also, purchasing an existing company helps the entrepreneur avoid various bureaucratic formalities typical of the registration process.

Poland is attractive to entrepreneurs for the following reasons:

stable economy;

- optimal transit and logistics location;.
- favorable lending conditions, EU subsidies;.
- optimal level of taxation among other EU countries — corporate tax is 19%.

If an entrepreneur decides to buy a ready-made company in Poland, they can gain even more benefits, including:

notarized confirmation that the company has no obligations to the state or third parties;

- a company with no history of business activity;.
- bank financing under favorable conditions, subsidies.

A ready-made company allows its owner to purchase real estate in Poland, participate in tenders, apply for certain types of licenses, and more.

Such companies already have the necessary registration numbers for business activities:

KRS — in the national court register;

- REGON — in the central statistical register;.
- NIP — taxpayer identification number.

Immediately after purchasing a ready-made company in Poland, the entrepreneur becomes its new owner and can start doing business. The company has a registered address, a bank account, a corporate seal, and other tools for full business activity.

Each company undergoes a thorough check, and most documents are notarized, ensuring legal safety during the sale and purchase transaction.

The cost of buying a ready-made Polish company depends on several factors, the main one being the type of company:

“Clean” company — a firm with no economic activity, transactions, etc. It is technically active but has not conducted business

- Ready, operating business — a firm that already has production capacity, operations, signed contracts, etc.

The most common legal form is Sp. z o.o. — a limited liability company. Buying such a company implies additional expenses for notary services, state fees, representation of interests by proxy, and more. All this directly affects the final cost of purchasing a Polish company.

If you want to buy a company ready for business, the simplest and fastest option is acquiring a firm by appointing a new director. In this case, the shareholders remain unchanged. This procedure involves the following steps:

Preparation of documents regarding the change, as well as an order appointing the new CEO. This also includes shareholder resolutions

- Notarized certification of the new CEO’s signature.
- Submission of documents to the tax office to register the CEO appointment.

If an entrepreneur decides to buy a ready-made Polish company with both a new CEO and new shareholders, the process requires:

preparation and signing of share transfer documents;

- a shareholders’ meeting to change the board;.
- notarized sale and purchase agreement;.
- submission of applications to tax and court authorities for the change of ownership.

If the entrepreneur wants to buy a Polish company and change, for example, its name, an additional shareholders’ meeting is required.

All these actions are included in our company’s services, so by choosing to buy a ready-made company in Poland, entrepreneurs relieve themselves of these formalities — our specialists will handle them.

Acquiring a ready-made company is quite a difficult task if handled independently. Our specialists will help you buy a Polish company, taking into account all the details of such transactions.

We offer cooperation in a convenient format:

Company selection. Our experts help you choose a company for purchase, discuss deal conditions. You can do this independently, but we also have partners already looking to sell their businesses

- Company audit. Before concluding a deal, you must verify the company’s transparency. Our specialists will conduct an audit to ensure there are no creditor, debtor, or government liabilities.
- Preparation of all documents required to change only the CEO or also the shareholders. This includes the buyer’s personal documentation, powers of attorney, and re-registration forms.
- Document submission. The full package is submitted to the Register, where the registrar records the new owner’s data and updates the database. Registration is then confirmed — you can order a seal and document certification.

We also provide the following additional services:

Professional tax consulting

- Accounting support for financial issues related to the purchase of a company and further business operations.
- Company name change, new trademark registration, license applications.

By working with our company, you will be able to start a business in Poland in the shortest possible time, while our specialists handle all bureaucratic formalities.

Fill out an application and we’ll contact you!`,
  sections: [
    {
      heading: `01. Choosing a company in Poland`,
      body: `You need to find a company for purchase and discuss the transaction terms. This can be done independently or with our assistance. We have clients and partners who are looking for buyers for their companies.`,
    },
    {
      heading: `02. Company audit`,
      body: `Before purchase, the company should be checked for debts to government agencies, including the tax authority, as well as for debtor and creditor liabilities.`,
    },
    {
      heading: `03. Document preparation`,
      body: `You need to prepare the buyer’s personal documents, powers of attorney, and re-registration forms.`,
    },
    {
      heading: `04. Submission of re-registration documents`,
      body: `The collected document package is submitted to the Register. After that, the registrar processes them and updates the company data in the Register database.`,
    },
    {
      heading: `05. Receiving confirmation of company re-registration`,
      body: `After the company’s data is updated in the Register, you can view its registration details and, if necessary, order notarized or non-notarized statutory documents. Our specialists can also provide all required certifications (notarial certification, apostille) and translations into other languages if needed.`,
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
    { question: `What documents are required to buy a business in Poland?`, answer: `To buy a company in Poland, you need notarized copies of shareholder passports, shareholder powers of attorney, and registration forms. All documents must be provided in originals.` },
    { question: `How can a foreigner buy a company in Poland?`, answer: `First, you need to find a seller independently or through intermediaries. To re-register a company in Poland, you must either visit Poland or issue a power of attorney to an official local representative. The purchase through a representative is the most convenient, fast, and cost-effective option.` },
    { question: `What taxes need to be paid when buying a company in Poland?`, answer: `No taxes are charged when purchasing a company in Poland. Taxes are paid on dividends and company profits. At the same time, the company may use preferential taxation regimes.` },
    { question: `Can you buy a company in Poland online?`, answer: `A company in Poland can be purchased remotely by proxy or by visiting Poland.` },
  ],
};

const BuyingACompanyInPolandPage = () => (
  <ServiceDetailPage
    slug="buying-a-company-in-poland"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default BuyingACompanyInPolandPage;
export { BuyingACompanyInPolandPage };
