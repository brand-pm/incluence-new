import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { LuxembourgBankVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /open-a-bank-account-in-luxembourg
const PAGE_DATA = {
  title: `Open a Bank Account in Luxembourg`,
  description: `Luxembourg has over 200 financial institutions and requires proof of solvency for non-residents. Opening a bank account always requires preparing documents confirming the legality of business activities.`,
  sections: [
    {
      heading: `How to Open a Bank Account in Luxembourg Profitably`,
      body: `Luxembourg has over 200 financial institutions, with the most popular being:\nRCB BANK LTD. East-West United Bank. ING Bank. Banque Internationale a Luxembourg, among others.\n\nOur company collaborates with major banks in Luxembourg, and we are ready to recommend the most suitable option for your business. To determine which institution best fits your needs, please submit an online application to our experts.`,
    },
    {
      heading: `Opening a Bank Account in Luxembourg: Key Features`,
      body: `For a non-resident to start working with a financial institution, in most cases, proof of solvency is required. Therefore, before opening a bank account in Luxembourg, it is important to check in advance the minimum deposit requirements. In some institutions, this amount may reach several hundred thousand euros. Most banks also apply fees for the following services:\nfees for incoming and outgoing transactions; annual or monthly maintenance fees; fees for document preparation and handling requests.\n\nOpening a bank account in Luxembourg always requires preparing a set of documents confirming the legality of business activities. The list of requirements may vary, but typically includes:\nDocuments confirming the identity and residence of directors and account managers. Corporate and registration documents for the legal entity, and a business description in free form. References from other banks.\n\nTo ensure mutually beneficial cooperation, many Luxembourg banks also offer additional services related to investments in foreign and cryptocurrencies. Some institutions provide loans to regular clients and convenient features such as online banking.`,
    },
  ],
  requirements: [
    `Documents confirming identity and residence of directors`,
    `Corporate and registration documents for the legal entity`,
    `Business description in free form`,
    `References from other banks`,
    `KYC and AML forms`,
    `In-person bank visit required for non-residents`,
  ],
  faq: [
    { question: `What are the conditions for opening an account in Luxembourg banks?`, answer: `To open an account in Luxembourg banks, it is necessary to complete and submit banking KYC and AML forms, company incorporation documents, and personal documents of directors and beneficiaries. The bank may additionally request contracts with partners and other information. For a successful account opening, key individuals must pass verification.` },
    { question: `Which bank in Luxembourg is best for opening an account?`, answer: `The choice of bank should be based on the company's country of incorporation, type of activity, the need for substance, and whether the company has it. To select the most optimal option for your company, please consult our specialists.` },
    { question: `How can a non-resident open an account in Luxembourg?`, answer: `Luxembourg banks consider non-resident companies for account opening, but having a local participant in the company structure significantly increases the chances of approval.` },
    { question: `Can a Luxembourg bank account be opened online?`, answer: `A non-resident can open an account in Luxembourg banks only by visiting the bank in person.` },
  ],
};

const OpenABankAccountInLuxembourgPage = () => (
  <ServiceDetailPage
    slug="open-a-bank-account-in-luxembourg"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}

  />
);

export default OpenABankAccountInLuxembourgPage;
export { OpenABankAccountInLuxembourgPage };
