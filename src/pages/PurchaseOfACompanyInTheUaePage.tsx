import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /purchase-of-a-company-in-the-uae
const PAGE_DATA = {
  title: `Purchase of a Company in the UAE`,
  description: `Which Company to Buy in the UAE When planning business expansion and exploring available options, many entrepreneurs choose the United Arab Emirates (UAE). This is due to several factors, including the country’s location at the crossroads of trade routes in the Middle East.`,
  requirements: [
    `What You Need to Know Before Buying a Company in the UAE`,
    `If you plan to conduct business in the Emirates, note that almost every type of commercial activity requires a license. These may include trade, industrial, aviation, and other types of licenses`,
    `When buying a company in the Emirates, keep in mind that LLCs and FZEs must maintain accounting records, prepare financial statements, and file them with the Registrar. IBCs are exempt from reporting requirements`,
    `If you decide to buy a company in the Emirates, contact Incluence. Our specialists carefully check ready-made companies and have all the necessary information about the entity you are interested in, including:`,
    `details about shareholders;absence of outstanding debts;availability of necessary licenses to conduct commercial activities`,
    `This ensures that when you buy a company in the UAE, you can be confident in its legal purity. Incluence professionals specialize in selecting verified solutions, allowing you to focus on efficiently running your business`,
    `If you want to buy a company in the UAE, we will select several options that best suit your needs. Once all details are agreed upon and a contract is signed, we will prepare the necessary documents and handle the remaining bureaucratic procedures required to complete the purchase. For a detailed consultation, contact our company directly`,
  ],
  faq: [
    { question: `How to re-register a ready-made company in the UAE?`, answer: `To re-register a company in the UAE, the seller and buyer must either issue a power of attorney or visit the UAE, prepare a copy of the passport, and complete the forms for re-registration. The finalized documents must then be submitted to the Regist` },
    { question: `What documents are required to buy a company in the UAE?`, answer: `To buy a company in the UAE, you need to provide copies of participants’ passports and proof of address. You must also submit completed registration forms, including information about the source of funds used to establish the company. Beneficiaries m` },
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
