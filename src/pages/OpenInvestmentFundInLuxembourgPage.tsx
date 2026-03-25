import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

const OpenInvestmentFundInLuxembourgPage = () => (
  <ServiceDetailPage
    title="Open an Investment Fund in Luxembourg"
    description="Luxembourg is the leading investment center in the EU and ranks second in the world after the United States, offering a well-developed legal framework that combines investor protection with flexibility. Investment funds registered here benefit from strong jurisdictional reputation, transparent taxation, and wide opportunities for operating across the EU and the European Economic Area."
    requirements={[
      "Own assets of at least EUR 1,250,000 within 12 months",
      "Custodian of assets appointed for the fund",
      "Fund manager with relevant experience",
      "Fund administrator in place",
      "Auditors engaged for the fund",
      "Business plan and internal policies prepared",
      "AML policy documentation",
    ]}
    faq={[
      { question: "What are the requirements for opening an investment fund in Luxembourg?", answer: "You need to prepare a business plan and policies, register a legal entity, open a bank account, contribute share capital, and confirm that the fund manager has sufficient experience." },
      { question: "What documents are required to open an investment fund in Luxembourg?", answer: "Typically you need to submit founders' personal documents, a draft investment agreement, fund rules and conditions, and an AML policy. The exact list depends on the fund type." },
      { question: "How long does it take to open an investment fund in Luxembourg?", answer: "The timeframe depends on the type of fund and usually takes several months." },
      { question: "How much does it cost to open an investment fund in Luxembourg?", answer: "The final cost depends on future investment directions, the type of participants, and other factors. Contact our specialists to learn the exact cost." },
    ]}
  />
);
export default OpenInvestmentFundInLuxembourgPage;
export { OpenInvestmentFundInLuxembourgPage };
