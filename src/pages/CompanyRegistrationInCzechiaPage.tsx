import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-czechia
const PAGE_DATA = {
  title: `Company Registration in Czechia`,
  description: `Starting a Business in Czechia: Key Features foreign nationals who register a company in the Czech Republic obtain the same rights as Czech citizens when running a business;opening a company in Czechia grants access to all EU markets;a Czech company allows entrepreneurs to purchase real estate in Cz.`,
  requirements: [
    `Starting a Business in Czechia: Key Features`,
    `The Czech Republic is notable for its stable economic and political environment. It also grants entrepreneurs access to all EU markets. The wide opportunities for tax optimization are an additional advantage for Ukrainian business owners`,
    `One of the most popular forms of business in Czechia is the Limited Liability Company (s.r.o.). Such a company is easier to establish and is not subject to transfer pricing rules. At the same time, you can register a company in Czechia and become its founder without having resident status`,
    `Doing business in Czechia opens up a wide range of opportunities:`,
    `foreign nationals who register a company in the Czech Republic obtain the same rights as Czech citizens when running a business;opening a company in Czechia grants access to all EU markets;a Czech company allows entrepreneurs to purchase real estate in Czechia or obtain a loan for this purpose`,
    `Company founders also have the right to apply for a long-term visa, allowing them to stay in Czechia for up to one year`,
    `Company Registration in Czechia: Taxation Details`,
    `Since joining the EU in 2004, Czechia falls under the EU Parent-Subsidiary Directive. This means corporate income tax does not apply to capital gains and dividends if the company is affiliated with a Czech parent company in the EU and ownership exceeds 10%`,
    `personal income tax — 15%;corporate income tax — 19%;value-added tax — 21%`,
    `Company Registration in Czechia: Business Advantages`,
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
