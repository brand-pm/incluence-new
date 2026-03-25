import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /buying-a-company-in-poland
const PAGE_DATA = {
  title: `Buying a company in Poland`,
  description: `Over the past decade, Poland has demonstrated excellent growth and economic development results. A ready-made company in Poland allows you to start business activities almost instantly, with minimal time and effort.`,
  requirements: [
    `Notarized copies of shareholder passports`,
    `Shareholder powers of attorney`,
    `Registration forms (originals)`,
    `Share transfer documents`,
    `Notarized sale and purchase agreement`,
  ],
  faq: [
    { question: `What documents are required to buy a business in Poland?`, answer: `You need notarized copies of shareholder passports, shareholder powers of attorney, and registration forms. All documents must be provided in originals.` },
    { question: `How can a foreigner buy a company in Poland?`, answer: `You need to find a seller independently or through intermediaries. To re-register the company, you must either visit Poland or issue a power of attorney to a local representative. Purchase through a representative is the most convenient option.` },
    { question: `What taxes need to be paid when buying a company in Poland?`, answer: `No taxes are charged when purchasing a company in Poland. Taxes are paid on dividends and company profits. At the same time, the company may use preferential taxation regimes.` },
    { question: `Can you buy a company in Poland online?`, answer: `A company in Poland can be purchased remotely by proxy or by visiting Poland.` },
  ],
};

const BuyingACompanyInPolandPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default BuyingACompanyInPolandPage;
export { BuyingACompanyInPolandPage };
