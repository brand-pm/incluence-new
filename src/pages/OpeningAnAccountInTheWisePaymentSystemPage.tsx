import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /opening-an-account-in-the-wise-payment-system
const PAGE_DATA = {
  title: `Opening an Account in the Wise Payment System`,
  description: `TransferWise (Wise) is a London-based company specializing in electronic money transfers. Its activities are regulated by the UK Financial Conduct Authority (FCA).`,
  requirements: [
    `Company details (registration data, location, industry)`,
    `Full names, birth dates, and residency of all owners and directors`,
    `Personal details of the business profile owner`,
    `Position of the profile owner in the company`,
    `Additional documents if signatory is not a director or shareholder`,
  ],
  faq: [
    { question: `What are the conditions for opening a Wise account?`, answer: `The company must be registered in one of the countries supported by Wise, have a good reputation, and its participants must not appear on sanction lists. The company’s business activities must not conflict with Wise’s policies.` },
    { question: `What is the cost of opening a Wise account?`, answer: `The final cost depends on the company’s residency, the residency of its participants, the nature of its activities, and other factors. Contact our specialists to find out the exact cost.` },
    { question: `How to get a Wise card?`, answer: `To order a card, you must first open a Wise account, then request the card through your online account.` },
    { question: `Can I open a Wise account online?`, answer: `Yes, account review and opening in Wise is carried out online.` },
  ],
};

const OpeningAnAccountInTheWisePaymentSystemPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpeningAnAccountInTheWisePaymentSystemPage;
export { OpeningAnAccountInTheWisePaymentSystemPage };
