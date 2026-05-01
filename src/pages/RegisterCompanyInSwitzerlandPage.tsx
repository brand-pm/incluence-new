import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";


// Source: https://www.incluence.com/register-company-in-switzerland
const PAGE_DATA = {
  title: `Register company in Switzerland`,
  description: `Starting a business in Switzerland is the best option for entrepreneurs looking for trouble-free company registration and simple working conditions. The state also attracts business representatives with its stability in the legal, political, and economic spheres.`,
  sections: [
    {
      heading: `What is the benefit of registering a company in Switzerland: Company features`,
      body: `Starting a business in Switzerland is the best option for entrepreneurs looking for trouble-free company registration and simple working conditions. The state also attracts business representatives with its stability in the legal, political, and economic spheres.`,
    },
    {
      heading: `01. Choosing a name for a future company in Switzerland`,
      body: `The client needs to provide 3 variant names of the company. We will check the availability of these variants for registration and offer free options for the final choice. If all three names are filled, we will ask for additional ones. Three names provision isn't a mandatory requirement, but will speed up the verification process.`,
    },
    {
      heading: `02. Preparation of documents.`,
      body: `The client needs to prepare personal documents for company registration. Preparation can be carried out in parallel with the first stage. The exact list of documents depends on the characteristics of the future company. Usually, a copy of the passport and confirmation of the address of the company's participants, as well as a power of attorney, should be provided.`,
    },
    {
      heading: `03. Preparation of registration forms.`,
      body: `A package of documents is formed for submission to the Register based on the data provided by the client.`,
    },
    {
      heading: `04. Submission of documents for registration`,
      body: `The collected package of documents is submitted to the Register. After that, the documents are processed by the registrar and the company is entered into the Register database.`,
    },
    {
      heading: `05. Obtaining confirmation of company registration.`,
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
    { question: `What is the cost of business registration in Switzerland?`, answer: `Various factors affect the final cost of the business formation in Switzerland. You can find out the exact cost of registering a company in Switzerland by contacting our specialists.` },
    { question: `How long does it take to register a company in Switzerland?`, answer: `Company registeration in Switzerland takes about 2-3 weeks.` },
    { question: `How to start a business in Switzerland?`, answer: `In order to register a business in Switzerland, you need to choose a name of the future company that is free for registration, collect a package of documents, and pay the necessary fees. After registering a company, you need to open a bank account. If the business involves accepting payments through the site, you should also open a merchant account.` },
    { question: `Is it possible to register a company remotely in Switzerland?`, answer: `You can register a company in Switzerland remotely by power of attorney or during personal visit.` },
  ],
};

const RegisterCompanyInSwitzerlandPage = () => (
  <ServiceDetailPage
    slug="register-company-in-switzerland"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}

  />
);

export default RegisterCompanyInSwitzerlandPage;
export { RegisterCompanyInSwitzerlandPage };
