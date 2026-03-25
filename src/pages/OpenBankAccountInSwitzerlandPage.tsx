import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-bank-account-as-foreigner-in-switzerland
const PAGE_DATA = {
  title: `Open bank account as foreigner in Switzerland`,
  description: `Switzerland is one of the world's financial centers, attracting clients with a high level of professional service and reliable protection of personal data. Not only successful entrepreneurs but also citizens of any country can open an account in a Swiss bank.`,
  sections: [
    {
      heading: `How to open a bank account in Switzerland from abroad: Peculiarities of the procedure`,
      body: `Switzerland is one of the world's financial centers. Banks of this state attract clients with a high level of professional service, a large number of banking products, as well as reliable protection of personal data. Thus, not only successful entrepreneurs but also citizens of any country who are interested in the safety of their savings and confidentiality of personal information can open an account in a Swiss bank.\n\nOpening a bank account in Switzerland for foreigners is possible if the interested person:\n\nIs 18 years old and over. Does not have an unexpunged criminal record for financial crimes. Provides full information about themselves and their savings. Not a tax evader.`,
    },
  ],
  requirements: [
    `Applicant must be 18 years old or over`,
    `No unexpunged criminal record for financial crimes`,
    `Full disclosure of personal and savings information`,
    `Must not be a tax evader`,
    `KYC and AML banking forms`,
    `Company statutory documents (for legal entities)`,
    `Personal documents of directors and beneficiaries`,
  ],
  faq: [
    { question: `What are the conditions for opening an account with banks in Switzerland?`, answer: `In order to open a bank account in Switzerland, it is necessary to fill out and submit KYC and AML banking forms, the company's statutory documents and personal documents of directors and beneficiaries. The Bank may additionally request agreements with partners and other information. Key persons need to pass verification for successful account opening.` },
    { question: `In which bank in Switzerland to open a bank account?`, answer: `We select banks taking into account the country of registration of the company, residence of beneficiaries and directors, planned turnover, required currencies and regions of payments. When selecting a bank, its reputation and rates are also taken into account. In order to select the most optimal option for your company, please contact our specialists.` },
    { question: `How much does it cost to open an account in banks in Switzerland?`, answer: `The final cost of opening an account in Swiss banks is influenced by various factors (country of registration of the company, residence of participants, type of activity, etc.). You can find out the exact cost of opening a Swiss bank account for your company by contacting our specialists.` },
    { question: `Can I open an account in Swiss bank online?`, answer: `In order to open a bank account in Switzerland, a personal visit to the bank is required. Some banks allow remote verification.` },
  ],
};

const OpenBankAccountInSwitzerlandPage = () => (
  <ServiceDetailPage
    slug="open-bank-account-as-foreigner-in-switzerland"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenBankAccountInSwitzerlandPage;
export { OpenBankAccountInSwitzerlandPage };
