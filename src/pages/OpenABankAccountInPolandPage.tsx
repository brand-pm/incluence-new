import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-a-bank-account-in-poland
const PAGE_DATA = {
  title: `Open a Bank Account in Poland`,
  description: `bank service conditions; timeframe and procedure for opening accounts. company charter and other founding documents; identification documents of directors, shareholders, beneficiaries; proof of the company’s legal address, as well as other documents requested individually.`,
  requirements: [
    `Required Documents for Opening a Bank Account in Poland`,
    `Depending on the bank and the specifics of your business, requirements may vary. Generally, Polish banks require:`,
    `company registration certificate; list of incorporation documents; copy of the corporate structure; proof that directors were duly appointed to their positions; proof of the company’s registered address; notarized annual financial report (required by some banks)`,
    `To maximize your chances of successfully opening a bank account in Poland, contact Incluence specialists. They will answer your questions and recommend the bank best suited to your business`,
  ],
  faq: [
    { question: `What are the conditions for opening a bank account in Poland?`, answer: `For a successful account opening in Polish banks, the company must be registered in one of the countries accepted by Polish banks and have a positive reputation. Its participants must not appear on sanctions lists, and the company’s activities must n` },
    { question: `Which bank in Poland is best to open an account with?`, answer: `We select banks based on the company’s country of registration, residency of directors and beneficiaries, expected turnover, required currencies, and payment regions. We also consider the bank’s reputation and fees. To choose the best option for your` },
    { question: `How can a non-resident open a bank account in Poland?`, answer: `To open an account in Polish banks, you must complete and submit KYC and AML forms, the company’s statutory documents, and personal documents of directors and beneficiaries. The bank may additionally request contracts with partners and other informat` },
    { question: `Can you open a bank account in Poland online?`, answer: `Opening an account in Polish banks requires a personal visit.` },
  ],
};

const OpenABankAccountInPolandPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenABankAccountInPolandPage;
export { OpenABankAccountInPolandPage };
