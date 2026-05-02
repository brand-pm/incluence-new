import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/company-registration-in-luxembourg (1:1 copy)
const PAGE_DATA = {
  title: `Company Registration in Luxembourg`,
  description: `The Grand Duchy of Luxembourg is a small state in Western Europe and a major financial center. Banks in this country hold large volumes of assets, and the state’s main income comes from the banking sector, tourism, and the metallurgical industry.

Company registration in Luxembourg attracts many entrepreneurs, as the country offers multiple business opportunities. Entrepreneurs can not only conduct business but also optimize taxation thanks to special tax incentives.

Today, the following business forms are common in Luxembourg:

- SARL (LLC). The minimum share capital is EUR 21,400, which must be fully paid before registration. SARLs can issue only registered shares. If the number of shareholders exceeds 25, annual meetings must be held.
- SA (JSC). The minimum share capital is EUR 31,100, of which one quarter (EUR 7,750) must be paid at the time of incorporation. SA companies are required to undergo audits.

When choosing a country to start a business, entrepreneurs often select Luxembourg. This is due to the following business benefits:

- stable political and economic environment;
- full foreign ownership of businesses allowed;
- favorable conditions for foreign investment;
- high level of confidentiality;
- access to EU markets;
- developed banking and financial sectors.

Companies are considered tax residents of Luxembourg if:

- they are incorporated in Luxembourg and have a registered office in the country;
- their effective management is carried out from Luxembourg.

In this case, companies are subject to:

- Corporate income tax. The standard rate is 17%. If company income exceeds EUR 200,000 in any period, the total tax rate reaches 24.94%.
- VAT. Standard rate is 17%, but it may be reduced to as low as 3% in some cases. For example, reduced VAT applies to most food products, books, pharmaceuticals, as well as water supply, broadcasting, and television services. Financial and healthcare services are exempt from VAT.
- Withholding tax on dividend income. A 15% rate applies when dividends are paid by one resident to another. However, if a company meets the EU Parent-Subsidiary Directive requirements and is a resident of an EU member state, it is exempt from this tax.

All Luxembourg companies are required to prepare financial statements.

SA companies must undergo an annual audit conducted by a certified auditor. Reports must be submitted to the Trade and Companies Register within 7 months after the end of the fiscal year.

SARL companies may be exempt from an audit if:

- total balance sheet does not exceed EUR 4.4 million;
- net turnover is below EUR 8.8 million;
- the company employs no more than 50 people.

Entrepreneurs are also required to pay an annual state duty.

A tax number is assigned to the company upon registration and submission of the necessary documents. A VAT number must be obtained if the company’s annual turnover exceeds EUR 30,000.

To start a business and incorporate a Luxembourg company, different documents may be required, depending on the chosen form of business. As a rule, at least the following documents are needed:

- notarized articles of association, registered in the Trade Register;
- founding agreement;
- company charter;
- resolution appointing directors.

Additionally, a certificate from the selected bank confirming the deposit of the company’s share capital is required.

If you decide to start a business in Luxembourg, company registration will be easier and faster with our specialists. They will handle the preparation and submission of documents, the registration process, and all other formalities.`,
  sections: [
    {
      heading: `01. Choosing a name for the future company in Luxembourg`,
      body: `The client must provide 3 options for the company name. We will check the availability of these options for registration and suggest free options for the final choice. If all three options are unavailable, we will request additional names. Providing 3 names is not mandatory but will speed up the process.`,
    },
    {
      heading: `02. Document preparation`,
      body: `The client must prepare personal documents for company registration. This can be done in parallel with Stage 1. The exact list depends on the future company’s specifics. Usually, a copy of the passport, proof of address, and a power of attorney are required.`,
    },
    {
      heading: `03. Preparation of registration forms`,
      body: `Based on the data provided by the client, a package of documents is prepared for submission to the Register.`,
    },
    {
      heading: `04. Submission of documents for registration`,
      body: `The completed package of documents is submitted to the Register. After that, the registrar processes the documents, and the company is added to the Register database.`,
    },
    {
      heading: `05. Receiving confirmation of company registration`,
      body: `Once the company is entered into the Register, its registration details become available, and paper versions of statutory documents can be ordered with or without certification. Our specialists can assist with all necessary certifications (notarial certification, apostille) and translations if required.`,
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
    { question: `What is the timeframe for company registration in Luxembourg?`, answer: `Usually, company registration in Luxembourg takes 2–3 weeks.` },
    { question: `Can a company in Luxembourg be registered online?`, answer: `A company in Luxembourg can be registered remotely through a power of attorney or via a personal visit.` },
    { question: `Can a non-resident open a business in Luxembourg?`, answer: `A non-resident can register a company in Luxembourg. You can learn all the details of setting up a business in Luxembourg for non-residents from our specialists.` },
    { question: `What documents are required to register a company in Luxembourg?`, answer: `To register a company in Luxembourg, copies of the participants’ passports and proof of address are required. Registration forms must also be submitted, including information on the source of funds for company formation. Beneficiaries may be asked to provide proof of the origin of funds used to establish the company.` },
  ],
};

const CompanyRegistrationInLuxembourgPage = () => (
  <ServiceDetailPage
    slug="company-registration-in-luxembourg"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInLuxembourgPage;
export { CompanyRegistrationInLuxembourgPage };
