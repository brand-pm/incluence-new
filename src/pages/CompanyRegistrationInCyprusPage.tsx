import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-cyprus
const PAGE_DATA = {
  title: `Company Registration in Cyprus`,
  description: `Setting up a company in Cyprus is a promising undertaking. The island state is not classified as an offshore jurisdiction, offers a low corporate income tax of 12.5%, and provides full opportunities to open a local bank account.`,
  sections: [
    {
      heading: `How to register companies in Cyprus: taxation overview`,
      body: `Corporation Tax, established at 12.5%, is paid by resident organizations regardless of the type of activity and the source of income — whether on the territory of the state or abroad.\n\nIt is possible to register non-resident companies in Cyprus. Foreign firms pay tax based on the amount of income received from activities on the island. However, non-resident organizations are often viewed unfavorably by banks. Therefore, they may not be able to use all the benefits of double-taxation treaties. Thus, opening a resident company in Cyprus is considered the most promising option.\n\nIf you are interested in registering a company in Cyprus, the cost of setting up a business should include not only organizational expenses. You should consider the main taxes that apply on the island. In addition to Corporation Tax, entrepreneurs must pay:\n\nDefense tax — ranges from 3% to 30%, applicable only to residents. Value Added Tax (VAT) — the standard rate is 19%. In some cases, it can be reduced to 5% or 9%. Exports are taxed at 0%. Withholding tax — officially called Withholding Tax. Levied on residents when paying income to non-residents in the form of interest, royalties, and dividends. Can reach up to 10%. Annual Levy — a fee paid once a year, mandatory for any organization, even those not conducting actual activity. The fee is \u20AC350 and is paid annually by June 30. Late payment leads to penalties and possible company liquidation. Capital Gains Tax — tax on capital gain paid after the sale of real estate on the island or shares of companies owning such property. The tax rate is 20%.\n\nThere is also a special IP BOX regime that allows optimizing the taxable income by reducing it by 2.5% if the company consistently earns profit from intellectual property.\n\nThere is no need to fear large tax payments, but before opening a company in Cyprus it is advisable to study current legislation and rules for proper tax payment.\n\nLocal entrepreneurs also actively use tax benefits after registration, provided the legal entity was involved in registering certain intellectual property rights or its activity is related to that area.`,
    },
    {
      heading: `How to register a company in Cyprus`,
      body: `Company registration is carried out as follows:\n\nChoose a name for the future company. It's better to have several options to check them in the Registry. Collect and submit the package of documents. It is important to strictly follow requirements for documents and registration forms! Otherwise, registration may be refused. Confirmation of registration and receipt of registration documents. Preparation of translations and submission of company information to subsequent authorities.\n\nIf you plan to open a company in Cyprus, the cost of our services includes the full range of necessary actions. We suggest discussing your project — contact us using the corresponding online form.`,
    },
    {
      heading: `Company Registration in Cyprus: Key Points`,
      body: `Undoubtedly, setting up a company in Cyprus is considered a promising undertaking for several reasons:\n\nThe island state is not classified as an offshore jurisdiction and is not included in any "black" or "grey" lists. There are full opportunities to open a bank account. Thus, an entrepreneur can have an account in the same country where the company is registered. In Cyprus, company registration is always accompanied by a relatively low corporate income tax (Profit Tax), which is 12.5%. This rule applies regardless of the type of business activity. Since autumn 2017, Cyprus has been a full participant in the automatic exchange of tax information. The cost of registering substance — the actual business presence of a legal entity at the place of registration — is relatively low.\n\nLimited Company (LTD) — the business form most commonly chosen by entrepreneurs. Before registering a company in Cyprus in this form, consider:\n\nShare capital from \u20AC1,000 to \u20AC5,000, with a minimum of \u20AC1. This is the standard range. A fee of 0.6% is charged, depending on the amount of share capital. Before opening a company in Cyprus, you must appoint a secretary — this position is mandatory for LTDs. Number of directors — from 1. The director does not have to be a Cyprus resident. This requirement applies unconditionally only if the company wants to be a tax resident. Number of shareholders — from 1, individual or legal entity. Shareholder data is always kept confidential.\n\nCompany registration in Cyprus will be successful if its legal structure is properly designed. The simpler it is, the fewer issues with local authorities and the faster you will be able to open an account at any local bank.`,
    },
    {
      heading: `Proof of tax residency when opening a company in Cyprus`,
      body: `Proof is certified by an official document — a certificate. It confirms that the company is successfully registered in Cyprus and has resident status. This document allows 100% exclusion of double taxation and is issued for a specific country with an indication of the year. Local organizations are residents by default.\n\nTo register a company in Cyprus and obtain the certificate, certain requirements have been introduced. They also apply to local legal entities.\n\nThe company's management must be located on the island. If the company's interests are represented by power of attorney, it must be specific, i.e., limited to certain powers. Timely submission of reporting is mandatory.`,
    },
    {
      heading: `What to do after registering a company in Cyprus: reporting`,
      body: `Cyprus companies are required every year to:\n\nSubmit financial statements and undergo an audit. Based on the financial statements, file a tax return with the local tax authority. Provide statistical reports to the Registrar of Companies.\n\nIf you are finding out how to open a company in Cyprus, first note that the fiscal year here is the full calendar period from January 1 to December 31. Accounting books must be kept with a detailed record of financial transactions and attachments. VAT payers are required to submit quarterly VAT returns.`,
    },
    {
      heading: `Company registration in Cyprus: cost`,
      body: `Remote company registration in Cyprus is one of the services our company provides. Experienced specialists in international business management will take on your project quickly and with a high guarantee of success. Registering a company in Cyprus opens opportunities for:\n\nholding and e-commerce activities; successful international trade; facilitating import and export transactions between the EU and the CIS; obtaining the right to own intellectual property on favorable terms.\n\nNote that the pace of adopting innovations in Cyprus is extremely high. Local legal structures are becoming more structured and expanded, individualized for each entrepreneur, and have their own unique features. The speed of registration depends on the correctness of the submitted documents, but it takes at least 10\u201315 days.`,
    },
  ],
  requirements: [
    `Copies of participants' passports`,
    `Proof of address for all participants`,
    `Completed registration forms`,
    `Information about the source of funds`,
    `Share capital from \u20AC1,000 to \u20AC5,000`,
    `Company secretary (mandatory for LTDs)`,
    `At least one director and one shareholder`,
    `Company management located on the island`,
  ],
  faq: [
    { question: `How much does it cost to start a business in Cyprus?`, answer: `The final cost of starting a business in Cyprus depends on various factors. You can learn the exact cost of business registration in Cyprus by contacting our specialists.` },
    { question: `How long does company registration in Cyprus take?`, answer: `Company registration in Cyprus takes 10\u201315 business days.` },
    { question: `What documents are required to register a company in Cyprus?`, answer: `To register a company in Cyprus, it is necessary to submit copies of the participants' passports and proof of address. It is also required to submit completed registration forms, including information about the source of funds for setting up the company. Beneficiaries may be asked to provide confirmation of the origin of these funds.` },
    { question: `Can a company in Cyprus be registered online?`, answer: `A company in Cyprus can be registered remotely by proxy or by visiting Cyprus.` },
  ],
};

const CompanyRegistrationInCyprusPage = () => (
  <ServiceDetailPage
    slug="company-registration-in-cyprus"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInCyprusPage;
export { CompanyRegistrationInCyprusPage };
