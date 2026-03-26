import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { HungaryCompanyVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /starting-a-business-in-hungary
const PAGE_DATA = {
  title: `Starting a business in Hungary`,
  description: `One of the best options for people wishing to open a company in Europe is to start a business in Hungary. The popularity is due to the low corporate tax, the central location in Europe, and the developed economic infrastructure.`,
  sections: [
    {
      heading: `Company registration in Hungary`,
      body: `One of the best options for people wishing to open a company in Europe is to start a business in Hungary. Has about 70 agreements on the avoidance of double taxation. The popularity of starting a business in Hungary is due to the low corporate tax, the central location in Europe, and the developed economic infrastructure.`,
    },
  ],
  faq: [
    { question: `What documents are required for the company's registration in Hungary?`, answer: `In order to open a company in Hungary you will need notarized copies of the passports of the company's participants, powers of attorney from shareholders, and registration forms. All documents must be in hard copies.` },
    { question: `How much does it cost to start a business in Hungary?`, answer: `Various factors affect the final cost of Hungary company registration. You can find out the exact cost of registering a company in Hungary by contacting our specialists.` },
    { question: `Is it possible to register a company remotely in Hungary?`, answer: `You can register a company in Hungary remotely by power of attorney or when visiting Hungary.` },
    { question: `How long does it take to register a company in Hungary?`, answer: `Registration of a company in Hungary can be completed in 2 weeks if all documents are prepared in advance and payment is made.` },
  ],
};

const StartingABusinessInHungaryPage = () => (
  <ServiceDetailPage
    slug="starting-a-business-in-hungary"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}

  />
);

export default StartingABusinessInHungaryPage;
export { StartingABusinessInHungaryPage };
