import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-luxembourg
const PAGE_DATA = {
  title: `Company Registration in Luxembourg`,
  description: `Opening a company in Luxembourg: available business forms SARL (LLC). The minimum share capital is EUR 21,400, which must be fully paid before registration. SARLs can issue only registered shares. If the number of shareholders exceeds 25, annual meetings must be held. SA (JSC).`,
  requirements: [
    `Requirements for registering a company in Luxembourg`,
    `To start a business and incorporate a Luxembourg company, different documents may be required, depending on the chosen form of business. As a rule, at least the following documents are needed:`,
    `notarized articles of association, registered in the Trade Register; founding agreement; company charter; resolution appointing directors`,
    `Additionally, a certificate from the selected bank confirming the deposit of the company’s share capital is required`,
    `If you decide to start a business in Luxembourg, company registration will be easier and faster with our specialists. They will handle the preparation and submission of documents, the registration process, and all other formalities`,
  ],
  faq: [
    { question: `What is the timeframe for company registration in Luxembourg?`, answer: `Usually, company registration in Luxembourg takes 2–3 weeks.` },
    { question: `Can a company in Luxembourg be registered online?`, answer: `A company in Luxembourg can be registered remotely through a power of attorney or via a personal visit.` },
    { question: `Can a non-resident open a business in Luxembourg?`, answer: `A non-resident can register a company in Luxembourg. You can learn all the details of setting up a business in Luxembourg for non-residents from our specialists.` },
    { question: `What documents are required to register a company in Luxembourg?`, answer: `To register a company in Luxembourg, copies of the participants’ passports and proof of address are required. Registration forms must also be submitted, including information on the source of funds for company formation. Beneficiaries may be asked to` },
  ],
};

const CompanyRegistrationInLuxembourgPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInLuxembourgPage;
export { CompanyRegistrationInLuxembourgPage };
