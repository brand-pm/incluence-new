import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { CyprusBankVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /open-a-bank-account-in-cyprus
const PAGE_DATA = {
  title: `Open a Bank Account in Cyprus`,
  description: `Opening an account in Cyprus is a convenient way to preserve and manage assets, with most local banks offering cooperation with Russian-speaking staff and a wide range of additional options. Cyprus is a member of the European Union and offers lower tax rates compared to many other countries.`,
  sections: [
    {
      heading: `How to Open a Bank Account in Cyprus: Key Points`,
      body: `The opportunity to open an account in Cyprus attracts entrepreneurs from different countries due to convenient services — most local banks offer cooperation with Russian-speaking staff and a wide range of additional options. Registration of a new client and processing of documents for opening an account are completed quickly, while the service fees are relatively low compared to other international banks.`,
    },
    {
      heading: `How to Open a Bank Account in Cyprus for Individuals`,
      body: `Local banks allow account opening for persons of any status, including private individuals. To open a bank account in Cyprus, the following documents are typically required:\n\nIdentity document; Proof of residence issued within the last 3 months; Application to open a bank account in Cyprus (according to the bank's form); Proof of solvency.\n\nAdditional documents may be requested at the bank's discretion.`,
    },
    {
      heading: `Who Benefits from Opening a Bank Account in Cyprus`,
      body: `Opening an account in Cyprus is a convenient way to preserve and manage assets for those who:\n\nWant to remotely open accounts in a European bank and manage them online. Have legally obtained funds and can prove their transparent origin. Do not want or cannot deposit an initial balance (minimum deposit) and maintain a non-reducible balance on the account. Seek cooperation with a bank ready to conduct transactions in EUR, USD, or other major currencies. Have their own business in Cyprus, meaning an office, resident employees, regular tax payments, and other operations within the country.\n\nCyprus bank accounts allow clients to use not only standard services but also numerous additional options, such as factoring, leasing, insurance, and more.\n\nIn recent years, the local banking system has undergone many changes, positively influencing its development. And although most financial institutions provide similar services, they operate differently: each can set its own requirements and offer special benefits.`,
    },
    {
      heading: `Opening Bank Accounts in Cyprus: Features and Advantages`,
      body: `The legislation and policies of the island state aim to ensure a comfortable and accessible framework for financial asset management. Today, opening a bank account in Cyprus is possible, but each year the process becomes more demanding with more diverse and stricter documentation requirements. This is partly related to preventing tax evasion and document fraud. However, such measures are being implemented worldwide, not only in Cyprus. As a result, in the future, opening a bank account in Cyprus independently may become quite complicated. That's why more and more entrepreneurs prefer professional assistance in international finance and law. Our specialists are ready to take care of the entire process of opening accounts in Cyprus.\n\nMeanwhile, opening a bank account and running a business in Cyprus offers multiple benefits:\n\nCyprus is a member of the European Union and is not considered an offshore zone. The infrastructure and geographical location make it attractive to register a business and open a bank account in Cyprus. Cyprus offers lower tax rates compared to many other countries. You don't need to visit the bank in person to open an account, and local financial institutions offer affordable service fees. Cyprus is part of agreements to avoid double taxation.`,
    },
    {
      heading: `Opening a Bank Account in Cyprus for Legal Entities`,
      body: `As a rule, legal entities face stricter requirements and a broader list of documents. Banks adopt an individual approach to each client.\n\nDepending on company duration, legal form, and other reasons (which the bank may not disclose), the requirements may be expanded.\n\nThe minimum list of documents usually includes:\n\nIdentity documents of all company participants; Incorporation documents of the company; Proof of residence of participants; Application to open a bank account (according to the bank's form); Proof of legality of invested funds.`,
    },
    {
      heading: `Opening a Bank Account in Cyprus: Examples of Financial Institutions`,
      body: `The Cypriot banking system is well-developed and reliable for safeguarding and managing corporate investments. More than 20 institutions operate on the island, including:\n\nBranches of international banks, including those active in EU countries; Banks listed on the local stock exchange.\n\nSome of the largest banks in Cyprus where individuals and legal entities can open accounts include:\n\nHellenic Bank Group – a group of financial companies applying modern IT and control systems, ensuring the safety of entrusted funds. In addition to 5 branches in Cyprus, Hellenic Bank has 3 international offices in Ukraine and Russia. Bank of Cyprus – one of the oldest on the island, chosen by many large foreign companies, as it concentrates a significant portion of Cyprus's financial flows. Besides traditional banking services, it offers brokerage, insurance, and wealth management. Astro Bank Cyprus – a subsidiary of one of Greece's oldest banks, supervised by the Central Bank of Cyprus. Piraeus Bank – headquartered in Greece, specializing in services for legal entities, particularly SMEs.`,
    },
    {
      heading: `Opening a Bank Account in Cyprus: General Conditions`,
      body: `In addition to documents confirming transparency and solvency, most institutions offer services under standard conditions. The main ones include:\n\nMinimum account balance – usually not required, but if applicable, the minimum balance starts from €1,000. Account currency – banks in Cyprus offer accounts in major global currencies. This is discussed in advance during the preparation of the documentation package. Processing time – on average, 3–6 weeks depending on the selected bank. Account management – remote via online banking, often with Digi Pass or a smartphone app.\n\nIf you choose a bank in Cyprus, our experts at Incluence Limited will help you open an account under the most suitable conditions for your company. Our website also provides detailed information on the practices of major Cypriot financial institutions with impeccable reputations.\n\nTo begin working with us, contact our specialists using any method available on the site.`,
    },
  ],
  requirements: [
    `Identity document of account holder`,
    `Proof of residence issued within the last 3 months`,
    `Bank application form for account opening`,
    `Proof of solvency`,
    `Incorporation documents (for legal entities)`,
    `Identity documents of all company participants`,
    `Proof of legality of invested funds`,
  ],
  faq: [
    { question: `What are the conditions for opening an account in Cyprus banks?`, answer: `To open an account in Cyprus banks, you must complete and submit the bank's KYC and AML forms, provide the company's statutory documents, and personal documents of directors and beneficiaries. The bank may also request partner agreements and additional information. For successful account opening, key persons must complete verification.` },
    { question: `Which bank in Cyprus is the best for opening an account?`, answer: `We select banks considering company registration country, residency of directors and beneficiaries, expected turnover, required currencies, and payment regions. Bank reputation and fees are also taken into account. To choose the most suitable option for your company, please contact our specialists.` },
    { question: `How much does it cost to open an account in Cyprus banks?`, answer: `The final cost depends on various factors (company registration country, participant residency, type of business activity, etc.). To get an exact cost for your company, please contact our specialists.` },
    { question: `Can a bank account in Cyprus be opened online?`, answer: `To open an account in Cyprus banks, personal presence is required. However, many Cypriot banks have representative offices worldwide.` },
  ],
};

const OpenABankAccountInCyprusPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
    heroVisual={<CyprusBankVisual />}

  />
);

export default OpenABankAccountInCyprusPage;
export { OpenABankAccountInCyprusPage };
