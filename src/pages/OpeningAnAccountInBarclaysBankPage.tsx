import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /opening-an-account-in-barclays-bank
const PAGE_DATA = {
  title: `Opening an Account in Barclays Bank`,
  description: `A corporate client must prepare a package of documents to begin cooperation with Barclays Bank. The bank reviews documents within 1-2 months, and all documents must be notarized and translated.`,
  requirements: [
    `Registration and statutory documents with apostille`,
    `Certificate of Good Standing (for companies operating 1+ year)`,
    `Minutes of the shareholders’ meeting on director appointment`,
    `Licenses granting the right to carry out business activities`,
    `Copies of identity and residence documents of responsible persons`,
    `Application form issued by the bank`,
  ],
  faq: [
    { question: `What is required to open an account in Barclays Bank?`, answer: `You must complete and submit the bank’s KYC and AML forms, the company’s statutory documents, and personal documents of directors and beneficiaries. The bank may also request contracts with partners. Key individuals must undergo verification.` },
    { question: `Can I open an account in Barclays Bank online?`, answer: `An account in Barclays Bank can only be opened with a personal visit to the bank.` },
    { question: `What is the cost of maintaining an account in Barclays Bank?`, answer: `You can check the current cost on the Barclays Bank website or by contacting our specialists.` },
    { question: `What is the timeframe for opening an account in Barclays Bank?`, answer: `The speed depends on the company’s specifics and how quickly responses are provided to the bank’s questions. Typically, account opening takes about 2 months.` },
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
