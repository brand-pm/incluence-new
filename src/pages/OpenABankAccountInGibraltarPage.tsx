import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";


// Source: service-texts.md | URL: /open-a-bank-account-in-gibraltar
const PAGE_DATA = {
  title: `Open a Bank Account in Gibraltar`,
  description: `Gibraltar is under the jurisdiction of the United Kingdom and pays special attention to the development of its banking sector. Non-residents and foreign companies can open accounts with EU deposit protection up to 100,000 euros.`,
  sections: [
    {
      heading: `How to Open a Bank Account in Gibraltar`,
      body: `The state of Gibraltar is under the jurisdiction of the United Kingdom. The government of this country pays special attention to the development of the banking sector, since this area is one of the sources of investment inflows and, therefore, an integral element of economic growth. Non-residents and foreign companies can open a bank account in Gibraltar. Businesses of all sizes take advantage of this opportunity because:\n\nClients of financial institutions are entitled to use the EU deposit protection system in the amount of 100,000 euros. The quality is guaranteed and a full range of banking services is offered, as banks are licensed and their activities are regulated by the Financial Services Commission.`,
    },
    {
      heading: `Where You Can Open a Bank Account in Gibraltar`,
      body: `Dozens of banks operate in this small state. The general procedure in most cases is the same:\nsubmission of documents in the prescribed form; review within 7 days; decision-making, payment of the minimum deposit if required; payment for account maintenance.\n\nWhere to open a bank account in Gibraltar? We recommend contacting the experts at Incluence Limited. Our specialists have experience working with financial institutions in this country and can help avoid refusals after submitting an application. Below are several banks working with non-residents in Gibraltar:\n\nIDT Financial Services Limited. A multinational financial company headquartered in the USA. Opening accounts in Gibraltar is a secondary activity; the main services are BIN sponsorship in the market and prepaid cards. Credit Suisse. Investments are the bank's main line of business. Clients are offered a wide range of services – from portfolio management to professional consulting. Banking products are designed for large corporate clients with assets starting at 400,000 GBP. Jyske Bank (Gibraltar) Limited. The bank's specialists focus on advising on investments in securities, investment funds, and different sectors. They also offer bank accounts in Gibraltar for small and medium-sized businesses, capital insurance, and issue Visa cards.\n\nWe also highlight Lloyds Bank International, which targets clients from Europe with an annual income of at least 50,000 GBP. Lombard Odier & Cie is distinguished by its premium high-quality service and extensive experience in financial asset management. You can get the full list of banks where you can open an account in Gibraltar, as well as their descriptions, from Incluence Limited experts.`,
    },
    {
      heading: `What Documents Are Required to Open a Bank Account in Gibraltar`,
      body: `To open corporate accounts, investors need to prepare:\nthe company's statutory documents; identity documents of shareholders, directors, and beneficiaries; proof of legality of funds and other information that may be requested on a case-by-case basis.\n\nContact us by filling out the online form or using the contact details on the website.`,
    },
  ],
  requirements: [
    `Company statutory documents`,
    `Identity documents of shareholders, directors, and beneficiaries`,
    `Proof of legality of funds`,
    `KYC and AML forms`,
    `In-person visit required`,
  ],
  faq: [
    { question: `What are the requirements for opening a bank account in Gibraltar?`, answer: `To successfully open a bank account in Gibraltar, the company must be registered in one of the countries supported by Gibraltar banks and have a good reputation. Its participants must not appear on sanctions lists. The company's field of activity must not contradict the bank's policy.` },
    { question: `Which bank in Gibraltar is best for opening an account?`, answer: `We select banks based on the country of company registration, the residency of beneficiaries and directors, planned turnover, required currencies, and payment regions. The bank's reputation and fees are also taken into account. To find the most suitable option for your company, please contact our specialists.` },
    { question: `How can a non-resident open a bank account in Gibraltar?`, answer: `To open a bank account in Gibraltar, it is necessary to complete and submit the bank's KYC and AML forms, the company's statutory documents, and the personal documents of directors and beneficiaries. The bank may additionally request contracts with partners and other information. To successfully open an account, key persons must undergo verification.` },
    { question: `Can a bank account in Gibraltar be opened online?`, answer: `You can only open a bank account in Gibraltar by visiting in person.` },
  ],
};

const OpenABankAccountInGibraltarPage = () => (
  <ServiceDetailPage
    slug="open-a-bank-account-in-gibraltar"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}

  />
);

export default OpenABankAccountInGibraltarPage;
export { OpenABankAccountInGibraltarPage };
