import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/company-registration-in-poland (1:1 copy)
const PAGE_DATA = {
  title: `Company Registration in Poland`,
  description: `Incluence Limited has been working in the legal services market for many years. The extensive experience of our experts allows us to arrange seamless company registration in Poland. Cooperation with us is advantageous, as we provide an individual approach to each partner.

Our specialists carefully review the client’s available documents and requirements for organizing the future business, assessing the prospects and registration timeframes. We will ensure that the submission of documents proceeds without delays. If subsequent legal support is needed, we are ready to be your partners during business operations in Poland.

Within the European Union, Poland ranks sixth in terms of economy size and is one of the fastest-growing countries in Europe. Its well-developed legal and banking systems, as well as the simple company registration procedure, make the country an attractive option for starting and running a business.

To open a company, one must be familiar with local regulations. However, in Poland the registration process is relatively straightforward. Ukrainian entrepreneurs should keep in mind two key aspects when opening a new company:

- You cannot register a company without a Polish identification number (PESEL). It is issued to both Polish citizens and non-residents.
- A company in Poland can be registered in any available legal form. The choice must be made carefully, as it affects service costs, company taxation, reporting volumes, and much more. Foreigners may establish a limited partnership, joint-stock limited partnership, joint-stock company, or a limited liability company (Sp. Z.o.o.).

There are two main ways to register a company in Poland:

- **In person.** You will need to travel to the country twice: to register the company and to open a bank account for depositing share capital. The statutory minimum share capital is set at 5,000 PLN — one of the lowest in the European Union.
- **By proxy.** This requires a power of attorney for a Polish representative, notarized copies of passports translated into Polish, as well as a bank statement.

Company registration in Poland is only available to adult founders without criminal records. A valid international passport is required.

The cost of opening a company in Poland depends on many factors and is always determined individually. Entrepreneurs should also keep in mind potential ongoing expenses after registration:

- from 100 PLN per month for accounting services, depending on the number of bank transactions;
- around 60 PLN for payroll calculation if employees are based in Poland;
- approximately 2,000 PLN for office rental.

Having employees and a rented office in Poland is necessary for running a fully legal business and for opening a bank account.

If you are interested in remote company registration in Poland, the cost of the online procedure will depend on the following steps:

- creating a trusted profile on Poland’s Electronic Public Services Platform (ePUAP);
- consultations with our specialists;
- payment of state fees;
- notarial certification of each founder’s signature;
- sending the document package to Poland.

It is difficult to precisely estimate financial expenses related to company registration, since in some cases notarized acts are required, and notary fees may vary.

Registering a company in Poland requires payment of the following taxes:

- The standard corporate tax is 19%. Since January 2019, it has been reduced to 9% for small companies with annual turnover not exceeding €1.2 million.
- Tax on the director’s salary.
- Social security contributions of 30–36%.

The standard VAT rate is 23%. However, there are exceptions where reduced or zero rates apply:

- 5% — for livestock, agricultural goods, as well as books and magazines in print or electronic format;
- 8% — for construction of residential buildings and certain catering services;
- 0% — for export of goods to other EU member states.

Companies with annual turnover below 200,000 PLN (around €45,000) are exempt from VAT.

However, some types of business activities are not eligible for VAT exemption. This applies to companies providing legal, consulting, or jewelry services; selling precious items or new vehicles; and certain other activities.

Registering a company in Poland offers several benefits for Ukrainian entrepreneurs:

- low maintenance costs compared to other EU countries;
- low corporate tax rate for small businesses;
- a prestigious jurisdiction with favorable taxation and high business security.

It is worth noting that even online company registration in Poland can serve as grounds for obtaining permanent residency. To qualify:

- the company must have a stable annual income of over €13,000 (exact requirements depend on the region);
- the company must employ at least 2 Polish citizens on a full-time, indefinite basis.

Ukrainian entrepreneurs have several options for setting up a company in Poland. Self-registration is very complex and requires knowledge of many laws and regulations. That’s why we offer comprehensive services for company registration in Poland either online or by proxy. Cooperation with us is structured in stages, making the entire process convenient and clear for any entrepreneur:

- **Choosing a name.** It is best to prepare several options to increase the chances of finding an available one in the Register.
- **Preparing documents.** Most likely, notarized copies of participants’ identity documents will be required. The complete package is determined individually depending on the chosen legal form.
- **Filling out registration forms.** Accuracy is crucial, otherwise registration may be denied.
- **Submitting documents to the Register.** If the package meets requirements, the company’s data is entered into the Register. Confirmation of successful registration appears in official sources. At this point, statutory documents can be printed and business activities can commence.

If you are interested in company registration in Poland, we calculate service costs individually for each client, taking into account all mandatory payments, your company’s type of activity, and specific operations.

If you need additional assistance with opening a company in Poland, contact our specialists at any time. To begin cooperation, fill out the online application and wait for a specialist’s call shortly.`,
  sections: [
    {
      heading: `01. Choosing a name for the future company in Poland`,
      body: `The client must provide 3 name options for the company. We will check their availability and suggest free options for the final selection. If all three are taken, we will request additional options. Providing 3 names is not mandatory but will speed up the verification process.`,
    },
    {
      heading: `02. Preparing documents`,
      body: `The client must prepare personal documents for company registration. This can be done in parallel with stage one. The exact list depends on the specifics of the future company. Usually, a copy of the passport, proof of address, and a power of attorney are required.`,
    },
    {
      heading: `03. Preparing registration forms`,
      body: `Based on the client’s data, a document package is prepared for submission to the Register.`,
    },
    {
      heading: `04. Submitting documents for registration`,
      body: `The collected package of documents is submitted to the Register. After this, the registrar processes the documents and the company is entered into the Register database.`,
    },
    {
      heading: `05. Receiving confirmation of company registration`,
      body: `After the company is entered into the Register, its registration details become available, and statutory documents can be requested in paper form with or without certification. Our specialists will assist with all necessary certifications (notarization, apostille) and translations if required.`,
    },
    {
      heading: `06. **Company Registration in Poland: Cost of Procedure and What Affects It**`,
      body: `Opening an Sp. Z.o.o. in Poland involves a number of additional (non-mandatory) procedures, such as producing a company seal. If you are interested in opening a company in Poland, our specialists will calculate the exact cost of the procedure.`,
    },
    {
      heading: `07. **Company Registration in Poland and VAT Exemptions**`,
      body: `In some cases, businesses are exempt from VAT. In such situations, invoices are marked with “zw” (zwolniony).`,
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
    { question: `What is the cost of company registration in Poland?`, answer: `The final cost of establishing a company in Poland depends on various factors. You can learn the exact cost of company registration in Poland by contacting our specialists.` },
    { question: `How long does it take to register a company in Poland?`, answer: `Company registration in Poland takes about 3 weeks after receiving all original documents and payment.` },
    { question: `What documents are required to register a company in Poland?`, answer: `For company registration in Poland, notarized copies of participants’ passports, shareholders’ powers of attorney, and registration forms are required. All documents must be in original form.` },
    { question: `Can a company in Poland be registered online?`, answer: `A company in Poland can be registered remotely by proxy or by visiting Poland.` },
  ],
};

const CompanyRegistrationInPolandPage = () => (
  <ServiceDetailPage
    slug="company-registration-in-poland"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInPolandPage;
export { CompanyRegistrationInPolandPage };
