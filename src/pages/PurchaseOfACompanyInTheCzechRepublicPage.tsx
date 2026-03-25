import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /purchase-of-a-company-in-the-czech-republic
const PAGE_DATA = {
  title: `Purchase of a Company in the Czech Republic`,
  description: `To start a business in the Czech Republic, you need to register a company. Registration is a rather complex procedure that requires time, effort, and knowledge of Czech legislative requirements. An alternative is the purchase of a ready-made Czech company.`,
  requirements: [
    `High-resolution scan of international passport`,
    `Registered residential address (city and region)`,
    `Criminal record certificate from home country`,
    `Criminal record certificate from the Czech Republic`,
    `Notarized copies of participants’ passports`,
    `Powers of attorney from shareholders`,
    `Registration forms (originals required)`,
  ],
  faq: [
    { question: `What documents are required to purchase a business in the Czech Republic?`, answer: `To buy a company in Czechia, you will need notarized copies of the participants’ passports, a criminal record certificate, powers of attorney from shareholders, and registration forms. All documents must be originals.` },
    { question: `How can a foreigner buy a company in Czechia?`, answer: `You first need to find a seller, either directly or via intermediaries. To re-register the company, you must either travel to Czechia or issue a power of attorney to a local authorized representative. Purchase through a representative is the most common option.` },
    { question: `What taxes need to be paid when purchasing a company in the Czech Republic?`, answer: `No taxes are charged when purchasing a company in Czechia. Taxes apply to company profits and dividends. The company may also benefit from preferential tax regimes.` },
    { question: `Can I buy a company in Czechia online?`, answer: `A company in Czechia can be purchased remotely via power of attorney or by visiting the country in person.` },
  ],
};

const PurchaseOfACompanyInTheCzechRepublicPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default PurchaseOfACompanyInTheCzechRepublicPage;
export { PurchaseOfACompanyInTheCzechRepublicPage };
