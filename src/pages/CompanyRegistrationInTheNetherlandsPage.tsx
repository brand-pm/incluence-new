import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-the-netherlands
const PAGE_DATA = {
  title: `Company Registration in the Netherlands`,
  description: `Who May Be Interested in Registering a Company in the Netherlands According to the legislation of many countries, the Netherlands is not considered an offshore jurisdiction. The country has signed treaties to avoid double taxation with 99 countries.`,
  requirements: [
    `Company Registration in the Netherlands: Naming Requirements`,
    `The company name must not duplicate or closely resemble existing names. Names referring directly or indirectly to government entities are prohibited`,
    `Some words, such as “Insurance” or “Bank,” require special licenses`,
    `Permitted suffixes include B.V., N.V., COOP, and any words reflecting the company’s business activities`,
    `Company Registration in the Netherlands: Naming Requirements`,
    `The company name must not duplicate or closely resemble existing names. Names referring directly or indirectly to government entities are prohibited`,
    `Some words, such as “Insurance” or “Bank,” require special licenses`,
    `Permitted suffixes include B.V., N.V., COOP, and any words reflecting the company’s business activities`,
  ],
  faq: [
    { question: `Why do companies register in the Netherlands?`, answer: `The Netherlands is a prestigious country for company registration. Dutch companies can open EU bank accounts. The country is known for business convenience and relatively low taxes.` },
    { question: `How long does it take to register a company in the Netherlands?`, answer: `Registration takes approximately 2 weeks after all documents are submitted and fees are paid.` },
    { question: `What documents are needed to register a company in the Netherlands?`, answer: `Required documents include a copy of the passport and proof of address of company participants. Completed registration forms with information about the source of funds are also needed. Beneficiaries may be asked to provide proof of fund origin.` },
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
