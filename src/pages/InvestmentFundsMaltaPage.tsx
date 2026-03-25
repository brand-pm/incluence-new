import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

const InvestmentFundsMaltaPage = () => (
  <ServiceDetailPage
    title="Registration of investment funds in Malta"
    description="Malta is an innovative and reputable financial services center, making it an ideal jurisdiction for registering investment funds aimed at EU investors. Since 1994, fund activities have been regulated by the Investment Services Act, providing a well-established legal framework."
    requirements={[
      "Business plan and fund policies prepared",
      "Registered legal entity for the fund",
      "Bank account opened with authorized capital",
      "Copies of founders' and directors' passports",
      "Confirmation of address for all founders",
      "Resumes of founders, directors, and AML officers",
      "Description of the fund's planned activities",
      "AML policy documentation",
    ]}
    faq={[
      { question: "What are the requirements for opening an investment fund in Malta?", answer: "You need to prepare a business plan and policies, register a legal entity, and if necessary open an account and deposit authorized capital." },
      { question: "What documents are required to open an investment fund in Malta?", answer: "You will need copies of passports, address confirmations and resumes of founders, directors, and AML officers, a description of the fund's activities, and an AML policy." },
      { question: "How long does it take to open an investment fund in Malta?", answer: "Opening an investment fund in Malta takes from half a year." },
      { question: "How much does it cost to open an investment fund in Malta?", answer: "The final cost depends on various factors such as the exact list of future services and region of work. Contact our specialists for exact pricing." },
    ]}
  />
);
export default InvestmentFundsMaltaPage;
export { InvestmentFundsMaltaPage };
