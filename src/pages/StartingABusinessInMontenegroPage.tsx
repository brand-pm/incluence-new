import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { MontenegroCompanyVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /starting-a-business-in-montenegro
const PAGE_DATA = {
  title: `Starting a business in Montenegro`,
  description: `Montenegro is a country in southeastern Europe that attracts hundreds of thousands of tourists annually. It is the main candidate for joining the EU in the near future, and the prospect of successful business development here is extremely high.`,
  sections: [
    {
      heading: `Starting a business in Montenegro`,
      body: `Montenegro is a country in southeastern Europe that attracts hundreds of thousands of tourists annually. It is noteworthy that the locals understand both English and Russian. It is the main candidate for joining the EU in the near future, and although Montenegro gained independence only in 2006, the prospect of successful business development here is extremely high.`,
    },
  ],
  faq: [
    { question: `How to open a business in Montenegro?`, answer: `In order to register a business in Montenegro, you need to choose a name of the future company that is free for registration, collect a package of documents, and pay the necessary fees. After registering a company, you need to open a bank account. If the business involves accepting payments through the site, you should also open a merchant account.` },
    { question: `What taxes should I pay after registering a company in Montenegro?`, answer: `When registering a company in Montenegro, you only need to pay the registration fee. Obligations to pay taxes arise only after the start of the company's activities.` },
    { question: `What documents do I need to register a company in Montenegro?`, answer: `In order to register a company in Montenegro, you must submit copies of passport and confirmations of the address of company's participants. It is also necessary to submit completed registration forms, including information about the source of funding for the creation of the company. When registering, beneficiaries may be asked to confirm the origin of funds for the creation of a company.` },
    { question: `Is it possible to register a company remotely in Montenegro?`, answer: `You can register a company in Montenegro remotely by power of attorney or when visiting Montenegro.` },
  ],
};

const StartingABusinessInMontenegroPage = () => (
  <ServiceDetailPage
    slug="starting-a-business-in-montenegro"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
    heroVisual={<MontenegroCompanyVisual />}

  />
);

export default StartingABusinessInMontenegroPage;
export { StartingABusinessInMontenegroPage };
