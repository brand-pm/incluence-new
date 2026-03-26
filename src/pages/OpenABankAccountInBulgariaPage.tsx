import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { BulgariaBankVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /open-a-bank-account-in-bulgaria
const PAGE_DATA = {
  title: `Open a Bank Account in Bulgaria`,
  description: `Opening a bank account in Bulgaria is available to citizens of any country representing a company's business interests. Non-residents can open accounts in Bulgarian lev, US dollars, or euros.`,
  sections: [
    {
      heading: `How to Open a Bank Account in Bulgaria`,
      body: `Opening a bank account in Bulgaria is available to citizens of any country representing a company's business interests. To start working with a client, the bank officer must see identity documents. The list of requirements may vary depending on the specific bank, for example:\n\nNotarized copy of the international passport of shareholder(s) and director(s). Document confirming the residential address of shareholder(s) and director(s). For non-resident companies – notarized and apostilled corporate documents. If a company representative applies, a power of attorney for account opening is required, notarized at the Bulgarian Embassy. Contracts with partner companies.\n\nThe officer may request certificates, statements, or other documents. Therefore, to open a bank account in Bulgaria, legal entities often require professional support.`,
    },
    {
      heading: `Which Bank to Choose in Bulgaria`,
      body: `When deciding which bank in Bulgaria to choose for account registration, note that a certain fee for this service is often charged. The amount starts from 500 USD. You should also pay attention to the applicable tariffs and transaction costs within the chosen account. Account opening does not take long, and upon completing all formalities, clients may be asked to deposit a minimum amount. Non-residents can open accounts in Bulgarian banks in the local currency (Bulgarian lev), US dollars, or euros. The choice of currency depends on the institution's rules.\n\nFor a general understanding of the local financial services market, here are some conditions from Bulgaria's leading bank, DSK Bank:\nAccount opening period – from 1 to 3 months. Bank visit – personal presence is not required to open an account. Minimum balance requirement – at least 50 Bulgarian lev (BGN) must remain in the account.\n\nDSK Bank is one of the oldest financial institutions in Bulgaria. It was founded in 1951 as a state bank but has been commercial since 1988. Most institutions are guided by DSK's practices, but if you wish to open an account in Bulgaria, detailed research of the chosen bank's operations is essential.`,
    },
    {
      heading: `Professional Support for Opening a Bank Account in Bulgaria`,
      body: `Incluence Limited is ready to assist with opening a bank account in Bulgaria. Our experienced experts have been working with corporate clients for more than 20 years and guarantee efficient interaction with Bulgarian financial institutions. We will support you at every stage of the account opening process.\n\nIf you have any questions or would like to request this service, please fill out the feedback form.`,
    },
  ],
  requirements: [
    `Notarized copy of shareholders' and directors' passports`,
    `Proof of residential address of shareholders and directors`,
    `Notarized and apostilled corporate documents (non-residents)`,
    `Power of attorney notarized at Bulgarian Embassy (if representative)`,
    `Contracts with partner companies`,
    `KYC and AML forms`,
  ],
  faq: [
    { question: `Which bank in Bulgaria is best for opening a bank account?`, answer: `We select banks based on the country of company registration, the residency of beneficiaries and directors, planned turnover, required currencies, and payment regions. The bank's reputation and fees are also taken into account. To find the most suitable option for your company, please contact our specialists.` },
    { question: `What are the requirements for opening a bank account in Bulgaria?`, answer: `To open a bank account in Bulgaria, it is necessary to complete and submit the bank's KYC and AML forms, the company's statutory documents, and the personal documents of directors and beneficiaries. The bank may additionally request contracts with partners and other information. To successfully open an account, key persons must undergo verification.` },
    { question: `What documents are required to open a bank account in Bulgaria?`, answer: `To open a bank account in Bulgaria, you must provide copies of personal documents of each director and shareholder, along with a package of corporate documents. The bank may also request copies of contracts with partners, the company's structure, and other documents.` },
    { question: `Can a bank account in Bulgaria be opened online?`, answer: `A bank account in Bulgaria can be opened with the personal presence of a company representative.` },
  ],
};

const OpenABankAccountInBulgariaPage = () => (
  <ServiceDetailPage
    slug="open-a-bank-account-in-bulgaria"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}

  />
);

export default OpenABankAccountInBulgariaPage;
export { OpenABankAccountInBulgariaPage };
