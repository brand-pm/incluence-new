import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /ready-made-offshore-companies
const PAGE_DATA = {
  title: `Ready-made offshore companies`,
  description: `Opening an offshore company gives entrepreneurs various privileges, making business operations more efficient. Offshore jurisdictions allow company owners to minimize taxation, protect their assets, and start immediate business activity without waiting for lengthy registration procedures.`,
  requirements: [
    `Business activity must be conducted outside country of registration`,
    `Some jurisdictions require maintaining and filing reports`,
    `Company director residency may be required`,
    `Annual registration fee instead of corporate income tax`,
    `Bank account may already be included with the company`,
    `Power of attorney or personal visit for re-registration`,
  ],
  faq: [
    { question: `In which countries do we help with purchasing offshore companies?`, answer: `We help with the purchase of a company in any offshore jurisdiction not subject to international sanctions. The most popular are Saint Vincent and the Grenadines, Saint Lucia, Seychelles, Marshall Islands, British Virgin Islands, Vanuatu, Belize.` },
    { question: `Can I buy an offshore company online?`, answer: `Re-registration conditions depend on the legislation of the country of registration. Usually, companies are re-registered by local representatives on the basis of a power of attorney. In some countries, re-registration is possible via scanned documents.` },
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
