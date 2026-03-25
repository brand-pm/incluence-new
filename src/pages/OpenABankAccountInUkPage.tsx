import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /opening-a-bank-account-in-the-united-kingdom
const PAGE_DATA = {
  title: `Opening a Bank Account in the United Kingdom`,
  description: `The UK banking system is distinguished by stability and a high level of development. Opening a bank account in the UK allows reliable protection of financial assets, global payments, and stable international business operations.`,
  requirements: [
    `Passport of the account beneficiary`,
    `Proof of residence not older than 3 months`,
    `Resume or CV of the account holder`,
    `Taxpayer registration certificate`,
    `Company registration documents (for legal entities)`,
    `Articles of association or corporate charter`,
    `Notarized and apostilled power of attorney (if applicable)`,
    `Document confirming current company status`,
    `Description of company activities`,
  ],
  faq: [
    { question: `What are the conditions for opening a bank account in the UK?`, answer: `The company must be registered in a country supported by UK banks, have a positive reputation, participants not listed in sanctions, and operate in a sector compliant with bank policy.` },
    { question: `Which UK bank is best to open an account?`, answer: `We select banks based on company registration country, residency of directors and beneficiaries, projected turnover, required currencies, and payment regions. Bank reputation and fees are also considered.` },
    { question: `How can a non-resident open a UK bank account?`, answer: `Submit KYC and AML forms, company incorporation documents, and personal documents of directors and beneficiaries. Banks may request contracts with partners. Having a UK resident as part of the company increases chances.` },
    { question: `Can a UK bank account be opened online?`, answer: `UK bank accounts must be opened with a personal visit to the bank.` },
  ],
};

const OpenABankAccountInUkPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenABankAccountInUkPage;
export { OpenABankAccountInUkPage };
