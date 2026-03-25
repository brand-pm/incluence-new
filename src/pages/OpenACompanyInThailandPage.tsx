import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-a-company-in-thailand
const PAGE_DATA = {
  title: `Open a Company in Thailand`,
  description: `How to Open a Company in Thailand: Features of the Registration Process scientific research; educational activities related to advanced technologies; licensing certain technologies, with the intention of introducing them to the market in the future.`,
  requirements: [
    `What is Required to Open a Company in Thailand`,
    `If you decide to register a company in Thailand, you will need to prepare a certain set of documents. The list may vary depending on several conditions, including the business sector. If, along with company registration, you also wish to open a bank account, you will need at least:`,
    `proof of residence and copies of passports of the director and shareholders; a list of several possible names for the future company; a brief description of the business model and activities`,
    `When opening a business in Thailand, keep in mind that you need at least one director and no fewer than three shareholders. There are no requirements regarding their residency`,
  ],
  faq: [
    { question: `How much does it cost to open a business in Thailand?`, answer: `The final cost of opening a business in Thailand depends on the type of activity, number of participants, and other factors. You can find out the exact cost of company registration in Thailand by contacting our specialists.` },
    { question: `Can a company in Thailand be registered online?`, answer: `A company in Thailand can be registered remotely via power of attorney or by visiting Thailand in person.` },
    { question: `Can a non-resident open a business in Thailand?`, answer: `A non-resident who is not under sanctions and not a citizen of a sanctioned country can open a business in Thailand.` },
    { question: `What documents are required to register a company in Thailand?`, answer: `To register a company in Thailand, you need to provide copies of passports and proof of address of the company’s participants.` },
  ],
};

const OpenACompanyInThailandPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenACompanyInThailandPage;
export { OpenACompanyInThailandPage };
