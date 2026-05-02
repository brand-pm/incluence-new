import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/company-registration-in-canada (1:1 copy)
const PAGE_DATA = {
  title: `Company Registration in Canada`,
  description: `Many entrepreneurs decide to establish a business in Canada because they can expect numerous advantages. For instance, this country offers relatively low taxes for small and medium-sized corporations. The local business environment is stable and transparent, allowing companies to easily attract investments and find business partners. Opening a company in Canada also enables entrepreneurs to expand their business through access to international markets.

Contact Incluence in any convenient way to receive a personal consultation. Our specialists will prepare the necessary documents, answer all your questions, and provide support at every stage.

Entrepreneurs who establish companies in Canada highlight many positive aspects of doing business here:

- Company registration in Canada without offshore status.
- No public register of beneficiaries.
- Possibility to work successfully with multiple currencies since there is no currency control.
- The right to open a bank account — you can both register a company and open an account in the same country.
- A Canadian company owner may qualify for citizenship. First, a startup visa is issued (if approved) for 1 year, with the option to extend it, combining the citizenship process with business operations.
- No requirement for a mandatory audit after company registration.
- Banks are not obligated to report balances on business accounts to tax authorities.
- Financial institutions actively work with companies in IT services, exports, and imports.
- No mandatory minimum share capital requirement.

Additionally, to avoid double taxation, Canada has agreements with 87 countries.

- The founder of the new company must be of legal age.
- They must have no outstanding criminal record.
- A valid foreign passport is required, with at least one year remaining before expiration at the time of registration.

There are also additional forms of ownership such as Limited Partnership and Limited Liability Partnership. However, they are less common among foreign entrepreneurs because Corporation offers more benefits and allows cooperation with both local and foreign partners.

- Provide copies of a valid passport and a paid utility bill for property owned by the director. These documents require notarization.
- Prepare a bank reference from the institution where the entrepreneur has an account.
- Submit an application form and questionnaire for business registration.

All documents must be submitted in the official language — translated into either French or English, depending on the province where the registration takes place.

Registering a company in Canada requires understanding the local tax system. Businesses must pay provincial, federal, and municipal taxes. Rates differ depending on the province and may change, so it’s important to confirm with official sources. The system also includes:

- A 5% goods and services tax (GST) — with exemptions for some education and healthcare services.
- A general corporate tax rate of 38%. However, depending on turnover, this rate can be reduced. A federal tax credit can lower the rate to 15%.

Entrepreneurs should also consider the Value Added Tax (VAT), which is applied on a progressive scale to businesses operating within Canada.

Some companies may qualify for tax exemptions. For example, Extra-provincial Corporations (EPC) registered in certain provinces may not pay taxes if profits are earned outside of Canada.

The ease of doing business and a clear taxation system attract more and more organizations to Canada. However, successfully registering a company here depends directly on proper planning and understanding local laws. Specialized knowledge and experience are crucial for reducing tax burdens and ensuring compliance.

Our team provides full support in registering companies in Canada, ensuring fast and effective setup. Thanks to our years of expertise, we guarantee efficient results. To discuss your project, fill out the form on the Incluence website. Our specialists will answer your questions during a consultation and help you choose the most suitable solution.`,
  sections: [
    {
      heading: `01. Choosing a Company Name in Canada`,
      body: `The client must provide 3 name options for the company. We will check their availability for registration and suggest available alternatives. If all three are taken, we will request additional options. Providing 3 names is not mandatory but speeds up the process.`,
    },
    {
      heading: `02. Document Preparation`,
      body: `The client must prepare personal documents for company registration. This can be done in parallel with stage 1. The exact list depends on the type of company, but usually includes a passport copy and proof of address. Online verification may also be required.`,
    },
    {
      heading: `03. Preparing Registration Forms`,
      body: `Based on the client’s information, we prepare the full set of documents for submission to the Registry.`,
    },
    {
      heading: `04. Submission of Documents for Registration`,
      body: `The complete set of documents is submitted to the Registry. After review, the company is added to the Registry database.`,
    },
    {
      heading: `05. Receiving Confirmation of Company Registration`,
      body: `Once the company is added to the Registry, you can view its registration details and, if needed, request certified or uncertified copies of corporate documents. Our specialists can assist with all certifications (notarization, apostille) and translations into other languages.`,
    },
    {
      heading: `06. **Requirements for a Corporation in Canada**`,
      body: `Corporation is one of the most popular forms of business. Registering a company in Canada as a non-resident requires meeting the following conditions:`,
    },
    {
      heading: `07. **Company Registration in Canada: What’s Required for a Corporation**`,
      body: `Before opening a business in Canada, you need to choose a name and check its availability in the official registry. Additionally:`,
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
    { question: `What is the timeline for registering a company in Canada?`, answer: `You can register a company in Canada in 3 weeks.` },
    { question: `Can a company in Canada be registered online?`, answer: `Yes, a company in Canada can be registered remotely through local representatives.` },
    { question: `Can a non-resident open a business in Canada?`, answer: `A non-resident who is not on sanctions lists and not a resident of a sanctioned country can register a company in Canada.` },
    { question: `What documents are required to register a company in Canada?`, answer: `To register a company in Canada, you need to provide a copy of your passport and proof of address of the company participants.` },
  ],
};

const CompanyRegistrationInCanadaPage = () => (
  <ServiceDetailPage
    slug="company-registration-in-canada"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInCanadaPage;
export { CompanyRegistrationInCanadaPage };
