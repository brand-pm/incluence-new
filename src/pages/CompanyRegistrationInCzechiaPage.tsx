import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-czechia
const PAGE_DATA = {
  title: `Company Registration in Czechia`,
  description: `The Czech Republic is notable for its stable economic and political environment. It also grants entrepreneurs access to all EU markets with wide opportunities for tax optimization.`,
  requirements: [
    `Notarized copies of participants’ passports`,
    `Criminal record certificates`,
    `Powers of attorney from shareholders`,
    `Registration forms (all originals)`,
    `Share capital of 1 Czech crown minimum for LLCs`,
    `No resident status required for founders`,
    `No currency control`,
  ],
  faq: [
    { question: `What is the cost of company registration in Czechia?`, answer: `The final cost of registering a company in Czechia depends on various factors. You can find out the exact price by contacting our specialists.` },
    { question: `How long does company registration in Czechia take?`, answer: `You can register a company in Czechia within 2–3 weeks after submitting all original documents and payment.` },
    { question: `What documents are required to register a company in Czechia?`, answer: `You will need notarized copies of the participants’ passports, criminal record certificates, powers of attorney from shareholders, and registration forms. All documents must be originals.` },
    { question: `Can I register a company in Czechia online?`, answer: `Yes, a company in Czechia can be registered remotely by proxy or during a personal visit to Czechia.` },
  ],
};

const CompanyRegistrationInCzechiaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInCzechiaPage;
export { CompanyRegistrationInCzechiaPage };
