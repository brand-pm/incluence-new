import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";


// Source: service-texts.md | URL: /opening-an-account-in-barclays-bank
const PAGE_DATA = {
  title: `Opening an Account in Barclays Bank`,
  description: `A corporate client must prepare a package of documents to begin cooperation with Barclays Bank. The bank reviews documents within 1-2 months, and all documents must be notarized and translated.`,
  sections: [
    {
      heading: `How to Open an Account in Barclays Bank PLC`,
      body: `To begin cooperation, a corporate client must prepare a package of documents. The bank follows the "know your customer" principle and carefully reviews the client's activities, and may request additional documents beyond the mandatory list:\n\nRegistration and statutory documents with apostille. A certificate of good standing — for companies operating for more than 1 year. Minutes of the shareholders' meeting where the decision to appoint directors and open a bank account was made. Licenses granting the right to carry out business activities. Copies of documents confirming the identity and residence of responsible persons.\n\nBarclays Bank reviews documents within 1–2 months. All documents must be notarized and translated. The package must also include an application form issued by the bank. If approved, the client receives account details and access to account functionalities. Online banking codes are generated within one month after account activation. Current issues can be resolved with bank staff at any time.`,
    },
    {
      heading: `Professional Support in Opening an Account in Barclays Bank`,
      body: `Incluence will assist your company in opening an account in Barclays Bank. Our experts have extensive experience working with European banks, so our support will help you save considerable time. To receive an initial consultation, fill out the online form or contact us via the details provided on the website.`,
    },
    {
      heading: `Barclays Bank PLC: Services and Fees`,
      body: `Barclays Bank PLC offers the possibility to open a current or savings account with online banking management. Regular clients are also offered:\n\nissuance of bank cards; lending; insurance; various investment programs.\n\nCorporate clients of Barclays Bank, who are often interested in opening an account for business purposes, should consider the bank's tariffs in advance. Some service costs include:\n\naccount opening — from USD 600; initial deposit to activate the account — minimum USD 2,500; account maintenance — from USD 100 per year.`,
    },
  ],
  requirements: [
    `Registration and statutory documents with apostille`,
    `Certificate of Good Standing (for companies operating 1+ year)`,
    `Minutes of the shareholders' meeting on director appointment`,
    `Licenses granting the right to carry out business activities`,
    `Copies of identity and residence documents of responsible persons`,
    `Application form issued by the bank`,
  ],
  faq: [
    { question: `What is required to open an account in Barclays Bank?`, answer: `To open an account in Barclays Bank, you must complete and submit the bank's KYC and AML forms, the company's statutory documents, and personal documents of directors and beneficiaries. The bank may also request contracts with partners and other information. Key individuals must undergo verification for the account to be successfully opened.` },
    { question: `Can I open an account in Barclays Bank online?`, answer: `An account in Barclays Bank can only be opened with a personal visit to the bank.` },
    { question: `What is the cost of maintaining an account in Barclays Bank?`, answer: `You can check the current cost of account maintenance on the Barclays Bank website or by contacting our specialists.` },
    { question: `What is the timeframe for opening an account in Barclays Bank?`, answer: `The speed of opening an account depends on the company's specifics and how quickly responses are provided to the bank's questions. Typically, account opening takes about 2 months.` },
  ],
};

const OpeningAnAccountInBarclaysBankPage = () => (
  <ServiceDetailPage
    slug="opening-an-account-in-barclays-bank"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}

  />
);

export default OpeningAnAccountInBarclaysBankPage;
export { OpeningAnAccountInBarclaysBankPage };
