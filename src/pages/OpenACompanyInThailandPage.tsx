import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/open-a-company-in-thailand (1:1 copy)
const PAGE_DATA = {
  title: `Open a Company in Thailand`,
  description: `Businesspeople interested in Southeast Asia are recommended to pay attention to Thailand. If an entrepreneur is aiming for success and approaches planning carefully, this country can become the right place to realize all business ideas. The reason is that Thailand has a rapidly developing economy, and the government actively supports small and medium-sized businesses.

The country places great emphasis on attracting foreign investors. In particular, there is a special investment program that allows entrepreneurs to enjoy corporate tax exemption for up to 8 years. The greatest chance of receiving such a benefit is for entrepreneurs who decide to open a company in Thailand to engage in:

- scientific research;
- educational activities related to advanced technologies;
- licensing certain technologies, with the intention of introducing them to the market in the future.

In other words, if you decide to open a business in Thailand in the field of high technology, you will have the maximum chances of obtaining corporate tax exemption.

If you decide to open a company in Thailand, the process involves the following steps:

- Choosing a name for the company.
- Drafting the Articles of Association.
- Holding a shareholders’ meeting.
- Direct company registration.
- Registering with the Revenue Department and obtaining a Tax ID. If the annual turnover exceeds 1.8 million Thai baht, a VAT certificate will also be required.

The most common option is opening a company in Thailand as a Limited Company. The minimum authorized capital is 15 Thai baht. There are no requirements regarding its payment.

Please note that when opening a Thai company, a one-time registration fee must be paid. The amount depends on the authorized capital and is determined individually. For detailed consultation on this or any other matter, contact our specialists.

If you decide to register a company in Thailand, you will need to prepare a certain set of documents. The list may vary depending on several conditions, including the business sector. If, along with company registration, you also wish to open a bank account, you will need at least:

- proof of residence and copies of passports of the director and shareholders;
- a list of several possible names for the future company;
- a brief description of the business model and activities.

When opening a business in Thailand, keep in mind that you need at least one director and no fewer than three shareholders. There are no requirements regarding their residency.

Self-registration of a company in Thailand is a complex and time-consuming process. An experienced entrepreneur can complete it quickly, but for a beginner, it may take many months.

Contact our company to save time and effort. Our specialists will quickly register a company in Thailand for you and provide full support at every stage of the procedure.`,
  sections: [
    {
      heading: `01. Choosing a name for the future company in Thailand`,
      body: `The client must provide 3 possible company names. We will check their availability for registration and suggest available options for the final choice. If all three options are taken, we will request additional ones. Providing 3 names is not mandatory but speeds up the verification process.`,
    },
    {
      heading: `02. Preparing documents`,
      body: `The client must prepare personal documents for company registration. Preparation can be done in parallel with the first stage. The exact list depends on the specifics of the future company. Typically, a passport copy, proof of address of participants, and a power of attorney are provided.`,
    },
    {
      heading: `03. Preparing registration forms`,
      body: `Based on the client’s data, we prepare a set of documents for submission to the Register.`,
    },
    {
      heading: `04. Submitting documents for registration`,
      body: `The prepared set of documents is submitted to the Register. After that, the registrar processes them and the company is entered into the Register database.`,
    },
    {
      heading: `05. Obtaining confirmation of company registration`,
      body: `After the company is entered into the Register, its registration details become available, and statutory documents can be ordered in paper form with or without certification. Our specialists will help with all necessary certifications (notarization, apostille) and, if required, translations into other languages.`,
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
    { question: `How much does it cost to open a business in Thailand?`, answer: `The final cost of opening a business in Thailand depends on the type of activity, number of participants, and other factors. You can find out the exact cost of company registration in Thailand by contacting our specialists.` },
    { question: `Can a company in Thailand be registered online?`, answer: `A company in Thailand can be registered remotely via power of attorney or by visiting Thailand in person.` },
    { question: `Can a non-resident open a business in Thailand?`, answer: `A non-resident who is not under sanctions and not a citizen of a sanctioned country can open a business in Thailand.` },
    { question: `What documents are required to register a company in Thailand?`, answer: `To register a company in Thailand, you need to provide copies of passports and proof of address of the company’s participants.` },
  ],
};

const OpenACompanyInThailandPage = () => (
  <ServiceDetailPage
    slug="open-a-company-in-thailand"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default OpenACompanyInThailandPage;
export { OpenACompanyInThailandPage };
