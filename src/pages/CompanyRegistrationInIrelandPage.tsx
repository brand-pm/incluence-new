import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-ireland
const PAGE_DATA = {
  title: `Company Registration in Ireland`,
  description: `Relatively low corporate tax rates make Ireland an attractive location for business. The country offers no double taxation thanks to agreements with over 60 countries, financially accessible registration, and no currency control.`,
  requirements: [
    `Copies of passports of all directors and shareholders`,
    `Registered addresses of directors and shareholders`,
    `CV of the company director`,
    `Real office address (lease agreement if renting)`,
    `At least one director (one must reside in the EU)`,
    `At least one shareholder`,
    `Minimum capital of €100 for LTD`,
    `Local company secretary`,
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
