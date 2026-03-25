import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-ireland
const PAGE_DATA = {
  title: `Company Registration in Ireland`,
  description: `Business evaluation and choice of legal form;Full company registration support;Preparation of reports. We maintain a database of active companies, providing clients with information quickly. Company registration takes 3–5 business days.`,
  requirements: [
    `What you need to know about LPs before opening a company in Ireland`,
    `LPs are exempt from reporting and taxation, but only if they do not operate in the country of registration. The legal structure of companies registered in Ireland is similar to that in the UK, as Ireland was formerly part of it`,
    `If you are considering registering a company in Ireland, keep in mind the main features of LP partnerships:`,
    `Reporting. LPs are not required to submit annual reports. However, the Beneficiary Register in Ireland is closed for such companies.Bank account. LPs cannot open a bank account. They may open an account with a payment institution in euros or in offshore banks not operating in Europe`,
  ],
  faq: [
    { question: `What is the cost of company registration in Ireland?`, answer: `The final cost depends on various factors. You can find out the exact cost of registering a company in Ireland by contacting our specialists.` },
    { question: `How long does it take to register a company in Ireland?`, answer: `Company registration in Ireland takes 2–3 weeks from the submission of all documents and payment.` },
    { question: `What documents are required to register a company in Ireland?`, answer: `To register a company in Ireland, passports and proof of address of the company participants are required. In some cases, additional documents may be needed.` },
    { question: `Can a company be registered online in Ireland?`, answer: `A company in Ireland can be registered remotely via local specialists.` },
  ],
};

const CompanyRegistrationInIrelandPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInIrelandPage;
export { CompanyRegistrationInIrelandPage };
