import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /purchase-of-a-company-in-luxembourg
const PAGE_DATA = {
  title: `Purchase of a Company in Luxembourg`,
  description: `If you are planning to expand your business and enter the international market, purchasing a ready-made company in Luxembourg may be a suitable option. This country is known for its high standard of living, political stability, and legislation favorable to international entrepreneurs.`,
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
    { question: `How to re-register a ready-made company in Luxembourg?`, answer: `The seller and buyer must issue a power of attorney or personally visit Luxembourg, prepare a copy of the passport, and complete forms for re-registration. The completed documents must then be submitted to the Register.` },
    { question: `What documents are required to purchase a firm in Luxembourg?`, answer: `You need to submit copies of passports and proof of address of the company’s participants, plus completed registration forms including information on the source of financing. Beneficiaries may need to provide proof of the origin of funds.` },
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
