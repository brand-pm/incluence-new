import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /register-company-in-bulgaria
const PAGE_DATA = {
  title: `Register company in Bulgaria`,
  description: `Bulgaria company registration: The advantages of opening a business in Bulgaria Corporate tax rate is 10%.The tax rate for the source of payment is 5%.International Financial Reporting Standards (IFRS) can be applied instead of local standards.Bulgaria is a member of the Hague Convention, so company.`,
  requirements: [
    `How to open a company in Bulgaria: What a businessman needs to know`,
    `Bulgaria is an EU country with an attractive tax system. This country is not offshore and is distinguished by minimal corporate tax in the EU and the absence of double taxation with many states`,
  ],
  faq: [
    { question: `How much does it cost to open a company in Bulgaria?`, answer: `Various factors affect the final cost of Bulgarian company registration. You can find out the exact cost of registering a company in Bulgaria by contacting our specialists.` },
    { question: `How long does it take to register a company in Bulgaria?`, answer: `Registration of a company in Bulgaria takes around 2 weeks after receiving all documents in originals and payment.` },
    { question: `What documents are required for the company’s registration in Bulgaria?`, answer: `In order to register a company in Bulgaria you will need notarized copies of the passports of the company\'s participants, tax numbers, powers of attorney from shareholders, and registration forms. All documents must be in hard copies.` },
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
