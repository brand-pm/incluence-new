import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /buy-ready-made-company-in-hong-kong
const PAGE_DATA = {
  title: `Buy ready made company in Hong Kong`,
  description: `Ready-made shelf companies in Hong Kong Hong Kong is a special administrative region of China, one of the leading financial centers of Asia and the world. In essence, it is an area of the People's Republic of China, but in fact, it can be called a separate state.`,
  requirements: [
    `Ready-made shelf companies in Hong Kong`,
    `Hong Kong is a special administrative region of China, one of the leading financial centers of Asia and the world. In essence, it is an area of the People\'s Republic of China, but in fact, it can be called a separate state. Many issues in Hong Kong, from the mentality to the loyalty of the legal system, contribute to the development of international business, so it attracts businessmen from all over the world`,
    `This is largely determined by the special laws in force in this territory. Since Hong Kong was governed by Great Britain till 1997, the common law of England is applied here almost as native, and practically all commercial documents are in English. This is an additional advantage for entrepreneurs willing to buy shelf companies Hong Kong as they often have no language problems while doing business`,
  ],
  faq: [
    { question: `What documents are needed to buy a business in Hong Kong?`, answer: `In order to buy a business in Hong Kong, you must submit copies of passports and proof of the address of the participants in the company. You must also submit completed registration forms.` },
    { question: `How long does it take to buy a company in Hong Kong?`, answer: `The process of buying a company in Hong Kong depends on the state of the company. If the seller has fully prepared the company for the sale, the process can take up to 3 weeks after the submission of all documents and payment.` },
    { question: `What taxes must I pay to buy a company in Hong Kong?`, answer: `When buying a company in Hong Kong, you only need to pay a registration fee. Obligations to pay taxes arise only after the start of the company\'s activities or if the previous owner did not pay taxes on previous activities.` },
    { question: `Can I buy a company in Hong Kong online?`, answer: `A company in Hong Kong can be re-registered remotely through a local secretary.` },
  ],
};

const BuyReadyMadeCompanyInHongKongPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default BuyReadyMadeCompanyInHongKongPage;
export { BuyReadyMadeCompanyInHongKongPage };
