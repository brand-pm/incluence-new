import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-bank-account-as-foreigner-in-usa
const PAGE_DATA = {
  title: `Open bank account as foreigner in USA`,
  description: `The United States has a highly developed banking system with a wide range of financial services and products. Both personal and business accounts are available, though most banks require personal presence due to strict customer identification and anti-money laundering requirements.`,
  sections: [
    {
      heading: `Is it possible to open a bank account in the US from abroad: Peculiarities of the procedure and bank requirements`,
      body: `The United States of America is a country with a highly developed banking system. Bank customers have access to a wide range of financial services and products and can open a personal or business account for themselves or a company respectively.\n\nIf you want to open a bank account in the US as a foreigner remotely, you will not be able to do this in many cases, and you must be present in person to be interviewed by a bank manager. This is due to the fact that US banks must comply with certain conditions:\n\nCustomer identification programs. The bank's Know Your Customer principle. Anti-money laundering measures.\n\nFor this reason, it is quite difficult to open a bank account in the USA as a foreigner online because activities associated with the mentioned rules are impossible without a personal presence.\n\nHowever, sometimes, foreigners open bank account in US online since some banking institutions are interested in attracting new clients, including non-residents.\n\nFor example, if a company wants to open an account in the United States via the Internet, it may contact Wells Fargo Bank. The banking institution is very strict and careful in checking the existing business and all persons associated with the company. At the same time, it is possible to apply for an account opening online and even by phone. In this case, bank employees will provide instructions and a list of required documents.`,
    },
  ],
  requirements: [
    `Company must have an EIN number`,
    `Beneficiaries must have an SSN or ITIN`,
    `KYC and AML banking forms`,
    `Company statutory documents`,
    `Personal documents of directors and beneficiaries`,
    `Personal visit to the bank (in most cases)`,
  ],
  faq: [
    { question: `What are the conditions for opening an account in banks in the USA?`, answer: `American banks open accounts for local companies with an EIN number. However, beneficiaries must have an SSN or ITIN. We can easily help you with getting the numbers you need and opening an account.` },
    { question: `What is the best bank in the USA to open a bank account with?`, answer: `We select banks taking into account the country of registration of the company, residence of beneficiaries and directors, planned turnover, required currencies and regions of payments. When selecting a bank, its reputation and rates are also taken into account. In order to select the most optimal option for your company, please contact our specialists.` },
    { question: `How to open a bank account with a non-resident?`, answer: `In order to open an account in US banks, it is necessary to fill out and submit banking KYC and AML forms, the company's statutory documents and personal documents of directors and beneficiaries during a personal visit to the bank. The Bank may additionally request agreements with partners and other information.` },
    { question: `Can I open an account with USA banks online?`, answer: `Opening an account with a classic US bank usually requires a personal visit of a company representative. But there are also online banking platforms in the USA that allow you to open accounts online.` },
  ],
};

const OpenBankAccountInUsaPage = () => (
  <ServiceDetailPage
    slug="open-bank-account-as-foreigner-in-usa"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenBankAccountInUsaPage;
export { OpenBankAccountInUsaPage };
