import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-a-bank-account-in-andorra
const PAGE_DATA = {
  title: `Open a Bank Account in Andorra`,
  description: `Collect documents and prepare bank forms – the accuracy of this stage significantly affects the speed of the review process. Submit documents to the bank. At this stage, the institution may request additional information or documentation. Note: the application review may be subject to a fee.`,
  requirements: [
    `Opening a Bank Account in Andorra: Key Features of the Country`,
    `The Principality of Andorra is one of Europe’s microstates, not a member of the European Union. The country is notable for its favorable tax regime, and one of its key advantages is that local banks do not charge taxes on investment income. This makes Andorra attractive for clients worldwide wishing to open a bank account here`,
    `Today, five banks operate in the country, each offering a high level of confidentiality. By solvency and liquidity standards, Andorran banks are among the most reliable in the world:`,
    `Morabanc; Andbank; Credit Andorra; Banc Sabadell d\'Andorra; Vall Banc`,
    `Who Will Benefit from Opening an Account in Andorra`,
    `Andorra can be a good choice for both individuals and legal entities that are non-residents but wish to open a bank account in the country:`,
    `Non-resident individuals enjoy a wide choice of accounts and relatively affordable banking services. Andorran banks work closely with offshore and non-resident companies, as they are familiar with different countries’ laws. Some banks, for example Credit Andorra, open corporate accounts only if the company’s owner has previously opened a personal savings account`,
    `Banking information in Andorra is confidential and protected by law. At the same time, there are no strict currency controls – everything is assessed individually`,
  ],
  faq: [
    { question: `What are the conditions for opening accounts in Andorran banks?`, answer: `To successfully open an account in Andorran banks, the company must be registered in one of the countries supported by Andorran banks and have a positive reputation. Its participants must not be listed on sanctions lists. The company’s business activ` },
    { question: `Which Andorran bank is best for opening an account?`, answer: `We select banks based on the company’s country of registration, residency of beneficial owners and directors, planned turnover, required currencies, and payment regions. We also take into account the bank’s reputation and tariffs. For the most suitab` },
    { question: `How can a non-resident open a bank account in Andorra?`, answer: `To open an account in Andorran banks, it is necessary to complete and submit KYC and AML forms, provide company incorporation documents, and personal documents of directors and beneficial owners. The bank may also request contracts with partners and ` },
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
