import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /buying-a-company-in-switzerland
const PAGE_DATA = {
  title: `Buying a Company in Switzerland`,
  description: `Which company to buy in Switzerland: advantages and nuances of the procedure If you decide to open a company “from scratch” or expand an existing business, achieving this goal may take a lot of effort and time.`,
  requirements: [
    `Ready-made company in Switzerland: purchase specifics`,
    `Regardless of which company you choose to acquire, a Swiss bank is required to check the new beneficial owners. Based on this, the bank will decide whether to continue working with the company or to close the current account. This decision cannot be influenced, but even in case of an unfavorable outcome, we will assist you with opening a new corporate account`,
    `The timeframe for this procedure varies and largely depends on the type of business and the particular bank. In some cases, new owners may be asked to provide additional documents, such as a business plan or proof of the legality of the source of funds`,
    `Which type of company can be bought in Switzerland`,
    `If you are aiming for long-term business activity, the following legal forms are available in Switzerland:`,
    `1. Public limited company (AG). Requires a capital of at least 100,000 CHF, at least 1 shareholder-resident and 1 director. This type of company allows for easy share transfers and provides a sufficient level of anonymity, which is attractive to certain groups of investors`,
    `2. Limited liability company (GmbH). Requires at least 20,000 CHF, at least 1 shareholder, and 1 director (the director must be a Swiss resident). The advantage of this form is the lower capital requirement, which is typically appealing to small business owners`,
    `3. General partnership. Requires at least 2 individuals. No minimum capital requirement is set by law. Buying such a company in Switzerland offers certain advantages, including flexibility in structuring business relationships, such as profit and share distribution`,
    `4. Sole proprietorship. Allows entrepreneurial activity without restrictions in business areas. A ready-made sole proprietorship in Switzerland can operate in any field, including trade, manufacturing, software development, etc. No minimum capital is required. The owner must be a resident of Switzerland`,
    `Why it is profitable to buy a ready-made company in Switzerland`,
  ],
  faq: [
    { question: `What documents are required to buy a business in Switzerland?`, answer: `To purchase a company in Switzerland, you must provide copies of the participants’ passports and proof of address. Completed registration forms including information on the source of funds are also required. Beneficiaries may be asked to provide conf` },
    { question: `How long does the process of buying a company in Switzerland take?`, answer: `Buying a company in Switzerland takes about 2–3 weeks.` },
    { question: `What taxes must be paid when buying a company in Switzerland?`, answer: `When buying a company in Switzerland, you only need to pay the registration fee. Tax obligations arise only after the company begins its activity or if the previous owner failed to pay taxes on prior activities.` },
    { question: `Can I buy a company in Switzerland online?`, answer: `Yes, a company in Switzerland can be transferred remotely through a power of attorney or in person.` },
  ],
};

const BuyingACompanyInSwitzerlandPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default BuyingACompanyInSwitzerlandPage;
export { BuyingACompanyInSwitzerlandPage };
