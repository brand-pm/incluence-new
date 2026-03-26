import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";


// Source: service-texts.md | URL: /purchase-of-a-company-in-the-uae
const PAGE_DATA = {
  title: `Purchase of a Company in the UAE`,
  description: `When planning business expansion, many entrepreneurs choose the United Arab Emirates due to its location at the crossroads of trade routes in the Middle East. This encourages active trade, with many businesspeople operating in Asia and collaborating with partners in the Gulf states.`,
  sections: [
    {
      heading: `Which Company to Buy in the UAE`,
      body: `When planning business expansion and exploring available options, many entrepreneurs choose the United Arab Emirates (UAE). This is due to several factors, including the country's location at the crossroads of trade routes in the Middle East. This encourages active trade, with many businesspeople being citizens of other countries whose goal is to operate in Asia and collaborate with partners in the Gulf states.`,
    },
    {
      heading: `Why Buy a Company in the Emirates: Benefits for Entrepreneurs`,
      body: `If you decide to buy a company in the UAE, such a transaction will provide you with a number of advantages. Among them:\n\nEnglish is spoken almost everywhere in the Emirates, which greatly simplifies cooperation with business partners. The UAE has no currency control, so you can use both the local dirham and foreign currencies such as the euro or US dollar. The vast majority of companies operating in the UAE are exempt from corporate income tax. Exceptions include businesses in certain sectors, such as oil & gas or banking. If you plan to import goods into the UAE market, the company is only subject to a customs duty of 5% of the value declared.`,
    },
    {
      heading: `What Type of Company Can Be Purchased in the Emirates: Legal Forms`,
      body: `Today you can buy a company in the UAE in two formats:\n\nA "clean" firm, which has not conducted any transactions and has no obligations to the state or third parties; a company actively trading, signing contracts with partners, and generating revenue.\n\nMost entrepreneurs looking to purchase a ready-made business choose one of the following legal forms:\n\nLLC \u2014 resident for tax purposes. Once registered in one of the Emirates, an LLC can operate throughout the UAE. FZE \u2014 created by residents and only within a specific free economic zone where it is allowed to operate. Business in the rest of the UAE is prohibited. Such firms are exempt from taxation. IBC \u2014 registered in the UAE but can only trade outside the country. This is a popular option among foreign entrepreneurs wishing to buy a company in the Emirates.`,
    },
    {
      heading: `What You Need to Know Before Buying a Company in the UAE`,
      body: `If you plan to conduct business in the Emirates, note that almost every type of commercial activity requires a license. These may include trade, industrial, aviation, and other types of licenses.\n\nWhen buying a company in the Emirates, keep in mind that LLCs and FZEs must maintain accounting records, prepare financial statements, and file them with the Registrar. IBCs are exempt from reporting requirements.\n\nIf you decide to buy a company in the Emirates, contact Incluence. Our specialists carefully check ready-made companies and have all the necessary information about the entity you are interested in, including:\n\nDetails about shareholders; absence of outstanding debts; availability of necessary licenses to conduct commercial activities.\n\nThis ensures that when you buy a company in the UAE, you can be confident in its legal purity. Incluence professionals specialize in selecting verified solutions, allowing you to focus on efficiently running your business.\n\nIf you want to buy a company in the UAE, we will select several options that best suit your needs. Once all details are agreed upon and a contract is signed, we will prepare the necessary documents and handle the remaining bureaucratic procedures required to complete the purchase. For a detailed consultation, contact our company directly.`,
    },
  ],
  requirements: [
    `Almost every commercial activity requires a license`,
    `Trade, industrial, or aviation licenses may be needed`,
    `LLCs and FZEs must maintain accounting records`,
    `LLCs and FZEs must file financial statements with the Registrar`,
    `IBCs are exempt from reporting requirements`,
    `Copies of participants' passports and proof of address`,
    `Completed registration forms with source of funds info`,
    `Power of attorney or personal visit for re-registration`,
  ],
  faq: [
    { question: `How to re-register a ready-made company in the UAE?`, answer: `To re-register a company in the UAE, the seller and buyer must either issue a power of attorney or visit the UAE, prepare a copy of the passport, and complete the forms for re-registration. The finalized documents must then be submitted to the Registry.` },
    { question: `What documents are required to buy a company in the UAE?`, answer: `To buy a company in the UAE, you need to provide copies of participants' passports and proof of address. You must also submit completed registration forms, including information about the source of funds used to establish the company. Beneficiaries may also be asked to provide confirmation of the origin of funds during re-registration.` },
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
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}

  />
);

export default PurchaseOfACompanyInTheUaePage;
export { PurchaseOfACompanyInTheUaePage };
