import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-bank-account-as-foreigner-in-switzerland
const PAGE_DATA = {
  title: `Open bank account as foreigner in Switzerland`,
  description: `Switzerland is one of the world's financial centers, attracting clients with a high level of professional service and reliable protection of personal data. Not only successful entrepreneurs but also citizens of any country can open an account in a Swiss bank.`,
  requirements: [
    `Applicant must be 18 years old or over`,
    `No unexpunged criminal record for financial crimes`,
    `Full disclosure of personal and savings information`,
    `Must not be a tax evader`,
    `KYC and AML banking forms`,
    `Company statutory documents (for legal entities)`,
    `Personal documents of directors and beneficiaries`,
  ],
  faq: [
    { question: `What are the conditions for opening an account with banks in Switzerland?`, answer: `You must fill out and submit KYC and AML banking forms, the company's statutory documents, and personal documents of directors and beneficiaries. The bank may additionally request agreements with partners. Key persons need to pass verification.` },
    { question: `In which bank in Switzerland should you open an account?`, answer: `We select banks considering the country of registration, residence of beneficiaries and directors, planned turnover, required currencies, and payment regions. Bank reputation and rates are also taken into account.` },
    { question: `How much does it cost to open an account in Swiss banks?`, answer: `The final cost depends on various factors including company registration country, residence of participants, and type of activity. Contact our specialists for the exact cost for your company.` },
    { question: `Can you open a Swiss bank account online?`, answer: `Opening a bank account in Switzerland requires a personal visit to the bank. Some banks allow remote verification.` },
  ],
};

const OpenBankAccountInSwitzerlandPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenBankAccountInSwitzerlandPage;
export { OpenBankAccountInSwitzerlandPage };
