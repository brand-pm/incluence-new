import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /opening-an-account-at-banque-de-luxembourg
const PAGE_DATA = {
  title: `Opening an Account at Banque De Luxembourg`,
  description: `Company registration and incorporation documents. Documents verifying the identity and residence of the beneficiary. Excerpt from the commercial register of the country where the legal entity is registered.`,
  requirements: [
    `Account at Banque De Luxembourg`,
    `Bank staff are ready to communicate with clients in English, Hungarian, French, Russian, or German. Thirteen currencies are available for account opening, and management is done through online banking in English, French, or German. Documents that may be required at BIL Luxembourg include:`,
    `Company registration and incorporation documents. Documents verifying the identity and residence of the beneficiary. Excerpt from the commercial register of the country where the legal entity is registered. If the company has been operating for more than 12 months, a Certificate of Good Standing is required. Correctly completed bank forms. Documents confirming the legal origin of funds`,
    `The entire package must be legalized — notarized, translated, and apostilled`,
    `What to Consider Before Opening an Account at Banque Internationale à Luxembourg SA`,
    `Opening an account takes approximately 2 months. Personal presence at the bank is recommended, but remote registration is possible. The bank follows a “know your client” policy — if questions arise, the administration may request additional documents and extend the review period`,
    `If your company is interested in opening an account at Banque De Luxembourg, our specialists are ready to provide detailed consultation and assist in preparing the document package`,
  ],
  faq: [
    { question: `How to open an account at Banque De Luxembourg?`, answer: `To open an account at Banque De Luxembourg, you need to complete and submit KYC and AML bank forms, company incorporation documents, and personal documents of directors and beneficiaries. The bank may additionally request contracts with partners and ` },
    { question: `Can an account at Banque De Luxembourg be opened online?`, answer: `An account at Banque De Luxembourg can be opened with the personal presence at the bank.` },
    { question: `What is the cost of account maintenance at Banque De Luxembourg?`, answer: `The current cost of maintaining an account at Banque De Luxembourg can be found on the bank’s website or by contacting our specialists.` },
    { question: `What is the timeline for opening an account at Banque De Luxembourg?`, answer: `The speed of account opening depends on the company’s specifics and the response time to bank inquiries. Typically, account opening takes about 2 months.` },
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
