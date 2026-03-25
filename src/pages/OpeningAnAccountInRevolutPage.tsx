import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /opening-an-account-in-revolut
const PAGE_DATA = {
  title: `Opening an Account in Revolut`,
  description: `identifying the company’s responsible persons and representatives; proving the company’s official activity and the legal origin of funds. Currency exchange: free up to £1,000; above that amount — from 0.5% of the sum.`,
  requirements: [
    `Revolut: Open an Account in the UK`,
    `The British company Revolut specializes in financial technologies and offers a wide range of services:`,
    `Opening bank accounts in pounds sterling and euros. Issuance of prepaid debit cards (Visa and MasterCard). Currency exchange. Stock trading. Opening cryptocurrency accounts and crypto exchange services`,
    `Clients are not only offered to open an account — Revolut also actively promotes its multifunctional proprietary mobile app, which allows you to:`,
    `make international payments; track expenses; set limits; purchase cryptocurrency; change personal account settings at any time`,
    `Opening an Account in Revolut: Professional Support by Incluence Experts`,
    `Incluence offers professional and comprehensive support for opening an account in Revolut. Our experienced specialists will quickly prepare an up-to-date list of documents required to start cooperation with the bank. Submit an online application, and we will contact you as soon as possible`,
  ],
  faq: [
    { question: `What is required to open an account in Revolut?`, answer: `To open an account in Revolut, you must complete online KYC and AML forms, upload the company’s statutory documents, and provide personal documents of directors and beneficiaries. Key individuals must also pass verification.` },
    { question: `Can I open an account in Revolut online?`, answer: `Yes, an account in Revolut can be opened online by submitting information and documents through the payment system’s website.` },
    { question: `What is the cost of maintaining an account in Revolut?`, answer: `You can check the current cost of account maintenance on the Revolut website or by contacting our specialists.` },
    { question: `What is the timeframe for opening an account in Revolut?`, answer: `The timeframe depends on the company’s specifics and the speed of responses to the bank’s questions. Typically, account opening takes about 2 months.` },
  ],
};

const OpeningAnAccountInRevolutPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpeningAnAccountInRevolutPage;
export { OpeningAnAccountInRevolutPage };
