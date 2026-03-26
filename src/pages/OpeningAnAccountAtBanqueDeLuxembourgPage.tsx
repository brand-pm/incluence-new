import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { LuxembourgBankVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /opening-an-account-at-banque-de-luxembourg
const PAGE_DATA = {
  title: `Opening an Account at Banque De Luxembourg`,
  description: `Banque De Luxembourg offers accounts in thirteen currencies with online banking management in English, French, or German. Opening an account takes approximately 2 months.`,
  sections: [
    {
      heading: `Account at Banque De Luxembourg`,
      body: `Bank staff are ready to communicate with clients in English, Hungarian, French, Russian, or German. Thirteen currencies are available for account opening, and management is done through online banking in English, French, or German. Documents that may be required at BIL Luxembourg include:\n\nCompany registration and incorporation documents. Documents verifying the identity and residence of the beneficiary. Excerpt from the commercial register of the country where the legal entity is registered. If the company has been operating for more than 12 months, a Certificate of Good Standing is required. Correctly completed bank forms. Documents confirming the legal origin of funds.\n\nThe entire package must be legalized — notarized, translated, and apostilled.`,
    },
    {
      heading: `What to Consider Before Opening an Account at Banque Internationale à Luxembourg SA`,
      body: `Opening an account takes approximately 2 months. Personal presence at the bank is recommended, but remote registration is possible. The bank follows a "know your client" policy — if questions arise, the administration may request additional documents and extend the review period.\n\nIf your company is interested in opening an account at Banque De Luxembourg, our specialists are ready to provide detailed consultation and assist in preparing the document package.`,
    },
    {
      heading: `Fees at Banque Internationale Luxembourg`,
      body: `Those wishing to open an account at Banque De Luxembourg should familiarize themselves with the fees in advance.\n\nAccount opening is available to clients with a turnover of at least €300,000 — this amount is the minimum balance. Initial deposit for account opening — from €75,000; the remaining amount is credited later. Account maintenance — from €7.5 per month. Outgoing transaction fee — from €0.5. Incoming transfer fee — minimum 0.20% of the amount.`,
    },
  ],
  requirements: [
    `Company registration and incorporation documents`,
    `Documents verifying identity and residence of the beneficiary`,
    `Excerpt from the commercial register of the company's country`,
    `Certificate of Good Standing (if operating 12+ months)`,
    `Correctly completed bank forms`,
    `Documents confirming the legal origin of funds`,
    `All documents must be notarized, translated, and apostilled`,
  ],
  faq: [
    { question: `How to open an account at Banque De Luxembourg?`, answer: `To open an account at Banque De Luxembourg, you need to complete and submit KYC and AML bank forms, company incorporation documents, and personal documents of directors and beneficiaries. The bank may additionally request contracts with partners and other information. Key persons must undergo verification for successful account opening.` },
    { question: `Can an account at Banque De Luxembourg be opened online?`, answer: `An account at Banque De Luxembourg can be opened with the personal presence at the bank.` },
    { question: `What is the cost of account maintenance at Banque De Luxembourg?`, answer: `The current cost of maintaining an account at Banque De Luxembourg can be found on the bank's website or by contacting our specialists.` },
    { question: `What is the timeline for opening an account at Banque De Luxembourg?`, answer: `The speed of account opening depends on the company's specifics and the response time to bank inquiries. Typically, account opening takes about 2 months.` },
  ],
};

const OpeningAnAccountAtBanqueDeLuxembourgPage = () => (
  <ServiceDetailPage
    slug="opening-an-account-at-banque-de-luxembourg"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}

  />
);

export default OpeningAnAccountAtBanqueDeLuxembourgPage;
export { OpeningAnAccountAtBanqueDeLuxembourgPage };
