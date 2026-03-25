import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-a-bank-account-in-gibraltar
const PAGE_DATA = {
  title: `Open a Bank Account in Gibraltar`,
  description: `Gibraltar is under the jurisdiction of the United Kingdom and pays special attention to the development of its banking sector. Non-residents and foreign companies can open accounts with EU deposit protection up to 100,000 euros.`,
  requirements: [
    `Company statutory documents`,
    `Identity documents of shareholders, directors, and beneficiaries`,
    `Proof of legality of funds`,
    `KYC and AML forms`,
    `In-person visit required`,
  ],
  faq: [
    { question: `What are the requirements for opening a bank account in Gibraltar?`, answer: `The company must be registered in a country supported by Gibraltar banks and have a good reputation. Its participants must not appear on sanctions lists. The company’s field of activity must not contradict the bank’s policy.` },
    { question: `Which bank in Gibraltar is best for opening an account?`, answer: `We select banks based on the country of company registration, the residency of beneficiaries and directors, planned turnover, required currencies, and payment regions. Contact our specialists for the best option.` },
    { question: `How can a non-resident open a bank account in Gibraltar?`, answer: `You must complete and submit KYC and AML forms, the company’s statutory documents, and personal documents of directors and beneficiaries. The bank may additionally request contracts with partners.` },
    { question: `Can a bank account in Gibraltar be opened online?`, answer: `You can only open a bank account in Gibraltar by visiting in person.` },
  ],
};

const OpenABankAccountInGibraltarPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenABankAccountInGibraltarPage;
export { OpenABankAccountInGibraltarPage };
