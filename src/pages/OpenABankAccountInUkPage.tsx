import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { UKBankVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /opening-a-bank-account-in-the-united-kingdom
const PAGE_DATA = {
  title: `Opening a Bank Account in the United Kingdom`,
  description: `The UK banking system is distinguished by stability and a high level of development. Opening a bank account in the UK allows reliable protection of financial assets, global payments, and stable international business operations.`,
  sections: [
    {
      heading: `Steps to Open a Bank Account in England`,
      body: `Start by clarifying conditions, choosing a suitable program, and reviewing fees. Collect documents according to bank requirements; the package must comply strictly with instructions. Opening a UK bank account has become complex due to strict non-resident verification.\n\nTo open and maintain a UK bank account long-term, strict rules must be followed. Incluence Limited experts can handle all interactions with UK banks, from document collection to ongoing support.\n\nFor an initial consultation, contact us anytime via the website's online form or listed contacts.`,
    },
    {
      heading: `How Non-residents Can Open a Bank Account in England`,
      body: `England is one of the most developed countries not only in Europe but in the world. It is a historic place where modern laws are closely intertwined with centuries-old traditions. The local banking system is also distinguished by stability and a high level of development. It is no surprise that many companies and individuals strive to open a bank account in the UK — this allows reliable protection of financial assets, global payments, and stable international business operations.`,
    },
    {
      heading: `Bank Accounts in England: Choosing a Financial Institution`,
      body: `Opening a bank account in England is not only necessary for business but also prestigious. The government exercises strict oversight of financial institutions. Despite the good reputation of all UK banks, a few have distinguished themselves over decades. Examples include:\n\nCitiBank – personal accounts only; minimum balance requirement: £150,000. Coutts & Co – investment, savings, and current accounts; minimum balance: £750,000. Barclays Bank PLC – minimum balance: £3,000,000; specializes in savings and current accounts. Lloyds Bank PLC – personal and corporate accounts; no minimum balance; accounts managed via internet banking. HSBC Bank PLC – offers deposits, loans, including mortgages; Visa and MasterCard; no minimum balance requirement.\n\nMore information on opening accounts in specific UK banks is available on Incluence Limited's website. Consider general features of most institutions:\n\nNo Russian-speaking staff; Minimum balance requirements exist in most banks; Internet banking available; Account opening typically requires personal presence or a representative.`,
    },
    {
      heading: `Documents Required to Open a Bank Account in England as a Non-resident`,
      body: `To open a bank account in England, it is necessary to clarify the required documents in advance and comply with the bank's requirements. Individuals typically provide:\n\nPassport of the account beneficiary and, if applicable, the account manager; Proof of residence not older than 3 months; Resume/CV; Taxpayer registration certificate.\n\nCompanies wishing to open an account in the UK usually need:\n\nCompany registration documents; Articles of association or corporate charter; Power of attorney for account opening and management if not specified in the company's founding documents. This must be notarized and apostilled; Document confirming current company status; Description of company activities.\n\nThese may not be all required documents; banks may request additional proofs or certifications, as each institution operates individually.`,
    },
  ],
  requirements: [
    `Passport of the account beneficiary`,
    `Proof of residence not older than 3 months`,
    `Resume or CV of the account holder`,
    `Taxpayer registration certificate`,
    `Company registration documents (for legal entities)`,
    `Articles of association or corporate charter`,
    `Notarized and apostilled power of attorney (if applicable)`,
    `Document confirming current company status`,
    `Description of company activities`,
  ],
  faq: [
    { question: `What are the conditions for opening a bank account in the UK?`, answer: `To successfully open a UK bank account, the company must be registered in a country supported by UK banks, have a positive reputation, participants not listed in sanctions, and operate in a sector compliant with bank policy.` },
    { question: `Which UK bank is best to open an account?`, answer: `We select banks based on company registration country, residency of directors/beneficiaries, projected turnover, required currencies, and payment regions. Bank reputation and fees are also considered. Contact our specialists to choose the optimal bank.` },
    { question: `How can a non-resident open a UK bank account?`, answer: `Submit KYC and AML forms, company incorporation documents, and personal documents of directors and beneficiaries. Banks may request contracts with partners and other information. Having a UK resident as part of the company increases chances.` },
    { question: `Can a UK bank account be opened online?`, answer: `UK bank accounts must be opened with a personal visit.` },
  ],
};

const OpenABankAccountInUkPage = () => (
  <ServiceDetailPage
    slug="opening-a-bank-account-in-the-united-kingdom"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}

  />
);

export default OpenABankAccountInUkPage;
export { OpenABankAccountInUkPage };
