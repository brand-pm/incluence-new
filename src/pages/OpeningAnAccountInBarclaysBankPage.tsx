import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /opening-an-account-in-barclays-bank
const PAGE_DATA = {
  title: `Opening an Account in Barclays Bank`,
  description: `Registration and statutory documents with apostille. A certificate of good standing — for companies operating for more than 1 year. Minutes of the shareholders’ meeting where the decision to appoint directors and open a bank account was made.`,
  requirements: [
    `Professional Support in Opening an Account in Barclays Bank`,
    `Incluence will assist your company in opening an account in Barclays Bank. Our experts have extensive experience working with European banks, so our support will help you save considerable time. To receive an initial consultation, fill out the online form or contact us via the details provided on the website`,
  ],
  faq: [
    { question: `What is required to open an account in Barclays Bank?`, answer: `To open an account in Barclays Bank, you must complete and submit the bank’s KYC and AML forms, the company’s statutory documents, and personal documents of directors and beneficiaries. The bank may also request contracts with partners and other info` },
    { question: `Can I open an account in Barclays Bank online?`, answer: `An account in Barclays Bank can only be opened with a personal visit to the bank.` },
    { question: `What is the cost of maintaining an account in Barclays Bank?`, answer: `You can check the current cost of account maintenance on the Barclays Bank website or by contacting our specialists.` },
    { question: `What is the timeframe for opening an account in Barclays Bank?`, answer: `The speed of opening an account depends on the company’s specifics and how quickly responses are provided to the bank’s questions. Typically, account opening takes about 2 months.` },
  ],
};

const OpeningAnAccountInBarclaysBankPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpeningAnAccountInBarclaysBankPage;
export { OpeningAnAccountInBarclaysBankPage };
