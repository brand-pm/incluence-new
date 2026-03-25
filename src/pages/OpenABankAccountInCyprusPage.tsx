import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-a-bank-account-in-cyprus
const PAGE_DATA = {
  title: `Open a Bank Account in Cyprus`,
  description: `Opening an account in Cyprus is a convenient way to preserve and manage assets, with most local banks offering cooperation with Russian-speaking staff and a wide range of additional options. Cyprus is a member of the European Union and offers lower tax rates compared to many other countries.`,
  requirements: [
    `Identity document of account holder`,
    `Proof of residence issued within the last 3 months`,
    `Bank application form for account opening`,
    `Proof of solvency`,
    `Incorporation documents (for legal entities)`,
    `Identity documents of all company participants`,
    `Proof of legality of invested funds`,
  ],
  faq: [
    { question: `What are the conditions for opening an account in Cyprus banks?`, answer: `You must complete and submit KYC and AML forms, provide the company's statutory documents, and personal documents of directors and beneficiaries. The bank may also request partner agreements. Key persons must complete verification.` },
    { question: `Which bank in Cyprus is the best for opening an account?`, answer: `We select banks considering company registration country, residency of directors and beneficiaries, expected turnover, required currencies, and payment regions. Bank reputation and fees are also taken into account.` },
    { question: `How much does it cost to open an account in Cyprus banks?`, answer: `The final cost depends on various factors including company registration country, participant residency, and type of business activity. Contact our specialists for an exact cost for your company.` },
    { question: `Can a bank account in Cyprus be opened online?`, answer: `Personal presence is required to open an account in Cyprus banks. However, many Cypriot banks have representative offices worldwide.` },
  ],
};

const OpenABankAccountInCyprusPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenABankAccountInCyprusPage;
export { OpenABankAccountInCyprusPage };
