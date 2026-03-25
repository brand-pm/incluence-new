import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-a-bank-account-in-hungary
const PAGE_DATA = {
  title: `Open a Bank Account in Hungary`,
  description: `Hungarian financial institutions are loyal to new clients, offering a wide range of services and affordable fees. Accounts can be opened in any foreign currency, and most institutions provide online banking for remote account management.`,
  requirements: [
    `Identity documents of directors, beneficiaries, and shareholders`,
    `Certificate of company registration`,
    `Articles of association`,
    `Director appointment order`,
    `Documents translated into Hungarian and apostilled`,
    `Notarized power of attorney (if representative)`,
    `KYC and AML questionnaires and forms`,
  ],
  faq: [
    { question: `What are the conditions for opening an account in Hungarian banks?`, answer: `The company must be registered in a country supported by Hungarian banks and have a good reputation. Its participants must not appear on sanction lists. Hungarian banks often prefer companies with Hungarian participants.` },
    { question: `Which bank in Hungary is the best for opening a bank account?`, answer: `We select banks based on the company's country of registration, residency of beneficiaries and directors, expected turnover, required currencies, and payment regions. Bank reputation and fees are also considered.` },
    { question: `How can a non-resident open a bank account in Hungary?`, answer: `You must complete and submit KYC and AML forms, company incorporation documents, and personal documents of directors and beneficiaries. The bank may request partner contracts. Key persons must pass verification.` },
    { question: `Can you open a Hungarian bank account online?`, answer: `Opening an account in Hungarian banks requires an in-person visit.` },
  ],
};

const OpenABankAccountInHungaryPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenABankAccountInHungaryPage;
export { OpenABankAccountInHungaryPage };
