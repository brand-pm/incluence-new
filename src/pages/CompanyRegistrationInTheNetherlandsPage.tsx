import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { NetherlandsCompanyVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /company-registration-in-the-netherlands
const PAGE_DATA = {
  title: `Company Registration in the Netherlands`,
  description: `The Netherlands is not considered an offshore jurisdiction and has signed treaties to avoid double taxation with 99 countries. Company registration typically attracts entrepreneurs looking to reinvest capital into subsidiary companies.`,
  sections: [
    {
      heading: `Who May Be Interested in Registering a Company in the Netherlands`,
      body: `According to the legislation of many countries, the Netherlands is not considered an offshore jurisdiction. The country has signed treaties to avoid double taxation with 99 countries.\n\nCompany registration in the Netherlands typically attracts entrepreneurs looking to reinvest personal offshore capital into subsidiary companies. This opens up broad opportunities for asset redistribution and sales, including real estate.`,
    },
    {
      heading: `Business Registration in the Netherlands: Taxation Features`,
      body: `Since January 1, 2011, corporate tax rates in the Netherlands are 20% or 25%. The lower rate applies to companies with profits up to \u20AC200,000, while the higher rate applies to profits above this threshold.\n\nCapital gains tax and stamp duty are 0%.\n\nNo withholding tax applies to the following types of income:\n\nInterest; Royalties.\n\nDividends are taxed at 15% unless exemptions apply.\n\nValue-added tax (VAT) is 21%, but favorable rates of 6% or 0% are available, making company registration in the Netherlands advantageous.`,
    },
    {
      heading: `Company Operation in the Netherlands: Regulatory Framework`,
      body: `The legal forms of businesses and their structures are defined in Book 2 of the Dutch Civil Code.\n\nCorporate taxation is governed by the 1969 Corporate Income Tax Act.\n\nA company must have at least one director, who can be an individual or legal entity of any residency. Director information is public.\n\nEach company must have at least one shareholder. Shareholder information is accessible only to other shareholders.\n\nAnnual meetings of shareholders and directors are mandatory.`,
    },
    {
      heading: `Advantages of Opening a Private Foundation in the Netherlands`,
      body: `A Stichting Administratiekantoor (private foundation) can act as a shareholder in a BV, allowing the beneficial owner to hold all foundation certificates.\n\nThe foundation can be established by notarial deed and registered with the Dutch Trade Register. It is tax-transparent, requires no audit, and can own assets, including shares in domestic or foreign companies. Certificates representing ownership can be held by any individual or legal entity, with personal data remaining private.`,
    },
    {
      heading: `Factors Affecting the Cost of Company Registration in the Netherlands`,
      body: `Registration costs depend on the chosen legal form. The most popular form is a private limited liability company (BV), with a symbolic minimum capital of \u20AC0.01 and at least one director and one shareholder.\n\nOther options include a public limited company (NV) with a minimum capital of \u20AC45,000 and at least one director and shareholder.\n\nCooperative (UA) and limited partnership (CV) forms require at least two shareholders and one director; UA does not require a beneficiary, while CV can have an anonymous one. Directors and shareholders can be individuals or legal entities.`,
    },
    {
      heading: `Company Registration in the Netherlands: Naming Requirements`,
      body: `The company name must not duplicate or closely resemble existing names. Names referring directly or indirectly to government entities are prohibited.\n\nSome words, such as "Insurance" or "Bank," require special licenses.\n\nPermitted suffixes include B.V., N.V., COOP, and any words reflecting the company's business activities.`,
    },
  ],
  requirements: [
    `Company name must not duplicate existing names`,
    `Names referencing government entities are prohibited`,
    `Special licenses required for words like "Bank"`,
    `At least one director (any residency)`,
    `At least one shareholder`,
    `BV minimum share capital: \u20AC0.01`,
    `NV minimum share capital: \u20AC45,000`,
    `Permitted suffixes: B.V., N.V., COOP`,
  ],
  faq: [
    { question: `Why do companies register in the Netherlands?`, answer: `The Netherlands is a prestigious country for company registration. Dutch companies can open EU bank accounts. The country is known for business convenience and relatively low taxes.` },
    { question: `How long does it take to register a company in the Netherlands?`, answer: `Registration takes approximately 2 weeks after all documents are submitted and fees are paid.` },
    { question: `What documents are needed to register a company in the Netherlands?`, answer: `Required documents include a copy of the passport and proof of address of company participants. Completed registration forms with information about the source of funds are also needed. Beneficiaries may be asked to provide proof of fund origin.` },
    { question: `Can a company be registered in the Netherlands online?`, answer: `Yes, companies can be registered remotely by power of attorney or in person in the Netherlands.` },
  ],
};

const CompanyRegistrationInTheNetherlandsPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
    heroVisual={<NetherlandsCompanyVisual />}

  />
);

export default CompanyRegistrationInTheNetherlandsPage;
export { CompanyRegistrationInTheNetherlandsPage };
