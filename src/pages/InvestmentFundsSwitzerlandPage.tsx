import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

const InvestmentFundsSwitzerlandPage = () => (
  <ServiceDetailPage
    title="Registration of investment funds in Switzerland"
    description="Switzerland allows business owners to operate on a completely different level, preserving and increasing their capital through investment funds. Reliability, protection, and privacy of deposits are the key advantages of this jurisdiction."
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
      { question: "What are the requirements for opening an investment fund in Switzerland?", answer: "You need to prepare a business plan and policies, register a legal entity, open an account and deposit authorized capital, and confirm that the fund manager has sufficient experience." },
      { question: "What documents are required to open an investment fund in Switzerland?", answer: "The exact list depends on the fund type. Usually you need to submit founders' personal documents, a draft investment agreement, fund rules and conditions, and an AML policy." },
      { question: "How long does it take to open an investment fund in Switzerland?", answer: "The timeframe depends on the fund type and usually takes several months." },
      { question: "How much does it cost to open an investment fund in Switzerland?", answer: "Various factors affect the final cost. Contact our specialists to find out the exact cost of opening an investment fund in Switzerland." },
    ]}
  />
);
export default InvestmentFundsSwitzerlandPage;
export { InvestmentFundsSwitzerlandPage };
