import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-a-bank-account-in-andorra
const PAGE_DATA = {
  title: `Open a Bank Account in Andorra`,
  description: `The Principality of Andorra is one of Europe’s microstates with a favorable tax regime where local banks do not charge taxes on investment income. Five banks operate in the country, each offering a high level of confidentiality and reliability.`,
  requirements: [
    `Set of corporate documents`,
    `Beneficial owners’ and directors’ identity documents`,
    `Proof of residential address (e.g., utility bill)`,
    `Documents confirming the source of funds`,
    `KYC and AML forms`,
    `Company founding documents`,
    `In-person visit or representative visit required`,
  ],
  faq: [
    { question: `What are the conditions for opening accounts in Andorran banks?`, answer: `The company must be registered in a country supported by Andorran banks and have a positive reputation. Its participants must not be listed on sanctions lists. The company’s business activity must comply with the bank’s policies.` },
    { question: `Which Andorran bank is best for opening an account?`, answer: `We select banks based on the company’s country of registration, residency of beneficial owners and directors, planned turnover, required currencies, and payment regions. We also consider the bank’s reputation and tariffs.` },
    { question: `How can a non-resident open a bank account in Andorra?`, answer: `You must complete and submit KYC and AML forms, provide company incorporation documents, and personal documents of directors and beneficial owners. The bank may also request contracts with partners.` },
    { question: `Can I open an account in Andorran banks online?`, answer: `Opening an account in Andorran banks requires an in-person visit.` },
  ],
};

const OpenABankAccountInAndorraPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenABankAccountInAndorraPage;
export { OpenABankAccountInAndorraPage };
