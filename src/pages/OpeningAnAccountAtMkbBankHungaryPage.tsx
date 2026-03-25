import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /opening-an-account-at-mkb-bank-hungary
const PAGE_DATA = {
  title: `Opening an Account at MKB Bank Hungary`,
  description: `Opening an account at MKB Bank: do it yourself or seek expert help? Opening an account at MKB Bank, Hungary, independently is possible, but it is better to entrust this task to specialists who are fully aware of the bank’s current requirements.`,
  requirements: [
    `What conditions does MKB Bank Hungary offer?`,
    `Future MKB clients should be aware of the following:`,
    `The bank opens deposit or current accounts. To open an account, a personal visit to the institution is required. The bank does not set minimum balance requirements, but each month there must be at least EUR 18 on the account to cover service fees. When opening an account, a one-time fee of HUF 39,000 must be paid. Incoming and outgoing transactions start from EUR 0.6`,
    `To start working with MKB Bank (Hungary), individuals must provide identity and proof of residence documents, as well as correctly complete the bank forms. For companies, the procedure is more complex. Businesses need to prepare:`,
    `Corporate documents: registration, statutory, and management appointment orders. Identity documents of company representatives and the board of founders. A business description in free form. Information about the source of funds`,
    `The list of documents is not exhaustive, as the bank may request additional official paperwork`,
  ],
  faq: [
    { question: `What is required to open an account at MKB Bank?`, answer: `To open an account at MKB Bank, you must complete and submit the bank’s KYC and AML forms, company statutory documents, and personal documents of directors and beneficiaries. The bank may also request contracts with partners and other information. Ke` },
    { question: `Can an account at MKB Bank be opened online?`, answer: `<p id="">An account at MKB Bank can only be opened with a personal visit to the bank.` },
    { question: `What is the cost of account maintenance at MKB Bank?`, answer: `You can find the current account maintenance fees on the bank’s website or by contacting our specialists.` },
    { question: `How long does it take to open an account at MKB Bank?`, answer: `The time required depends on the company’s specifics and the speed of responses to the bank’s inquiries. On average, the account opening process takes about 2 months.` },
  ],
};

const OpeningAnAccountAtMkbBankHungaryPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpeningAnAccountAtMkbBankHungaryPage;
export { OpeningAnAccountAtMkbBankHungaryPage };
