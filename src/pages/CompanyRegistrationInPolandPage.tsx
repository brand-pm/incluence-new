import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-poland
const PAGE_DATA = {
  title: `Company Registration in Poland`,
  description: `Choosing a name. It is best to prepare several options to increase the chances of finding an available one in the Register. Preparing documents. Most likely, notarized copies of participants’ identity documents will be required.`,
  requirements: [
    `Company Registration in Poland: Key Information`,
    `Within the European Union, Poland ranks sixth in terms of economy size and is one of the fastest-growing countries in Europe. Its well-developed legal and banking systems, as well as the simple company registration procedure, make the country an attractive option for starting and running a business`,
    `To open a company, one must be familiar with local regulations. However, in Poland the registration process is relatively straightforward. Ukrainian entrepreneurs should keep in mind two key aspects when opening a new company:`,
    `You cannot register a company without a Polish identification number (PESEL). It is issued to both Polish citizens and non-residents. A company in Poland can be registered in any available legal form. The choice must be made carefully, as it affects service costs, company taxation, reporting volumes, and much more. Foreigners may establish a limited partnership, joint-stock limited partnership, joint-stock company, or a limited liability company (Sp. Z.o.o.)`,
    `How Company Registration in Poland Can Be Done`,
    `There are two main ways to register a company in Poland:`,
    `In person. You will need to travel to the country twice: to register the company and to open a bank account for depositing share capital. The statutory minimum share capital is set at 5,000 PLN — one of the lowest in the European Union. By proxy. This requires a power of attorney for a Polish representative, notarized copies of passports translated into Polish, as well as a bank statement`,
    `Company registration in Poland is only available to adult founders without criminal records. A valid international passport is required`,
    `Business Registration in Poland: Advantages`,
    `Registering a company in Poland offers several benefits for Ukrainian entrepreneurs:`,
  ],
  faq: [
    { question: `What is the cost of company registration in Poland?`, answer: `The final cost of establishing a company in Poland depends on various factors. You can learn the exact cost of company registration in Poland by contacting our specialists.` },
    { question: `How long does it take to register a company in Poland?`, answer: `Company registration in Poland takes about 3 weeks after receiving all original documents and payment.` },
    { question: `What documents are required to register a company in Poland?`, answer: `For company registration in Poland, notarized copies of participants’ passports, shareholders’ powers of attorney, and registration forms are required. All documents must be in original form.` },
    { question: `Can a company in Poland be registered online?`, answer: `A company in Poland can be registered remotely by proxy or by visiting Poland.` },
  ],
};

const CompanyRegistrationInPolandPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInPolandPage;
export { CompanyRegistrationInPolandPage };
