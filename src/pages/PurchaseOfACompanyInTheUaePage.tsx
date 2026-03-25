import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /purchase-of-a-company-in-the-uae
const PAGE_DATA = {
  title: `Purchase of a Company in the UAE`,
  description: `When planning business expansion, many entrepreneurs choose the United Arab Emirates due to its location at the crossroads of trade routes in the Middle East. This encourages active trade, with many businesspeople operating in Asia and collaborating with partners in the Gulf states.`,
  requirements: [
    `Almost every commercial activity requires a license`,
    `Trade, industrial, or aviation licenses may be needed`,
    `LLCs and FZEs must maintain accounting records`,
    `LLCs and FZEs must file financial statements with the Registrar`,
    `IBCs are exempt from reporting requirements`,
    `Copies of participants’ passports and proof of address`,
    `Completed registration forms with source of funds info`,
    `Power of attorney or personal visit for re-registration`,
  ],
  faq: [
    { question: `How to re-register a ready-made company in the UAE?`, answer: `The seller and buyer must either issue a power of attorney or visit the UAE, prepare a copy of the passport, and complete the forms for re-registration. The finalized documents must then be submitted to the Registry.` },
    { question: `What documents are required to buy a company in the UAE?`, answer: `You need to provide copies of participants’ passports and proof of address. You must also submit completed registration forms, including information about the source of funds. Beneficiaries may need to confirm the origin of funds during re-registration.` },
    { question: `What taxes need to be paid when purchasing a company in the UAE?`, answer: `When purchasing a company in the UAE, only the registration fee needs to be paid. Tax obligations arise only after the company begins operations or if the previous owner has unpaid taxes from past activities.` },
    { question: `Can a company in the UAE be purchased online?`, answer: `A company in the UAE can be purchased remotely by power of attorney or in person during a visit to the UAE.` },
  ],
};

const PurchaseOfACompanyInTheUaePage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default PurchaseOfACompanyInTheUaePage;
export { PurchaseOfACompanyInTheUaePage };
