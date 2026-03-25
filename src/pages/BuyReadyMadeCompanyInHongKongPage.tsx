import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /buy-ready-made-company-in-hong-kong
const PAGE_DATA = {
  title: `Buy ready made company in Hong Kong`,
  description: `Hong Kong is a special administrative region of China and one of the leading financial centers of Asia and the world. Its loyal legal system and English-language business environment attract businessmen from all over the world.`,
  requirements: [
    `Copies of participants' passports`,
    `Proof of address for all participants`,
    `Completed registration forms`,
  ],
  faq: [
    { question: `What documents are needed to buy a business in Hong Kong?`, answer: `You must submit copies of passports and proof of address of the participants in the company. You must also submit completed registration forms.` },
    { question: `How long does it take to buy a company in Hong Kong?`, answer: `If the seller has fully prepared the company for sale, the process can take up to 3 weeks after the submission of all documents and payment.` },
    { question: `What taxes must I pay to buy a company in Hong Kong?`, answer: `When buying a company in Hong Kong, you only need to pay a registration fee. Obligations to pay taxes arise only after the start of the company's activities or if the previous owner did not pay taxes on previous activities.` },
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
