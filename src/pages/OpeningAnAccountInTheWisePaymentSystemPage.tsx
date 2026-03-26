import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { UKBankVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /opening-an-account-in-the-wise-payment-system
const PAGE_DATA = {
  title: `Opening an Account in the Wise Payment System`,
  description: `TransferWise (Wise) is a London-based company specializing in electronic money transfers. Its activities are regulated by the UK Financial Conduct Authority (FCA).`,
  sections: [
    {
      heading: `Open an Account in TransferWise`,
      body: `TransferWise is a London-based company specializing in electronic money transfers. Its activities are regulated by the UK Financial Conduct Authority (FCA).`,
    },
    {
      heading: `Why Open an Account in TransferWise`,
      body: `Reliability is the main advantage for clients of this payment system. Even if TransferWise ceases to exist, you will still get your money back — from accounts at Barclays or Wells Fargo, where your funds are securely stored.\n\nIf you choose to work with TransferWise, you can open an account in multiple world currencies, including a multi-currency account.\n\nFinancial transactions can be carried out through the international SWIFT transfer system with a simple and user-friendly interface. Clients can also use banking details to receive payments from the USA, Australia, the UK, and European countries.`,
    },
    {
      heading: `Registration, Opening an Account in TransferWise and Verification`,
      body: `When registering a business account, TransferWise will require you to:\n\nProvide company details, including business registration data, location, industry, etc. You must also indicate the full names, birth dates, and countries of residence of all owners and directors of the company. Provide personal details of the business profile owner, including their position in the company. If the person is not a director or shareholder, additional information and documents may be required.`,
    },
    {
      heading: `Types of Accounts in TransferWise`,
      body: `TransferWise accounts can be registered remotely. Two types of accounts are available: personal and business. For business accounts, the company always conducts a full compliance check. This process is completed before the first transfer or account activation.\n\nOn average, verification takes 4–7 business days, but in some cases, the timeframe may be longer, and additional information or documents may be required.\n\nTransferWise does not always accept all applicants, so there is always a risk of refusal for both personal and business accounts.\n\nTo open an account in TransferWise and successfully pass verification, contact our specialists. We will prepare all the necessary documents, minimize your involvement in the process, and register a personal or business account for you with minimal risk of refusal. Our managers will provide you with detailed consultations.`,
    },
  ],
  requirements: [
    `Company details (registration data, location, industry)`,
    `Full names, birth dates, and residency of all owners and directors`,
    `Personal details of the business profile owner`,
    `Position of the profile owner in the company`,
    `Additional documents if signatory is not a director or shareholder`,
  ],
  faq: [
    { question: `What are the conditions for opening a Wise account?`, answer: `To successfully open a Wise account, the company must be registered in one of the countries supported by Wise, have a good reputation, and its participants must not appear on sanction lists. The company's business activities must not conflict with Wise's policies.` },
    { question: `What is the cost of opening a Wise account?`, answer: `The final cost of opening a Wise account depends on the company's residency, the residency of its participants, the nature of its activities, and other factors. Contact our specialists to find out the exact cost for your company.` },
    { question: `How to get a Wise card?`, answer: `To order a card, you must first open a Wise account, then request the card through your online account.` },
    { question: `Can I open a Wise account online?`, answer: `Yes, account review and opening in Wise is carried out online.` },
  ],
};

const OpeningAnAccountInTheWisePaymentSystemPage = () => (
  <ServiceDetailPage
    slug="opening-an-account-in-the-wise-payment-system"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}

  />
);

export default OpeningAnAccountInTheWisePaymentSystemPage;
export { OpeningAnAccountInTheWisePaymentSystemPage };
