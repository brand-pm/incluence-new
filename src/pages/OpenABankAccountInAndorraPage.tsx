import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { AndorraBankVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /open-a-bank-account-in-andorra
const PAGE_DATA = {
  title: `Open a Bank Account in Andorra`,
  description: `The Principality of Andorra is one of Europe's microstates with a favorable tax regime where local banks do not charge taxes on investment income. Five banks operate in the country, each offering a high level of confidentiality and reliability.`,
  sections: [
    {
      heading: `Steps to Opening a Bank Account in Andorra`,
      body: `Before opening an account, you need to select a bank, considering its reliability, client requirements, and account terms.\n\nNext steps:\nCollect documents and prepare bank forms – the accuracy of this stage significantly affects the speed of the review process. Submit documents to the bank. At this stage, the institution may request additional information or documentation. Note: the application review may be subject to a fee. Applicant verification. This may take place at a bank branch, including in the applicant's country of residence. Receiving account details and access. Some banks require an initial deposit for account activation and to issue account details.\n\nThe bank may require proof of source of funds!`,
    },
    {
      heading: `How to Choose a Bank in Andorra: Open an Account on Stated Terms`,
      body: `To open a personal or corporate account, you must meet the bank's stated requirements. Each bank sets individual client conditions, so contact our firm's experts for up-to-date information on tariffs and services. Minimum requirements of some banks:\n\nAndbank, like Privada d'Andorra, requires a minimum deposit of at least EUR 3,000, with a minimum balance of EUR 1,000. Account maintenance costs EUR 800 per year. Credit Andorra sets stricter requirements: EUR 1,200–1,500 for account opening and EUR 500,000 as an initial deposit and minimum balance. MoraBanc does not impose special account-opening requirements, but the minimum balance and initial deposit must be EUR 300,000.\n\nOne of the main differences is that Andbank requires a minimum annual turnover of EUR 1 million on current accounts, while Credit Andorra has no turnover requirements.\n\nIf you find it difficult to choose the right bank, submit a request to Incluence Limited experts for a personalized consultation.`,
    },
    {
      heading: `Opening a Bank Account in Andorra: Key Features of the Country`,
      body: `The Principality of Andorra is one of Europe's microstates, not a member of the European Union. The country is notable for its favorable tax regime, and one of its key advantages is that local banks do not charge taxes on investment income. This makes Andorra attractive for clients worldwide wishing to open a bank account here.\n\nToday, five banks operate in the country, each offering a high level of confidentiality. By solvency and liquidity standards, Andorran banks are among the most reliable in the world:\nMorabanc; Andbank; Credit Andorra; Banc Sabadell d'Andorra; Vall Banc.`,
    },
    {
      heading: `Who Will Benefit from Opening an Account in Andorra`,
      body: `Andorra can be a good choice for both individuals and legal entities that are non-residents but wish to open a bank account in the country:\n\nNon-resident individuals enjoy a wide choice of accounts and relatively affordable banking services. Andorran banks work closely with offshore and non-resident companies, as they are familiar with different countries' laws. Some banks, for example Credit Andorra, open corporate accounts only if the company's owner has previously opened a personal savings account.\n\nBanking information in Andorra is confidential and protected by law. At the same time, there are no strict currency controls – everything is assessed individually.`,
    },
    {
      heading: `How Long Does It Take to Open an Account in Andorra`,
      body: `Each case is unique, but opening an account in Andorra typically takes up to 3 months after submitting an application in person or via a representative. The timeframe depends on the completeness of submitted documents, response times to bank requests, and workload of bank specialists.\n\nThe list of required documents depends on the bank. As a minimum, entrepreneurs will need:\na set of corporate documents; beneficial owners' and directors' identity documents; proof of actual residential address (e.g., utility bill); documents confirming the source of funds.\n\nAdditionally, for corporate account opening, the legal entity must have a positive reputation and be registered in a country supported by Andorran banks. During the process, the applicant's representative must submit KYC and AML forms and the company's founding documents.\n\nThe bank also has the right to request any additional documents.`,
    },
  ],
  requirements: [
    `Set of corporate documents`,
    `Beneficial owners' and directors' identity documents`,
    `Proof of residential address (e.g., utility bill)`,
    `Documents confirming the source of funds`,
    `KYC and AML forms`,
    `Company founding documents`,
    `In-person visit or representative visit required`,
  ],
  faq: [
    { question: `What are the conditions for opening accounts in Andorran banks?`, answer: `To successfully open an account in Andorran banks, the company must be registered in one of the countries supported by Andorran banks and have a positive reputation. Its participants must not be listed on sanctions lists. The company's business activity must comply with the bank's policies.` },
    { question: `Which Andorran bank is best for opening an account?`, answer: `We select banks based on the company's country of registration, residency of beneficial owners and directors, planned turnover, required currencies, and payment regions. We also take into account the bank's reputation and tariffs. For the most suitable option for your company, please contact our specialists.` },
    { question: `How can a non-resident open a bank account in Andorra?`, answer: `To open an account in Andorran banks, it is necessary to complete and submit KYC and AML forms, provide company incorporation documents, and personal documents of directors and beneficial owners. The bank may also request contracts with partners and other information. For successful account opening, key persons must undergo verification.` },
    { question: `Can I open an account in Andorran banks online?`, answer: `Opening an account in Andorran banks requires an in-person visit.` },
  ],
};

const OpenABankAccountInAndorraPage = () => (
  <ServiceDetailPage
    slug="open-a-bank-account-in-andorra"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
    heroVisual={<AndorraBankVisual />}

  />
);

export default OpenABankAccountInAndorraPage;
export { OpenABankAccountInAndorraPage };
