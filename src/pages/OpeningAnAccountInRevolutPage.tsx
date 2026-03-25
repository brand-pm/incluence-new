import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /opening-an-account-in-revolut
const PAGE_DATA = {
  title: `Opening an Account in Revolut`,
  description: `Through the Revolut payment system, individuals and businesses can open a UK bank account and manage transactions in 26 global currencies. Corporate clients can open an account after completing the application form and providing documents.`,
  requirements: [
    `Documents identifying the company’s responsible persons`,
    `Proof of the company’s official activity`,
    `Documents confirming the legal origin of funds`,
    `Company’s statutory documents`,
    `Personal documents of directors and beneficiaries`,
  ],
  faq: [
    { question: `What is required to open an account in Revolut?`, answer: `You must complete online KYC and AML forms, upload the company’s statutory documents, and provide personal documents of directors and beneficiaries. Key individuals must also pass verification.` },
    { question: `Can I open an account in Revolut online?`, answer: `Yes, an account in Revolut can be opened online by submitting information and documents through the payment system’s website.` },
    { question: `What is the cost of maintaining an account in Revolut?`, answer: `You can check the current cost on the Revolut website or by contacting our specialists.` },
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
