import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /buying-a-company-in-bulgaria
const PAGE_DATA = {
  title: `Buying a Company in Bulgaria`,
  description: `Bulgaria offers a favorable business environment with simple processes for enterprises. Buying a ready-made company lets you start operations quickly and avoid bureaucratic delays.`,
  requirements: [
    `Copies of shareholders’ passports`,
    `Proof of address for all participants`,
    `Tax identification number`,
    `Certified registration forms`,
    `Power of attorney (if buying remotely)`,
  ],
  faq: [
    { question: `What documents are required to buy a business in Bulgaria?`, answer: `You need copies of the shareholders’ passports, proof of address, tax number, and certified registration forms.` },
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
