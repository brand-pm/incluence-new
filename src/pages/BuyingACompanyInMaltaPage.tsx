import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /buying-a-company-in-malta
const PAGE_DATA = {
  title: `Buying a Company in Malta`,
  description: `LLC-type companies — they can be private or public, with the latter entitled to list shares on the local stock exchange. Such companies must have at least two directors and one secretary who is a natural person.`,
  requirements: [
    `Why It’s Recommended to Buy a Company in Malta`,
    `If you want to register a company to conduct business, Malta can be a suitable option. This small exotic island nation is characterized by economic stability and offers various investment opportunities for both local and foreign entrepreneurs`,
    `Registering a company requires entrepreneurs to prepare a large number of documents, constantly interact with regulatory authorities, and more. You can simplify the process by purchasing a ready-made company instead of registering one from scratch. For more detailed information on how to buy a company in Malta, please contact us`,
    `What Type of Company Can Be Purchased in Malta`,
    `Today, several types of companies are available for purchase, the most common being:`,
    `LLC-type companies — they can be private or public, with the latter entitled to list shares on the local stock exchange. Such companies must have at least two directors and one secretary who is a natural person. Private firms cannot trade shares or bonds and are limited to 50 members, although they may have just one shareholder. Holding and trading companies — if you decide to buy a company in Malta, it can be used for various types of activities, including consultancy services as well as financial and investment services. Such firms may own and manage shares of other companies. Partnerships — these can be general or limited. The main difference lies in liability: in general partnerships, all partners are equally liable, while in limited partnerships each participant is liable according to their share in the capital`,
    `Why It’s Beneficial to Buy a Company in Malta`,
    `Purchasing a company in Malta provides several advantages for entrepreneurs, including:`,
    `Establishing a reliable business thanks to Malta’s EU membership. Favorable taxation — shareholders may reclaim 6/7 of the tax on dividends, resulting in an effective tax rate of 5%. English as the second official language, which simplifies communication with government bodies and business partners. Access to various markets thanks to Malta’s advantageous geographic location`,
    `An additional benefit is that acquiring a company in Malta can be done quickly. While registering a new company and starting operations typically takes 1–2 months, buying a ready-made business significantly reduces the waiting time`,
  ],
  faq: [
    { question: `What documents are required to purchase a business in Malta?`, answer: `To purchase a business in Malta, you must provide copies of the participants’ passports and proof of address. You must also submit completed forms for re-registration of the company.` },
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
