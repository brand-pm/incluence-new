import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { MaltaCompanyVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /company-registration-in-malta
const PAGE_DATA = {
  title: `Company Registration in Malta`,
  description: `The Republic of Malta is an up-and-coming jurisdiction notable for legitimate ways to optimize taxation. Located on the trade routes between Europe, Africa, and Asia, the country has a very developed financial sector and maritime logistics business.`,
  sections: [
    {
      heading: `Start a business in Malta`,
      body: `The Republic of Malta is an up-and-coming jurisdiction notable for legitimate ways to optimize taxation. At the same time, the Maltese islands are located on the trade routes between Europe, Africa, and Asia. As a result, the country has a very developed financial sector as well as a maritime business in the field of logistics.`,
    },
  ],
  requirements: [
    `Copy of passport for each participant`,
    `Proof of address for each participant`,
    `Completed registration forms`,
    `Information about the source of funding`,
  ],
  faq: [
    { question: `How much does it cost to open a business in Malta?`, answer: `Various factors affect the final cost of the business formation in Malta. You can find out the exact cost of registering a company in Malta by contacting our specialists.` },
    { question: `How long does it take to register a company in Malta?`, answer: `Registration of a company in Malta takes up to 3 weeks.` },
    { question: `What documents are required to register a company in Malta?`, answer: `In order to register a company in Malta, you must submit a copy of passport and confirmation of the address of each company's participant. It is also necessary to submit completed registration forms, including information about the source of funding for the creation of the company. When registering, beneficiaries may be asked to confirm the origin of funds for the creation of a company.` },
    { question: `Is it possible to register a company remotely in Malta?`, answer: `You can register a company in Malta remotely by power of attorney or when visiting Malta.` },
  ],
};

const CompanyRegistrationInMaltaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
    heroVisual={<MaltaCompanyVisual />}

  />
);

export default CompanyRegistrationInMaltaPage;
export { CompanyRegistrationInMaltaPage };
