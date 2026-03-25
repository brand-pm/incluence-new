import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

const InvestmentFundsCzechPage = () => (
  <ServiceDetailPage
    title="Registration of investment funds in Czech"
    description="The Czech Republic is a popular jurisdiction for establishing investment funds, offering economic and banking stability along with favorable tax conditions. Basic funds are subject to income tax at a 5% rate, while other fund types are taxed at 19%."
    requirements={[
      "Business plan and fund policies prepared",
      "Registered legal entity for the fund",
      "Bank account with deposited authorized capital",
      "Fund manager with confirmed experience",
      "Conditions for attracting participants approved",
      "Personal documents of the founders",
      "Draft investment agreement",
      "Fund rules and conditions",
      "AML policy documentation",
    ]}
    faq={[
      { question: "What are the requirements for opening an investment fund in the Czech Republic?", answer: "You need to prepare a business plan and policies, register a legal entity, open an account and deposit authorized capital, and confirm that the fund manager has sufficient experience." },
      { question: "What documents are required to open an investment fund in the Czech Republic?", answer: "The exact list depends on the fund type. Usually you need to submit founders' personal documents, a draft investment agreement, fund rules and conditions, and an AML policy." },
      { question: "How long does it take to open an investment fund in the Czech Republic?", answer: "The timeframe depends on the fund type and usually takes several months." },
      { question: "How much does it cost to open an investment fund in the Czech Republic?", answer: "The cost depends on future investment directions, participant type, and other factors. Contact our specialists for exact pricing." },
    ]}
  />
);
export default InvestmentFundsCzechPage;
export { InvestmentFundsCzechPage };
