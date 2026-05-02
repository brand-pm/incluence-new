import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/company-registration-in-croatia (1:1 copy)
const PAGE_DATA = {
  title: `Company Registration in Croatia`,
  description: `If you plan to operate in the European market, a suitable option for starting a company may be Croatia, a country promising from an investment perspective. This country is part of the European Union, which means it shares a common market with many other EU states. A special advantage is the opportunity to purchase real estate, as this right is granted only to residents and foreign entrepreneurs.

Doing business in Croatia has several advantages for entrepreneurs:

Access to tax incentives established at the legislative level;

- Stability in the country’s social and political spheres;.
- Developed infrastructure;.
- High economic growth rates.

Company registration in Croatia is also attractive due to favorable business lending options available in local banks.

Entrepreneurs interested in business registration in Croatia typically prefer opening an LLC (limited liability company). Other options are also available, such as joint-stock companies and others.

Registering a company in Croatia requires meeting several conditions. One of them is having at least one director and one shareholder. Before officially starting the company, the entrepreneur must pay the share capital. Its amount depends on the legal form of the company — for an LLC it is 20,000 HRK.

Note that there are no requirements for a company secretary. The shareholder register is public.

All companies must pay corporate income tax at a rate of 20%. However, preferential rates apply to some types of activities. For detailed consultations on this and any other issues, contact our specialists.

Company registration in Croatia also requires entrepreneurs to pay value-added tax (VAT) at 25%. Some categories of goods and services are subject to a reduced rate of 5%.

The dividend tax is 12%. No preferential rates are provided.

If you are considering company registration in Croatia, keep in mind the reporting obligations. However, audits are not required by law.

In most cases, establishing a Croatian company involves several stages. For example, a typical registration process includes three steps:

Preparation and submission of documents. These include: a copy of the passport, a short business description, a founding agreement, and several other documents

- Payment of state fees and share capital.
- Registration with Croatia’s social, insurance, and tax authorities.

Please note this is only an example of how company registration in Croatia may proceed. In practice, the process may involve many additional steps, making it difficult to get everything right on the first try without professional assistance. Moreover, the procedure can take many months, resulting in additional expenses and challenges for entrepreneurs.

If you need assistance at any stage of business registration in Croatia, our specialists will provide full legal support, handle document preparation, and register your company for you.`,
  sections: [
    {
      heading: `01. Choosing a Name for the Future Company in Croatia`,
      body: `The client must provide 3 possible names for the company. We will check the availability of these names for registration and suggest available options for the final choice. If all three options are taken, we will request additional ones. Providing 3 names is not mandatory but will speed up the process.`,
    },
    {
      heading: `02. Document Preparation`,
      body: `The client must prepare personal documents for company registration. Preparation can be done in parallel with stage one. The exact list of documents depends on the future company’s specifics. Typically, this includes a passport copy, proof of address, and a power of attorney.`,
    },
    {
      heading: `03. Preparation of Registration Forms`,
      body: `Based on the data provided by the client, a package of documents is formed for submission to the Register.`,
    },
    {
      heading: `04. Submission of Documents for Registration`,
      body: `The prepared package of documents is submitted to the Register. After submission, the documents are processed by the registrar and the company is entered into the Register’s database.`,
    },
    {
      heading: `05. Receiving Confirmation of Company Registration`,
      body: `Once the company is entered into the Register, its registration data can be found there. If necessary, paper versions of the company’s charter documents can be ordered, with or without certification. Our specialists will assist with all required certifications (notarization, apostille) and translations into other languages if needed.`,
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
    { question: `How much does it cost to start a business in Croatia?`, answer: `The final cost of starting a business in Croatia depends on the type of activity, number of participants, and other factors. You can find out the exact cost of company registration in Croatia by contacting our specialists.` },
    { question: `Can a company in Croatia be registered online?`, answer: `A company in Croatia can be registered remotely via power of attorney or by visiting Croatia.` },
    { question: `Can a non-resident open a business in Croatia?`, answer: `A non-resident who is not on sanctions lists and not a resident of a sanctioned country can open a business in Croatia.` },
    { question: `What documents are required to register a company in Croatia?`, answer: `To register a company in Croatia, you must submit copies of passports and proof of address of the company’s participants.` },
  ],
};

const CompanyRegistrationInCroatiaPage = () => (
  <ServiceDetailPage
    slug="company-registration-in-croatia"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInCroatiaPage;
export { CompanyRegistrationInCroatiaPage };
