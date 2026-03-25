import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /register-company-in-bulgaria
const PAGE_DATA = {
  title: `Register company in Bulgaria`,
  description: `Starting a business in Bulgaria is beneficial for businessmen due to a 10% corporate tax rate, EU membership, and the ability to apply International Financial Reporting Standards. Bulgaria is a member of the Hague Convention, so company documents can be apostilled.`,
  sections: [
    {
      heading: `Bulgaria company registration: The advantages of opening a business in Bulgaria`,
      body: `Starting a business in Bulgaria is beneficial for businessmen:\n\nCorporate tax rate is 10%. The tax rate for the source of payment is 5%. International Financial Reporting Standards (IFRS) can be applied instead of local standards. Bulgaria is a member of the Hague Convention, so company documents can be apostilled. Relatively low cost of the procedure of opening a company. Opening a company and an account within the same state. Bulgaria is a member of the European Union, so the companies of this country have all the privileges available to the EU member countries.`,
    },
    {
      heading: `Opening a business in Bulgaria: Specifics of company operations`,
      body: `Before starting a business in Bulgaria, businessmen should familiarize themselves with all the subtleties of running a business in this country. The positive sides of Bulgarian enterprises:\n\nStrong reputation due to the absence of an offshore image. Low-income tax rate. The state is not mentioned in the List of Organizational and Legal Forms of Non-Residents Not Paying Corporate Taxes. Bulgarian banks set low rates for the maintenance of corporate accounts.\n\nDespite the advantages, Bulgaria company registration includes several subtleties:\n\nThe firm must keep accounting, monthly financial and tax reports. Medium and large companies must be audited. Due to the low prevalence of the language of documentation and communication, an official translation of the primary accounting documents is required. Tax may be levied when profits are transferred abroad. The register of members and directors of the firm is available.`,
    },
    {
      heading: `Company registration in Bulgaria and essential information about taxes`,
      body: `The taxation system in this country is based on the common rules of the European Union and the loyal attitude of the local tax authorities. If you decide to register company in Bulgaria, remember that there are two rates of VAT in the state:\n\n20% value-added tax, which applies to all major categories of income sources. If the company is engaged in international cargo transportation or deliveries related to international transport, the VAT rate will be 0%.\n\nIf you decide to start business in Bulgaria, the tax on dividend payments will be 5%, but the rate can also be reduced to 0%. It is possible if payments are made to a parent company registered in the EU.\n\nIf services and consumer goods are purchased for the company and used during the operation of the company, the tax will also be refunded. These can be personal computers, laptops, production machines, utilities, and so on.`,
    },
    {
      heading: `How to open a company in Bulgaria: What a businessman needs to know`,
      body: `Bulgaria is an EU country with an attractive tax system. This country is not offshore and is distinguished by minimal corporate tax in the EU and the absence of double taxation with many states.`,
    },
  ],
  requirements: [
    `Corporate tax rate is 10%`,
    `Source of payment tax rate is 5%`,
    `IFRS can be applied instead of local standards`,
    `EU member with full EU privileges`,
    `Hague Convention member for apostilled documents`,
    `Notarized copies of participants' passports`,
    `Tax numbers of participants`,
    `Powers of attorney from shareholders`,
    `All documents must be in hard copies`,
  ],
  faq: [
    { question: `How much does it cost to open a company in Bulgaria?`, answer: `Various factors affect the final cost of Bulgarian company registration. You can find out the exact cost of registering a company in Bulgaria by contacting our specialists.` },
    { question: `How long does it take to register a company in Bulgaria?`, answer: `Registration of a company in Bulgaria takes around 2 weeks after receiving all documents in originals and payment.` },
    { question: `What documents are required for the company's registration in Bulgaria?`, answer: `In order to register a company in Bulgaria you will need notarized copies of the passports of the company's participants, tax numbers, powers of attorney from shareholders, and registration forms. All documents must be in hard copies.` },
    { question: `Is it possible to register a company remotely in Bulgaria?`, answer: `The company in Bulgaria may be opened remotely by proxy or when visiting Bulgaria.` },
  ],
};

const RegisterCompanyInBulgariaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default RegisterCompanyInBulgariaPage;
export { RegisterCompanyInBulgariaPage };
