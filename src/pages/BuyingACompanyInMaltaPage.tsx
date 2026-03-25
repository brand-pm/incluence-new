import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /buying-a-company-in-malta
const PAGE_DATA = {
  title: `Buying a Company in Malta`,
  description: `Malta is characterized by economic stability and offers various investment opportunities for both local and foreign entrepreneurs. Purchasing a ready-made company simplifies the process compared to registering one from scratch.`,
  requirements: [
    `Copies of participants’ passports`,
    `Proof of address for all participants`,
    `Completed re-registration forms`,
  ],
  faq: [
    { question: `What documents are required to purchase a business in Malta?`, answer: `You must provide copies of the participants’ passports and proof of address. You must also submit completed forms for re-registration of the company.` },
    { question: `How long does the process of purchasing a company in Malta take?`, answer: `The re-registration process of a company in Malta takes up to 3 weeks.` },
    { question: `What taxes must be paid when buying a company in Malta?`, answer: `When purchasing a company in Malta, you only need to pay the registration fee. Tax obligations arise only after the company begins operations or if the previous owner failed to pay taxes for prior activities.` },
    { question: `Can I buy a company in Malta online?`, answer: `A company in Malta can be re-registered remotely by proxy or in person when visiting Malta.` },
  ],
};

const BuyingACompanyInMaltaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default BuyingACompanyInMaltaPage;
export { BuyingACompanyInMaltaPage };
