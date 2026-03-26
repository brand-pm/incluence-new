import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { HungaryBankVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /opening-an-account-at-mkb-bank-hungary
const PAGE_DATA = {
  title: `Opening an Account at MKB Bank Hungary`,
  description: `Opening an account at MKB Bank Hungary independently is possible, but it is better to entrust this task to specialists who are fully aware of the bank's current requirements.`,
  sections: [
    {
      heading: `Opening an account at MKB Bank: do it yourself or seek expert help?`,
      body: `Opening an account at MKB Bank, Hungary, independently is possible, but it is better to entrust this task to specialists who are fully aware of the bank's current requirements. This way, both individuals and companies can avoid the main risks of account opening refusals and save valuable time.\n\nTo start preparing the required documents, contact our experts using the online form. You can also reach out to our specialists at any convenient time to ask any questions.`,
    },
    {
      heading: `What conditions does MKB Bank Hungary offer?`,
      body: `Future MKB clients should be aware of the following:\n\nThe bank opens deposit or current accounts. To open an account, a personal visit to the institution is required. The bank does not set minimum balance requirements, but each month there must be at least EUR 18 on the account to cover service fees. When opening an account, a one-time fee of HUF 39,000 must be paid. Incoming and outgoing transactions start from EUR 0.6.\n\nTo start working with MKB Bank (Hungary), individuals must provide identity and proof of residence documents, as well as correctly complete the bank forms. For companies, the procedure is more complex. Businesses need to prepare:\n\nCorporate documents: registration, statutory, and management appointment orders. Identity documents of company representatives and the board of founders. A business description in free form. Information about the source of funds.\n\nThe list of documents is not exhaustive, as the bank may request additional official paperwork.`,
    },
  ],
  requirements: [
    `Corporate documents (registration, statutory, management orders)`,
    `Identity documents of company representatives and founders`,
    `A business description in free form`,
    `Information about the source of funds`,
    `Personal visit to the institution is required`,
    `One-time fee of HUF 39,000 at account opening`,
    `At least EUR 18 monthly to cover service fees`,
  ],
  faq: [
    { question: `What is required to open an account at MKB Bank?`, answer: `To open an account at MKB Bank, you must complete and submit the bank's KYC and AML forms, company statutory documents, and personal documents of directors and beneficiaries. The bank may also request contracts with partners and other information. Key persons must undergo verification for successful account opening.` },
    { question: `Can an account at MKB Bank be opened online?`, answer: `An account at MKB Bank can only be opened with a personal visit to the bank.` },
    { question: `What is the cost of account maintenance at MKB Bank?`, answer: `You can find the current account maintenance fees on the bank's website or by contacting our specialists.` },
    { question: `How long does it take to open an account at MKB Bank?`, answer: `The time required depends on the company's specifics and the speed of responses to the bank's inquiries. On average, the account opening process takes about 2 months.` },
  ],
};

const OpeningAnAccountAtMkbBankHungaryPage = () => (
  <ServiceDetailPage
    slug="opening-an-account-at-mkb-bank-hungary"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}

  />
);

export default OpeningAnAccountAtMkbBankHungaryPage;
export { OpeningAnAccountAtMkbBankHungaryPage };
