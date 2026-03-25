import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-luxembourg
const PAGE_DATA = {
  title: `Company Registration in Luxembourg`,
  description: `Luxembourg offers a stable political and economic environment with full foreign ownership of businesses, favorable conditions for foreign investment, and access to EU markets through its developed banking and financial sectors.`,
  sections: [
    {
      heading: `Opening a company in Luxembourg: available business forms`,
      body: `Today, the following business forms are common in Luxembourg:\n\nSARL (LLC). The minimum share capital is EUR 21,400, which must be fully paid before registration. SARLs can issue only registered shares. If the number of shareholders exceeds 25, annual meetings must be held. SA (JSC). The minimum share capital is EUR 31,100, of which one quarter (EUR 7,750) must be paid at the time of incorporation. SA companies are required to undergo audits.`,
    },
    {
      heading: `Business registration in Luxembourg: advantages of the jurisdiction`,
      body: `When choosing a country to start a business, entrepreneurs often select Luxembourg. This is due to the following business benefits:\n\nstable political and economic environment; full foreign ownership of businesses allowed; favorable conditions for foreign investment; high level of confidentiality; access to EU markets; developed banking and financial sectors.`,
    },
    {
      heading: `Company registration in Luxembourg: taxation`,
      body: `Companies are considered tax residents of Luxembourg if:\n\nthey are incorporated in Luxembourg and have a registered office in the country; their effective management is carried out from Luxembourg.\n\nIn this case, companies are subject to:\n\nCorporate income tax. The standard rate is 17%. If company income exceeds EUR 200,000 in any period, the total tax rate reaches 24.94%. VAT. Standard rate is 17%, but it may be reduced to as low as 3% in some cases. For example, reduced VAT applies to most food products, books, pharmaceuticals, as well as water supply, broadcasting, and television services. Financial and healthcare services are exempt from VAT. Withholding tax on dividend income. A 15% rate applies when dividends are paid by one resident to another. However, if a company meets the EU Parent-Subsidiary Directive requirements and is a resident of an EU member state, it is exempt from this tax.`,
    },
    {
      heading: `What entrepreneurs should know about opening a company in Luxembourg`,
      body: `All Luxembourg companies are required to prepare financial statements.\n\nSA companies must undergo an annual audit conducted by a certified auditor. Reports must be submitted to the Trade and Companies Register within 7 months after the end of the fiscal year.\n\nSARL companies may be exempt from an audit if:\n\ntotal balance sheet does not exceed EUR 4.4 million; net turnover is below EUR 8.8 million; the company employs no more than 50 people.\n\nEntrepreneurs are also required to pay an annual state duty.\n\nA tax number is assigned to the company upon registration and submission of the necessary documents. A VAT number must be obtained if the company's annual turnover exceeds EUR 30,000.`,
    },
    {
      heading: `Requirements for registering a company in Luxembourg`,
      body: `To start a business and incorporate a Luxembourg company, different documents may be required, depending on the chosen form of business. As a rule, at least the following documents are needed:\n\nnotarized articles of association, registered in the Trade Register; founding agreement; company charter; resolution appointing directors.\n\nAdditionally, a certificate from the selected bank confirming the deposit of the company's share capital is required.\n\nIf you decide to start a business in Luxembourg, company registration will be easier and faster with our specialists. They will handle the preparation and submission of documents, the registration process, and all other formalities.`,
    },
  ],
  requirements: [
    `Notarized articles of association`,
    `Founding agreement`,
    `Company charter`,
    `Resolution appointing directors`,
    `Bank certificate confirming share capital deposit`,
    `SARL minimum share capital: EUR 21,400 (fully paid)`,
    `SA minimum share capital: EUR 31,100 (25% at incorporation)`,
    `Copies of participants' passports and proof of address`,
  ],
  faq: [
    { question: `What is the timeframe for company registration in Luxembourg?`, answer: `Usually, company registration in Luxembourg takes 2\u20133 weeks.` },
    { question: `Can a company in Luxembourg be registered online?`, answer: `A company in Luxembourg can be registered remotely through a power of attorney or via a personal visit.` },
    { question: `Can a non-resident open a business in Luxembourg?`, answer: `A non-resident can register a company in Luxembourg. You can learn all the details of setting up a business in Luxembourg for non-residents from our specialists.` },
    { question: `What documents are required to register a company in Luxembourg?`, answer: `To register a company in Luxembourg, copies of the participants' passports and proof of address are required. Registration forms must also be submitted, including information on the source of funds for company formation. Beneficiaries may be asked to provide proof of the origin of funds used to establish the company.` },
  ],
};

const CompanyRegistrationInLuxembourgPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInLuxembourgPage;
export { CompanyRegistrationInLuxembourgPage };
