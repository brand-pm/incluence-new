import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-gibraltar
const PAGE_DATA = {
  title: `Company Registration in Gibraltar`,
  description: `Gibraltar is located on the Iberian Peninsula and is a European territory of the United Kingdom with its own jurisdiction and a unique tax system. A low corporate tax rate of 10% has been in effect since 2011.`,
  requirements: [
    `One director and one shareholder of any nationality`,
    `Copies of identity documents`,
    `Registered office address in Gibraltar`,
    `Company secretary`,
    `Company seal`,
    `No annual reports required for non-residents`,
    `No strict currency control`,
    `Audits required for income exceeding £1.25 million`,
  ],
  faq: [
    { question: `How can a non-resident register a company in Gibraltar?`, answer: `To register a company in Gibraltar, you must choose an available name, prepare the required documents, and pay the registration fees. After registration, you must open a bank account. If your business involves online payments, a merchant account is also required.` },
    { question: `Can a company in Gibraltar be registered online?`, answer: `A company in Gibraltar can be registered remotely by power of attorney or by visiting Gibraltar in person.` },
    { question: `How much does it cost to open a company in Gibraltar?`, answer: `The final cost of opening a company in Gibraltar depends on various factors. You can find out the exact cost of company registration in Gibraltar by consulting with our specialists.` },
    { question: `What documents are required to register a company in Gibraltar?`, answer: `To register a company in Gibraltar, you need to submit copies of the participants’ passports and proof of address. You must also provide completed registration forms, including information about the source of funds for setting up the company.` },
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
