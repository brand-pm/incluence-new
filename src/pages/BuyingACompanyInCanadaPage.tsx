import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/buying-a-company-in-canada (1:1 copy)
const PAGE_DATA = {
  title: `Buying a Company in Canada`,
  description: `Today, the Canadian market is characterized by dynamic growth and favorable conditions for entrepreneurs. Because of this, many businessmen are interested in registering a local company. However, creating a company from scratch is a rather complex and time-consuming process. For many entrepreneurs, acquiring a ready-made Canadian company is a more suitable option.

The decision to buy a company in Canada also comes from the fact that although commercial competition is quite high here, market stability and favorable legislation are much more significant advantages. One should not forget that any disputes are resolved fairly and within the framework of the law. An additional advantage for foreign entrepreneurs is the right to apply for a residence permit, which is granted to all non-residents who own a company in this country.

This country offers many advantages for entrepreneurs. Essentially, the main obstacle is the necessity of starting a company. This process requires completing a number of procedures, preparing and submitting multiple documents, and complying with certain legal requirements, among other things. However, the ability to buy a company in Canada relieves the entrepreneur of all these difficulties, while granting access to a wide range of benefits available in this jurisdiction.

In particular, entrepreneurs value Canada as a suitable place for business expansion for the following reasons:

- The country attracts entrepreneurs with its investment potential.
- The corporate tax rate in Canada is 15%, applied to enterprises with profits not exceeding CAD 500,000.
- Most contracts and agreements with business partners can be concluded without additional approval from regulatory authorities.
- Canada has a convenient geographical location, allowing local companies to supply goods and services throughout North America.
- The country is characterized by stability not only in politics but also in the financial sector.

Canadian legislation allows entrepreneurs to establish companies in various legal forms, though most often the choice falls on Limited Partnership, Limited Liability Partnership, or Corporation. Each form has its own features, so we recommend contacting our firm for a detailed consultation and discussion of all your questions.

When deciding which company to buy in Canada, an entrepreneur should first make sure that they are eligible to acquire a local business. Generally, a purchase agreement can be concluded with any foreign investor who has proven management experience. The investor must also have sufficient assets to acquire a Canadian business.

Once a suitable Canadian company for acquisition is found, the purchase process begins. This usually takes about 2–3 months, although the timeframe may vary depending on several factors.

If you decide to buy a company in Canada, contact our firm to select an option that best meets your requirements. We will handle all the necessary procedures, provide you with professional consultation, and ensure legal support at every stage of the transaction.`,
  sections: [
    {
      heading: `01. Selecting a Company in Canada`,
      body: `You need to find a company for purchase and negotiate the terms of the deal. This can be done independently or with our assistance. We have clients and partners who are looking for buyers for their companies.`,
    },
    {
      heading: `02. Company Audit`,
      body: `Before the purchase, the company should be checked for debts to government authorities, including tax liabilities, as well as accounts payable and receivable.`,
    },
    {
      heading: `03. Document Preparation`,
      body: `It is necessary to prepare the buyer’s personal documents, powers of attorney, and re-registration forms.`,
    },
    {
      heading: `04. Submission of Documents for Re-registration`,
      body: `The prepared package of documents is submitted to the Registry. After that, the registrar processes the documents, and changes to the company are recorded in the Registry’s database.`,
    },
    {
      heading: `05. Receiving Confirmation of Company Re-registration`,
      body: `After the company’s data has been updated in the Registry, its registration details can be viewed, and certified paper copies of statutory documents can be requested if needed. Our specialists can assist with all required certifications (notarization, apostille) and, if necessary, translations into other languages.`,
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
    { question: `How to re-register a ready-made company in Canada?`, answer: `To re-register a company in Canada, the seller and buyer must either issue a power of attorney or visit Canada, prepare a copy of their passport, and complete the re-registration forms. The completed documents must then be submitted to the Registry.` },
    { question: `What documents are required to purchase a company in Canada?`, answer: `To purchase a company in Canada, copies of the participants’ passports and proof of address must be submitted. Registration forms must also be completed, including information about the source of financing for the company’s creation. During re-registration, beneficiaries may be required to provide proof of the origin of funds used to acquire the company.` },
    { question: `What taxes need to be paid when buying a company in Canada?`, answer: `When buying a company in Canada, only the registration fee must be paid. Tax obligations arise only after the company begins operations, or if the previous owner failed to pay taxes on past activities.` },
    { question: `Can a company in Canada be purchased online?`, answer: `A company in Canada can be purchased remotely via power of attorney or by visiting the country in person.` },
  ],
};

const BuyingACompanyInCanadaPage = () => (
  <ServiceDetailPage
    slug="buying-a-company-in-canada"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default BuyingACompanyInCanadaPage;
export { BuyingACompanyInCanadaPage };
