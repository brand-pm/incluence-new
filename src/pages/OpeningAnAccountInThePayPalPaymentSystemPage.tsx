import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /opening-an-account-in-the-pay-pal-payment-system
const PAGE_DATA = {
  title: `Opening an Account in the PayPal Payment System`,
  description: `How to Open an Account in PayPal PayPal is the world’s largest debit-based electronic payment system. It provides its clients with a wide range of tools for paying for services, online shopping, sending, and receiving money transfers.`,
  requirements: [
    `What Is Required to Create a PayPal Account`,
    `PayPal opens accounts and provides access only to clients who complete the identification procedure. This requires several steps: submitting personal data of the account owner and properly preparing and submitting documents`,
    `company name, legal address, and registration date; full name, date of birth, citizenship, and contact details of directors, shareholders, and beneficiaries; company’s bank account details; personal details of directors and beneficiaries, along with the relevant supporting documents`,
    `Each case is reviewed individually, which is why opening a PayPal account on your own can be a difficult task. PayPal may request additional information and documents to be submitted within tight deadlines`,
    `To quickly register a PayPal account with minimal risk of rejection, contact our specialists. We will handle all necessary procedures and open a personal or corporate account for you. Our managers will provide a detailed consultation`,
  ],
  faq: [
    { question: `What are the conditions for opening a PayPal account?`, answer: `To successfully open a PayPal account, the company must be registered in one of the countries supported by PayPal and have a positive reputation. Its participants must not appear on sanctions lists. The company’s field of activity must not contradict` },
    { question: `What is the cost of opening a PayPal account?`, answer: `The final cost of opening a PayPal account depends on the company’s residency, its participants, the nature of its business, and other factors. To find out the exact cost for your company, please contact our specialists.` },
    { question: `How long does it take to open an account in PayPal?`, answer: `If submitted correctly, a PayPal account can be opened within 1–2 weeks.` },
    { question: `Can a PayPal account be opened online?`, answer: `The review and account opening process in PayPal takes place online.` },
  ],
};

const OpeningAnAccountInThePayPalPaymentSystemPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpeningAnAccountInThePayPalPaymentSystemPage;
export { OpeningAnAccountInThePayPalPaymentSystemPage };
