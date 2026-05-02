import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/purchase-of-a-company-in-the-czech-republic (1:1 copy)
const PAGE_DATA = {
  title: `Purchase of a Company in the Czech Republic`,
  description: `To start a business in the Czech Republic, you need to register a company. Registration is a rather complex procedure that requires entrepreneurs not only time and effort but also knowledge of the specifics of this process, such as the legislative requirements of the Czech Republic. An alternative can be the purchase of a ready-made Czech company.

A ready-made company is a legal entity registered in the Commercial Register and listed with the tax office at the place of registration. Entrepreneurs can buy such a company, after which it will be re-registered to a new owner within a short time.

Deciding to buy a company in Czechia not only saves the entrepreneur from various formalities related to the registration process but also provides a company that already meets certain requirements. For example, it may already hold licenses or be registered as a VAT payer.

A ready-made company can be the best choice for entrepreneurs who want to:

- obtain a residence visa in the Czech Republic;
- purchase real estate under the company’s name;
- quickly start business operations in the Czech Republic.

The key advantage of buying a company in Czechia is that the new owner can immediately obtain a VAT number. This is not possible when registering a company from scratch, as obtaining the number requires an annual turnover exceeding 1 million CZK.

Purchasing a ready-made company has many advantages, including:

- the share capital is fully paid;
- some companies already hold licenses for specific activities;
- you can buy a company in Czechia with no business history, no contracts, and no prior activity;
- a company with history looks more attractive to potential partners;
- the enterprise already has a bank account;
- the buyer can make changes during the purchase process, such as changing the company name;
- the company has a legal address compliant with Czech legislation;
- offered ready-made companies have no debts or other obligations to the state or third parties.

The cost of purchasing a company depends primarily on the firm itself: whether it is active, has licenses, and other factors. The price is also influenced by notary services and the preparation of various required documents:

- Criminal record certificates for the director from both the country of residence and the Czech Republic. To obtain a Czech certificate, a birth certificate is required as a mandatory supporting document.
- If the legal address needs to be changed, written consent from the property owner is required.

Additional costs may arise due to personal presence requirements or issuing a power of attorney. If the purchase is by proxy, the document can be signed either in person in the Czech Republic or at a Czech consulate abroad.

Besides documentation and company costs, there are expenses for our due diligence services. Our specialists perform a thorough audit to ensure a transparent and secure transaction for all parties.

If the new owner wishes to make changes, this can be done during the purchase process. Amendments can include:

- adding or modifying business activities;
- changing the legal address;
- choosing a new company name;
- closing or opening additional bank accounts in the desired currency;
- redistributing share capital among co-founders.

By law, processing such changes may take up to 5 business days.

Business activities can begin immediately after signing the purchase contract; waiting for registry updates is not required.

It is important to note the difference between VAT-registered companies and those without business history. If the company’s turnover falls below 1 million CZK, it may lose its VAT number. Therefore, such firms must remain active, keep accounting, and file reports. These factors directly influence the price of the company during sale.

If you are interested in a ready-made company in Czechia with a VAT number, it must undergo a thorough audit since it has already engaged in business activities.

During this process, our experts will:

- verify the availability and compliance of all documents (founding, ownership, and licensing documents);
- check ownership rights to company shares and the legitimacy of related transactions;
- provide recommendations to align documentation with legal standards if needed.

To buy a company in Czechia, you will need:

- a high-resolution scan of your international passport;
- your registered residential address, including the city and region;
- a criminal record certificate from both your home country and the Czech Republic.

If you are interested in acquiring a ready-made company in Czechia, our specialists will review available offers and select the best option for you. We also provide many additional services, which you can learn about during a consultation with our manager.`,
  sections: [
    {
      heading: `01. Choosing a Company in the Czech Republic`,
      body: `You need to find a company for purchase and negotiate deal terms. This can be done independently or with our assistance. We have clients and partners seeking buyers for their companies.`,
    },
    {
      heading: `02. Company Audit`,
      body: `Before buying, the company must be checked for debts to tax authorities or other state bodies, as well as accounts payable and receivable.`,
    },
    {
      heading: `03. Document Preparation`,
      body: `Prepare the buyer’s personal documents, powers of attorney, and re-registration forms.`,
    },
    {
      heading: `04. Filing Re-Registration Documents`,
      body: `The complete set of documents is submitted to the Register. The registrar processes the application and updates the company’s data in the database.`,
    },
    {
      heading: `05. Receiving Confirmation of Company Re-Registration`,
      body: `After company data updates are entered into the Register, the new registration information becomes available. If necessary, you can request paper copies of the corporate documents, notarized or apostilled. Our sp`,
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
    { question: `What documents are required to purchase a business in the Czech Republic?`, answer: `To buy a company in Czechia, you will need notarized copies of the participants’ passports, a criminal record certificate, powers of attorney from shareholders, and registration forms. All documents must be originals.` },
    { question: `How can a foreigner buy a company in Czechia?`, answer: `You first need to find a seller, either directly or via intermediaries. To re-register the company, you must either travel to Czechia or issue a power of attorney to a local authorized representative. The purchase through a representative is the most common, convenient, fast, and cost-effective option.` },
    { question: `What taxes need to be paid when purchasing a company in the Czech Republic?`, answer: `No taxes are charged when purchasing a company in Czechia. Taxes apply to company profits and dividends. The company may also benefit from preferential tax regimes.` },
    { question: `Can I buy a company in Czechia online?`, answer: `A company in Czechia can be purchased remotely via power of attorney or by visiting the country in person.` },
  ],
};

const PurchaseOfACompanyInTheCzechRepublicPage = () => (
  <ServiceDetailPage
    slug="purchase-of-a-company-in-the-czech-republic"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default PurchaseOfACompanyInTheCzechRepublicPage;
export { PurchaseOfACompanyInTheCzechRepublicPage };
