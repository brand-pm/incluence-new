import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-a-bank-account-in-bulgaria
const PAGE_DATA = {
  title: `Open a Bank Account in Bulgaria`,
  description: `Notarized copy of the international passport of shareholder(s) and director(s). Document confirming the residential address of shareholder(s) and director(s). For non-resident companies – notarized and apostilled corporate documents.`,
  requirements: [
    `Which Bank to Choose in Bulgaria`,
    `When deciding which bank in Bulgaria to choose for account registration, note that a certain fee for this service is often charged. The amount starts from 500 USD. You should also pay attention to the applicable tariffs and transaction costs within the chosen account. Account opening does not take long, and upon completing all formalities, clients may be asked to deposit a minimum amount. Non-residents can open accounts in Bulgarian banks in the local currency (Bulgarian lev), US dollars, or euros. The choice of currency depends on the institution’s rules`,
    `For a general understanding of the local financial services market, here are some conditions from Bulgaria’s leading bank, DSK Bank:`,
    `Account opening period – from 1 to 3 months. Bank visit – personal presence is not required to open an account. Minimum balance requirement – at least 50 Bulgarian lev (BGN) must remain in the account`,
    `DSK Bank is one of the oldest financial institutions in Bulgaria. It was founded in 1951 as a state bank but has been commercial since 1988. Most institutions are guided by DSK’s practices, but if you wish to open an account in Bulgaria, detailed research of the chosen bank’s operations is essential`,
    `Professional Support for Opening a Bank Account in Bulgaria`,
    `Incluence Limited is ready to assist with opening a bank account in Bulgaria. Our experienced experts have been working with corporate clients for more than 20 years and guarantee efficient interaction with Bulgarian financial institutions. We will support you at every stage of the account opening process`,
    `If you have any questions or would like to request this service, please fill out the feedback form`,
  ],
  faq: [
    { question: `Which bank in Bulgaria is best for opening a bank account?`, answer: `We select banks based on the country of company registration, the residency of beneficiaries and directors, planned turnover, required currencies, and payment regions. The bank’s reputation and fees are also taken into account. To find the most suita` },
    { question: `What are the requirements for opening a bank account in Bulgaria?`, answer: `To open a bank account in Bulgaria, it is necessary to complete and submit the bank’s KYC and AML forms, the company’s statutory documents, and the personal documents of directors and beneficiaries. The bank may additionally request contracts with pa` },
    { question: `What documents are required to open a bank account in Bulgaria?`, answer: `To open a bank account in Bulgaria, you must provide copies of personal documents of each director and shareholder, along with a package of corporate documents. The bank may also request copies of contracts with partners, the company’s structure, and` },
    { question: `Can a bank account in Bulgaria be opened online?`, answer: `A bank account in Bulgaria can be opened with the personal presence of a company representative.` },
  ],
};

const OpenABankAccountInBulgariaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenABankAccountInBulgariaPage;
export { OpenABankAccountInBulgariaPage };
