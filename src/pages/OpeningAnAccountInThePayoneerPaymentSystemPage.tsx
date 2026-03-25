import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /opening-an-account-in-the-payoneer-payment-system
const PAGE_DATA = {
  title: `Opening an Account in the Payoneer Payment System`,
  description: `Payoneer is a payment system that offers clients various financial services and online money transfers. The company is a registered provider of the international Mastercard payment system.`,
  requirements: [
    `Online registration form`,
    `Personal documents of the director and beneficiary`,
    `Company incorporation documents`,
    `Documents for the account manager`,
    `No fee for account opening (individuals or legal entities)`,
  ],
  faq: [
    { question: `What are the conditions for opening a Payoneer account?`, answer: `You need to fill out an online form, upload personal documents of the director and beneficiary, and answer additional questions. Each company is reviewed individually. To ensure correct submission, consult specialists.` },
    { question: `What is the cost of opening a Payoneer account?`, answer: `The final cost depends on the company’s residency, its participants, the nature of activities, and other factors. You can find out the exact cost by contacting our specialists.` },
    { question: `How long does it take to open an account in Payoneer?`, answer: `Opening a Payoneer account can take 1-3 weeks.` },
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
