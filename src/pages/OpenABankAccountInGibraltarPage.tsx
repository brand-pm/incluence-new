import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-a-bank-account-in-gibraltar
const PAGE_DATA = {
  title: `Open a Bank Account in Gibraltar`,
  description: `Clients of financial institutions are entitled to use the EU deposit protection system in the amount of 100,000 euros. The quality is guaranteed and a full range of banking services is offered, as banks are licensed and their activities are regulated by the Financial Services Commission.`,
  requirements: [
    `What Documents Are Required to Open a Bank Account in Gibraltar`,
    `To open corporate accounts, investors need to prepare:`,
    `the company’s statutory documents; identity documents of shareholders, directors, and beneficiaries; proof of legality of funds and other information that may be requested on a case-by-case basis`,
    `Contact us by filling out the online form or using the contact details on the website`,
  ],
  faq: [
    { question: `What are the requirements for opening a bank account in Gibraltar?`, answer: `To successfully open a bank account in Gibraltar, the company must be registered in one of the countries supported by Gibraltar banks and have a good reputation. Its participants must not appear on sanctions lists. The company’s field of activity mus` },
    { question: `Which bank in Gibraltar is best for opening an account?`, answer: `We select banks based on the country of company registration, the residency of beneficiaries and directors, planned turnover, required currencies, and payment regions. The bank’s reputation and fees are also taken into account. To find the most suita` },
    { question: `How can a non-resident open a bank account in Gibraltar?`, answer: `To open a bank account in Gibraltar, it is necessary to complete and submit the bank’s KYC and AML forms, the company’s statutory documents, and the personal documents of directors and beneficiaries. The bank may additionally request contracts with p` },
    { question: `Can a bank account in Gibraltar be opened online?`, answer: `You can only open a bank account in Gibraltar by visiting in person.` },
  ],
};

const OpenABankAccountInGibraltarPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenABankAccountInGibraltarPage;
export { OpenABankAccountInGibraltarPage };
