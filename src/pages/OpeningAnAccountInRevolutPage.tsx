import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { UKBankVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /opening-an-account-in-revolut
const PAGE_DATA = {
  title: `Opening an Account in Revolut`,
  description: `Through the Revolut payment system, individuals and businesses can open a UK bank account and manage transactions in 26 global currencies.`,
  sections: [
    {
      heading: `How to Open an Account in Revolut and Get a Contactless Card`,
      body: `Through the Revolut payment system, individuals and businesses can open a UK bank account and manage transactions in 26 global currencies. For corporate clients engaged in large multi-currency transactions, opening an account in Revolut is possible only after completing the application form and providing documents:\n\nidentifying the company's responsible persons and representatives; proving the company's official activity and the legal origin of funds.\n\nAdditional documents may be requested at the discretion of Revolut's administration. Future clients are also advised to review current tariffs, including:\n\nCurrency exchange: free up to £1,000; above that amount — from 0.5% of the sum. Transfers: free within the EU; other transactions — the first one free, then from €50 per transaction.\n\nThere are no requirements for minimum balance or limits on the number of transfers. A storage fee of 0.01% of funds on the account is charged. Clients should keep in mind that Revolut periodically updates its tariffs.`,
    },
    {
      heading: `Revolut: Open an Account in the UK`,
      body: `The British company Revolut specializes in financial technologies and offers a wide range of services:\n\nOpening bank accounts in pounds sterling and euros. Issuance of prepaid debit cards (Visa and MasterCard). Currency exchange. Stock trading. Opening cryptocurrency accounts and crypto exchange services.\n\nClients are not only offered to open an account — Revolut also actively promotes its multifunctional proprietary mobile app, which allows you to:\n\nmake international payments; track expenses; set limits; purchase cryptocurrency; change personal account settings at any time.`,
    },
    {
      heading: `Opening an Account in Revolut: Professional Support by Incluence Experts`,
      body: `Incluence offers professional and comprehensive support for opening an account in Revolut. Our experienced specialists will quickly prepare an up-to-date list of documents required to start cooperation with the bank. Submit an online application, and we will contact you as soon as possible.`,
    },
  ],
  requirements: [
    `Documents identifying the company's responsible persons`,
    `Proof of the company's official activity`,
    `Documents confirming the legal origin of funds`,
    `Company's statutory documents`,
    `Personal documents of directors and beneficiaries`,
  ],
  faq: [
    { question: `What is required to open an account in Revolut?`, answer: `To open an account in Revolut, you must complete online KYC and AML forms, upload the company's statutory documents, and provide personal documents of directors and beneficiaries. Key individuals must also pass verification.` },
    { question: `Can I open an account in Revolut online?`, answer: `Yes, an account in Revolut can be opened online by submitting information and documents through the payment system's website.` },
    { question: `What is the cost of maintaining an account in Revolut?`, answer: `You can check the current cost of account maintenance on the Revolut website or by contacting our specialists.` },
    { question: `What is the timeframe for opening an account in Revolut?`, answer: `The timeframe depends on the company's specifics and the speed of responses to the bank's questions. Typically, account opening takes about 2 months.` },
  ],
};

const OpeningAnAccountInRevolutPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
    heroVisual={<UKBankVisual />}

  />
);

export default OpeningAnAccountInRevolutPage;
export { OpeningAnAccountInRevolutPage };
