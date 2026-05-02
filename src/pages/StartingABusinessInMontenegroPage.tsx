import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/starting-a-business-in-montenegro (1:1 copy)
const PAGE_DATA = {
  title: `Starting a business in Montenegro`,
  description: `Montenegro is a country in southeastern Europe that attracts hundreds of thousands of tourists annually. It is noteworthy that the locals understand both English and Russian. It is the main candidate for joining the EU in the near future, and although Montenegro gained independence only in 2006, the prospect of successful business development here is extremely high.`,
  sections: [
    {
      heading: `01. Choosing a name for a future company in Montenegro`,
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
      heading: `04. Submission of documents for registration`,
      body: `The collected package of documents is submitted to the Register. After that, the documents are processed by the registrar and the company is entered into the Register database.`,
    },
    {
      heading: `05. Obtaining confirmation of company registration`,
      body: `After entering the company into the Register, you can see its registration data in it and if necessary order paper versions of the statutory documents with or without certification. The specialists of our company will help you with all the necessary certification (notarization, apostille) and translations into other languages, if necessary.`,
    },
    {
      heading: `Additional services — Starting a business in Hungary`,
      body: `One of the best options for people wishing to open a company in Europe is to start a business in Hungary. Has about 70 agreements on the avoidance of double taxation. The popularity of starting a business in Hungary is due to the low corporate tax, the central location in Europe, and the developed economic infrastructure.`,
    },
    {
      heading: `Additional services — Register company in UK`,
      body: `Registering a company UK is an option for stable business development rather than a way to take your business offshore. There is a clear system of taxation, which implies paying taxes on profits. Moreover, competent planning of the future company structure and the right choice of organizational-legal form will help to considerably reduce the financial burden.`,
    },
    {
      heading: `Additional services — Company Registration in Canada`,
      body: `Registering a company in Canada requires knowledge of local tax legislation. It involves paying provincial, federal, and municipal taxes. Rates are determined individually in each province and may change — this information should be checked in official sources.`,
    },
  ],
  faq: [
    { question: `How to open a business in Montenegro?`, answer: `In order to register a business in Montenegro, you need to choose a name of the future company that is free for registration, collect a package of documents, and pay the necessary fees. After registering a company, you need to open a bank account. If the business involves accepting payments through the site, you should also open a merchant account.` },
    { question: `What taxes should I pay after registering a company in Montenegro?`, answer: `When registering a company in Montenegro, you only need to pay the registration fee. Obligations to pay taxes arise only after the start of the company's activities.` },
    { question: `What documents do I need to register a company in Montenegro?`, answer: `In order to register a company in Montenegro, you must submit copies of passport and confirmations of the address of company's participants. It is also necessary to submit completed registration forms, including information about the source of funding for the creation of the company. When registering, beneficiaries may be asked to confirm the origin of funds for the creation of a company.` },
    { question: `Is it possible to register a company remotely in Montenegro?`, answer: `You can register a company in Montenegro remotely by power of attorney or when visiting Montenegro.` },
  ],
};

const StartingABusinessInMontenegroPage = () => (
  <ServiceDetailPage
    slug="starting-a-business-in-montenegro"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default StartingABusinessInMontenegroPage;
export { StartingABusinessInMontenegroPage };
