import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-a-bank-account-in-luxembourg
const PAGE_DATA = {
  title: `Open a Bank Account in Luxembourg`,
  description: `RCB BANK LTD. East-West United Bank. ING Bank. Banque Internationale à Luxembourg, among others. Our company collaborates with major banks in Luxembourg, and we are ready to recommend the most suitable option for your business.`,
  requirements: [
    `Opening a Bank Account in Luxembourg: Key Features`,
    `For a non-resident to start working with a financial institution, in most cases, proof of solvency is required. Therefore, before opening a bank account in Luxembourg, it is important to check in advance the minimum deposit requirements. In some institutions, this amount may reach several hundred thousand euros. Most banks also apply fees for the following services:`,
    `fees for incoming and outgoing transactions; annual or monthly maintenance fees; fees for document preparation and handling requests`,
    `Opening a bank account in Luxembourg always requires preparing a set of documents confirming the legality of business activities. The list of requirements may vary, but typically includes:`,
    `Documents confirming the identity and residence of directors and account managers. Corporate and registration documents for the legal entity, and a business description in free form. References from other banks`,
    `To ensure mutually beneficial cooperation, many Luxembourg banks also offer additional services related to investments in foreign and cryptocurrencies. Some institutions provide loans to regular clients and convenient features such as online banking`,
  ],
  faq: [
    { question: `What are the conditions for opening an account in Luxembourg banks?`, answer: `To open an account in Luxembourg banks, it is necessary to complete and submit banking KYC and AML forms, company incorporation documents, and personal documents of directors and beneficiaries. The bank may additionally request contracts with partner` },
    { question: `Which bank in Luxembourg is best for opening an account?`, answer: `The choice of bank should be based on the company’s country of incorporation, type of activity, the need for substance, and whether the company has it. To select the most optimal option for your company, please consult our specialists.` },
    { question: `How can a non-resident open an account in Luxembourg?`, answer: `Luxembourg banks consider non-resident companies for account opening, but having a local participant in the company structure significantly increases the chances of approval.` },
    { question: `Can a Luxembourg bank account be opened online?`, answer: `A non-resident can open an account in Luxembourg banks only by visiting the bank in person.` },
  ],
};

const OpenABankAccountInLuxembourgPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenABankAccountInLuxembourgPage;
export { OpenABankAccountInLuxembourgPage };
