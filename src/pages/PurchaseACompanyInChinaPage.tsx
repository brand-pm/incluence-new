import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /purchase-a-company-in-china
const PAGE_DATA = {
  title: `Purchase a Company in China`,
  description: `Instead of creating a company from scratch, you can purchase a company in China and immediately start business operations. By acquiring an existing business, you can legally operate across the country in any permitted type of activity.`,
  requirements: [
    `Copies of passports of all company participants`,
    `Proof of address for all company participants`,
    `Fixed tax of 25% of annual profit after operations begin`,
    `Mandatory accounting records and annual company reports`,
    `Compliance with foreign exchange control requirements`,
  ],
  faq: [
    { question: `What documents are required to purchase a business in China?`, answer: `Copies of passports and proof of address for all company participants are required. Additional documents may be requested in some cases.` },
    { question: `How long does it take to purchase a company in China?`, answer: `The process of purchasing a company in China takes about three weeks.` },
    { question: `What taxes need to be paid when buying a company in China?`, answer: `When purchasing, only the registration fee must be paid. Tax obligations arise only after the company begins operations or if the previous owner did not pay taxes for prior activities.` },
    { question: `Can a company in China be purchased online?`, answer: `A company in China can be transferred remotely through a local representative or via a personal visit.` },
  ],
};

const PurchaseACompanyInChinaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default PurchaseACompanyInChinaPage;
export { PurchaseACompanyInChinaPage };
