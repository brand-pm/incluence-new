import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-europe
const PAGE_DATA = {
  title: `Company Registration in Europe`,
  description: `The reputation of a European-registered company is much higher than that of companies incorporated outside the EU. The European Union attracts non-European entrepreneurs, as foreign banks and partners are more open to working with EU-based businesses.`,
  requirements: [
    `Civil passport and copy of beneficiary’s international passport`,
    `Proof of residence of the beneficiary`,
    `Proof of financial solvency for bank account opening`,
    `Selected company name and legal form`,
    `Legal address lease in the selected country`,
    `Incorporation documents per national legislation`,
    `Articles of Association with company details`,
    `Temporary bank account for share capital deposit`,
    `Notarized incorporation documents`,
  ],
  faq: [
    { question: `Can a non-resident open a business in Europe?`, answer: `A non-resident who is not on sanctions lists and is not a resident of a sanctioned state can register a company in Europe. In some countries, however, a local director may be required to open a bank account.` },
    { question: `What is the cost of business registration in Europe?`, answer: `The final cost depends on the country of registration, business activity, number of participants, and other factors. To get an exact quote, please contact our specialists.` },
    { question: `Can a company in Europe be registered online?`, answer: `Yes, a company in Europe can be registered remotely via power of attorney or in person.` },
    { question: `How long does it take to open a company in Europe?`, answer: `The timeline depends on the country of registration and usually does not exceed 3 weeks.` },
  ],
};

const CompanyRegistrationInEuropePage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInEuropePage;
export { CompanyRegistrationInEuropePage };
