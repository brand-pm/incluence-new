import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/company-registration-in-gibraltar (1:1 copy)
const PAGE_DATA = {
  title: `Company Registration in Gibraltar`,
  description: `Small Gibraltar has become one of the active centers of business. If the process of opening a company is approached correctly, stable operations in the European market and steady profit are guaranteed. The only nuance is that it is important to follow the registration procedure and local legislation. Specialists from Incluence Limited can assist you with this.

We have extensive experience working in Europe and are ready to support your company at every stage of cooperation: from handling document submission to final approval. Later, we provide ongoing legal support for your business activities.

Gibraltar is located on the Iberian Peninsula and is considered a European territory of the United Kingdom. It has its own jurisdiction and a unique tax system. Some additional facts:

Official languages — Llanito (vernacular), English

- Currency — British pound sterling.
- Legal system — common law.

The territory is home to only about 34,000 people. However, close ties with the UK and international relations with EU member states create extensive opportunities for international business development. Many entrepreneurs have already taken advantage of the vast number of opportunities for commercial growth.

Before opening a company in Gibraltar, it is recommended to study the local tax system, which is highly beneficial for entrepreneurs. Since 2011, a low corporate tax rate of 10% has been in effect here. This allows Gibraltar to compete with Switzerland, Hungary, Slovakia, the Czech Republic, and other EU countries with favorable tax regimes. Moreover, only resident companies are subject to corporate tax; non-resident firms pay no taxes.

Thus, registering a company in Gibraltar is attractive for international trade because:

there is no property tax;

- no capital gains tax;.
- no inheritance or gift tax.

For those who want to conduct international business from Gibraltar, there are additional benefits:

no VAT;

- no tax on profits;.
- confidentiality of beneficiary lists.

Gibraltar is not a tax haven, and the jurisdiction is on the FATCA and OECD white lists.

On Gibraltar’s territory, registering a non-resident company is possible if the following conditions are met:

the company does not hold accounts in local banks;

- the company’s directors and shareholders are non-residents;.
- the company does not conduct business in Gibraltar and is not a partner of local firms.

If these conditions are met, the legal entity is exempt from taxes. Registration is simplified thanks to:

Minimal management requirements — one director and one shareholder of any nationality and status. Copies of identity documents are required

- In Gibraltar, the company must have: a registered office address, a secretary, and a company seal.
- Registration can be completed remotely (through a representative).

A non-resident company is typically registered when it is necessary to:

Protect and maintain confidentiality of existing assets

- Register and use marine or aircraft assets for commercial purposes, including within the EU.
- Register vehicles tax-free.

Standard steps for opening a company include choosing a unique company name, paying registration fees, and opening an account (e.g., through a payment system). In brief, the process looks like this:

Selecting a name and checking its availability

- Preparing personal documents for company registration.
- Preparing and submitting registration forms to the relevant authorities.
- Receiving registration confirmation.

There are no strict requirements for financial reporting. In this dependent territory, annual reports are not mandatory, and additionally:

small companies are not required to undergo audits;

- there is no strict currency control.

If a company is registered as a resident, specific norms and deadlines for reporting apply:

Private companies must file financial reports once every 13 months, public companies once every 10 months

- Companies with income exceeding £1.25 million are required to undergo audits.

Thus, a resident company can be used for ICOs or other similar purposes. In such cases, the company pays 10% corporate tax and files regular reports.

Despite its flexibility, the process of registering companies in Gibraltar involves certain challenges:

Special requirements for documentation submission apply

- Resident companies must comply with strict deadlines and procedures for financial reporting.

Opening accounts is given particular attention — this is a simple and straightforward process without unnecessary bureaucracy. Financial institutions provide a wide range of services, including a personal manager.

Nevertheless, doing business within the European Union requires compliance with international law. Therefore, to simplify company registration and reporting in Gibraltar, we recommend contacting our experts. Let’s discuss your project — fill out the online form, and we’ll get in touch with you.`,
  sections: [
    {
      heading: `01. Choosing a name for your future company in Gibraltar`,
      body: `The client must provide 3 name options for the company. We will check their availability and propose free options for final selection. If all three are unavailable, we will request additional options. Providing 3 names is not mandatory but will speed up the process.`,
    },
    {
      heading: `02. Document preparation`,
      body: `The client must prepare personal documents for company registration. This can be done in parallel with the first stage. The exact list of documents depends on the specifics of the future company. Typically, a passport copy and proof of address are required.`,
    },
    {
      heading: `03. Preparation of registration forms`,
      body: `Based on the client’s submitted data, a package of documents is prepared for submission to the Register.`,
    },
    {
      heading: `04. Submission of registration documents`,
      body: `The prepared document package is submitted to the Register. The registrar then processes the documents, and the company is entered into the Register’s database.`,
    },
    {
      heading: `05. Obtaining registration confirmation`,
      body: `After the company is entered into the Register, its registration details can be viewed there. If needed, certified or non-certified copies of the statutory documents can be ordered. Our specialists will assist with all necessary certifications (notarization, apostille) and translations into other languages if required.`,
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
    { question: `How can a non-resident register a company in Gibraltar?`, answer: `To register a company in Gibraltar, you must choose an available name for the company, prepare the required documents, and pay the registration fees. After registration, you must open a bank account. If your business involves online payments, a merchant account is also required.` },
    { question: `Can a company in Gibraltar be registered online?`, answer: `A company in Gibraltar can be registered remotely by power of attorney or by visiting Gibraltar in person.` },
    { question: `How much does it cost to open a company in Gibraltar?`, answer: `The final cost of opening a company in Gibraltar depends on various factors. You can find out the exact cost of company registration in Gibraltar by consulting with our specialists.` },
    { question: `What documents are required to register a company in Gibraltar?`, answer: `To register a company in Gibraltar, you need to submit copies of the participants’ passports and proof of address. You must also provide completed registration forms, including information about the source of funds for setting up the company. Beneficiaries may be required to provide confirmation of the origin of funds.` },
  ],
};

const CompanyRegistrationInGibraltarPage = () => (
  <ServiceDetailPage
    slug="company-registration-in-gibraltar"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInGibraltarPage;
export { CompanyRegistrationInGibraltarPage };
