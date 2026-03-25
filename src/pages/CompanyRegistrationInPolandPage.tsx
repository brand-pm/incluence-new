import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-poland
const PAGE_DATA = {
  title: `Company Registration in Poland`,
  description: `Within the European Union, Poland ranks sixth in terms of economy size and is one of the fastest-growing countries in Europe. Its well-developed legal and banking systems make the country an attractive option for starting a business.`,
  sections: [
    {
      heading: `How to Register a Company in Poland`,
      body: `Ukrainian entrepreneurs have several options for setting up a company in Poland. Self-registration is very complex and requires knowledge of many laws and regulations. That's why we offer comprehensive services for company registration in Poland either online or by proxy. Cooperation with us is structured in stages, making the entire process convenient and clear for any entrepreneur:\n\nChoosing a name. It is best to prepare several options to increase the chances of finding an available one in the Register. Preparing documents. Most likely, notarized copies of participants' identity documents will be required. The complete package is determined individually depending on the chosen legal form. Filling out registration forms. Accuracy is crucial, otherwise registration may be denied. Submitting documents to the Register. If the package meets requirements, the company's data is entered into the Register. Confirmation of successful registration appears in official sources. At this point, statutory documents can be printed and business activities can commence.\n\nIf you are interested in company registration in Poland, we calculate service costs individually for each client, taking into account all mandatory payments, your company's type of activity, and specific operations.\n\nIf you need additional assistance with opening a company in Poland, contact our specialists at any time. To begin cooperation, fill out the online application and wait for a specialist's call shortly.`,
    },
    {
      heading: `Company Registration in Poland: Key Information`,
      body: `Within the European Union, Poland ranks sixth in terms of economy size and is one of the fastest-growing countries in Europe. Its well-developed legal and banking systems, as well as the simple company registration procedure, make the country an attractive option for starting and running a business.\n\nTo open a company, one must be familiar with local regulations. However, in Poland the registration process is relatively straightforward. Ukrainian entrepreneurs should keep in mind two key aspects when opening a new company:\n\nYou cannot register a company without a Polish identification number (PESEL). It is issued to both Polish citizens and non-residents. A company in Poland can be registered in any available legal form. The choice must be made carefully, as it affects service costs, company taxation, reporting volumes, and much more. Foreigners may establish a limited partnership, joint-stock limited partnership, joint-stock company, or a limited liability company (Sp. Z.o.o.).`,
    },
    {
      heading: `How Company Registration in Poland Can Be Done`,
      body: `There are two main ways to register a company in Poland:\n\nIn person. You will need to travel to the country twice: to register the company and to open a bank account for depositing share capital. The statutory minimum share capital is set at 5,000 PLN \u2014 one of the lowest in the European Union. By proxy. This requires a power of attorney for a Polish representative, notarized copies of passports translated into Polish, as well as a bank statement.\n\nCompany registration in Poland is only available to adult founders without criminal records. A valid international passport is required.`,
    },
    {
      heading: `Business Registration in Poland: Advantages`,
      body: `Registering a company in Poland offers several benefits for Ukrainian entrepreneurs:\n\nlow maintenance costs compared to other EU countries; low corporate tax rate for small businesses; a prestigious jurisdiction with favorable taxation and high business security.\n\nIt is worth noting that even online company registration in Poland can serve as grounds for obtaining permanent residency. To qualify:\n\nthe company must have a stable annual income of over \u20AC13,000 (exact requirements depend on the region); the company must employ at least 2 Polish citizens on a full-time, indefinite basis.`,
    },
    {
      heading: `Opening a Company in Poland: Registration Costs and Additional Expenses`,
      body: `The cost of opening a company in Poland depends on many factors and is always determined individually. Entrepreneurs should also keep in mind potential ongoing expenses after registration:\n\nfrom 100 PLN per month for accounting services, depending on the number of bank transactions; around 60 PLN for payroll calculation if employees are based in Poland; approximately 2,000 PLN for office rental.\n\nHaving employees and a rented office in Poland is necessary for running a fully legal business and for opening a bank account.\n\nIf you are interested in remote company registration in Poland, the cost of the online procedure will depend on the following steps:\n\ncreating a trusted profile on Poland's Electronic Public Services Platform (ePUAP); consultations with our specialists; payment of state fees; notarial certification of each founder's signature; sending the document package to Poland.\n\nCompany Registration in Poland: Cost of Procedure and What Affects It\n\nOpening an Sp. Z.o.o. in Poland involves a number of additional (non-mandatory) procedures, such as producing a company seal. If you are interested in opening a company in Poland, our specialists will calculate the exact cost of the procedure.\n\nIt is difficult to precisely estimate financial expenses related to company registration, since in some cases notarized acts are required, and notary fees may vary.`,
    },
    {
      heading: `What You Should Know About Taxes When Opening a Company in Poland: Cost of Doing Business`,
      body: `Registering a company in Poland requires payment of the following taxes:\n\nThe standard corporate tax is 19%. Since January 2019, it has been reduced to 9% for small companies with annual turnover not exceeding \u20AC1.2 million. Tax on the director's salary. Social security contributions of 30\u201336%.\n\nThe standard VAT rate is 23%. However, there are exceptions where reduced or zero rates apply:\n\n5% \u2014 for livestock, agricultural goods, as well as books and magazines in print or electronic format; 8% \u2014 for construction of residential buildings and certain catering services; 0% \u2014 for export of goods to other EU member states.\n\nCompany Registration in Poland and VAT Exemptions\n\nIn some cases, businesses are exempt from VAT. In such situations, invoices are marked with "zw" (zwolniony).\n\nCompanies with annual turnover below 200,000 PLN (around \u20AC45,000) are exempt from VAT.\n\nHowever, some types of business activities are not eligible for VAT exemption. This applies to companies providing legal, consulting, or jewelry services; selling precious items or new vehicles; and certain other activities.`,
    },
  ],
  requirements: [
    `Polish identification number (PESEL)`,
    `Notarized copies of participants' passports`,
    `Shareholders' powers of attorney`,
    `Registration forms (all originals)`,
    `Minimum share capital of 5,000 PLN`,
    `Valid international passport`,
    `Adult founders without criminal records`,
    `Bank statement (if registering by proxy)`,
  ],
  faq: [
    { question: `What is the cost of company registration in Poland?`, answer: `The final cost of establishing a company in Poland depends on various factors. You can learn the exact cost of company registration in Poland by contacting our specialists.` },
    { question: `How long does it take to register a company in Poland?`, answer: `Company registration in Poland takes about 3 weeks after receiving all original documents and payment.` },
    { question: `What documents are required to register a company in Poland?`, answer: `For company registration in Poland, notarized copies of participants' passports, shareholders' powers of attorney, and registration forms are required. All documents must be in original form.` },
    { question: `Can a company in Poland be registered online?`, answer: `A company in Poland can be registered remotely by proxy or by visiting Poland.` },
  ],
};

const CompanyRegistrationInPolandPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInPolandPage;
export { CompanyRegistrationInPolandPage };
