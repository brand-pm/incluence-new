import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-a-bank-account-in-poland
const PAGE_DATA = {
  title: `Open a Bank Account in Poland`,
  description: `Poland is attractive for business due to the simplicity, speed, and transparency of company registration. Most banks offer remote account management through online or mobile banking with support for major world currencies.`,
  requirements: [
    `Company registration certificate`,
    `List of incorporation documents`,
    `Copy of the corporate structure`,
    `Proof of directors’ appointment`,
    `Proof of the company’s registered address`,
    `Notarized annual financial report (some banks)`,
    `KYC and AML forms`,
    `Personal visit required`,
  ],
  faq: [
    { question: `What are the conditions for opening a bank account in Poland?`, answer: `The company must be registered in a country accepted by Polish banks and have a positive reputation. Its participants must not appear on sanctions lists, and the company’s activities must not contradict the bank’s policies.` },
    { question: `Which bank in Poland is best to open an account with?`, answer: `We select banks based on the company’s country of registration, residency of directors and beneficiaries, expected turnover, required currencies, and payment regions. Contact our specialists for the best option.` },
    { question: `How can a non-resident open a bank account in Poland?`, answer: `You must complete and submit KYC and AML forms, the company’s statutory documents, and personal documents of directors and beneficiaries. Polish banks generally prefer companies with Polish resident participants.` },
    { question: `Can you open a bank account in Poland online?`, answer: `Opening an account in Polish banks requires a personal visit.` },
  ],
};

const OpenABankAccountInPolandPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenABankAccountInPolandPage;
export { OpenABankAccountInPolandPage };
