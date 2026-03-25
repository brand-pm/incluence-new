import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /purchase-of-a-company-in-luxembourg
const PAGE_DATA = {
  title: `Purchase of a Company in Luxembourg`,
  description: `If you are planning to expand your business and enter the international market, purchasing a ready-made company in Luxembourg may be a suitable option. This country is known for its high standard of living and stability in various spheres.`,
  sections: [
    {
      heading: `Why it is recommended to buy a company in Luxembourg: features of doing business`,
      body: `If you are planning to expand your business and enter the international market, purchasing a ready-made company in Luxembourg may be a suitable option. This country is known for its high standard of living and stands out for its stability in various spheres, including political and social.\n\nThe state attracts foreign investors with its legislation, which is characterized as favorable to international entrepreneurs. In particular, they can count on convenient business conditions, and special attention should be paid to the observance of banking secrecy, which is guaranteed at the state level. Business activities organized in this country with the help of foreign capital are not subject to any restrictions by law.\n\nAnother factor that influences the decision to buy a firm in Luxembourg is the absence of direct taxation on third-party assets located in the country. There is also no inheritance tax on such property.`,
    },
    {
      heading: `What you should know before buying a company in Luxembourg: requirements for entrepreneurs`,
      body: `If you decide to purchase a ready-made enterprise in this country, you should take into account certain requirements related to re-registration of the company. As a rule, the change of ownership is completed within 2\u20133 weeks, but sometimes more time may be required. In some cases, a personal visit to Luxembourg is necessary to finalize the purchase and sale agreement.\n\nWhen buying a company in Luxembourg, you should also decide on a suitable legal form. This determines the list of requirements as well as the specifics of the intended activity.\n\nThe most common forms are:\n\n1. Public Limited Company (SA).\nAt least one director and one shareholder are required. The minimum authorized capital is EUR 30,000. As a rule, to start commercial activity, the enterprise must obtain approval from regulatory authorities. More precise information will be provided during a personal consultation with our specialists.\n\n2. Private Limited Liability Company (S.A.R.L.).\nIf you decide to buy a firm in Luxembourg in this legal form, keep in mind that it must have at least 2 and no more than 40 partners. The minimum authorized capital is EUR 2,500. At least one director is mandatory.`,
    },
    {
      heading: `What is required to buy a company in Luxembourg`,
      body: `If you are interested in acquiring a ready-made enterprise in Luxembourg, note that all companies in this country must be members of the Luxembourg Federation of Industrialists as well as the Chamber of Commerce.\n\nTo buy a firm in Luxembourg, you will need to prepare several documents. At minimum, the following are required:\n\nA notarized copy of a foreign passport; proof of residence address, such as a utility bill.\n\nPlease note that the list of documents, requirements for the new owner, and conditions of doing business may vary. All these matters can be discussed with our specialists during a personal consultation.\n\nContact our company's experts if you want to buy a company in Luxembourg. We will find the right option for you and provide full legal support during the purchase of a ready-made business.`,
    },
  ],
  requirements: [
    `Ownership transfer completed within 2-3 weeks`,
    `Personal visit may be required to finalize the deal`,
    `SA: at least one director, one shareholder, EUR 30,000 capital`,
    `S.A.R.L.: 2-40 partners, EUR 2,500 minimum capital`,
    `Membership in Luxembourg Federation of Industrialists`,
    `Membership in the Chamber of Commerce`,
    `Notarized copy of foreign passport`,
    `Proof of residence address (e.g. utility bill)`,
  ],
  faq: [
    { question: `How to re-register a ready-made company in Luxembourg?`, answer: `To re-register a Luxembourg company, the seller and buyer must issue a power of attorney or personally visit Luxembourg, prepare a copy of the passport, and complete forms for re-registration. The completed documents must then be submitted to the Register.` },
    { question: `What documents are required to purchase a firm in Luxembourg?`, answer: `To purchase a firm in Luxembourg, you need to submit copies of passports and proof of address of the company's participants. You also need to provide completed registration forms, including information on the source of financing for establishing the company. During re-registration, beneficiaries may be asked to provide proof of the origin of funds used to create the company.` },
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
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default PurchaseOfACompanyInLuxembourgPage;
export { PurchaseOfACompanyInLuxembourgPage };
