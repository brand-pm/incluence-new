import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-a-bank-account-in-saint-lucia
const PAGE_DATA = {
  title: `Open a Bank Account in Saint Lucia`,
  description: `Non-resident registration in Saint Lucia banks is common, with local financial institutions being loyal to foreign clients. Most banks do not require visiting a branch, and account opening starts from 2 weeks.`,
  requirements: [
    `Notarized copies of directors’ and shareholders’ passports`,
    `Proof of residence for directors and shareholders`,
    `Incorporation documents (notarized and apostilled if required)`,
    `Information on share capital (if applicable)`,
    `Power of attorney for account opening (if representative)`,
    `Contracts with partner companies`,
    `KYC and AML forms`,
  ],
  faq: [
    { question: `Which bank in Saint Lucia is best for opening a bank account?`, answer: `We select banks based on the company’s country of registration, the residency of beneficiaries and directors, planned turnover, required currencies, and payment regions. Contact our specialists for the best option.` },
    { question: `What is the cost of opening an account with Wise?`, answer: `The cost depends on the company’s residency, the residency of its participants, the nature of business, and other factors. Contact our specialists for an exact quote.` },
    { question: `How can a non-resident open a bank account in Saint Lucia?`, answer: `You need to complete and submit KYC and AML forms, the company’s incorporation documents, and personal documents of directors and beneficiaries. The bank may additionally request partner contracts.` },
    { question: `Can I open a bank account in Saint Lucia online?`, answer: `The review and account opening process can be completed online. However, the bank may request original documents if only scanned copies were submitted during the application.` },
  ],
};

const OpenABankAccountInSaintLuciaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenABankAccountInSaintLuciaPage;
export { OpenABankAccountInSaintLuciaPage };
