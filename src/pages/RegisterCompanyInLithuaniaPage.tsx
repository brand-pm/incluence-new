import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/register-company-in-lithuania (1:1 copy)
const PAGE_DATA = {
  title: `Register company in Lithuania`,
  description: `Lithuania company registration allows business people to enter the European market and successfully develop their businesses. It is possible due to various advantages of the state: some of the lowest corporate taxes in Europe, a stable market economy, and a loyal banking system.`,
  sections: [
    {
      heading: `01. Choosing a name for a future company in Lithuania`,
      body: `The client needs to provide 3 variant names of the company. We will check the availability of these variants for registration and offer free options for the final choice. If all three names are filled, we will ask for additional ones. Three names provision isn't a mandatory requirement, but will speed up the verification process.`,
    },
    {
      heading: `02. Preparation of documents`,
      body: `The client needs to prepare personal documents for company registration. Preparation can be carried out in parallel with the first stage. The exact list of documents depends on the characteristics of the future company. Usually, a copy of the passport and confirmation of the address of the company's participants, as well as a power of attorney, should be provided.`,
    },
    {
      heading: `03. Preparation of registration forms`,
      body: `A package of documents is formed for submission to the Register based on the data provided by the client.`,
    },
    {
      heading: `04. Contribution of authorized capital`,
      body: `After preparing the company for direct entry into the register, it is necessary to open a special bank account to deposit the authorized capital. Shareholders of the company need to contribute a share capital in the amount of 2500 euros. If there are several founders, they contribute capital in proportion to the ownership shares of the company.`,
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
    { question: `What are the terms for opening a company in Lithuania?`, answer: `The terms for opening a company in Lithuania pepends on the type of company's activity and is around 3-4 weeks.` },
    { question: `Can I register a company remotely in Lithuania?`, answer: `A company in Lithuania can be registered remotely using a power of attorney or during a personal visit.` },
    { question: `Can a non-resident open a business in Lithuania?`, answer: `A non-resident who is not included in the sanctions lists and is not a resident of the sanctioned country can open a company in Lithuania.` },
    { question: `What documents do I need to register a company in Lithuania?`, answer: `In order to register a company in Lithuania, you must submit copies of passport of company's participants. It is also necessary to submit completed registration forms.` },
  ],
};

const RegisterCompanyInLithuaniaPage = () => (
  <ServiceDetailPage
    slug="register-company-in-lithuania"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default RegisterCompanyInLithuaniaPage;
export { RegisterCompanyInLithuaniaPage };
