import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/purchase-of-a-company-in-the-uae (1:1 copy)
const PAGE_DATA = {
  title: `Purchase of a Company in the UAE`,
  description: `Buying a ready-made company in the UAE is an excellent way to minimize bureaucratic procedures and quickly start commercial activities. To do this, contact the specialists of the international company Incluence in any convenient way. Our professionals will answer all your questions, study your goals and needs, and then recommend the option that best suits you.

This makes it easy to buy a company in the Emirates, with which you can engage in various business processes without wasting time on certain organizational and legal issues. We also provide ongoing support and assistance for the operation of your company.

When planning business expansion and exploring available options, many entrepreneurs choose the United Arab Emirates (UAE). This is due to several factors, including the country’s location at the crossroads of trade routes in the Middle East. This encourages active trade, with many businesspeople being citizens of other countries whose goal is to operate in Asia and collaborate with partners in the Gulf states.

If you decide to buy a company in the UAE, such a transaction will provide you with a number of advantages. Among them:

- English is spoken almost everywhere in the Emirates, which greatly simplifies cooperation with business partners.
- The UAE has no currency control, so you can use both the local dirham and foreign currencies such as the euro or US dollar.
- The vast majority of companies operating in the UAE are exempt from corporate income tax. Exceptions include businesses in certain sectors, such as oil & gas or banking.
- If you plan to import goods into the UAE market, the company is only subject to a customs duty of 5% of the value declared.

Today you can buy a company in the UAE in two formats:

- a “clean” firm, which has not conducted any transactions and has no obligations to the state or third parties;
- a company actively trading, signing contracts with partners, and generating revenue.

Most entrepreneurs looking to purchase a ready-made business choose one of the following legal forms:

- LLC — resident for tax purposes. Once registered in one of the Emirates, an LLC can operate throughout the UAE.
- FZE — created by residents and only within a specific free economic zone where it is allowed to operate. Business in the rest of the UAE is prohibited. Such firms are exempt from taxation.
- IBC — registered in the UAE but can only trade outside the country. This is a popular option among foreign entrepreneurs wishing to buy a company in the Emirates.

If you plan to conduct business in the Emirates, note that almost every type of commercial activity requires a license. These may include trade, industrial, aviation, and other types of licenses.

When buying a company in the Emirates, keep in mind that LLCs and FZEs must maintain accounting records, prepare financial statements, and file them with the Registrar. IBCs are exempt from reporting requirements.

If you decide to buy a company in the Emirates, contact Incluence. Our specialists carefully check ready-made companies and have all the necessary information about the entity you are interested in, including:

- details about shareholders;
- absence of outstanding debts;
- availability of necessary licenses to conduct commercial activities.

This ensures that when you buy a company in the UAE, you can be confident in its legal purity. Incluence professionals specialize in selecting verified solutions, allowing you to focus on efficiently running your business.

If you want to buy a company in the UAE, we will select several options that best suit your needs. Once all details are agreed upon and a contract is signed, we will prepare the necessary documents and handle the remaining bureaucratic procedures required to complete the purchase. For a detailed consultation, contact our company directly.`,
  sections: [
    {
      heading: `01. Selecting a Company in the UAE`,
      body: `You need to find a company for purchase and discuss the terms of the deal. This can be done independently or with our assistance. We have clients and partners seeking buyers for their companies.`,
    },
    {
      heading: `02. Company Audit`,
      body: `Before purchasing, the company should be checked for debts to government authorities, including tax authorities, as well as accounts receivable and payable.`,
    },
    {
      heading: `03. Document Preparation`,
      body: `It is necessary to prepare the buyer’s personal documents, powers of attorney, and re-registration forms.`,
    },
    {
      heading: `04. Submission of Re-registration Documents`,
      body: `The collected document package is submitted to the Registry. After that, the registrar processes the documents and updates the company data in the Registry database.`,
    },
    {
      heading: `05. Receiving Confirmation of Company Re-registration`,
      body: `Once the company’s details are updated in the Registry, its registration data can be viewed and, if necessary, statutory documents can be ordered in paper form, with or without certification. Our specialists will help with all necessary certifications (notarization, apostille) and, if required, translations into other languages.`,
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
    { question: `How to re-register a ready-made company in the UAE?`, answer: `To re-register a company in the UAE, the seller and buyer must either issue a power of attorney or visit the UAE, prepare a copy of the passport, and complete the forms for re-registration. The finalized documents must then be submitted to the Registry.` },
    { question: `What documents are required to buy a company in the UAE?`, answer: `To buy a company in the UAE, you need to provide copies of participants’ passports and proof of address. You must also submit completed registration forms, including information about the source of funds used to establish the company. Beneficiaries may also be asked to provide confirmation of the origin of funds during re-registration.` },
    { question: `What taxes need to be paid when purchasing a company in the UAE?`, answer: `When purchasing a company in the UAE, only the registration fee needs to be paid. Tax obligations arise only after the company begins operations or if the previous owner has unpaid taxes from past activities.` },
    { question: `Can a company in the UAE be purchased online?`, answer: `A company in the UAE can be purchased remotely by power of attorney or in person during a visit to the UAE.` },
  ],
};

const PurchaseOfACompanyInTheUaePage = () => (
  <ServiceDetailPage
    slug="purchase-of-a-company-in-the-uae"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default PurchaseOfACompanyInTheUaePage;
export { PurchaseOfACompanyInTheUaePage };
