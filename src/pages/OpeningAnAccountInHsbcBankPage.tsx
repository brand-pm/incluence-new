import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /opening-an-account-in-hsbc-bank
const PAGE_DATA = {
  title: `Opening an Account in HSBC Bank`,
  description: `HSBC Bank has no minimum balance requirements, and account maintenance is free of charge. Opening and activating an account takes about 2 months.`,
  requirements: [
    `Copies of national ID and passport (originals presented)`,
    `Proof of residence (e.g. utility bill)`,
    `Company registration documents`,
    `Documents confirming business activity`,
    `A free-form company activity description`,
    `Beneficiary must be present in person`,
  ],
  faq: [
    { question: `What is required to open an account in HSBC Bank?`, answer: `You need to complete and submit the bank’s KYC and AML forms, company charter documents, and personal documents of directors and beneficiaries. The bank may additionally request contracts with partners. Key persons must undergo verification.` },
    { question: `Can an account in HSBC Bank be opened online?`, answer: `An HSBC Bank account can only be opened by visiting the bank in person.` },
    { question: `What is the cost of account maintenance in HSBC Bank?`, answer: `You can check the current account maintenance fees by visiting the bank’s website or contacting our specialists.` },
    { question: `What is the timeframe for opening an account in HSBC Bank?`, answer: `The timeframe depends on the specifics of the company and the speed of responses to the bank’s questions. Generally, opening an account takes around 2 months.` },
  ],
};

const OpeningAnAccountInHsbcBankPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpeningAnAccountInHsbcBankPage;
export { OpeningAnAccountInHsbcBankPage };
