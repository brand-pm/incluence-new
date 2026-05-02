import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/company-registration-in-germany (1:1 copy)
const PAGE_DATA = {
  title: `Company Registration in Germany`,
  description: `If an entrepreneur wants to do business in a safe environment, Germany may be the right choice — a country characterized by stability in social and political spheres. Its attractiveness is also due to several other factors: a developed banking system, a stable economy, a large solvent market, as well as a favorable climate for small and medium-sized businesses. Moreover, a company established in Germany immediately inspires trust from suppliers, partners, and clients.

It is important to note that company registration in Germany is quite a labor-intensive process that includes several stages. In some cases, the procedure can take 6–7 months or even longer. To make company registration in Germany faster and smoother for entrepreneurs, we recommend seeking qualified assistance from our specialists.

When setting up a company in Germany, entrepreneurs can expect a number of advantages after successful registration. These include:

German companies have the status of reliable partners in the global market. This increases interest in cooperation with such firms from foreign businesses

- Registering a company in Germany allows business owners to cross the Schengen zone border multiple times. They can also issue invitations on behalf of the company, enabling their partners to obtain work and visitor visas to enter the country.
- No limits are imposed on the export or transfer of capital.
- Company owners are entitled to export equipment, machinery, and other goods without customs duties and VAT.
- Business registration in Germany gives access to international markets. To achieve this, one can freely open a branch in any EU country.

If you decide to register a company in Germany, the first step is to choose a legal form. Under current legislation, entrepreneurs have several options, with the most popular being a Limited Liability Company (GmbH). To register a GmbH in Germany, a share capital of at least €25,000 is required.

In some cases, entrepreneurs choose to open a UG (mini GmbH), since the minimum share capital is only €1. Company registration for a UG in Germany follows a simplified procedure.

However, there are certain nuances with this form:

25% of profits must be allocated to the share capital until it reaches €25,000;

- Partners often distrust UG companies, as the simplified registration increases the risk of entering into contracts with unreliable entrepreneurs.

Once the legal form has been chosen, the process of opening a company in Germany begins. This involves numerous steps, various procedures, preparation of a significant number of documents, and more.

Since company registration in Germany can be challenging, we recommend seeking assistance from our specialists. We provide comprehensive legal support, handle bureaucratic procedures, and will register a company in Germany for you.`,
  sections: [
    {
      heading: `01. Choosing a name for the future company in Germany`,
      body: `The client must provide 3 name options for the company. We will check their availability for registration and suggest available alternatives for final selection. If all three are taken, we will ask for more options. Providing 3 names is not mandatory, but it speeds up the verification process.`,
    },
    {
      heading: `02. Document preparation`,
      body: `The client must prepare personal documents required for company registration. This can be done in parallel with stage one. The exact list depends on the company’s specifics. Typically, a copy of the participant’s passport, proof of address, and a power of attorney are required.`,
    },
    {
      heading: `03. Preparation of registration forms`,
      body: `Based on the data provided by the client, we prepare the document package for submission to the Registry.`,
    },
    {
      heading: `04. Submission of registration documents`,
      body: `The prepared document package is submitted to the Registry. After submission, the documents are processed by the registrar, and the company is entered into the Registry database.`,
    },
    {
      heading: `05. Receiving confirmation of company registration`,
      body: `Once the company is entered into the Registry, its registration details can be viewed, and certified or uncertified copies of statutory documents can be ordered if needed. Our specialists will assist with all required certifications (notarization, apostille) and translations into other languages.`,
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
    { question: `How much does it cost to start a business in Germany?`, answer: `The final cost of starting a business in Germany depends on the type of activity, number of participants, and other factors. To find out the exact cost of company registration in Germany for your case, please contact our specialists.` },
    { question: `Can a company in Germany be registered online?`, answer: `A company in Germany can be registered remotely via power of attorney or by visiting the country in person.` },
    { question: `Can a non-resident open a business in Germany?`, answer: `A non-resident who is not on a sanctions list and is not a resident of a sanctioned state may register a company in Germany.` },
    { question: `What documents are required to register a company in Germany?`, answer: `To register a company in Germany, copies of passports and proof of address of the company’s participants are required. You must also submit completed registration forms, including information on the source of funding for the company’s establishment.` },
  ],
};

const CompanyRegistrationInGermanyPage = () => (
  <ServiceDetailPage
    slug="company-registration-in-germany"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInGermanyPage;
export { CompanyRegistrationInGermanyPage };
