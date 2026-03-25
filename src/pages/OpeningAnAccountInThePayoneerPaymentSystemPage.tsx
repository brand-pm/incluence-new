import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /opening-an-account-in-the-payoneer-payment-system
const PAGE_DATA = {
  title: `Opening an Account in the Payoneer Payment System`,
  description: `Payoneer is a payment system that offers clients various financial services and online money transfers. The company is a registered provider of the international Mastercard payment system.`,
  sections: [
    {
      heading: `How to Open an Account: Payoneer and Account Registration Features`,
      body: `Payoneer is a payment system that offers clients various financial services and online money transfers. The company is a registered provider of the international Mastercard payment system.\n\nPayoneer opens personal and corporate accounts for clients from any jurisdiction, except those under U.S. sanctions.\n\nThe company provides users with bank details. Using these, account holders can receive incoming transfers and send outgoing payments. Accounts are opened in U.S., European, and several other banks. During Payoneer registration, the client can choose the currency — USD, EUR, GBP, and so on.`,
    },
    {
      heading: `How to Open a Payoneer Account: Procedure Details`,
      body: `The company has no physical branches, and the entire registration process can be completed remotely — online. No fee is charged to individuals or legal entities for opening an account.\n\nBefore opening a Payoneer account, clients need to carefully prepare for the procedure. Registration consists of two stages:\n\nPreparatory. Before actual registration, a set of actions must be completed. Their purpose is to provide the information and documents necessary for account registration. The duration of this stage depends on the applicant. If handled by our specialists, the time frame will be shorter. Main. This takes up to 5 business days from the moment all client data is submitted. Payoneer may request additional information or documents from the applicant, in line with Know Your Customer (KYC) requirements. Because of this, the time for this stage may be extended.\n\nIf you encounter questions or difficulties while managing your account, you can contact Payoneer's support service directly. The company employs staff fluent in Russian and English, which ensures prompt resolution of any issues.`,
    },
    {
      heading: `Why You Should Turn to Professionals When Opening a Payoneer Account`,
      body: `During verification, Payoneer carefully checks all documents and information provided by the user. If the submitted data does not meet requirements, registration may be refused. Once such a decision is made, no additional data will be requested, and any future attempts to register an account will also be rejected.\n\nBecause of this, before opening a Payoneer account, we recommend turning to professionals. Our specialists will help prepare all the required documents: for the company, the account manager, and the company director. We will open a Payoneer account for you with minimal risk of rejection.`,
    },
  ],
  requirements: [
    `Online registration form`,
    `Personal documents of the director and beneficiary`,
    `Company incorporation documents`,
    `Documents for the account manager`,
    `No fee for account opening (individuals or legal entities)`,
  ],
  faq: [
    { question: `What are the conditions for opening a Payoneer account?`, answer: `To open an account in the Payoneer payment system, you need to fill out an online form, upload personal documents of the director and beneficiary, and answer additional questions. Each company is reviewed individually. To ensure your application is submitted correctly, it is best to consult specialists.` },
    { question: `What is the cost of opening a Payoneer account?`, answer: `The final cost of opening a Payoneer account depends on the company's residency, its participants, the nature of the company's activities, and other factors. You can find out the exact cost of opening a Payoneer account for your company by contacting our specialists.` },
    { question: `How long does it take to open an account in Payoneer?`, answer: `Opening a Payoneer account can take 1–3 weeks.` },
    { question: `Can I open an account in the Payoneer payment system online?`, answer: `Yes, a Payoneer account can be opened online by completing electronic forms and uploading the required documents.` },
  ],
};

const OpeningAnAccountInThePayoneerPaymentSystemPage = () => (
  <ServiceDetailPage
    slug="opening-an-account-in-the-payoneer-payment-system"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpeningAnAccountInThePayoneerPaymentSystemPage;
export { OpeningAnAccountInThePayoneerPaymentSystemPage };
