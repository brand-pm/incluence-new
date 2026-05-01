import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/register-company-in-uk (1:1 copy)
const PAGE_DATA = {
  title: `Register company in UK`,
  description: `Registering a company UK is an option for stable business development rather than a way to take your business offshore. There is a clear system of taxation, which implies paying taxes on profits. Moreover, competent planning of the future company structure and the right choice of organizational-legal form will help to considerably reduce the financial burden.`,
  sections: [
    {
      heading: `01. Choosing a name for a future company in UK`,
      body: `The client needs to provide 3 variant names of the company. We will check the availability of these variants for registration and offer free options for the final choice. If all three names are filled, we will ask for additional ones. Three names provision isn't a mandatory requirement, but will speed up the verification process.`,
    },
    {
      heading: `02. Preparation of documents`,
      body: `The client needs to prepare personal documents for company registration. Preparation can be carried out in parallel with the first stage. The exact list of documents depends on the characteristics of the future company. Usually, a copy of the passport and confirmation of the address of the company's participants should be provided. Online verification may be required.`,
    },
    {
      heading: `03. Preparation of registration forms`,
      body: `A package of documents is formed for submission to the Register based on the data provided by the client.`,
    },
    {
      heading: `04. Submission of documents for registration`,
      body: `The collected package of documents is submitted to the Register. After that, the documents are processed by the registrar and the company is entered into the Register database.`,
    },
    {
      heading: `05. Obtaining confirmation of company registration`,
      body: `After entering the company into the Register, you can see its registration data in it and if necessary order paper versions of the statutory documents with or without certification. The specialists of our company will help you with all the necessary certification (notarization, apostille) and translations into other languages, if necessary.`,
    },
  ],
  faq: [
    {
      question: `What is the cost of registering companies in UK?`,
      answer: `Various factors affect the final cost of UK company registration. You can find out the exact cost of registering a company in UK by contacting our specialists.`,
    },
    {
      question: `How to register a company in the UK?`,
      answer: `It is necessary to submit to the registry data and documents of directors, shareholders and beneficiaries of the company, indicate the British address, describe the company itself in order to register a company in the UK. Registration requires a prior authorization. A company in Britain can be easily and quickly registered with the assistance of experienced intermediaries.`,
    },
    {
      question: `What documents are required for the company's registration in UK?`,
      answer: `Scan copy of passport or ID card and proof of address are required standardly for company formation in UK. In some cases, additional documents may be required. You can always find out the exact list of documents for your case from our specialists.`,
    },
    {
      question: `How to check company registration in the UK?`,
      answer: `All existing UK companies, as well as liquidated companies, are visible in the Companies House register. Anyone can check a company by name for free and without registration. The name, date of registration, registration number and participants of the company are visible in the register.`,
    },
  ],
};

const RegisterCompanyInUkPage = () => (
  <ServiceDetailPage
    slug="register-company-in-uk"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default RegisterCompanyInUkPage;
export { RegisterCompanyInUkPage };
