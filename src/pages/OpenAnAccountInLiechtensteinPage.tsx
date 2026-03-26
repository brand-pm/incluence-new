import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { LiechtensteinBankVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /open-an-account-in-liechtenstein
const PAGE_DATA = {
  title: `Open an Account in Liechtenstein`,
  description: `Liechtenstein is a country with a high level of confidentiality in the financial sector. Local banking services are relatively expensive, and there are requirements for maintaining minimum balances on current accounts or deposits.`,
  sections: [
    {
      heading: `How to Open an Account in Liechtenstein`,
      body: `Typically, opening a bank account in Liechtenstein is done under the following conditions:\n\nAccount opening timeline: varies by bank, usually at least 1 month. Need for a personal visit: more financial institutions allow remote account opening. Minimum account balance: varies by bank, usually no less than 5,000 units of the account currency.\n\nDifferent documents may be required to open an account in Liechtenstein. Only the chosen bank can provide a full and accurate list. Commonly requested documents include:\n\nPassport. Notarized copy of shareholders and directors. Proof of residence of shareholders and directors. Company incorporation documents. Contracts with partners.\n\nTo understand the conditions for a non-resident to open an account in Liechtenstein, here are examples from major local banks:\n\nBank Name Account Opening Timeline Account Opening Fee Personal Visit Required Minimum Balance Requirement Bendura Bank 3–4 weeks from €600 Yes €300,000 Union Bank from 30 days No restrictions No restrictions CHF 25,000 Valartis Bank from 30 days No fee, but 3 months are allowed to reach minimum balance No €1,000,000 Bank Frick AG from 3–4 weeks No restrictions No Determined individually Alpinum Bank 2–3 weeks from €800 Yes CHF 5,000 Landesbank AG 3–4 weeks from €500 Yes €500,000\n\nTherefore, when planning to open a bank account in Liechtenstein, the choice of bank should be based on:\n\nInstitution experience and reputation; Need for a personal visit; Minimum balance requirement; Minimum account term; Account management conditions — online banking availability, loyalty programs, etc.\n\nThere are many nuances, so cooperation with local institutions requires experience and sufficient knowledge of the banking sector.`,
    },
    {
      heading: `Opening a Bank Account in Liechtenstein`,
      body: `Liechtenstein is a country with a high level of confidentiality in the financial sector. Local banking services are relatively expensive, and there are requirements for maintaining minimum balances on current accounts or deposits.`,
    },
    {
      heading: `Bank Accounts in Liechtenstein: Benefits`,
      body: `The prospect of opening accounts in Liechtenstein banks is attractive to many businesspeople. Practice shows that the country's institutions offer a wide range of services for their clients. Additionally:\n\nThey have extensive experience working with legal entities and high-net-worth private clients. Bank employees are strictly required to maintain client confidentiality — disclosure is a criminal offense.\n\nThere is also the concept of "professional secrecy," meaning banking staff cannot be used as witnesses in court proceedings.`,
    },
    {
      heading: `Can an Account be Opened Quickly in Liechtenstein Banks?`,
      body: `If you need an account in a Liechtenstein bank, Incluence Limited is ready to assist. Our team consists of specialists familiar with the principality's financial market and with extensive experience. We can discuss your project and organize account opening at a convenient time.`,
    },
  ],
  requirements: [
    `Passport`,
    `Notarized copy of shareholders and directors`,
    `Proof of residence of shareholders and directors`,
    `Company incorporation documents`,
    `Contracts with partners`,
    `Minimum balance varies by bank (usually 5,000+ units)`,
  ],
  faq: [
    { question: `Which bank in Liechtenstein is best for opening a bank account?`, answer: `We select banks based on the company's registration country, the residency of beneficiaries and directors, planned turnovers, required currencies, and payment regions. The bank's reputation and fees are also considered. To choose the most suitable option for your company, please contact our specialists.` },
    { question: `What are the requirements for opening an account in Liechtenstein banks?`, answer: `To open an account in Liechtenstein banks, you need to complete and submit KYC and AML forms, company incorporation documents, and personal documents of directors and beneficiaries. The bank may also request partner contracts and other information. Key persons must undergo verification for successful account opening.` },
    { question: `How much does it cost to open an account in Liechtenstein banks?`, answer: `The final cost of opening an account in Liechtenstein banks depends on various factors. You can find out the exact cost by contacting our specialists.` },
    { question: `Can an account in Liechtenstein banks be opened online?`, answer: `An account in Liechtenstein banks can be opened with the personal presence of a company representative.` },
  ],
};

const OpenAnAccountInLiechtensteinPage = () => (
  <ServiceDetailPage
    slug="open-an-account-in-liechtenstein"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}

  />
);

export default OpenAnAccountInLiechtensteinPage;
export { OpenAnAccountInLiechtensteinPage };
