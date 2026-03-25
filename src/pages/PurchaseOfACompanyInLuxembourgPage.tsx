import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /purchase-of-a-company-in-luxembourg
const PAGE_DATA = {
  title: `Purchase of a Company in Luxembourg`,
  description: `Why it is recommended to buy a company in Luxembourg: features of doing business If you are planning to expand your business and enter the international market, purchasing a ready-made company in Luxembourg may be a suitable option.`,
  requirements: [
    `What you should know before buying a company in Luxembourg: requirements for entrepreneurs`,
    `If you decide to purchase a ready-made enterprise in this country, you should take into account certain requirements related to re-registration of the company. As a rule, the change of ownership is completed within 2–3 weeks, but sometimes more time may be required. In some cases, a personal visit to Luxembourg is necessary to finalize the purchase and sale agreement`,
    `When buying a company in Luxembourg, you should also decide on a suitable legal form. This determines the list of requirements as well as the specifics of the intended activity`,
    `1. Public Limited Company (SA)`,
    `At least one director and one shareholder are required. The minimum authorized capital is EUR 30,000. As a rule, to start commercial activity, the enterprise must obtain approval from regulatory authorities. More precise information will be provided during a personal consultation with our specialists`,
    `2. Private Limited Liability Company (S.A.R.L.)`,
    `If you decide to buy a firm in Luxembourg in this legal form, keep in mind that it must have at least 2 and no more than 40 partners. The minimum authorized capital is EUR 2,500. At least one director is mandatory`,
    `What is required to buy a company in Luxembourg`,
    `If you are interested in acquiring a ready-made enterprise in Luxembourg, note that all companies in this country must be members of the Luxembourg Federation of Industrialists as well as the Chamber of Commerce`,
    `To buy a firm in Luxembourg, you will need to prepare several documents. At minimum, the following are required:`,
  ],
  faq: [
    { question: `How to re-register a ready-made company in Luxembourg?`, answer: `To re-register a Luxembourg company, the seller and buyer must issue a power of attorney or personally visit Luxembourg, prepare a copy of the passport, and complete forms for re-registration. The completed documents must then be submitted to the Reg` },
    { question: `What documents are required to purchase a firm in Luxembourg?`, answer: `To purchase a firm in Luxembourg, you need to submit copies of passports and proof of address of the company’s participants. You also need to provide completed registration forms, including information on the source of financing for establishing the ` },
    { question: `What taxes must be paid when purchasing a company in Luxembourg?`, answer: `When buying a company in Luxembourg, only the registration fee must be paid. Tax obligations arise only after the company starts operations or if the previous owner has unpaid taxes from prior activities.` },
    { question: `Can you buy a company in Luxembourg online?`, answer: `A company in Luxembourg can be purchased remotely through a power of attorney or by visiting Luxembourg in person.` },
  ],
};

const PurchaseOfACompanyInLuxembourgPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default PurchaseOfACompanyInLuxembourgPage;
export { PurchaseOfACompanyInLuxembourgPage };
