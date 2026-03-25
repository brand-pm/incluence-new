import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /opening-an-account-at-banque-de-luxembourg
const PAGE_DATA = {
  title: `Opening an Account at Banque De Luxembourg`,
  description: `Banque De Luxembourg offers accounts in thirteen currencies with online banking management in English, French, or German. Opening an account takes approximately 2 months.`,
  requirements: [
    `Company registration and incorporation documents`,
    `Documents verifying identity and residence of the beneficiary`,
    `Excerpt from the commercial register of the company’s country`,
    `Certificate of Good Standing (if operating 12+ months)`,
    `Correctly completed bank forms`,
    `Documents confirming the legal origin of funds`,
    `All documents must be notarized, translated, and apostilled`,
  ],
  faq: [
    { question: `How to open an account at Banque De Luxembourg?`, answer: `You need to complete and submit KYC and AML bank forms, company incorporation documents, and personal documents of directors and beneficiaries. The bank may additionally request contracts with partners. Key persons must undergo verification.` },
    { question: `Can an account at Banque De Luxembourg be opened online?`, answer: `An account at Banque De Luxembourg can be opened with personal presence at the bank.` },
    { question: `What is the cost of account maintenance at Banque De Luxembourg?`, answer: `The current cost can be found on the bank’s website or by contacting our specialists.` },
    { question: `What is the timeline for opening an account at Banque De Luxembourg?`, answer: `The speed depends on the company’s specifics and the response time to bank inquiries. Typically, account opening takes about 2 months.` },
  ],
};

const OpeningAnAccountAtBanqueDeLuxembourgPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpeningAnAccountAtBanqueDeLuxembourgPage;
export { OpeningAnAccountAtBanqueDeLuxembourgPage };
