import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /ready-made-offshore-companies
const PAGE_DATA = {
  title: `Ready-made offshore companies`,
  description: `How to choose and buy an offshore company: features of acquiring a ready-made firm Opening an offshore company gives entrepreneurs various privileges, making business operations more efficient.`,
  requirements: [
    `Where to buy ready-made offshore companies: choosing a jurisdiction`,
    `Today, buying a company offshore is very easy if you decide to contact our company. We will take care of all the necessary procedures, fill out documents, and formalize the deal. However, you first need to choose the country where the sale of ready-made offshore companies is possible`,
    `There are several options depending on your requirements for the jurisdiction and the company being acquired`,
    `Where to buy an offshore: classic options`,
    `This group includes countries that exempt companies registered in their territory from taxes. At the same time, when buying an offshore company, entrepreneurs must remember that business activity must be conducted outside the country of registration. Tax exemption is granted only under these conditions`,
    `Offshore sales are possible in the following classic offshore jurisdictions:`,
    `Belize; Bahamas; Mauritius; Panama; British Virgin Islands; Saint Vincent and the Grenadines; Saint Lucia; Vanuatu, and others`,
    `Where to buy offshores with minimal taxation`,
    `Purchasing a ready-made offshore in any of these countries provides entrepreneurs with very low tax rates. An additional advantage is that under certain conditions, companies may be completely exempt from taxation`,
    `It is important to remember that in many countries, buying an offshore company requires compliance with certain conditions: maintaining and filing reports, residency of the company director, etc`,
  ],
  faq: [
    { question: `In which countries do we help with purchasing offshore companies?`, answer: `We will gladly help with the purchase of a company in any offshore jurisdiction not subject to international sanctions. The most popular are Saint Vincent and the Grenadines, Saint Lucia, Seychelles, Marshall Islands, British Virgin Islands, Vanuatu,` },
    { question: `Can I buy an offshore company online?`, answer: `The detailed conditions for re-registration of a company upon purchase depend on the legislation of the country of registration. Usually, companies are re-registered by local representatives on the basis of a power of attorney. A company can also be ` },
    { question: `How long does the process of buying an offshore company take?`, answer: `The conditions for re-registering an offshore company depend on the country of registration. Usually, the purchase process takes up to 3 weeks.` },
  ],
};

const ReadyMadeOffshoreCompaniesPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default ReadyMadeOffshoreCompaniesPage;
export { ReadyMadeOffshoreCompaniesPage };
