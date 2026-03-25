import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-a-bank-account-in-saint-lucia
const PAGE_DATA = {
  title: `Open a Bank Account in Saint Lucia`,
  description: `Non-resident registration in Saint Lucia banks is common, with local financial institutions being loyal to foreign clients. Most banks do not require visiting a branch, and account opening starts from 2 weeks.`,
  sections: [
    {
      heading: `How to Open a Bank Account in Saint Lucia Without Difficulties`,
      body: `Incluence Limited offers full support in opening bank accounts in Saint Lucia. Contact our specialists for an initial consultation and begin preparing the necessary documents. We assist with certification, submission, and registration, ensuring:\nsuccessful account opening in Saint Lucia; transparency and clarity of all procedures; the possibility of further support on mutually beneficial terms.\n\nDuring the cooperation, your manager will always be in touch. For more details, please fill out the contact form on our website, and we will get back to you.`,
    },
    {
      heading: `Features of Banking and Account Opening in Saint Lucia`,
      body: `Non-resident registration in Saint Lucia banks is common. Local financial institutions are loyal to foreign clients:\n\nPersonal visit to open an account in Saint Lucia. Most banks do not require visiting a branch. Account opening timeframe. Saint Lucia has some of the fastest account opening terms — starting from 2 weeks. Minimum balance requirements. Restrictions are minimal; usually, you must maintain a balance starting from 1,000 EUR. International transactions to and from accounts are processed within minutes. Low maintenance fees — starting from 15 EUR per month. Financial institutions in Saint Lucia always offer a wide range of tariffs and loyalty programs.\n\nMany banks in Saint Lucia offer account opening, and this sector is quite developed. Each bank has its own cooperation terms, but most account opening requirements are identical. A standard package of documents is typically required, for example:\nNotarized copies of directors' and shareholders' passports and proof of residence. Incorporation documents and information on share capital (if applicable), notarized and apostilled (if required). A power of attorney for account opening, if submitted by a company representative. Contracts with partner companies.\n\nMain requirements of banks for clients are legality, solvency, and transparency of activities. For example, in Hermes Bank, one of the largest institutions on the island, the conditions are:\nAccount opening time — 2 weeks. Personal visit required — no. Minimum balance — from 1,000 EUR.\n\nConditions differ slightly at Boslil Bank:\nAccount opening time — from 7 business days. Personal visit required — no. Minimum balance — from 5,000 EUR.\n\nThe account opening process usually includes:\ndocument collection and certification; review; registration; depositing the minimum balance.\n\nNevertheless, despite relatively easy requirements, account opening in Saint Lucia may face challenges — the bank has the right to refuse services for a number of reasons:\nerrors in the document package; inaccurate data.\n\nTo avoid risks and wasted time, most non-residents prefer to seek assistance from specialists experienced in international banking services.`,
    },
  ],
  requirements: [
    `Notarized copies of directors' and shareholders' passports`,
    `Proof of residence for directors and shareholders`,
    `Incorporation documents (notarized and apostilled if required)`,
    `Information on share capital (if applicable)`,
    `Power of attorney for account opening (if representative)`,
    `Contracts with partner companies`,
    `KYC and AML forms`,
  ],
  faq: [
    { question: `Which bank in Saint Lucia is best for opening a bank account?`, answer: `We select banks based on the company's country of registration, the residency of beneficiaries and directors, planned turnover, required currencies, and payment regions. We also consider the bank's reputation and fees. To choose the most suitable option for your company, please contact our specialists.` },
    { question: `What is the cost of opening an account with Wise?`, answer: `The final cost of opening a Wise account depends on the company's residency, the residency of its participants, the nature of the company's business, and other factors. To find out the exact cost of opening a Wise account for your company, please consult our specialists.` },
    { question: `How can a non-resident open a bank account in Saint Lucia?`, answer: `To open an account in Saint Lucia banks, you need to complete and submit banking KYC and AML forms, the company's incorporation documents, and personal documents of directors and beneficiaries. The bank may additionally request partner contracts and other information.` },
    { question: `Can I open a bank account in Saint Lucia online?`, answer: `The review and account opening process in Saint Lucia can be completed online. However, note that the bank may request original documents if only scanned copies were submitted during the application.` },
  ],
};

const OpenABankAccountInSaintLuciaPage = () => (
  <ServiceDetailPage
    slug="open-a-bank-account-in-saint-lucia"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenABankAccountInSaintLuciaPage;
export { OpenABankAccountInSaintLuciaPage };
