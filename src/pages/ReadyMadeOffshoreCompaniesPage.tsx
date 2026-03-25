import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { BVIOffshoreVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /ready-made-offshore-companies
const PAGE_DATA = {
  title: `Ready-made offshore companies`,
  description: `Opening an offshore company gives entrepreneurs various privileges, making business operations more efficient. Offshore jurisdictions allow company owners to minimize taxation or obtain tax benefits, protect their assets, and more.`,
  sections: [
    {
      heading: `How to choose and buy an offshore company: features of acquiring a ready-made firm`,
      body: `Opening an offshore company gives entrepreneurs various privileges, making business operations more efficient. Offshore jurisdictions allow company owners to minimize taxation or obtain tax benefits, protect their assets, and more. However, sometimes a ready-made offshore is required, which can be purchased by contacting our specialists.\n\nIf entrepreneurs urgently need offshore companies, ready-made ones are a suitable option, since they allow immediate business activity without waiting for lengthy registration and related procedures.\n\nBuying offshore companies saves a lot of time and effort, but first you need to choose the right firm. Our company's specialists will help you with this by thoroughly analyzing your requirements and then offering several options to choose from.`,
    },
    {
      heading: `Buying an offshore company: advantages of the procedure`,
      body: `If you need an offshore company, you should buy it for several reasons:\n\nBy purchasing a ready-made offshore in certain jurisdictions, an entrepreneur is exempt from paying corporate income tax, with only an annual registration fee required instead. You can obtain a ready-made offshore company in minimal time, provided that our professionals handle the preparation and paperwork. Buying offshore companies allows entrepreneurs to choose from a wide range of legal forms. You can buy offshore companies in countries where annual audits are not mandatory, reducing maintenance costs. Entrepreneurs can purchase offshore firms that already have an open bank account. Offshore companies are recommended for entrepreneurs who value a high degree of confidentiality, as in many jurisdictions, business ownership information is not publicly accessible and can only be disclosed by court order.`,
    },
    {
      heading: `Where to buy ready-made offshore companies: choosing a jurisdiction`,
      body: `Today, buying a company offshore is very easy if you decide to contact our company. We will take care of all the necessary procedures, fill out documents, and formalize the deal. However, you first need to choose the country where the sale of ready-made offshore companies is possible.\n\nThere are several options depending on your requirements for the jurisdiction and the company being acquired.\n\nWhere to buy an offshore: classic options\nThis group includes countries that exempt companies registered in their territory from taxes. At the same time, when buying an offshore company, entrepreneurs must remember that business activity must be conducted outside the country of registration. Tax exemption is granted only under these conditions.\n\nOffshore sales are possible in the following classic offshore jurisdictions:\n\nBelize; Bahamas; Mauritius; Panama; British Virgin Islands; Saint Vincent and the Grenadines; Saint Lucia; Vanuatu, and others.`,
    },
    {
      heading: `Where to buy offshores with minimal taxation`,
      body: `Purchasing a ready-made offshore in any of these countries provides entrepreneurs with very low tax rates. An additional advantage is that under certain conditions, companies may be completely exempt from taxation.\n\nIt is important to remember that in many countries, buying an offshore company requires compliance with certain conditions: maintaining and filing reports, residency of the company director, etc.\n\nIf you are interested in such an offshore, the sale of companies in this zone usually requires a mandatory tax payment at a relatively low rate of 9\u201312%. But if you choose a country with a territorial taxation system, the business may be completely exempt from taxes. This applies to companies that do not derive income from sources in the country of registration and do not operate within its territory. Instead of tax, an annual fee of about $100 must be paid to the state budget. This system applies in Saint Vincent and the Grenadines and several other offshore jurisdictions.\n\nReady-made offshore companies with tax incentives\nYou can also buy a ready-made company in a so-called "midshore" jurisdiction, which enjoys international respectability while still offering attractive tax incentives to business owners. To gain these benefits, simply choose one of the countries in this group. If such offshores interest you, companies can be purchased in midshore jurisdictions such as the United Kingdom and Hong Kong.\n\nFor additional advice on how to buy offshore companies in a specific jurisdiction, contact our specialists.`,
    },
    {
      heading: `What to consider before buying an offshore company`,
      body: `There is no country where buying a company with an already opened bank account is prohibited. However, there are several nuances:\n\nBy deciding to buy an offshore, you can later change the signatory of the existing account. At the same time, you must notify the bank of this change. The bank's staff will then carry out checks on your identity and the company's activities. There is no guarantee that the bank will agree to keep the account open. If not, you will need to open a new account, repeating the procedure.\n\nTo avoid possible difficulties and increase your chances of bank approval, seek personal advice and assistance from Incluence specialists.`,
    },
    {
      heading: `Buying an offshore company: features of choosing a jurisdiction`,
      body: `If you are choosing a country for future foreign trade, pay attention to certain nuances:\n\nReputation. If you need to buy a midshore company that must look reputable, consider the United Kingdom. This country is generally more attractive to potential business partners. Location. Ready-made offshores should be purchased after determining where your main suppliers and customers are located and understanding the customs requirements. For example, when working with China, Hong Kong is often chosen. Business partners. Some suppliers impose strict requirements on jurisdiction. Therefore, if you buy a ready-made offshore in, for example, the Seychelles, you may face categorical refusals from counterparties.\n\nOur specialists take all these nuances into account and will help you choose suitable ready-made offshores. We offer companies in many jurisdictions, so we can easily find the right option for you.`,
    },
  ],
  requirements: [
    `Business activity must be conducted outside country of registration`,
    `Some jurisdictions require maintaining and filing reports`,
    `Company director residency may be required`,
    `Annual registration fee instead of corporate income tax`,
    `Bank account may already be included with the company`,
    `Power of attorney or personal visit for re-registration`,
  ],
  faq: [
    { question: `In which countries do we help with purchasing offshore companies?`, answer: `We will gladly help with the purchase of a company in any offshore jurisdiction not subject to international sanctions. The most popular are Saint Vincent and the Grenadines, Saint Lucia, Seychelles, Marshall Islands, British Virgin Islands, Vanuatu, Belize.` },
    { question: `Can I buy an offshore company online?`, answer: `The detailed conditions for re-registration of a company upon purchase depend on the legislation of the country of registration. Usually, companies are re-registered by local representatives on the basis of a power of attorney. A company can also be re-registered during a personal visit of the registrar in the required country. In some countries, a company can be re-registered via local representatives using scanned documents. You can choose a company for purchase online.` },
    { question: `How long does the process of buying an offshore company take?`, answer: `The conditions for re-registering an offshore company depend on the country of registration. Usually, the purchase process takes up to 3 weeks.` },
  ],
};

const ReadyMadeOffshoreCompaniesPage = () => (
  <ServiceDetailPage
    slug="ready-made-offshore-companies"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
    heroVisual={<BVIOffshoreVisual />}

  />
);

export default ReadyMadeOffshoreCompaniesPage;
export { ReadyMadeOffshoreCompaniesPage };
