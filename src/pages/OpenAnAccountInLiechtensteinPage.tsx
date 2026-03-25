import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-an-account-in-liechtenstein
const PAGE_DATA = {
  title: `Open an Account in Liechtenstein`,
  description: `Liechtenstein is a country with a high level of confidentiality in the financial sector. Local banking services are relatively expensive, and there are requirements for maintaining minimum balances on current accounts or deposits.`,
  requirements: [
    `Passport`,
    `Notarized copy of shareholders and directors`,
    `Proof of residence of shareholders and directors`,
    `Company incorporation documents`,
    `Contracts with partners`,
    `Minimum balance varies by bank (usually 5,000+ units)`,
  ],
  faq: [
    { question: `Which bank in Liechtenstein is best for opening a bank account?`, answer: `We select banks based on the company’s registration country, the residency of beneficiaries and directors, planned turnovers, required currencies, and payment regions. The bank’s reputation and fees are also considered.` },
    { question: `What are the requirements for opening an account in Liechtenstein banks?`, answer: `You need to complete and submit KYC and AML forms, company incorporation documents, and personal documents of directors and beneficiaries. The bank may also request partner contracts. Key persons must undergo verification.` },
    { question: `How much does it cost to open an account in Liechtenstein banks?`, answer: `The final cost depends on various factors. You can find out the exact cost by contacting our specialists.` },
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
