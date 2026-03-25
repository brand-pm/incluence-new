import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-bank-account-as-foreigner-in-usa
const PAGE_DATA = {
  title: `Open bank account as foreigner in USA`,
  description: `The United States has a highly developed banking system with a wide range of financial services and products. Both personal and business accounts are available, though most banks require personal presence due to strict customer identification and anti-money laundering requirements.`,
  requirements: [
    `Company must have an EIN number`,
    `Beneficiaries must have an SSN or ITIN`,
    `KYC and AML banking forms`,
    `Company statutory documents`,
    `Personal documents of directors and beneficiaries`,
    `Personal visit to the bank (in most cases)`,
  ],
  faq: [
    { question: `What are the conditions for opening an account in US banks?`, answer: `American banks open accounts for local companies with an EIN number. Beneficiaries must have an SSN or ITIN. We can help you obtain the required numbers and open an account.` },
    { question: `What is the best bank in the USA to open an account with?`, answer: `We select banks considering the country of registration, residence of beneficiaries and directors, planned turnover, required currencies, and payment regions. Bank reputation and rates are also taken into account.` },
    { question: `How can a non-resident open a US bank account?`, answer: `You must fill out and submit KYC and AML forms, company statutory documents, and personal documents of directors and beneficiaries during a personal visit to the bank. The bank may request additional partner agreements.` },
    { question: `Can you open a US bank account online?`, answer: `Opening an account with a classic US bank usually requires a personal visit. However, there are online banking platforms in the USA that allow you to open accounts online.` },
  ],
};

const OpenBankAccountInUsaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenBankAccountInUsaPage;
export { OpenBankAccountInUsaPage };
