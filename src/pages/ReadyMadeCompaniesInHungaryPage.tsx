import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /ready-made-companies-in-hungary
const PAGE_DATA = {
  title: `Ready made companies in Hungary`,
  description: `Hungary offers ready-made companies for purchase, allowing entrepreneurs to quickly start business operations in a central European location. The country is known for low corporate tax and developed economic infrastructure.`,
  requirements: [
    `Notarized copies of participants' passports`,
    `Powers of attorney from shareholders`,
    `Completed registration forms`,
    `All documents must be in hard copies`,
  ],
  faq: [
    { question: `What documents are needed to buy a business in Hungary?`, answer: `You will need notarized copies of the passports of the company's participants, powers of attorney from shareholders, and registration forms. All documents must be in hard copies.` },
    { question: `How to buy a company in Hungary for a foreigner?`, answer: `You need to find a seller on your own or through intermediaries. To re-register the company, you must visit Hungary or issue a power of attorney for an official local representative. Purchase through a representative is the most common option.` },
    { question: `What taxes must be paid to buy a company in Hungary?`, answer: `When buying a company in Hungary, taxes are not levied. Taxes must be paid upon receipt of dividends, on the profits of the company. In this case, the company can use the preferential tax regime.` },
    { question: `Can I buy a company remotely in Hungary?`, answer: `You can buy a company in Hungary remotely by power of attorney or when visiting Hungary.` },
  ],
};

const ReadyMadeCompaniesInHungaryPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default ReadyMadeCompaniesInHungaryPage;
export { ReadyMadeCompaniesInHungaryPage };
