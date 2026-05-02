import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/register-company-in-uae (1:1 copy)
const PAGE_DATA = {
  title: `Register company in UAE`,
  description: `Today, the United Arab Emirates offers a wide range of business opportunities for business people. The country provides three organizational-legal forms that have their advantages and disadvantages.

At the same time, business registration in UAE can be the best option for entrepreneurs who want to obtain a residence permit in this state. To do this, it is enough to open a company of a certain type and apply for a residency visa.`,
  sections: [
    {
      heading: `01. Choosing the Emirate and the zone (a mainland or a free zone)`,
      body: `The Emirate and the Zone should be chosen taking into account the specifics and region of the company's activities, the features of accounting and reporting. It is important to understand that each Emirate and each Zone has its own peculiarities of legislation and its own rules for creating and maintaining companies.`,
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
      heading: `04. Office rent`,
      body: `In order to register a company, you need a contact address in the Registration Area. Usually, a small office or flexi desk is rented for this.`,
    },
    {
      heading: `05. Preparation of registration forms`,
      body: `A package of documents is formed for submission to the Register based on the data provided by the client.`,
    },
    {
      heading: `06. Submission of documents for registration`,
      body: `The collected package of documents is submitted to the Register. After that, the documents are processed by the registrar and the company is entered into the Register database.`,
    },
    {
      heading: `07. Obtaining confirmation of company registration`,
      body: `After entering the company into the Register, you can see its registration data in it and if necessary order paper versions of the statutory documents with or without certification. The specialists of our company will help you with all the necessary certification and translations into other languages, if necessary.`,
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
    { question: `What is the cost of business registration in the UAE?`, answer: `Various factors affect the final cost of the company formation in the UAE. You can find out the exact cost of registering a company in the UAE by contacting our specialists.` },
    { question: `How to open a company in the UAE?`, answer: `In order to register a company in the UAE, you must select the territory of registration (the mainland or a free zone) and the desired emirate. You should prepare a package of documents, submit documents for registering a company and obtaining a license for the selected type of activity in accordance with the requirements of the Emirate and the type of company.` },
    { question: `What documents are required for the company’s registration in the UAE?`, answer: `In order to register a company in the UAE, you must submit copies of passport and confirmations of the address of company's participants. It is also necessary to submit completed registration forms, including information about the source of funding for the creation of the company. When registering, beneficiaries may be asked to confirm the origin of funds for the creation of a company.` },
    { question: `Is it possible to register a company remotely in the UAE?`, answer: `You can register a company in the UAE remotely by power of attorney or when visiting the UAE.` },
  ],
};

const RegisterCompanyInUaePage = () => (
  <ServiceDetailPage
    slug="register-company-in-uae"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default RegisterCompanyInUaePage;
export { RegisterCompanyInUaePage };
