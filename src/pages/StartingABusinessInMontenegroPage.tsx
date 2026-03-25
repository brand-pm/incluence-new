import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /starting-a-business-in-montenegro
const PAGE_DATA = {
  title: `Starting a business in Montenegro`,
  description: `Montenegro is a country in southeastern Europe that attracts hundreds of thousands of tourists annually. It is the main candidate for joining the EU, and the prospect of successful business development here is extremely high.`,
  requirements: [
    `Copies of passport for company participants`,
    `Proof of address for company participants`,
    `Completed registration forms`,
    `Information about the source of funding`,
    `Registration fee payment`,
  ],
  faq: [
    { question: `How to open a business in Montenegro?`, answer: `Choose a company name that is free for registration, collect a package of documents, and pay the necessary fees. After registering, you need to open a bank account and possibly a merchant account.` },
    { question: `What taxes should I pay after registering a company in Montenegro?`, answer: `When registering a company in Montenegro, you only need to pay the registration fee. Obligations to pay taxes arise only after the start of the company's activities.` },
    { question: `What documents do I need to register a company in Montenegro?`, answer: `You must submit copies of passport and address confirmations of company participants, plus completed registration forms including information about the source of funding. Beneficiaries may be asked to confirm the origin of funds.` },
    { question: `Is it possible to register a company remotely in Montenegro?`, answer: `You can register a company in Montenegro remotely by power of attorney or when visiting Montenegro.` },
  ],
};

const StartingABusinessInMontenegroPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default StartingABusinessInMontenegroPage;
export { StartingABusinessInMontenegroPage };
