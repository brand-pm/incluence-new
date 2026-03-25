import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /buying-a-company-in-bulgaria
const PAGE_DATA = {
  title: `Buying a Company in Bulgaria`,
  description: `How to Profitably Buy a Company in Bulgaria Today, Bulgaria offers a favorable business environment, largely due to the simplicity and convenience of most processes necessary for enterprises.`,
  requirements: [
    `Why Entrepreneurs are Advised to Buy a Company in Bulgaria: Advantages`,
    `Often, the choice of Bulgaria as a business location is determined by the following factors:`,
    `favorable taxation — corporate tax is 10%; economic and political stability; absence of racial and religious conflicts; possibility of duty-free trade with EU countries`,
    `If you decide to buy a company in Bulgaria, the list of advantages expands:`,
    `most organizational matters are already resolved; you can start generating profit immediately, it is enough to simply maintain the company’s current activities; the company already has a market, a stable client base, established supplier relationships, necessary equipment, etc`,
    `Another advantage not to be overlooked is financing. Investors are rarely eager to invest in a new, untested business project. However, when purchasing a ready-made company, you will have a better chance of obtaining financing, since having an established business reputation is one of the key factors for both investors and bankers`,
    `What to Keep in Mind Before Buying a Company in Bulgaria`,
    `Regardless of the legal form of the enterprise you choose to acquire, the country applies a similar taxation model for all businesses. Given that Bulgaria’s corporate tax is the lowest in all of Europe, entrepreneurs can focus on growing their business rather than worrying about tax burdens`,
    `Which company to buy in Bulgaria and how to develop it later is a personal decision of each entrepreneur. However, companies with turnover exceeding 50,000 BGN deserve special mention. In such firms, accounting must be handled using VAT accounts, meaning it is recommended to hire a qualified employee to manage financial reporting without errors`,
    `If the company has temporarily suspended operations, it is still necessary to submit annual reports confirming the absence of activity`,
  ],
  faq: [
    { question: `What documents are required to buy a business in Bulgaria?`, answer: `To buy a business in Bulgaria, you need to provide copies of the shareholders’ passports, proof of address, tax number, and certified registration forms.` },
    { question: `How long does the process of buying a company in Bulgaria take?`, answer: `The process of buying a company in Bulgaria takes 3–4 weeks.` },
    { question: `What taxes must be paid when buying a company in Bulgaria?`, answer: `When purchasing a company in Bulgaria, only the registration fee needs to be paid. Tax obligations arise only after the company starts its activities or if the previous owner failed to pay taxes related to past operations.` },
    { question: `Can a company in Bulgaria be purchased online?`, answer: `A company in Bulgaria can be re-registered remotely on the basis of a power of attorney or during a personal visit.` },
  ],
};

const BuyingACompanyInBulgariaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default BuyingACompanyInBulgariaPage;
export { BuyingACompanyInBulgariaPage };
