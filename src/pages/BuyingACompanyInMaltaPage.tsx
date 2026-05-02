import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/buying-a-company-in-malta (1:1 copy)
const PAGE_DATA = {
  title: `Buying a Company in Malta`,
  description: `If you want to register a company to conduct business, Malta can be a suitable option. This small exotic island nation is characterized by economic stability and offers various investment opportunities for both local and foreign entrepreneurs.

Registering a company requires entrepreneurs to prepare a large number of documents, constantly interact with regulatory authorities, and more. You can simplify the process by purchasing a ready-made company instead of registering one from scratch. For more detailed information on how to buy a company in Malta, please contact us.

Today, several types of companies are available for purchase, the most common being:

- LLC-type companies — they can be private or public, with the latter entitled to list shares on the local stock exchange. Such companies must have at least two directors and one secretary who is a natural person. Private firms cannot trade shares or bonds and are limited to 50 members, although they may have just one shareholder.
- Holding and trading companies — if you decide to buy a company in Malta, it can be used for various types of activities, including consultancy services as well as financial and investment services. Such firms may own and manage shares of other companies.
- Partnerships — these can be general or limited. The main difference lies in liability: in general partnerships, all partners are equally liable, while in limited partnerships each participant is liable according to their share in the capital.

Purchasing a company in Malta provides several advantages for entrepreneurs, including:

- Establishing a reliable business thanks to Malta’s EU membership.
- Favorable taxation — shareholders may reclaim 6/7 of the tax on dividends, resulting in an effective tax rate of 5%.
- English as the second official language, which simplifies communication with government bodies and business partners.
- Access to various markets thanks to Malta’s advantageous geographic location.

An additional benefit is that acquiring a company in Malta can be done quickly. While registering a new company and starting operations typically takes 1–2 months, buying a ready-made business significantly reduces the waiting time.

For more detailed information about acquiring a company, please contact our firm. We will answer any questions, manage the transaction, provide full support, and assist you at every stage of the process.`,
  sections: [
    {
      heading: `01. Selecting a Company in Malta`,
      body: `You need to find a company for purchase and negotiate the terms of the transaction. This can be done independently or with our assistance. We have clients and partners who are seeking buyers for their companies.`,
    },
    {
      heading: `02. Company Audit`,
      body: `Before purchasing, the company should be checked for debts to government authorities, including the tax office, as well as for receivables and payables.`,
    },
    {
      heading: `03. Document Preparation`,
      body: `You must prepare the buyer’s personal documents, powers of attorney, and forms for re-registration.`,
    },
    {
      heading: `04. Submitting Re-registration Documents`,
      body: `The prepared set of documents is submitted to the Register. After submission, the registrar processes them, and changes to the company are entered into the Register’s database.`,
    },
    {
      heading: `05. Receiving Confirmation of Company Re-registration`,
      body: `Once the company’s data is updated in the Register, its registration details become visible, and if necessary, you can request certified copies of the statutory documents. Our specialists can help with all required certifications (notarization, apostille) and translations into other languages if needed.`,
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
    { question: `What documents are required to purchase a business in Malta?`, answer: `To purchase a business in Malta, you must provide copies of the participants’ passports and proof of address. You must also submit completed forms for re-registration of the company.` },
    { question: `How long does the process of purchasing a company in Malta take?`, answer: `The re-registration process of a company in Malta takes up to 3 weeks.` },
    { question: `What taxes must be paid when buying a company in Malta?`, answer: `When purchasing a company in Malta, you only need to pay the registration fee. Tax obligations arise only after the company begins operations or if the previous owner failed to pay taxes for prior activities.` },
    { question: `Can I buy a company in Malta online?`, answer: `A company in Malta can be re-registered remotely by proxy or in person when visiting Malta.` },
  ],
};

const BuyingACompanyInMaltaPage = () => (
  <ServiceDetailPage
    slug="buying-a-company-in-malta"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default BuyingACompanyInMaltaPage;
export { BuyingACompanyInMaltaPage };
