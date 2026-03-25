import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-gibraltar
const PAGE_DATA = {
  title: `Company Registration in Gibraltar`,
  description: `the company does not hold accounts in local banks;the company’s directors and shareholders are non-residents;the company does not conduct business in Gibraltar and is not a partner of local firms. Minimal management requirements — one director and one shareholder of any nationality and status.`,
  requirements: [
    `Reporting requirements in Gibraltar after company registration`,
    `There are no strict requirements for financial reporting. In this dependent territory, annual reports are not mandatory, and additionally:`,
    `small companies are not required to undergo audits;there is no strict currency control`,
    `If a company is registered as a resident, specific norms and deadlines for reporting apply:`,
    `Private companies must file financial reports once every 13 months, public companies once every 10 months.Companies with income exceeding £1.25 million are required to undergo audits`,
    `Thus, a resident company can be used for ICOs or other similar purposes. In such cases, the company pays 10% corporate tax and files regular reports`,
  ],
  faq: [
    { question: `How can a non-resident register a company in Gibraltar?`, answer: `To register a company in Gibraltar, you must choose an available name for the company, prepare the required documents, and pay the registration fees. After registration, you must open a bank account. If your business involves online payments, a merch` },
    { question: `Can a company in Gibraltar be registered online?`, answer: `A company in Gibraltar can be registered remotely by power of attorney or by visiting Gibraltar in person.` },
    { question: `How much does it cost to open a company in Gibraltar?`, answer: `The final cost of opening a company in Gibraltar depends on various factors. You can find out the exact cost of company registration in Gibraltar by consulting with our specialists.` },
    { question: `What documents are required to register a company in Gibraltar?`, answer: `To register a company in Gibraltar, you need to submit copies of the participants’ passports and proof of address. You must also provide completed registration forms, including information about the source of funds for setting up the company. Benefic` },
  ],
};

const CompanyRegistrationInGibraltarPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInGibraltarPage;
export { CompanyRegistrationInGibraltarPage };
