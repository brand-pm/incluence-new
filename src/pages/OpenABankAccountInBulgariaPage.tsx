import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-a-bank-account-in-bulgaria
const PAGE_DATA = {
  title: `Open a Bank Account in Bulgaria`,
  description: `Opening a bank account in Bulgaria is available to citizens of any country representing a company’s business interests. Non-residents can open accounts in Bulgarian lev, US dollars, or euros.`,
  requirements: [
    `Notarized copy of shareholders’ and directors’ passports`,
    `Proof of residential address of shareholders and directors`,
    `Notarized and apostilled corporate documents (non-residents)`,
    `Power of attorney notarized at Bulgarian Embassy (if representative)`,
    `Contracts with partner companies`,
    `KYC and AML forms`,
  ],
  faq: [
    { question: `Which bank in Bulgaria is best for opening a bank account?`, answer: `We select banks based on the country of company registration, the residency of beneficiaries and directors, planned turnover, required currencies, and payment regions. The bank’s reputation and fees are also considered.` },
    { question: `What are the requirements for opening a bank account in Bulgaria?`, answer: `You must complete and submit the bank’s KYC and AML forms, the company’s statutory documents, and personal documents of directors and beneficiaries. The bank may additionally request contracts with partners.` },
    { question: `What documents are required to open a bank account in Bulgaria?`, answer: `You must provide copies of personal documents of each director and shareholder, along with a package of corporate documents. The bank may also request contracts with partners and the company’s structure.` },
    { question: `Can a bank account in Bulgaria be opened online?`, answer: `A bank account in Bulgaria can be opened with the personal presence of a company representative.` },
  ],
};

const OpenABankAccountInBulgariaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenABankAccountInBulgariaPage;
export { OpenABankAccountInBulgariaPage };
