import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-gibraltar
const PAGE_DATA = {
  title: `Company Registration in Gibraltar`,
  description: `Gibraltar is located on the Iberian Peninsula and is a European territory of the United Kingdom with its own jurisdiction and a unique tax system. A low corporate tax rate of 10% has been in effect since 2011.`,
  sections: [
    {
      heading: `How to open a non-resident company in Gibraltar`,
      body: `On Gibraltar's territory, registering a non-resident company is possible if the following conditions are met:\n\nthe company does not hold accounts in local banks; the company's directors and shareholders are non-residents; the company does not conduct business in Gibraltar and is not a partner of local firms.\n\nIf these conditions are met, the legal entity is exempt from taxes. Registration is simplified thanks to:\n\nMinimal management requirements \u2014 one director and one shareholder of any nationality and status. Copies of identity documents are required. In Gibraltar, the company must have: a registered office address, a secretary, and a company seal. Registration can be completed remotely (through a representative).\n\nA non-resident company is typically registered when it is necessary to:\n\nProtect and maintain confidentiality of existing assets. Register and use marine or aircraft assets for commercial purposes, including within the EU. Register vehicles tax-free.\n\nStandard steps for opening a company include choosing a unique company name, paying registration fees, and opening an account (e.g., through a payment system). In brief, the process looks like this:\n\nSelecting a name and checking its availability. Preparing personal documents for company registration. Preparing and submitting registration forms to the relevant authorities. Receiving registration confirmation.`,
    },
    {
      heading: `How to register a company in Gibraltar`,
      body: `Despite its flexibility, the process of registering companies in Gibraltar involves certain challenges:\n\nSpecial requirements for documentation submission apply. Resident companies must comply with strict deadlines and procedures for financial reporting.\n\nOpening accounts is given particular attention \u2014 this is a simple and straightforward process without unnecessary bureaucracy. Financial institutions provide a wide range of services, including a personal manager.\n\nNevertheless, doing business within the European Union requires compliance with international law. Therefore, to simplify company registration and reporting in Gibraltar, we recommend contacting our experts. Let's discuss your project \u2014 fill out the online form, and we'll get in touch with you.`,
    },
    {
      heading: `Company Registration in Gibraltar: introductory information`,
      body: `Gibraltar is located on the Iberian Peninsula and is considered a European territory of the United Kingdom. It has its own jurisdiction and a unique tax system. Some additional facts:\n\nOfficial languages \u2014 Llanito (vernacular), English. Currency \u2014 British pound sterling. Legal system \u2014 common law.\n\nThe territory is home to only about 34,000 people. However, close ties with the UK and international relations with EU member states create extensive opportunities for international business development. Many entrepreneurs have already taken advantage of the vast number of opportunities for commercial growth.`,
    },
    {
      heading: `Taxation features after company registration in Gibraltar`,
      body: `Before opening a company in Gibraltar, it is recommended to study the local tax system, which is highly beneficial for entrepreneurs. Since 2011, a low corporate tax rate of 10% has been in effect here. This allows Gibraltar to compete with Switzerland, Hungary, Slovakia, the Czech Republic, and other EU countries with favorable tax regimes. Moreover, only resident companies are subject to corporate tax; non-resident firms pay no taxes.\n\nThus, registering a company in Gibraltar is attractive for international trade because:\n\nthere is no property tax; no capital gains tax; no inheritance or gift tax.\n\nFor those who want to conduct international business from Gibraltar, there are additional benefits:\n\nno VAT; no tax on profits; confidentiality of beneficiary lists.\n\nGibraltar is not a tax haven, and the jurisdiction is on the FATCA and OECD white lists.`,
    },
    {
      heading: `Reporting requirements in Gibraltar after company registration`,
      body: `There are no strict requirements for financial reporting. In this dependent territory, annual reports are not mandatory, and additionally:\n\nsmall companies are not required to undergo audits; there is no strict currency control.\n\nIf a company is registered as a resident, specific norms and deadlines for reporting apply:\n\nPrivate companies must file financial reports once every 13 months, public companies once every 10 months. Companies with income exceeding \u00A31.25 million are required to undergo audits.\n\nThus, a resident company can be used for ICOs or other similar purposes. In such cases, the company pays 10% corporate tax and files regular reports.`,
    },
  ],
  requirements: [
    `One director and one shareholder of any nationality`,
    `Copies of identity documents`,
    `Registered office address in Gibraltar`,
    `Company secretary`,
    `Company seal`,
    `No annual reports required for non-residents`,
    `No strict currency control`,
    `Audits required for income exceeding \u00A31.25 million`,
  ],
  faq: [
    { question: `How can a non-resident register a company in Gibraltar?`, answer: `To register a company in Gibraltar, you must choose an available name for the company, prepare the required documents, and pay the registration fees. After registration, you must open a bank account. If your business involves online payments, a merchant account is also required.` },
    { question: `Can a company in Gibraltar be registered online?`, answer: `A company in Gibraltar can be registered remotely by power of attorney or by visiting Gibraltar in person.` },
    { question: `How much does it cost to open a company in Gibraltar?`, answer: `The final cost of opening a company in Gibraltar depends on various factors. You can find out the exact cost of company registration in Gibraltar by consulting with our specialists.` },
    { question: `What documents are required to register a company in Gibraltar?`, answer: `To register a company in Gibraltar, you need to submit copies of the participants' passports and proof of address. You must also provide completed registration forms, including information about the source of funds for setting up the company. Beneficiaries may be required to provide confirmation of the origin of funds.` },
  ],
};

const CompanyRegistrationInGibraltarPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInGibraltarPage;
export { CompanyRegistrationInGibraltarPage };
