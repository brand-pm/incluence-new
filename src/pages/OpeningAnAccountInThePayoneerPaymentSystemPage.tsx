import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /opening-an-account-in-the-payoneer-payment-system
const PAGE_DATA = {
  title: `Opening an Account in the Payoneer Payment System`,
  description: `How to Open an Account: Payoneer and Account Registration Features Payoneer is a payment system that offers clients various financial services and online money transfers. The company is a registered provider of the international Mastercard payment system.`,
  requirements: [
    `Why You Should Turn to Professionals When Opening a Payoneer Account`,
    `During verification, Payoneer carefully checks all documents and information provided by the user. If the submitted data does not meet requirements, registration may be refused. Once such a decision is made, no additional data will be requested, and any future attempts to register an account will also be rejected`,
    `Because of this, before opening a Payoneer account, we recommend turning to professionals. Our specialists will help prepare all the required documents: for the company, the account manager, and the company director. We will open a Payoneer account for you with minimal risk of rejection`,
  ],
  faq: [
    { question: `What are the conditions for opening a Payoneer account?`, answer: `To open an account in the Payoneer payment system, you need to fill out an online form, upload personal documents of the director and beneficiary, and answer additional questions. Each company is reviewed individually. To ensure your application is s` },
    { question: `What is the cost of opening a Payoneer account?`, answer: `The final cost of opening a Payoneer account depends on the company’s residency, its participants, the nature of the company’s activities, and other factors. You can find out the exact cost of opening a Payoneer account for your company by contacting` },
    { question: `How long does it take to open an account in Payoneer?`, answer: `Opening a Payoneer account can take 1–3 weeks.` },
    { question: `Can I open an account in the Payoneer payment system online?`, answer: `Yes, a Payoneer account can be opened online by completing electronic forms and uploading the required documents.` },
  ],
};

const OpeningAnAccountInThePayoneerPaymentSystemPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpeningAnAccountInThePayoneerPaymentSystemPage;
export { OpeningAnAccountInThePayoneerPaymentSystemPage };
