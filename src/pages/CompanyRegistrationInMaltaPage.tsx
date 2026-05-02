import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/company-registration-in-malta (1:1 copy)
const PAGE_DATA = {
  title: `Company registration in Malta`,
  description: `Malta company formation is a structured legal process that allows you to operate within the European Union under a clear regulatory system. If you plan to set up a company in Malta, you gain access to an established financial sector and a business-friendly tax framework. Many international founders choose Malta company formation to hold assets, manage trade, or run service activities across borders.

Setting up a business here is not only about registration. It is about choosing the right structure from the start and avoiding mistakes that may slow you down later.

Malta company registration begins with accurate documents and proper filing. Delays often come from small errors or incomplete submissions. Incluence helps clients register a company in Malta in a clear and organised way, handling the legal steps without confusion.

Plan to set up a company in Malta for trading, holding, or services? We'll do our best to help you.

Many entrepreneurs open company Malta structures to operate within the European Union. Company registration in Malta provides access to EU legislation and a competitive tax system, including a shareholder refund mechanism in certain cases.

Company registration in Malta takes place within a clear and consistent legal system. English is widely used in corporate documents, which simplifies communication for international founders.

Opening a company in Malta requires accurate documentation and disclosure of shareholders and directors. The rules are strict but predictable when properly prepared.

**EU market access.*

- The company can operate across the European Union under a recognised legal framework.
- **Favourable tax structure.*.
- The shareholder refund system may reduce the effective tax rate in certain cases.
- **Stable legal environment.*.
- Corporate rules are clear, and English is widely used in official documentation.

**Strict compliance requirements.*

- Reporting and disclosure obligations are detailed and must be followed carefully.
- **Transparency standards.*.
- Shareholder and director information must be properly disclosed.

Malta company incorporation follows a clear sequence:

Determine the company type, share capital, and management structure. This stage shapes how the business will operate

- Draft statutory documents, and complete registering a company in Malta through the Malta Business Registry.
- Transfer the required share capital in line with legal standards. The Malta company incorporation cost depends on the entity type and authorised capital.
- After approval, official certificates are issued, and the company becomes legally active.
- Register for tax and, if required, VAT. Properly registering a company in Malta also includes arranging accounting and compliance from the start.

Company incorporation in Malta is a practical solution for businesses seeking an EU presence. Malta company formations are suitable for trading, holding, and international service models. With our structured planning, Malta company formation becomes a clear and manageable process.`,
  sections: [
    {
      heading: `01. Choosing a name for a future company in Malta`,
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
    { question: `How long does company incorporation in Malta take?`, answer: `Usually, a few working days after documents are submitted correctly.` },
    { question: `What are Malta company formations commonly used for?`, answer: `Holding structures, consultancy services, and international trade.` },
    { question: `Is Malta company formation suitable for non-residents?`, answer: `Yes, non-residents can own and manage companies, subject to compliance rules.` },
  ],
};

const CompanyRegistrationInMaltaPage = () => (
  <ServiceDetailPage
    slug="company-registration-in-malta"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInMaltaPage;
export { CompanyRegistrationInMaltaPage };
