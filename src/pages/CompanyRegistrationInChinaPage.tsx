import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/company-registration-in-china (1:1 copy)
const PAGE_DATA = {
  title: `Company Registration in China`,
  description: `If you plan to conduct business activities in China, the experts at Incluence Limited are ready to support you at every stage of setting up your company:

We will advise you on organizational matters during the preparation and registration stage

- We will prepare a list of required documents and help you collect them.
- We will organize the proper completion and submission of mandatory forms.
- We are ready to provide consulting, legal, and other accompanying services throughout your business operations.

Our extensive experience in company registration in China has allowed us to earn the trust of major companies successfully operating in this country.

Chinese legislation is specific — it restricts the activities of foreign organizations, allowing them to operate only in two forms:

Establishing a wholly foreign-owned company with non-resident founders;

- Creating a joint venture with participants from China and other countries.

In the latter case, company registration in China may take the form of:

Equity joint ventures — combining investments;

- Cooperative enterprises — combining foreign and local partners.

In addition, there are restrictions on business types. The government allows activities in the following areas:

Manufacturing, trade, or services in China;

- Import and export of goods.

* The amount of registered capital: ranging from 500,000 to 1.5 million RMB (depending on the type of activity).

If the company name includes words such as “International,” “Investment,” or “Industrial,” the registered capital must be at least 10 million RMB. For names including “Group” or “Holding,” a minimum of 30 million RMB is required. Partial contributions can be made over several months.

The overall cost of registration

- The cost of the business license.

VAT is 16% under the general system. Under the simplified system (available for certain activities), only 4% of turnover is payable

- Corporate income tax ranges from 25–33%. Some companies may pay a progressive rate of up to 45%.

Contact our specialists for the full list of taxes and possible exemptions.

Opening a company in China is a lengthy process that can take up to 90 days and includes multiple steps. Here are the main stages:

Planning and preparation. Preparing documents, drafting the business description, choosing a name, selecting a registered address, and resolving other organizational matters

- Company registration in China. Reserving the company name, registering the entity with the State Administration for Industry and Commerce as per current regulations. Providing several name options is advisable — this is not mandatory but speeds up approval. Incluence Limited specialists will check the proposed names and confirm which ones are available.
- Registration procedure. Submitting documents and required forms to the registry. It is important to ensure proper completion of documents — professional support can save you significant time. Government fees are also paid at this stage.
- Post-registration activities. Opening bank accounts in local banks, registering licenses, notifying the tax authorities and other agencies. If needed, statutory documents can be ordered in paper form, translated, and notarized.

Before registering a company in China, you must ensure all required documentation is available. Missing documents may result in refusal. For this reason, it is best for entrepreneurs to rely on experienced Incluence Limited experts. A personal consultant will provide a full description of the required package during cooperation.

Basic documents include:

2 reference letters from a financial institution where the shareholder holds an account — for both corporate and individual shareholders

- A certified copy of an identity document. For non-residents — a foreign passport. For Chinese citizens — an ID card.
- Photographs of the director or legal representative.
- A business activity description, including registered capital and contribution timeline. Additional documents may be required depending on the business type.

If the shareholder is a legal entity, the following are also required:

3 sets of corporate documents of the parent foreign company (upon request)

- An audited report, certified by a Certified Public Accountant. This applies to foreign companies operating for more than a year and where the shareholder is a legal entity.

Before registering a company in China, all documents must be translated into Chinese and legalized at the Consulate in the country of incorporation.

On average, setting up a company in China costs at least 30,000 RMB, excluding registered capital. This budget typically includes:

Office rent;

- Opening a bank account in a local bank;.
- Government fees;.
- Licensing and other costs.

China has strict currency controls and complex legislation. For professional support on how to open a company in China, contact our specialists by phone or via our online form.`,
  sections: [
    {
      heading: `01. Choosing a Company Name in China`,
      body: `The client must provide 3 name options for the company. We will check their availability for registration and suggest free options for final selection. If all three are taken, we will ask for additional options. Submitting 3 names is not mandatory but speeds up the process.`,
    },
    {
      heading: `02. Preparing Documents`,
      body: `The client must prepare personal documents for company registration. This can be done in parallel with stage one. The exact list depends on the specifics of the future company. Usually, a passport copy and proof of address are required.`,
    },
    {
      heading: `03. Preparing Registration Forms`,
      body: `Based on the client’s data, a package of documents is prepared for submission to the Registry.`,
    },
    {
      heading: `04. Submitting Documents for Registration`,
      body: `The completed document package is submitted to the Registry. After processing, the company is entered into the official database.`,
    },
    {
      heading: `05. Receiving Company Registration Confirmation`,
      body: `Once the company is entered in the Registry, its registration details can be viewed, and statutory documents can be ordered in paper form with or without certification. Our specialists can assist with all necessary certifications and translations if needed.`,
    },
    {
      heading: `06. Key Points for Entrepreneurs`,
      body: `Before opening a company in China, you must first choose your business activity, as this will affect:`,
    },
    {
      heading: `07. Taxation in China`,
      body: `China applies corporate income tax and VAT. The tax burden depends on the type of business, and in some cases, incentives may apply. For example:`,
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
    { question: `How can a non-resident open a business in China?`, answer: `To register a business in China, you need to choose an available company name, prepare the required documents, and pay the necessary fees. After registration, you must open a bank account. If your business involves accepting online payments, you will also need a merchant account.` },
    { question: `How much does it cost to open a company in China?`, answer: `The final cost of opening a company in China depends on various factors. Contact our specialists to find out the exact price of company registration in China.` },
    { question: `What documents are required to register a company in China?`, answer: `To register a company in China, you must provide copies of shareholders’ passports and proof of address. In certain cases, additional documents may be required.` },
    { question: `Can a company in China be registered online?`, answer: `You can register a company in China remotely with the help of a local representative or by visiting in person.` },
  ],
};

const CompanyRegistrationInChinaPage = () => (
  <ServiceDetailPage
    slug="company-registration-in-china"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInChinaPage;
export { CompanyRegistrationInChinaPage };
