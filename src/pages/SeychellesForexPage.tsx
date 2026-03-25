import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { SeychellesForexHeroVisual } from "@/components/templates/heroVisuals";

// Source: service-texts.md | URL: /forex-license-seychelles
const PAGE_DATA = {
  title: `Forex License Seychelles`,
  description: `The most significant benefits of licensing a company in Seychelles include relatively low financial costs, quick processing of license applications in around 3 months, and a comparatively small required share capital of 50,000 USD. The jurisdiction also offers favorable taxation with a corporate tax rate of only 1.5% of annual income.`,
  sections: [
    {
      heading: `What are the advantages of a Seychelles financial license?`,
      body: `The most significant benefits of licensing a company in this jurisdiction include:\n\nrelatively low financial costs for company registration; quick processing of license applications — around 3 months; comparatively small required share capital — 50,000 USD; favorable taxation — only corporate tax is payable, with a rate of 1.5% of the company's annual income.`,
    },
    {
      heading: `Seychelles Financial License: Licensing Requirements`,
      body: `Company owners should consider that collecting the documents required for a license application may take a long time — up to 1–1.5 months. The exact list is determined individually in each case, depending on several factors. For example, whether the applicant is an individual or a legal entity, which specific license is requested, and so on. In many cases, it is more efficient to start collecting documents even before company registration to avoid losing time.\n\nA financial license in Seychelles is granted only on the basis of a written request submitted in the specific FSA form. This must be accompanied by several questionnaires containing personal details of all managing persons of the company, including shareholders, directors, and others.\n\nIt is important to note that there are two main reasons why a license may be refused. In particular, if at the time of application submission:\n\nthe required share capital has not been deposited; the state fee of 1,000 USD has not been paid.\n\nPlease note that regardless of the FSA's decision, the state fee is non-refundable. Therefore, to avoid wasting time, effort, and money, we recommend seeking assistance from our specialists. They will carefully handle the application process, collect all necessary documents, and take care of obtaining a Seychelles financial license so that you can start business operations as soon as possible.`,
    },
  ],
  requirements: [
    `Register a company in Seychelles`,
    `Rent an office in the jurisdiction`,
    `Deposit the required share capital of 50,000 USD`,
    `Pay the state fee of 1,000 USD`,
    `Prepare AML policy and compliance documents`,
    `Submit a written request using the FSA form`,
    `Provide personal details of all managing persons`,
    `Prepare technical documentation and business plan`,
  ],
  faq: [
    { question: `What are the requirements for obtaining a forex license in Seychelles?`, answer: `To obtain a forex license in Seychelles, you must register a company, rent an office, prepare policies, technical documentation, and other documents. After opening a bank account and depositing the share capital, you submit an application to the regulator. Once the license is obtained, the company must show business activity to avoid cancellation of the license.` },
    { question: `What documents are required to obtain a forex license in Seychelles?`, answer: `The documents required for a forex license in Seychelles include: company statutory documents, business plan, AML policy, terms of use, identity and experience confirmation of company members, and technical documentation.` },
    { question: `How long does it take to obtain a forex license in Seychelles?`, answer: `Obtaining a forex license in Seychelles can take several months. The timeframe depends on how quickly the documents are prepared and how long the regulator takes to review the application.` },
    { question: `How much does an investment license cost in Seychelles?`, answer: `The final cost of obtaining an investment license in Seychelles depends on various factors (the exact list of services, region of operation, etc.). To get an accurate price, please contact our specialists.` },
  ],
};

const SeychellesForexPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
    heroVisual={<SeychellesForexHeroVisual />}
  />
);

export default SeychellesForexPage;
export { SeychellesForexPage };
