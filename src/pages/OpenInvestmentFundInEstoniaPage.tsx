import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

const OpenInvestmentFundInEstoniaPage = () => (
  <ServiceDetailPage
    title="Open an Investment Fund in Estonia"
    description="Since the Investment Funds Act came into force in 2017, Estonia's investment market has become significantly more attractive and competitive for investors. Entrepreneurs can open investment funds here to profit from a well-regulated structure aligned with EU Directive 2011/61/EU."
    requirements={[
      "At least 5 individuals in the fund structure",
      "Three members on the board of directors",
      "Two members on the management board",
      "Registered joint-stock company for the fund",
      "Corporate bank account with deposited share capital",
      "Securities account opened",
      "Appointed auditor",
      "License from the Financial Supervision Authority",
      "AML policy and internal policies prepared",
    ]}
    faq={[
      { question: "What are the requirements for opening an investment fund in Estonia?", answer: "You need to prepare a business plan and policies, register a legal entity, open an account and deposit share capital, and confirm the fund manager has sufficient experience." },
      { question: "What documents are required to open an investment fund in Estonia?", answer: "The exact list depends on the fund type. Typically you need founders' personal documents, a draft investment agreement, fund rules and conditions, and an AML policy." },
      { question: "How long does it take to open an investment fund in Estonia?", answer: "The timeframe depends on the type of fund and usually takes several months." },
      { question: "How much does it cost to open an investment fund in Estonia?", answer: "The cost depends on planned investment areas, participant type, and other factors. Contact our specialists to learn the exact cost." },
    ]}
  />
);
export default OpenInvestmentFundInEstoniaPage;
export { OpenInvestmentFundInEstoniaPage };
