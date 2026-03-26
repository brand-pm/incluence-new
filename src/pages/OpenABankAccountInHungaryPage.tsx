import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { HungaryBankVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /open-a-bank-account-in-hungary
const PAGE_DATA = {
  title: `Open a Bank Account in Hungary`,
  description: `Hungarian financial institutions are loyal to new clients, offering a wide range of services and affordable fees. Accounts can be opened in any foreign currency, and most institutions provide online banking for remote account management.`,
  sections: [
    {
      heading: `How to Open a Bank Account in Hungary as a Non-Resident`,
      body: `Those who plan to move to Hungary and start a business in this country should open a bank account. Local financial institutions are loyal to new clients, offering a wide range of services and affordable service fees, as well as:\n\nYou can open a bank account in Hungary in any foreign currency. The financial sector and economy as a whole in this country are highly stable. Most institutions are ready to provide Russian-speaking staff for cooperation. It is possible to open a bank account in Hungary online, and further account management is carried out via internet banking.`,
    },
    {
      heading: `Procedure for Opening a Bank Account in Hungary`,
      body: `Some Hungarian banks are fairly liberal toward non-residents, requiring only a passport. However, in most cases, opening a bank account in Hungary as a non-resident requires a set of documents according to the bank's individual requirements. These may include:\n\nDocuments confirming the identity of directors, beneficiaries, and shareholders. Corporate documents — certificate of registration, articles of association, director appointment order. Depending on the bank, recommendations from other financial institutions, partner information, or additional documents may be required.\n\nTo open an account in Hungary as a non-resident, you must also complete questionnaires, applications, and other bank forms in the approved manner. All submitted documents must be translated into the state language and apostilled. If the applicant represents a company, a notarized power of attorney is required. Failure to comply with the institution's requirements may result in refusal without explanation.`,
    },
    {
      heading: `Where to Apply for Opening a Bank Account in Hungary`,
      body: `Some banks accept applications offline, requiring an in-person meeting between the client (or their authorized representative) and a bank employee. All conditions for opening a Hungarian bank account should be clarified with the chosen institution. In most cases, the procedure takes about 14 business days, and an initial deposit is not always required. More than 10 banks operate in the country, ready to cooperate with non-residents and foreign companies. The following are known for their stability and range of services:\n\nSberbank – A large bank offering all types of financial services, loyal to corporate and long-term clients, with more than 50 branches in Hungary. MKB Bank – Notable for offering online account opening for non-residents, with service available via internet banking and by phone. Budapest Bank – A state-owned bank guaranteeing deposit protection. KINIZSI Bank – Provides a wide range of services for small and medium-sized businesses. VirPay – An independent financial institution operating exclusively online without a physical address.`,
    },
    {
      heading: `Professional Assistance in Opening Bank Accounts in Hungary`,
      body: `Opening accounts in Hungary requires full awareness of the current situation in the banking sector. To avoid refusal and establish successful cooperation with the best banks, contact the experts at Incluence Limited. Submit an online request to our specialists, and we will get in touch with you shortly.`,
    },
  ],
  requirements: [
    `Identity documents of directors, beneficiaries, and shareholders`,
    `Certificate of company registration`,
    `Articles of association`,
    `Director appointment order`,
    `Documents translated into Hungarian and apostilled`,
    `Notarized power of attorney (if representative)`,
    `KYC and AML questionnaires and forms`,
  ],
  faq: [
    { question: `What are the conditions for opening an account in Hungarian banks?`, answer: `For successful account opening, the company must be registered in a country supported by Hungarian banks and have a good reputation. Its participants must not appear on sanction lists. The company's activities must not conflict with the bank's policy. Hungarian banks often prefer companies with Hungarian participants.` },
    { question: `Which bank in Hungary is the best for opening a bank account?`, answer: `We select banks based on the company's country of registration, residency of beneficiaries and directors, expected turnover, required currencies, and payment regions. The bank's reputation and fees are also considered. To choose the most suitable option for your company, please contact our specialists.` },
    { question: `How can a non-resident open a bank account in Hungary?`, answer: `To open an account in Hungarian banks, it is necessary to complete and submit KYC and AML forms, company incorporation documents, and personal documents of directors and beneficiaries. The bank may additionally request partner contracts and other information. For successful account opening, key persons must pass verification.` },
    { question: `Can you open a Hungarian bank account online?`, answer: `Opening an account in Hungarian banks requires an in-person visit.` },
  ],
};

const OpenABankAccountInHungaryPage = () => (
  <ServiceDetailPage
    slug="open-a-bank-account-in-hungary"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}

  />
);

export default OpenABankAccountInHungaryPage;
export { OpenABankAccountInHungaryPage };
