import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/register-company-in-bulgaria (1:1 copy)
const PAGE_DATA = {
  title: `Register company in Bulgaria`,
  description: `Bulgaria is an EU country with an attractive tax system. This country is not offshore and is distinguished by minimal corporate tax in the EU and the absence of double taxation with many states.

Starting a business in Bulgaria is beneficial for businessmen:

Corporate tax rate is 10%

- The tax rate for the source of payment is 5%.
- International Financial Reporting Standards (IFRS) can be applied instead of local standards.
- Bulgaria is a member of the Hague Convention, so company documents can be apostilled.
- Relatively low cost of the procedure of opening a company.
- Opening a company and an account within the same state.
- Bulgaria is a member of the European Union, so the companies of this country have all the privileges available to the EU member countries.

Before starting a business in Bulgaria, businessmen should familiarize themselves with all the subtleties of running a business in this country. The positive sides of Bulgarian enterprises:

Strong reputation due to the absence of an offshore image

- Low-income tax rate.
- The state is not mentioned in the List of Organizational and Legal Forms of Non-Residents Not Paying Corporate Taxes.
- Bulgarian banks set low rates for the maintenance of corporate accounts.

Despite the advantages, Bulgaria company registration includes several subtleties:

The firm must keep accounting, monthly financial and tax reports

- Medium and large companies must be audited.
- Due to the low prevalence of the language of documentation and communication, an official translation of the primary accounting documents is required.
- Tax may be levied when profits are transferred abroad.
- The register of members and directors of the firm is available.

The taxation system in this country is based on the common rules of the European Union and the loyal attitude of the local tax authorities. If you decide to register company in Bulgaria, remember that there are two rates of VAT in the state:

20% value-added tax, which applies to all major categories of income sources

- If the company is engaged in international cargo transportation or deliveries related to international transport, the VAT rate will be 0%.

If you decide to start business in Bulgaria, the tax on dividend payments will be 5%, but the rate can also be reduced to 0%. It is possible if payments are made to a parent company registered in the EU.

If services and consumer goods are purchased for the company and used during the operation of the company, the tax will also be refunded. These can be personal computers, laptops, production machines, utilities, and so on.`,
  sections: [
    {
      heading: `01. Choosing a name for a future company in Bulgaria`,
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
    { question: `How much does it cost to open a company in Bulgaria?`, answer: `Various factors affect the final cost of Bulgarian company registration. You can find out the exact cost of registering a company in Bulgaria by contacting our specialists.` },
    { question: `How long does it take to register a company in Bulgaria?`, answer: `Registration of a company in Bulgaria takes around 2 weeks after receiving all documents in originals and payment.` },
    { question: `What documents are required for the company’s registration in Bulgaria?`, answer: `In order to register a company in Bulgaria you will need notarized copies of the passports of the company's participants, tax numbers, powers of attorney from shareholders, and registration forms. All documents must be in hard copies.` },
    { question: `Is it possible to register a company remotely in Bulgaria?`, answer: `The company in Bulgaria may be opened remotely by proxy or when visiting Bulgaria.` },
  ],
};

const RegisterCompanyInBulgariaPage = () => (
  <ServiceDetailPage
    slug="register-company-in-bulgaria"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default RegisterCompanyInBulgariaPage;
export { RegisterCompanyInBulgariaPage };
