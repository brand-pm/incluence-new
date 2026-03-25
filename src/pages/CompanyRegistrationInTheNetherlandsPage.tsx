import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-the-netherlands
const PAGE_DATA = {
  title: `Company Registration in the Netherlands`,
  description: `The Netherlands is not considered an offshore jurisdiction and has signed treaties to avoid double taxation with 99 countries. Company registration typically attracts entrepreneurs looking to reinvest capital into subsidiary companies.`,
  requirements: [
    `Company name must not duplicate existing names`,
    `Names referencing government entities are prohibited`,
    `Special licenses required for words like “Bank”`,
    `At least one director (any residency)`,
    `At least one shareholder`,
    `BV minimum share capital: €0.01`,
    `NV minimum share capital: €45,000`,
    `Permitted suffixes: B.V., N.V., COOP`,
  ],
  faq: [
    { question: `Why do companies register in the Netherlands?`, answer: `The Netherlands is a prestigious country for company registration. Dutch companies can open EU bank accounts. The country is known for business convenience and relatively low taxes.` },
    { question: `How long does it take to register a company in the Netherlands?`, answer: `Registration takes approximately 2 weeks after all documents are submitted and fees are paid.` },
    { question: `What documents are needed to register a company in the Netherlands?`, answer: `Required documents include a copy of the passport and proof of address of company participants. Completed registration forms with information about the source of funds are also needed.` },
    { question: `Can a company be registered in the Netherlands online?`, answer: `Yes, companies can be registered remotely by power of attorney or in person in the Netherlands.` },
  ],
};

const CompanyRegistrationInTheNetherlandsPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInTheNetherlandsPage;
export { CompanyRegistrationInTheNetherlandsPage };
