import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-poland
const PAGE_DATA = {
  title: `Company Registration in Poland`,
  description: `Within the European Union, Poland ranks sixth in terms of economy size and is one of the fastest-growing countries in Europe. Its well-developed legal and banking systems make the country an attractive option for starting a business.`,
  requirements: [
    `Polish identification number (PESEL)`,
    `Notarized copies of participants’ passports`,
    `Shareholders’ powers of attorney`,
    `Registration forms (all originals)`,
    `Minimum share capital of 5,000 PLN`,
    `Valid international passport`,
    `Adult founders without criminal records`,
    `Bank statement (if registering by proxy)`,
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
