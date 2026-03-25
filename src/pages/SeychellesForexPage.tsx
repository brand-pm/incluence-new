import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

const SeychellesForexPage = () => (
  <ServiceDetailPage
    title="Forex License Seychelles"
    description="The most significant benefits of licensing a company in Seychelles include relatively low financial costs, quick processing of license applications in around 3 months, and a comparatively small required share capital of 50,000 USD. The jurisdiction also offers favorable taxation with a corporate tax rate of only 1.5% of annual income."
    requirements={[
      "Register a company in Seychelles",
      "Rent an office in the jurisdiction",
      "Deposit the required share capital of 50,000 USD",
      "Pay the state fee of 1,000 USD",
      "Prepare AML policy and compliance documents",
      "Submit a written request using the FSA form",
      "Provide personal details of all managing persons",
      "Prepare technical documentation and business plan",
    ]}
    faq={[
      {
        question: "What are the requirements for obtaining a forex license in Seychelles?",
        answer: "You must register a company, rent an office, prepare policies and technical documentation. After opening a bank account and depositing share capital, you submit an application to the regulator.",
      },
      {
        question: "What documents are required to obtain a forex license in Seychelles?",
        answer: "Required documents include company statutory documents, business plan, AML policy, terms of use, identity and experience confirmation of company members, and technical documentation.",
      },
      {
        question: "How long does it take to obtain a forex license in Seychelles?",
        answer: "Obtaining a forex license in Seychelles can take several months. The timeframe depends on how quickly documents are prepared and how long the regulator takes to review the application.",
      },
      {
        question: "How much does an investment license cost in Seychelles?",
        answer: "The final cost depends on various factors such as the exact list of services and region of operation. To get an accurate price, please contact our specialists.",
      },
    ]}
  />
);
export default SeychellesForexPage;
export { SeychellesForexPage };
