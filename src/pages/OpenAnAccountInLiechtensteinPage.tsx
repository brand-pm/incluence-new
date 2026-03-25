import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-an-account-in-liechtenstein
const PAGE_DATA = {
  title: `Open an Account in Liechtenstein`,
  description: `Account opening timeline: varies by bank, usually at least 1 month. Need for a personal visit: more financial institutions allow remote account opening. Minimum account balance: varies by bank, usually no less than 5,000 units of the account currency.`,
  requirements: [
    `Opening a Bank Account in Liechtenstein`,
    `Liechtenstein is a country with a high level of confidentiality in the financial sector. Local banking services are relatively expensive, and there are requirements for maintaining minimum balances on current accounts or deposits`,
    `Bank Accounts in Liechtenstein: Benefits`,
    `The prospect of opening accounts in Liechtenstein banks is attractive to many businesspeople. Practice shows that the country’s institutions offer a wide range of services for their clients. Additionally:`,
    `They have extensive experience working with legal entities and high-net-worth private clients. Bank employees are strictly required to maintain client confidentiality — disclosure is a criminal offense`,
    `There is also the concept of “professional secrecy,” meaning banking staff cannot be used as witnesses in court proceedings`,
    `Can an Account be Opened Quickly in Liechtenstein Banks?`,
    `If you need an account in a Liechtenstein bank, Incluence Limited is ready to assist. Our team consists of specialists familiar with the principality’s financial market and with extensive experience. We can discuss your project and organize account opening at a convenient time`,
  ],
  faq: [
    { question: `Which bank in Liechtenstein is best for opening a bank account?`, answer: `We select banks based on the company’s registration country, the residency of beneficiaries and directors, planned turnovers, required currencies, and payment regions. The bank’s reputation and fees are also considered. To choose the most suitable op` },
    { question: `What are the requirements for opening an account in Liechtenstein banks?`, answer: `To open an account in Liechtenstein banks, you need to complete and submit KYC and AML forms, company incorporation documents, and personal documents of directors and beneficiaries. The bank may also request partner contracts and other information. K` },
    { question: `How much does it cost to open an account in Liechtenstein banks?`, answer: `The final cost of opening an account in Liechtenstein banks depends on various factors. You can find out the exact cost by contacting our specialists.` },
    { question: `Can an account in Liechtenstein banks be opened online?`, answer: `An account in Liechtenstein banks can be opened with the personal presence of a company representative.` },
  ],
};

const OpenAnAccountInLiechtensteinPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenAnAccountInLiechtensteinPage;
export { OpenAnAccountInLiechtensteinPage };
