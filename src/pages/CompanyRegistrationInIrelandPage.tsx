import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { IrelandCompanyVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /company-registration-in-ireland
const PAGE_DATA = {
  title: `Company Registration in Ireland`,
  description: `Relatively low corporate tax rates make Ireland an attractive location for business. The country offers no double taxation thanks to agreements with over 60 countries, financially accessible registration, and no currency control.`,
  sections: [
    {
      heading: `How to Legally Register a Company in Ireland`,
      body: `Opening a company in Ireland involves many complexities. Registration depends on business type, income size, and residency of directors and employees. Many entrepreneurs seek support from experienced international law and business consulting specialists. Our team offers comprehensive services:\n\nBusiness evaluation and choice of legal form; Full company registration support; Preparation of reports.\n\nWe maintain a database of active companies, providing clients with information quickly. Company registration takes 3\u20135 business days. Experienced lawyers ensure success \u2014 over 100 companies registered in Europe with our assistance are already operating successfully.\n\nIf you have questions, submit a form and our experts will contact you promptly.`,
    },
    {
      heading: `Business Registration in Ireland`,
      body: `Relatively low corporate tax rates make Ireland an attractive location for business. Many prominent businesspeople also note other significant advantages of the jurisdiction:\n\nNo double taxation \u2014 thanks to agreements with over 60 countries worldwide. Financially accessible registration and maintenance. Low corporate tax rates \u2014 from 12.5%. The minimum rate applies to resident companies contributing to the country's economic development, which is encouraged by the government. No currency control and economic stability. No restrictions on capital export or import. Investment attractiveness due to favorable location and well-developed tourist destinations.`,
    },
    {
      heading: `Company Registration in Ireland: Legal Forms`,
      body: `To register a company in Ireland, you need:\n\ncopies of passports of all directors and shareholders, with their registered addresses; CV of the company director.\n\nTo obtain local company status, a real office address is required. Renting a space is allowed, in which case a lease agreement must be provided.\n\nBusiness registration in Ireland starts with choosing a legal form. Currently, the following forms can be registered:\n\nLimited (LTD) \u2014 a private limited company. Registration of an LTD requires at least one director, with the number of managers determined by business needs. Also requires 1 shareholder with a standard minimum capital of \u20AC100. All Irish LTD companies must have a local secretary. The director or one of the directors must reside in the EU. If an LTD opens a bank account, banks require a real office. Limited Partnership (LP) \u2014 a commercial partnership with limited liability. The company must include at least two partners, who can be foreign individuals or legal entities.`,
    },
    {
      heading: `Opening an LTD in Ireland: Reporting and Taxation`,
      body: `This is the most common form of business. Before registering an LTD in Ireland, a businessperson must study the applicable tax legislation. The company submits declarations quarterly and a financial report annually. The company must provide:\n\nAnnual return. The first report is submitted six months after registration. It contains non-financial company information, structure, and main activities. Tax Return. This is the tax declaration in a special form. The purpose is to indicate the taxable base, accompanied by the financial statements. The Tax Return is submitted within nine months after the end of the tax period.\n\nNote that if an Irish company is a VAT payer, it must submit reports quarterly, even if no sales were made during the period. All documents must be stored for at least six years after submission.\n\nTaxes Paid by a Limited Company\n\nFor LTDs in Ireland, corporate tax rates are:\n\nTrading companies \u2014 12.5%; Non-trading companies \u2014 25%.\n\nNon-trading companies are legal entities earning profits from resource development or business activities outside the country. Companies working with dividends or receiving income from sources not related to trade are included. Capital gains tax is 33%, but companies can deduct depreciation, financial losses, and other approved expenses. Losses can be applied to prior reporting periods or carried forward indefinitely.\n\nThe standard VAT rate is 23%. Rates vary by activity, with a minimum of 4.8%. VAT may be mandatory or voluntary.\n\nVAT registration is required when annual sales exceed \u20AC75,000, or service revenue exceeds \u20AC37,500. Registered companies receive a VAT number. If income is below these thresholds, VAT registration is not required, except for companies providing electronic or broadcasting services to EU consumers.\n\nOther taxes in Ireland include property tax, social security contributions, and stamp duty \u2014 from 1% for property transfer. For non-resident property, the maximum stamp duty is 2%.\n\nImportant Notes for Opening an LTD in Ireland\n\nDividends taxed at 12.5% corporate tax are considered such if received from a subsidiary trading company in Europe. Dividends are also exempt if received from companies in countries with double taxation treaties with Ireland.\n\nOtherwise, dividends are taxed at 25%. Exceptions apply to royalties paid to European organizations and non-resident companies, taxed at 0% at source.\n\nOpening a bank account is essential. In addition to having a resident director and a real office, a substantial initial deposit may be required \u2014 a condition set by many local banks.`,
    },
    {
      heading: `What you need to know about LPs before opening a company in Ireland`,
      body: `LPs are exempt from reporting and taxation, but only if they do not operate in the country of registration. The legal structure of companies registered in Ireland is similar to that in the UK, as Ireland was formerly part of it.\n\nIf you are considering registering a company in Ireland, keep in mind the main features of LP partnerships:\n\nReporting. LPs are not required to submit annual reports. However, the Beneficiary Register in Ireland is closed for such companies. Bank account. LPs cannot open a bank account. They may open an account with a payment institution in euros or in offshore banks not operating in Europe.`,
    },
  ],
  requirements: [
    `Copies of passports of all directors and shareholders`,
    `Registered addresses of directors and shareholders`,
    `CV of the company director`,
    `Real office address (lease agreement if renting)`,
    `At least one director (one must reside in the EU)`,
    `At least one shareholder`,
    `Minimum capital of \u20AC100 for LTD`,
    `Local company secretary`,
  ],
  faq: [
    { question: `What is the cost of company registration in Ireland?`, answer: `The final cost depends on various factors. You can find out the exact cost of registering a company in Ireland by contacting our specialists.` },
    { question: `How long does it take to register a company in Ireland?`, answer: `Company registration in Ireland takes 2\u20133 weeks from the submission of all documents and payment.` },
    { question: `What documents are required to register a company in Ireland?`, answer: `To register a company in Ireland, passports and proof of address of the company participants are required. In some cases, additional documents may be needed.` },
    { question: `Can a company be registered online in Ireland?`, answer: `A company in Ireland can be registered remotely via local specialists.` },
  ],
};

const CompanyRegistrationInIrelandPage = () => (
  <ServiceDetailPage
    slug="company-registration-in-ireland"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}

  />
);

export default CompanyRegistrationInIrelandPage;
export { CompanyRegistrationInIrelandPage };
