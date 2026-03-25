import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-a-bank-account-in-germany
const PAGE_DATA = {
  title: `Open a Bank Account in Germany`,
  description: `German banks attract clients with favorable conditions, deposit insurance starting from 100,000 euros, and an impeccable reputation. Banking in Germany is focused on comprehensive service, offering favorable rates, transparent conditions, and a wide range of banking products.`,
  requirements: [
    `Valid ID and tax identification number`,
    `Entry permit to the country`,
    `Corporate documents under apostille (for legal entities)`,
    `Company activity description`,
    `Notarized passport copies of all shareholders and founders`,
    `Proof of residence for shareholders and beneficiaries`,
    `KYC and AML forms`,
  ],
  faq: [
    { question: `What are the conditions for opening an account in German banks?`, answer: `You must complete and submit KYC and AML forms, provide the company's incorporation documents and personal documents of directors and beneficiaries. The bank may additionally request contracts with partners.` },
    { question: `Which German bank is best for opening a bank account?`, answer: `We select banks based on the company's country of registration, the residency of beneficiaries and directors, planned turnover, required currencies, and payment regions. Bank reputation and fees are also considered.` },
    { question: `How can a non-resident open an account in a German bank?`, answer: `A company with a non-resident founder must have a local director. Without a local director, an account can be opened in a payment system or in banks outside Germany. Specialist assistance significantly increases the likelihood of approval.` },
    { question: `Can you open an account in German banks online?`, answer: `Opening an account in a German bank requires a personal visit to the bank or its foreign representative office.` },
  ],
};

const OpenABankAccountInGermanyPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenABankAccountInGermanyPage;
export { OpenABankAccountInGermanyPage };
