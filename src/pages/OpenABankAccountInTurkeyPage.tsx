import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-a-bank-account-in-turkey
const PAGE_DATA = {
  title: `Open a Bank Account in Turkey`,
  description: `Since Turkey is not a member of the European Union, local financial institutions are quite loyal to non-residents and foreign companies. Remote account opening is possible, with low maintenance costs and a standard opening period of up to 3 months.`,
  requirements: [
    `Tax identification number (mandatory)`,
    `Notarized copy of shareholders’ and directors’ passports`,
    `Proof of residential address of shareholders and directors`,
    `Notarized documents confirming authorized capital`,
    `Proof of financial stability (e.g., partner contracts)`,
    `KYC and AML forms`,
  ],
  faq: [
    { question: `Which bank in Turkey is best for opening a bank account?`, answer: `We select banks based on the company’s country of registration, the residency of beneficiaries and directors, planned turnovers, required currencies, and regions of payments. Contact our specialists for the best option.` },
    { question: `What are the conditions for opening a bank account in Turkey?`, answer: `You must complete and submit the bank’s KYC and AML forms, provide the company’s incorporation documents, and personal documents of directors and beneficiaries. Verification must be completed during the bank visit.` },
    { question: `How can a non-resident open a bank account in Turkey?`, answer: `Turkish banks open accounts for local companies with non-resident participants, as well as for foreign companies. Professional assistance is recommended to increase your chances.` },
    { question: `Can a bank account in Turkey be opened online?`, answer: `A bank account in Turkey can be opened with the personal presence of the company’s representative.` },
  ],
};

const OpenABankAccountInTurkeyPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenABankAccountInTurkeyPage;
export { OpenABankAccountInTurkeyPage };
