import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /register-company-in-bulgaria
const PAGE_DATA = {
  title: `Register company in Bulgaria`,
  description: `Starting a business in Bulgaria is beneficial for businessmen due to a 10% corporate tax rate, EU membership, and the ability to apply International Financial Reporting Standards. Bulgaria is a member of the Hague Convention, so company documents can be apostilled.`,
  requirements: [
    `Corporate tax rate is 10%`,
    `Source of payment tax rate is 5%`,
    `IFRS can be applied instead of local standards`,
    `EU member with full EU privileges`,
    `Hague Convention member for apostilled documents`,
    `Notarized copies of participants’ passports`,
    `Tax numbers of participants`,
    `Powers of attorney from shareholders`,
    `All documents must be in hard copies`,
  ],
  faq: [
    { question: `How much does it cost to open a company in Bulgaria?`, answer: `Various factors affect the final cost of Bulgarian company registration. You can find out the exact cost of registering a company in Bulgaria by contacting our specialists.` },
    { question: `How long does it take to register a company in Bulgaria?`, answer: `Registration of a company in Bulgaria takes around 2 weeks after receiving all documents in originals and payment.` },
    { question: `What documents are required for the company’s registration in Bulgaria?`, answer: `You will need notarized copies of the passports of the company’s participants, tax numbers, powers of attorney from shareholders, and registration forms. All documents must be in hard copies.` },
    { question: `Is it possible to register a company remotely in Bulgaria?`, answer: `The company in Bulgaria may be opened remotely by proxy or when visiting Bulgaria.` },
  ],
};

const RegisterCompanyInBulgariaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default RegisterCompanyInBulgariaPage;
export { RegisterCompanyInBulgariaPage };
