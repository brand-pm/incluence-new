import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/purchase-of-a-company-in-luxembourg (1:1 copy)
const PAGE_DATA = {
  title: `Purchase of a Company in Luxembourg`,
  description: `If you are planning to expand your business and enter the international market, purchasing a ready-made company in Luxembourg may be a suitable option. This country is known for its high standard of living and stands out for its stability in various spheres, including political and social.

The state attracts foreign investors with its legislation, which is characterized as favorable to international entrepreneurs. In particular, they can count on convenient business conditions, and special attention should be paid to the observance of banking secrecy, which is guaranteed at the state level. Business activities organized in this country with the help of foreign capital are not subject to any restrictions by law.

Another factor that influences the decision to buy a firm in Luxembourg is the absence of direct taxation on third-party assets located in the country. There is also no inheritance tax on such property.

If you decide to purchase a ready-made enterprise in this country, you should take into account certain requirements related to re-registration of the company. As a rule, the change of ownership is completed within 2–3 weeks, but sometimes more time may be required. In some cases, a personal visit to Luxembourg is necessary to finalize the purchase and sale agreement.

When buying a company in Luxembourg, you should also decide on a suitable legal form. This determines the list of requirements as well as the specifics of the intended activity.

The most common forms are:

1\\. Public Limited Company (SA).

At least one director and one shareholder are required. The minimum authorized capital is EUR 30,000. As a rule, to start commercial activity, the enterprise must obtain approval from regulatory authorities. More precise information will be provided during a personal consultation with our specialists.

2\\. Private Limited Liability Company (S.A.R.L.).

If you decide to buy a firm in Luxembourg in this legal form, keep in mind that it must have at least 2 and no more than 40 partners. The minimum authorized capital is EUR 2,500. At least one director is mandatory.

If you are interested in acquiring a ready-made enterprise in Luxembourg, note that all companies in this country must be members of the Luxembourg Federation of Industrialists as well as the Chamber of Commerce.

To buy a firm in Luxembourg, you will need to prepare several documents. At minimum, the following are required:

a notarized copy of a foreign passport;

- proof of residence address, such as a utility bill.

Please note that the list of documents, requirements for the new owner, and conditions of doing business may vary. All these matters can be discussed with our specialists during a personal consultation.

Contact our company’s experts if you want to buy a company in Luxembourg. We will find the right option for you and provide full legal support during the purchase of a ready-made business.`,
  sections: [
    {
      heading: `01. Choosing a Company in Luxembourg`,
      body: `You need to find a company to purchase and discuss the terms of the deal. This can be done independently or with our assistance. We have clients and partners who are looking for buyers for their companies.`,
    },
    {
      heading: `02. Company Audit`,
      body: `Before buying, the company should be checked for debts to state authorities, including the tax office, as well as accounts payable and receivable.`,
    },
    {
      heading: `03. Document Preparation`,
      body: `It is necessary to prepare the buyer’s personal documents, powers of attorney, and forms for re-registration.`,
    },
    {
      heading: `04. Submission of Documents for Re-registration`,
      body: `The collected package of documents is submitted to the Register. After that, the registrar processes the documents and updates the company’s data in the Register’s database.`,
    },
    {
      heading: `05. Receiving Confirmation of Company Re-registration`,
      body: `After the company’s data is updated in the Register, its registration details can be viewed there, and if necessary, paper versions of the charter documents with or without certification can be ordered. Our specialists will assist with all required certifications (notarization, apostille) and translations into other languages if necessary.`,
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
    { question: `How to re-register a ready-made company in Luxembourg?`, answer: `To re-register a Luxembourg company, the seller and buyer must issue a power of attorney or personally visit Luxembourg, prepare a copy of the passport, and complete forms for re-registration. The completed documents must then be submitted to the Register.` },
    { question: `What documents are required to purchase a firm in Luxembourg?`, answer: `To purchase a firm in Luxembourg, you need to submit copies of passports and proof of address of the company’s participants. You also need to provide completed registration forms, including information on the source of financing for establishing the company. During re-registration, beneficiaries may be asked to provide proof of the origin of funds used to create the company.` },
    { question: `What taxes must be paid when purchasing a company in Luxembourg?`, answer: `When buying a company in Luxembourg, only the registration fee must be paid. Tax obligations arise only after the company starts operations or if the previous owner has unpaid taxes from prior activities.` },
    { question: `Can you buy a company in Luxembourg online?`, answer: `A company in Luxembourg can be purchased remotely through a power of attorney or by visiting Luxembourg in person.` },
  ],
};

const PurchaseOfACompanyInLuxembourgPage = () => (
  <ServiceDetailPage
    slug="purchase-of-a-company-in-luxembourg"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default PurchaseOfACompanyInLuxembourgPage;
export { PurchaseOfACompanyInLuxembourgPage };
