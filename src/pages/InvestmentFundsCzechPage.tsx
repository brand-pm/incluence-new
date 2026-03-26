import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";


// Source: service-texts.md | URL: /registration-of-investment-funds-in-czech
const PAGE_DATA = {
  title: `Registration of investment funds in Czech`,
  description: `The Czech Republic is a popular jurisdiction for establishing investment funds, offering economic and banking stability along with favorable tax conditions. Basic funds are subject to income tax at a 5% rate, while other fund types are taxed at 19%.`,
  sections: [
    {
      heading: `Czech Investment Funds`,
      body: `Today, businessmen are increasingly choosing the Czech Republic to establish an investment fund. It is a tool for implementing various business projects since it can help to improve the business reputation while paying minimal taxes. An investment fund in the Czech Republic offers businessmen a wide range of opportunities for doing business in the EU.\n\nBasic funds are subject to income tax at a 5% rate. The following projects can be included in this category:\n\nThose authorized to trade in a regulated market. Open-end mutual funds. Any funds that invest more than 90% of their capital in bonds, shares, etc.\n\nOther investment funds in the Czech Republic, whose activities differ from those described above, are taxed at the rate of 19%.\n\nThe Czech Republic is notable for its economic and banking stability. The creation of a fund in this jurisdiction is one of the most popular ways for business people to raise capital for other investment projects and strategies.`,
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
    { question: `What are the requirements for opening an investment fund in the Czech Republic?`, answer: `In order to create an investment fund in the Czech Republic, it is necessary to prepare business plan and policies, register a legal entity, if necessary, open an account and deposit authorized capital, confirm that the fund manager has sufficient experience. The Fund must approve the conditions for attracting participants. All new participants must be registered in accordance with the rules of the fund and under the legislation of the country of registration.` },
    { question: `What documents are required to open an investment fund in the Czech Republic?`, answer: `The exact list of documents for opening an investment fund in the Czech Republic depends on the type of fund. Usually it is necessary to submit personal documents of the founders, draft of investment agreement, rules and conditions of the fund, AML policy.` },
    { question: `How long does it take to open a fund for investment in the Czech Republic?`, answer: `The term for opening a fund in the Czech Republic depends on its type and usually takes several months.` },
    { question: `How much does it cost to open an investment fund in the Czech Republic?`, answer: `The final cost of opening an investment fund in the Czech Republic is influenced by the direction of future investments, the character of future participants and other factors. You can find out the exact cost of opening an investment fund in the Czech Republic by contacting our specialists.` },
  ],
};

const InvestmentFundsCzechPage = () => (
  <ServiceDetailPage
    slug="registration-of-investment-funds-in-czech"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}

  />
);

export default InvestmentFundsCzechPage;
export { InvestmentFundsCzechPage };
