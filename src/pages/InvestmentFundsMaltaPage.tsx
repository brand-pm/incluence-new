import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { MaltaFundVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /registration-of-investment-funds-in-malta
const PAGE_DATA = {
  title: `Registration of investment funds in Malta`,
  description: `Malta is an innovative and reputable financial services center, making it an ideal jurisdiction for registering investment funds aimed at EU investors. Since 1994, fund activities have been regulated by the Investment Services Act, providing a well-established legal framework.`,
  sections: [
    {
      heading: `Malta Investment Funds`,
      body: `If you want to create an investment fund aimed at investors from European Union countries, Malta could be the right jurisdiction to register. The island is known as an innovative and reputable financial services center, and business people seek to establish an investment fund here to grow their capital. Since 1994, the activity of such structures is regulated by the Investment Services Act.`,
    },
  ],
  requirements: [
    `Business plan and fund policies prepared`,
    `Registered legal entity for the fund`,
    `Bank account opened with authorized capital`,
    `Copies of founders' and directors' passports`,
    `Confirmation of address for all founders`,
    `Resumes of founders, directors, and AML officers`,
    `Description of the fund's planned activities`,
    `AML policy documentation`,
  ],
  faq: [
    { question: `What are the requirements for opening an investment fund in Malta?`, answer: `In order to create an investment fund in Malta, it is necessary to prepare business plan and policies, register a legal entity, if necessary, open an account and deposit authorized capital.` },
    { question: `What documents are required to open an investment fund in Malta?`, answer: `In order to register an investment fund in Malta, you will need: copies of passports, confirmation of the address and resumes of the founders, directors, AML officers; description of the activities of the future fund, AML policy and other documents. You can get the exact list of documents specifically for your fund from our specialists.` },
    { question: `How long will it take to open a fund for investment in Malta?`, answer: `Opening an investment fund takes from half a year.` },
    { question: `How much does it cost to open an investment fund in Malta?`, answer: `The final cost of opening an investment fund in Malta is influenced by various factors (the exact list of future services, the region of work, etc.). You can find out the exact cost of opening an investment fund in Malta by contacting our specialists.` },
  ],
};

const InvestmentFundsMaltaPage = () => (
  <ServiceDetailPage
    slug="registration-of-investment-funds-in-malta"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
    heroVisual={<MaltaFundVisual />}

  />
);

export default InvestmentFundsMaltaPage;
export { InvestmentFundsMaltaPage };
