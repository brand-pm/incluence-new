import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /opening-an-account-in-the-pay-pal-payment-system
const PAGE_DATA = {
  title: `Opening an Account in the PayPal Payment System`,
  description: `PayPal is the world’s largest debit-based electronic payment system. It provides clients with a wide range of tools for paying for services, online shopping, sending, and receiving money transfers.`,
  requirements: [
    `Company name, legal address, and registration date`,
    `Full name, date of birth, and contact details of directors`,
    `Citizenship details of shareholders and beneficiaries`,
    `Company’s bank account details`,
    `Personal documents of directors and beneficiaries`,
  ],
  faq: [
    { question: `What are the conditions for opening a PayPal account?`, answer: `The company must be registered in one of the countries supported by PayPal and have a positive reputation. Its participants must not appear on sanctions lists. The company’s field of activity must not contradict PayPal’s policies.` },
    { question: `What is the cost of opening a PayPal account?`, answer: `The final cost depends on the company’s residency, its participants, the nature of its business, and other factors. To find out the exact cost, please contact our specialists.` },
    { question: `How long does it take to open an account in PayPal?`, answer: `If submitted correctly, a PayPal account can be opened within 1-2 weeks.` },
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
