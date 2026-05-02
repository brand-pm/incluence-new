import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/open-company-in-usa (1:1 copy)
const PAGE_DATA = {
  title: `Open company in USA`,
  description: `Today, the US offers many tools for running a successful business. They include huge markets of goods and services, modern developed infrastructure, a reliable legislative system, and much more.`,
  sections: [
    {
      heading: `01. Choosing the state in USA`,
      body: `The state should be chosen taking into account the specifics and region of the company's activities, the features of accounting and reporting. It is important to understand that each state has its own peculiarities of legislation and its own rules for creating and maintaining companies.`,
    },
    {
      heading: `02. Choosing a name for a future company`,
      body: `The client needs to provide 3 variant names of the company. We will check the availability of these variants for registration and offer free options for the final choice. If all three names are filled, we will ask for additional ones. Three names provision isn't a mandatory requirement, but will speed up the verification process.`,
    },
    {
      heading: `03. Preparation of documents`,
      body: `The client needs to prepare personal documents for company registration. Preparation can be carried out in parallel with the first stage. The exact list of documents depends on the characteristics of the future company. Usually, a copy of the passport and confirmation of the address of the company's participants should be provided.`,
    },
    {
      heading: `04. Preparation of registration forms`,
      body: `A package of documents is formed for submission to the Register based on the data provided by the client.`,
    },
    {
      heading: `05. Submission of documents for registration`,
      body: `The collected package of documents is submitted to the Register. After that, the documents are processed by the registrar and the company is entered into the Register database.`,
    },
    {
      heading: `06. Obtaining confirmation of company registration`,
      body: `After entering the company into the Register, you can see its registration data in it and if necessary order paper versions of the statutory documents with or without certification. The specialists of our company will help you with all the necessary certification (notarization, apostille) and translations into other languages, if necessary.`,
    },
    {
      heading: `Additional services — Starting a business in Montenegro`,
      body: `Montenegro is a country in southeastern Europe that attracts hundreds of thousands of tourists annually. It is noteworthy that the locals understand both English and Russian. It is the main candidate for joining the EU in the near future, and although Montenegro gained independence only in 2006, the prospect of successful business development here is extremely high.`,
    },
    {
      heading: `Additional services — Starting a business in Hungary`,
      body: `One of the best options for people wishing to open a company in Europe is to start a business in Hungary. Has about 70 agreements on the avoidance of double taxation. The popularity of starting a business in Hungary is due to the low corporate tax, the central location in Europe, and the developed economic infrastructure.`,
    },
    {
      heading: `Additional services — Register company in UK`,
      body: `Registering a company UK is an option for stable business development rather than a way to take your business offshore. There is a clear system of taxation, which implies paying taxes on profits. Moreover, competent planning of the future company structure and the right choice of organizational-legal form will help to considerably reduce the financial burden.`,
    },
  ],
  faq: [
    { question: `What is the cost of business registration in the USA?`, answer: `Various factors affect the final cost of the company formation in the USA. You can find out the exact cost of registering a company in the USA by contacting our specialists.` },
    { question: `How to open a company in the USA to a non-resident?`, answer: `In order to register a company in the United States, you need to choose a state for the selected type of activity, as well as check the availability of the desired name in the state registry. Depending on the state law, submit to the register data and documents of directors, shareholders and beneficiaries of the company, indicate the American address and type of activity independently or through the local secretary.` },
    { question: `What documents are required for the company to register in the USA?`, answer: `The exact list of documents depends on the rules for registering a company in the selected state. Usually, it is necessary to submit copies of passports and information about the address of company participants in order to register a company in the United States. It is also necessary to submit completed registration forms, including information about the source of funding for the creation of the company.` },
    { question: `Is it possible to register a company remotely in the USA?`, answer: `The conditions of company formation in the United States depend on the rules of a particular state. Some states allow self-registration of a company online. But the company must have a local agent and address.` },
  ],
};

const OpenCompanyInUsaPage = () => (
  <ServiceDetailPage
    slug="open-company-in-usa"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default OpenCompanyInUsaPage;
export { OpenCompanyInUsaPage };
