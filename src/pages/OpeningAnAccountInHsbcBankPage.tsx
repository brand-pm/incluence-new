import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /opening-an-account-in-hsbc-bank
const PAGE_DATA = {
  title: `Opening an Account in HSBC Bank`,
  description: `HSBC Bank has no minimum balance requirements, and account maintenance is free of charge. Opening and activating an account takes about 2 months.`,
  sections: [
    {
      heading: `Account Terms in HSBC`,
      body: `The first thing that attracts clients is the absence of minimum balance requirements. In addition, bank staff speak English, and account management is available in several ways:\n\nBy phone — including mobile, but subject to service by certain telecom operators. Through online banking.\n\nHSBC Bank has set the following fees:\n\nAccount maintenance — free of charge. Card service — from USD 2.5. Transfers — from USD 19 + correspondent fee. Available turnover per card or account — up to USD 1,000,000.\n\nOpening and activating an account takes about 2 months.`,
    },
    {
      heading: `Which documents are required by HSBC Bank`,
      body: `To open an account, the beneficiary must be present in person. If the account signatory and the beneficiary are different individuals, this fact must be indicated before submitting the document package, as additional official papers may be required. As standard, HSBC Bank requests the following documents for each responsible and executive person:\n\nCopies of the national ID and passport, with originals presented. Proof of residence at the address indicated in the application — e.g., utility bill or other document. Company registration documents. Documents confirming business activity. A free-form company activity description.`,
    },
    {
      heading: `How to quickly submit documents to HSBC Bank`,
      body: `Incluence provides support for cooperation with HSBC Bank. Our experienced specialists are ready to promptly outline the current list of documents required for your company, ensure the correct preparation of the application, and provide support until account details are received. If you have any questions or wish to book an initial consultation, fill in the online form on our website.`,
    },
  ],
  requirements: [
    `Copies of national ID and passport (originals presented)`,
    `Proof of residence (e.g. utility bill)`,
    `Company registration documents`,
    `Documents confirming business activity`,
    `A free-form company activity description`,
    `Beneficiary must be present in person`,
  ],
  faq: [
    { question: `What is required to open an account in HSBC Bank?`, answer: `To open an account in HSBC Bank, you need to complete and submit the bank's KYC and AML forms, company charter documents, and personal documents of directors and beneficiaries. The bank may additionally request contracts with partners and other information. For successful account opening, key persons must undergo verification.` },
    { question: `Can an account in HSBC Bank be opened online?`, answer: `An HSBC Bank account can only be opened by visiting the bank in person.` },
    { question: `What is the cost of account maintenance in HSBC Bank?`, answer: `You can check the current account maintenance fees in HSBC Bank by visiting the bank's website or contacting our specialists.` },
    { question: `What is the timeframe for opening an account in HSBC Bank?`, answer: `The timeframe depends on the specifics of the company and the speed of responses to the bank's questions. Generally, opening an account takes around 2 months.` },
  ],
};

const OpeningAnAccountInHsbcBankPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpeningAnAccountInHsbcBankPage;
export { OpeningAnAccountInHsbcBankPage };
