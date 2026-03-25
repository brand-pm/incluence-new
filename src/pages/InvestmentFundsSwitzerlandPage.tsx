import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { SwitzerlandFundVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /registration-of-investment-funds-in-switzerland
const PAGE_DATA = {
  title: `Registration of investment funds in Switzerland`,
  description: `Switzerland allows business owners to operate on a completely different level, preserving and increasing their capital through investment funds. Reliability, protection, and privacy of deposits are the key advantages of this jurisdiction.`,
  sections: [
    {
      heading: `Investment funds in Switzerland`,
      body: `The opening of investment funds abroad is often of interest to those who already have a similar experience in other countries. Switzerland allows business people to start doing business on a completely different level, not only preserving but also increasing their capital. To achieve this goal, business owners often opt for this particular jurisdiction. Swiss funds are an excellent alternative to trusts — they allow for not only keeping assets but also increasing them.\n\nReliability, protection, and privacy of deposits are the key advantages of the jurisdiction. And although the Swiss investment fund registration procedure is somewhat complicated, the benefits that the business owner eventually receives fully outweigh this drawback.`,
    },
  ],
  requirements: [
    `Business plan and fund policies prepared`,
    `Registered legal entity for the fund`,
    `Bank account with deposited authorized capital`,
    `Fund manager with confirmed experience`,
    `Conditions for attracting participants approved`,
    `Personal documents of the founders`,
    `Draft investment agreement`,
    `Fund rules and conditions`,
    `AML policy documentation`,
  ],
  faq: [
    { question: `What are the requirements for opening an investment fund in Switzerland?`, answer: `In order to create an investment fund in Switzerland, it is necessary to prepare business plan and policies, register a legal entity, if necessary, open an account and deposit authorized capital, confirm that the fund manager has sufficient experience. The Fund must approve the conditions for attracting participants. All new participants must be registered in accordance with the rules of the fund and under the legislation of the country of registration.` },
    { question: `What documents are required to open an investment fund in Switzerland?`, answer: `The exact list of documents for opening an investment fund in Switzerland depends on the type of fund. Usually it is necessary to submit personal documents of the founders, draft of investment agreement, rules and conditions of the fund, AML policy.` },
    { question: `How long does it take to open a fund for investment in Switzerland?`, answer: `The term for opening a fund in Switzerland depends on its type and usually takes several months.` },
    { question: `How much does it cost to open an investment fund in Switzerland?`, answer: `Various factors affect the final cost of the final cost of opening an investment fund in Switzerland. You can find out the exact cost of opening an investment fund in Switzerland by contacting our specialists.` },
  ],
};

const InvestmentFundsSwitzerlandPage = () => (
  <ServiceDetailPage
    slug="registration-of-investment-funds-in-switzerland"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
    heroVisual={<SwitzerlandFundVisual />}

  />
);

export default InvestmentFundsSwitzerlandPage;
export { InvestmentFundsSwitzerlandPage };
