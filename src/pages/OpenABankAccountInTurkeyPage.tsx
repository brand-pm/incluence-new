import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { TurkeyBankVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /open-a-bank-account-in-turkey
const PAGE_DATA = {
  title: `Open a Bank Account in Turkey`,
  description: `Since Turkey is not a member of the European Union, local financial institutions are quite loyal to non-residents and foreign companies. Remote account opening is possible, with low maintenance costs and a standard opening period of up to 3 months.`,
  sections: [
    {
      heading: `How to Open a Bank Account in Turkey`,
      body: `When opening a bank account in Turkey, it is recommended to consider the following:\nThe institution should have extensive experience. Check the bank's reputation in advance. Find out in advance the terms of cooperation: account opening deadlines, minimum balance requirements, available account types, service costs, and possible benefits.\n\nIt is also important for corporate clients to clarify whether personal presence is required during the account setup process.`,
    },
    {
      heading: `Open a Bank Account in Turkey`,
      body: `Since Turkey is not a member of the European Union, local credit and financial institutions are quite loyal. They work with all individuals, including non-residents and companies, even organizations from offshore jurisdictions. Opening a bank account in Turkey for non-residents is possible within a short time; all conditions are created here to attract foreign clients:\nremote account opening is possible; low maintenance cost; the standard account opening period does not exceed 3 months.`,
    },
    {
      heading: `Professional Support in Opening a Bank Account in Turkey`,
      body: `At first, it may seem easy to open a bank account in Turkey, but in reality, without proper experience, it is quite difficult. This is due to strict requirements for registering foreign individuals and legal entities. Each bank has its own list of required documents, so it is important to be knowledgeable about the country's financial sector. Moreover, mistakes during the account opening process may result in limited account functionality or even a complete refusal.\n\nThe specialists at Incluence Limited have extensive experience working with credit and financial institutions worldwide and guarantee a smooth account opening process. With our assistance, you can open a bank account in Turkey:\nwithin the required short time; avoiding difficulties and errors in the process; with the best conditions for your situation.\n\nTo contact us, please use the contact details provided on the website.`,
    },
    {
      heading: `Bank Account in Turkey: Requirements and Documents`,
      body: `Having a tax identification number is a mandatory requirement for opening a bank account in Turkey. It is issued both to citizens of the country and to non-residents conducting business activities. A foreign passport is also often required. Before opening a corporate account in a Turkish bank, note that the following documents may be needed:\na notarized copy of the shareholder(s)' and director(s)' passports; proof of residential address of the shareholder(s) and director(s); documents confirming the amount and establishment of the company's authorized capital, notarized; proof of financial stability, such as contracts with partner companies.\n\nTo better understand the process of opening a bank account in Turkey, let's look at the main conditions of one of the leading local institutions:\n\nZiraat Bank: personal presence not required, registration period 2 months, no minimum balance requirements.\nBank of Turkey: personal presence not required, registration period from 7 business days, minimum balance from 1000 EUR.\nAlbaraka Bank: personal presence required, registration period 3-4 weeks, no minimum balance requirements.\nGaranti Bank: personal presence required, registration period 3-4 weeks, no minimum balance requirements.\nTurkiye Finans Bank: personal presence required, registration period from 1 business day, no minimum balance requirements.`,
    },
  ],
  requirements: [
    `Tax identification number (mandatory)`,
    `Notarized copy of shareholders' and directors' passports`,
    `Proof of residential address of shareholders and directors`,
    `Notarized documents confirming authorized capital`,
    `Proof of financial stability (e.g., partner contracts)`,
    `KYC and AML forms`,
  ],
  faq: [
    { question: `Which bank in Turkey is best for opening a bank account?`, answer: `We select banks based on the company's country of registration, the residency of beneficiaries and directors, planned turnovers, required currencies, and regions of payments. The bank's reputation and tariffs are also taken into account. To choose the most suitable option for your company, please consult our specialists.` },
    { question: `What are the conditions for opening a bank account in Turkey?`, answer: `To open a bank account in Turkey, it is necessary to complete and submit the bank's KYC and AML forms, provide the company's incorporation documents, and the personal documents of directors and beneficiaries during a personal visit. During the bank visit, verification must be completed.` },
    { question: `How can a non-resident open a bank account in Turkey?`, answer: `Turkish banks open accounts for local companies with non-resident participants, as well as for foreign companies. To increase your chances of successfully opening an account in Turkey, it is recommended to seek professional assistance.` },
    { question: `Can a bank account in Turkey be opened online?`, answer: `A bank account in Turkey can be opened with the personal presence of the company's representative.` },
  ],
};

const OpenABankAccountInTurkeyPage = () => (
  <ServiceDetailPage
    slug="open-a-bank-account-in-turkey"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
    heroVisual={<TurkeyBankVisual />}

  />
);

export default OpenABankAccountInTurkeyPage;
export { OpenABankAccountInTurkeyPage };
