import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-a-bank-account-in-turkey
const PAGE_DATA = {
  title: `Open a Bank Account in Turkey`,
  description: `The institution should have extensive experience. Check the bank’s reputation in advance. Find out in advance the terms of cooperation: account opening deadlines, minimum balance requirements, available account types, service costs, and possible benefits.`,
  requirements: [
    `Bank Account in Turkey: Requirements and Documents`,
    `Having a tax identification number is a mandatory requirement for opening a bank account in Turkey. It is issued both to citizens of the country and to non-residents conducting business activities. A foreign passport is also often required. Before opening a corporate account in a Turkish bank, note that the following documents may be needed:`,
    `a notarized copy of the shareholder(s)’ and director(s)’ passports; proof of residential address of the shareholder(s) and director(s); documents confirming the amount and establishment of the company’s authorized capital, notarized; proof of financial stability, such as contracts with partner companies`,
    `To better understand the process of opening a bank account in Turkey, let’s look at the main conditions of one of the leading local institutions:`,
    `Bank Name Personal Presence Registration Period Minimum Balance Requirements Ziraat Bank not required 2 months none Bank of Turkey not required from 7 business days from 1000 EUR Albaraka Bank required 3-4 weeks none Garanti Bank required 3-4 weeks none Türkiye Finans Bank required from 1 business day none`,
  ],
  faq: [
    { question: `Which bank in Turkey is best for opening a bank account?`, answer: `We select banks based on the company’s country of registration, the residency of beneficiaries and directors, planned turnovers, required currencies, and regions of payments. The bank’s reputation and tariffs are also taken into account. To choose th` },
    { question: `What are the conditions for opening a bank account in Turkey?`, answer: `To open a bank account in Turkey, it is necessary to complete and submit the bank’s KYC and AML forms, provide the company’s incorporation documents, and the personal documents of directors and beneficiaries during a personal visit. During the bank v` },
    { question: `How can a non-resident open a bank account in Turkey?`, answer: `Turkish banks open accounts for local companies with non-resident participants, as well as for foreign companies. To increase your chances of successfully opening an account in Turkey, it is recommended to seek professional assistance.` },
    { question: `Can a bank account in Turkey be opened online?`, answer: `A bank account in Turkey can be opened with the personal presence of the company’s representative.` },
  ],
};

const OpenABankAccountInTurkeyPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenABankAccountInTurkeyPage;
export { OpenABankAccountInTurkeyPage };
